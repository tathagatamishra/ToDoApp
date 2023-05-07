const userModel = require("../model/userModel");

exports.signup = async (req, res) => {
  try {
    const data = req.body;

    let exData = await userModel.findOne({ email: data.email });
    if (exData) {
      return res.status(200).send({
        status: false,
        message: "This email is already in use !"
      });
    }

    let createdData = await userModel.create(data);

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

exports.login = async (req, res) => {
  try {
    const data = req.body;

    const { email, password } = data;

    let userData = await userModel.findOne({ email, password })

    if (userData) {
      return res
        .status(200)
        .send({ status: true, message: "Your logged in successfully 😃", data: userData._id });
    }

    return res
      .status(200)
      .send({ status: false, message: "Incorrect credentials" });
  } catch (err) {
    return res.status(500).send({
      status: false,
      message: "Internal Server Error!",
      error: err.message,
    });
  }
};

exports.profile = async (req, res) => {
  try {
    const id = req.params.id;

    let userData = await userModel.findById(id);

    if(userData) {
      return res.status(200).send({
        status: true,
        data: userData,
      });
    }
    return res.status(200).send({
      status: false,
      message: "Data not found"
    });
    
  } catch (err) {
    res.status(500).send({
      status: false,
      message: "Internal Server Error!",
      error: err.message,
    });
  }
};

exports.edit = async (req, res) => {
  try {
    const id = req.params.id;

    const data = req.body;

    let { name, email, password } = data;

    let updatedData = await userModel.findOneAndUpdate(
      { _id: id },
      { $set: { name, email, password } },
      { new: true }
    );

    return res.status(200).send({
      status: true,
      data: updatedData,
    });
  } catch (err) {
    return res.status(500).send({
      status: false,
      message: "Internal Server Error!",
      error: err.message,
    });
  }
};
