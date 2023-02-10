const express = require("express");
const router = express.Router();
const AdminController = require("../app/controllers/Admin.controller");

router.post("/delete", AdminController.delete);

router.get("/create", AdminController.create);
router.post("/create", AdminController.qcreate);

router.get("/result", AdminController.result);
router.post("/result", AdminController.qresult);

router.get("/update/:id", AdminController.update);
router.post("/update/:id", AdminController.qupdate);

router.get("/", AdminController.index);
module.exports = router;
