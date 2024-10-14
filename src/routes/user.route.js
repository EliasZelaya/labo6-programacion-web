const { addUserController, showForm} = require('../controllers/user.controller');
const router = require('express').Router();

router.get('/', showForm);
router.post('/home', addUserController);

module.exports = router;