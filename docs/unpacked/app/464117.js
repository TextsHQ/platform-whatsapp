var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./229079.js");
var o = require("./679905.js");
var s = require("./614392.js");
var l = require("./24756.js");
var u = require("./122393.js");
var c = require("./632157.js");
var d = require("./97858.js");
var p = require("./61229.js");
var f = require("./622918.js");
var _ = require("./336897.js");
var g = require("./304954.js");
var m = r(require("./124928.js"));
var h = require("./669050.js");
class y extends s.SyncActionBase {
  constructor() {
    super(...arguments);
    this.version = 2;
    this.action = u.Actions.Mute;
  }
  getChatJidAndMessageKey(e) {
    const [, t] = e.indexArr;
    return {
      chatJid: t,
      messageKey: null
    };
  }
  applyMutations(e) {
    return Promise.all(e.map(function () {
      var e = (0, i.default)(function* (e) {
        try {
          if (e.operation === "set") {
            var t;
            var r;
            const {
              indexParts: i,
              value: o
            } = e;
            const [, s] = i;
            if (!s) {
              (0, f.throwInvalidActionIndex)();
            }
            if (!m.default.isWid(s)) {
              (0, _.uploadCriticalEventMetric)(g.MD_SYNCD_CRITICAL_EVENT_CODE.ACTION_INVALID_INDEX_DATA);
              return {
                actionState: u.SyncActionState.Malformed
              };
            }
            const l = o.muteAction;
            const y = (t = o.muteAction) === null || t === undefined ? undefined : t.muted;
            const E = (0, a.maybeNumberOrThrowIfTooLarge)(l == null ? undefined : l.muteEndTimestamp);
            const S = !!((r = o.muteAction) === null || r === undefined ? undefined : r.autoMuted);
            if (y == null || y && E == null) {
              __LOG__(3)`mute chat sync: malformed mutation`;
              return {
                actionState: u.SyncActionState.Malformed
              };
            }
            const v = (0, h.createWid)(s);
            if (!(yield (0, p.getChatTable)().get(v.toString(), false))) {
              return {
                actionState: u.SyncActionState.Orphan,
                orphanModel: {
                  modelType: u.SyncModelType.Chat,
                  modelId: v.toString()
                }
              };
            }
            const T = E != null ? E : 0;
            const M = T > 0 && T < (0, c.unixTimeMs)() ? 0 : Math.floor(T / 1000);
            let A;
            if ((0, d.isAutoMuteConfirmationDialogEnabled)()) {
              yield (0, p.getChatTable)().merge(v.toString(), {
                muteExpiration: M,
                isAutoMuted: S
              });
              A = {
                id: v,
                expiration: M,
                isAutoMuted: S
              };
            } else {
              yield (0, p.getChatTable)().merge(v.toString(), {
                muteExpiration: M
              });
              A = {
                id: v,
                expiration: M
              };
            }
            require("./971804.js").MuteCollection.add(A, {
              merge: true
            });
            (0, d.isAutoMuteConfirmationDialogEnabled)();
            return {
              actionState: u.SyncActionState.Success
            };
          }
          __LOG__(3)`mute chat sync: operation not supported`;
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
  generateMuteMutation(e, t, n) {
    const r = t !== undefined && t !== 0;
    const i = (0, c.unixTimeMs)();
    let a;
    let s = t;
    if (s !== -1) {
      s *= 1000;
    }
    a = (0, d.isAutoMuteConfirmationDialogEnabled)() ? {
      muted: r,
      muteEndTimestamp: s,
      autoMuted: n
    } : {
      muted: r,
      muteEndTimestamp: s
    };
    const p = {
      muteAction: a
    };
    return (0, l.buildPendingMutation)({
      collection: u.CollectionName.RegularHigh,
      indexArgs: [e.toString({
        legacy: true
      })],
      operation: o.SyncdMutation$SyncdOperation.SET,
      version: this.version,
      value: p,
      timestamp: i,
      action: this.action
    });
  }
}
const E = new y();
Object.freeze(E);
var S = E;
exports.default = S;