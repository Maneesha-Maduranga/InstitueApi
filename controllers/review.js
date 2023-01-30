const Review = require("../models/Review");
const Institute = require("../models/Institue")

const getallReview = async (req, res) => {
    
  if (req.params.instituteId) {
    let review = await Review.findById(req.params.instituteId);

    res.status(200).json({
      sucess: true,
      count: review.length,
      data: review,
    });
  } else {
    let review = await Review.find({});

    res.status(200).json({
      sucess: true,
      data: review,
      count: review.length,
    });
  }
};


const createReview = async(req,res) => {

   req.body.Institute = req.params.instituteId
   req.body.User = req.user._id

   let institute = await Institute.findById(req.params.instituteId)

   if(!institute){
     return res.status(400).json({
        sucess:false,
        err:"No Bootcamp With given Id"
     })
   }

   let review = await Review.create(req.body)

   res.status(201).json({
    sucess:true,
    data:review
   })






}

module.exports = {
  getallReview,
  createReview
};
