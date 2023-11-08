var r = require("./562705.js");
var i = require("./789607.js");
var a = require("./902333.js");
var o = r ? r.toStringTag : undefined;
module.exports = function (e) {
  if (e == null) {
    if (e === undefined) {
      return "[object Undefined]";
    } else {
      return "[object Null]";
    }
  } else if (o && o in Object(e)) {
    return i(e);
  } else {
    return a(e);
  }
};