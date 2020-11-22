const advertiseService = require('./advertise.service')
const logger = require('../../services/logger.service')


async function createAd(req, res) {
    const advertise = await advertiseService.createAd()
    res.send(advertise)
}

async function updateAd(req, res) {
    const advertise = await advertiseService.updateAd(req.body)
    res.send(advertise)
}

async function updateAd(req, res) {
    const advertise = await advertiseService.updateAd(req.body)
    res.send(advertise)
}

// routim
// async function toggleAdMode(req, res) {
//     const modeObj = await advertiseService.toggleAdMode(req.body)
//     res.send(modeObj)
// }

async function toggleAdMode(req, res) {
    const advertise = await advertiseService.toggleAdMode(req.body)
    res.send(advertise)
}

async function getAd(req, res) {
    const advertise = await advertiseService.getAd()
    res.send(advertise)
}

// routim
// async function getAd(req, res) {
//     const workPlace = req.params.workPlace
//     const advertise = await advertiseService.getAd(workPlace)
//     res.send(advertise)
// }

module.exports = {
    createAd,
    updateAd,
    toggleAdMode,
    getAd
}