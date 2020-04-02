const router = require('express').Router();
const CategoryController = require('../controllers/CategoryController.js');

router.get('/', CategoryController.getAll);
router.get('/:categoryId', CategoryController.getByPK);
router.get('/byQuery/:query', CategoryController.getByQuery);
router.post('/', CategoryController.insert)
router.put('/:id', CategoryController.modify);
router.delete('/:id', CategoryController.delete);

module.exports = router;