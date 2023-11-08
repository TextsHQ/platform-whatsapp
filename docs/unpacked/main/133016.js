Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const [t, n] = (0, l.useState)(() => !(!e.isGroup || r.ServerProps.groupDescLength <= 0 || (0, o.getSeenGroupDesc)(e.id)) && ((0, o.setSeenGroupDesc)(e.id), e.unreadCount === 0 ? !e.msgs.some(e => e.type !== a.MSG_TYPE.E2E_NOTIFICATION && e.type !== a.MSG_TYPE.GP2) : !e.shouldShowUnreadDivider));
  return [t, () => {
    n(false);
  }];
};
var a = require("../app/373070.js");
var r = require("../app/937001.js");
var o = require("../app/757453.js");
var l = require("../vendor/667294.js");