Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useWAWebStatusActivityIndicator = function () {
  const [e, t] = (0, l.useState)(() => o.StatusV3Collection.getUnexpired(true).some(e => e.unreadCount > 0 && !e.contact.statusMute));
  const n = (0, l.useRef)({});
  const u = () => {
    const a = o.StatusV3Collection.getUnexpired(true).some(e => {
      const t = n.current[e.id.toString()];
      const a = !t || e.t > t;
      return !e.contact.statusMute && e.unreadCount > 0 && a;
    });
    if (a !== e) {
      t(a);
    }
  };
  (0, i.useListener)(r.ContactCollection, a.COLLECTION_HAS_SYNCED, u);
  (0, i.useListener)(o.StatusV3Collection, "add remove change:unreadCount change:t", u);
  return {
    hasUnread: e,
    clearUnreadActivity: () => {
      o.StatusV3Collection.getUnexpired(true).forEach(e => {
        n.current[e.id.toString()] = e.t;
      });
      t(false);
    }
  };
};
var a = require("../app/292220.js");
var r = require("../app/177938.js");
var o = require("../app/657694.js");
var l = require("../vendor/667294.js");
var i = require("../app/808446.js");