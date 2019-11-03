const sendEmail = require('../../utils/email');

const notificarTransaccion = (req, res) => {
  const {
    emailPropuesta,
    emailVoluntad,
    textoPropuesta,
    textoVoluntad,
  } = req.body;

  //   sendEmail(
  //     {
  //       recipient: emailPropuesta,
  //       subject: 'Nueva transacción',
  //       text: textoPropuesta,
  //     },
  //     error => {
  //       if (error) {
  //         res.sendStatus(500);
  //       }
  //       //   res.sendStatus(200);
  //     },
  //   );

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

module.exports = {
  notificarTransaccion,
};
