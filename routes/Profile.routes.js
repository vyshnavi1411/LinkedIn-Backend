const express = require('express');
const router = express.Router();
const { createProfile } = require('../controllers/Profile.controller');

// create a post route
router.post('/create-profile', createProfile);

module.exports = router;