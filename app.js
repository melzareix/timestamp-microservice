const express = require('express');
const moment = require('moment');
const path = require('path');

const app = express();
const port = process.env.port || 3000;

app.listen(port, function () {
    console.log('Server running on http://localhost:' + port);
})