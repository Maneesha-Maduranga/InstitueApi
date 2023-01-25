
const getAllClass = (req,res) => {

    res.send("Get All Class");

}

const getSingleClass = (req,res) => {

    res.send("Get Single Class")

}

const postClass = (req,res) => {

    res.send("Post Class")

}

const updateClass = (req,res) => {

    res.send("Update Class")

}

const deleteClass = (req,res) => {

    res.send(`Delete course with id ${req.params.id}`)

}

module.exports = {
    getAllClass,
    getSingleClass,
    postClass,
    deleteClass,
    updateClass
}