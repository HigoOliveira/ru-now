import express from 'express';
import passport from 'passport';
import config from '../../../config.js';
const router = express.Router();
import User from '../../models/User';

// Facebook authentication
router.get('/facebook', passport.authenticate('facebook', { session: false, scope: ['email', 'public_profile'] }));

router.get('/facebook/callback',
  passport.authenticate('facebook', { session: false, failureRedirect: config.facebookFail }),
  (req, res) => {
    const user = req.user
    console.log('Facebook callback req.user', req.user);
    res.redirect(`${config.facebookSuccess}?access_token=${user.access_token}&avatar=${user.avatar}&profileUrl=${user.profileUrl}&name=${user.name}&id={user.facebook.id}`);
  }
);

// Check for user info
router.post('/', passport.authenticate('bearer', { session: false }),
  (req, res) => {
    res.status(200).json(req.user);
  }
);

// Logout route
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect(config.logout);
});

module.exports = router;
