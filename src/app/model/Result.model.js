var mongooes = require("mongoose");
var slug = require("mongoose-slug-generator");

mongooes.plugin(slug);

var resultSchema = mongooes.Schema({
  nameCompany: {
    type: String,
    trim: true,
    required: true,
  },
  address: {
    type: String,
    trim: true,
  },
  linkWeb: {
    type: String,
    trim: true,
  },
  staff: {
    type: Number,
    trim: true,
  },
  majo: {
    type: String,
    trim: true,
  },
  imgCompany: {
    type: String,
    trim: true,
  },
  img: {
    type: String,
    trim: true,
  },
  slogan: {
    type: String,
    trim: true,
  },
  decription: {
    type: String,
    trim: true,
  },
  slug: { type: String, slug: "nameCompany", unique: true },
});

module.exports = mongooes.model("result", resultSchema);
