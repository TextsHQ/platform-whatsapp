var r = require("./862488.js");
var i = require("./701469.js");
module.exports = function (e, t, n) {
  var a = t(e);
  if (i(e)) {
    return a;
  } else {
    return r(a, n(e));
  }
};