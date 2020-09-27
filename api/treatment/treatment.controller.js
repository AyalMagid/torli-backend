const treatmentService = require('./treatment.service')
const logger = require('../../services/logger.service')

async function getTreatment(req, res) {
    const treatment = await treatmentService.getById(req.params.id)
    res.send(treatment)
}
  
async function getTreatments(req, res) {
    const treatments = await treatmentService.query(req.query)
    logger.debug(treatments);
    res.send(treatments)
}

async function deleteTreatment(req, res) {
    await treatmentService.remove(req.params.id)
    res.end()
}

async function updateTreatment(req, res) {
    const treatment = req.body;
    await treatmentService.update(treatment)
    res.send(treatment)
}

module.exports = {
    getTreatment,
    getTreatments,
    deleteTreatment,
    updateTreatment
}