var r = require("./690939.js");
var i = require("./227361.js");
var a = require("./379095.js");
var o = require("./115403.js");
var s = require("./689162.js");
var u = require("./542634.js");
var l = require("./240327.js");
module.exports = function (e, t) {
  if (o(e) && s(t)) {
    return u(l(e), t);
  } else {
    return function (n) {
      var o = i(n, e);
      if (o === undefined && o === t) {
        return a(n, e);
      } else {
        return r(t, o, 3);
      }
    };
  }
};