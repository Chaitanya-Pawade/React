const express = require('express');
const { createBooking } = require('../Controllers/BookingController');

const router = express.Router();

router.post('/bookings', createBooking);

module.exports = router;
