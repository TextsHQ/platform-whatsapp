Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.attachPttPlayTimeSpentLogger = function (e) {
  let t = null;
  function n() {
    var e;
    if (!((e = t) === null || e === undefined)) {
      e();
    }
    t = (0, a.beginTsExternalEvent)(r.TS_EXTERNAL_EVENT_SOURCE.PTT_PLAY);
  }
  function o() {
    var e;
    if (!((e = t) === null || e === undefined)) {
      e();
    }
  }
  e.addEventListener("playing", n);
  e.addEventListener("pause", o);
  e.addEventListener("ended", o);
  e.addEventListener("error", o);
  return () => {
    o();
    e.removeEventListener("playing", n);
    e.removeEventListener("pause", o);
    e.removeEventListener("ended", o);
    e.removeEventListener("error", o);
  };
};
var a = require("../app/614729.js");
var r = require("../app/370959.js");