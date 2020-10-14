const express = require('express');
const router = express.Router();
const eventsCtrl = require('../../controllers/events');

/*---------- Protected Routes ----------*/
router.use(require('../../config/auth'));

router.post('/',eventsCtrl.create)

module.exports = router

