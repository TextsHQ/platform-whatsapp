var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDisappearingMode = function () {
  return u.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./692269.js");
var o = require("./328606.js");
var s = r(require("./124928.js"));
var l = r(require("./556869.js"));
function u() {
  return (u = (0, i.default)(function* (e) {
    if (!s.default.isWid(e) || !e.isUser()) {
      __LOG__(3)`getDisappearingMode: this method should only take user wid, instead it received: ${e}`;
      return Promise.resolve({
        id: e
      });
    }
    const t = new a.USyncQuery().withContext("interactive").withMode("query").withDisappearingModeProtocol().withUser(new o.USyncUser().withId(e));
    const n = yield t.execute();
    if (n.error.all || n.error.status) {
      const t = n.error.all || n.error.status;
      __LOG__(3)`getDisappearingMode: failed ${t.errorCode} : ${t.errorText}`;
      return {
        id: e,
        error: t
      };
    }
    const r = n.list;
    if (!(r.length !== 0 && r[0].disappearing_mode != null)) {
      Promise.reject((0, l.default)("no disappearing_mode data returned for user"));
    }
    const {
      duration: i,
      t: u
    } = r[0].disappearing_mode;
    return {
      id: e,
      disappearingModeDuration: i,
      disappearingModeSettingTimestamp: u
    };
  })).apply(this, arguments);
}