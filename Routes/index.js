const express = require('express');
const router = express.Router();
const artistController = require('../controllers/artistController');
const songController = require('../controllers/songController');

// Artist routes
router.get('/artists', artistController.getAll);
router.post('/artists', artistController.create);
router.get('/artists/:id', artistController.getOne);
router.put('/artists/:id', artistController.update);
router.delete('/artists/:id', artistController.delete);

// Song routes
router.get('/songs', songController.getAll);
router.post('/songs', songController.create);
router.get('/songs/:id', songController.getOne);
router.put('/songs/:id', songController.update);
router.delete('/songs/:id', songController.delete);

module.exports = router;

