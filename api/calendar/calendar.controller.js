const calendarService = require('./calendar.service')
const logger = require('../../services/logger.service')

async function getCalendar(req, res) {
    const calendar =  await calendarService.getCalendar()
    res.send(calendar)
}

async function getAvailbleDailySlots (req, res) {
    const dailySlots =  await calendarService.getAvailbleDailySlots(req.body) 
    res.send(dailySlots)
}

async function addToCalendar (req, res) {
    const calendar =  await calendarService.addToCalendar(req.body) 
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
    removeFromCalendar
}