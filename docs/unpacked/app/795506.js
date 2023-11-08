var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./614392.js");
var o = require("./122393.js");
var s = require("./919833.js");
var l = require("./86417.js");
var u = require("./61113.js");
var c = require("./630001.js");
var d = require("./622918.js");
var p = require("./645485.js");
class f extends a.SyncActionBase {
  constructor() {
    super(...arguments);
    this.version = 7;
    this.action = o.Actions.Agent;
  }
  applyMutations(e) {
    return (0, i.default)(function* () {
      const t = [];
      const n = [];
      const r = e.map(e => {
        try {
          const {
            indexParts: s
          } = e;
          const [, u] = s;
          if (!u) {
            (0, d.throwInvalidActionIndex)();
          }
          if (e.operation === "remove") {
            n.push(u);
            return {
              actionState: o.SyncActionState.Success
            };
          }
          if (e.operation === "set") {
            var r;
            var i;
            var a;
            const {
              agentAction: n
            } = e.value;
            if (!n) {
              return {
                actionState: o.SyncActionState.Malformed
              };
            }
            const s = (0, l.getFormattedAgentName)((r = n.name) !== null && r !== undefined ? r : "", (i = n.deviceID) !== null && i !== undefined ? i : -1);
            t.push({
              id: u,
              name: s,
              deviceId: (a = n.deviceID) !== null && a !== undefined ? a : -1,
              isDeleted: Boolean(n.isDeleted)
            });
            return {
              actionState: o.SyncActionState.Success
            };
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
      yield (0, c.getAgentTable)().bulkCreateOrMerge(t);
      s.AgentCollection.add(t, {
        merge: true
      });
      yield (0, c.getAgentTable)().bulkRemove(n);
      s.AgentCollection.remove(n);
      Promise.resolve().then(() => {
        p.UnattributedMessageCollection.getModelsArray().forEach(e => {
          let {
            id: t,
            deviceId: n
          } = e;
          const r = u.MsgCollection.get(t);
          if (r == null) {
            return;
          }
          const i = s.AgentCollection.getByDeviceId(n);
          if (i != null) {
            r.agentId = String(i.id);
            p.UnattributedMessageCollection.remove(t);
          }
        });
      });
      return r;
    })();
  }
}
const _ = new f();
Object.freeze(_);
var g = _;
exports.default = g;