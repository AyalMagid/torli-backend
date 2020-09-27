const axios = require('axios');
const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    getCalendar,
    addEvent,
    getEventByPhone,
    removeEvent
}

async function getCalendar() {
    const calendarId = '413361439'
    try {
        const calendar = await axios.get(`https://api.kloudless.com/v1/accounts/${calendarId}/cal/calendars`)
        return calendar.objects[0]
    } catch (err) {
            console.log(`ERROR: cannot find calendar`)
        throw err;
    }
}

async function addEvent (event){
    const collection = await dbService.getCollection('event')
    try {
        await collection.insertOne(event);
        return event;
    } catch (err) {
        console.log(`ERROR: cannot insert event`)
        throw err;
    }
}

async function removeEvent(_id) {
    console.log('be id',_id)
    const collection = await dbService.getCollection('event')
    try {
        await collection.deleteOne({"_id":ObjectId(_id)})
        console.log('delete event from DB',_id);
    } catch (err) {
        console.log(`ERROR: cannot remove event ${_id}`)
        throw err;
    }
}

async function getEventByPhone(phone) {
    console.log('this is the phone', phone)
    const collection = await dbService.getCollection('event')
    try {
        const event = await collection.find({"phone":phone}).toArray()
        console.log(event)
        return event
    } catch (err) {
        console.log(`ERROR: cant find event by the phone - ${_id}`)
        throw err;
    }
}
