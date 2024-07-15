const mongoose = require('mongoose');

const MechanicSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  specialization: {
    type: String,
    required: true
  },
  image: String,
  city: {
    type: String,
    required: true
  },
  garage: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Garage',
    required: true
  },
  rating: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('Mechanic', MechanicSchema);
