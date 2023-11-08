var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NOTIFICATION_TYPE = undefined;
exports.handleAboutNotification = function (e) {
  const t = m.parse(e);
  if (t.error) {
    __LOG__(4, undefined, new Error())`Parsing Error: ${t.error.toString()}`;
    return Promise.reject(t.error);
  }
  return function () {
    return h.apply(this, arguments);
  }(t.success);
};
var i = r(require("../vendor/348926.js"));
var a = r(require("../vendor/81109.js"));
var o = require("./716358.js");
var s = require("./347387.js");
var l = require("./12643.js");
var u = require("./355813.js");
var c = require("./854379.js");
var d = require("./691195.js");
var p = require("./476473.js");
var f = require("./870791.js");
var _ = require("./669050.js");
const g = Object.freeze({
  CHANGE: "change",
  SIDE_LIST_CHANGE: "sideListChange",
  UNKNOWN: "unknown"
});
exports.NOTIFICATION_TYPE = g;
const m = new s.WapParser("incomingAboutNotification", e => {
  e.assertTag("notification");
  const t = {
    stanzaId: e.attrString("id")
  };
  const n = e.hasChild("set") && e.child("set");
  if (n && !n.hasAttr("hash")) {
    return (0, a.default)({
      type: g.CHANGE,
      from: (0, c.userJidToUserWid)(e.attrUserJid("from")),
      pushname: e.attrString("notify"),
      content: n.contentString(),
      ts: e.attrTime("t")
    }, t);
  } else if (n && n.hasAttr("hash")) {
    return (0, a.default)({
      type: g.SIDE_LIST_CHANGE,
      from: (0, c.userJidToUserWid)(e.attrUserJid("from")),
      hash: n.attrString("hash")
    }, t);
  } else {
    return (0, a.default)({
      type: g.UNKNOWN,
      from: e.attrString("from")
    }, t);
  }
});
function h() {
  return (h = (0, i.default)(function* (e) {
    __LOG__(2)`handleAboutNotification: received ${e.type}
for ${e.from.toString()}`;
    switch (e.type) {
      case g.SIDE_LIST_CHANGE:
        {
          const t = yield (0, d.getContactTable)().equals(["contactHash"], e.hash);
          if (t.length === 0) {
            __LOG__(3)`could not find side contact hash for status update operation`;
          } else {
            const e = (0, _.createWid)(t[0].id);
            const n = p.StatusCollection.get(e);
            const r = n == null ? null : (0, f.getStatus)(e).then(e => {
              n.set({
                status: e.status
              });
            });
            yield r;
          }
          break;
        }
      case g.CHANGE:
        {
          const t = e.from;
          const n = [t];
          if (t.isLid()) {
            const e = (0, l.getPhoneNumber)(t);
            if (e != null) {
              n.push(e);
            }
          }
          for (const t of n) {
            const n = p.StatusCollection.get(t);
            if (n) {
              n.status = e.content;
            } else {
              __LOG__(3)`handleAboutNotification: get status update for unknown contact ${t.toLogString()}`;
            }
          }
          break;
        }
      default:
        __LOG__(3)`handleAboutNotification: unhandled notification of
type ${e.type}`;
    }
    return (0, o.wap)("ack", {
      id: (0, o.CUSTOM_STRING)(e.stanzaId),
      to: e.type === g.UNKNOWN ? (0, o.CUSTOM_STRING)(e.from) : (0, u.JID)(e.from),
      class: "notification",
      type: "status"
    });
  })).apply(this, arguments);
}