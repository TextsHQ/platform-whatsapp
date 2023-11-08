var n = this && this.__assign || function () {
  return (n = Object.assign || function (e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      for (var a in t = arguments[r]) {
        if (Object.prototype.hasOwnProperty.call(t, a)) {
          e[a] = t[a];
        }
      }
    }
    return e;
  }).apply(this, arguments);
};
var a = this && this.__importDefault || function (e) {
  if (e && e.__esModule) {
    return e;
  } else {
    return {
      default: e
    };
  }
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
var o = a(require("../vendor/667294.js"));
var i = a(require("./703912.js"));
var u = require("./151592.js");
var c = function (e) {
  return o.default.createElement("div", {
    className: "react-calendar__century-view"
  }, o.default.createElement(i.default, n({}, e)));
};
c.propTypes = n({}, u.tileGroupProps);
exports.default = c;