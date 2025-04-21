const express = require ("express");
const router = express.Router();
const { getProfile, saveProfile } = require ("../controllers/profileController");
const protect = require ("../middleware/authMiddleware");

router.get ("/", protect, getProfile );
router.post ("/", protect, saveProfile );

module.exports = router;