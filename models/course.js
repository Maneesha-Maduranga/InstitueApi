const mongoose = require("mongoose");
const Joi = require('joi');



const validate = (title,description,duration,fee) => {

  const schema = Joi.object({
    title: Joi.string().required().trim(),
    description:Joi.string().required().max(250),
    duration:Joi.string().required(),
    fee:Joi.number()
  });

  return  schema.validate({ title,description,duration,fee });
}



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

module.exports = {
  Course,
  validate
}