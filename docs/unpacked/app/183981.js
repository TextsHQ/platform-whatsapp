var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./679905.js");
var o = require("./614392.js");
var s = require("./24756.js");
var l = require("./122393.js");
var u = require("./632157.js");
var c = require("./724976.js");
var d = require("./480313.js");
var p = require("./377773.js");
class f extends o.SyncActionBase {
  constructor() {
    super(...arguments);
    this.version = 7;
    this.action = l.Actions.Nux;
  }
  applyMutations(e) {
    return (0, i.default)(function* () {
      const t = [];
      const n = e.map(e => {
        var n;
        if (e.operation !== "set") {
          __LOG__(3)`NuxSync: operation not supported ${e}`;
          return {
            actionState: l.SyncActionState.Malformed
          };
        }
        const r = e.indexParts[1];
        if ((0, c.isString)(r)) {
          t.push({
            nuxKey: r,
            acknowledged: ((n = e.value.nuxAction) === null || n === undefined ? undefined : n.acknowledged) === true
          });
          return {
            actionState: l.SyncActionState.Success
          };
        } else {
          __LOG__(3)`NuxSync: malformed mutation ${e}`;
          return {
            actionState: l.SyncActionState.Malformed
          };
        }
      });
      if (t.length !== 0) {
        __LOG__(2)`NuxSync: update nux to local store`;
        (0, p.updateNuxSyncList)(t);
      }
      return n;
    })();
  }
  _createNuxMutation(e, t, n) {
    return (0, s.buildPendingMutation)({
      collection: l.CollectionName.RegularLow,
      indexArgs: [e],
      value: {
        nuxAction: {
          acknowledged: n
        }
      },
      version: this.version,
      operation: a.SyncdMutation$SyncdOperation.SET,
      timestamp: t,
      action: this.action
    });
  }
  acknowledgeNux(e) {
    var t = this;
    return (0, i.default)(function* () {
      yield t._changeNuxState(e, true);
    })();
  }
  unAcknowledgeNux(e) {
    var t = this;
    return (0, i.default)(function* () {
      yield t._changeNuxState(e, false);
    })();
  }
  _changeNuxState(e, t) {
    var n = this;
    return (0, i.default)(function* () {
      (0, p.updateNuxSyncList)([{
        nuxKey: e,
        acknowledged: t
      }]);
      const r = n._createNuxMutation(e, (0, u.unixTimeMs)(), t);
      yield (0, d.lockForSync)([], [r], () => Promise.resolve());
    })();
  }
}
const _ = new f();
Object.freeze(_);
var g = _;
exports.default = g;