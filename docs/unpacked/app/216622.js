var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleProfilePicNotificationJob = function (e) {
  const t = (0, s.getNonCriticalNotificationPriority)(Boolean(e.attrs.offline));
  return (0, p.createNonPersistedJob)("handleProfilePicNotification", e => function () {
    return E.apply(this, arguments);
  }(e.node), {
    priority: t
  }).waitUntilCompleted({
    node: e
  });
};
var i = r(require("../vendor/348926.js"));
var a = require("./716358.js");
var o = require("./347387.js");
var s = require("./973776.js");
var l = require("./355813.js");
var u = require("./614198.js");
var c = require("./854379.js");
var d = require("./700846.js");
var p = require("./899137.js");
var f = require("./476314.js");
var _ = require("./150501.js");
var g = require("./691195.js");
var m = require("./459857.js");
var h = require("./669050.js");
const y = new o.WapParser("incomingProfilePicNotificationParser", e => {
  let t;
  let n;
  e.assertTag("notification");
  if (e.hasChild("delete")) {
    t = "delete";
    n = e.child("delete");
  } else if (e.hasChild("set")) {
    t = "set";
    n = e.child("set");
  } else {
    if (!e.hasChild("request")) {
      return e.throw("Expected child type to be one of: set, delete, request");
    }
    t = "request";
    n = e.child("request");
    n.assertAttr("jid", (0, m.assertGetMe)().toJid());
  }
  const r = e.attrString("id");
  if (n.hasAttr("jid")) {
    return {
      type: t,
      from: (0, c.chatJidToChatWid)(e.attrChatJid("from")),
      jid: (0, c.chatJidToChatWid)(n.attrChatJid("jid")),
      author: n.hasAttr("author") ? (0, c.userJidToUserWid)(n.attrUserJid("author")) : null,
      ts: e.attrTime("t"),
      rawTs: e.attrString("t"),
      stanzaId: r,
      picId: t === "set" ? n.attrInt("id", 1) : 0
    };
  } else {
    return {
      from: (0, c.userJidToUserWid)(e.attrUserJid("from")),
      jid: null,
      type: t,
      hash: n.attrString("hash"),
      ts: e.attrTime("t"),
      stanzaId: r
    };
  }
});
function E() {
  return (E = (0, i.default)(function* (e) {
    const t = y.parse(e);
    if (t.error) {
      __LOG__(4, undefined, new Error())`Parsing Error: ${t.error.toString()}`;
      return Promise.reject(t.error);
    }
    const n = t.success;
    let r = Promise.resolve();
    if (n.jid || n.hash) {
      let e;
      if (n.jid) {
        e = n.jid;
      } else {
        const t = yield (0, g.getContactTable)().equals(["contactHash"], n.hash);
        if (t.length === 0) {
          __LOG__(3)`could not find side contact hash for profile pic update operation`;
        } else {
          e = (0, h.createWid)(t[0].id);
        }
      }
      switch (n.type) {
        case "delete":
        case "set":
          {
            const t = n.type === "delete" ? f.PROFILE_PIC_COMMAND.REMOVE : f.PROFILE_PIC_COMMAND.SET;
            if (e) {
              r = (0, _.changeProfilePicThumb)(e, t).then(() => {
                if (e.isGroup() && n.ts != null) {
                  const r = (0, u.genGroupPicChangeNotificationMsg)(e, t, n.ts, n.author || (0, m.getMeUser)());
                  return (0, d.handleSingleMsg)(e, r, "profilePicNotification");
                }
              });
            }
            break;
          }
        case "request":
          break;
        default:
          __LOG__(3)`Invalid type received`;
      }
    }
    return r.then(() => (0, a.wap)("ack", {
      id: (0, a.CUSTOM_STRING)(n.stanzaId),
      to: (0, l.JID)(n.from),
      class: "notification",
      type: "picture"
    }));
  })).apply(this, arguments);
}