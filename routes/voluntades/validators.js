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

const buscarPorUsuario = celebrate({
  params: {
    usuario: Joi.string(),
  },
});

const buscarPorDivisa = celebrate({
  params: {
    divisa: Joi.string(),
  },
});

const create = celebrate({
  body: {
    usuario: Joi.string().required(),
    divisa: Joi.string().required(),
    monto: Joi.number().required(),
    operacion: Joi.number().required(),
  },
});

const uncreate = celebrate({ params: { id: Joi.string() } });

const update = celebrate({
  params: { id: Joi.string() },
  body: {
    usuario: Joi.string().required(),
    divisa: Joi.string().required(),
    monto: Joi.number().required(),
    operacion: Joi.number().required(),
  },
});

const inactivate = celebrate({
  params: { id: Joi.string() },
  body: {
    activo: Joi.boolean().required(),
  },
});

module.exports = {
  find,
  findOne,
  create,
  uncreate,
  update,
  inactivate,
  buscarPorUsuario,
  buscarPorDivisa,
};
