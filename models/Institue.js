const mongoose = require("mongoose");

const InsituteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  slug: String,
  descrption: {
    type: String,
    required: true,
    maxlength: [250, "Maximum length shoud be 250"],
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  address:{
    type:String
  },
  rating: {
    type: Number,
    min: [1, "Rating Should be Grater Than one"],
    max: [10, "Rating Shouild be Less Than Ten"],
  },
  photo: {
    type: String,
    default: "No-photo.jpg",
  },
  user:{
    type: mongoose.ObjectId,
    ref: 'User',
    required:true
  }
},{
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

InsituteSchema.virtual('course',{
  ref:'Course',
  localField: '_id',
  foreignField:'Institute',
  justOne:false
})


const Insitute = mongoose.model('Institute', InsituteSchema);

module.exports = Insitute