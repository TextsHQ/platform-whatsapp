var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleDisappearingModeNotificationJob = function (e) {
  const t = a.JOB_PRIORITY.LOW;
  return (0, c.createNonPersistedJob)("handleDisappearingModeNotification", () => {
    const t = p.parse(e);
    if (t.error) {
      __LOG__(4, undefined, new Error())`Parsing Error: ${t.error.toString()}`;
      return Promise.reject(t.error);
    } else {
      return function () {
        return f.apply(this, arguments);
      }(t.success);
    }
  }, {
    priority: t
  }).waitUntilCompleted({
    node: e
  });
};
var i = r(require("../vendor/348926.js"));
var a = require("./775593.js");
var o = require("./716358.js");
var s = require("./347387.js");
var l = require("./355813.js");
var u = require("./854379.js");
var c = require("./899137.js");
var d = require("./622868.js");
const p = new s.WapParser("disappearingModeNotification", e => {
  e.assertTag("notification");
  const t = e.child("disappearing_mode");
  return {
    stanzaId: e.attrString("id"),
    from: (0, u.deviceJidToDeviceWid)(e.attrDeviceJid("from")),
    duration: t.attrInt("duration", 0),
    ts: t.attrTime("t")
  };
});
function f() {
  return (f = (0, i.default)(function* (e) {
    let {
      duration: t,
      from: n,
      stanzaId: r,
      ts: i
    } = e;
    __LOG__(2, undefined, undefined, undefined, ["DM", "DDM"])`handleDisappearingModeNotification: received d=${t}:t=${i}
for ${n.toString()}`;
    yield (0, d.updateDisappearingModeForContact)(n, t, i);
    return (0, o.wap)("ack", {
      id: (0, o.CUSTOM_STRING)(r),
      to: (0, l.JID)(n),
      class: "notification",
      type: "disappearing_mode"
    });
  })).apply(this, arguments);
}