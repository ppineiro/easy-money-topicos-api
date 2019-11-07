const sendEmail = require('../../utils/email');

const notificarTransaccionVoluntad = (req, res) => {
  const { emailVoluntad, textoVoluntad } = req.body;

  sendEmail(
    {
      recipient: emailVoluntad,
      subject: 'Nueva transacción',
      text: textoVoluntad,
    },
    error => {
      if (error) {
        res.sendStatus(500);
      }
      res.sendStatus(200);
    },
  );
};

const notificarTransaccionPropuesta = (req, res) => {
  const { emailPropuesta, textoPropuesta } = req.body;

  sendEmail(
    {
      recipient: emailPropuesta,
      subject: 'Nueva transacción',
      text: textoPropuesta,
    },
    error => {
      if (error) {
        res.sendStatus(500);
      }
      res.sendStatus(200);
    },
  );
};

module.exports = {
  notificarTransaccionVoluntad,
  notificarTransaccionPropuesta,
};
