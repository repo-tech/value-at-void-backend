const express = require('express');
const { signup, login, profileSetup } = require('../controllers/employerController');
const router = express.Router();

router.put('/profile', profileSetup);

module.exports = router;