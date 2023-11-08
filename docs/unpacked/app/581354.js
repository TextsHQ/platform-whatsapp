var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findChat = function () {
  return p.apply(this, arguments);
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./898817.js");
var s = require("./287461.js");
var l = require("./12643.js");
var u = require("./206464.js");
var c = require("./293056.js");
var d = r(require("./556869.js"));
function p() {
  return (p = (0, a.default)(function* (e, t, n) {
    const r = e;
    const {
      forceUsync: a,
      isGroupJoin: p,
      signal: f,
      nextPrivacyMode: _
    } = n != null ? n : {};
    if (f == null ? undefined : f.aborted) {
      throw new o.AbortError();
    }
    if (r.isLid() && !(0, s.getABPropConfigValue)("pnh_1on1_lid_expected")) {
      __LOG__(2)`findChat: lid is ${r.toLogString()}`;
      __LOG__(4, undefined, new Error(), true)`findChat: ${t} trying to create new lid`;
      SEND_LOGS("find-lid-chat-without-pnh-ctwa");
    }
    const g = yield (0, u.getExisting)(r);
    if (g) {
      return g;
    }
    if ((0, s.getABPropConfigValue)("pnh_split_thread_case1_detection") && !r.isLid() && r.isUser()) {
      const e = (0, l.getCurrentLid)(r);
      if (e) {
        const t = yield (0, u.getExisting)(e);
        if (t) {
          return t;
        }
      }
    }
    if (f == null ? undefined : f.aborted) {
      throw new o.AbortError();
    }
    if (r.isLid()) {
      __LOG__(2)`WAWebFindChatAction: creating lid chat with ${r.toLogString()}`;
    }
    const m = (0, i.default)({
      createdLocally: true
    }, p === true && {
      notSpam: true
    });
    if (t === "username_contactless_search") {
      m.lidOriginType = "username";
    }
    yield (0, c.createChat)(r, t, m, {
      forceUsync: a,
      nextPrivacyMode: _
    });
    const h = yield (0, u.getExisting)(r);
    if (h == null) {
      throw (0, d.default)("findChat: new chat not found");
    }
    return h;
  })).apply(this, arguments);
}