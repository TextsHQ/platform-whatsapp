function r(e, t, r) {
  return function (n, a) {
    if (a === undefined) {
      a = r;
    }
    var o = e(n) + a;
    return t(o);
  };
}
function n(e) {
  return function (t) {
    return new Date(e(t).getTime() - 1);
  };
}
function a(e, t) {
  return function (r) {
    return [e(r), t(r)];
  };
}
function o(e) {
  if (e instanceof Date) {
    return e.getFullYear();
  }
  if (typeof e == "number") {
    return e;
  }
  var t = parseInt(e, 10);
  if (typeof e == "string" && !isNaN(t)) {
    return t;
  }
  throw new Error("Failed to get year from date: ".concat(e, "."));
}
function i(e) {
  if (e instanceof Date) {
    return e.getMonth();
  }
  throw new Error("Failed to get month from date: ".concat(e, "."));
}
function u(e) {
  if (e instanceof Date) {
    return e.getMonth() + 1;
  }
  throw new Error("Failed to get human-readable month from date: ".concat(e, "."));
}
function c(e) {
  if (e instanceof Date) {
    return e.getDate();
  }
  throw new Error("Failed to get year from date: ".concat(e, "."));
}
function s(e) {
  if (e instanceof Date) {
    return e.getHours();
  }
  if (typeof e == "string") {
    var t = e.split(":");
    if (t.length >= 2) {
      var r = t[0];
      if (r) {
        var n = parseInt(r, 10);
        if (!isNaN(n)) {
          return n;
        }
      }
    }
  }
  throw new Error("Failed to get hours from date: ".concat(e, "."));
}
function l(e) {
  if (e instanceof Date) {
    return e.getMinutes();
  }
  if (typeof e == "string") {
    var t = e.split(":");
    if (t.length >= 2) {
      var r = t[1] || "0";
      var n = parseInt(r, 10);
      if (!isNaN(n)) {
        return n;
      }
    }
  }
  throw new Error("Failed to get minutes from date: ".concat(e, "."));
}
function f(e) {
  if (e instanceof Date) {
    return e.getSeconds();
  }
  if (typeof e == "string") {
    var t = e.split(":");
    if (t.length >= 2) {
      var r = t[2] || "0";
      var n = parseInt(r, 10);
      if (!isNaN(n)) {
        return n;
      }
    }
  }
  throw new Error("Failed to get seconds from date: ".concat(e, "."));
}
function d(e) {
  var t = o(e);
  var r = t + (1 - t) % 100;
  var n = new Date();
  n.setFullYear(r, 0, 1);
  n.setHours(0, 0, 0, 0);
  return n;
}
function p(e) {
  var t = o(e);
  var r = t + (1 - t) % 10;
  var n = new Date();
  n.setFullYear(r, 0, 1);
  n.setHours(0, 0, 0, 0);
  return n;
}
function v(e) {
  var t = o(e);
  var r = new Date();
  r.setFullYear(t, 0, 1);
  r.setHours(0, 0, 0, 0);
  return r;
}
function h(e, t) {
  return function (r, n) {
    if (n === undefined) {
      n = t;
    }
    var a = o(r);
    var u = i(r) + n;
    var c = new Date();
    c.setFullYear(a, u, 1);
    c.setHours(0, 0, 0, 0);
    return e(c);
  };
}
function y(e) {
  var t = o(e);
  var r = i(e);
  var n = new Date();
  n.setFullYear(t, r, 1);
  n.setHours(0, 0, 0, 0);
  return n;
}
function g(e, t) {
  return function (r, n) {
    if (n === undefined) {
      n = t;
    }
    var a = o(r);
    var u = i(r);
    var s = c(r) + n;
    var l = new Date();
    l.setFullYear(a, u, s);
    l.setHours(0, 0, 0, 0);
    return e(l);
  };
}
function m(e) {
  var t = o(e);
  var r = i(e);
  var n = c(e);
  var a = new Date();
  a.setFullYear(t, r, n);
  a.setHours(0, 0, 0, 0);
  return a;
}
function _(e, t) {
  if (t === undefined) {
    t = 2;
  }
  var r = "".concat(e);
  if (r.length >= t) {
    return e;
  } else {
    return "0000".concat(r).slice(-t);
  }
}
function b(e) {
  var t = _(s(e));
  var r = _(l(e));
  var n = _(f(e));
  return "".concat(t, ":").concat(r, ":").concat(n);
}
function w(e) {
  var t = _(o(e), 4);
  var r = _(u(e));
  var n = _(c(e));
  return "".concat(t, "-").concat(r, "-").concat(n);
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getISOLocalDateTime = exports.getISOLocalDate = exports.getISOLocalMonth = exports.getHoursMinutesSeconds = exports.getHoursMinutes = exports.getDaysInMonth = exports.getDayRange = exports.getNextDayEnd = exports.getPreviousDayEnd = exports.getDayEnd = exports.getNextDayStart = exports.getPreviousDayStart = exports.getDayStart = exports.getMonthRange = exports.getNextMonthEnd = exports.getPreviousMonthEnd = exports.getMonthEnd = exports.getNextMonthStart = exports.getPreviousMonthStart = exports.getMonthStart = exports.getYearRange = exports.getNextYearEnd = exports.getPreviousYearEnd = exports.getYearEnd = exports.getNextYearStart = exports.getPreviousYearStart = exports.getYearStart = exports.getDecadeRange = exports.getNextDecadeEnd = exports.getPreviousDecadeEnd = exports.getDecadeEnd = exports.getNextDecadeStart = exports.getPreviousDecadeStart = exports.getDecadeStart = exports.getCenturyRange = exports.getNextCenturyEnd = exports.getPreviousCenturyEnd = exports.getCenturyEnd = exports.getNextCenturyStart = exports.getPreviousCenturyStart = exports.getCenturyStart = exports.getMilliseconds = exports.getSeconds = exports.getMinutes = exports.getHours = exports.getDate = exports.getMonthHuman = exports.getMonth = exports.getYear = undefined;
exports.getYear = o;
exports.getMonth = i;
exports.getMonthHuman = u;
exports.getDate = c;
exports.getHours = s;
exports.getMinutes = l;
exports.getSeconds = f;
exports.getMilliseconds = function (e) {
  if (e instanceof Date) {
    return e.getMilliseconds();
  }
  if (typeof e == "string") {
    var t = e.split(":");
    if (t.length >= 2) {
      var r = (t[2] || "0").split(".")[1] || "0";
      var n = parseInt(r, 10);
      if (!isNaN(n)) {
        return n;
      }
    }
  }
  throw new Error("Failed to get seconds from date: ".concat(e, "."));
};
exports.getCenturyStart = d;
exports.getPreviousCenturyStart = r(o, d, -100);
exports.getNextCenturyStart = r(o, d, 100);
exports.getCenturyEnd = n(exports.getNextCenturyStart);
exports.getPreviousCenturyEnd = r(o, exports.getCenturyEnd, -100);
exports.getNextCenturyEnd = r(o, exports.getCenturyEnd, 100);
exports.getCenturyRange = a(d, exports.getCenturyEnd);
exports.getDecadeStart = p;
exports.getPreviousDecadeStart = r(o, p, -10);
exports.getNextDecadeStart = r(o, p, 10);
exports.getDecadeEnd = n(exports.getNextDecadeStart);
exports.getPreviousDecadeEnd = r(o, exports.getDecadeEnd, -10);
exports.getNextDecadeEnd = r(o, exports.getDecadeEnd, 10);
exports.getDecadeRange = a(p, exports.getDecadeEnd);
exports.getYearStart = v;
exports.getPreviousYearStart = r(o, v, -1);
exports.getNextYearStart = r(o, v, 1);
exports.getYearEnd = n(exports.getNextYearStart);
exports.getPreviousYearEnd = r(o, exports.getYearEnd, -1);
exports.getNextYearEnd = r(o, exports.getYearEnd, 1);
exports.getYearRange = a(v, exports.getYearEnd);
exports.getMonthStart = y;
exports.getPreviousMonthStart = h(y, -1);
exports.getNextMonthStart = h(y, 1);
exports.getMonthEnd = n(exports.getNextMonthStart);
exports.getPreviousMonthEnd = h(exports.getMonthEnd, -1);
exports.getNextMonthEnd = h(exports.getMonthEnd, 1);
exports.getMonthRange = a(y, exports.getMonthEnd);
exports.getDayStart = m;
exports.getPreviousDayStart = g(m, -1);
exports.getNextDayStart = g(m, 1);
exports.getDayEnd = n(exports.getNextDayStart);
exports.getPreviousDayEnd = g(exports.getDayEnd, -1);
exports.getNextDayEnd = g(exports.getDayEnd, 1);
exports.getDayRange = a(m, exports.getDayEnd);
exports.getDaysInMonth = function (e) {
  return c((0, exports.getMonthEnd)(e));
};
exports.getHoursMinutes = function (e) {
  var t = _(s(e));
  var r = _(l(e));
  return "".concat(t, ":").concat(r);
};
exports.getHoursMinutesSeconds = b;
exports.getISOLocalMonth = function (e) {
  var t = _(o(e), 4);
  var r = _(u(e));
  return "".concat(t, "-").concat(r);
};
exports.getISOLocalDate = w;
exports.getISOLocalDateTime = function (e) {
  return "".concat(w(e), "T").concat(b(e));
};