const mongoose = require('mongoose');
const FKHelper = require('./helpers/FKHelper');

const propuestaSchema = new mongoose.Schema({
  usuario: {
    type: mongoose.Schema.ObjectId,
    ref: 'Usuario',
    validate: {
      isAsync: true,
      validator: v => {
        return FKHelper(mongoose.model('Usuario'), v);
      },
      message: 'Usuario no existe',
    },
    required: true,
  },
  voluntad: {
    type: mongoose.Schema.ObjectId,
    ref: 'Voluntad',
    validate: {
      isAsync: true,
      validator: v => {
        return FKHelper(mongoose.model('Voluntad'), v);
      },
      message: 'Voluntad no existe',
    },
    required: true,
  },
  cotizacionOf: { type: Number, required: true },
  activo: { type: Boolean, required: true },
});

const Propuesta = mongoose.model('Propuesta', propuestaSchema);

module.exports = Propuesta;
