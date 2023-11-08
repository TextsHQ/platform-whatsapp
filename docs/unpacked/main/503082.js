var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPrioritizedCommonGroups = function () {
  return u.apply(this, arguments);
};
exports.prioritizeGroups = s;
var r = a(require("../vendor/348926.js"));
var o = require("./701777.js");
var l = require("../app/459857.js");
var i = require("../app/348506.js");
function u() {
  return (u = (0, r.default)(function* (e) {
    const t = yield (0, o.findCommonGroups)(e);
    if (t != null) {
      const e = Array.from(t.getModelsArray());
      return {
        commonGroups: t,
        priority: s(e)
      };
    }
  })).apply(this, arguments);
}
function s(e) {
  if (e.length) {
    let t;
    let n = i.HIGHLIGHT_GROUP_TYPE.UNKNOWN;
    const a = e => e.name != null && e.name !== "";
    let r = [];
    const o = [];
    const u = [];
    let s = 0;
    let c = [];
    let d = 1 / 0;
    let f = [];
    if (e.length > 1) {
      e.forEach(e => {
        var t;
        var p;
        var m;
        var h;
        var g;
        if (!a(e)) {
          return;
        }
        if ((0, l.isMeAccount)((t = e.groupMetadata) === null || t === undefined ? undefined : t.owner)) {
          o.push(e);
          r = o;
          return void (n = i.HIGHLIGHT_GROUP_TYPE.CREATOR);
        }
        if (o.length) {
          return;
        }
        if (e.iAmAdmin()) {
          u.push(e);
          r = u;
          return void (n = i.HIGHLIGHT_GROUP_TYPE.ADMIN);
        }
        if (u.length) {
          return;
        }
        const E = (p = (m = e.groupMetadata) === null || m === undefined ? undefined : m.participants.getMyContacts().length) !== null && p !== undefined ? p : 0;
        if (E > 0 && E >= s) {
          if (E > s) {
            c = [e];
          } else if (E === s) {
            c.push(e);
          }
          s = E;
          r = c;
          return void (n = i.HIGHLIGHT_GROUP_TYPE.SAVED_CONTACTS);
        }
        if (c.length) {
          return;
        }
        const v = (h = (g = e.groupMetadata) === null || g === undefined ? undefined : g.participants.length) !== null && h !== undefined ? h : 0;
        if (v > 0 && v <= d) {
          if (v < d) {
            f = [e];
          } else if (v === d) {
            f.push(e);
          }
          d = v;
          r = f;
          n = f.length === 1 ? i.HIGHLIGHT_GROUP_TYPE.PARTICIPANTS : i.HIGHLIGHT_GROUP_TYPE.MORE;
        }
      });
      if (r.length) {
        r.sort((e, t) => e.t != null && (t == null ? undefined : t.t) != null ? e.t >= t.t ? -1 : 1 : -1);
      }
      t = r[0];
    } else {
      const r = e[0];
      if (a(r)) {
        t = r;
        n = i.HIGHLIGHT_GROUP_TYPE.SINGLE;
      }
    }
    return {
      group: t,
      wamEnum: n
    };
  }
}