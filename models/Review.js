const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
 title: {
    type: String,
    required: true,
    trim: true,
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  Institute:{
    type: mongoose.Types.ObjectId,
    ref: 'Institute',
    required:true
  },
  Course:{
    type: mongoose.Types.ObjectId,
    ref: 'Course',
    required:true
  },


});
const Review = mongoose.model('Review', ReviewSchema);

module.exports = Review