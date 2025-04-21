const express = require ("express");
const router = express.Router();
const { createRoutine, getRoutines } = require ("../controllers/routineController");
const protect = require ("../middleware/authMiddleware");

// Crear una nueva rutina (necesita TOKEN)
router.post ("/", protect, createRoutine)
router.get ("/", protect, getRoutines);

module.exports = router;