const mongoose = require('mongoose');

const { Schema } = mongoose;

const farmsSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

const Farm = mongoose.model('Farm', farmsSchema);

module.exports = Farm;
