exports.__esModule = true;
exports.useFocus = function (e) {
  var t = e.disabled;
  var n = e.onBlur;
  var u = e.onBlurCapture;
  var l = e.onFocus;
  var c = e.onFocusCapture;
  var f = e.onFocusChange;
  var d = (0, r.useCallback)(function (e) {
    var r = [(0, i.addEvent)(e, "blur", function (e) {
      if (!t) {
        if (n != null) {
          n(e);
        }
        if (f != null) {
          f(false, e);
        }
      }
    }, o), (0, i.addEvent)(e, "focus", function (e) {
      if (!t) {
        if (l != null) {
          l(e);
        }
        if (f != null) {
          f(true, e);
        }
      }
    }, o), (0, i.addEvent)(e, "blur", t ? null : u, s), (0, i.addEvent)(e, "focus", t ? null : c, s)];
    return function () {
      r.forEach(function (e) {
        e();
      });
    };
  }, [t, n, u, l, c, f]);
  return (0, a.useRefCallback)(d);
};
var r = require("./667294.js");
var i = require("./162958.js");
var a = require("./511698.js");
var o = {
  passive: true
};
var s = {
  capture: true,
  passive: true
};