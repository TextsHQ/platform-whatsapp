var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.markConversationSeen = function (e, t) {
  return (0, c.getChatTable)().merge(e.toString(), {
    unreadCount: t,
    unreadDividerOffset: 0
  }).catch(e => {
    if (e instanceof u.DbOnLogoutAbort) {
      throw e;
    }
    __LOG__(4, true, new Error(), true)`update chat table failed`;
    SEND_LOGS("update chat table failed when mark conversation seen");
    throw (0, p.default)("update chat table failed");
  });
};
exports.markConversationUnseen = function (e) {
  return (0, c.getChatTable)().merge(e.toString(), {
    unreadCount: -1,
    unreadDividerOffset: 0
  }).catch(e => {
    if (e instanceof u.DbOnLogoutAbort) {
      throw e;
    }
    __LOG__(4, true, new Error(), true)`update chat table failed`;
    SEND_LOGS("update chat table failed when mark conversation as unseen");
    throw (0, p.default)("update chat table failed");
  });
};
exports.sendConversationSeen = function () {
  return f.apply(this, arguments);
};
exports.sendConversationUnseen = function (e) {
  const {
    lockForMessageRangeSync: t
  } = require("./414240.js");
  const r = (0, l.default)(require("./704106.js"));
  const i = (0, a.unixTimeMs)();
  return r.getMarkChatAsReadMutation(i, false, e).then(n => t([], [n], () => (0, o.addActiveMessageRange)(e.toString(), "markChatAsRead", n.binarySyncAction)));
};
var i = r(require("../vendor/348926.js"));
var a = require("./632157.js");
var o = require("./791381.js");
var s = require("./35234.js");
var l = r(require("./97359.js"));
var u = require("./288057.js");
var c = require("./61229.js");
var d = require("./203146.js");
var p = r(require("./556869.js"));
function f() {
  return (f = (0, i.default)(function* (e, t, r) {
    const {
      lockForMessageRangeSync: i
    } = require("./414240.js");
    const u = (0, l.default)(require("./704106.js"));
    const c = (0, a.unixTimeMs)();
    if (r === -1) {
      const t = yield u.getMarkChatAsReadMutation(c, true, e.id);
      const n = e.id.toString();
      i([], [t], () => (0, o.addActiveMessageRange)(e.id.toString(), "markChatAsRead", t.binarySyncAction));
      yield (0, s.updateChatForMarkAsReadSync)(n);
    } else {
      yield (0, d.markChatRead)(e, t);
    }
  })).apply(this, arguments);
}