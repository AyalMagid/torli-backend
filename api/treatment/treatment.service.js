
const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    getById,
    getByEmail,
    remove,
    update,
    add
}

async function query(filterBy = {}) {
  
    const criteria = _buildCriteria(filterBy)
    const collection = await dbService.getCollection('treatment')
    try {
        const treatments = await collection.find(criteria).toArray();
      
        return treatments
    } catch (err) {
        console.log('ERROR: cannot find treatments')
        throw err;
    }
}

async function getById(treatmentId) {
    const collection = await dbService.getCollection('treatments')
    try {
        const treatment = await collection.findOne({"_id":ObjectId(treatmentId)})
        return treatment
    } catch (err) {
        console.log(`ERROR: while finding treatment ${treatmentId}`)
        throw err;
    }
}
async function getByEmail(email) {
    const collection = await dbService.getCollection('treatments')
    try {
        const treatment = await collection.findOne({email})
        return treatment
    } catch (err) {
        console.log(`ERROR: while finding treatment ${email}`)
        throw err;
    }
}

async function remove(treatmentId) {
    const collection = await dbService.getCollection('treatments')
    try {
        await collection.deleteOne({"_id":ObjectId(treatmentId)})
        console.log('delete at service',treatmentId);
    } catch (err) {
        console.log(`ERROR: cannot remove treatment ${treatmentId}`)
        throw err;
    }
}

async function update(treatment) {
    const collection = await dbService.getCollection('treatments')
    treatment._id = ObjectId(treatment._id);

    try {
        await collection.replaceOne({"_id":treatment._id}, {$set : treatment})
        return treatment
    } catch (err) {
        console.log(`ERROR: cannot update treatment ${treatment._id}`)
        throw err;
    }
}

async function add(treatment) {
    const collection = await dbService.getCollection('treatment')
    try {
        await collection.insertOne(treatment);
        return treatment;
    } catch (err) {
        console.log(`ERROR: cannot insert treatment`)
        throw err;
    }
}

function _buildCriteria(filterBy) {
    const criteria = {};
    if (filterBy.txt) {
        criteria.treatmentname = filterBy.txt
    }
    return criteria;
}


