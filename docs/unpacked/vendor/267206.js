var r = require("./191573.js");
var i = require("./716432.js");
var a = require("./406557.js");
var o = require("./701469.js");
var s = require("./139601.js");
module.exports = function (e) {
  if (typeof e == "function") {
    return e;
  } else if (e == null) {
    return a;
  } else if (typeof e == "object") {
    if (o(e)) {
      return i(e[0], e[1]);
    } else {
      return r(e);
    }
  } else {
    return s(e);
  }
};