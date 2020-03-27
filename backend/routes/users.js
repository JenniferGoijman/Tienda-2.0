const router = require('express').Router();
const UserController = require('../controllers/UserController');
const {authentication,isAdmin} = require('../middleware/authentication.js')
router.post('/register',UserController.register);
router.post('/login',UserController.login);
router.get('/info',authentication, UserController.getInfo);

module.exports = router