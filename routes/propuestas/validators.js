const { celebrate, Joi } = require('celebrate');

const find = celebrate({
  query: {
    _id: Joi.string(),
  },
});

const buscarPorUsuario = celebrate({
  params: {
    usuario: Joi.string(),
  },
});

const buscarPorVoluntad = celebrate({
  params: {
    voluntad: Joi.string(),
  },
});

const findOne = celebrate({
  params: {
    id: Joi.string(),
  },
});

const create = celebrate({
  body: {
    usuario: Joi.string().required(),
    voluntad: Joi.string().required(),
    cotizacionOf: Joi.number().required(),
  },
});

const uncreate = celebrate({ params: { id: Joi.string() } });

const update = celebrate({
  params: { id: Joi.string() },
  body: {
    usuario: Joi.string().required(),
    voluntad: Joi.string().required(),
    cotizacionOf: Joi.number().required(),
  },
});

module.exports = {
  find,
  findOne,
  create,
  uncreate,
  update,
  buscarPorUsuario,
  buscarPorVoluntad,
};
