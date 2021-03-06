const express = require('express')
// const {requireAuth, requireAdmin} = require('../../middlewares/requireAuth.middleware')
// const {getCalendar, deleteCalendar, updateCalendar, addCalendar} = require('./calendar.controller')
const { getCalendar, addToCalendar, addRecurrenceToCalendar, removeFromCalendar, getAvailbleDailySlots, getEventsFromCalendar } = require('./calendar.controller')
const router = express.Router()

router.get('/', getCalendar);
// router.get('/:start/:end', getEventsFromCalendar);
// routim
// router.get('/events', getEventsFromCalendar);
router.post('/slots', getAvailbleDailySlots);
router.post('/events', getEventsFromCalendar);
router.post('/', addToCalendar);
router.post('/recurrence', addRecurrenceToCalendar);
router.delete('/', removeFromCalendar)
// router.post('/', addEvent);

module.exports = router

