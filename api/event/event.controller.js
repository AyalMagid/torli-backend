const eventService = require('./event.service')
const logger = require('../../services/logger.service')

async function getEvent(req, res) {
    const phone = req.params.phone
    const event =  await eventService.getEventByPhone(phone) 
    res.send(event)
}
async function addEvent(req, res) {
    const event =  await eventService.addEvent(req.body) 
    res.send(event)
}

async function removeEvent(req, res) {
    await eventService.removeEvent(req.params.id)
    res.end()
}

module.exports = {
    addEvent,
    getEvent,
    removeEvent
}