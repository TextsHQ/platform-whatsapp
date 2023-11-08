var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._searchForClosestMessage = c;
exports.fromMillisecondsToSeconds = u;
exports.getClosestMessageFromDate = function () {
  return f.apply(this, arguments);
};
var r = a(require("../vendor/348926.js"));
var o = require("./252633.js");
var l = a(require("../app/565754.js"));
var i = require("../app/157942.js");
function u(e) {
  return Math.floor(e / 1000);
}
function s(e, t, n) {
  let a = null;
  if (e != null && t != null) {
    a = n ? e.t >= t.t ? e.id : t.id : e.t <= t.t ? e.id : t.id;
  } else if (e) {
    a = e.id;
  } else if (t) {
    a = t.id;
  }
  if (a != null) {
    return l.default.fromString(a);
  } else {
    return null;
  }
}
function c() {
  return d.apply(this, arguments);
}
function d() {
  return (d = (0, r.default)(function* (e, t, n, a) {
    return s(yield (0, o.getClosestMessageBetweenDates)(e, t, n, true, a), yield (0, o.getClosestMessageBetweenDates)(e, t, n, false, a), a);
  })).apply(this, arguments);
}
function f() {
  return (f = (0, r.default)(function* (e, t) {
    const n = u(t.getTime());
    const a = (0, i.getHistorySyncEarliestDate)() * 1000;
    const r = new Date().getTime();
    const o = yield c(e, n, r, false);
    if (o != null) {
      return o;
    }
    const l = yield c(e, a, n, true);
    return l;
  })).apply(this, arguments);
}