const express = require('express')
// const {requireAuth, requireAdmin} = require('../../middlewares/requireAuth.middleware')
const {getTreatment, getTreatments, deleteTreatment, updateTreatment} = require('./treatment.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', getTreatments)
router.get('/:id', getTreatment)
router.put('/:id',updateTreatment)
router.delete('/:id', deleteTreatment)

module.exports = router