const express = require('express');
const router = express.Router();

const fileController = require('../controllers/file.controller');
const authMiddleware = require('../middleware/auth.middleware');
const {upload} = require("../services/file.service");

router.post("/upload", authMiddleware, (req, res) => {
  upload.any()(req, res, function (err) {
    if (err) {
      console.log("MULTER ERROR:", err);
      return res.status(400).json({
        success: false,
        message: err.message,
      });
    }

    console.log("FILES:", req.files);
    console.log("BODY:", req.body);

    res.json({
      success: true,
      files: req.files,
    });
  });
});

router.get(
    "/",
    authMiddleware,
    fileController.listFiles
);

module.exports = router;