const dbService = require('../../services/db.service')

module.exports = {
    createAd,
    updateAd,
    toggleAdMode,
    getAd
}

// routim
async function createAd(workPlace) {
    const collection = await dbService.getCollection('advertise')
    let advertise = {
        name: 'popup',
        workPlace,
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


// async function createAd() {
//     const collection = await dbService.getCollection('advertise')
//     let advertise = {
//         name: 'popup',
//         content: ''
//     }
//     try {
//         advertise = await collection.insertOne(advertise)
//         return advertise
//     } catch (err) {
//         console.log(`ERROR: creating advertise `)
//         throw err;
//     }
// }


// async function updateAd(contentInObj) {
//     const collection = await dbService.getCollection('advertise')
//     try {
//         collection.updateOne(
//             { "name": "popup" },
//             { $set: { "content": contentInObj.advertiseContent } }
//         )
//         return contentInObj;
//     } catch (err) {
//         console.log(`ERROR: cannot update ad content`)
//         throw err;
//     }
// }

// routim
async function updateAd(advertise) {
    const collection = await dbService.getCollection('advertise')
    try {
        collection.updateOne(
            { "workPlace": advertise.workPlace },
            { $set: { "content": advertise.advertiseContent } }
        )
        console.log('advertise service',advertise)
        return advertise;
    } catch (err) {
        console.log(`ERROR: cannot update ad content`)
        throw err;
    }
}

async function toggleAdMode(modeInObj) {
    const collection = await dbService.getCollection('advertise')
    try {
        collection.updateOne(
            { "name": "popup" },
            { $set: { "isAdModeOn": modeInObj.isAdModeOn} }
        )
        return modeInObj;
    } catch (err) {
        console.log(`ERROR: cannot update ad content`)
        throw err;
    }
}

// routim
// async function toggleAdMode(modeInObj) {
//     const collection = await dbService.getCollection('advertise')
//     try {
//         collection.updateOne(
//             { "workPlace": "modeInObj.workPlace" },
//             { $set: { "isAdModeOn": modeInObj.isAdModeOn} }
//         )
//         return modeInObj;
//     } catch (err) {
//         console.log(`ERROR: cannot update ad content`)
//         throw err;
//     }
// }

// async function getAd() {
//     const collection = await dbService.getCollection('advertise')
//     var advertise
//     try {
//         //assuming there is only one ad at the collection
//         advertise = await collection.find({}).toArray();
//         return advertise
//     } catch (err) {
//         console.log(`ERROR: cant find advertise`)
//         throw err;
//     }
// }

// routim
async function getAd(workPlace) {
    const collection = await dbService.getCollection('advertise')
    var advertise
    try {
        //assuming there is only one ad at the collection
        advertise = await collection.find({workPlace}).toArray();
        return advertise
    } catch (err) {
        console.log(`ERROR: cant find advertise`)
        throw err;
    }
}
