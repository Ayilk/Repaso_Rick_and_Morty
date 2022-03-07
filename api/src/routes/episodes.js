const { Router } = require('express');
const { episodeController } = require('../controllers/episodes');
const router = Router();

router.get('/', episodeController.getAll);
router.get('/:id', episodeController.getById);
router.post('/', episodeController.add)
router.put('/:id', episodeController.update)
router.delete('/:id', episodeController.delete)

module.exports = router;