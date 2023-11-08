var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addSecurityCodeChangedNotifications = function () {
  return h.apply(this, arguments);
};
exports.generateSecurityCodeChangedNotifications = y;
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./359987.js");
var s = require("./389293.js");
var l = require("./890490.js");
var u = require("./6007.js");
var c = require("./800321.js");
var d = require("./61229.js");
var p = require("./98742.js");
var f = require("./918475.js");
var _ = require("./117429.js");
var g = require("./669050.js");
var m = r(require("./556869.js"));
function h() {
  return (h = (0, a.default)(function* (e) {
    let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
    let {
      notifications: n,
      chatIds: r
    } = yield y(e);
    if (n.length !== 0) {
      if (!t) {
        n = n.map(e => (0, i.default)((0, i.default)({}, e), {}, {
          recvFresh: true,
          isNewMsg: true
        }));
        for (const e of n) {
          (0, o.frontendSendAndReceive)("processMultipleMessages", {
            chatId: e.from,
            msgObjs: [e],
            meta: {
              add: "after",
              isHistory: false
            },
            processMessagesOrigin: "securityCodeApi"
          });
        }
        const e = yield (0, l.encryptMultipleDBMsgs)(n);
        return (0, u.storeEncryptedDBMessages)(e, r, false);
      }
      (0, c.getMessageCache)().addMessages(n.map(e => ({
        msg: e
      })), false);
    }
  })).apply(this, arguments);
}
function y() {
  return E.apply(this, arguments);
}
function E() {
  return (E = (0, a.default)(function* (e) {
    const t = {
      notifications: [],
      chatIds: []
    };
    if (!(0, _.getGlobalSecurityNotifications)()) {
      return t;
    }
    const n = [];
    try {
      const t = yield (0, d.getChatTable)().get(e.toString(), false);
      if (t) {
        n.push((0, g.createWid)(t.id));
      }
      const r = yield (0, f.getParticipantTable)().equals(["participants"], String(e));
      const i = new Map();
      if (r.length > 0) {
        const e = r.map(e => e.groupId);
        (yield (0, p.getGroupMetadataTable)().bulkGet(e)).forEach(e => {
          if (e != null) {
            i.set(e.id, e);
          }
        });
      }
      r.forEach(t => {
        const r = i.get(t.groupId);
        if (!(Boolean(r == null ? undefined : r.defaultSubgroup) === true && e.isLid())) {
          n.push((0, g.createWid)(t.groupId));
        }
      });
    } catch (e) {
      __LOG__(4, true, new Error(), true)`get chats failed`;
      SEND_LOGS("get chats failed when creating device notification");
      throw (0, m.default)("get chats failed");
    }
    const r = n.map(t => (0, s.genSecurityCodeNotificationMsg)(t, e));
    t.notifications = r;
    t.chatIds = n.map(String);
    return t;
  })).apply(this, arguments);
}