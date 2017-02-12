const express = require('express');
const moment = require('moment');

const router = express.Router();

router.get('/:timestamp', function (req, res, next) {
    const ts = req.params.timestamp;
    const regex = /^\d+$/;
    var date;

    if (regex.test(ts)) { // It's a unix timestamp.
        date = moment(ts, 'X');
    } else { // Natural date or invalid date
        date = moment(ts, 'MMMM D, YYYY');
    }

    if (!date.isValid()) {
        console.log(2);
        return next(new Error('Invalid date.'));
    } else {
        return res.json({
            status: 'OK',
            unix: date.unix().toString(),
            natural: date.format('MMMM D, YYYY').toString(),
        });
    }

});

router.use(function (err, req, res, next) {
    res.json({
        status: 'Invalid date.'
    });
});



module.exports = router;