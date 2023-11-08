var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MembersFlowStep = exports.CommunityMembersFlow = undefined;
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("./711162.js");
var i = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = c(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var a = {};
  var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e) {
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
      if (l && (l.get || l.set)) {
        Object.defineProperty(a, o, l);
      } else {
        a[o] = e[o];
      }
    }
  }
  a.default = e;
  if (n) {
    n.set(e, a);
  }
  return a;
}(require("../vendor/667294.js"));
var u = require("./839062.js");
const s = ["onInviteMembersClick", "members", "membersNotInCAG", "initialFlowStep"];
function c(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (c = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const d = require("../vendor/76672.js").Mirrored(["Members", "MembersNotInAnnouncements"]);
exports.MembersFlowStep = d;
const f = (0, i.forwardRef)((e, t) => {
  const {
    onInviteMembersClick: n,
    members: a,
    membersNotInCAG: c,
    initialFlowStep: f = d.Members
  } = e;
  const p = (0, o.default)(e, s);
  const [m, h] = (0, u.useFlow)(f);
  if (!h.step) {
    return null;
  }
  let g;
  switch (h.step) {
    case d.Members:
      g = i.default.createElement(l.CommunityMembersSearch, (0, r.default)({
        onInviteMembersClick: n,
        members: a,
        theme: l.CommunityMembersSearchTheme.Members,
        onMembersNotInAnnouncementsClick: (c == null ? undefined : c.length) ? () => h.push(d.MembersNotInAnnouncements) : null
      }, p));
      break;
    case d.MembersNotInAnnouncements:
      g = h.stackSize() > 1 ? i.default.createElement(l.CommunityMembersSearch, (0, r.default)({
        members: c,
        theme: l.CommunityMembersSearchTheme.MembersNotInAnnouncements,
        onBack: () => h.pop()
      }, p)) : i.default.createElement(l.CommunityMembersSearch, (0, r.default)({
        members: c,
        theme: l.CommunityMembersSearchTheme.MembersNotInAnnouncements
      }, p));
      break;
  }
  return i.default.createElement(m, {
    flow: h,
    ref: t
  }, g);
});
exports.CommunityMembersFlow = f;
f.displayName = "CommunityMembersFlow";