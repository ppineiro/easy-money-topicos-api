const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const saltRounds = 10;

const usuarioSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      index: {
        unique: true,
      },
    },
    password: {
      type: String,
      required: true,
    },
    nombre: {
      type: String,
      required: true,
    },
    ubicacion: {
      type: String,
      required: true,
    },
    promedioCalif: {
      type: Number,
    },
  },
  {
    timestamps: true,
  },
);

usuarioSchema.methods.comparePassword = async function(
  oldPassword,
  newPassword,
) {
  return bcrypt.compare(oldPassword, newPassword);
};

const hashPassword = async function(next) {
  const usuario = this;
  usuario.password = await bcrypt.hash(usuario.password, saltRounds);
  return next();
};

usuarioSchema.pre('save', hashPassword);

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
