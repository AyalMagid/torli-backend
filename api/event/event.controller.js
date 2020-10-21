const eventService = require('./event.service')
const logger = require('../../services/logger.service')

async function getEvent(req, res) {
    const phoneOrId = req.params.phoneOrId
    const event =  await eventService.getEventByPhoneOrId(phoneOrId) 
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
    removeEvent,
}