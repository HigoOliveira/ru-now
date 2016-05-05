module.exports = (app) => {
    app.use('/api/line', require('./routes/line'));
    app.use('/api/auth', require('./routes/auth'));
    app.use('/api/meat', require('./routes/meat'));
};
