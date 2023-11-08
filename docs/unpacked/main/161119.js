var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useWAWebArchivedChatsActivityIndicator = function () {
  const [e, t] = (0, l.useState)(0);
  const [n, a] = (0, l.useState)(false);
  const u = () => {
    const e = r.ChatCollection.filter(e => e.archive && (e.optimisticUnreadCount > 0 || e.optimisticUnreadCount === o.default.MARKED_AS_UNREAD)).length;
    t(e);
  };
  const s = () => {
    const e = r.ChatCollection.filter(e => e.archive && e.isGroup && (e.optimisticUnreadCount > 0 || e.optimisticUnreadCount === o.default.MARKED_AS_UNREAD)).some(e => {
      var t;
      var n;
      const a = (t = (n = e.groupMetadata) === null || n === undefined ? undefined : n.unreadMentionMetadata.getUnreadMentionCount()) !== null && t !== undefined ? t : 0;
      const r = !e.archiveAtMentionViewedInDrawer;
      return a > 0 && r;
    });
    a(e);
  };
  (0, i.useListener)(r.ChatCollection, "add remove reset change:archive change:optimisticUnreadCount change:muteExpiration", u);
  (0, i.useListener)(r.ChatCollection, "change:archive change:hasUnreadMention change:archiveAtMentionViewedInDrawer", s);
  (0, l.useEffect)(() => {
    u();
    s();
  }, []);
  return {
    unreadCount: e,
    showUnreadMentionIcon: n
  };
};
var r = require("../app/351053.js");
var o = a(require("../app/846870.js"));
var l = require("../vendor/667294.js");
var i = require("../app/808446.js");