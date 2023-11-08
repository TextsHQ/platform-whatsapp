var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return y.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./881841.js");
var o = require("./716358.js");
var s = require("./347387.js");
var l = require("./35234.js");
var u = r(require("./797137.js"));
var c = require("./854379.js");
var d = require("./525119.js");
var p = require("./434989.js");
var f = require("./983767.js");
var _ = require("./669050.js");
const g = new s.WapParser("incomingPrivacyTokensParser", e => {
  e.assertTag("notification");
  const t = e.attrString("id");
  const n = e.attrUserJid("from");
  const r = e.child("tokens");
  const i = [];
  r.forEachChildWithTag("token", e => {
    const t = e.attrString("type");
    switch (t) {
      case "trusted_contact":
        i.push(function (e) {
          return {
            type: "trusted_contact",
            content: (0, a.uint8ArrayToBuffer)(e.contentBytes()),
            ts: e.attrTime("t")
          };
        }(e));
        break;
      default:
        __LOG__(2)`incomingPrivacyTokensParser - receiving an unknown token: ${t}`;
    }
  });
  return {
    id: t,
    from: n,
    privacyTokens: i
  };
});
function m() {
  return h.apply(this, arguments);
}
function h() {
  return (h = (0, i.default)(function* (e, t) {
    const {
      ts: n
    } = t;
    let r = (0, c.userJidToUserWid)(e.from);
    if (t.type === "trusted_contact") {
      if ((0, d.isMatFullyEnabled)() && r.isUser()) {
        r = (0, _.toUserWid)(yield (0, l.getMatChatIncomingMessage)(r));
      }
      yield (0, f.setTcToken)(r, n, t.content);
      yield p.PresenceCollection.reSubscribeWhenActive(r);
    }
  })).apply(this, arguments);
}
function y() {
  return (y = (0, i.default)(function* (e) {
    const t = g.parse(e);
    if (t.error) {
      __LOG__(2)`error while parsing: ${e.toString()}`;
      __LOG__(4, undefined, new Error())`Parsing Error: ${t.error.toString()}`;
      throw t.error;
    }
    const {
      success: n
    } = t;
    const r = (0, o.wap)("ack", {
      id: (0, o.CUSTOM_STRING)(n.id),
      class: "notification",
      to: (0, o.JID)(n.from),
      type: "privacy_token"
    });
    yield (0, u.default)();
    yield Promise.all(n.privacyTokens.map(e => m(n, e)));
    return r;
  })).apply(this, arguments);
}