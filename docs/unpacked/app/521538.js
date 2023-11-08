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
var u = require("./193991.js");
var c = require("./549791.js");
var d = require("./622918.js");
class p extends o.SyncActionBase {
  constructor() {
    super(...arguments);
    this.version = 2;
    this.action = l.Actions.QuickReply;
  }
  applyMutations(e) {
    return Promise.all(e.map(function () {
      var e = (0, i.default)(function* (e) {
        try {
          if (e.operation === "set") {
            const {
              indexParts: t,
              value: n
            } = e;
            const [, r] = t;
            if (!r) {
              (0, d.throwInvalidActionIndex)();
            }
            const i = n.quickReplyAction;
            if (!i) {
              __LOG__(3)`quick replies sync: malformed mutation`;
              return {
                actionState: l.SyncActionState.Malformed
              };
            }
            if (i.deleted === true) {
              yield (0, c.getQuickReplyTable)().remove(r);
              u.QuickReplyCollection.remove(r);
              return {
                actionState: l.SyncActionState.Success
              };
            }
            const {
              shortcut: a,
              message: o
            } = i;
            if (a == null || a === "" || o == null || o === "") {
              __LOG__(3)`quick replies sync: malformed mutation`;
              return {
                actionState: l.SyncActionState.Malformed
              };
            }
            const s = i.keywords || [];
            const p = i.count || 0;
            yield (0, c.getQuickReplyTable)().createOrReplace({
              id: r,
              shortcut: a,
              count: p,
              message: o,
              keywords: s
            });
            u.QuickReplyCollection.add({
              id: r,
              shortcut: a,
              message: o,
              keywords: s,
              count: p
            }, {
              merge: true
            });
            return {
              actionState: l.SyncActionState.Success
            };
          }
          __LOG__(3)`quick replies sync: operation not supported`;
          return {
            actionState: l.SyncActionState.Unsupported
          };
        } catch (e) {
          return {
            actionState: l.SyncActionState.Failed
          };
        }
      });
      return function () {
        return e.apply(this, arguments);
      };
    }()));
  }
  getQuickReplyDeleteMutation(e, t) {
    return (0, s.buildPendingMutation)({
      collection: l.CollectionName.RegularLow,
      indexArgs: [e],
      value: {
        quickReplyAction: {
          deleted: true,
          keywords: [],
          shortcut: "",
          message: "",
          count: 0
        }
      },
      version: this.version,
      operation: a.SyncdMutation$SyncdOperation.SET,
      timestamp: t,
      action: this.action
    });
  }
  getQuickReplyAddOrEditMutation(e, t, n, r, i, o) {
    return (0, s.buildPendingMutation)({
      collection: l.CollectionName.RegularLow,
      indexArgs: [e],
      value: {
        quickReplyAction: {
          deleted: false,
          keywords: i,
          shortcut: t,
          message: n,
          count: r
        }
      },
      version: this.version,
      operation: a.SyncdMutation$SyncdOperation.SET,
      timestamp: o,
      action: this.action
    });
  }
}
const f = new p();
Object.freeze(f);
var _ = f;
exports.default = _;