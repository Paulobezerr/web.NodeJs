// controllers/artistController.js
const db = require('../models');

exports.getAll = async (req, res) => {
  try {
    const artists = await db.Artist.findAll();
    res.json(artists);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.create = async (req, res) => {
  try {
    const artist = await db.Artist.create(req.body);
    res.json(artist);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getOne = async (req, res) => {
  try {
    const artist = await db.Artist.findByPk(req.params.id);
    if (artist) {
      res.json(artist);
    } else {
      res.status(404).send({ message: 'Artist not found' });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.update = async (req, res) => {
  try {
    const artist = await db.Artist.findByPk(req.params.id);
    if (artist) {
      await artist.update(req.body);
      res.json(artist);
    } else {
      res.status(404).send({ message: 'Artist not found' });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.delete = async (req, res) => {
  try {
    const artist = await db.Artist.findByPk(req.params.id);
    if (artist) {
      await artist.destroy();
      res.json({ message: 'Artist deleted' });
    } else {
      res.status(404).send({ message: 'Artist not found' });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
