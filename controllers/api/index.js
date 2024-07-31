const router = require('express').Router();
const memberRoutes = require('./memberRoutes');
const pastorRoutes = require('./pastorRoutes');


router.use('/members', memberRoutes);
router.use('/pastors', pastorRoutes);

module.exports = router;
