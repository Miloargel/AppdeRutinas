const express = require ("express");
const router = express.Router();
const { getProfile, saveProfile, toggleFavorite, getFavorites } = require ("../controllers/profileController");
const protect = require ("../middleware/authMiddleware");


router.get ("/", protect, getProfile );
router.post ("/", protect, saveProfile );
router.post ("/favorites/:id", protect, toggleFavorite);
router.get ("/favorites", protect, getFavorites);

module.exports = router;