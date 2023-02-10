const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/review_company");
    console.log("connect succesfully");
  } catch (error) {
    console.log("connect failed");
  }
}

module.exports = { connect };
