const Transaccion = require('../../models/transaccion');

const find = (req, res) => {
  Transaccion.find({})
    .populate({
      path: 'voluntad',
      populate: {
        path: 'usuario',
        model: 'Usuario'
      }
    })
    .populate({
      path: 'propuesta',
      populate: {
        path: 'usuario',
        model: 'Usuario'
      }
    })
    .exec((err, transacciones) => {
      if (err) {
        res.status(404).json({
          error: 'Algo salió mal.'
        });
      } else {
        res.json(transacciones);
      }
    });
};

const findOne = (req, res) => {
  Transaccion.findOne({
      _id: req.params.id
    })
    .populate({
      path: 'voluntad',
      populate: {
        path: 'usuario',
        model: 'Usuario'
      }
    })
    .populate({
      path: 'propuesta',
      populate: {
        path: 'usuario',
        model: 'Usuario'
      }
    })
    .exec((err, query_response) => {
      if (err) {
        res.status(404).json({
          error: 'Transaccion no encontrada.'
        });
      } else {
        res.json(query_response);
      }
    });
};

const buscarPorVoluntad = (req, res) => {
  Transaccion.find({
      voluntad: req.params.voluntad
    })
    .populate('voluntad')
    .populate('propuesta')
    .exec((err, query_response) => {
      if (err) {
        res.status(404).json({
          error: 'Transaccion no encontrada.'
        });
      } else {
        res.json(query_response);
      }
    });
};

const buscarPorPropuesta = (req, res) => {
  Transaccion.find({
      propuesta: req.params.propuesta
    })
    .populate('voluntad')
    .populate('propuesta')
    .exec((err, query_response) => {
      if (err) {
        res.status(404).json({
          error: 'Transaccion no encontrada.'
        });
      } else {
        res.json(query_response);
      }
    });
};

const create = (req, res) => {
  const {
    voluntad,
    propuesta,
    cotizacionBCU,
    califUsuarioVoluntad,
    califUsuarioPropuesta,
  } = req.body;

  const transaccion = new Transaccion({
    voluntad,
    propuesta,
    fechaHora: Date.now(),
    cotizacionBCU,
    califUsuarioVoluntad,
    califUsuarioPropuesta,
  });
  transaccion.save(err => {
    if (err) {
      res.status(400).json({
        error: 'La Transaccion no se puede agregar.'
      });
    } else {
      res.status(201).json(transaccion);
    }
  });
};

const uncreate = (req, res) => {
  Transaccion.deleteOne({
    _id: req.params.id
  }, err => {
    if (err) {
      res.status(404).json({
        error: 'La Transaccion no se puede eliminar.'
      });
    } else {
      res.status(200).json('Transaccion eliminada correctamente.');
    }
  });
};

const update = (req, res) => {
  Transaccion.updateOne({
    _id: req.params.id
  }, {
    $set: req.body
  }, err => {
    if (err) {
      res.status(404).json({
        error: 'La Transaccion no se puede modificar.'
      });
    } else {
      res.status(200).json('Transaccion modificada correctamente.');
    }
  });
};

module.exports = {
  find,
  findOne,
  create,
  uncreate,
  update,
  buscarPorVoluntad,
  buscarPorPropuesta,
};