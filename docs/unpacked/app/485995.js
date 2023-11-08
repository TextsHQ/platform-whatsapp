var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleFatalError = function () {
  return m.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./138291.js");
var o = require("./819416.js");
var s = require("./632157.js");
var l = require("./287461.js");
var u = require("./780549.js");
var c = r(require("./97359.js"));
var d = require("./332108.js");
var p = require("./314189.js");
var f = require("./734205.js");
var _ = require("./59318.js");
var g = require("./91471.js");
function m() {
  return (m = (0, i.default)(function* (e) {
    __LOG__(2)`syncd: starting fatal flow for ${e}`;
    if (e) {
      yield h(e, "handleFatalError for collection");
    } else {
      yield (0, o.getDbImpls)().writeSyncdLog("", "handleFatalError without collection");
    }
    const t = (0, l.getABPropConfigValue)("should_deregister_on_syncd_fatal");
    const r = (0, c.default)(require("./775410.js"));
    let i = [];
    if (e != null) {
      i = e.map(e => String(e));
    }
    const m = (0, s.castMilliSecondsToUnixTime)((0, s.unixTimeMs)());
    __LOG__(2)`syncd: fatal flow: before sleep`;
    yield (0, a.asyncSleep)(5000);
    yield h(e, "handleFatalError before notify primary");
    const y = (0, s.castMilliSecondsToUnixTime)((0, s.unixTimeMs)());
    __LOG__(2)`syncd: start notifying primary on fatal error`;
    try {
      yield (0, _.sendAppStateFatalExceptionNotification)(i);
    } catch (e) {
      __LOG__(4, undefined, new Error(), true)`syncd: error when sending fatal message to primary: ${e}`;
      SEND_LOGS("syncd: could not send fatal to primary");
    }
    __LOG__(2)`syncd: end notifying primary on fatal error`;
    yield h(e, "handleFatalError after notify primary");
    const E = (0, s.castMilliSecondsToUnixTime)((0, s.unixTimeMs)());
    __LOG__(2)`syncd: end notifying primary on fatal error. tsBeforeSleep: ${(0, s.toHttpHeaderDate)(m)}, tsBeforeSendToPrimary: ${(0, s.toHttpHeaderDate)(y)}, currTs: ${(0, s.toHttpHeaderDate)(E)}`;
    yield (0, g.printSyncdLogs)();
    if (t !== false) {
      __LOG__(4, true, new Error(), true, ["syncd", "logout"])`syncd: Received fatal error and logged out`;
      SEND_LOGS("syncd: fatal error and logged out", 1, "syncd", "logout");
      yield (0, p.socketLogout)(d.LogoutReason.SyncdFailure);
    } else if (r.isSyncDCriticalDataSyncInProcess()) {
      __LOG__(4, true, new Error(), true, ["syncd", "logout"])`syncd: critical sync failed during bootstrap`;
      SEND_LOGS("syncd: critical sync failed during bootstrap", 1, "syncd", "logout");
      yield (0, p.socketLogout)(d.LogoutReason.SyncdErrorDuringBootstrap);
    } else {
      __LOG__(4, true, new Error(), true, ["syncd", "sad"])`syncd: Received fatal error and showed fatal flag`;
      SEND_LOGS("syncd: handle fatal error", 1, "syncd", "sad");
      (0, f.updateSyncdDisabledDueToFatalFlag)(true);
      u.Cmd.handleFatalError();
    }
  })).apply(this, arguments);
}
function h(e, t) {
  return Promise.all((e != null ? e : [""]).map(e => (0, o.getDbImpls)().writeSyncdLog(e, t)));
}