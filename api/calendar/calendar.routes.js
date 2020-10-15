const express = require('express')
// const {requireAuth, requireAdmin} = require('../../middlewares/requireAuth.middleware')
// const {getCalendar, deleteCalendar, updateCalendar, addCalendar} = require('./calendar.controller')
const { getCalendar, addToCalendar, removeFromCalendar, getAvailbleDailySlots, getEventsFromCalendar } = require('./calendar.controller')
const router = express.Router()

router.get('/', getCalendar);
router.get('/:start/:end', getEventsFromCalendar);
router.post('/slots', getAvailbleDailySlots);
router.post('/', addToCalendar);
router.delete('/', removeFromCalendar)
// router.post('/', addEvent);

module.exports = router

