var r;
exports.__esModule = true;
exports.addEvent = function (e, t, n, r) {
  var i = s(t, r);
  if (typeof n == "function") {
    var o = e;
    o.addEventListener(t, n, i);
    return function () {
      if (o != null) {
        o.removeEventListener(t, n, i);
      }
    };
  }
  return a;
};
exports.removeEvent = function (e, t, n, r) {
  var i = s(t, r);
  if (typeof n == "function") {
    e.removeEventListener(t, n, i);
  }
};
var i = (0, ((r = require("./865255.js")) && r.__esModule ? r : {
  default: r
}).default)();
var a = function () {};
var o = {
  touchstart: true,
  touchmove: true,
  scroll: true
};
function s(e, t) {
  if (t != null) {
    var n = t.capture;
    var r = t.passive;
    if (i) {
      if (r == null || o[e] === true) {
        return {
          capture: n,
          passive: true
        };
      } else {
        return t;
      }
    } else {
      return Boolean(n);
    }
  }
  return false;
}