const mongoose = require("mongoose");

module.exports = mongoose.model(
  "completedtask",

  new mongoose.Schema(
    {
      category: {
        type: String,
        enum: ['completed']
      },
      title: String,
      content: String,
      userid: String
    },
    { timestamps: true }
  )
);