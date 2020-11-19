const axios = require('axios');
const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);
var accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'; // Your Account SID from www.twilio.com/console
var authToken = 'your_auth_token';   // Your Auth Token from www.twilio.com/console

module.exports = {
    sendWhatsAppMsg
}


function sendWhatsAppMsg (phone){
    // const collection = await dbService.getCollection('user')
    // try {
    //     await collection.insertOne(user);
    //     return user;
    // } catch (err) {
    //     console.log(`ERROR: cannot insert user`)
    //     throw err;
    // }
    client.messages.create({
        body: 'Hello from Node',
        to: '+12345678901',  // Text this number
        from: '+12345678901' // From a valid Twilio number
    })
    .then((message) => console.log(message.sid));
}