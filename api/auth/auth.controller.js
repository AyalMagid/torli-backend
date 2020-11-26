const authService = require('./auth.service')
const logger = require('../../services/logger.service')

// async function login(req, res) {
//     const { user, password } = req.body
//     try {
//         const user = await authService.login(password)
//         req.session.user = user;
//         res.json(user)
//     } catch (err) {
//         res.status(401).send({ error: err })
//     }
// }

module.exports = {
    login
}