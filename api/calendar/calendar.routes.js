const express = require('express')
// const {requireAuth, requireAdmin} = require('../../middlewares/requireAuth.middleware')
// const {getCalendar, deleteCalendar, updateCalendar, addCalendar} = require('./calendar.controller')
const {getCalendar, addToCalendar, removeFromCalendar, getAvailbleDailySlots } = require('./calendar.controller')
const router = express.Router()

router.get('/', getCalendar);
router.post('/slots', getAvailbleDailySlots);
router.post('/', addToCalendar);
router.delete('/', removeFromCalendar)
// router.post('/', addEvent);

module.exports = router