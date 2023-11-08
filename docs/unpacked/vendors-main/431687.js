var n = this && this.__importDefault || function (e) {
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
var a = n(require("../vendor/667294.js"));
var o = require("./760235.js");
var i = require("./181752.js");
var u = require("./567286.js");
var c = "react-calendar__navigation";
exports.default = function (e) {
  var t;
  var r = e.activeStartDate;
  var n = e.drillUp;
  var s = e.formatMonthYear;
  var l = s === undefined ? u.formatMonthYear : s;
  var f = e.formatYear;
  var d = f === undefined ? u.formatYear : f;
  var p = e.locale;
  var v = e.maxDate;
  var h = e.minDate;
  var y = e.navigationAriaLabel;
  var g = y === undefined ? "" : y;
  var m = e.navigationAriaLive;
  var _ = e.navigationLabel;
  var b = e.next2AriaLabel;
  var w = b === undefined ? "" : b;
  var E = e.next2Label;
  var D = E === undefined ? "»" : E;
  var O = e.nextAriaLabel;
  var S = O === undefined ? "" : O;
  var x = e.nextLabel;
  var P = x === undefined ? "›" : x;
  var A = e.prev2AriaLabel;
  var C = A === undefined ? "" : A;
  var M = e.prev2Label;
  var T = M === undefined ? "«" : M;
  var N = e.prevAriaLabel;
  var k = N === undefined ? "" : N;
  var R = e.prevLabel;
  var j = R === undefined ? "‹" : R;
  var L = e.setActiveStartDate;
  var Y = e.showDoubleView;
  var I = e.view;
  var W = e.views.indexOf(I) > 0;
  var V = I !== "century";
  var B = (0, i.getBeginPrevious)(I, r);
  var F = V ? (0, i.getBeginPrevious2)(I, r) : undefined;
  var U = (0, i.getBeginNext)(I, r);
  var G = V ? (0, i.getBeginNext2)(I, r) : undefined;
  var H = function () {
    if (B.getFullYear() < 0) {
      return true;
    }
    var e = (0, i.getEndPrevious)(I, r);
    return h && h >= e;
  }();
  var q = V && function () {
    if (F.getFullYear() < 0) {
      return true;
    }
    var e = (0, i.getEndPrevious2)(I, r);
    return h && h >= e;
  }();
  var z = v && v < U;
  var $ = V && v && v < G;
  function K(e) {
    var t = function () {
      switch (I) {
        case "century":
          return (0, i.getCenturyLabel)(p, d, e);
        case "decade":
          return (0, i.getDecadeLabel)(p, d, e);
        case "year":
          return d(p, e);
        case "month":
          return l(p, e);
        default:
          throw new Error("Invalid view: ".concat(I, "."));
      }
    }();
    if (_) {
      return _({
        date: e,
        label: t,
        locale: p || (0, o.getUserLocale)() || undefined,
        view: I
      });
    } else {
      return t;
    }
  }
  return a.default.createElement("div", {
    className: c
  }, T !== null && V ? a.default.createElement("button", {
    "aria-label": C,
    className: "".concat(c, "__arrow ").concat(c, "__prev2-button"),
    disabled: q,
    onClick: function () {
      L(F, "prev2");
    },
    type: "button"
  }, T) : null, j !== null && a.default.createElement("button", {
    "aria-label": k,
    className: "".concat(c, "__arrow ").concat(c, "__prev-button"),
    disabled: H,
    onClick: function () {
      L(B, "prev");
    },
    type: "button"
  }, j), (t = "".concat(c, "__label"), a.default.createElement("button", {
    "aria-label": g,
    "aria-live": m,
    className: t,
    disabled: !W,
    onClick: n,
    style: {
      flexGrow: 1
    },
    type: "button"
  }, a.default.createElement("span", {
    className: "".concat(t, "__labelText ").concat(t, "__labelText--from")
  }, K(r)), Y ? a.default.createElement(a.default.Fragment, null, a.default.createElement("span", {
    className: "".concat(t, "__divider")
  }, " – "), a.default.createElement("span", {
    className: "".concat(t, "__labelText ").concat(t, "__labelText--to")
  }, K(U))) : null)), P !== null && a.default.createElement("button", {
    "aria-label": S,
    className: "".concat(c, "__arrow ").concat(c, "__next-button"),
    disabled: z,
    onClick: function () {
      L(U, "next");
    },
    type: "button"
  }, P), D !== null && V ? a.default.createElement("button", {
    "aria-label": w,
    className: "".concat(c, "__arrow ").concat(c, "__next2-button"),
    disabled: $,
    onClick: function () {
      L(G, "next2");
    },
    type: "button"
  }, D) : null);
};