const mongoose = require("mongoose");

module.exports = mongoose.model(
  "task",

  new mongoose.Schema(
    {
      title: String,
      content: String,
      createdby: String,
      userid: String
    },
    { timestamps: true }
  )
);
