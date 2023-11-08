var r = require("./37019.js");
module.exports = function (e, t) {
  var n = e.__data__;
  if (r(t)) {
    return n[typeof t == "string" ? "string" : "hash"];
  } else {
    return n.map;
  }
};