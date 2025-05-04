const express = require ("express");
const router = express.Router();
const { getProfile, saveProfile, toggleFavorite, getFavorites } = require ("../controllers/profileController");
const protect = require ("../middleware/authMiddleware");


router.get ("/", protect, getProfile ); // /api/profile..
router.post ("/", protect, saveProfile ); // /api/profile..
router.post ("/favorites/:id", protect, toggleFavorite); // /api/profile..
router.get ("/favorites", protect, getFavorites); // /api/profile..

module.exports = router;