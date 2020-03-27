const router = require('express').Router();
const ProductController = require('../controllers/ProductController.js');

router.get('/', ProductController.getAll);
router.get('/:productId', ProductController.getByPK);
router.get('/byQuery/:query', ProductController.getByQuery);
router.get('/category/:categoryId', ProductController.getByCategory);
router.post('/newProduct', ProductController.insert);
router.put('/:id', ProductController.modify);
router.delete('/:id', ProductController.delete);

module.exports = router;