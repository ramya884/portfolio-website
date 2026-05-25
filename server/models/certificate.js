const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema({
  title: String,
  platform: String,
  date: String,
  image: String,
  link: String,
});

module.exports = mongoose.model('Certificate', certificateSchema);