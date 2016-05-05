const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const router = express.Router();
const FacebookStrategy = require('passport-facebook').Strategy;
const BearerStrategy = require('passport-http-bearer').Strategy;

const User = mongoose.model('User', {
  name: String,
  email: String,
  profileUrl: String,
  avatar: String,
  provider: String,
  facebook: {
    name: String,
    id: String
  }
})



const authMiddlewares = (app, config, redis) => {
  // Initialize passport
  app.use(passport.initialize());

  // Setup BearerStrategy for token auth
  passport.use(new BearerStrategy((token, done) => {
    redis.get(token, (err, user)  => {
      console.log('UserId from redis: ', user);
      if(err) { return done(err) }
      if(!user) { return done(null, false) }
      return done(null, user, { scope: 'all' })
    });
  }));

  // Setup FacebookStrategy
  passport.use(new FacebookStrategy({
      clientID: config.clientID,
      clientSecret: config.clientSecret,
      callbackURL: config.facebookCallback,
      profileFields: ['id', 'displayName', 'picture', 'email', 'first_name', 'profileUrl']
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ 'facebook.id': profile.id }, (err, user) => {
        if (err) {
          return done(err);
        }
        //No user was found... so create a new user with values from Facebook (all the profile. stuff)
        if (!user) {
          user = new User({
            name: profile.name.givenName,
            email: profile.emails[0].value,
            profileUrl: profile.profileUrl,
            avatar: profile.photos[0].value,
            provider: 'facebook',
            //now in the future searching on User.findOne({'facebook.id': profile.id } will match because of this next line
            facebook: profile._json
          });
          user.save((err) => {
            redis.set(accessToken, profile.id, (err) => {
              if (err) console.log(err);
            })
            if (err) console.log(err);
            user.access_token = accessToken;
            return done(err, user);
          });
        } else {
          //found user. Return
          user.access_token = accessToken;
          console.log('-----------------------------');
          console.log("User is logged: ", user);
          console.log('-----------------------------');
          return done(err, user);
        }
      });
    }
  ));

}

module.exports = (config, redis) => {
  const isProd = process.env.NODE_ENV === 'production';

  const app = express();
  authMiddlewares(app, config, redis);
  return app;
};
