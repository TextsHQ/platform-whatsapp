Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.YEAR_SECONDS = exports.WEEK_SECONDS = exports.WEEK_MILLISECONDS = exports.MonotonicTimer = exports.MINUTE_SECONDS = exports.MINUTE_MILLISECONDS = exports.MAX_INT = exports.HOUR_SECONDS = exports.HOUR_MILLISECONDS = exports.FIVE_MINUTES = exports.DEFAULT_UNIXTIME = exports.DAY_SECONDS = exports.DAY_MILLISECONDS = undefined;
exports.cappedMillisecondsUntil = m;
exports.castLongIntToUnixTime = function (e) {
  if (typeof e != "number") {
    if ((0, r.hexLongIsNegative)(e)) {
      return c;
    } else {
      return u;
    }
  } else {
    return f(e);
  }
};
exports.castMilliSecondsToUnixTime = _;
exports.castMillisTimeToUnixTime = function (e) {
  if (e == null) {
    return e;
  }
  if (e > u) {
    return _(e);
  } else {
    return f(e);
  }
};
exports.castToMillisTime = g;
exports.castToUnixTime = f;
exports.castUnixTimeToMillisTime = function (e) {
  return e * 1000;
};
exports.convertHexToDate = function (e) {
  const t = Number.parseInt(e, 16);
  if (Number.isFinite(t)) {
    return new Date(f(t) * 1000);
  }
  return null;
};
exports.daysDiff = function (e, t) {
  const n = Math.abs(e - t);
  return Math.ceil(n / s);
};
exports.delayUntil = function (e) {
  const t = m(e);
  return new Promise(e => {
    setTimeout(e, t);
  });
};
exports.fromMillisTime = function (e) {
  return e;
};
exports.futureUnixTime = function (e, t) {
  const n = t != null ? t : h();
  return f(Math.ceil(n + Math.max(e, 0)));
};
exports.getClockSkew = function () {
  return p;
};
exports.happenedWithin = function (e, t) {
  return v(h(), e, t);
};
exports.happenedWithinAt = v;
exports.isInFuture = function (e) {
  return y(e) > 0;
};
exports.isOverflowTime = function (e) {
  return e < c || e > u;
};
exports.isWithinNext24h = function (e) {
  return e - h() <= a;
};
exports.midnight = function () {
  return f(new Date().setHours(0, 0, 0, 0) / 1000 - p);
};
exports.midnightOn = function (e) {
  return f(T(e).setHours(0, 0, 0, 0) / 1000 - p);
};
exports.millisTime = function () {
  return M() - p * 1000;
};
exports.monotonicTime = E;
exports.monotonicTimeSince = S;
exports.oldest = function (e, t) {
  if (e < t) {
    return e;
  } else {
    return t;
  }
};
exports.pastUnixTime = function (e, t) {
  const n = t != null ? t : h();
  return f(Math.ceil(n - Math.max(e, 0)));
};
exports.performanceAbsoluteNow = M;
exports.sameDay = function (e, t) {
  if (Math.abs(e - t) > a) {
    return false;
  }
  const n = d.time === e ? d.day : T(e + p).getDay();
  const r = d.time === t ? d.day : T(t + p).getDay();
  d.time = t;
  d.day = r;
  return n === r;
};
exports.secondsUntil = y;
exports.setClockSkew = function (e) {
  p = e;
};
exports.timeSince_USE_ONLY_IF_APPROVED = function (e) {
  return Math.max(h() - e, 0);
};
exports.timeoutFor = function (e, t) {
  const n = h();
  const r = Math.max(e + t - n, 0);
  return Math.min(r * 1000, ~(1 << 31));
};
exports.toDate = T;
exports.toHttpHeaderDate = function (e) {
  return T(e).toUTCString();
};
exports.unixTime = h;
exports.unixTimeMs = function () {
  return Date.now() - p * 1000;
};
exports.unixTimeWithoutClockSkewCorrection = function () {
  return f(Date.now() / 1000);
};
exports.unskewedDate_USE_ONLY_IF_APPROVED = function () {
  return new Date();
};
var r = require("./390934.js");
exports.MINUTE_SECONDS = 60;
exports.FIVE_MINUTES = 300;
const i = 3600;
exports.HOUR_SECONDS = i;
const a = 86400;
exports.DAY_SECONDS = a;
exports.WEEK_SECONDS = 604800;
exports.YEAR_SECONDS = 31536000;
exports.MINUTE_MILLISECONDS = 60000;
const o = 3600000;
exports.HOUR_MILLISECONDS = o;
const s = 86400000;
exports.DAY_MILLISECONDS = s;
exports.WEEK_MILLISECONDS = 604800000;
const l = 1 << 31;
exports.DEFAULT_UNIXTIME = l;
const u = 2147483647;
exports.MAX_INT = u;
const c = -2147483647;
const d = {
  time: 0,
  day: -4
};
let p = 0;
function f(e) {
  return Math.max(c, Math.min(e | 0, u));
}
function _(e) {
  return f(e / 1000);
}
function g(e) {
  return e;
}
function m(e) {
  const t = Math.max(e - h(), 0);
  return Math.min(t * 1000, ~(1 << 31));
}
function h() {
  return f(Date.now() / 1000 - p);
}
function y(e) {
  return Math.max(e - h(), 0);
}
function E() {
  return performance.now();
}
function S(e) {
  return Math.floor(performance.now() - e);
}
function v(e, t, n) {
  return Math.abs(e - t) <= n;
}
function T(e) {
  return new Date(e * 1000);
}
function M() {
  return Date.now();
}
exports.MonotonicTimer = class {
  constructor() {
    const e = E();
    this._initTime = e;
    this._startTime = e;
  }
  reset() {
    this._startTime = E();
  }
  elapsed() {
    return S(this._startTime);
  }
  cumulative() {
    return S(this._initTime);
  }
};