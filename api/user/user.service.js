const axios = require('axios');
const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    addUser,
    getUser,
    getUsers,
    removeUser,
    updateUser
}


async function addUser (user){
    const collection = await dbService.getCollection('user')
    try {
        await collection.insertOne(user);
        return user;
    } catch (err) {
        console.log(`ERROR: cannot insert user`)
        throw err;
    }
}

async function updateUser (user){
    console.log('baruuuuu', user)
    const collection = await dbService.getCollection('user')
    try {
        collection.updateOne(
            { "phone": user.oldPhone },
            { $set: {
                 "name": user.name,
                 "phone": user.phone,
                 "email": user.email
                } 
            }
        )
        return user;
    } catch (err) {
        console.log(`ERROR: cannot insert user`)
        throw err;
    }
}

async function removeUser(_id) {
    console.log('be id',_id)
    const collection = await dbService.getCollection('user')
    try {
        await collection.deleteOne({"_id":ObjectId(_id)})
        console.log('delete user from DB',_id);
    } catch (err) {
        console.log(`ERROR: cannot remove user ${_id}`)
        throw err;
    }
}

async function getUser(phone) {
    console.log('this is the phone', phone)
    const collection = await dbService.getCollection('user')
    try {
        const user = await collection.findOne({"phone":phone})
        console.log(user)
        return user
    } catch (err) {
        console.log(`ERROR: cant find user by the phone - ${_id}`)
        throw err;
    }
}

 async function getUsers() {
    const collection = await dbService.getCollection('user')
    try {
        const users = await collection.find({}).toArray();
        return users
    } catch (err) {
        console.log(`ERROR: cant get users collection`)
        throw err;
    }
}
