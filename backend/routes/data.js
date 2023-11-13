const express = require("express");
const {
  getData,
  updateUserId,
  updatePathOne,
  updatePathTwo,
  updatePathThree,
  updatePathFour,
  updatePathFive,
  updatePathSix,
} = require("../controllers/dataController");
const { get } = require("jquery");

const router = express.Router();

router.get("/", getData);

router.post("/", updateUserId);

router.post("/one", updatePathOne);

router.post("/two", updatePathTwo);

router.post("/three", updatePathThree);

router.post("/four", updatePathFour);
router.post("/five", updatePathFive);
router.post("/six", updatePathSix);

module.exports = router;
