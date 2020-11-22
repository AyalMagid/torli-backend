const userService = require('./user.service')
const logger = require('../../services/logger.service')

async function getUser(req, res) {
    const phone = req.params.phone
    const user =  await userService.getUser(phone) 
    res.send(user)
}

// routim
// async function getOwner(req, res) {
//     const workPlace = req.params.workPlace
//     const owner =  await userService.getOwner(workPlace) 
//     res.send(owner)
// }

async function getUsers(req, res) {
    const users =  await userService.getUsers() 
    res.send(users)
}

// routim
// async function getUsers(req, res) {
//     const workPlace = req.params.workPlace
//     const users =  await userService.getUsers(workPlace) 
//     res.send(users)
// }

async function addUser(req, res) {
    const user =  await userService.addUser(req.body) 
    res.send(user)
}

async function updateUser(req, res) {
    const user =  await userService.updateUser(req.body) 
    res.send(user)
}

async function removeUser(req, res) {
    await userService.removeUser(req.params.id)
    res.end()
}

module.exports = {
    getUser,
    getUsers,
    removeUser,
    addUser,
    updateUser
}