const pendingModel = require("../model/pendingModel");
const progressModel = require("../model/progressModel");
const completedModel = require("../model/completedModel");
const userModel = require("../model/userModel");


exports.create = async (req, res) => {
  try {
    const data = req.body;

    let category = data.category.toLowerCase()
    data.category = category

    if(category == 'completed') {
      let createdData = await completedModel.create(data);
      return res.status(201).send({
      status: true,
      message: "Task created successfully 😃",
      data: createdData,
    });
    }
    else if(category == 'progress') {
      let createdData = await progressModel.create(data);
      return res.status(201).send({
      status: true,
      message: "Task created successfully 😃",
      data: createdData,
    });
    }
    else if(category == 'pending') {
      let createdData = await pendingModel.create(data);
      return res.status(201).send({
      status: true,
      message: "Task created successfully 😃",
      data: createdData,
    });
    }



    // if (createdData) {
    //   let userData = await userModel.findById(data.userid);

    //   let list = userData.list;

    //   list.push(createdData._id);

    //   await userModel.findOneAndUpdate(
    //     { _id: data.userid },
    //     { $set: { list } },
    //     { new: true }
    //   );
    // }

    
  } catch (err) {
    return res.status(500).send({
      status: false,
      message: "Internal Server Error!",
      error: err.message,
    });
  }
};

exports.read = async (req, res) => {
  try {
    const id = req.params.id;

    let user = await userModel.findById(id);
    
    let task = await taskModel.find({userid: id});

    res.status(200).send({
      status: true,
      data: task,
    });
  } catch (err) {
    return res.status(500).send({
      status: false,
      message: "Internal Server Error!",
      error: err.message,
    });
  }
};

exports.update = async (req, res) => {
  try {
    const id = req.params.id;

    const data = req.body;

    let { title, content } = data;

    let updatedData = await userModel.findOneAndUpdate(
      { _id: id },
      { $set: { title, content } },
      { new: true }
    );

    res.status(200).send({
      status: true,
      data: updatedData,
    });
  } catch (err) {
    res.status(500).send({
      status: false,
      message: "Internal Server Error!",
      error: err.message,
    });
  }
};
