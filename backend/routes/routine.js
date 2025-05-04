const express = require ("express");
const router = express.Router();
const { createRoutine, getRoutines, updateRoutine, deleteRoutine, toggleFavorite, getNextRoutine  } = require ("../controllers/routineController");
const protect = require ("../middleware/authMiddleware");

// Crear una nueva rutina (necesita TOKEN)
router.post ("/", protect, createRoutine); // /api/routine..
router.get ("/", protect, getRoutines); // /api/routine..
router.put ("/:id", protect, updateRoutine); // /api/routine..
router.delete ("/:id", protect, deleteRoutine); // /api/routine..
router.patch("/:id/favorite", protect, toggleFavorite); // /api/routine..

module.exports = router;