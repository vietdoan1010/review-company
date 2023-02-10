const express = require("express");
const router = express.Router();
const DetailController = require("../app/controllers/Detail.controller");

router.get("/:slug", DetailController.show);

router.get("/", DetailController.index);

module.exports = router;
