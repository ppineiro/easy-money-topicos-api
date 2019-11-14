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
        res.status(500).json({
          error: 'Error',
        });
      }
      res.status(200).json({
        recipient: emailVoluntad,
        subject: asunto,
        text: textoVoluntad,
      });
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
        res.status(500).json({
          error: 'Error',
        });
      }
      res.status(200).json({
        recipient: emailPropuesta,
        subject: asunto,
        text: textoPropuesta,
      });
    },
  );
};

module.exports = {
  notificarTransaccionVoluntad,
  notificarTransaccionPropuesta,
};
