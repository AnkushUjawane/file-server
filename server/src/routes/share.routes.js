const express = require("express");
const router = express.Router();

const shareController = require("../controllers/share.controller");
const auth = require("../middleware/auth.middleware");

router.post("/:id", auth, shareController.createShare);

router.get("/", auth, shareController.getMyShares);

router.get("/:token", shareController.accessSharedFile);

module.exports = router;