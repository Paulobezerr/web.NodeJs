const db = require('../models');

exports.getAll = async (req, res) => {
  try {
    const songs = await db.Song.findAll();
    res.json(songs);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.create = async (req, res) => {
  try {
    const song = await db.Song.create(req.body);
    res.json(song);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getOne = async (req, res) => {
  try {
    const song = await db.Song.findByPk(req.params.id);
    if (song) {
      res.json(song);
    } else {
      res.status(404).send({ message: 'Song not found' });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.update = async (req, res) => {
  try {
    const song = await db.Song.findByPk(req.params.id);
    if (song) {
      await song.update(req.body);
      res.json(song);
    } else {
      res.status(404).send({ message: 'Song not found' });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.delete = async (req, res) => {
  try {
    const song = await db.Song.findByPk(req.params.id);
    if (song) {
      await song.destroy();
      res.json({ message: 'Song deleted' });
    } else {
      res.status(404).send({ message: 'Song not found' });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};