const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
 title: {
    type: String,
    required: true,
    trim: true,
  },
  descrption: {
    type: String,
    required: true,
    maxlength: [250, "Maximum length shoud be 250"],
  },
  duration:{
    type:String,
    required:true
  },
  Fee:{
    type:Number,
    required:true
  },
  Instute:{
    type: mongoose.ObjectId,
    ref: 'Institute'
  }

});
const Course = mongoose.model('Class', CourseSchema);

module.exports = Course