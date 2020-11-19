const twilloService = require('./twillo.service')
const logger = require('../../services/logger.service')

async function sendWhatsAppMsg (req, res) {
    const phone = req.params.phone
    // const user =  await userService.getUser(phone) 
    // res.send(user)
}

module.exports = {
    sendWhatsAppMsg
}