var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./614392.js");
var o = require("./122393.js");
var s = require("./998667.js");
var l = require("./919833.js");
var u = require("./452072.js");
var c = require("./412380.js");
var d = require("./351053.js");
var p = require("./657858.js");
var f = r(require("./775410.js"));
var _ = require("./622918.js");
var g = require("./669050.js");
class m extends a.SyncActionBase {
  constructor() {
    super(...arguments);
    this.version = o.CHAT_ASSIGNMENT_SYNC_VERSION;
    this.action = o.Actions.ChatAssignment;
  }
  applyMutations(e) {
    return (0, i.default)(function* () {
      const t = [];
      const n = [];
      const r = [];
      const i = e.map(e => {
        try {
          const {
            indexParts: a
          } = e;
          const [, s] = a;
          if (!s) {
            (0, _.throwInvalidActionIndex)();
          }
          if (e.operation === "set") {
            var i;
            const {
              chatAssignment: a
            } = e.value;
            if (!a) {
              return {
                actionState: o.SyncActionState.Malformed
              };
            }
            const u = (i = a.deviceAgentID) !== null && i !== undefined ? i : "";
            const p = l.AgentCollection.get(u);
            if (u !== "" && p == null) {
              return {
                actionState: o.SyncActionState.Orphan,
                orphanModel: {
                  modelId: u,
                  modelType: o.SyncModelType.Agent
                }
              };
            }
            const _ = (0, g.createWid)(s);
            if (d.ChatCollection.get(_.toString()) == null) {
              return {
                actionState: o.SyncActionState.Orphan,
                orphanModel: {
                  modelType: o.SyncModelType.Chat,
                  modelId: _.toString()
                }
              };
            } else {
              c.ChatAssignmentCollection.getAgentCollectionForChatId(_).filter(e => e.id !== u).forEach(e => n.push(`${s}_${e.id}`));
              if (u !== "") {
                t.push({
                  id: `${s}_${u}`,
                  chatId: s,
                  agentId: u,
                  chatOpenedByAgent: false
                });
              }
              if (!f.default.isSyncDBootstrapInProcess()) {
                r.push({
                  chatId: _,
                  agent: p,
                  timestamp: Math.floor(e.timestamp / 1000)
                });
              }
              return {
                actionState: o.SyncActionState.Success
              };
            }
          }
          return {
            actionState: o.SyncActionState.Unsupported
          };
        } catch (e) {
          return {
            actionState: o.SyncActionState.Failed
          };
        }
      });
      yield (0, p.getChatAssignmentTable)().bulkCreateOrMerge(t);
      c.ChatAssignmentCollection.processChatAssignments(t);
      yield (0, p.getChatAssignmentTable)().bulkRemove(n);
      c.ChatAssignmentCollection.remove(n);
      (0, u.createChatAssignmentSystemMsgs)(r);
      (0, u.triggerChatAssignmentNotification)(t, e.map(e => e.timestamp).join("-"));
      const a = t.map(e => e.id.toString());
      (0, s.checkOrphanChatAssignments)(a);
      return i;
    })();
  }
}
const h = new m();
Object.freeze(h);
var y = h;
exports.default = y;