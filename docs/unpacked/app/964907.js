var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPrivacy = function () {
  return p.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./250281.js");
var o = require("./716358.js");
var s = require("./347387.js");
var l = require("./997772.js");
var u = r(require("./556869.js"));
function c(e, t) {
  const n = t.maybeChild("error");
  const r = n && n.maybeAttrString("code");
  const i = n && n.maybeAttrString("text");
  __LOG__(3, undefined, undefined, true)`getPrivacy error: ${e} - code ${r} text ${i}`;
  SEND_LOGS("getPrivacy", 0.001);
}
const d = new s.WapParser("privacyParser", e => {
  e.assertAttr("type", "result");
  const t = {};
  e.child("privacy").forEachChildWithTag("category", e => {
    const n = e.attrString("name");
    switch (n) {
      case "readreceipts":
        {
          const n = e.attrEnum("value", l.ALL_NONE_WITH_ERROR);
          if (n !== "error") {
            t.readReceipts = n;
          } else {
            c("readreceipts", e);
          }
          break;
        }
      case "last":
        {
          const n = e.attrEnum("value", l.VISIBILITY_WITH_ERROR);
          if (n !== "error") {
            t.lastSeen = n;
          } else {
            c("last", e);
          }
          break;
        }
      case "online":
        {
          const n = e.attrEnum("value", l.ONLINE_VISIBILITY_WITH_ERROR);
          if (n !== "error") {
            t.online = n;
          } else {
            c("online", e);
          }
          break;
        }
      case "profile":
        {
          const n = e.attrEnum("value", l.VISIBILITY_WITH_ERROR);
          if (n !== "error") {
            t.profilePicture = n;
          } else {
            c("profile", e);
          }
          break;
        }
      case "status":
        {
          const n = e.attrEnum("value", l.VISIBILITY_WITH_ERROR);
          if (n !== "error") {
            t.about = n;
          } else {
            c("status", e);
          }
          break;
        }
      case "groupadd":
        {
          const n = e.attrEnum("value", l.VISIBILITY_WITH_ERROR);
          if (n !== "error") {
            t.groupAdd = n;
          } else {
            c("groupadd", e);
          }
          break;
        }
      case "calladd":
        {
          const n = e.attrEnum("value", l.CALL_ADD_WITH_ERROR);
          if (n !== "error") {
            t.callAdd = n;
          } else {
            c("calladd", e);
          }
          break;
        }
      default:
        c(`${n} is unknown type`, e);
    }
  });
  return t;
});
function p() {
  return (p = (0, i.default)(function* () {
    const e = (0, o.wap)("iq", {
      xmlns: "privacy",
      to: o.S_WHATSAPP_NET,
      type: "get",
      id: (0, o.generateId)()
    }, (0, o.wap)("privacy", null));
    const t = yield (0, a.deprecatedSendIq)(e, d);
    if (t.success) {
      return t.result;
    }
    throw (0, u.default)("invalid response");
  })).apply(this, arguments);
}