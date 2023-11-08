var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSubgroupResults = function (e, t) {
  if (t.parentGroup == null) {
    __LOG__(4, undefined, new Error(), true)`parentGroup missing!`;
    SEND_LOGS("parentGroup not defined while searching for @mention subgroup suggestions");
    return [];
  }
  const n = i.default.get(t.parentGroup);
  if (n == null) {
    __LOG__(4, undefined, new Error(), true)`parentGroup missing!`;
    SEND_LOGS("parentGroup not found in GroupMetadataCollection while searching for @mention subgroup suggestions");
    return [];
  }
  const a = n.getSubgroupsMetadata();
  const r = (e || "").toLowerCase();
  return a.filter(e => !t.id.equals(e.id) && s(r, e.subject.toLowerCase())).sort((e, t) => e.subject.localeCompare(t.subject, u.default.getLocale(), {
    ignorePunctuation: true
  }));
};
exports.getUserResults = function (e, t, n) {
  var a;
  const i = (a = t == null ? undefined : t.participants.map(e => {
    let {
      contact: t
    } = e;
    return t;
  })) !== null && a !== undefined ? a : [];
  if (n) {
    var u;
    const e = (u = r.BotProfileCollection.getDefaultBot()) === null || u === undefined ? undefined : u.contact;
    if (e != null) {
      i.unshift(e);
    }
  }
  const c = (e || "").toLowerCase();
  return i.filter(e => function (e, t) {
    if ((0, o.getIsMe)(t)) {
      return false;
    }
    const n = [(0, l.getSearchName)(t) || (0, l.getFormattedName)(t)];
    const a = (0, o.getNotifyName)(t);
    if (!(0, o.getIsMyContact)(t) && a) {
      n.push(a.toLowerCase());
    }
    return n.some(t => s(e, t));
  }(c, e));
};
var r = require("../app/169437.js");
var o = require("../app/660666.js");
var l = require("../app/714574.js");
var i = a(require("../app/667845.js"));
var u = a(require("../app/932325.js"));
function s(e, t) {
  let n = -1;
  do {
    if (t.indexOf(e, n + 1) === n + 1) {
      return true;
    }
  } while ((n = t.indexOf(" ", n + 1)) !== -1);
  return false;
}