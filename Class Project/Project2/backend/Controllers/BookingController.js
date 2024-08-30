const Booking = require('../Models/booking');

const createBooking = async (req, res) => {
    console.log(req.body);
    try {
        const booking = new Booking(req.body);
        await booking.save();
        res.status(201).send({ message: 'Booking saved successfully', booking });
    } catch (error) {
        res.status(500).send({ message: 'Failed to save booking', error });
    }
};

module.exports = {
    createBooking,
};
