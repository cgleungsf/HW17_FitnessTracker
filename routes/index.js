const router = require('express').Router();

const apiRoutes = require('./apiRoutes');
const htmlRoutes = require('./htmlRoutes');

// Sets up /api
router.use('/api', apiRoutes);

// Sets up /
router.use('/', htmlRoutes);

module.exports = router;

