const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dataSchema = new Schema({
  totalUsers: {
    type: Number,
    required: true,
  },
  dataId: {
    type: Number,
    default: 1,
  },
  pathOne: {
    type: Number,
    default: 0,
  },
  pathTwo: {
    type: Number,
    default: 0,
  },
  pathThree: {
    type: Number,
    default: 0,
  },
  pathFour: {
    type: Number,
    default: 0,
  },
  pathFive: {
    type: Number,
    default: 0,
  },
  pathSix: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("data", dataSchema);
