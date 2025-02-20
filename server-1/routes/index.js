const express = require('express');
const router = express.Router(); // Opretter en ny router-instans
const pageController = require('../controllers/pageController');

// Definerer ruter
router.get('/', pageController.indexPage);
router.get('/:filename', pageController.dynamicPage); // Dynamisk rute for alle filer

module.exports = router; // Eksporterer routeren, så den kan bruges i `server.js`
