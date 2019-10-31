const { celebrate, Joi } = require('celebrate');

const find = celebrate({
  query: {
    _id: Joi.string(),
  },
});

const findOne = celebrate({
  params: {
    id: Joi.string(),
  },
});

const buscarPorVoluntad = celebrate({
  params: {
    voluntad: Joi.string(),
  },
});

const buscarPorPropuesta = celebrate({
  params: {
    propuesta: Joi.string(),
  },
});

const create = celebrate({
  body: {
    voluntad: Joi.string().required(),
    propuesta: Joi.string().required(),
    cotizacionBCU: Joi.number().required(),
    califUsuarioVoluntad: Joi.number().required(),
    califUsuarioPropuesta: Joi.number().required(),
  },
});

const uncreate = celebrate({ params: { id: Joi.string() } });

const update = celebrate({
  params: { id: Joi.string() },
  body: {
    voluntad: Joi.string().required(),
    propuesta: Joi.string().required(),
    fechaHora: Joi.date().required(),
    cotizacionBCU: Joi.number().required(),
    califUsuarioVoluntad: Joi.number().required(),
    califUsuarioPropuesta: Joi.number().required(),
  },
});

module.exports = {
  find,
  findOne,
  create,
  uncreate,
  update,
  buscarPorVoluntad,
  buscarPorPropuesta,
};
