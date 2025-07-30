const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: String,
  description: String,
  theatre: String,
  showtimes: [
    {
      time: String, // e.g., "10:00 AM"
      availableSeats: [String] // e.g., ["A1", "A2", "B1", "B2"]
    }
  ]
});

module.exports = mongoose.model('Movie', movieSchema);
