const Result = require("../model/Result.model");

var credential = {
  email: "admin@gmail.com",
  password: "admin123",
};

class HomeController {
  index(req, res) {
    Result.find({}, function (err, home) {
      res.render("home", { home });
    });
  }

  async qindex(req, res) {
    await Result.create(req.body);
    res.redirect("/");
  }

  addcompany(req, res) {
    res.render("addCompany");
  }

  login(req, res) {
    res.render("login");
  }

  postlogin(req, res) {
    if (
      req.body.email == credential.email &&
      req.body.password == credential.password
    ) {
      // req.session.user = req.body.email;
      res.redirect("/admin/result");
      // res.end("Login Successful...!");
    } else {
      res.end("Invalid Username");
    }
  }

  logout(req, res) {
    req.session.destroy(function (err) {
      if (err) {
        console.log(err);
        res.send("Error");
      } else {
        res.render("base", {
          title: "Express",
          logout: "logout Successfully...!",
        });
      }
    });
  }

  search(req, res, next) {
    // const searchCourse = req.query.name;
    // Result.find({ name: { $regex: searchCourse, $options: "i" } }).then(
    //   (data) => {
    //     res.send(data);
    //   }
    // );
    // var regex = new RegExp(req.query.nameCompany, "i");

    // Result.find({
    //   name: regex,
    // })
    //   .then((data) => {
    //     res.json(data);
    //   })
    //   .catch(next);

    Result.find({
      nameCompany: {
        $regex: ".*" + req.body.search + ".*",
        $options: "i",
      },
    })
      .then((search) => {
        res.render("search", { search });
      })
      .catch(next);
  }

  // qaddcompany(req, res) {
  //   Result.create(req.body);
  //   res.redirect("/admin/result");
  // }
}

module.exports = new HomeController();
