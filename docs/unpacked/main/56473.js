Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useWAWebChatsActivityIndicator = function () {
  const [e, t] = (0, o.useState)(false);
  const n = () => {
    const e = a.ChatCollection.filter(e => !e.archive && (0, r.isUnreadFilterMatch)(e)).length;
    t(e > 0);
  };
  (0, l.useListener)(a.ChatCollection, "add remove reset change:hasUnread change:archive change:isAssignedToMe change:unopenedByAssignedAgent", n);
  (0, o.useEffect)(() => {
    n();
  }, []);
  return {
    hasActivity: e
  };
};
var a = require("../app/351053.js");
var r = require("../app/713105.js");
var o = require("../vendor/667294.js");
var l = require("../app/808446.js");