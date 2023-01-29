const Institue = require('../models/Institue')
const Course = require('../models/course')

const addCourse = async (req, res) => {
  
    let id = req.params.instituteId
  
    let institute = await Institue.findById(id)

    if(!institute){
        return res.status(400).json({
            success:false,
            err:"No Institue with given Id"
        })
    }else {

        let course = await Course.create(req.body)

        res.status(200).json({
            success:true,
            data:course
        })
        
    }





};

const getCourse = async(req,res) => {
   
    let query;

    if(req.params.instituteId){
        
        query = Course.find({Institute:req.params.instituteId})

    }else{
        query = Course.find().populate({
            path:'Institute',
            select:'name'
        })
        
    }

    const course = await query

    res.status(200).json({
        success:true,
        data:course
    })

}

const getSingleCourse = async (req,res) => {

  let id = req.params.courseId

  let course = await Course.findById(id).populate({
    path:'Institute',
    select:'name'
  })

  if(!course){
    return res.status(400).json({
        success:false,
        err:"No Course with given Id"
    })

  }else{
    res.status(200).json({
        success:true,
        data:course
    })
  }



}


const updateCourse = async(req,res) => {

    let id = req.params.courseId

    let course = await Course.findById(id)

    if(!course){
        res.status(400).json({
            success:false,
            err:"No Course With Given ID"
        })
    }else{
        course = await Course.findByIdAndUpdate(id,req.body,{
            new:true
        })
        res.status(200).json({
            success:true,
            data:course
        })
    }


}

const deleteCourse = async(req,res) => {

    let id = req.params.courseId

    let course = await Course.findById(id)

    if(!course){
        return res.status(400).json({
            sucess:false,
            err:"No Course With GIven ID"
        })
    }else{
        await course.remove()
        res.status(200).json({
            success:true,
            data:{}
        })
    }



   


}






module.exports = {
  addCourse,
  getCourse,
  getSingleCourse,
  updateCourse,
  deleteCourse
};
