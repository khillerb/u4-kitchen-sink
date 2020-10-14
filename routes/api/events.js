const express = require('express');
const router = express.Router();
const eventsCtrl = require('../../controllers/events');

/*---------- Protected Routes ----------*/
router.use(require('../../config/auth'));

router.get('/', eventsCtrl.index)
router.post('/', eventsCtrl.create)
router.put('/:id')
router.delete('/:id', eventsCtrl.delete)


module.exports = router

