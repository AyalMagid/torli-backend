const express = require('express')
const { postEmail} = require('./email.controller')
const router = express.Router()

router.post('/', postEmail)

module.exports = router