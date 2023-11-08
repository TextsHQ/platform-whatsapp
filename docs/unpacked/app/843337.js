var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateParticipantsList = function (e) {
  let t;
  const n = e.participants.filter(e => !(0, o.getIsMe)(e.contact) || (t = e, false));
  if (t) {
    n.push(t);
  }
  if ((0, u.isDropLastNameEnabled)()) {
    return n.filter(e => !e.contact.id.isLid()).map(t => {
      const n = t.contact;
      if (e.hasUniqueShortNameMention(n)) {
        return (0, s.getFormattedShortNameWithNonBreakingSpaces)(n);
      } else {
        return (0, s.getFormattedName)(n).replace(/\s/g, " ");
      }
    });
  }
  return n.filter(e => !e.contact.id.isLid()).map(e => {
    const t = (0, s.getFormattedShortNameWithNonBreakingSpaces)(e.contact);
    const [n] = t.split(/\s/);
    if (a.default.exec(n)) {
      return n;
    } else {
      return t;
    }
  });
};
exports.calculateUnnamedGroupFullParticipantsList = function (e) {
  let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
  if (e.participants.length === 0) {
    return c.fbt._("Group", null, {
      hk: "3VLksh"
    }).toString();
  }
  if (e.participants.length === 1) {
    var n;
    const t = (n = e.participants.head()) === null || n === undefined ? undefined : n.contact;
    if (t != null && (0, o.getIsMe)(t)) {
      return c.fbt._("You", null, {
        hk: "12sNcQ"
      }).toString();
    }
  }
  const r = d(e, t).reverse();
  if (r.length === 1) {
    return r.pop();
  }
  const i = r.length;
  const a = r.pop();
  let s = a;
  for (let e = 0; e < i - 2; e++) {
    const e = r.pop();
    s += `${l.default.t(54)}` + e;
  }
  const u = r.pop();
  s += ` ${l.default.t(52)}` + u;
  return s;
};
exports.calculateUnnamedGroupParticipantsList = function (e) {
  if (e.participants.length === 0) {
    return c.fbt._("Group", null, {
      hk: "3VLksh"
    }).toString();
  }
  if (e.participants.length === 1) {
    var t;
    const n = (t = e.participants.head()) === null || t === undefined ? undefined : t.contact;
    if (n != null && (0, o.getIsMe)(n)) {
      return c.fbt._("You", null, {
        hk: "12sNcQ"
      }).toString();
    }
  }
  const n = d(e, true).reverse();
  if (n.length === 1) {
    return n.pop();
  }
  if (n.length === 2 || n.length === 3) {
    const e = n.pop();
    let t;
    if (n.length === 1) {
      const r = n.pop();
      t = e + ` ${l.default.t(52)}` + r;
    } else {
      const r = n.pop();
      const i = n.pop();
      t = e + `${l.default.t(54)}` + r + ` ${l.default.t(52)}` + i;
    }
    return t;
  }
  if (n.length >= 4) {
    return n.pop() + " " + c.fbt._({
      "*": "& {other_participants} others",
      _1: "& 1 other"
    }, [c.fbt._plural(n.length, "other_participants")], {
      hk: "1nc3LG"
    }).toString();
  }
  return n.join();
};
exports.getUnnamedGroupParticipantNames = d;
var i = require("./287461.js");
var a = r(require("./704359.js"));
var o = require("./660666.js");
var s = require("./714574.js");
var l = r(require("./932325.js"));
var u = require("./97858.js");
var c = require("../vendor/548360.js");
function d(e) {
  let t;
  let n = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
  const r = e.participants.length;
  t = n ? e.participants.filter(e => !(0, o.getIsMe)(e.contact)) : e.participants;
  const l = t.filter(e => (0, o.getIsMyContact)(e.contact));
  const c = t.filter(e => !(0, o.getIsMyContact)(e.contact));
  let d = [];
  if ((0, i.getABPropConfigValue)("elevated_push_names_v2_m2_enabled") && r >= 3) {
    d = c.filter(e => (0, o.getNotifyName)(e.contact) != null);
  }
  const p = c.filter(e => !d.includes(e));
  let f = [];
  f = (0, u.isDropLastNameEnabled)() ? l.filter(e => !e.contact.id.isLid()).map(t => {
    const n = t.contact;
    if (e.hasUniqueShortNameMention(n)) {
      return (0, s.getFormattedShortNameWithNonBreakingSpaces)(n);
    } else {
      return (0, s.getFormattedName)(n).replace(/\s/g, " ");
    }
  }) : l.filter(e => !e.contact.id.isLid()).map(e => {
    const t = (0, s.getFormattedShortNameWithNonBreakingSpaces)(e.contact);
    const [n] = t.split(/\s/);
    if (a.default.exec(n)) {
      return n;
    } else {
      return t;
    }
  });
  let _ = [];
  _ = (0, u.isDropLastNameEnabled)() ? d.filter(e => !e.contact.id.isLid()).map(e => {
    const t = e.contact;
    const n = (0, o.getNotifyName)(t);
    return "~" + (n != null ? n : (0, s.getFormattedName)(t)).replace(/\s/g, " ");
  }) : d.filter(e => !e.contact.id.isLid()).map(e => {
    const t = (0, o.getNotifyName)(e.contact);
    const n = t != null ? t : (0, s.getFormattedShortNameWithNonBreakingSpaces)(e.contact);
    const [r] = n.split(/\s/);
    return "~" + (a.default.exec(r) ? r : n);
  });
  const g = p.filter(e => !e.contact.id.isLid()).map(e => (0, s.getFormattedName)(e.contact));
  return f.sort().concat(_.sort().concat(g.sort()));
}