var t = 1000;
var r = t * 60;
var n = r * 60;
var a = n * 24;
var o = a * 365.25;
function i(e, t, r) {
  if (!(e < t)) {
    if (e < t * 1.5) {
      return Math.floor(e / t) + " " + r;
    } else {
      return Math.ceil(e / t) + " " + r + "s";
    }
  }
}
module.exports = function (e, u) {
  u = u || {};
  var c;
  var s = typeof e;
  if (s === "string" && e.length > 0) {
    return function (e) {
      if ((e = String(e)).length > 100) {
        return;
      }
      var i = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
      if (!i) {
        return;
      }
      var u = parseFloat(i[1]);
      switch ((i[2] || "ms").toLowerCase()) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return u * o;
        case "days":
        case "day":
        case "d":
          return u * a;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return u * n;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return u * r;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return u * t;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return u;
        default:
          return;
      }
    }(e);
  }
  if (s === "number" && isNaN(e) === false) {
    if (u.long) {
      return i(c = e, a, "day") || i(c, n, "hour") || i(c, r, "minute") || i(c, t, "second") || c + " ms";
    } else {
      return function (e) {
        if (e >= a) {
          return Math.round(e / a) + "d";
        }
        if (e >= n) {
          return Math.round(e / n) + "h";
        }
        if (e >= r) {
          return Math.round(e / r) + "m";
        }
        if (e >= t) {
          return Math.round(e / t) + "s";
        }
        return e + "ms";
      }(e);
    }
  }
  throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e));
};