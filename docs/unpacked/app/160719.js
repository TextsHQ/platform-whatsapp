var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/311504.js"));
var a = require("./522815.js");
var o = require("./679905.js");
var s = require("./614392.js");
var l = require("./24756.js");
var u = require("./122393.js");
var c = require("./989329.js");
var d = require("./462545.js");
var p = require("./632157.js");
const f = (0, d.TAGS)(["syncd", "SentinelMutationSync"]);
class _ extends s.SyncActionBase {
  constructor() {
    super(...arguments);
    this.version = 3;
    this.action = u.Actions.Sentinel;
  }
  applyMutations(e) {
    f.LOG`applying mutations...`;
    return Promise.all(e.map(function () {
      var e = (0, i.default)(function* (e) {
        try {
          if (e.operation === "set") {
            var t;
            const n = (t = e.value.keyExpiration) === null || t === undefined ? undefined : t.expiredKeyEpoch;
            if (n == null) {
              __LOG__(4, undefined, new Error())`sentinel mutation sync: malformed mutation`;
              return {
                actionState: u.SyncActionState.Malformed
              };
            } else {
              yield (0, a.expireSyncKeyInTransaction)(n);
              return {
                actionState: u.SyncActionState.Success
              };
            }
          }
          __LOG__(3)`sentinel mutation sync: operation not supported`;
          return {
            actionState: u.SyncActionState.Unsupported
          };
        } catch (e) {
          return {
            actionState: u.SyncActionState.Failed
          };
        }
      });
      return function () {
        return e.apply(this, arguments);
      };
    }()));
  }
  getSentinelMutations() {
    var e = this;
    return (0, i.default)(function* () {
      f.LOG`preparing mutations...`;
      const t = (0, p.unixTimeMs)();
      const n = Array.from(u.CollectionName.members());
      const r = yield (0, c.getNewestKeyPair)();
      if (r == null) {
        __LOG__(4, undefined, new Error())`sentinel mutation sync: no key pairs`;
        return [];
      }
      const i = {
        keyExpiration: {
          expiredKeyEpoch: r.keyEpoch
        }
      };
      return n.map(n => (0, l.buildPendingMutation)({
        collection: n,
        indexArgs: [n],
        operation: o.SyncdMutation$SyncdOperation.SET,
        version: e.version,
        value: i,
        timestamp: t,
        action: e.action
      }));
    })();
  }
}
const g = new _();
Object.freeze(g);
var m = g;
exports.default = m;