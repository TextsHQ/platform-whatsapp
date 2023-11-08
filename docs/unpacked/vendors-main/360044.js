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
var u = "react-calendar__tile";
exports.default = function (e) {
  var t = e.onClickWeekNumber;
  var r = e.weekNumber;
  var o = i.default.createElement("span", null, r);
  if (t) {
    var c = e.date;
    var s = e.onClickWeekNumber;
    var l = e.weekNumber;
    var f = a(e, ["date", "onClickWeekNumber", "weekNumber"]);
    return i.default.createElement("button", n({}, f, {
      className: u,
      onClick: function (e) {
        return s(l, c, e);
      },
      type: "button"
    }), o);
  }
  e.date;
  e.onClickWeekNumber;
  e.weekNumber;
  f = a(e, ["date", "onClickWeekNumber", "weekNumber"]);
  return i.default.createElement("div", n({}, f, {
    className: u
  }), o);
};