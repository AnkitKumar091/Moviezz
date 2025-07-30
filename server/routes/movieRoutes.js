const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

// @route GET /api/movies
// @desc Get all movies
router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// @route POST /api/movies
// @desc Add a new movie
router.post('/', async (req, res) => {
  try {
    const { title, description, releaseDate, genre, duration } = req.body;
    const movie = new Movie({ title, description, releaseDate, genre, duration });
    await movie.save();
    res.status(201).json(movie);
  } catch (err) {
    res.status(400).json({ message: 'Invalid movie data' });
  }
});

module.exports = router;

