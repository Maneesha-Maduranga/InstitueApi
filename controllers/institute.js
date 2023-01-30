const Institue = require("../models/Institue");

const getAllInstitute = async (req, res) => {
  let institue = await Institue.find({});

  if (!institue) {
    res.status(400).json({
      sucess: false,
      err: "No Institute TO Show",
    });
  } else {
    res.status(200).json({
      count: institue.length,
      sucess: true,
      data: institue,
    });
  }
};

const getSingleInstitute = async (req, res) => {
  let id = req.params.id;

  let institue = await Institue.findById(id).populate("course");
  //author.posts[0].title
  // console.log(institue.course)

  if (!institue) {
    res.status(400).json({
      sucess: false,
      err: "No Institute With Given ID",
    });
  }

  res.status(200).json({
    sucess: true,
    data: institue,
  });
};

const postInstitute = async (req, res) => {
  req.body.user = req.user.id;

  //Check if Publisher publish the Institue Before
  let preinstitue = await Institue.findOne({ user: req.user.id });

  if (preinstitue && req.user.role !== "admin") {
    return res.status(400).json({
      sucess: false,
      err: "Published Before",
    });
  }

  let insitute = new Institue(req.body);

  insitute = await insitute.save();

  if (insitute) {
    return res.status(201).json({
      sucess: true,
      data: insitute,
    });
  } else {
    return res.status(400).json({
      sucess: false,
      err: "Validation Failed",
    });
  }
};

const updateInstitute = async (req, res) => {
  let institue = await Institue.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!institue) {
    return res.status(400).json({
      sucess: false,
      err: "No Institution with given ID",
    });
  }
  res.status(200).json({
    sucess: true,
    data: institue,
  });
};

const deleteInstitute = async (req, res) => {
  let insitute = await Institue.findByIdAndRemove(req.params.id);
  if (!insitute) {
    return res.status(400).json({
      sucess: false,
      err: "No Institution with given ID",
    });
  } else {
    return res.status(200).json({
      sucess: true,
      data: insitute,
    });
  }
};

module.exports = {
  getAllInstitute,
  getSingleInstitute,
  postInstitute,
  deleteInstitute,
  updateInstitute,
};
