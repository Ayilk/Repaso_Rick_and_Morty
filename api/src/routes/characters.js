const { Router } = require('express');
const { characterController } = require('../controllers/characters');
const router = Router();

router.get('/', characterController.getAll);
router.get('/:id', characterController.getById);
router.post('/', characterController.add)
router.post(
    '/:characterId/episode/:episodeId', 
    characterController.addEpisodeToCharacter)
router.put('/:id', characterController.update)
router.delete('/:id', characterController.delete)

module.exports = router;

