var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateTextStatusForContact = function () {
  return d.apply(this, arguments);
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./12643.js");
var s = require("./359987.js");
var l = require("./992462.js");
var u = require("./596328.js");
var c = require("./669050.js");
function d() {
  return (d = (0, a.default)(function* (e, t, n, r, a) {
    const d = (0, c.createUserWid)(e.user, e.server);
    const p = yield (0, o.getContactRecord)(d);
    let f;
    if (d.isLid()) {
      const e = (0, o.getPhoneNumber)(d);
      if (e != null) {
        f = e;
      }
    }
    if (p) {
      const e = p.textStatusLastUpdateTime;
      if (a == null || e != null && a !== u.CLEAR_TEXT_STATUS_LAST_UPDATE_TIME_VAL && a < e) {
        return;
      }
      let o;
      if (r != null && r > 0 && a !== u.CLEAR_TEXT_STATUS_LAST_UPDATE_TIME_VAL) {
        o = Number(a) + Number(r);
      }
      const c = {
        textStatusString: t,
        textStatusEmoji: n,
        textStatusEphemeralDuration: r,
        textStatusLastUpdateTime: a,
        textStatusExpiryTs: o
      };
      yield (0, l.updateContactTable)(d, c);
      (0, s.frontendFireAndForget)("updateTextStatus", (0, i.default)((0, i.default)({}, c), {}, {
        contactId: d
      }));
      if (f) {
        yield (0, l.updateContactTable)(f, c);
        (0, s.frontendFireAndForget)("updateTextStatus", (0, i.default)((0, i.default)({}, c), {}, {
          contactId: f
        }));
      }
      __LOG__(2)`updateTextStatus: Contact=${d.toLogString()} updated, new text=${t != null ? t : ""} emoji=${n} ephemeralDuration=${r != null ? r : ""} lastUpdateTime=${a != null ? a : ""}.`;
    }
  })).apply(this, arguments);
}