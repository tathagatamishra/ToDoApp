const taskModel = require("../model/taskModel");
const userModel = require("../model/userModel");

exports.create = async (req, res) => {
  try {
    const data = req.body;

    let createdData = await taskModel.create(data);

    if (createdData) {
      let userData = await userModel.findById(data.userid);

      let blog = userData.blog;

      blog.push(createdData._id);

      await userModel.findOneAndUpdate(
        { _id: data.userid },
        { $set: { blog } },
        { new: true }
      );
    }

    return res.status(201).send({
      status: true,
      message: "Your account created successfully 😃",
      data: createdData,
    });
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

    let blog = await taskModel.findById(id);

    res.status(200).send({
      status: true,
      data: blog,
    });
  } catch (err) {
    return res.status(500).send({
      status: false,
      message: "Internal Server Error!",
      error: err.message,
    });
  }
};
exports.all = async (req, res) => {
  try {

    let blog = await taskModel.find();

    res.status(200).send({
      status: true,
      data: blog,
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
