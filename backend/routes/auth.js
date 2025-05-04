const express = require("express");
const router = express.Router();
const { register, login } = require ("../controllers/authController");

router.post("/register", register); // /api/users...
router.post("/login", login); // /api/users...

module.exports = router;