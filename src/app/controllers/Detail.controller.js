const Result = require("../model/Result.model");

class DetailController {
  index(req, res) {
    res.send("detail");
  }

  async show(req, res, next) {
    var nameCompany = await Result.find().limit(5);

    Result.findOne({ slug: req.params.slug })
      .then((detail) => {
        res.render("./detail", { detail, nameCompany });
      })

      .catch(next);
  }

  // showCompany(req, res) {
  //   Result.find({}, function (err, nameCompany) {
  //     res.render("./detail", { nameCompany });
  //   });
  // }
}

module.exports = new DetailController();
