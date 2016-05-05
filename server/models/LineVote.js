const mongoose = require('mongoose');

module.exports = mongoose.model('LineVote', {
  vote: Number,
  userId: String,
  date: Date
})
