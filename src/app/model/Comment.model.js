var mongooes = require("mongoose");
var slug = require("mongoose-slug-generator");

mongooes.plugin(slug);

var CommentSchema = mongooes.Schema({
  nameUser: {
    type: String,
    trim: true,
    required: true,
  },

  comment: {
    type: String,
    trim: true,
    required: true,
  },
});

module.exports = mongooes.model("Comment", CommentSchema);
