var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCommunityMembers = function (e, t) {
  var n;
  const a = t == null ? undefined : t.participants;
  const c = e == null || (n = e.groupMetadata) === null || n === undefined ? undefined : n.participants;
  const d = Boolean(c == null ? undefined : c.iAmAdmin());
  const {
    joinedSubgroups: f
  } = (0, u.default)(!d && (0, r.communityGroupDirectoryEnabled)() ? e == null ? undefined : e.groupMetadata : null);
  const {
    loading: p
  } = (0, i.default)(() => e && t && d ? (0, l.queryAndUpdateCommunityParticipants)(e.id) : Promise.resolve(), [t, d, e == null ? undefined : e.id]);
  return {
    members: (0, s.default)([c, a], ["bulk_add", "bulk_remove", "reset", "change:isAdmin"], () => (0, o.mergeAndSortCommunityParticipants)(a, c, f)),
    announcementGroupParticipants: a,
    parentGroupParticipants: c,
    loading: p
  };
};
var r = require("../app/174834.js");
var o = require("./515111.js");
var l = require("./890324.js");
var i = a(require("../app/802145.js"));
var u = a(require("./847116.js"));
var s = a(require("../app/524578.js"));