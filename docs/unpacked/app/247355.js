var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createGroup = function () {
  return h.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./250281.js");
var o = require("./390934.js");
var s = require("./716358.js");
var l = require("./347387.js");
var u = require("./984330.js");
var c = require("./355813.js");
var d = require("./529921.js");
var p = require("./501216.js");
var f = require("./854379.js");
var _ = require("./669050.js");
var g = r(require("./556869.js"));
const m = new l.WapParser("createGroupReplyParser", e => {
  var t;
  const n = e.child("group");
  let r;
  try {
    r = (0, _.createWid)(`${n.attrString("id")}@g.us`);
  } catch (e) {}
  if (!((t = r) === null || t === undefined ? undefined : t.isGroup)) {
    throw (0, g.default)("createGroupReplyParser: invalid group id");
  }
  return {
    wid: r,
    subject: n.hasAttr("subject") ? n.attrString("subject") : "",
    creator: (0, f.userJidToUserWid)(n.attrUserJid("creator")),
    ts: n.attrTime("creation"),
    participants: n.mapChildrenWithTag("participant", e => {
      const t = e.maybeChild("add_request");
      return {
        wid: (0, f.userJidToUserWid)(e.attrUserJid("jid")),
        error: e.hasAttr("error") ? e.attrInt("error") : null,
        invite_code: t && t.attrString("code"),
        invite_code_exp: t && t.attrString("expiration"),
        type: e.attrEnumOrDefault("type", d.GROUP_PARTICIPANT_TYPES, "participant")
      };
    })
  };
});
function h() {
  return (h = (0, i.default)(function* (e, t, n, r) {
    const i = (0, o.randomHex)(8);
    const l = t.map(e => (0, s.wap)("participant", {
      jid: (0, c.USER_JID)(e)
    }));
    let d;
    if (n != null && n !== 0) {
      l.unshift((0, s.wap)("ephemeral", {
        expiration: (0, s.INT)(n)
      }));
    }
    if (r != null) {
      l.unshift((0, s.wap)("linked_parent", {
        jid: (0, c.GROUP_JID)(r)
      }));
    }
    d = e === "" ? (0, s.wap)("iq", {
      to: s.G_US,
      type: "set",
      xmlns: "w:g2",
      id: (0, s.generateId)()
    }, (0, s.wap)("create", {
      key: (0, s.CUSTOM_STRING)(i)
    }, l)) : (0, s.wap)("iq", {
      to: s.G_US,
      type: "set",
      xmlns: "w:g2",
      id: (0, s.generateId)()
    }, (0, s.wap)("create", {
      subject: (0, s.CUSTOM_STRING)(e),
      key: (0, s.CUSTOM_STRING)(i)
    }, l));
    const f = yield (0, a.deprecatedSendIq)(d, m);
    if (f.success) {
      new p.GroupCreateCWamEvent().commit();
      return f.result;
    } else {
      return Promise.reject(new u.ServerStatusCodeError(f.errorCode, f.errorText));
    }
  })).apply(this, arguments);
}