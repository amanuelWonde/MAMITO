const express = require("express");
const { upload } = require("../Config/multerConfig");

const {
  addQuestions,
  viewQuestions,
} = require("../Controllers/questionController");
const router = express.Router();

router.post("/add", upload.any(), addQuestions);
router.get("/:windowId", viewQuestions);

module.exports = router;
