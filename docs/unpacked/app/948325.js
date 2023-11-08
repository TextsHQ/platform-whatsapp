var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GroupMention = undefined;
var i = r(require("./84652.js"));
var a = r(require("./496964.js"));
var o = r(require("./667845.js"));
var s = require("./472685.js");
var l = r(require("./170082.js"));
var u = r(require("./22368.js"));
var c = r(require("../vendor/667294.js"));
class d extends a.default {
  static match(e, t) {
    if (!t) {
      return [];
    }
    const {
      groupMentions: n,
      isDraftMessage: r,
      fromChatWid: a
    } = t;
    this.fromChatWid = a;
    if (r === true) {
      const t = (0, i.default)(e, new RegExp(s.groupJidRegexStr, "g"));
      for (let e = 0; e < t.length; ++e) {
        const n = t[e][4][1];
        const r = u.default.get(n) || o.default.get(n);
        if (!r || !r.subject) {
          return [];
        }
        t[e][4] = {
          groupJid: n.slice(1),
          groupSubject: r.subject,
          fromChatWid: a
        };
      }
      return t;
    }
    if (!n || Object.keys(n).length === 0) {
      return [];
    }
    const l = function (e) {
      const t = Object.keys(e).map(p).join("|");
      return new RegExp(`(${t})`, "g");
    }(n);
    const c = (0, i.default)(e, l);
    for (let e = 0; e < c.length; ++e) {
      const t = c[e][4][0];
      c[e][4] = {
        groupJid: t.slice(1),
        groupSubject: n[t],
        fromChatWid: a
      };
    }
    return c;
  }
  static jsx(e, t, n) {
    let {
      selectable: r,
      theme: i,
      clickable: a = true,
      lastMessage: o
    } = n;
    return c.default.createElement(l.default, {
      groupSubject: t.groupSubject,
      groupJid: t.groupJid,
      selectable: r,
      clickable: a,
      theme: i,
      lastMessage: o,
      fromChatWid: this.fromChatWid
    });
  }
}
function p(e) {
  const t = /[\\^$.*+?()[\]{}|]/g;
  const n = RegExp(t.source);
  if (e && n.test(e)) {
    return e.replace(t, "\\$&");
  } else {
    return e;
  }
}
exports.GroupMention = d;
d.compatibility = true;