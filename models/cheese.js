const mongoose = require('mongoose');

const cheeseSchema = new mongoose.Schema({
  cheese: {type: String, required: true}
});

cheeseSchema.set('toObject', {
  virtuals: true,
  transform: (doc, result) => {
    delete result._id;
    delete result.__v;
  }
});

module.exports = mongoose.model('Cheese', cheeseSchema);