var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTimeSpentArray = function () {
  if (!(0, o.getABPropConfigValue)("ts_bit_array_enabled")) {
    return;
  }
  __LOG__(2)`[time-spent] creating time spent array`;
  return new d.default({
    getSessionData: () => {
      const e = m();
      return {
        relativeTimeMs: e.relativeTimestampMs,
        id: e.id.toString()
      };
    },
    postUpdate: h,
    loggingCallback: e => {
      (0, s.stashAndFlushBitarray)(y(e), u.KEYS.TIME_SPENT_BITARRAY_EVENT);
    }
  });
};
exports.getOrInitTimeSpentSession = m;
exports.markTimeSpentActivity = h;
exports.preprocessTsArrayData = y;
exports.restoreTimeSpentSession = function () {
  p = c.default.get(u.KEYS.TIME_SPENT_SESSION);
  if (p == null) {
    __LOG__(2)`[time-spent] no session to restore`;
  } else {
    __LOG__(2)`[time-spent] restored ts session: ${JSON.stringify(p)}`;
  }
};
var i = require("./685639.js");
var a = require("./632157.js");
var o = require("./287461.js");
var s = require("./195079.js");
var l = require("./614729.js");
var u = require("./94872.js");
var c = r(require("./53575.js"));
var d = r(require("./648598.js"));
let p = null;
let f = null;
const _ = new i.ShiftTimer(() => {
  if (p != null) {
    c.default.set(u.KEYS.TIME_SPENT_SESSION, p);
    __LOG__(2)`[time-spent] persisted session`;
  }
});
function g() {
  let e = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
  if (e) {
    _.forceRunNow();
  } else {
    _.onOrBefore(10000);
  }
}
function m() {
  const e = (0, a.unixTimeMs)();
  if (p == null || e - p.lastActivityTimestampMs >= (0, o.getABPropConfigValue)("ts_session_duration_ms") && !(0, l.tsExternalEventsInProgress)()) {
    f = p;
    __LOG__(2)`[time-spent] initializing session`;
    const t = {
      id: Math.floor(Math.random() * 2147483647),
      startTimestampMs: e,
      lastActivityTimestampMs: e,
      cumulativeBitsSet: 0,
      sequenceId: -1,
      relativeTimestampMs: 0
    };
    p = t;
    g(true);
    return t;
  }
  p.relativeTimestampMs = e - p.startTimestampMs;
  return p;
}
function h() {
  m().lastActivityTimestampMs = (0, a.unixTimeMs)();
  g();
}
function y(e) {
  let t = m();
  const n = Number(e.sessionId);
  if (t.id !== n) {
    var r;
    if (f == null || ((r = f) === null || r === undefined ? undefined : r.id) !== n) {
      __LOG__(3)`[time-spent] processing array data for an expired session, but no session found`;
      return e;
    }
    t = f;
  }
  t.cumulativeBitsSet += e.sessionCum;
  t.sequenceId++;
  e.sessionSeq = t.sequenceId;
  e.sessionCum = t.cumulativeBitsSet;
  g(true);
  return e;
}