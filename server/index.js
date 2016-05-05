// Express
const express = require('express');
const logger = require('./logger');
const config = require('../config');
// Middlewares personalizados
const frontend = require('./middlewares/frontendMiddleware');
const auth = require('./middlewares/authMiddleware');
// Banco de dados
const Redis = require('ioredis');
const redis = new Redis(`redis://${config.redis}`);
const mongoose = require('mongoose');
mongoose.connect(`mongodb://${config.mongodb}`);
// Configurações
const isDev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const app = express();
app.use(auth(config, redis));
// Serve as rotas da API
const router = require('./router')(app);
// Serve o aplicativo em React
const webpackConfig = isDev
  ? require('../webpack.config')
  : require('../webpack.config.prod');
app.use(frontend(webpackConfig));
// Mensagem caso em produção
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
