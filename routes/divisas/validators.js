const { celebrate, Joi } = require('celebrate');

const find = celebrate({
  query: {
    _id: Joi.string(),
  },
});

const buscarPorCodigo = celebrate({
  params: {
    codigo: Joi.string(),
  },
});

const findOne = celebrate({
  params: {
    id: Joi.string(),
  },
});

const create = celebrate({
  body: {
    codigoISO: Joi.string().required(),
    divisa: Joi.string().required(),
  },
});

const uncreate = celebrate({ params: { id: Joi.string() } });

const update = celebrate({
  params: { id: Joi.string() },
  body: {
    codigoISO: Joi.string().required(),
    divisa: Joi.string().required(),
  },
});

module.exports = {
  find,
  findOne,
  create,
  uncreate,
  update,
  buscarPorCodigo,
};
