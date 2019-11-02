const jwt = require('jsonwebtoken');
const User = require('../../models/usuario');

const find = (req, res) => {
  // Find email
  User.findOne({ email: req.body.email }).exec((err, usuario) => {
    if (err) {
      res.sendStatus(401).json({ error: 'Email o contraseña incorrecta.' });
    }
    if (usuario) {
      usuario
        .comparePassword(req.body.password, usuario.password)
        .then(result => {
          if (result) {
            console.log(usuario);
            const token = jwt.sign(
              {
                id: usuario.id,
                email: usuario.email,
                nombre: usuario.nombre,
                ubicacion: usuario.ubicacion,
              },
              'easymoney',
              { expiresIn: '2h' },
            );
            res.status(200).send(res.json({ token, message: 'Autenticado' }));
          } else {
            res
              .sendStatus(401)
              .json({ error: 'Correo o contraseña incorrecta.' });
          }
        });
    } else {
      res.sendStatus(401).json({ error: 'Correo o contraseña incorrecta.' });
    }
  });
};

module.exports = {
  find,
};
