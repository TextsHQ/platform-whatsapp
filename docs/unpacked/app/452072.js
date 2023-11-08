var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeChatAssignment = function () {
  return R.apply(this, arguments);
};
exports.checkOrphanAssignments = function () {
  S.Cmd.once(S.APP_STATE_SYNC_COMPLETED, () => {
    (0, l.checkOrphanAgents)(c.AgentCollection.getModelsArray().map(e => {
      let {
        id: t
      } = e;
      return t;
    }));
    (0, l.checkOrphanChatAssignments)(f.ChatAssignmentCollection.getModelsArray().map(e => {
      let {
        id: t
      } = e;
      return t;
    }));
  });
};
exports.createChatAssignmentSystemMsgs = k;
exports.removeChatAssignmentsForChat = function () {
  return G.apply(this, arguments);
};
exports.triggerChatAssignmentNotification = function (e, t) {
  if (!(0, p.chatAssignmentNotificationsEnabled)() || !(0, y.canAssignChats)()) {
    return;
  }
  const n = (0, P.assertGetMe)().getDeviceId();
  const r = e.filter(e => {
    const t = c.AgentCollection.get(e.agentId);
    return (t == null ? undefined : t.deviceId) === n;
  });
  if (r.length === 0) {
    return;
  }
  M.WANotificationController.triggerNotification(new A.WAWebNotificationsChatAssignmentNotification({
    chats: r.map(e => (0, I.createWid)(e.chatId)),
    assignmentTimestamps: t
  }));
};
var i = r(require("../vendor/348926.js"));
var a = require("./679905.js");
var o = require("./24756.js");
var s = require("./122393.js");
var l = require("./998667.js");
var u = require("./632157.js");
var c = require("./919833.js");
var d = require("./723084.js");
var p = require("./72696.js");
var f = require("./412380.js");
var _ = require("./2772.js");
var g = require("./698052.js");
var m = require("./849559.js");
var h = require("./15605.js");
var y = require("./560861.js");
var E = require("./351053.js");
var S = require("./780549.js");
var v = require("./94602.js");
var T = require("./700846.js");
var M = require("./14346.js");
var A = require("./59511.js");
var b = require("./657858.js");
var C = require("./480313.js");
var P = require("./459857.js");
var O = r(require("./53575.js"));
var I = require("./669050.js");
function R() {
  return (R = (0, i.default)(function* (e, t) {
    if (!(0, y.canAssignChats)()) {
      return;
    }
    const n = (0, P.assertGetMe)().getDeviceId();
    const r = e.map(e => {
      const r = e.chat.id.toString({
        legacy: true
      });
      const i = e.agentId;
      const a = c.AgentCollection.getByDeviceId(n);
      return {
        id: `${r}_${i || ""}`,
        chatId: r,
        agentId: i != null ? i : "",
        chatOpenedByAgent: (a == null ? undefined : a.deviceId) === n && t !== g.ChatAssignmentEntryPointType.MULTI_SELECT && t !== g.ChatAssignmentEntryPointType.CONTACT_INFO_SCREEN
      };
    });
    const i = e.map(e => e.chat.assignedAgent != null);
    yield (0, C.lockForSync)(["chat-assignment"], L(r), () => D(r));
    e.forEach((n, r) => {
      var a;
      (0, _.logChatAssignment)(n.chat, (a = n.agentId) !== null && a !== undefined ? a : "", i[r], t, e.length);
    });
    k(e.map(e => {
      let {
        chat: t,
        agentId: n
      } = e;
      const r = c.AgentCollection.get(n != null ? n : "");
      return {
        chatId: t.id,
        agent: r,
        timestamp: (0, u.unixTime)()
      };
    }));
    O.default.setUser("chat_assignment_agent_has_assigned_chats", true);
    r.filter(e => {
      let {
        chatOpenedByAgent: t
      } = e;
      return t === true;
    }).forEach(e => {
      const t = E.ChatCollection.get(e.chatId);
      if (t != null) {
        (0, d.markChatAsOpened)(t, true);
      }
    });
  })).apply(this, arguments);
}
function N(e) {
  return f.ChatAssignmentCollection.getModelsArray().filter(t => {
    let {
      chatId: n
    } = t;
    return e.includes(n);
  }).map(e => e.id);
}
function D() {
  return w.apply(this, arguments);
}
function w() {
  return (w = (0, i.default)(function* (e) {
    const t = N(e.map(e => {
      let {
        chatId: t
      } = e;
      return t;
    }));
    const n = e.map(e => {
      let {
        id: t,
        chatId: n,
        agentId: r,
        chatOpenedByAgent: i
      } = e;
      return new m.ChatAssignment({
        id: t,
        chatId: n,
        agentId: r,
        chatOpenedByAgent: i,
        agent: c.AgentCollection.get(r)
      });
    });
    f.ChatAssignmentCollection.remove(t);
    f.ChatAssignmentCollection.add(n);
    const r = (0, b.getChatAssignmentTable)();
    yield Promise.all([r.bulkRemove(t), r.bulkCreateOrMerge(e)]);
  })).apply(this, arguments);
}
function L(e) {
  const t = (0, u.unixTimeMs)();
  return e.map(e => {
    let {
      chatId: n,
      agentId: r
    } = e;
    return (0, o.buildPendingMutation)({
      timestamp: t,
      collection: s.CollectionName.Regular,
      operation: a.SyncdMutation$SyncdOperation.SET,
      indexArgs: [n],
      value: {
        chatAssignment: {
          deviceAgentID: r
        }
      },
      action: s.Actions.ChatAssignment,
      version: s.CHAT_ASSIGNMENT_SYNC_VERSION
    });
  });
}
function k(e) {
  if ((0, p.chatAssignmentSystemMessagesEnabled)()) {
    e.forEach(e => {
      let {
        chatId: t,
        agent: n,
        timestamp: r
      } = e;
      const i = E.ChatCollection.get(t);
      (0, T.handleSingleMsg)(t, (0, h.genChatAssignmentNotificationTemplateMsg)(t, n, r), "chatAssignmentSystemMsg").then(() => {
        if (i != null) {
          (0, _.logSystemMessageGeneratedFromCompanion)(i);
        }
      }).catch(() => {
        if (i != null) {
          (0, _.logSystemMessageFailedToGenerate)(i);
        }
      });
    });
  }
}
function G() {
  return (G = (0, i.default)(function* (e) {
    if (!(0, v.isSMB)()) {
      return;
    }
    const t = N([e.toString({
      legacy: true
    })]);
    yield (0, b.getChatAssignmentTable)().bulkRemove(t);
    f.ChatAssignmentCollection.remove(t);
  })).apply(this, arguments);
}