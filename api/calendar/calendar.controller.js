const calendarService = require('./calendar.service')
const logger = require('../../services/logger.service')

async function getCalendar(req, res) {
    const calendar =  await calendarService.getCalendar()
    res.send(calendar)
}

async function getEventsFromCalendar(req, res) {
    const events =  await calendarService.getEventsFromCalendar(req.params)
    res.send(events)
}

async function getAvailbleDailySlots (req, res) {
    const dailySlots =  await calendarService.getAvailbleDailySlots(req.body) 
    console.log('dailyslotssss',dailySlots)
    res.send(dailySlots)
}

async function addToCalendar (req, res) {
    const calendar =  await calendarService.addToCalendar(req.body) 
    res.send(calendar)
}

async function addRecurrenceToCalendar (req, res) {
    const calendar =  await calendarService.addRecurrenceToCalendar(req.body) 
    res.send(calendar)
}

async function removeFromCalendar (req, res) {
    const calendar =  await calendarService.removeFromCalendar(req.body) 
    res.send(calendar)
}

module.exports = {
    getCalendar,
    getAvailbleDailySlots,
    addToCalendar,
    addRecurrenceToCalendar,
    removeFromCalendar,
    getEventsFromCalendar
}