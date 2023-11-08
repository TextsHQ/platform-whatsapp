var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.markChatAsOpened = function () {
  return h.apply(this, arguments);
};
exports.updateLocalOpenedState = g;
var i = r(require("../vendor/348926.js"));
var a = require("./679905.js");
var o = require("./24756.js");
var s = require("./122393.js");
var l = require("./632157.js");
var u = require("./919833.js");
var c = require("./412380.js");
var d = require("./560861.js");
var p = require("./657858.js");
var f = require("./480313.js");
var _ = require("./459857.js");
function g() {
  return m.apply(this, arguments);
}
function m() {
  return (m = (0, i.default)(function* (e) {
    e.forEach(e => {
      let {
        id: t,
        chatOpenedByAgent: n
      } = e;
      const r = c.ChatAssignmentCollection.get(t);
      if (r) {
        r.set("chatOpenedByAgent", n);
      }
    });
    const t = (0, p.getChatAssignmentTable)();
    yield t.bulkCreateOrMerge(e);
  })).apply(this, arguments);
}
function h() {
  return (h = (0, i.default)(function* (e, t) {
    var n;
    if (!(0, d.canAssignChats)()) {
      return;
    }
    const r = (0, _.assertGetMe)().getDeviceId();
    const i = e.id;
    const a = (n = u.AgentCollection.getByDeviceId(r)) === null || n === undefined ? undefined : n.id;
    if (a == null) {
      return;
    }
    const o = [{
      chatId: i,
      agentId: a,
      chatOpened: t
    }].map(e => {
      const n = e.chatId.toString({
        legacy: true
      });
      return {
        id: `${n}_${a}`,
        chatId: n,
        agentId: a,
        chatOpenedByAgent: t
      };
    });
    yield (0, f.lockForSync)(["chat-assignment"], y(o), () => g(o));
  })).apply(this, arguments);
}
function y(e) {
  const t = (0, l.unixTimeMs)();
  return e.map(e => {
    let {
      chatId: n,
      agentId: r,
      chatOpenedByAgent: i
    } = e;
    return (0, o.buildPendingMutation)({
      timestamp: t,
      collection: s.CollectionName.Regular,
      operation: a.SyncdMutation$SyncdOperation.SET,
      indexArgs: [n, r],
      value: {
        chatAssignmentOpenedStatus: {
          chatOpened: i
        }
      },
      action: s.Actions.ChatAssignmentOpenedStatus,
      version: s.CHAT_ASSIGNMENT_SYNC_VERSION
    });
  });
}