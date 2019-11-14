const Propuesta = require('../../models/propuesta');

const find = (req, res) => {
  Propuesta.find({ activo: true })
    .populate('usuario')
    .populate('voluntad')
    .exec((err, propuestas) => {
      if (err) {
        res.status(404).json({
          error: 'Algo salió mal.',
        });
      } else {
        res.json(propuestas);
      }
    });
};

const findOne = (req, res) => {
  Propuesta.findOne({
    _id: req.params.id,
    activo: true,
  })
    .populate('usuario')
    .populate('voluntad')
    .exec((err, query_response) => {
      if (err) {
        res.status(404).json({
          error: 'Propuesta no encontrada.',
        });
      } else {
        res.json(query_response);
      }
    });
};

const buscarPorUsuario = (req, res) => {
  Propuesta.find({
    usuario: req.params.usuario,
    activo: true,
  })
    .populate('usuario')
    .populate('voluntad')
    .exec((err, query_response) => {
      if (err) {
        res.status(404).json({
          error: 'Propuesta no encontrada.',
        });
      } else {
        res.json(query_response);
      }
    });
};

const buscarPorVoluntad = (req, res) => {
  Propuesta.find({
    voluntad: req.params.voluntad,
    activo: true,
  })
    .populate('usuario')
    .populate('voluntad')
    .populate('divisa')
    .exec((err, query_response) => {
      if (err) {
        res.status(404).json({
          error: 'Propuesta no encontrada.',
        });
      } else {
        res.json(query_response);
      }
    });
};

const create = (req, res) => {
  const { usuario, voluntad, cotizacionOf } = req.body;

  const propuesta = new Propuesta({
    usuario,
    voluntad,
    cotizacionOf,
    activo: true,
  });
  propuesta.save(err => {
    if (err) {
      res.status(400).json({
        error: 'La Propuesta no se puede agregar.',
      });
    } else {
      res.status(201).json(propuesta);
    }
  });
};

const uncreate = (req, res) => {
  Propuesta.deleteOne(
    {
      _id: req.params.id,
    },
    err => {
      if (err) {
        res.status(404).json({
          error: 'La Propuesta no se puede eliminar.',
        });
      } else {
        res.status(200).json('Propuesta eliminada correctamente.');
      }
    },
  );
};

const update = (req, res) => {
  Propuesta.updateOne(
    {
      _id: req.params.id,
    },
    {
      $set: req.body,
    },
    err => {
      if (err) {
        res.status(404).json({
          error: 'La Propuesta no se puede modificar.',
        });
      } else {
        res.status(200).json('Propuesta modificada correctamente.');
      }
    },
  );
};

module.exports = {
  find,
  findOne,
  create,
  uncreate,
  update,
  buscarPorUsuario,
  buscarPorVoluntad,
};
