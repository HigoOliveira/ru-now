/* eslint consistent-return:0 */

const express = require('express');
const logger = require('./logger');
const config = require('../config');
const frontend = require('./middlewares/frontendMiddleware');
const auth = require('./middlewares/authMiddleware');
// Databases
const Redis = require('ioredis');
const redis = new Redis(`redis://${config.redis}`);
const mongoose = require('mongoose');
mongoose.connect(`mongodb://${config.mongodb}`);

const isDev = process.env.NODE_ENV !== 'production';

const app = express();

// If you need a backend, e.g. an API, add your custom backend-specific middleware here
app.use(auth(config, redis));
const router = require('./router')(app);


// Initialize frontend middleware that will serve your JS app
const webpackConfig = isDev
  ? require('../webpack.config')
  : require('../webpack.config.prod');

app.use(frontend(webpackConfig));

const port = process.env.PORT || 3000;

// Start your app.
app.listen(port, (err) => {
  if (err) {
    return logger.error(err);
  }
  if (isDev) {
    logger.appStarted(port);
  } else {
    console.log("Production server running on port:", port);
  }
});
