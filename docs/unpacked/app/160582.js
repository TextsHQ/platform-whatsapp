var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleMexNotification = function () {
  return y.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./466202.js");
var o = require("./716358.js");
var s = require("./347387.js");
var l = require("./403683.js");
var u = require("./159868.js");
var c = require("./236790.js");
var d = require("./431891.js");
var p = require("./936829.js");
var f = require("./605789.js");
var _ = require("./561225.js");
var g = require("./435427.js");
const m = "mexNotificationParser";
const h = new s.WapParser(m, e => {
  e.assertTag("notification");
  e.assertAttr("type", "mex");
  const t = e.child("update");
  const n = e.attrString("id");
  const r = e.attrWapJid("from");
  const i = t.attrString("op_name");
  const o = t.contentString();
  let s;
  try {
    s = JSON.parse(o);
  } catch (e) {
    throw new a.XmppParsingFailure(m, `JSON parsing error: ${e}`);
  }
  return {
    stanzaId: n,
    from: r,
    OperationName: i,
    mexResponse: s
  };
});
function y() {
  return (y = (0, i.default)(function* (e) {
    const t = h.parseOrThrow(e);
    try {
      return yield E(t);
    } catch (e) {
      __LOG__(4, undefined, new Error(), true, ["mex", "notification"])`[mex][notification][error]`;
      SEND_LOGS(`mex-notification-error-${t.OperationName}`, 1, "mex", "notification");
      if (e instanceof a.XmppParsingFailure) {
        throw e;
      }
      throw new a.XmppParsingFailure(m, `unexpected error: ${e}`);
    }
  })).apply(this, arguments);
}
function E(e) {
  switch (e.OperationName) {
    case "MexNotificationEvent":
      return S(e, M);
    case "NotificationNewsletterMuteChange":
      return S(e, p.mexHandleNewsletterMutedChange);
    case "NotificationNewsletterJoin":
      return S(e, u.mexHandleNewsletterJoin);
    case "NotificationNewsletterLeave":
      return S(e, c.mexHandleNewsletterLeave);
    case "NotificationNewsletterStateChange":
      return S(e, f.mexHandleNewsletterStateChange);
    case "NotificationNewsletterAdminMetadataUpdate":
      return S(e, l.mexHandleNewsletterAdminNotification);
    case "NotificationNewsletterUpdate":
      return S(e, d.mexHandleNewsletterMetadataUpdate);
    case "TextStatusUpdateNotification":
      return S(e, g.mexHandleTextStatusUpdate);
    case "TextStatusUpdateNotificationSideSub":
      return S(e, g.mexHandleTextStatusUpdateSideSub);
    default:
      return Promise.reject(new a.XmppParsingFailure(m, `no concrete handler for: ${e.OperationName}`));
  }
}
function S() {
  return v.apply(this, arguments);
}
function v() {
  return (v = (0, i.default)(function* (e, t) {
    const n = e.mexResponse;
    if ((0, _.parseFatalExtensionError)(n.errors) != null) {
      throw new a.XmppParsingFailure(m, "errors list in parsed json has fatal error");
    }
    if (n.data != null) {
      yield t(e.from, n.data);
      return T(e.stanzaId, e.from);
    }
    throw new a.XmppParsingFailure(m, "null data in parsed json");
  })).apply(this, arguments);
}
function T(e, t) {
  return (0, o.wap)("ack", {
    id: (0, o.CUSTOM_STRING)(e),
    to: t,
    class: "notification",
    type: "mex"
  });
}
function M() {
  return A.apply(this, arguments);
}
function A() {
  return (A = (0, i.default)(function* () {})).apply(this, arguments);
}