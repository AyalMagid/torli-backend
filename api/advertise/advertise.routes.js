const express = require('express')
// const {requireAuth, requireAdmin} = require('../../middlewares/requireAuth.middleware')
// const {getCalendar, deleteCalendar, updateCalendar, addCalendar} = require('./calendar.controller')
const { getAd,updateAd,createAd} = require('./advertise.controller')
const router = express.Router()

router.get('/', getAd);
router.put('/', updateAd);
router.post('/', createAd);


module.exports = router

