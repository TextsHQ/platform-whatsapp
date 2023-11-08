var n = this && this.__spreadArray || function (e, t, r) {
  if (r || arguments.length === 2) {
    for (var n, a = 0, o = t.length; a < o; a++) {
      if (!(!n && a in t)) {
        if (!n) {
          n = Array.prototype.slice.call(t, 0, a);
        }
        n[a] = t[a];
      }
    }
  }
  return e.concat(n || Array.prototype.slice.call(t));
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
exports.tileProps = exports.tileGroupProps = exports.rangeOf = exports.isView = exports.isViews = exports.isValue = exports.isRef = exports.isMaxDate = exports.isMinDate = exports.isClassName = exports.isCalendarType = undefined;
var o = a(require("./657531.js"));
var i = require("./771290.js");
var u = Object.values(i.CALENDAR_TYPES);
var c = Object.values(i.DEPRECATED_CALENDAR_TYPES);
var s = ["century", "decade", "year", "month"];
exports.isCalendarType = o.default.oneOf(n(n([], u, true), c, true));
exports.isClassName = o.default.oneOfType([o.default.string, o.default.arrayOf(o.default.string)]);
exports.isMinDate = function (e, t, r) {
  var n = e[t];
  if (!n) {
    return null;
  }
  if (!(n instanceof Date)) {
    return new Error("Invalid prop `".concat(t, "` of type `").concat(typeof n, "` supplied to `").concat(r, "`, expected instance of `Date`."));
  }
  var a = e.maxDate;
  if (a && n > a) {
    return new Error("Invalid prop `".concat(t, "` of type `").concat(typeof n, "` supplied to `").concat(r, "`, minDate cannot be larger than maxDate."));
  } else {
    return null;
  }
};
exports.isMaxDate = function (e, t, r) {
  var n = e[t];
  if (!n) {
    return null;
  }
  if (!(n instanceof Date)) {
    return new Error("Invalid prop `".concat(t, "` of type `").concat(typeof n, "` supplied to `").concat(r, "`, expected instance of `Date`."));
  }
  var a = e.minDate;
  if (a && n < a) {
    return new Error("Invalid prop `".concat(t, "` of type `").concat(typeof n, "` supplied to `").concat(r, "`, maxDate cannot be smaller than minDate."));
  } else {
    return null;
  }
};
exports.isRef = o.default.oneOfType([o.default.func, o.default.exact({
  current: o.default.any
})]);
var l = o.default.arrayOf(o.default.oneOfType([o.default.instanceOf(Date), o.default.oneOf([null])]).isRequired);
exports.isValue = o.default.oneOfType([o.default.instanceOf(Date), o.default.oneOf([null]), l]);
exports.isViews = o.default.arrayOf(o.default.oneOf(s));
exports.isView = function (e, t, r) {
  var n = e[t];
  if (n === undefined || typeof n == "string" && s.indexOf(n) !== -1) {
    return null;
  } else {
    return new Error("Invalid prop `".concat(t, "` of value `").concat(n, "` supplied to `").concat(r, "`, expected one of [").concat(s.map(function (e) {
      return "\"".concat(e, "\"");
    }).join(", "), "]."));
  }
};
exports.isView.isRequired = function (e, r, n, a, o) {
  var i = e[r];
  if (i) {
    return (0, exports.isView)(e, r, n, a, o);
  } else {
    return new Error("The prop `".concat(r, "` is marked as required in `").concat(n, "`, but its value is `").concat(i, "`."));
  }
};
exports.rangeOf = function (e) {
  return o.default.arrayOf(e);
};
exports.tileGroupProps = {
  activeStartDate: o.default.instanceOf(Date).isRequired,
  hover: o.default.instanceOf(Date),
  locale: o.default.string,
  maxDate: exports.isMaxDate,
  minDate: exports.isMinDate,
  onClick: o.default.func,
  onMouseOver: o.default.func,
  tileClassName: o.default.oneOfType([o.default.func, exports.isClassName]),
  tileContent: o.default.oneOfType([o.default.func, o.default.node]),
  value: exports.isValue,
  valueType: o.default.oneOf(["century", "decade", "year", "month", "day"]).isRequired
};
exports.tileProps = {
  activeStartDate: o.default.instanceOf(Date).isRequired,
  classes: o.default.arrayOf(o.default.string.isRequired).isRequired,
  date: o.default.instanceOf(Date).isRequired,
  locale: o.default.string,
  maxDate: exports.isMaxDate,
  minDate: exports.isMinDate,
  onClick: o.default.func,
  onMouseOver: o.default.func,
  style: o.default.objectOf(o.default.oneOfType([o.default.string, o.default.number])),
  tileClassName: o.default.oneOfType([o.default.func, exports.isClassName]),
  tileContent: o.default.oneOfType([o.default.func, o.default.node]),
  tileDisabled: o.default.func
};