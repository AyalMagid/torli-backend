const express = require('express')
// const {requireAuth, requireAdmin} = require('../../middlewares/requireAuth.middleware')
const { sendWhatsAppMsg } = require('./twillo.controller')
const router = express.Router()


// middleware that is specific to this router
// router.use(requireAuth)
router.post('/:phone', sendWhatsAppMsg);

module.exports = router


