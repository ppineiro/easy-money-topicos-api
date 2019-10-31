const { celebrate, Joi } = require('celebrate');

const password = () => Joi.string().min(4);

const email = () => Joi.string().email();

const find = celebrate({ query: { limit: Joi.number() } });

const findOne = celebrate({ params: { id: Joi.string() } });

const create = celebrate({
  body: {
    email: email().required(),
    nombre: Joi.string().required(),
    password: password().required(),
    ubicacion: Joi.string().required(),
  },
});

const uncreate = celebrate({
  params: { id: Joi.string() },
});

const update = celebrate({
  params: { id: Joi.string() },
  body: {
    email: email(),
    nombre: Joi.string().alphanum(),
  },
});

const changePassword = celebrate({
  params: { id: Joi.string() },
  body: {
    newPassword: password().required(),
  },
});

const forgotPassword = celebrate({
  body: {
    email: email().required(),
  },
});

module.exports = {
  find,
  findOne,
  create,
  uncreate,
  update,
  changePassword,
  forgotPassword,
};
