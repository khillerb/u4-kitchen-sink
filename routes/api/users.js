const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/users');

/*---------- Public Routes ----------*/
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);


/*---------- Protected Routes ----------*/
router.use(require('../../config/auth'));
router.post('/ingredients', usersCtrl.createIngredient)
router.delete('/ingredients', usersCtrl.deleteIngredient)
router.delete('/:id', usersCtrl.deleteUser)
router.get('/ingredients', usersCtrl.indexIngredient)
router.get('/', usersCtrl.userIndex)





module.exports = router;