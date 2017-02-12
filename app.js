const express = require('express');
const moment = require('moment');
const path = require('path');
const logger = require('morgan');

const app = express();
const port = process.env.PORT || 3000;
const apiV1 = require('./routes/apiv1');

app.use(logger('dev'));
app.use('/api/v1', apiV1);

app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next){
    res.status(404).json({
        'status' : 'Invalid path.'
    });
});

app.listen(port, function () {
    console.log('Server running on http://localhost:' + port);
})