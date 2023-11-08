var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateDisappearingModeForContact = function () {
  return c.apply(this, arguments);
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./12643.js");
var s = require("./359987.js");
var l = require("./992462.js");
var u = require("./669050.js");
function c() {
  return (c = (0, a.default)(function* (e, t, n) {
    const r = (0, u.createUserWid)(e.user, e.server);
    const a = yield (0, o.getContactRecord)(r);
    let c;
    if (r.isLid()) {
      const e = (0, o.getPhoneNumber)(r);
      if (e != null) {
        c = e;
      }
    }
    if (a) {
      const {
        disappearingModeSettingTimestamp: e
      } = a;
      if (e == null && n !== 0 || e != null && e < n) {
        const e = {
          disappearingModeDuration: t,
          disappearingModeSettingTimestamp: n
        };
        yield (0, l.updateContactTable)(r, e);
        (0, s.frontendFireAndForget)("updateDisappearingMode", (0, i.default)((0, i.default)({}, e), {}, {
          contactId: r
        }));
        if (c) {
          yield (0, l.updateContactTable)(c, e);
          (0, s.frontendFireAndForget)("updateDisappearingMode", (0, i.default)((0, i.default)({}, e), {}, {
            contactId: c
          }));
        }
        __LOG__(2, undefined, undefined, undefined, ["DM", "DDM"])`updateDisappearingMode: Contact=${r.toLogString()} updated, new duration=${t} t=${n}.`;
      }
    }
  })).apply(this, arguments);
}