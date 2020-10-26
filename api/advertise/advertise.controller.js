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

async function toggleAdMode(req, res) {
    console.log(req.body)
    const advertise = await advertiseService.toggleAdMode(req.body)
    res.send(advertise)
}

async function getAd(req, res) {
    console.log('rono')
    const advertise = await advertiseService.getAd()
    res.send(advertise)
}

module.exports = {
    createAd,
    updateAd,
    toggleAdMode,
    getAd
}