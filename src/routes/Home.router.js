const express = require("express");
const router = express.Router();
const HomeController = require("../app/controllers/Home.controller");

router.get("/addCompany", HomeController.addcompany);
// router.post("/addCompany", HomeController.qaddcompany);

router.get("/login", HomeController.login);
router.post("/login", HomeController.postlogin);

router.get("/logout", HomeController.logout);

router.post("/search", HomeController.search);

router.get("/", HomeController.index);
router.post("/", HomeController.qindex);

module.exports = router;
