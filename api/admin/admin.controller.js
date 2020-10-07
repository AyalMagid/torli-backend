async function getAdminPhone(req, res) {
    await userService.remove(req.params.id)
    res.end()
}

async function checkPassword(req, res) {
    const user = req.body;
    await userService.update(user)
    res.send(user)
}

module.exports = {
    getAdminPhone,
    checkPassword
}