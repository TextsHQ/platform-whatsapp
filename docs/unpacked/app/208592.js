var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./229079.js");
var o = r(require("./670983.js"));
var s = require("./679905.js");
var l = require("./527796.js");
var u = require("./614392.js");
var c = require("./24756.js");
var d = require("./122393.js");
var p = require("./632157.js");
var f = r(require("./517515.js"));
var _ = r(require("./212485.js"));
var g = require("./206464.js");
require("./430461.js");
var m = require("./97858.js");
var h = require("./61229.js");
var y = require("./480313.js");
var E = require("./622918.js");
var S = require("./610876.js");
var v = require("./336897.js");
require("./386310.js");
var T = require("./304954.js");
var M = r(require("./124928.js"));
var A = require("./669050.js");
var b = require("./394629.js");
class C extends u.SyncActionBase {
  constructor() {
    super(...arguments);
    this.version = 5;
    this.action = d.Actions.Pin;
  }
  applyMutations(e) {
    var t = this;
    return (0, i.default)(function* () {
      f.default.updatePrimaryAllowsAllMutationsFlag("other mutation");
      const n = [];
      for (let r = 0; r < e.length; r++) {
        n.push(yield t.applyMutation(e[r]));
      }
      return n;
    })();
  }
  applyMutation(e) {
    var t = this;
    return (0, i.default)(function* () {
      if (e.operation === "remove") {
        __LOG__(3)`syncd: pin_chat_sync: REMOVE not supported`;
        return Promise.resolve({
          actionState: d.SyncActionState.Unsupported
        });
      }
      if (!(0, m.pinChatSyncEnabled)()) {
        __LOG__(3)`syncd: pin_chat_sync: not enabled`;
        return Promise.resolve({
          actionState: d.SyncActionState.Unsupported
        });
      }
      const {
        indexParts: n,
        value: r,
        timestamp: i
      } = e;
      const [, a] = n;
      try {
        if (!a) {
          __LOG__(3)`syncd: pin_chat_sync: missing chatId in index`;
          (0, E.throwInvalidActionIndex)();
        }
        if (!M.default.isWid(a)) {
          (0, v.uploadCriticalEventMetric)(T.MD_SYNCD_CRITICAL_EVENT_CODE.ACTION_INVALID_INDEX_DATA);
          return {
            actionState: d.SyncActionState.Malformed
          };
        }
        const e = (0, A.createWid)(a);
        const {
          pinAction: n
        } = r;
        if (n == null) {
          __LOG__(3)`syncd: pin_chat_sync: missing pinAction`;
          return Promise.resolve({
            actionState: d.SyncActionState.Malformed
          });
        }
        const {
          pinned: o
        } = n;
        if (o == null) {
          __LOG__(3)`syncd: pin_chat_sync: missing pinned field`;
          return Promise.resolve({
            actionState: d.SyncActionState.Malformed
          });
        }
        if ((yield (0, h.getChatTable)().get(e.toString(), false)) == null) {
          return {
            actionState: d.SyncActionState.Orphan,
            orphanModel: {
              modelType: d.SyncModelType.Chat,
              modelId: e.toString()
            }
          };
        }
        if (!o) {
          yield t.applyUpdates([{
            wid: e,
            pinned: false,
            timestamp: i
          }]);
          return {
            actionState: d.SyncActionState.Success
          };
        }
        const s = yield t.getLocalPins();
        if (s.some(t => t.chatId.toString() === e.toString())) {
          yield t.applyUpdates([{
            wid: e,
            pinned: o,
            timestamp: i
          }]);
          return {
            actionState: d.SyncActionState.Success
          };
        }
        if (s.length < 3) {
          yield t.applyUpdates([{
            wid: e,
            pinned: o,
            timestamp: i
          }]);
          return {
            actionState: d.SyncActionState.Success
          };
        }
        const l = s.reduce((e, t) => t.timestamp < e.timestamp ? t : e);
        const u = [];
        const c = l.timestamp < i ? l.chatId : e;
        if (c === l.chatId) {
          u.push({
            wid: l.chatId,
            pinned: false,
            timestamp: i
          }, {
            wid: e,
            pinned: true,
            timestamp: i
          });
        }
        yield Promise.all([t.applyUpdates(u), t.createPendingUnpin(c, i)]);
        return Promise.resolve({
          actionState: d.SyncActionState.Success
        });
      } catch (e) {
        return {
          actionState: d.SyncActionState.Failed
        };
      }
    })();
  }
  applyUpdates(e) {
    return (0, i.default)(function* () {
      if (e.length === 0) {
        return;
      }
      const t = e.map(e => {
        let {
          wid: t,
          pinned: n,
          timestamp: r
        } = e;
        const i = {
          id: t.toString(),
          pin: n ? r : 0
        };
        if (n) {
          i.archive = false;
        }
        return i;
      });
      yield Promise.all(t.map(e => (0, h.getChatTable)().merge(e.id, e)));
      yield Promise.all(e.map(function () {
        var e = (0, i.default)(function* (e) {
          const t = yield (0, g.getExisting)(e.wid);
          if (t != null) {
            t.pin = e.pinned ? e.timestamp : 0;
            if (e.pinned) {
              t.archive = false;
            }
          }
        });
        return function () {
          return e.apply(this, arguments);
        };
      }()));
    })();
  }
  createPendingUnpin(e, t) {
    var n = this;
    return (0, i.default)(function* () {
      yield (0, S.appendPendingMutationsRows)([n.getPinMutation(t, false, e)]);
    })();
  }
  getLocalPins() {
    return (0, i.default)(function* () {
      const e = (0, h.getChatTable)().all().then(e => e.filter(e => e.pin != null && e.pin > 0).map(e => [e.id, (0, o.default)(e.pin, "chatRow.pin")]));
      const t = (0, S.getSyncActionsRows)(["action"], [d.Actions.Pin]).then(e => e.filter(e => e.actionState === d.SyncActionState.Orphan).map(e => {
        var t;
        const n = JSON.parse(e.index);
        if (n.length < 2) {
          return null;
        }
        const r = n[1];
        const i = (0, b.decodeProtobuf)(l.SyncActionDataSpec, e.binarySyncData).value;
        if ((i == null ? undefined : i.pinAction) != null && (i == null ? undefined : i.pinAction.pinned)) {
          return [r, (0, a.numberOrThrowIfTooLarge)((t = i.timestamp) !== null && t !== undefined ? t : 0)];
        } else {
          return null;
        }
      }).filter(Boolean));
      const [n, r] = yield Promise.all([e, t]);
      return [...n, ...r].map(e => {
        let [t, n] = e;
        return {
          chatId: (0, A.createWid)(t),
          timestamp: n
        };
      });
    })();
  }
  unpinAll() {
    var e = this;
    return (0, i.default)(function* () {
      const t = yield e.getLocalPins();
      const n = (0, p.unixTimeMs)();
      const r = t.map(t => {
        let {
          chatId: r
        } = t;
        return e.getPinMutation(n, false, r);
      });
      return (0, y.lockForSync)(["chat"], r, () => Promise.resolve()).then(() => e.applyUpdates(t.map(e => {
        let {
          chatId: t
        } = e;
        return {
          wid: t,
          pinned: false,
          timestamp: n
        };
      })));
    })();
  }
  getMutationsForPin(e, t, n) {
    var r = this;
    return (0, i.default)(function* () {
      const i = [r.getPinMutation(e, t, n)];
      if (t) {
        i.push(yield _.default.getArchiveChatMutation(e, false, n));
      }
      return i;
    })();
  }
  getChatJidAndMessageKey(e) {
    const [, t] = e.indexArr;
    return {
      chatJid: t,
      messageKey: null
    };
  }
  getPinMutation(e, t, n) {
    return (0, c.buildPendingMutation)({
      collection: d.CollectionName.RegularLow,
      indexArgs: [n.toString({
        legacy: true
      })],
      value: {
        pinAction: {
          pinned: t
        }
      },
      version: this.version,
      operation: s.SyncdMutation$SyncdOperation.SET,
      timestamp: e,
      action: this.action
    });
  }
}
const P = new C();
Object.freeze(P);
var O = P;
exports.default = O;