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
var a = this && this.__rest || function (e, t) {
  var r = {};
  for (var n in e) {
    if (Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0) {
      r[n] = e[n];
    }
  }
  if (e != null && typeof Object.getOwnPropertySymbols == "function") {
    var a = 0;
    for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) {
      if (t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a])) {
        r[n[a]] = e[n[a]];
      }
    }
  }
  return r;
};
var o = this && this.__importDefault || function (e) {
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
var i = o(require("../vendor/667294.js"));
var u = require("./339015.js");
var c = o(require("./629909.js"));
var s = o(require("./489008.js"));
var l = require("./181752.js");
exports.default = function (e) {
  var t = e.activeStartDate;
  var r = e.hover;
  var o = e.value;
  var f = e.valueType;
  var d = a(e, ["activeStartDate", "hover", "value", "valueType"]);
  var p = (0, l.getBeginOfDecadeYear)(t);
  var v = p + 9;
  return i.default.createElement(c.default, {
    className: "react-calendar__decade-view__years",
    dateTransform: u.getYearStart,
    dateType: "year",
    end: v,
    hover: r,
    renderTile: function (e) {
      var r = e.date;
      var o = a(e, ["date"]);
      return i.default.createElement(s.default, n({
        key: r.getTime()
      }, d, o, {
        activeStartDate: t,
        date: r
      }));
    },
    start: p,
    value: o,
    valueType: f
  });
};