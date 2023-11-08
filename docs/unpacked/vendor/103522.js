var r = require("./479833.js");
var i = /[\\^$.*+?()[\]{}|]/g;
var a = RegExp(i.source);
module.exports = function (e) {
  if ((e = r(e)) && a.test(e)) {
    return e.replace(i, "\\$&");
  } else {
    return e;
  }
};