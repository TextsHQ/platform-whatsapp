var r;
exports.__esModule = true;
exports.default = function () {
  var e = false;
  if (i) {
    try {
      var t = {};
      Object.defineProperty(t, "passive", {
        get: function () {
          e = true;
          return false;
        }
      });
      window.addEventListener("test", null, t);
      window.removeEventListener("test", null, t);
    } catch (e) {}
  }
  return e;
};
var i = (0, ((r = require("./903806.js")) && r.__esModule ? r : {
  default: r
}).default)();
module.exports = exports.default;