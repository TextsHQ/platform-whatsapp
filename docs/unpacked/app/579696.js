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
var c = require("./351053.js");
var d = require("./840089.js");
var p = require("./622918.js");
var f = require("./669050.js");
class _ extends o.SyncActionBase {
  constructor() {
    super(...arguments);
    this.version = 2;
    this.action = l.Actions.BotWelcomeRequest;
  }
  applyMutations(e) {
    return Promise.all(e.map(function () {
      var e = (0, i.default)(function* (e) {
        try {
          switch (e.operation) {
            case "set":
              {
                var t;
                const {
                  indexParts: n,
                  value: r
                } = e;
                const [, i] = n;
                if (!i) {
                  (0, p.throwInvalidActionIndex)();
                }
                const a = (t = r.botWelcomeRequestAction) === null || t === undefined ? undefined : t.isSent;
                if (a == null) {
                  __LOG__(3)`[BotWelcomeRequestSync]: malformed mutation. isSent is not of boolean type`;
                  return {
                    actionState: l.SyncActionState.Malformed
                  };
                }
                const o = (0, f.createWid)(i);
                const s = c.ChatCollection.get(o);
                if (s) {
                  s.hasRequestedWelcomeMsg = a;
                  yield (0, d.updateChatTable)(o, {
                    hasRequestedWelcomeMsg: a
                  });
                  return {
                    actionState: l.SyncActionState.Success
                  };
                } else {
                  __LOG__(3)`[BotWelcomeRequestSync]: could not find chat`;
                  return {
                    actionState: l.SyncActionState.Orphan
                  };
                }
              }
            default:
              __LOG__(3)`[BotWelcomeRequestSync] operation not supported`;
              return {
                actionState: l.SyncActionState.Unsupported
              };
          }
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
  getBotWelcomeRequestSetMutation(e, t) {
    return (0, s.buildPendingMutation)({
      collection: l.CollectionName.RegularLow,
      indexArgs: [e.toString({
        legacy: true
      })],
      value: {
        botWelcomeRequestAction: {
          isSent: t
        }
      },
      version: this.version,
      operation: a.SyncdMutation$SyncdOperation.SET,
      timestamp: (0, u.unixTime)(),
      action: this.action
    });
  }
}
const g = new _();
Object.freeze(g);
var m = g;
exports.default = m;