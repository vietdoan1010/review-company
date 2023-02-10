const express = require("express");
const HomeRouter = require("./Home.router.js");
const adminRouter = require("./Admin.router.js");
const detailRouter = require("./Detail.router.js");

function route(app) {
  app.use("/detail", detailRouter);
  app.use("/admin", adminRouter);

  app.use("/", HomeRouter);
}

module.exports = route;
