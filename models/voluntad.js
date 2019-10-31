const mongoose = require('mongoose');
const FKHelper = require('./helpers/FKHelper');

const divisaSchema = new mongoose.Schema({
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
  divisa: {
    type: mongoose.Schema.ObjectId,
    ref: 'Divisa',
    validate: {
      isAsync: true,
      validator: v => {
        return FKHelper(mongoose.model('Divisa'), v);
      },
      message: 'Divisa no existe',
    },
    required: true,
  },
  monto: { type: Number, required: true },
  operacion: { type: Number, required: true }, //1 (Compra) o 2 (Venta)
  activo: { type: Boolean, required: true },
});

const Voluntad = mongoose.model('Voluntad', divisaSchema);

module.exports = Voluntad;
