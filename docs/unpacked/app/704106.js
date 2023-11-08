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
var p = require("./791381.js");
var f = require("./351053.js");
var _ = r(require("./846870.js"));
var g = require("./414240.js");
var m = require("./61229.js");
var h = require("./622918.js");
var y = require("./336897.js");
var E = require("./304954.js");
var S = r(require("./124928.js"));
var v = require("./669050.js");
var T = require("./394629.js");
var M = require("./385914.js");
function A(e, t) {
  switch (t) {
    case g.MessageRangeEncloseType.RangesAreEqual:
    case g.MessageRangeEncloseType.RangeAEnclosesRangeB:
      return {
        actionState: d.SyncActionState.Success
      };
    case g.MessageRangeEncloseType.RangeBEnclosesRangeA:
    case g.MessageRangeEncloseType.RangesNotEnclosing:
      return {
        actionState: d.SyncActionState.Orphan,
        orphanModel: {
          modelType: d.SyncModelType.Chat,
          modelId: e.toString()
        }
      };
  }
}
class b extends u.SyncActionBase {
  constructor() {
    super(...arguments);
    this.version = 3;
    this.action = d.Actions.MarkChatAsRead;
  }
  _setRead(e, t) {
    const r = f.ChatCollection.get(e);
    if (r) {
      const e = require("./397516.js");
      if (t) {
        e.markSeen(r);
      } else {
        e.markUnseen(r);
      }
    }
  }
  _isChatMarkedUnreadByUser(e) {
    return (0, a.default)(function* () {
      const t = yield (0, m.getChatTable)().get(e.toString(), false);
      return (t == null ? undefined : t.unreadCount) === _.default.MARKED_AS_UNREAD;
    })();
  }
  validateSyncActionValue(e) {
    const t = e.markChatAsReadAction;
    return (t == null ? undefined : t.read) != null && (0, g.validateMessageRange)(t == null ? undefined : t.messageRange);
  }
  applyMutations(e) {
    var t = this;
    return Promise.all(e.map(function () {
      var e = (0, a.default)(function* (e) {
        try {
          if (e.operation === "set") {
            var n;
            var r;
            const {
              indexParts: i,
              value: a
            } = e;
            const [, s] = i;
            if (!s) {
              (0, h.throwInvalidActionIndex)();
            }
            if (!t.validateSyncActionValue(a)) {
              __LOG__(3)`[syncd][mark-chat-as-read]: malformed mutation`;
              return {
                actionState: d.SyncActionState.Malformed
              };
            }
            if (!S.default.isWid(s)) {
              (0, y.uploadCriticalEventMetric)(E.MD_SYNCD_CRITICAL_EVENT_CODE.ACTION_INVALID_INDEX_DATA);
              return {
                actionState: d.SyncActionState.Malformed
              };
            }
            const l = (0, o.default)((n = a.markChatAsReadAction) === null || n === undefined ? undefined : n.read, "value.markChatAsReadAction?.read");
            const u = (0, o.default)((r = a.markChatAsReadAction) === null || r === undefined ? undefined : r.messageRange, "value.markChatAsReadAction?.messageRange");
            const c = (0, v.createWid)(s);
            const p = c.toString();
            if (yield (0, m.getChatTable)().get(p, false)) {
              return t._applyMutation(c, l, u, a);
            } else {
              return {
                actionState: d.SyncActionState.Orphan,
                orphanModel: {
                  modelType: d.SyncModelType.Chat,
                  modelId: p
                }
              };
            }
          }
          __LOG__(3)`[syncd][mark-chat-as-read]: operation not supported`;
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
  _applyMutation(e, t, n, r) {
    var i = this;
    return (0, a.default)(function* () {
      yield (0, p.removeActiveMessageRange)(e.toString(), (0, p.getActiveRangeAction)("markChatAsRead"));
      const a = yield (0, g.constructMessageRange)(e, false);
      const o = (0, g.compareMessageRanges)(a, n);
      const s = (0, M.encodeProtobuf)(l.SyncActionValueSpec, r).readBuffer();
      switch (o) {
        case g.MessageRangeEncloseType.RangesAreEqual:
        case g.MessageRangeEncloseType.RangeBEnclosesRangeA:
          yield (0, p.addActiveMessageRange)(e.toString(), (0, p.getActiveRangeAction)("markChatAsRead"), s);
          i._setRead(e, t);
          return Promise.resolve(A(e, o));
        case g.MessageRangeEncloseType.RangesNotEnclosing:
        case g.MessageRangeEncloseType.RangeAEnclosesRangeB:
          if (t && (yield i._isChatMarkedUnreadByUser(e))) {
            i._setRead(e, t);
          }
          return Promise.resolve(A(e, o));
      }
    })();
  }
  _constructMarkChatAsReadIndexArgs(e) {
    return [e.toString({
      legacy: true
    })];
  }
  getMarkChatAsReadMutation(e, t, n) {
    var r = this;
    return (0, a.default)(function* () {
      const i = {
        markChatAsReadAction: {
          read: t,
          messageRange: yield (0, g.constructMessageRange)(n, true)
        }
      };
      return (0, c.buildPendingMutation)({
        collection: d.CollectionName.RegularLow,
        indexArgs: r._constructMarkChatAsReadIndexArgs(n),
        value: i,
        version: r.version,
        operation: s.SyncdMutation$SyncdOperation.SET,
        timestamp: e,
        action: r.action
      });
    })();
  }
  resolveConflicts(e, t) {
    var n = this;
    return (0, a.default)(function* () {
      const r = (0, T.decodeProtobuf)(l.SyncActionValueSpec, e.binarySyncAction);
      const s = (0, T.decodeProtobuf)(l.SyncActionDataSpec, t.binarySyncData).value;
      const u = e.timestamp;
      const c = t.timestamp;
      const f = (0, o.default)(r.markChatAsReadAction, "pendingMutationValue.markChatAsReadAction");
      const _ = (0, o.default)(s == null ? undefined : s.markChatAsReadAction, "incomingMutationValue?.markChatAsReadAction");
      switch ((0, g.compareMessageRanges)((0, o.default)(_.messageRange, "incomingMarkChatAsReadAction.messageRange"), (0, o.default)(f.messageRange, "pendingMarkChatAsReadAction.messageRange"))) {
        case g.MessageRangeEncloseType.RangeAEnclosesRangeB:
          return d.ConflictResolutionState.ApplyRemoteAndDropLocal;
        case g.MessageRangeEncloseType.RangeBEnclosesRangeA:
          return d.ConflictResolutionState.SkipRemote;
        case g.MessageRangeEncloseType.RangesAreEqual:
          if (u <= c) {
            return d.ConflictResolutionState.ApplyRemoteAndDropLocal;
          } else {
            return d.ConflictResolutionState.SkipRemote;
          }
        case g.MessageRangeEncloseType.RangesNotEnclosing:
          {
            var m;
            var h;
            const t = u <= c ? (m = _.read) !== null && m !== undefined && m : (h = f.read) !== null && h !== undefined && h;
            const r = (0, g.mergeMessageRanges)((0, o.default)(_.messageRange, "incomingMarkChatAsReadAction.messageRange"), (0, o.default)(f.messageRange, "pendingMarkChatAsReadAction.messageRange"));
            const y = (0, M.encodeProtobuf)(l.SyncActionValueSpec, (0, i.default)((0, i.default)({}, s), {}, {
              markChatAsReadAction: {
                read: t,
                messageRange: r
              }
            })).readBuffer();
            const E = (0, i.default)((0, i.default)({}, e), {}, {
              binarySyncAction: y
            });
            delete E.id;
            yield (0, g.lockForMessageRangeSync)(["chat"], [E], (0, a.default)(function* () {
              const r = JSON.parse(e.index);
              const i = (0, v.createWid)(r[1]);
              yield (0, p.addActiveMessageRange)(i.toString(), (0, p.getActiveRangeAction)("markChatAsRead"), y);
              return n._setRead(i, t);
            }));
            return d.ConflictResolutionState.SkipRemoteAndDropLocal;
          }
      }
    })();
  }
}
const C = new b();
Object.freeze(C);
var P = C;
exports.default = P;