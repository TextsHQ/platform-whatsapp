var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findCommonGroups = function (e) {
  const t = (0, s.unproxy)(e);
  const {
    commonGroups: a,
    id: f,
    promises: p,
    phoneNumber: m
  } = t;
  if (p.findCommonGroups) {
    return p.findCommonGroups;
  }
  if (a && !a.stale) {
    a.set(a.filter(e => !e.isParentGroup));
    return Promise.resolve(a);
  }
  const h = t.id.isLid() && m ? m : f;
  return p.findCommonGroups = function (e) {
    const t = e.toString();
    return (0, u.getParticipantTable)().equals(["participants"], t).then(e => e.map(e => (0, c.createWid)(e.groupId)));
  }(h).then(e => {
    const o = (0, r.default)(e.map(e => require("../app/351053.js").ChatCollection.get(e))).filter(e => !e.isParentGroup);
    if (a) {
      a.set(o);
      a.stale = false;
    } else {
      t.commonGroups = new i.default(o, f);
    }
    return t.commonGroups;
  }).catch((0, o.filteredCatch)(l.ServerStatusCodeError, e => {
    __LOG__(3)`models:Contact:findCommonGroups error: ${e.status}`;
    return Promise.reject((0, d.default)("models:Contact:findCommonGroups error: " + e.status));
  })).finally(() => {
    p.findCommonGroups = null;
  });
};
var r = a(require("../vendor/639693.js"));
var o = require("../app/122583.js");
var l = require("../app/984330.js");
var i = a(require("./393979.js"));
var u = require("../app/918475.js");
var s = require("../app/163139.js");
var c = require("../app/669050.js");
var d = a(require("../app/556869.js"));