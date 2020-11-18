const axios = require('axios');
const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    addEvent,
    getEventByPhoneOrId,
    removeEvent,
    getRecurrenceEventBySubStrId
}

async function addEvent(event) {
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
    const collection = await dbService.getCollection('event')
    try {
        await collection.deleteOne({ "_id": ObjectId(_id) })
    } catch (err) {
        console.log(`ERROR: cannot remove event ${_id}`)
        throw err;
    }
}

async function getEventByPhoneOrId(phoneOrId) {
    const collection = await dbService.getCollection('event')
    let event
    try {
        if (phoneOrId.length > 11) {
            event = await collection.findOne({ "eventId": phoneOrId })
        } else {
            event = await collection.find({ "phone": phoneOrId }).toArray()
        }
        return event
    } catch (err) {
        console.log(`ERROR: cant find event by the phone - ${_id}`)
        throw err;
    }
}

async function getRecurrenceEventBySubStrId(subStrId) {
    const collection = await dbService.getCollection('event')
    let event
    try {
        // db.test.find({A: {$regex: 'Star Wars'}})
            event = await collection.findOne({eventId: {$regex: subStrId}})
            console.log('fdsfdsfsfs', event)
        return event
    } catch (err) {
        console.log(`ERROR: cant find event by the subStr - ${subStrId}`)
        throw err;
    }
}
