const mongoose = require('mongoose');

const divisaSchema = new mongoose.Schema({
  codigoISO: {
    type: String,
    required: true,
    index: {
      unique: true,
    },
  },
  divisa: {
    type: String,
    required: true,
  },
});

const Divisa = mongoose.model('Divisa', divisaSchema);

module.exports = Divisa;
