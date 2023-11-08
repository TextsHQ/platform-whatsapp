var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/103522.js"));
var a = r(require("../vendor/441609.js"));
var o = require("./177938.js");
var s = r(require("./84652.js"));
var l = r(require("./496964.js"));
var u = r(require("./577527.js"));
var c = require("./472685.js");
var d = require("./669050.js");
var p = r(require("../vendor/667294.js"));
class f extends l.default {
  static match(e, t) {
    if (!t) {
      return [];
    }
    const {
      mentions: n,
      groupMetadata: r,
      isDraftMessage: l
    } = t;
    if (l === true) {
      const t = (0, s.default)(e, new RegExp(c.userJidRegexStr, "g"));
      for (let e = 0; e < t.length; ++e) {
        const n = t[e][4][1];
        const i = (0, d.createUserWid)(n);
        const a = o.ContactCollection.get(i);
        if (a == null) {
          return [];
        }
        t[e][4] = {
          contact: a,
          groupMetadata: r
        };
      }
      return t;
    }
    if (!n || (0, a.default)(n)) {
      return [];
    }
    const u = function (e) {
      const t = Object.keys(e).map(i.default).join("|");
      return new RegExp(`(${t})`, "g");
    }(n);
    const p = (0, s.default)(e, u);
    for (let e = 0; e < p.length; ++e) {
      p[e][4] = {
        contact: n[p[e][4][0]],
        groupMetadata: r
      };
    }
    return p;
  }
  static jsx(e, t, n) {
    let {
      selectable: r,
      lastMessage: i
    } = n;
    return p.default.createElement(u.default, {
      mentionMeta: t,
      selectable: r,
      lastMessage: i
    });
  }
}
exports.default = f;
f.compatibility = true;