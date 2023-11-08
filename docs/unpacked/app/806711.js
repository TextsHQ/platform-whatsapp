var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./392125.js");
var o = require("./351053.js");
var s = require("./255131.js");
var l = require("./702018.js");
var u = r(require("./667845.js"));
var c = require("./862159.js");
var d = r(require("./22368.js"));
var p = require("./459857.js");
var f = require("./673168.js");
var _ = require("./669050.js");
var g = require("../vendor/548360.js");
class m extends a.BaseCollection {
  constructor() {
    super();
    this.listenTo(d.default, "add remove change:subject", this._updateSubgroupName);
  }
  _updateSubgroupName(e) {
    const t = this.findFirst(t => {
      var n;
      if ((n = t.subgroupId) === null || n === undefined) {
        return undefined;
      } else {
        return n.equals(e.id);
      }
    });
    if (t != null) {
      t.subgroupName = e.subject;
    }
  }
  getActivityFor(e) {
    return this.filter(t => t.communityId.equals(e));
  }
  shouldShowTabBadge() {
    var e;
    if (this.length === 0) {
      return false;
    }
    const t = (e = (0, f.getCommunityTabLastSeenTimestamp)()) !== null && e !== undefined ? e : 0;
    return this.some(e => e.timestamp > t);
  }
  syncActivityFor(e) {
    var t = this;
    return (0, i.default)(function* () {
      var n;
      var r;
      const i = (n = u.default.assertGet(e).lastSeenActivityTimestamp) !== null && n !== undefined ? n : 0;
      const a = (r = (0, f.getCommunityTabLastSeenTimestamp)()) !== null && r !== undefined ? r : 0;
      const m = yield (0, l.getMessagesBefore)(e.toString(), e => e.t < i);
      if (m.length !== 0) {
        m.forEach(n => {
          if (n.author == null) {
            return;
          }
          const r = (0, _.createWidFromWidLike)(n.author);
          if ((0, p.isMeAccount)(r)) {
            return;
          }
          const {
            t: i
          } = n;
          if (n.subtype === c.GROUP_ACTIONS.SUB_GROUP_LINK) {
            var l;
            var u;
            const r = (0, _.createWidFromWidLike)((l = n.templateParams) === null || l === undefined ? undefined : l[0]);
            let a = (u = o.ChatCollection.get(r)) === null || u === undefined ? undefined : u.formattedTitle;
            if (a == null) {
              var f;
              var m;
              const e = (f = d.default.get(r.toString())) === null || f === undefined ? undefined : f.subject;
              const t = (m = n.templateParams) === null || m === undefined ? undefined : m[1];
              a = e != null ? e : t != null ? t : g.fbt._("unknown subject", null, {
                hk: "3Lg3Zm"
              }).toString();
            }
            t.addDeduppedSubgroupLink([{
              id: n.id,
              type: s.ActivityTypeType.SUB_GROUP_LINK,
              communityId: e,
              timestamp: i,
              subgroupName: a,
              subgroupId: r
            }]);
          } else if (n.subtype === c.GROUP_ACTIONS.ADD && i > a) {
            t.add({
              id: e.toString(),
              communityId: e,
              timestamp: i,
              type: s.ActivityTypeType.NEW_COMMUNITY
            });
          }
        });
      }
    })();
  }
  addDeduppedSubgroupLink(e) {
    const t = e.filter(e => !this.some(t => {
      var n;
      if ((n = t.subgroupId) === null || n === undefined) {
        return undefined;
      } else {
        return n.equals(e.subgroupId);
      }
    }));
    return this.add(t);
  }
}
m.model = s.CommunityActivity;
m.comparator = (e, t) => e.timestamp - t.timestamp;
var h = new m();
exports.default = h;