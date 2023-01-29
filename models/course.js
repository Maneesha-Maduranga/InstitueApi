const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
 title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    maxlength: [250, "Maximum length shoud be 250"],
  },
  duration:{
    type:String,
    required:true
  },
  fee:{
    type:Number,
    required:true
  },
  Institute:{
    type: mongoose.ObjectId,
    ref: 'Institute',
    required:true
  }

});
const Course = mongoose.model('Course', CourseSchema);

module.exports = Course