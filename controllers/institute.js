const Class = require("../models/Institue");

const getAllInstitute = (req, res) => {
  res.send("Get All Class");
};

const getSingleInstitute = (req, res) => {
  res.send("Get Single Class");
};

const postInstitute = async (req, res) => {
  try {
    let myclass = new Class(req.body);
    myclass = await myclass.save();

    res.status(201).json({
      sucess: true,
      data: myclass,
    });
  } catch (error) {
    res.status(400).json({
      sucess: false,
    });
  }
};

const updateInstitute = (req, res) => {
  res.send("Update Class");
};

const deleteInstitute = (req, res) => {
  res.send(`Delete course with id ${req.params.id}`);
};

module.exports = {
  getAllInstitute,
  getSingleInstitute,
  postInstitute,
  deleteInstitute,
  updateInstitute,
};
