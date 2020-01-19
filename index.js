require('dotenv').config();
const nodemailer = require('nodemailer');

const senderEmail = process.env.EMAIL;
const emailPassword = process.env.EMAIL_PASSWORD;

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: senderEmail,
        pass: emailPassword
    }
});

const message = 'BITCHES';          // DEV ONLY
const email = 'exmaple@gmail.com';  // DEV ONLY

const mailOptions = {
    from: `FirstName LastName <${email}>`, // Something like: Jane Doe <janedoe@gmail.com>
    to: email,
    subject: 'Classifieds Notifier', // email subject
    html: message 
};

// Sending Email.
transporter.sendMail(mailOptions, (error, info) => {
    if(error){
        console.log('Error: ' + error);
    }

    console.log('Finished Sending Email...');
});

