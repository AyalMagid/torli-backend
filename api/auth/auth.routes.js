const express = require('express')
// const {requireAuth, requireAdmin} = require('../../middlewares/requireAuth.middleware')
const { login} = require('./auth.controller')
const router = express.Router()

router.get('/login', login);

module.exports = router

