const Divisa = require('../../models/divisa');

const find = (req, res) => {
  Divisa.find(req.query, (err, divisas) => {
    if (err) {
      res.status(404).json({
        error: 'Algo salió mal.'
      });
    } else {
      res.json(divisas);
    }
  });
};

const findOne = (req, res) => {
  Divisa.findOne({
    _id: req.params.id
  }, (err, query_response) => {
    if (err) {
      res.status(404).json({
        error: 'Divisa no encontrada.'
      });
    } else {
      res.json(query_response);
    }
  });
};

const buscarPorCodigo = (req, res) => {
  Divisa.find({
    codigoISO: req.params.codigo
  }, (err, query_response) => {
    if (err) {
      res.status(404).json({
        error: 'Divisa no encontrada.'
      });
    } else {
      res.json(query_response);
    }
  });
};

const create = (req, res) => {
  const {
    codigoISO,
    divisa
  } = req.body;

  const _divisa = new Divisa({
    codigoISO,
    divisa,
  });
  _divisa.save(err => {
    if (err) {
      res.status(400).json({
        error: 'La Divisa no se puede agregar.'
      });
    } else {
      res.status(201).json(_divisa);
    }
  });
};

const uncreate = (req, res) => {
  Divisa.deleteOne({
    _id: req.params.id
  }, err => {
    if (err) {
      res.status(404).json({
        error: 'La Divisa no se puede eliminar.'
      });
    } else {
      res.status(200).json('Divisa eliminada correctamente.');
    }
  });
};

const update = (req, res) => {
  Divisa.updateOne({
    _id: req.params.id
  }, {
    $set: req.body
  }, err => {
    if (err) {
      res.status(404).json({
        error: 'La Divisa no se puede modificar.'
      });
    } else {
      res.status(200).json('Divisa modificada correctamente.');
    }
  });
};

module.exports = {
  find,
  findOne,
  create,
  uncreate,
  update,
  buscarPorCodigo,
};
