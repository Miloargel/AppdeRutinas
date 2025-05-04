const express = require ("express");
const router = express.Router();
const { createRoutine, getRoutines, updateRoutine, deleteRoutine } = require ("../controllers/routineController");
const protect = require ("../middleware/authMiddleware");

// Crear una nueva rutina (necesita TOKEN)
router.post ("/", protect, createRoutine);
router.get ("/", protect, getRoutines);
router.put ("/:id", protect, updateRoutine);
router.delete ("/:id", protect, deleteRoutine);

module.exports = router;