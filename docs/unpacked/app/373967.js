var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./422747.js");
var o = r(require("./670983.js"));
var s = require("./527796.js");
var l = require("./122393.js");
var u = require("./632157.js");
var c = require("./359987.js");
var d = require("./743643.js");
var p = require("./163755.js");
var f = require("./420213.js");
var _ = require("./61113.js");
var g = require("./787742.js");
var m = r(require("./565754.js"));
var h = require("./323829.js");
var y = require("./851698.js");
var E = require("./622918.js");
var S = require("./336897.js");
var v = require("./304954.js");
var T = r(require("./124928.js"));
var M = require("./574819.js");
var A = require("./394629.js");
class b extends a.DeleteMessageForMeSyncBase {
  applyMutations(e) {
    return (0, i.default)(function* () {
      const t = [];
      const r = new Map();
      yield (0, y.getMessageTable)().bulkGet(e.map(e => {
        var t;
        const [, n, r, i, a] = e.indexParts;
        if (n && r && i && a && T.default.isWid(n)) {
          if ((t = (0, E.syncKeyToMsgKey)(n, r, i, a)) === null || t === undefined) {
            return undefined;
          } else {
            return t.toString();
          }
        } else {
          return null;
        }
      }).filter(Boolean)).then(e => e.forEach(e => {
        if (e) {
          r.set(e.id, e);
        }
      }));
      const a = yield Promise.all(e.map(function () {
        var e = (0, i.default)(function* (e) {
          try {
            if (e.operation === "set") {
              const [, n, i, a, o] = e.indexParts;
              if (!(n && i && a && o)) {
                (0, E.throwInvalidActionIndex)();
              }
              const s = (0, E.syncKeyToMsgKey)(n, i, a, o);
              if (!s) {
                (0, S.uploadCriticalEventMetric)(v.MD_SYNCD_CRITICAL_EVENT_CODE.ACTION_INVALID_INDEX_DATA);
                return {
                  actionState: l.SyncActionState.Malformed
                };
              }
              const u = r.get(s.toString());
              if (!u) {
                return {
                  actionState: l.SyncActionState.Orphan,
                  orphanModel: {
                    modelId: s.toString(),
                    modelType: l.SyncModelType.Msg
                  }
                };
              }
              t.push(u.id);
              const c = _.MsgCollection.get(s);
              if (c) {
                if ((0, p.getChat)(c).msgs.length === 1) {
                  yield (0, d.loadEarlierMsgs)((0, p.getChat)(c));
                }
                c.delete();
              } else {
                __LOG__(3)`delete_message_for_me_sync: msg ${s} found in storage but not in collection`;
              }
              return {
                actionState: l.SyncActionState.Success
              };
            }
            __LOG__(3)`delete_message_for_me_sync: operation not supported`;
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
      if (t.length > 0) {
        yield (0, f.removeMessagesFromHistory)(t);
        const e = new Set();
        t.forEach(t => e.add(m.default.fromString(t).remote.toString()));
        const r = Array.from(e.values()).join(",").toString();
        (0, c.frontendFireAndForget)("deleteModelsForLastAddOnPreview", {
          messagesIds: t
        });
        const i = require("./628905.js").getJobManager;
        yield i().waitUntilPersisted(h.jobSerializers.deleteAddOns(r, t));
      }
      return a;
    })();
  }
  resolveConflicts(e, t) {
    var n;
    var r;
    const i = (0, A.decodeProtobuf)(s.SyncActionValueSpec, e.binarySyncAction);
    const a = (0, A.decodeProtobuf)(s.SyncActionDataSpec, t.binarySyncData).value;
    const u = (0, o.default)((n = i.deleteMessageForMeAction) === null || n === undefined ? undefined : n.deleteMedia, "pendingMutationValue.deleteMessageForMeAction?.deleteMedia");
    if (!(0, o.default)(a == null || (r = a.deleteMessageForMeAction) === null || r === undefined ? undefined : r.deleteMedia, "incomingMutationValue?.deleteMessageForMeAction?.deleteMedia") && u) {
      return Promise.resolve(l.ConflictResolutionState.SkipRemote);
    } else {
      return Promise.resolve(l.ConflictResolutionState.SkipRemoteAndDropLocal);
    }
  }
  getDeleteForMeMutations(e, t) {
    const n = (0, u.unixTimeMs)();
    return e.map(e => this.buildDeleteForMeMutation({
      timestamp: n,
      deleteMedia: t,
      messageTimestamp: e.t,
      remoteJid: (0, M.widToChatJid)(e.id.remote),
      id: e.id.id,
      fromMe: e.id.fromMe,
      participant: (0, g.getIsGroupMsg)(e) && !e.id.fromMe ? (0, M.widToUserJid)((0, g.getSender)(e)) : null
    }));
  }
}
const C = new b();
Object.freeze(C);
var P = C;
exports.default = P;