Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isWeekend = exports.isCurrentDayOfWeek = exports.getDecadeLabel = exports.getCenturyLabel = exports.getValueRange = exports.getRange = exports.getEndPrevious2 = exports.getEndPrevious = exports.getEnd = exports.getBeginNext2 = exports.getBeginPrevious2 = exports.getBeginNext = exports.getBeginPrevious = exports.getBegin = exports.getWeekNumber = exports.getBeginOfWeek = exports.getBeginOfDecadeYear = exports.getBeginOfCenturyYear = exports.getDayOfWeek = undefined;
var n = require("./339015.js");
var a = require("./771290.js");
var o = require("./567286.js");
var i = a.WEEKDAYS[0];
var u = a.WEEKDAYS[5];
var c = a.WEEKDAYS[6];
function s(e, t) {
  if (t === undefined) {
    t = a.CALENDAR_TYPES.ISO_8601;
  }
  var r = e.getDay();
  switch (t) {
    case a.CALENDAR_TYPES.ISO_8601:
      return (r + 6) % 7;
    case a.CALENDAR_TYPES.ISLAMIC:
      return (r + 1) % 7;
    case a.CALENDAR_TYPES.HEBREW:
    case a.CALENDAR_TYPES.GREGORY:
      return r;
    default:
      throw new Error("Unsupported calendar type.");
  }
}
function l(e, t) {
  if (t === undefined) {
    t = a.CALENDAR_TYPES.ISO_8601;
  }
  var r = (0, n.getYear)(e);
  var o = (0, n.getMonth)(e);
  var i = e.getDate() - s(e, t);
  return new Date(r, o, i);
}
function f(e, t) {
  switch (e) {
    case "century":
      return (0, n.getCenturyStart)(t);
    case "decade":
      return (0, n.getDecadeStart)(t);
    case "year":
      return (0, n.getYearStart)(t);
    case "month":
      return (0, n.getMonthStart)(t);
    case "day":
      return (0, n.getDayStart)(t);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function d(e, t) {
  switch (e) {
    case "century":
      return (0, n.getCenturyEnd)(t);
    case "decade":
      return (0, n.getDecadeEnd)(t);
    case "year":
      return (0, n.getYearEnd)(t);
    case "month":
      return (0, n.getMonthEnd)(t);
    case "day":
      return (0, n.getDayEnd)(t);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function p(e, t, r) {
  if (t === undefined) {
    t = o.formatYear;
  }
  return r.map(function (r) {
    return t(e, r);
  }).join(" – ");
}
exports.getDayOfWeek = s;
exports.getBeginOfCenturyYear = function (e) {
  var t = (0, n.getCenturyStart)(e);
  return (0, n.getYear)(t);
};
exports.getBeginOfDecadeYear = function (e) {
  var t = (0, n.getDecadeStart)(e);
  return (0, n.getYear)(t);
};
exports.getBeginOfWeek = l;
exports.getWeekNumber = function (e, t) {
  if (t === undefined) {
    t = a.CALENDAR_TYPES.ISO_8601;
  }
  var r;
  var o = t === a.CALENDAR_TYPES.GREGORY ? a.CALENDAR_TYPES.GREGORY : a.CALENDAR_TYPES.ISO_8601;
  var i = l(e, t);
  var u = (0, n.getYear)(e) + 1;
  do {
    r = l(new Date(u, 0, o === a.CALENDAR_TYPES.ISO_8601 ? 4 : 1), t);
    u -= 1;
  } while (e < r);
  return Math.round((i.getTime() - r.getTime()) / 604800000) + 1;
};
exports.getBegin = f;
exports.getBeginPrevious = function (e, t) {
  switch (e) {
    case "century":
      return (0, n.getPreviousCenturyStart)(t);
    case "decade":
      return (0, n.getPreviousDecadeStart)(t);
    case "year":
      return (0, n.getPreviousYearStart)(t);
    case "month":
      return (0, n.getPreviousMonthStart)(t);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
};
exports.getBeginNext = function (e, t) {
  switch (e) {
    case "century":
      return (0, n.getNextCenturyStart)(t);
    case "decade":
      return (0, n.getNextDecadeStart)(t);
    case "year":
      return (0, n.getNextYearStart)(t);
    case "month":
      return (0, n.getNextMonthStart)(t);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
};
exports.getBeginPrevious2 = function (e, t) {
  switch (e) {
    case "decade":
      return (0, n.getPreviousDecadeStart)(t, -100);
    case "year":
      return (0, n.getPreviousYearStart)(t, -10);
    case "month":
      return (0, n.getPreviousMonthStart)(t, -12);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
};
exports.getBeginNext2 = function (e, t) {
  switch (e) {
    case "decade":
      return (0, n.getNextDecadeStart)(t, 100);
    case "year":
      return (0, n.getNextYearStart)(t, 10);
    case "month":
      return (0, n.getNextMonthStart)(t, 12);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
};
exports.getEnd = d;
exports.getEndPrevious = function (e, t) {
  switch (e) {
    case "century":
      return (0, n.getPreviousCenturyEnd)(t);
    case "decade":
      return (0, n.getPreviousDecadeEnd)(t);
    case "year":
      return (0, n.getPreviousYearEnd)(t);
    case "month":
      return (0, n.getPreviousMonthEnd)(t);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
};
exports.getEndPrevious2 = function (e, t) {
  switch (e) {
    case "decade":
      return (0, n.getPreviousDecadeEnd)(t, -100);
    case "year":
      return (0, n.getPreviousYearEnd)(t, -10);
    case "month":
      return (0, n.getPreviousMonthEnd)(t, -12);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
};
exports.getRange = function (e, t) {
  switch (e) {
    case "century":
      return (0, n.getCenturyRange)(t);
    case "decade":
      return (0, n.getDecadeRange)(t);
    case "year":
      return (0, n.getYearRange)(t);
    case "month":
      return (0, n.getMonthRange)(t);
    case "day":
      return (0, n.getDayRange)(t);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
};
exports.getValueRange = function (e, t, r) {
  var n = [t, r].sort(function (e, t) {
    return e.getTime() - t.getTime();
  });
  return [f(e, n[0]), d(e, n[1])];
};
exports.getCenturyLabel = function (e, t, r) {
  return p(e, t, (0, n.getCenturyRange)(r));
};
exports.getDecadeLabel = function (e, t, r) {
  return p(e, t, (0, n.getDecadeRange)(r));
};
exports.isCurrentDayOfWeek = function (e) {
  return e.getDay() === new Date().getDay();
};
exports.isWeekend = function (e, t) {
  if (t === undefined) {
    t = a.CALENDAR_TYPES.ISO_8601;
  }
  var r = e.getDay();
  switch (t) {
    case a.CALENDAR_TYPES.ISLAMIC:
    case a.CALENDAR_TYPES.HEBREW:
      return r === u || r === c;
    case a.CALENDAR_TYPES.ISO_8601:
    case a.CALENDAR_TYPES.GREGORY:
      return r === c || r === i;
    default:
      throw new Error("Unsupported calendar type.");
  }
};