var n = this && this.__createBinding || (Object.create ? function (e, t, r, n) {
  if (n === undefined) {
    n = r;
  }
  var a = Object.getOwnPropertyDescriptor(t, r);
  if (!(a && !("get" in a ? !t.__esModule : a.writable || a.configurable))) {
    a = {
      enumerable: true,
      get: function () {
        return t[r];
      }
    };
  }
  Object.defineProperty(e, n, a);
} : function (e, t, r, n) {
  if (n === undefined) {
    n = r;
  }
  e[n] = t[r];
});
var a = this && this.__setModuleDefault || (Object.create ? function (e, t) {
  Object.defineProperty(e, "default", {
    enumerable: true,
    value: t
  });
} : function (e, t) {
  e.default = t;
});
var o = this && this.__importStar || function (e) {
  if (e && e.__esModule) {
    return e;
  }
  var t = {};
  if (e != null) {
    for (var r in e) {
      if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r)) {
        n(t, e, r);
      }
    }
  }
  a(t, e);
  return t;
};
var i = this && this.__importDefault || function (e) {
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
var u = o(require("../vendor/667294.js"));
var c = i(require("./557966.js"));
exports.default = function (e) {
  var t = e.activeStartDate;
  var r = e.children;
  var n = e.classes;
  var a = e.date;
  var o = e.formatAbbr;
  var i = e.locale;
  var s = e.maxDate;
  var l = e.maxDateTransform;
  var f = e.minDate;
  var d = e.minDateTransform;
  var p = e.onClick;
  var v = e.onMouseOver;
  var h = e.style;
  var y = e.tileClassName;
  var g = e.tileContent;
  var m = e.tileDisabled;
  var _ = e.view;
  var b = (0, u.useMemo)(function () {
    if (typeof y == "function") {
      return y({
        activeStartDate: t,
        date: a,
        view: _
      });
    } else {
      return y;
    }
  }, [t, a, y, _]);
  var w = (0, u.useMemo)(function () {
    if (typeof g == "function") {
      return g({
        activeStartDate: t,
        date: a,
        view: _
      });
    } else {
      return g;
    }
  }, [t, a, g, _]);
  return u.default.createElement("button", {
    className: (0, c.default)(n, b),
    disabled: f && d(f) > a || s && l(s) < a || m && m({
      activeStartDate: t,
      date: a,
      view: _
    }),
    onClick: p ? function (e) {
      return p(a, e);
    } : undefined,
    onFocus: v ? function () {
      return v(a);
    } : undefined,
    onMouseOver: v ? function () {
      return v(a);
    } : undefined,
    style: h,
    type: "button"
  }, o ? u.default.createElement("abbr", {
    "aria-label": o(i, a)
  }, r) : r, w);
};