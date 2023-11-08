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
var f = require("./811670.js");
var _ = r(require("./97359.js"));
var g = require("./414240.js");
var m = require("./97858.js");
var h = require("./61229.js");
var y = r(require("./634152.js"));
var E = require("./622918.js");
var S = require("./336897.js");
var v = require("./304954.js");
var T = r(require("./124928.js"));
var M = require("./669050.js");
var A = require("./394629.js");
var b = require("./385914.js");
function C(e, t) {
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
class P extends u.SyncActionBase {
  constructor() {
    super(...arguments);
    this.version = 3;
    this.action = d.Actions.Archive;
  }
  getChatJidAndMessageKey(e) {
    const [, t] = e.indexArr;
    if (!t) {
      (0, E.throwInvalidActionIndex)();
    }
    return {
      chatJid: t,
      messageKey: null
    };
  }
  validateSyncActionValue(e) {
    const t = e.archiveChatAction;
    return (t == null ? undefined : t.archived) != null && (0, g.validateMessageRange)(t == null ? undefined : t.messageRange);
  }
  applyMutations(e) {
    var t = this;
    return (0, a.default)(function* () {
      const n = new Map();
      yield (0, h.getChatTable)().bulkGet(e.map(e => {
        const {
          indexParts: t
        } = e;
        const [, n] = t;
        if (n && T.default.isWid(n)) {
          return (0, M.createWid)(n).toString();
        } else {
          return null;
        }
      }).filter(Boolean)).then(e => e.forEach(e => {
        if (e) {
          n.set(e.id, e);
        }
      }));
      const r = [];
      const i = yield Promise.all(e.map(function () {
        var e = (0, a.default)(function* (e) {
          try {
            if (e.operation === "set") {
              const {
                indexParts: i,
                value: a
              } = e;
              const [, s] = i;
              if (!s) {
                (0, E.throwInvalidActionIndex)();
              }
              if (!T.default.isWid(s)) {
                (0, S.uploadCriticalEventMetric)(v.MD_SYNCD_CRITICAL_EVENT_CODE.ACTION_INVALID_INDEX_DATA);
                return {
                  actionState: d.SyncActionState.Malformed
                };
              }
              const l = a.archiveChatAction;
              if (!t.validateSyncActionValue(a)) {
                __LOG__(3)`[syncd][archive-chat]: malformed mutation`;
                return {
                  actionState: d.SyncActionState.Malformed
                };
              }
              const u = (0, o.default)(l == null ? undefined : l.archived, "archiveChatAction?.archived");
              const c = (0, o.default)(l == null ? undefined : l.messageRange, "archiveChatAction?.messageRange");
              const p = (0, M.createWid)(s);
              if (!n.has(p.toString())) {
                return {
                  actionState: d.SyncActionState.Orphan,
                  orphanModel: {
                    modelType: d.SyncModelType.Chat,
                    modelId: p.toString()
                  }
                };
              }
              const f = yield t._applyMutation(p, u, c, a);
              if (f.updates) {
                r.push(f.updates);
              }
              return f.syncApplyActionResult;
            }
            __LOG__(3)`[syncd][archive-chat]: REMOVE operation not supported`;
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
      if (r.length > 0) {
        yield (0, f.setArchive)(r);
      }
      return i;
    })();
  }
  _applyMutation(e, t, n, r) {
    return (0, a.default)(function* () {
      yield (0, p.removeActiveMessageRange)(e.toString(), (0, p.getActiveRangeAction)("archive"));
      if (!t) {
        return {
          updates: {
            id: e.toString(),
            archive: t
          },
          syncApplyActionResult: {
            actionState: d.SyncActionState.Success
          }
        };
      }
      const i = yield (0, g.constructMessageRange)(e, false);
      const a = (0, g.compareMessageRanges)(i, n);
      const o = (0, b.encodeProtobuf)(l.SyncActionValueSpec, r).readBuffer();
      const s = () => (0, p.addActiveMessageRange)(e.toString(), (0, p.getActiveRangeAction)("archive"), o);
      const u = (0, m.archiveV2Supported)() && y.default.showArchiveV2;
      switch (a) {
        case g.MessageRangeEncloseType.RangesAreEqual:
        case g.MessageRangeEncloseType.RangeBEnclosesRangeA:
          yield s();
          return {
            updates: {
              id: e.toString(),
              archive: t
            },
            syncApplyActionResult: C(e, a)
          };
        case g.MessageRangeEncloseType.RangeAEnclosesRangeB:
        case g.MessageRangeEncloseType.RangesNotEnclosing:
          if (u) {
            return {
              updates: {
                id: e.toString(),
                archive: t
              },
              syncApplyActionResult: C(e, a)
            };
          } else {
            yield s();
            return {
              updates: undefined,
              syncApplyActionResult: C(e, a)
            };
          }
      }
    })();
  }
  _constructArchiveChatIndexArgs(e) {
    return [e.toString({
      legacy: true
    })];
  }
  getArchiveChatMutation(e, t, n) {
    var r = this;
    return (0, a.default)(function* () {
      const i = {
        archiveChatAction: {
          archived: t,
          messageRange: yield (0, g.constructMessageRange)(n, true)
        }
      };
      return (0, c.buildPendingMutation)({
        collection: d.CollectionName.RegularLow,
        indexArgs: r._constructArchiveChatIndexArgs(n),
        value: i,
        version: r.version,
        operation: s.SyncdMutation$SyncdOperation.SET,
        timestamp: e,
        action: r.action
      });
    })();
  }
  getMutationsForArchive(e, t, r) {
    var i = this;
    return (0, a.default)(function* () {
      const a = [yield i.getArchiveChatMutation(e, t, r)];
      if (t && (0, m.pinChatSyncEnabled)()) {
        const t = (0, _.default)(require("./208592.js"));
        a.push(t.getPinMutation(e, false, r));
      }
      return a;
    })();
  }
  resolveConflicts(e, t) {
    return (0, a.default)(function* () {
      const n = (0, A.decodeProtobuf)(l.SyncActionValueSpec, e.binarySyncAction);
      const r = (0, A.decodeProtobuf)(l.SyncActionDataSpec, t.binarySyncData).value;
      const s = e.timestamp;
      const u = t.timestamp;
      const c = (0, o.default)(n.archiveChatAction, "pendingMutationValue.archiveChatAction");
      const _ = (0, o.default)(r == null ? undefined : r.archiveChatAction, "incomingMutationValue?.archiveChatAction");
      switch ((0, g.compareMessageRanges)((0, o.default)(_.messageRange, "incomingArchiveChatAction.messageRange"), (0, o.default)(c.messageRange, "pendingArchiveChatAction.messageRange"))) {
        case g.MessageRangeEncloseType.RangeAEnclosesRangeB:
          return d.ConflictResolutionState.ApplyRemoteAndDropLocal;
        case g.MessageRangeEncloseType.RangeBEnclosesRangeA:
          return d.ConflictResolutionState.SkipRemote;
        case g.MessageRangeEncloseType.RangesAreEqual:
          if (s <= u) {
            return d.ConflictResolutionState.ApplyRemoteAndDropLocal;
          } else {
            return d.ConflictResolutionState.SkipRemote;
          }
        case g.MessageRangeEncloseType.RangesNotEnclosing:
          {
            var m;
            var h;
            const t = s <= u ? (m = _.archived) !== null && m !== undefined && m : (h = c.archived) !== null && h !== undefined && h;
            const n = (0, g.mergeMessageRanges)((0, o.default)(_.messageRange, "incomingArchiveChatAction.messageRange"), (0, o.default)(c.messageRange, "pendingArchiveChatAction.messageRange"));
            const y = (0, b.encodeProtobuf)(l.SyncActionValueSpec, (0, i.default)((0, i.default)({}, r), {}, {
              archiveChatAction: {
                archived: t,
                messageRange: n
              }
            })).readBuffer();
            const E = (0, i.default)((0, i.default)({}, e), {}, {
              binarySyncAction: y
            });
            delete E.id;
            yield (0, g.lockForMessageRangeSync)(["chat"], [E], (0, a.default)(function* () {
              const n = JSON.parse(e.index);
              const r = (0, M.createWid)(n[1]);
              yield (0, p.addActiveMessageRange)(r.toString(), (0, p.getActiveRangeAction)("archive"), y);
              return (0, f.setArchive)([{
                id: r.toString(),
                archive: t
              }]);
            }));
            return d.ConflictResolutionState.SkipRemoteAndDropLocal;
          }
      }
    })();
  }
}
const O = new P();
Object.freeze(O);
var I = O;
exports.default = I;