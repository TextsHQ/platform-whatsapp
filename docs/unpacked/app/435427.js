var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mexHandleTextStatusUpdate = function () {
  return p.apply(this, arguments);
};
exports.mexHandleTextStatusUpdateSideSub = function () {
  return f.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./380900.js");
var o = require("./691195.js");
var s = require("./491805.js");
var l = require("./574892.js");
var u = require("./557883.js");
var c = require("./669050.js");
var d = r(require("./556869.js"));
function p() {
  return (p = (0, i.default)(function* (e, t) {
    const n = t.xwa2_notify_text_status_on_update;
    const r = n.jid;
    if (!(0, s.receiveTextStatusEnabled)()) {
      return;
    }
    if (r == null) {
      throw (0, d.default)("unexpected null id in xwa2_notify_text_status_on_update");
    }
    const i = (0, l.parseTextStatusServerResponse)(n);
    try {
      (0, u.updateTextStatusForContact)((0, c.createWid)(r), i.textStatusString, i.textStatusEmoji, i.textStatusEphemeralDuration, i.textStatusLastUpdateTime);
    } catch (e) {
      __LOG__(4, undefined, new Error(), true, ["mex"])`[mex][textStatus][notification][text-status-update] Failed to update text status change`;
      SEND_LOGS("mex-text-status-notification-update-fail", 1, "mex");
    }
  })).apply(this, arguments);
}
function f() {
  return (f = (0, i.default)(function* (e, t) {
    const n = t.xwa2_notify_text_status_on_update_side_sub;
    const r = yield (0, o.getContactTable)().equals(["contactHash"], n.hash);
    if (r.length !== 0) {
      const e = (0, c.createWid)(r[0].id);
      const t = r[0].textStatusLastUpdateTime;
      return (0, a.getTextStatus)(e, t).then(e => {
        const {
          text: t,
          emoji: n,
          ephemeralDurationSeconds: r,
          lastUpdateTime: i,
          id: a
        } = e;
        return (0, u.updateTextStatusForContact)(a, t, n, r, i);
      });
    }
    __LOG__(3)`[mex][textStatus][notification][side-sub] Could not find side contact hash for text status update side sub operation`;
  })).apply(this, arguments);
}