const sendEmail = require('../../utils/email');

const notificarTransaccionVoluntad = (req, res) => {
  const { asunto, emailVoluntad, textoVoluntad } = req.body;

  sendEmail(
    {
      recipient: emailVoluntad,
      subject: asunto,
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
  const { asunto, emailPropuesta, textoPropuesta } = req.body;

  sendEmail(
    {
      recipient: emailPropuesta,
      subject: asunto,
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
