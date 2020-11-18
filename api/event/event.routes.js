const express = require('express')
// const {requireAuth, requireAdmin} = require('../../middlewares/requireAuth.middleware')
// const {getCalendar, deleteCalendar, updateCalendar, addCalendar} = require('./calendar.controller')
const { addEvent, getEvent, getRecurrenceEventBySubStrId, removeEvent} = require('./event.controller')
const router = express.Router()
//get phone or calendar event id and return mongo event
router.get('/:phoneOrId', getEvent);
router.get('/reccurence/:subStrId', getRecurrenceEventBySubStrId);
router.post('/', addEvent);
router.delete('/:id', removeEvent);

module.exports = router

  