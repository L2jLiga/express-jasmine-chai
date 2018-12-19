'use strict';

const express = require('express');
Error.stackTraceLimit = 3;

const app = express();

app.get('/', (req, res) => {
    res.json({data: 'MAIN PAGE'}).end();
});

app.post('/', (req, res) => {
    req.pipe(res);
});

app.all('/*', (req, res, next) => next(new Error()));

require('./modules/error-handler')(app);

exports = module.exports = app.listen(5555);
