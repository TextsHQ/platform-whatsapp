var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/348926.js"));
var a = r(require("./670983.js"));
var o = require("./614392.js");
var s = require("./122393.js");
var l = require("./287461.js");
var u = require("./233137.js");
class c extends o.SyncActionBase {
  constructor() {
    super(...arguments);
    this.version = 7;
    this.action = s.Actions.PrimaryFeature;
  }
  applyMutations(e) {
    return (0, i.default)(function* () {
      if ((0, l.getABPropConfigValue)("primary_feature_sync") !== true) {
        __LOG__(3)`primary feature sync: operation not supported`;
        return e.map(() => ({
          actionState: s.SyncActionState.Unsupported
        }));
      }
      let t;
      const n = e.map(e => {
        var n;
        if (e.operation !== "set") {
          __LOG__(3)`primary feature sync: operation not supported`;
          return {
            actionState: s.SyncActionState.Malformed
          };
        }
        if (((n = e.value.primaryFeature) === null || n === undefined ? undefined : n.flags) == null) {
          __LOG__(3)`primary feature sync: malformed mutation`;
          return {
            actionState: s.SyncActionState.Malformed
          };
        } else {
          if (t == null || e.timestamp > t.timestamp) {
            t = e;
          }
          return {
            actionState: s.SyncActionState.Success
          };
        }
      });
      if (t != null) {
        var r;
        const e = (0, a.default)((r = t.value.primaryFeature) === null || r === undefined ? undefined : r.flags, "latestMutation.value.primaryFeature?.flags");
        yield (0, u.setPrimaryFeatures)(e);
      }
      return n;
    })();
  }
}
const d = new c();
Object.freeze(d);
var p = d;
exports.default = p;