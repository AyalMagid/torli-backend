const express = require('express')
// const {requireAuth, requireAdmin} = require('../../middlewares/requireAuth.middleware')
// const {getCalendar, deleteCalendar, updateCalendar, addCalendar} = require('./calendar.controller')
const {addEvent,getEvent,removeEvent} = require('./event.controller')
const router = express.Router()

router.get('/:phone', getEvent);
router.post('/', addEvent);
router.delete('/:id', removeEvent);

module.exports = router