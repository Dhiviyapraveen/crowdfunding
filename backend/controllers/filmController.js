const Film = require('../models/Film');

exports.addFilm = async (req, res) => {
  try {
    const { title, description, image } = req.body;
    const newFilm = new Film({ title, description, image });
    await newFilm.save();
    res.status(201).json({ msg: "Film added successfully", film: newFilm });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllFilms = async (req, res) => {
  const films = await Film.find();
  res.json(films);
};

exports.getFilmById = async (req, res) => {
  const film = await Film.findById(req.params.id);
  res.json(film);
};

exports.contributeToFilm = async (req, res) => {
  const film = await Film.findById(req.params.id);
  film.contributions.push({ user: req.user.id, amount: req.body.amount });
  await film.save();
  res.json({ msg: 'Contribution successful' });
};
