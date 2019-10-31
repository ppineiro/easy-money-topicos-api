const jwt = require('jsonwebtoken');
const User = require('../models/usuario');

const authorization = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token)
    return res
      .status(401)
      .send({ auth: false, message: 'There isn\'t an authorization header' });

  jwt.verify(token, 'vetsystem', err => {
    if (err)
      return res.status(401).send({ auth: false, message: 'Invalid token' });

    // TODO Fetch user with that id, verifying that the user exists.

    const payload = jwt.decode(token, 'vetsystem');

    User.findOne({ id: payload.id }, (error, user) => {
      if (error) {
        res.sendStatus(401).json({ error: 'User doesn\'t exist' });
      }

      req.user = user;
      next();
    });
  });
};

module.exports = authorization;
