require('dotenv').config();

module.exports = {
    getAdminPhone,
    checkPassword
}

async function getAdminPhone() {
    return (process.env.ADMIN_PHONE)
}

async function checkPassword(password) {
    if (password === process.env.ADMIN_PASSWORD) {
        return true
    }
    else {
        return false
    }
}
