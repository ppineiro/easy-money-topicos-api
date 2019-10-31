const mongoose = require('mongoose');
const FKHelper = require('./helpers/FKHelper');

const transaccionSchema = new mongoose.Schema({
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
  propuesta: {
    type: mongoose.Schema.ObjectId,
    ref: 'Propuesta',
    validate: {
      isAsync: true,
      validator: v => {
        return FKHelper(mongoose.model('Propuesta'), v);
      },
      message: 'Propuesta no existe',
    },
    required: true,
  },
  fechaHora: {
    type: Date,
    required: true,
  },
  cotizacionBCU: { type: Number },
  califUsuarioVoluntad: { type: Number, required: true },
  califUsuarioPropuesta: { type: Number, required: true },
});

const Transaccion = mongoose.model('Transaccion', transaccionSchema);

module.exports = Transaccion;
