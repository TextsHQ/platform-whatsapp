var n;
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
exports.mapCalendarType = exports.getTileClasses = exports.doRangesOverlap = exports.isRangeWithinRange = exports.isValueWithinRange = exports.between = undefined;
var o = a(require("./645298.js"));
var i = require("./771290.js");
var u = require("./181752.js");
function c(e, t) {
  return t[0] <= e && t[1] >= e;
}
function s(e, t) {
  return e[0] <= t[0] && e[1] >= t[1];
}
function l(e, t) {
  return c(e[0], t) || c(e[1], t);
}
function f(e, t, r) {
  var n = [];
  if (l(t, e)) {
    n.push(r);
    var a = c(e[0], t);
    var o = c(e[1], t);
    if (a) {
      n.push("".concat(r, "Start"));
    }
    if (o) {
      n.push("".concat(r, "End"));
    }
    if (a && o) {
      n.push("".concat(r, "BothEnds"));
    }
  }
  return n;
}
exports.between = function (e, t, r) {
  if (t && t > e) {
    return t;
  } else if (r && r < e) {
    return r;
  } else {
    return e;
  }
};
exports.isValueWithinRange = c;
exports.isRangeWithinRange = s;
exports.doRangesOverlap = l;
exports.getTileClasses = function (e) {
  if (!e) {
    throw new Error("args is required");
  }
  var t = e.value;
  var r = e.date;
  var n = e.hover;
  var a = "react-calendar__tile";
  var o = [a];
  if (!r) {
    return o;
  }
  var i = new Date();
  var d = function () {
    if (Array.isArray(r)) {
      return r;
    }
    var t = e.dateType;
    if (!t) {
      throw new Error("dateType is required when date is not an array of two dates");
    }
    return (0, u.getRange)(t, r);
  }();
  if (c(i, d)) {
    o.push("".concat(a, "--now"));
  }
  if (!t || !function (e) {
    if (Array.isArray(e)) {
      return e[0] !== null && e[1] !== null;
    } else {
      return e !== null;
    }
  }(t)) {
    return o;
  }
  var p = function () {
    if (Array.isArray(t)) {
      return t;
    }
    var r = e.valueType;
    if (!r) {
      throw new Error("valueType is required when value is not an array of two dates");
    }
    return (0, u.getRange)(r, t);
  }();
  if (s(p, d)) {
    o.push("".concat(a, "--active"));
  } else if (l(p, d)) {
    o.push("".concat(a, "--hasActive"));
  }
  var v = f(p, d, "".concat(a, "--range"));
  o.push.apply(o, v);
  var h = Array.isArray(t) ? t : [t];
  if (n && h.length === 1) {
    var y = f(n > p[0] ? [p[0], n] : [n, p[0]], d, "".concat(a, "--hover"));
    o.push.apply(o, y);
  }
  return o;
};
(n = {})[i.DEPRECATED_CALENDAR_TYPES.ARABIC] = i.CALENDAR_TYPES.ISLAMIC;
n[i.DEPRECATED_CALENDAR_TYPES.HEBREW] = i.CALENDAR_TYPES.HEBREW;
n[i.DEPRECATED_CALENDAR_TYPES.ISO_8601] = i.CALENDAR_TYPES.ISO_8601;
n[i.DEPRECATED_CALENDAR_TYPES.US] = i.CALENDAR_TYPES.GREGORY;
var d = n;
var p = false;
exports.mapCalendarType = function (e) {
  if (function (e) {
    return e !== undefined && e in i.DEPRECATED_CALENDAR_TYPES;
  }(e)) {
    var t = d[e];
    (0, o.default)(p, "Specifying calendarType=\"".concat(e, "\" is deprecated. Use calendarType=\"").concat(t, "\" instead."));
    p = true;
    return t;
  }
  return e;
};