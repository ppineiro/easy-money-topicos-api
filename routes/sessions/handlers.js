const jwt = require('jsonwebtoken');
const User = require('../../models/usuario');

const find = (req, res) => {
  // Find email
  User.findOne({ email: req.body.email }).exec((err, usuario) => {
    if (err) {
      res.sendStatus(401).json({ error: 'Email o contraseña incorrecta.' });
    } else {
      usuario
        .comparePassword(req.body.password, usuario.password)
        .then(result => {
          if (result) {
            const token = jwt.sign(
              {
                id: usuario._id,
                email: usuario.email,
                nombre: usuario.nombre,
                ubicacion: usuario.ubicacion,
              },
              'easymoney',
              { expiresIn: '2h' },
            );
            res.status(200).send({ token, message: 'Autenticado' });
          } else {
            res
              .sendStatus(401)
              .json({ error: 'Correo o contraseña incorrecta.' });
          }
        });
    }
  });
};

module.exports = {
  find,
};
