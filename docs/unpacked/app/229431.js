var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./784153.js");
var s = r(require("./670983.js"));
var l = require("./527796.js");
var u = require("./24756.js");
var c = require("./122393.js");
var d = r(require("./517515.js"));
var p = require("./791381.js");
var f = require("./359987.js");
var _ = require("./351053.js");
var g = require("./125409.js");
var m = require("./137460.js");
var h = require("./422033.js");
require("./430461.js");
var y = require("./414240.js");
var E = require("./510306.js");
var S = require("./323829.js");
var v = require("./61229.js");
var T = require("./622918.js");
var M = require("./610876.js");
var A = require("./336897.js");
require("./386310.js");
var b = require("./304954.js");
var C = r(require("./124928.js"));
var P = require("./669050.js");
var O = require("./574819.js");
var I = require("./394629.js");
var R = require("./385914.js");
class N extends o.DeleteChatSyncBase {
  validateSyncActionValue(e) {
    const t = e.deleteChatAction;
    return (0, y.validateMessageRange)(t == null ? undefined : t.messageRange);
  }
  applyMutations(e) {
    var t = this;
    d.default.updatePrimaryAllowsAllMutationsFlag("other mutation");
    return Promise.all(e.map(function () {
      var e = (0, a.default)(function* (e) {
        try {
          if (e.operation === "set") {
            var n;
            const {
              indexParts: r,
              value: i
            } = e;
            const [, a, o] = r;
            if (!(a && o)) {
              (0, T.throwInvalidActionIndex)();
            }
            if (!C.default.isWid(a)) {
              (0, A.uploadCriticalEventMetric)(b.MD_SYNCD_CRITICAL_EVENT_CODE.ACTION_INVALID_INDEX_DATA);
              return {
                actionState: c.SyncActionState.Malformed
              };
            }
            if (!t.validateSyncActionValue(i)) {
              __LOG__(3)`[syncd][delete-chat]: malformed mutation`;
              return {
                actionState: c.SyncActionState.Malformed
              };
            }
            const l = (0, s.default)((n = i.deleteChatAction) === null || n === undefined ? undefined : n.messageRange, "value.deleteChatAction?.messageRange");
            const u = (0, P.createWid)(a);
            const d = u.toString();
            if (yield (0, v.getChatTable)().get(d, false)) {
              return t._applyMutation(u, l, o === "0", i);
            } else {
              return {
                actionState: c.SyncActionState.Orphan,
                orphanModel: {
                  modelType: c.SyncModelType.Chat,
                  modelId: d
                }
              };
            }
          }
          __LOG__(3)`[syncd][delete-chat]: REMOVE operation not supported`;
          return {
            actionState: c.SyncActionState.Unsupported
          };
        } catch (e) {
          return {
            actionState: c.SyncActionState.Failed
          };
        }
      });
      return function () {
        return e.apply(this, arguments);
      };
    }()));
  }
  deleteChat(e, t) {
    return (0, a.default)(function* () {
      const r = _.ChatCollection.get(e);
      if (t) {
        const i = yield (0, h.queryAndRemoveMessagesInMessageRange)(e, t, {
          forceDeleteAllMessages: true
        });
        if (i.length > 0) {
          (0, f.frontendFireAndForget)("deleteModelsForLastAddOnPreview", {
            messagesIds: i
          });
          const t = require("./628905.js").getJobManager;
          yield t().waitUntilPersisted(S.jobSerializers.deleteAddOns(e.toString(), i));
        }
        if (r) {
          r.deleteMessages(i);
        }
      } else {
        yield (0, g.deleteFromStorage)(e);
        if (r) {
          r.delete();
        }
      }
      (0, E.deleteChatFromInitialSyncBoundary)(e);
    })();
  }
  _applyMutation(e, t, n, r) {
    var i = this;
    return (0, a.default)(function* () {
      const a = (0, R.encodeProtobuf)(l.SyncActionValueSpec, r).readBuffer();
      yield (0, p.addActiveMessageRange)(e.toString(), (0, p.getActiveRangeAction)("deleteChat", {
        deleteMedia: n
      }), a);
      const o = yield (0, y.constructMessageRange)(e, false);
      switch ((0, y.compareMessageRanges)(o, t)) {
        case y.MessageRangeEncloseType.RangeAEnclosesRangeB:
        case y.MessageRangeEncloseType.RangesNotEnclosing:
          yield i.deleteChat(e, t);
          break;
        default:
          yield i.deleteChat(e);
      }
      return {
        actionState: c.SyncActionState.Success
      };
    })();
  }
  getDeleteChatMutation(e, t, n) {
    var r = this;
    return (0, a.default)(function* () {
      const i = (0, O.widToChatJid)(t);
      let a = yield (0, y.constructForwardMovingMessageRange)(t);
      const o = (0, u.buildIndex)(r.action, r.buildDeleteChatIndexArgs(i, n || false));
      const s = yield (0, M.getPendingMutationsRowsByIndex)(["index"], o);
      if (s.length) {
        var c;
        const e = s.reduce((e, t) => e.timestamp > t.timestamp ? e : t);
        const t = (c = (0, I.decodeProtobuf)(l.SyncActionValueSpec, e.binarySyncAction).deleteChatAction) === null || c === undefined ? undefined : c.messageRange;
        if (t) {
          a = (0, y.mergeMessageRanges)(a, t);
          (0, m.logMaybeMillisecondTimestamp)(a.lastMessageTimestamp, "pendingMutationRange");
        }
      }
      return r.buildDeleteChatMutation({
        timestamp: e,
        chatId: i,
        mergedRange: a,
        deleteMediaFiles: n || false
      });
    })();
  }
  resolveConflicts(e, t) {
    var n = this;
    return (0, a.default)(function* () {
      const r = (0, I.decodeProtobuf)(l.SyncActionValueSpec, e.binarySyncAction);
      const o = (0, I.decodeProtobuf)(l.SyncActionDataSpec, t.binarySyncData).value;
      const u = e.timestamp;
      const d = t.timestamp;
      const f = (0, s.default)(r.deleteChatAction, "pendingMutationValue.deleteChatAction");
      const _ = (0, s.default)(o == null ? undefined : o.deleteChatAction, "incomingMutationValue?.deleteChatAction");
      switch ((0, y.compareMessageRanges)((0, s.default)(_.messageRange, "incomingDeleteChatAction.messageRange"), (0, s.default)(f.messageRange, "pendingDeleteChatAction.messageRange"))) {
        case y.MessageRangeEncloseType.RangeAEnclosesRangeB:
          return c.ConflictResolutionState.ApplyRemoteAndDropLocal;
        case y.MessageRangeEncloseType.RangeBEnclosesRangeA:
          return c.ConflictResolutionState.SkipRemote;
        case y.MessageRangeEncloseType.RangesAreEqual:
          if (u <= d) {
            return c.ConflictResolutionState.ApplyRemoteAndDropLocal;
          } else {
            return c.ConflictResolutionState.SkipRemote;
          }
        case y.MessageRangeEncloseType.RangesNotEnclosing:
          {
            const t = (0, y.mergeMessageRanges)((0, s.default)(_.messageRange, "incomingDeleteChatAction.messageRange"), (0, s.default)(f.messageRange, "pendingDeleteChatAction.messageRange"));
            const r = (0, R.encodeProtobuf)(l.SyncActionValueSpec, (0, i.default)((0, i.default)({}, o), {}, {
              deleteChatAction: {
                messageRange: t
              }
            })).readBuffer();
            const u = (0, i.default)((0, i.default)({}, e), {}, {
              binarySyncAction: r
            });
            delete u.id;
            yield (0, y.lockForMessageRangeSync)([], [u], (0, a.default)(function* () {
              const i = JSON.parse(e.index);
              const a = (0, P.createWid)(i[1]);
              yield (0, p.addActiveMessageRange)(a.toString(), (0, p.getActiveRangeAction)("deleteChat", {
                deleteMedia: i[2] === "1"
              }), r);
              return n.deleteChat(a, t);
            }));
            return c.ConflictResolutionState.SkipRemoteAndDropLocal;
          }
      }
    })();
  }
}
const D = new N();
Object.freeze(D);
var w = D;
exports.default = w;