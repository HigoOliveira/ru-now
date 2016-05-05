module.exports = (app) => {
    app.use('/api/line', require('./routes/line'));
    app.use('/api/auth', require('./routes/auth'));
};
