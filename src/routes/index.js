const express = require('express');
const countryRouter = require('./country.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/country', countryRouter);


module.exports = router;