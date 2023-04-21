const mongoose = require("mongoose");

module.exports = mongoose.model(
  "progresstask",

  new mongoose.Schema(
    {
      category: {
        type: String,
        enum: ['progress']
      },
      title: String,
      content: String,
      userid: String
    },
    { timestamps: true }
  )
);