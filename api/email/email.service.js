require('dotenv').config();

module.exports = {
    postEmail
}
var emailSubject='עדכון תור נייל סלון'

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.OWNER_EMAIL,
        pass: process.env.PASSWORD
    }
});

var mailOptions = {
    from: process.env.OWNER_EMAIL,
    to: '',
    subject: emailSubject,
    text: ''
};

function postEmail(emailObj) {
    if (!emailObj.email) mailOptions.to = [process.env.OWNER_EMAIL]
    else mailOptions.to = [emailObj.email,process.env.OWNER_EMAIL]
    mailOptions.text = emailObj.bodyText
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}