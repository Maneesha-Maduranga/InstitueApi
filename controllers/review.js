const Review = require("../models/Review");

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

module.exports = {
  getallReview,
};
