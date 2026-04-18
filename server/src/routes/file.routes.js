const express = require('express');
const router = express.Router();

const fileController = require('../controllers/file.controller');
const authMiddleware = require('../middleware/auth.middleware');
const { upload } = require("../services/file.service");

router.post(
  "/upload",
  authMiddleware, 
  upload.single('file'), 
  fileController.uploadFile
);

router.get(
  "/",
  authMiddleware,
  fileController.listFiles
);

router.get(
  "/:id/download",
  authMiddleware,
  fileController.downloadFile
);

router.delete(
  "/:id",
  authMiddleware,
  fileController.deleteFile
);

router.put(
  "/:id/rename",
  authMiddleware,
  fileController.renameFile
);

module.exports = router;