const nodemailer = require('nodemailer');

const user = 'easymoney.ucu';
const pass = 'easymoney2019';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user,
    pass,
  },
});

const sendEmail = ({ recipient, subject, text }, onCompletion) => {
  const mailOptions = {
    from: user,
    to: recipient,
    subject,
    text,
  };
  transporter.sendMail(mailOptions, error => {
    if (error) {
      onCompletion(error);
    } else {
      onCompletion(null);
    }
  });
};

module.exports = sendEmail;
