var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_TOS_REFRESH_INTERVAL = undefined;
exports.deleteTosState = function () {
  return d.apply(this, arguments);
};
exports.queryTosState = function () {
  return c.apply(this, arguments);
};
exports.updateTosState = function () {
  return p.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./250281.js");
var o = require("./716358.js");
var s = require("./347387.js");
var l = require("./984330.js");
exports.DEFAULT_TOS_REFRESH_INTERVAL = 86400;
const u = new s.WapParser("tosNotices", e => {
  e.assertTag("iq");
  e.assertFromServer();
  const t = e.child("tos");
  const n = {
    refresh: t.attrInt("refresh"),
    notice: []
  };
  t.forEachChildWithTag("notice", e => {
    const t = e.maybeAttrString("state") !== "false";
    const r = e.attrString("id");
    n.notice.push({
      id: r,
      state: t
    });
  });
  if (n.refresh > 259200 || n.refresh < 7200) {
    n.refresh = 86400;
  }
  return n;
});
function c() {
  return (c = (0, i.default)(function* (e) {
    const t = (0, o.wap)("iq", {
      xmlns: "tos",
      id: (0, o.generateId)(),
      type: "get",
      to: o.S_WHATSAPP_NET
    }, (0, o.wap)("request", null, e.map(e => (0, o.wap)("notice", {
      id: (0, o.CUSTOM_STRING)(e)
    }))));
    const n = yield (0, a.deprecatedSendIq)(t, u);
    if (n.success) {
      return n.result;
    }
    throw new l.ServerStatusCodeError(n.errorCode, n.errorText);
  })).apply(this, arguments);
}
function d() {
  return (d = (0, i.default)(function* () {})).apply(this, arguments);
}
function p() {
  return (p = (0, i.default)(function* (e) {
    const t = new s.WapParser("tosNoticesSet", () => {});
    const n = (0, o.wap)("iq", {
      xmlns: "tos",
      id: (0, o.generateId)(),
      type: "set",
      to: o.S_WHATSAPP_NET
    }, (0, o.wap)("request", {
      type: "session_update"
    }, e.map(e => (0, o.wap)("notice", {
      id: (0, o.CUSTOM_STRING)(e)
    }))));
    yield (0, a.deprecatedSendIq)(n, t);
  })).apply(this, arguments);
}