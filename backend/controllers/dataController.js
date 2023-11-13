const Data = require("../dataModel");
const mongoose = require("mongoose");

// get last previous user id
const getData = async (req, res) => {
  try {
    const data = await Data.find({ dataId: 1 });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "An error occured" });
  }
};

const updateUserId = async (req, res) => {
  try {
    const data = await Data.findOneAndUpdate(
      { dataId: 1 },
      { $inc: { totalUsers: 1 } },
      { new: true }
    );
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "An error occured " });
  }
};

const updatePathOne = async (req, res) => {
  try {
    const data = await Data.findOneAndUpdate(
      { dataId: 1 },
      { $inc: { pathOne: 1 } },
      { new: true }
    );
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "An error occured " });
  }
};
const updatePathTwo = async (req, res) => {
  try {
    const data = await Data.findOneAndUpdate(
      { dataId: 1 },
      { $inc: { pathTwo: 1 } },
      { new: true }
    );
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "An error occured " });
  }
};
const updatePathThree = async (req, res) => {
  try {
    const data = await Data.findOneAndUpdate(
      { dataId: 1 },
      { $inc: { pathThree: 1 } },
      { new: true }
    );
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "An error occured " });
  }
};
const updatePathFour = async (req, res) => {
  try {
    const data = await Data.findOneAndUpdate(
      { dataId: 1 },
      { $inc: { pathFour: 1 } },
      { new: true }
    );
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "An error occured " });
  }
};
const updatePathFive = async (req, res) => {
  try {
    const data = await Data.findOneAndUpdate(
      { dataId: 1 },
      { $inc: { pathFive: 1 } },
      { new: true }
    );
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "An error occured " });
  }
};
const updatePathSix = async (req, res) => {
  try {
    const data = await Data.findOneAndUpdate(
      { dataId: 1 },
      { $inc: { pathSix: 1 } },
      { new: true }
    );
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "An error occured " });
  }
};

module.exports = {
  getData,
  updateUserId,
  updatePathOne,
  updatePathTwo,
  updatePathThree,
  updatePathFour,
  updatePathFive,
  updatePathSix,
};
