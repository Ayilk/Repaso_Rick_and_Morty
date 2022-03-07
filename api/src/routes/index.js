const {Router} = require('express');

const CharacterRoutes = require('./characters');
const EpisodesRoutes = require('./episodes');

const router = Router();

router.use('/characters', CharacterRoutes);
router.use('/episodes', EpisodesRoutes);

module.exports = router;