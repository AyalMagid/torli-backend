const express = require('express')
// const {requireAuth, requireAdmin} = require('../../middlewares/requireAuth.middleware')
// const {getCalendar, deleteCalendar, updateCalendar, addCalendar} = require('./calendar.controller')
const { addEvent, getEvent, removeEvent} = require('./event.controller')
const router = express.Router()
//get phone or calendar event id and return mongo event
router.get('/:phoneOrId', getEvent);
router.post('/', addEvent);
router.delete('/:id', removeEvent);

module.exports = router

  