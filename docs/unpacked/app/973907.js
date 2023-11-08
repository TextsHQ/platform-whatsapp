var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = r(require("./670983.js"));
var s = require("./679905.js");
var l = require("./527796.js");
var u = require("./614392.js");
var c = require("./24756.js");
var d = require("./122393.js");
var p = r(require("./517515.js"));
var f = require("./791381.js");
var _ = require("./359987.js");
var g = require("./351053.js");
var m = require("./137460.js");
require("./430461.js");
var h = require("./414240.js");
var y = require("./323829.js");
var E = require("./61229.js");
var S = require("./622918.js");
var v = require("./610876.js");
var T = require("./336897.js");
require("./386310.js");
var M = require("./304954.js");
var A = r(require("./124928.js"));
var b = require("./669050.js");
var C = require("./394629.js");
var P = require("./385914.js");
class O extends u.SyncActionBase {
  constructor() {
    super(...arguments);
    this.version = 6;
    this.action = d.Actions.ClearChat;
  }
  getChatJidAndMessageKey(e) {
    const [, t] = e.indexArr;
    if (!t) {
      (0, S.throwInvalidActionIndex)();
    }
    return {
      chatJid: t,
      messageKey: null
    };
  }
  _getMessageIdsThatWereUnstarredInCurrentPatch(e, t) {
    const n = new Set();
    e.forEach(e => {
      if (e.actionName === d.Actions.Star && e.timestamp > t) {
        const t = (0, S.getMsgKeyFromStarActionIndex)(e.index);
        n.add(t.toString());
      }
    });
    return n;
  }
  validateSyncActionValue(e) {
    const t = e.clearChatAction;
    return (0, h.validateMessageRange)(t == null ? undefined : t.messageRange);
  }
  applyMutations(e, t) {
    var n = this;
    p.default.updatePrimaryAllowsAllMutationsFlag("other mutation");
    const {
      allSupportedSetMutations: r
    } = t;
    return Promise.all(e.map(function () {
      var e = (0, a.default)(function* (e) {
        try {
          if (e.operation === "set") {
            var t;
            const {
              indexParts: i,
              value: a
            } = e;
            const [, s, l, u] = i;
            if (!(s && l && u)) {
              (0, S.throwInvalidActionIndex)();
            }
            if (!A.default.isWid(s)) {
              (0, T.uploadCriticalEventMetric)(M.MD_SYNCD_CRITICAL_EVENT_CODE.ACTION_INVALID_INDEX_DATA);
              return {
                actionState: d.SyncActionState.Malformed
              };
            }
            if (!n.validateSyncActionValue(a)) {
              __LOG__(3)`[syncd][clear-chat]: malformed mutation`;
              return {
                actionState: d.SyncActionState.Malformed
              };
            }
            const c = (0, o.default)((t = a.clearChatAction) === null || t === undefined ? undefined : t.messageRange, "value.clearChatAction?.messageRange");
            const p = (0, b.createWid)(s);
            const f = p.toString();
            if (!(yield (0, E.getChatTable)().get(f, false))) {
              return {
                actionState: d.SyncActionState.Orphan,
                orphanModel: {
                  modelType: d.SyncModelType.Chat,
                  modelId: f
                }
              };
            }
            const _ = n._getMessageIdsThatWereUnstarredInCurrentPatch(r, e.timestamp);
            return n._applyMutation(p, c, l === "1", u === "0", _, a);
          }
          __LOG__(3)`[syncd][clear-chat]: REMOVE operation not supported`;
          return {
            actionState: d.SyncActionState.Unsupported
          };
        } catch (e) {
          return {
            actionState: d.SyncActionState.Failed
          };
        }
      });
      return function () {
        return e.apply(this, arguments);
      };
    }()));
  }
  clearChat(e, t, r, i) {
    return (0, a.default)(function* () {
      const {
        queryAndRemoveMessagesInMessageRange: a
      } = require("./422033.js");
      const o = yield a(e, t, {
        skipStarred: !r,
        skipMessages: i
      });
      if (o.length > 0) {
        (0, _.frontendFireAndForget)("deleteModelsForLastAddOnPreview", {
          messagesIds: o
        });
        const t = require("./628905.js").getJobManager;
        yield t().waitUntilPersisted(y.jobSerializers.deleteAddOns(e.toString(), o));
      }
      const s = g.ChatCollection.get(e);
      if (s) {
        s.deleteMessages(o);
      }
    })();
  }
  _applyMutation(e, t, n, r, i, o) {
    var s = this;
    return (0, a.default)(function* () {
      const a = (0, P.encodeProtobuf)(l.SyncActionValueSpec, o).readBuffer();
      yield (0, f.addActiveMessageRange)(e.toString(), (0, f.getActiveRangeAction)("clearChat", {
        deleteMedia: r,
        deleteStarred: n
      }), a);
      yield s.clearChat(e, t, n, i);
      return {
        actionState: d.SyncActionState.Success
      };
    })();
  }
  getClearChatMutation(e, t, n, r) {
    var i = this;
    return (0, a.default)(function* () {
      let a = yield (0, h.constructForwardMovingMessageRange)(t);
      const o = i._constructClearChatIndexArgs(t, n, r || false);
      const u = yield (0, v.getPendingMutationsRowsByIndex)(["index"], (0, c.buildIndex)(i.action, o));
      if (u.length) {
        var p;
        const e = u.reduce((e, t) => e.timestamp > t.timestamp ? e : t);
        const t = (p = (0, C.decodeProtobuf)(l.SyncActionValueSpec, e.binarySyncAction).clearChatAction) === null || p === undefined ? undefined : p.messageRange;
        if (t) {
          a = (0, h.mergeMessageRanges)(a, t);
          (0, m.logMaybeMillisecondTimestamp)(a.lastMessageTimestamp, "pendingMutationRange");
        }
      }
      const f = {
        clearChatAction: {
          messageRange: a
        }
      };
      return (0, c.buildPendingMutation)({
        collection: d.CollectionName.RegularHigh,
        indexArgs: o,
        value: f,
        version: i.version,
        operation: s.SyncdMutation$SyncdOperation.SET,
        timestamp: e,
        action: i.action
      });
    })();
  }
  _constructClearChatIndexArgs(e, t, n) {
    return [e.toString({
      legacy: true
    }), t ? "1" : "0", n ? "1" : "0"];
  }
  resolveConflicts(e, t) {
    var n = this;
    return (0, a.default)(function* () {
      const r = (0, C.decodeProtobuf)(l.SyncActionValueSpec, e.binarySyncAction);
      const s = (0, C.decodeProtobuf)(l.SyncActionDataSpec, t.binarySyncData).value;
      const u = e.timestamp;
      const c = t.timestamp;
      const p = (0, o.default)(r.clearChatAction, "pendingMutationValue.clearChatAction");
      const _ = (0, o.default)(s == null ? undefined : s.clearChatAction, "incomingMutationValue?.clearChatAction");
      switch ((0, h.compareMessageRanges)((0, o.default)(_.messageRange, "incomingClearChatAction.messageRange"), (0, o.default)(p.messageRange, "pendingClearChatAction.messageRange"))) {
        case h.MessageRangeEncloseType.RangeAEnclosesRangeB:
          return d.ConflictResolutionState.ApplyRemoteAndDropLocal;
        case h.MessageRangeEncloseType.RangeBEnclosesRangeA:
          return d.ConflictResolutionState.SkipRemote;
        case h.MessageRangeEncloseType.RangesAreEqual:
          if (u <= c) {
            return d.ConflictResolutionState.ApplyRemoteAndDropLocal;
          } else {
            return d.ConflictResolutionState.SkipRemote;
          }
        case h.MessageRangeEncloseType.RangesNotEnclosing:
          {
            const t = (0, h.mergeMessageRanges)((0, o.default)(_.messageRange, "incomingClearChatAction.messageRange"), (0, o.default)(p.messageRange, "pendingClearChatAction.messageRange"));
            const r = (0, P.encodeProtobuf)(l.SyncActionValueSpec, (0, i.default)((0, i.default)({}, s), {}, {
              clearChatAction: {
                messageRange: t
              }
            })).readBuffer();
            const u = (0, i.default)((0, i.default)({}, e), {}, {
              binarySyncAction: r
            });
            delete u.id;
            yield (0, h.lockForMessageRangeSync)([], [u], (0, a.default)(function* () {
              const i = JSON.parse(e.index);
              const a = (0, b.createWid)(i[1]);
              const o = i[2] === "1";
              const s = i[3] === "1";
              yield (0, f.addActiveMessageRange)(a.toString(), (0, f.getActiveRangeAction)("clearChat", {
                deleteStarred: o,
                deleteMedia: s
              }), r);
              return n.clearChat(a, t, o);
            }));
            return d.ConflictResolutionState.SkipRemoteAndDropLocal;
          }
      }
    })();
  }
}
const I = new O();
Object.freeze(I);
var R = I;
exports.default = R;