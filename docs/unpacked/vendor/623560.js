var r = require("./644239.js");
var i = require("./513218.js");
module.exports = function (e) {
  if (!i(e)) {
    return false;
  }
  var t = r(e);
  return t == "[object Function]" || t == "[object GeneratorFunction]" || t == "[object AsyncFunction]" || t == "[object Proxy]";
};