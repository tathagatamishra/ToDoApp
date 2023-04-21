const mongoose = require("mongoose");

module.exports = mongoose.model(
  "pendingtask",

  new mongoose.Schema(
    {
      category: {
        type: String,
        enum: ['pending']
      },
      title: String,
      content: String,
      userid: String
    },
    { timestamps: true }
  )
);