const Voluntad = require('../../models/voluntad');

const find = (req, res) => {
  Voluntad.find({ activo: true })
    .populate('usuario')
    .populate('divisa')
    .exec((err, voluntades) => {
      if (err) {
        res.status(404).json({ error: 'Algo salió mal.' });
      } else {
        res.json(voluntades);
      }
    });
};

const findOne = (req, res) => {
  Voluntad.findOne({ _id: req.params.id, activo: true })
    .populate('usuario')
    .populate('divisa')
    .exec((err, query_response) => {
      if (err) {
        res.status(404).json({ error: 'Voluntad no encontrada.' });
      } else {
        res.json(query_response);
      }
    });
};

const buscarPorUsuario = (req, res) => {
  Voluntad.find({ usuario: req.params.usuario, activo: true })
    .populate('usuario')
    .populate('divisa')
    .exec((err, query_response) => {
      if (err) {
        res.status(404).json({ error: 'Voluntad no encontrada.' });
      } else {
        res.json(query_response);
      }
    });
};

const buscarPorDivisa = (req, res) => {
  Voluntad.find({ divisa: req.params.divisa, activo: true })
    .populate('usuario')
    .populate('divisa')
    .exec((err, query_response) => {
      if (err) {
        res.status(404).json({ error: 'Voluntad no encontrada.' });
      } else {
        res.json(query_response);
      }
    });
};

const create = (req, res) => {
  const { usuario, divisa, monto, operacion } = req.body;

  const voluntad = new Voluntad({
    usuario,
    divisa,
    monto,
    operacion,
    activo: true,
  });
  voluntad.save(err => {
    if (err) {
      res.status(400).json({ error: 'La Voluntad no se puede agregar.' });
    } else {
      res.status(201).json(voluntad);
    }
  });
};

const uncreate = (req, res) => {
  Voluntad.deleteOne({ _id: req.params.id }, err => {
    if (err) {
      res.status(404).json({ error: 'La Voluntad no se puede eliminar.' });
    } else {
      res.status(200).json('Voluntad eliminada correctamente.');
    }
  });
};

const update = (req, res) => {
  Voluntad.updateOne({ _id: req.params.id }, { $set: req.body }, err => {
    if (err) {
      res.status(404).json({ error: 'La Voluntad no se puede modificar.' });
    } else {
      res.status(200).json('Voluntad modificada correctamente.');
    }
  });
};

module.exports = {
  find,
  findOne,
  create,
  uncreate,
  update,
  buscarPorDivisa,
  buscarPorUsuario,
};
