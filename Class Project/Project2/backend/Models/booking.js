const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    movie: Object,
    selectedSeats: [String],
    totalPrice: Number,
    city: String,
    theatre: String,
    showTime: String,
    date: String,
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
