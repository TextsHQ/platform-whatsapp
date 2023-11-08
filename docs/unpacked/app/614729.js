Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.beginTsExternalEvent = function (e) {
  if (!(0, r.getABPropConfigValue)("ts_external_enabled")) {
    return null;
  }
  const t = (0, i.getOrInitTimeSpentSession)();
  const n = {
    source: e,
    tsSessionId: t.id,
    startTimeMs: t.relativeTimestampMs
  };
  l(n);
  o.add(n);
  let u = false;
  return () => {
    if (!u) {
      !function (e) {
        if (e.intervalTimeoutId != null) {
          self.clearTimeout(e.intervalTimeoutId);
        }
        o.delete(e);
        const {
          relativeTimestampMs: t
        } = (0, i.getOrInitTimeSpentSession)();
        const n = s(e, t);
        if (n == null) {
          return;
        }
        new a.TsExternalWamEvent(n).commit();
      }(n);
      u = true;
    }
  };
};
exports.tsExternalEventsInProgress = function () {
  return o.size > 0;
};
var r = require("./287461.js");
var i = require("./177733.js");
var a = require("./664565.js");
const o = new Set();
function s(e, t) {
  const n = t - e.startTimeMs;
  if (!(n < 1000)) {
    return {
      tsSessionId: e.tsSessionId,
      tsDuration: Math.floor(n / 1000),
      tsExternalEventSource: e.source,
      relativeTimestampMs: e.startTimeMs
    };
  }
}
function l(e) {
  e.intervalTimeoutId = self.setTimeout(() => function (e) {
    (0, i.markTimeSpentActivity)();
    const {
      relativeTimestampMs: t
    } = (0, i.getOrInitTimeSpentSession)();
    const n = s(e, t);
    if (n == null) {
      return;
    }
    new a.TsExternalWamEvent(n).commit();
    e.startTimeMs = t;
    l(e);
  }(e), (0, r.getABPropConfigValue)("ts_session_duration_ms") / 2);
}