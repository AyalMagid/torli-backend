const emailService = require('./email.service')

async function postEmail(req, res) {
    const email = await emailService.postEmail(req.body);
    res.send(email)
}
  

module.exports = {
    postEmail
}