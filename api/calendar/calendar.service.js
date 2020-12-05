const axios = require('axios');

module.exports = {
    getCalendar,
    getAvailbleDailySlots,
    addToCalendar,
    addRecurrenceToCalendar,
    removeFromCalendar,
    getEventsFromCalendar
}

// // deeNailSalonTori@gmail.com 
const ACCOUNT_ID = '436912373'
const CALENDAR_ID = 'calendar_ZGVlbmFpbHNhbG9udG9yaUBnbWFpbC5jb20'
const TOKEN = "Bearer q2ubbY3c8T0UXYplJRWPJd3n9rkDL6"

// // AYAL'S CALENDAR
// const ACCOUNT_ID = '413361439'436912373
// const CALENDAR_ID = 'calendar_YXlhbG1pc2huQGdtYWlsLmNvbQ'
// const TOKEN = "Bearer mFzYTSGauAA4QGdG6rI9MtfvvfEZHo"

// BAR SECOND
// const ACCOUNT_ID = '416830154'
// const CALENDAR_ID = "calendar_YmFydmFyZm1hbjNAZ21haWwuY29t"
// const TOKEN = "Bearer Zz1lcWHR2WjThDJhiLrJ4fgJ8ZzoxU"

// BAR
// const ACCOUNT_ID = '416457905'
// const CALENDAR_ID = 'calendar_YmFydmFydGVzdEBnbWFpbC5jb20'
// const TOKEN = "Bearer gVTIuU0seE73kvJqfCyLS8uFYV3cwm"

async function getCalendar() {
    try {
        const res = await axios({
            method: 'get',
            url: 'https://api.kloudless.com/v1/accounts?enabled=True',
            headers: { Authorization: TOKEN }
        })
        return res.data.objects[0]
    } catch (err) {
        console.log(`ERROR: cannot find calendar`)
        throw err;
    }
}

async function getEventsFromCalendar({timeRange,owner}) {
    try {
        const res = await axios({
            method: 'get',
            url: `https://api.kloudless.com/v1/accounts/${owner.accountId}/cal/calendars/${owner.calendarId}/events?start=${timeRange.start}&end=${timeRange.end}`,
            headers: { Authorization: owner.token }
        })
        return res.data.objects
    } catch (err) {
        console.log(`ERROR: cannot get calendar events`)
        throw err;
    }
}

// routim
// async function getEventsFromCalendar(timeRangeAndIds) {
//     try {
//         const res = await axios({
//             method: 'get',
//             url: `https://api.kloudless.com/v1/accounts/${timeRangeAndIds.accountId}/cal/calendars/${timeRangeAndIds.calendarId}/events?start=${timeRangeAndIds.start}&end=${timeRangeAndIds.end}`,
//             headers: { Authorization: timeRangeAndIds.token }
//         })
//         return res.data.objects
//     } catch (err) {
//         console.log(`ERROR: cannot get calendar events`)
//         throw err;
//     }
// }

// async function addToCalendar(eventDetails) {
//     const { eventName, creatorName, creatorEmail, startTime, endTime } = eventDetails
//     try {
//         const event = await axios({
//             method: 'post',
//             url: `https://api.kloudless.com/v1/accounts/${ACCOUNT_ID}/cal/calendars/primary/events`,
//             headers: { Authorization: TOKEN, 'Content-Type': 'application/json' }
//             ,
//             data: JSON.stringify(
//                 {
//                     "name": `${creatorName} - ${eventName}`,
//                     "description": eventName,
//                     "start": startTime,
//                     "end": endTime,
//                     // "creator": {
//                     //     "name": creatorName,
//                     //     "email": creatorEmail
//                     // }
//                 })
//         })
//         return event.data;
//     } catch (err) {
//         console.log(`ERROR: cannot add event to calendar`)
//         throw err;
//     }
// }

// routim

async function addToCalendar(eventDetails) {
    const { eventName, creatorName, creatorEmail, startTime, endTime, owner } = eventDetails
    try {
        const event = await axios({
            method: 'post',
            url: `https://api.kloudless.com/v1/accounts/${owner.accountId}/cal/calendars/primary/events`,
            headers: { Authorization: owner.token, 'Content-Type': 'application/json' }
            ,
            data: JSON.stringify(
                {
                    "name": `${creatorName} - ${eventName}`,
                    "description": eventName,
                    "start": startTime,
                    "end": endTime,
                    // "creator": {
                    //     "name": creatorName,
                    //     "email": creatorEmail
                    // }
                })
        })
        return event.data;
    } catch (err) {
        console.log(`ERROR: cannot add event to calendar`)
        throw err;
    }
}

// add UNTIL option - UNTIL=19971224T000000Z  LINK https://icalendar.org/iCalendar-RFC-5545/3-8-5-3-recurrence-rule.html
// async function addRecurrenceToCalendar(eventDetails) {
//     console.log('eveveevent', eventDetails)
//     const { eventName, creatorName, startTime, endTime, recurrence} = eventDetails
//     try {
//         console.log('recurrencerecurrence', recurrence)
//         const event = await axios({
//             method: 'post',
//             url: `https://api.kloudless.com/v1/accounts/${ACCOUNT_ID}/cal/calendars/primary/events`,
//             headers: { Authorization: TOKEN, 'Content-Type': 'application/json' }
//             ,
//             data: JSON.stringify(
//                 {
//                     "name": `${creatorName} - ${eventName}`,
//                     "description": eventName,
//                     "start": startTime,
//                     "end": endTime,
//                     "recurrence": [{"rrule": `RRULE:FREQ=${recurrence.freq};COUNT=${recurrence.count}`}]
//                 })
//         })
//         return event.data;
//     } catch (err) {
//         console.log(`ERROR: cannot add event to calendar`)
//         throw err;
//     }
// }

// routim
async function addRecurrenceToCalendar(eventDetails) {
    console.log('eveveevent', eventDetails)
    const { eventName, creatorName, startTime, endTime, recurrence, token, accountId} = eventDetails
    try {
        console.log('recurrencerecurrence', recurrence)
        const event = await axios({
            method: 'post',
            url: `https://api.kloudless.com/v1/accounts/${accountId}/cal/calendars/primary/events`,
            headers: { Authorization: token, 'Content-Type': 'application/json' }
            ,
            data: JSON.stringify(
                {
                    "name": `${creatorName} - ${eventName}`,
                    "description": eventName,
                    "start": startTime,
                    "end": endTime,
                    "recurrence": [{"rrule": `RRULE:FREQ=${recurrence.freq};COUNT=${recurrence.count}`}]
                })
        })
        return event.data;
    } catch (err) {
        console.log(`ERROR: cannot add event to calendar`)
        throw err;
    }
}


// async function removeFromCalendar({ eventId }) {
//     try {
//         const res = await axios({
//             method: 'delete',
//             url: `https://api.kloudless.com/v1/accounts/${ACCOUNT_ID}/cal/calendars/${CALENDAR_ID}/events/${eventId}`,
//             headers: { Authorization: TOKEN }
//         })

//         console.log('eventID',eventId,'removed', res)
//     return true
//     } catch (err) {
//         console.log('not good',eventId,`ERROR: cannot remove event from calendar`)
//         throw err;
//     }
// }

// routim
async function removeFromCalendar({ accountId, calendarId, eventId, token }) {
    try {
        const res = await axios({
            method: 'delete',
            url: `https://api.kloudless.com/v1/accounts/${accountId}/cal/calendars/${calendarId}/events/${eventId}`,
            headers: { Authorization: token }
        })

        console.log('eventID',eventId,'removed', res)
    return true
    } catch (err) {
        console.log('not good',eventId,`ERROR: cannot remove event from calendar`)
        throw err;
    }
}


// if no time slots availble returns only the date 
// async function getAvailbleDailySlots(treatmentDetails) {
//     const { startTime, endtTime, duration } = treatmentDetails
//     try {
//         const res = await axios({
//             method: 'post',
//             url: `https://api.kloudless.com/v1/accounts/${ACCOUNT_ID}/cal/availability`,
//             headers: { Authorization: TOKEN, 'Content-Type': 'application/json' },
//             data: JSON.stringify({
//                 "meeting_duration": `PT${duration}`,
//                 "time_windows": [
//                     {
//                         "start": startTime,
//                         "end": endtTime,
//                     }
//                 ]
//             })
//         })
//         if (res.data.time_windows.length) return res.data.time_windows
//         // return just a string with the date which is needed for later
//         else return startTime
//     } catch (err) {
//         console.log(`ERROR: cannot get daily slots from calendar`)
//         throw err;
//     }
// }

// routim
// if no time slots availble returns only the date 
async function getAvailbleDailySlots(treatmentDetails) {
    const { startTime, endtTime, duration, owner } = treatmentDetails
    try {
        const res = await axios({
            method: 'post',
            url: `https://api.kloudless.com/v1/accounts/${owner.accountId}/cal/availability`,
            headers: { Authorization: owner.token, 'Content-Type': 'application/json' },
            data: JSON.stringify({
                "meeting_duration": `PT${duration}`,
                "time_windows": [
                    {
                        "start": startTime,
                        "end": endtTime,
                    }
                ]
            })
        })
        if (res.data.time_windows.length) return res.data.time_windows
        // return just a string with the date which is needed for later
        else return startTime
    } catch (err) {
        console.log(`ERROR: cannot get daily slots from calendar`)
        throw err;
    }
}

