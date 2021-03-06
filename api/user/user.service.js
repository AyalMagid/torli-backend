const axios = require('axios');
const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    addUser,
    getUser,
    getOwner,
    getUsers,
    removeUser,
    updateUser
}

// login
// const auth = await bcrypt.compare(password, user.password);

async function addUser (user){

    // add user.password when siggningup as admin
    // if (user.pass) {
    //     const salt = await bcrypt.genSalt()
    //     const hashPassword = await bcrypt.hash(password, salt);
    //     user.pass = hashPassword
    // }
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
    const collection = await dbService.getCollection('user')
    try {
        await collection.deleteOne({"_id":ObjectId(_id)})
    } catch (err) {
        console.log(`ERROR: cannot remove user ${_id}`)
        throw err;
    }
}

async function getUser(phone) {
    const collection = await dbService.getCollection('user')
    try {
        const user = await collection.findOne({"phone":phone})
        return user
    } catch (err) {
        console.log(`ERROR: cant find user by the phone - ${phone}`)
        throw err;
    }
}

// routim
async function getOwner(workPlace) {
    const collection = await dbService.getCollection('user')
    try {
        const owner = await collection.findOne({"workPlace":workPlace, isAdmin:true})
        return owner
    } catch (err) {
        console.log(`ERROR: cant find owner by the workPlace - ${workPlace}`)
        throw err;
    }
}

//  async function getUsers() {
//     const collection = await dbService.getCollection('user')
//     try {
//         const users = await collection.find({}).toArray();
//         return users
//     } catch (err) {
//         console.log(`ERROR: cant get users collection`)
//         throw err;
//     }
// }

// routim
 async function getUsers(workPlace) {
     console.log('222222')
     console.log('workPlaceworkPlace', workPlace)
    const collection = await dbService.getCollection('user')
    try {
        const users = await collection.find({workPlace}).toArray();
        return users
    } catch (err) {
        console.log(`ERROR: cant get users collection`)
        throw err;
    }
}
