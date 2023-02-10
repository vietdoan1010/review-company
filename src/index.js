const express = require("express");

const morgan = require("morgan");
const path = require("path");
const app = express();
const port = 3000;
const route = require("./routes");
const db = require("./config/db");
const session = require("express-session");
const { v4: uuidv4 } = require("uuid");

// connect to db
db.connect();

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

//HTTP logger
// app.use(morgan('combined'))

//Teamplate engine
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "resources", "views"));
app.set("view engine", "ejs");

//chạy routes
route(app);

// session
app.use(
  session({
    secret: uuidv4(), //  '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
    resave: false,
    saveUninitialized: true,
  })
);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
