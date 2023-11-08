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
var a = this && this.__createBinding || (Object.create ? function (e, t, r, n) {
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
var o = this && this.__setModuleDefault || (Object.create ? function (e, t) {
  Object.defineProperty(e, "default", {
    enumerable: true,
    value: t
  });
} : function (e, t) {
  e.default = t;
});
var i = this && this.__importStar || function (e) {
  if (e && e.__esModule) {
    return e;
  }
  var t = {};
  if (e != null) {
    for (var r in e) {
      if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r)) {
        a(t, e, r);
      }
    }
  }
  o(t, e);
  return t;
};
var u = this && this.__importDefault || function (e) {
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
var c = i(require("../vendor/667294.js"));
var s = u(require("./657531.js"));
var l = u(require("./557966.js"));
var f = u(require("./431687.js"));
var d = u(require("./949301.js"));
var p = u(require("./517391.js"));
var v = u(require("./272425.js"));
var h = u(require("./884264.js"));
var y = require("./181752.js");
var g = require("./151592.js");
var m = require("./234911.js");
var _ = "react-calendar";
var b = ["century", "decade", "year", "month"];
var w = ["decade", "year", "month", "day"];
var E = new Date();
E.setFullYear(1, 0, 1);
E.setHours(0, 0, 0, 0);
var D = new Date(8640000000000000);
function O(e) {
  if (e instanceof Date) {
    return e;
  } else {
    return new Date(e);
  }
}
function S(e, t) {
  return b.slice(b.indexOf(e), b.indexOf(t) + 1);
}
function x(e, t, r) {
  if (e && function (e, t, r) {
    return S(t, r).indexOf(e) !== -1;
  }(e, t, r)) {
    return e;
  } else {
    return r;
  }
}
function P(e) {
  var t = b.indexOf(e);
  return w[t];
}
function A(e, t) {
  var r = e.value;
  var n = e.minDate;
  var a = e.maxDate;
  var o = e.maxDetail;
  var i = function (e, t) {
    var r = Array.isArray(e) ? e[t] : e;
    if (!r) {
      return null;
    }
    var n = O(r);
    if (isNaN(n.getTime())) {
      throw new Error("Invalid date: ".concat(e));
    }
    return n;
  }(r, t);
  if (!i) {
    return null;
  }
  var u = P(o);
  var c = function () {
    switch (t) {
      case 0:
        return (0, y.getBegin)(u, i);
      case 1:
        return (0, y.getEnd)(u, i);
      default:
        throw new Error("Invalid index value: ".concat(t));
    }
  }();
  return (0, m.between)(c, n, a);
}
var C = function (e) {
  return A(e, 0);
};
var M = function (e) {
  return A(e, 1);
};
var T = function (e) {
  return [C, M].map(function (t) {
    return t(e);
  });
};
function N(e) {
  var t = e.maxDate;
  var r = e.maxDetail;
  var n = e.minDate;
  var a = e.minDetail;
  var o = e.value;
  var i = x(e.view, a, r);
  var u = C({
    value: o,
    minDate: n,
    maxDate: t,
    maxDetail: r
  }) || new Date();
  return (0, y.getBegin)(i, u);
}
function k(e) {
  return e && (!Array.isArray(e) || e.length === 1);
}
function R(e, t) {
  return e instanceof Date && t instanceof Date && e.getTime() === t.getTime();
}
var j = (0, c.forwardRef)(function (e, t) {
  var r;
  var a = e.activeStartDate;
  var o = e.allowPartialRange;
  var i = e.calendarType;
  var u = e.className;
  var s = e.defaultActiveStartDate;
  var g = e.defaultValue;
  var m = e.defaultView;
  var b = e.formatDay;
  var w = e.formatLongDate;
  var A = e.formatMonth;
  var j = e.formatMonthYear;
  var L = e.formatShortWeekday;
  var Y = e.formatWeekday;
  var I = e.formatYear;
  var W = e.goToRangeStartOnSelect;
  var V = W === undefined || W;
  var B = e.inputRef;
  var F = e.locale;
  var U = e.maxDate;
  var G = U === undefined ? D : U;
  var H = e.maxDetail;
  var q = H === undefined ? "month" : H;
  var z = e.minDate;
  var $ = z === undefined ? E : z;
  var K = e.minDetail;
  var Q = K === undefined ? "century" : K;
  var J = e.navigationAriaLabel;
  var Z = e.navigationAriaLive;
  var X = e.navigationLabel;
  var ee = e.next2AriaLabel;
  var te = e.next2Label;
  var re = e.nextAriaLabel;
  var ne = e.nextLabel;
  var ae = e.onActiveStartDateChange;
  var oe = e.onChange;
  var ie = e.onClickDay;
  var ue = e.onClickDecade;
  var ce = e.onClickMonth;
  var se = e.onClickWeekNumber;
  var le = e.onClickYear;
  var fe = e.onDrillDown;
  var de = e.onDrillUp;
  var pe = e.onViewChange;
  var ve = e.prev2AriaLabel;
  var he = e.prev2Label;
  var ye = e.prevAriaLabel;
  var ge = e.prevLabel;
  var me = e.returnValue;
  var _e = me === undefined ? "start" : me;
  var be = e.selectRange;
  var we = e.showDoubleView;
  var Ee = e.showFixedNumberOfWeeks;
  var De = e.showNavigation;
  var Oe = De === undefined || De;
  var Se = e.showNeighboringMonth;
  var xe = Se === undefined || Se;
  var Pe = e.showWeekNumbers;
  var Ae = e.tileClassName;
  var Ce = e.tileContent;
  var Me = e.tileDisabled;
  var Te = e.value;
  var Ne = e.view;
  var ke = (0, c.useState)(s);
  var Re = ke[0];
  var je = ke[1];
  var Le = (0, c.useState)(null);
  var Ye = Le[0];
  var Ie = Le[1];
  var We = (0, c.useState)(Array.isArray(g) ? g.map(function (e) {
    if (e !== null) {
      return O(e);
    } else {
      return null;
    }
  }) : g != null ? O(g) : null);
  var Ve = We[0];
  var Be = We[1];
  var Fe = (0, c.useState)(m);
  var Ue = Fe[0];
  var Ge = Fe[1];
  var He = a || Re || function (e) {
    var t = e.activeStartDate;
    var r = e.defaultActiveStartDate;
    var n = e.defaultValue;
    var a = e.defaultView;
    var o = e.maxDate;
    var i = e.maxDetail;
    var u = e.minDate;
    var c = e.minDetail;
    var s = e.value;
    var l = e.view;
    var f = x(l, c, i);
    var d = t || r;
    if (d) {
      return (0, y.getBegin)(f, d);
    } else {
      return N({
        maxDate: o,
        maxDetail: i,
        minDate: u,
        minDetail: c,
        value: s || n,
        view: l || a
      });
    }
  }({
    activeStartDate: a,
    defaultActiveStartDate: s,
    defaultValue: g,
    defaultView: m,
    maxDate: G,
    maxDetail: q,
    minDate: $,
    minDetail: Q,
    value: Te,
    view: Ne
  });
  var qe = (r = be && k(Ve) ? Ve : Te !== undefined ? Te : Ve) ? Array.isArray(r) ? r.map(function (e) {
    if (e !== null) {
      return O(e);
    } else {
      return null;
    }
  }) : r !== null ? O(r) : null : null;
  var ze = P(q);
  var $e = x(Ne || Ue, Q, q);
  var Ke = S(Q, q);
  var Qe = be ? Ye : null;
  var Je = Ke.indexOf($e) < Ke.length - 1;
  var Ze = Ke.indexOf($e) > 0;
  var Xe = (0, c.useCallback)(function (e) {
    return function () {
      switch (_e) {
        case "start":
          return C;
        case "end":
          return M;
        case "range":
          return T;
        default:
          throw new Error("Invalid returnValue.");
      }
    }()({
      maxDate: G,
      maxDetail: q,
      minDate: $,
      value: e
    });
  }, [G, q, $, _e]);
  var et = (0, c.useCallback)(function (e, t) {
    je(e);
    var r = {
      action: t,
      activeStartDate: e,
      value: qe,
      view: $e
    };
    if (ae && !R(He, e)) {
      ae(r);
    }
  }, [He, ae, qe, $e]);
  var tt = (0, c.useCallback)(function (e, t) {
    var r = function () {
      switch ($e) {
        case "century":
          return ue;
        case "decade":
          return le;
        case "year":
          return ce;
        case "month":
          return ie;
        default:
          throw new Error("Invalid view: ".concat($e, "."));
      }
    }();
    if (r) {
      r(e, t);
    }
  }, [ie, ue, ce, le, $e]);
  var rt = (0, c.useCallback)(function (e, t) {
    if (Je) {
      tt(e, t);
      var r = Ke[Ke.indexOf($e) + 1];
      if (!r) {
        throw new Error("Attempted to drill down from the lowest view.");
      }
      je(e);
      Ge(r);
      var n = {
        action: "drillDown",
        activeStartDate: e,
        value: qe,
        view: r
      };
      if (ae && !R(He, e)) {
        ae(n);
      }
      if (pe && $e !== r) {
        pe(n);
      }
      if (fe) {
        fe(n);
      }
    }
  }, [He, Je, ae, tt, fe, pe, qe, $e, Ke]);
  var nt = (0, c.useCallback)(function () {
    if (Ze) {
      var e = Ke[Ke.indexOf($e) - 1];
      if (!e) {
        throw new Error("Attempted to drill up from the highest view.");
      }
      var t = (0, y.getBegin)(e, He);
      je(t);
      Ge(e);
      var r = {
        action: "drillUp",
        activeStartDate: t,
        value: qe,
        view: e
      };
      if (ae && !R(He, t)) {
        ae(r);
      }
      if (pe && $e !== e) {
        pe(r);
      }
      if (de) {
        de(r);
      }
    }
  }, [He, Ze, ae, de, pe, qe, $e, Ke]);
  var at = (0, c.useCallback)(function (e, t) {
    var r = qe;
    tt(e, t);
    var n;
    var a = be && !k(r);
    if (be) {
      if (a) {
        n = (0, y.getBegin)(ze, e);
      } else {
        if (!r) {
          throw new Error("previousValue is required");
        }
        if (Array.isArray(r)) {
          throw new Error("previousValue must not be an array");
        }
        n = (0, y.getValueRange)(ze, r, e);
      }
    } else {
      n = Xe(e);
    }
    var i = !be || a || V ? N({
      maxDate: G,
      maxDetail: q,
      minDate: $,
      minDetail: Q,
      value: n,
      view: $e
    }) : null;
    t.persist();
    je(i);
    Be(n);
    var u = {
      action: "onChange",
      activeStartDate: i,
      value: n,
      view: $e
    };
    if (ae && !R(He, i)) {
      ae(u);
    }
    if (oe) {
      if (be) {
        if (k(n)) {
          if (o) {
            if (Array.isArray(n)) {
              throw new Error("value must not be an array");
            }
            oe([n || null, null], t);
          }
        } else {
          oe(n || null, t);
        }
      } else {
        oe(n || null, t);
      }
    }
  }, [He, o, Xe, V, G, q, $, Q, ae, oe, tt, be, qe, ze, $e]);
  function ot(e) {
    Ie(e);
  }
  function it() {
    Ie(null);
  }
  function ut(e) {
    var t = {
      activeStartDate: e ? (0, y.getBeginNext)($e, He) : (0, y.getBegin)($e, He),
      hover: Qe,
      locale: F,
      maxDate: G,
      minDate: $,
      onClick: Je ? rt : at,
      onMouseOver: be ? ot : undefined,
      tileClassName: Ae,
      tileContent: Ce,
      tileDisabled: Me,
      value: qe,
      valueType: ze
    };
    switch ($e) {
      case "century":
        return c.default.createElement(d.default, n({
          formatYear: I
        }, t));
      case "decade":
        return c.default.createElement(p.default, n({
          formatYear: I
        }, t));
      case "year":
        return c.default.createElement(v.default, n({
          formatMonth: A,
          formatMonthYear: j
        }, t));
      case "month":
        return c.default.createElement(h.default, n({
          calendarType: i,
          formatDay: b,
          formatLongDate: w,
          formatShortWeekday: L,
          formatWeekday: Y,
          onClickWeekNumber: se,
          onMouseLeave: be ? it : undefined,
          showFixedNumberOfWeeks: Ee !== undefined ? Ee : we,
          showNeighboringMonth: xe,
          showWeekNumbers: Pe
        }, t));
      default:
        throw new Error("Invalid view: ".concat($e, "."));
    }
  }
  (0, c.useImperativeHandle)(t, function () {
    return {
      activeStartDate: He,
      drillDown: rt,
      drillUp: nt,
      onChange: at,
      setActiveStartDate: et,
      value: qe,
      view: $e
    };
  }, [He, rt, nt, at, et, qe, $e]);
  var ct = Array.isArray(qe) ? qe : [qe];
  return c.default.createElement("div", {
    className: (0, l.default)(_, be && ct.length === 1 && "".concat(_, "--selectRange"), we && "".concat(_, "--doubleView"), u),
    ref: B
  }, Oe ? c.default.createElement(f.default, {
    activeStartDate: He,
    drillUp: nt,
    formatMonthYear: j,
    formatYear: I,
    locale: F,
    maxDate: G,
    minDate: $,
    navigationAriaLabel: J,
    navigationAriaLive: Z,
    navigationLabel: X,
    next2AriaLabel: ee,
    next2Label: te,
    nextAriaLabel: re,
    nextLabel: ne,
    prev2AriaLabel: ve,
    prev2Label: he,
    prevAriaLabel: ye,
    prevLabel: ge,
    setActiveStartDate: et,
    showDoubleView: we,
    view: $e,
    views: Ke
  }) : null, c.default.createElement("div", {
    className: "".concat(_, "__viewContainer"),
    onBlur: be ? it : undefined,
    onMouseLeave: be ? it : undefined
  }, ut(), we ? ut(true) : null));
});
var L = s.default.instanceOf(Date);
var Y = s.default.oneOfType([s.default.string, s.default.instanceOf(Date)]);
var I = s.default.oneOfType([Y, (0, g.rangeOf)(Y)]);
j.propTypes = {
  activeStartDate: L,
  allowPartialRange: s.default.bool,
  calendarType: g.isCalendarType,
  className: g.isClassName,
  defaultActiveStartDate: L,
  defaultValue: I,
  defaultView: g.isView,
  formatDay: s.default.func,
  formatLongDate: s.default.func,
  formatMonth: s.default.func,
  formatMonthYear: s.default.func,
  formatShortWeekday: s.default.func,
  formatWeekday: s.default.func,
  formatYear: s.default.func,
  goToRangeStartOnSelect: s.default.bool,
  inputRef: g.isRef,
  locale: s.default.string,
  maxDate: g.isMaxDate,
  maxDetail: s.default.oneOf(b),
  minDate: g.isMinDate,
  minDetail: s.default.oneOf(b),
  navigationAriaLabel: s.default.string,
  navigationAriaLive: s.default.oneOf(["off", "polite", "assertive"]),
  navigationLabel: s.default.func,
  next2AriaLabel: s.default.string,
  next2Label: s.default.node,
  nextAriaLabel: s.default.string,
  nextLabel: s.default.node,
  onActiveStartDateChange: s.default.func,
  onChange: s.default.func,
  onClickDay: s.default.func,
  onClickDecade: s.default.func,
  onClickMonth: s.default.func,
  onClickWeekNumber: s.default.func,
  onClickYear: s.default.func,
  onDrillDown: s.default.func,
  onDrillUp: s.default.func,
  onViewChange: s.default.func,
  prev2AriaLabel: s.default.string,
  prev2Label: s.default.node,
  prevAriaLabel: s.default.string,
  prevLabel: s.default.node,
  returnValue: s.default.oneOf(["start", "end", "range"]),
  selectRange: s.default.bool,
  showDoubleView: s.default.bool,
  showFixedNumberOfWeeks: s.default.bool,
  showNavigation: s.default.bool,
  showNeighboringMonth: s.default.bool,
  showWeekNumbers: s.default.bool,
  tileClassName: s.default.oneOfType([s.default.func, g.isClassName]),
  tileContent: s.default.oneOfType([s.default.func, s.default.node]),
  tileDisabled: s.default.func,
  value: I,
  view: g.isView
};
exports.default = j;