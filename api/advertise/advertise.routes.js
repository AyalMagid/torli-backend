const express = require('express')
// const {requireAuth, requireAdmin} = require('../../middlewares/requireAuth.middleware')
// const {getCalendar, deleteCalendar, updateCalendar, addCalendar} = require('./calendar.controller')
const { getAd,updateAd,toggleAdMode,createAd} = require('./advertise.controller')
const router = express.Router()

router.get('/', getAd);
// routim
// router.get('/:workPlace', getAd);
router.put('/', updateAd);
router.put('/mode', toggleAdMode);
router.post('/', createAd);


module.exports = router

