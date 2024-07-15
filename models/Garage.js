const mongoose = require('mongoose');

const GarageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  head: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Garage', GarageSchema);
