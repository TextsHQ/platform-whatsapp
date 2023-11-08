Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("./614392.js");
var i = require("./122393.js");
var a = require("./960523.js");
class o extends r.SyncActionBase {
  constructor() {
    super(...arguments);
    this.version = 4;
    this.action = i.Actions.AndroidUnsupportedActions;
  }
  applyMutations(e) {
    return Promise.all(e.map(e => {
      try {
        if (e.operation === "set") {
          const {
            value: t
          } = e;
          const n = t.androidUnsupportedActions;
          if (!n) {
            __LOG__(3)`android unsupported actions: malformed mutation`;
            return {
              actionState: i.SyncActionState.Malformed
            };
          }
          if (n.allowed) {
            this.updatePrimaryAllowsAllMutationsFlag("allow_unsupported_mutation");
          }
          return {
            actionState: i.SyncActionState.Success
          };
        }
        __LOG__(3)`locale setting sync: operation not supported`;
        return {
          actionState: i.SyncActionState.Unsupported
        };
      } catch (e) {
        return {
          actionState: i.SyncActionState.Failed
        };
      }
    }));
  }
  updatePrimaryAllowsAllMutationsFlag(e) {
    if (!(0, a.getPrimaryAllowsAllMutations)()) {
      __LOG__(2)`[syncd] primary allows all mutations flag set: ${e}`;
      (0, a.setPrimaryAllowsAllMutations)();
    }
  }
}
const s = new o();
Object.freeze(s);
var l = s;
exports.default = l;