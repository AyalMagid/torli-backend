const dbService = require('../../services/db.service')

module.exports = {
    createAd,
    updateAd,
    getAd
}

async function createAd() {
    const collection = await dbService.getCollection('advertise')
    let advertise = {
        name: 'popup',
        content: ''
    }
    try {
        advertise = await collection.insertOne(advertise)
        return advertise
    } catch (err) {
        console.log(`ERROR: creating advertise `)
        throw err;
    }
}


async function updateAd({ advertiseContent }) {
    const collection = await dbService.getCollection('advertise')
    try {
        collection.updateOne(
            { "name": "popup" },
            { $set: { "content": advertiseContent } }
        )
        return ad;
    } catch (err) {
        console.log(`ERROR: cannot update ad content`)
        throw err;
    }
}


async function getAd() {
    const collection = await dbService.getCollection('advertise')
    var advertise
    console.log('roni', collection);
    try {
        //assuming there is only one ad at the collection
        advertise = await collection.find({}).toArray();
        console.log('roni2', advertise);
        return advertise
    } catch (err) {
        console.log(`ERROR: cant find advertise`)
        throw err;
    }
}
