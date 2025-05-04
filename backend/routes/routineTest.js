/*
const express = require('express');
const router = express.Router();
const Routine = require('../models/Routine');
const protect = require('../middleware/authMiddleware');

router.post('/test', async (req, res) => {
  try {
    const { day, startTime, endTime, activity, category } = req.body;

    const rutina = new Routine({
      day,
      startTime,
      endTime,
      activity,
      category
    });

    await rutina.save();
    res.status(201).json(rutina);
  } catch (err) {
    console.error('❌ Error al guardar rutina:', err.message);
    res.status(500).json({ msg: 'Error al guardar rutina' });
  }
});

module.exports = router; */