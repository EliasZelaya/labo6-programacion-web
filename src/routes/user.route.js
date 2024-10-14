const { addUserController, showForm, showUsersController} = require('../controllers/user.controller');
const router = require('express').Router();

router.get('/', showForm);
router.post('/home', addUserController);
router.get('/allUsers', showUsersController);

module.exports = router;