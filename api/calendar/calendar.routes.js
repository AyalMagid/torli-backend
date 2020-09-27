const express = require('express')
// const {requireAuth, requireAdmin} = require('../../middlewares/requireAuth.middleware')
// const {getCalendar, deleteCalendar, updateCalendar, addCalendar} = require('./calendar.controller')
const {getCalendar,addEvent,getEvent,removeEvent} = require('./calendar.controller')
const router = express.Router()


// router.get('/', getCalendar);
router.get('/:phone', getEvent);
router.post('/', addEvent);
router.delete('/:id', removeEvent);
// router.post('/', getEvent);
// router.put('/:id',updateCalendar)


module.exports = router