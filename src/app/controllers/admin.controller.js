const Result = require("../model/Result.model");

class AdminController {
  index(req, res) {
    res.send("admin");
  }

  create(req, res) {
    res.render("create");
  }

  qcreate(req, res) {
    Result.create(req.body);
    res.redirect("/admin/result");
  }

  result(req, res) {
    Result.find({}, function (err, result) {
      res.render("result", { result });
    });
  }

  async qresult(req, res) {
    await Result.create(req.body);
    res.redirect("/admin/result");
  }

  update(req, res) {
    let id = req.params.id;
    Result.findById(id, (err, result) => {
      if (err || !result) {
        res.redirect("/");
      } else {
        res.render("update", {
          result: result,
        });
      }
    });
  }
  async qupdate(req, res) {
    await Result.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/admin/result");
  }

  delete(req, res) {
    const id = req.body.id;
    Result.findByIdAndRemove(id)
      .exec()
      .then(() => res.redirect("/admin/result"));
  }
}

module.exports = new AdminController();
