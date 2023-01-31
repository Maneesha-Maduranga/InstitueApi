const Review = require("../models/Review");
const Institute = require("../models/Institue");

const getallReview = async (req, res) => {
  if (req.params.instituteId) {
    // console.log("ran")
    let review = await Review.find().where({
      Institute: req.params.instituteId,
    });

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

const createReview = async (req, res) => {
  req.body.Institute = req.params.instituteId;
  req.body.User = req.user._id;

  let institute = await Institute.findById(req.params.instituteId);

  if (!institute) {
    return res.status(400).json({
      sucess: false,
      err: "No Bootcamp With given Id",
    });
  }

  let review = await Review.create(req.body);

  res.status(201).json({
    sucess: true,
    data: review,
  });
};

const updateReview = async (req, res) => {
  req.body.User = req.user._id;

  let reviewId = req.params.id;

  let review = await Review.findById(reviewId);

  if (!review) {
    return res.status(400).json({
      sucess: false,
      err: "No Review With Id",
    });
  }
  // console.log(req.user.id)
  // console.log(review.User.toString())

  // if(review.User.toString() === req.user._id.toString()){
  //   console.log("Equal")
  // }
  if (review.User.toString() === req.user.id) {
    review = await Review.findByIdAndUpdate(reviewId, req.body, {
      new: true,
    });

    return res.status(201).json({
      sucess: true,
      data: review,
    });
  } else {
    return res.status(401).json({
      sucess: false,
      err: "Not Authorized To Delete",
    });
  }
};


const deleteReview = async(req,res) => {


  let reviewId = req.params.id

  let review = await Review.findById(reviewId)

  if(review){
    if(req.user.id === review.User.toString()){

      await review.remove()
      res.status(200).json({
        sucess:true,
        data:{}
      })

    }else{
      res.status(400).json({
        sucess:false,
        err:"Not Authorized To Delte"
      })
    }
  }else{
    res.status(400).json({
      sucess:false,
      err:"No Review With Given ID"
    })
  }

  


}

module.exports = {
  getallReview,
  createReview,
  updateReview,
  deleteReview
};
