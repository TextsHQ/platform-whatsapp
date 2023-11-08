var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./614392.js");
var o = require("./122393.js");
var s = require("./723084.js");
var l = require("./412380.js");
var u = require("./622918.js");
class c extends a.SyncActionBase {
  constructor() {
    super(...arguments);
    this.version = o.CHAT_ASSIGNMENT_SYNC_VERSION;
    this.action = o.Actions.ChatAssignmentOpenedStatus;
  }
  applyMutations(e) {
    return (0, i.default)(function* () {
      const t = [];
      const n = e.map(e => {
        try {
          const {
            indexParts: n
          } = e;
          const [, r, i] = n;
          if (!(r != null && i != null)) {
            (0, u.throwInvalidActionIndex)();
          }
          if (e.operation === "set") {
            const {
              chatAssignmentOpenedStatus: n
            } = e.value;
            if (!n) {
              return {
                actionState: o.SyncActionState.Malformed
              };
            }
            const {
              chatOpened: a
            } = n;
            if (a == null) {
              return {
                actionState: o.SyncActionState.Malformed
              };
            }
            const s = `${r}_${i}`;
            if (l.ChatAssignmentCollection.get(s) == null) {
              return {
                actionState: o.SyncActionState.Orphan,
                orphanModel: {
                  modelId: s,
                  modelType: o.SyncModelType.ChatAssignment
                }
              };
            } else {
              t.push({
                id: s,
                chatId: r,
                agentId: i,
                chatOpenedByAgent: a
              });
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
      yield (0, s.updateLocalOpenedState)(t);
      return n;
    })();
  }
}
const d = new c();
Object.freeze(d);
var p = d;
exports.default = p;