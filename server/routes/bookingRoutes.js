const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const generateTicketPDF = require('../utils/pdfGenerator');

// Ticket download route
router.get('/download/:bookingId', async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.bookingId).populate('movieId');
    if (!booking) return res.status(404).send('Booking not found');
    generateTicketPDF(booking, res);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;

