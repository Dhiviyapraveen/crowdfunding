const express = require('express');
const router = express.Router();
const { getAllFilms, getFilmById, contributeToFilm, addFilm } = require('../controllers/filmController');
const auth = require('../middleware/authMiddleware');

// Public Routes
router.get('/', getAllFilms);
router.get('/:id', getFilmById);

// Protected Routes
router.post('/add', auth, addFilm); // ✅ New route to add film
router.post('/:id/contribute', auth, contributeToFilm);

module.exports = router;
