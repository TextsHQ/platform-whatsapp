var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storeInitialSyncMessages = function () {
  return R.apply(this, arguments);
};
exports.storeRecentAndFullHistSyncMessages = function () {
  return N.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = r(require("../vendor/402525.js"));
var o = require("./557063.js");
var s = require("./632157.js");
var l = r(require("./721698.js"));
var u = require("./35234.js");
var c = require("./144818.js");
var d = require("./583464.js");
var p = require("./659102.js");
var f = require("./890490.js");
var _ = require("./907539.js");
var g = require("./6007.js");
var m = require("./906360.js");
var h = require("./110567.js");
var y = require("./188690.js");
var E = require("./446303.js");
var S = require("./787742.js");
var v = require("./373070.js");
var T = require("./965767.js");
var M = require("./851698.js");
var A = require("./142601.js");
var b = r(require("./128882.js"));
var C = require("./157942.js");
var P = require("./128378.js");
var O = require("./669050.js");
const I = 1000000000;
function R() {
  return (R = (0, i.default)(function* (e) {
    yield p.DbEncKeyStore.waitForFinalDbMsgEncKey();
    let t = 0;
    const r = (0, A.isInitialSyncMessageStoringOptimizationEnabled)();
    (0, a.default)(e, e => {
      let {
        msgs: n
      } = e;
      return t += n.length;
    });
    const d = new Map();
    const g = new Map();
    __LOG__(2)`[history sync] start storing initial sync messages.`;
    if (r) {
      __LOG__(2)`[history sync] enable optimized initial sync messages storing`;
    }
    const S = yield (0, o.promiseReduce)(Object.keys(e), function () {
      var t = (0, i.default)(function* (t, n) {
        let i = t.nextRowId;
        let a = I - e[n].msgs.length;
        const {
          pendingUnreadIds: o,
          unreadMentions: s
        } = yield D(e[n].chatInfo.unreadCount || 0, e[n].msgs);
        if (s.length) {
          d.set(n, s);
        }
        const l = [];
        if (r) {
          for (let t = 0; t < e[n].msgs.length; t++) {
            const r = e[n].msgs[t];
            try {
              const e = yield (0, f.processAndEncryptSingleMsgRow)(r);
              i++;
              a++;
              r.isMdHistoryMsg = true;
              const t = (0, m.addMsgMetadataToMsgRow)({
                msg: e[0],
                chatId: (0, O.createWid)(n).toString(),
                hasLink: (0, E.hasHttpLink)(r),
                rowId: i,
                inChatMsgId: a,
                pendingReadReceipt: o.has(String(r.id))
              });
              l.push(t);
            } catch (e) {
              var u;
              var c;
              if (e instanceof f.DroppingMsgRowDueToLogout) {
                throw e;
              }
              __LOG__(3, undefined, undefined, undefined, ["message-store-optimized"])`storeInitialSyncMessages failed for msg: ${(u = r.id) === null || u === undefined ? undefined : u.id} from ${(c = r.id) === null || c === undefined ? undefined : c.remote}`;
              __LOG__(4, undefined, new Error(), undefined, ["message-store-optimized"])`storeInitialSyncMessages failed with error: ${e.name}, message: ${e.message}, stack: ${e.stack}`;
            }
          }
        } else {
          e[n].msgs.forEach(e => {
            try {
              i++;
              a++;
              e.isMdHistoryMsg = true;
              const t = (0, _.dbRowFromMessage)(e);
              const r = (0, m.addMsgMetadataToMsgRow)({
                msg: t,
                chatId: (0, O.createWid)(n).toString(),
                hasLink: (0, E.hasHttpLink)(e),
                rowId: i,
                inChatMsgId: a,
                pendingReadReceipt: o.has(String(e.id))
              });
              l.push(r);
            } catch (n) {
              var t;
              var r;
              if (n instanceof f.DroppingMsgRowDueToLogout) {
                throw n;
              }
              __LOG__(3, undefined, undefined, undefined, ["message-store"])`storeInitialSyncMessages failed for msg: ${(t = e.id) === null || t === undefined ? undefined : t.id} from ${(r = e.id) === null || r === undefined ? undefined : r.remote}`;
              __LOG__(4, undefined, new Error(), undefined, ["message-store"])`storeInitialSyncMessages failed with error: ${n.name}, message: ${n.message}, stack: ${n.stack}`;
            }
          });
        }
        return {
          nextRowId: i,
          messages: t.messages.concat(l)
        };
      });
      return function () {
        return t.apply(this, arguments);
      };
    }(), {
      nextRowId: I - t,
      messages: []
    });
    S.messages.forEach(e => {
      if (e.type === v.MSG_TYPE.GROUPS_V4_INVITE) {
        (0, c.persistGroupInviteV4Msg)(e.id.toString(), {
          id: e.id.toString(),
          from: e.from.toString(),
          to: e.to.toString(),
          groupId: e.inviteGrp,
          expiration: parseInt(e.inviteCodeExp, 10),
          expired: (0, s.unixTime)() >= parseInt(e.inviteCodeExp, 10)
        });
      }
    });
    if (d.size) {
      d.forEach((e, t) => {
        var r;
        var i;
        const a = require("./351053.js").ChatCollection.get((0, O.createWid)(t));
        const o = e.map(e => {
          let {
            id: t,
            timestamp: n
          } = e;
          return new b.default({
            id: t,
            timestamp: n
          });
        });
        const s = a == null || (r = a.groupMetadata) === null || r === undefined ? undefined : r.unreadMentionMetadata;
        const l = (i = s == null ? undefined : s.pendingUnreadMentionCount) !== null && i !== undefined ? i : 0;
        if (s == null ? undefined : s.pendingUnreadMentionCount) {
          s.pendingUnreadMentionCount = Math.max(l - o.length, 0);
          g.set(t, s.pendingUnreadMentionCount);
        }
        if (!(s == null)) {
          s.addUnreadMentions(o, y.UnreadMessageType.HISTORYC_SYNC_CHUNK);
        }
      });
      (0, u.addUnreadMentionChat)(d, g);
    }
    return (r ? (0, M.getMessageTable)().bulkCreateWith_ALREADY_ENCRYPTED_RECORDS_ONLY(S.messages) : (0, M.getMessageTable)().bulkCreate(S.messages)).catch(e => {
      __LOG__(3)`[history sync] Error storing MD initial sync messages with error ${e}, with optimization: ${r}`;
      if (e instanceof l.default.BulkError || e instanceof l.default.ConstraintError) {
        if (r) {
          __LOG__(2, undefined, undefined, undefined, ["history-sync-initial-sync-optimized"])`[history sync] Retrying initial sync bulk add on error`;
        } else {
          __LOG__(2, undefined, undefined, undefined, ["history-sync"])`[history sync] Retrying initial sync bulk add on error`;
        }
        return (0, M.getMessageTable)().bulkCreateOrMerge(S.messages);
      }
      throw e;
    }).then(() => {
      l.default.ignoreTransaction(() => {
        (0, T.getFtsIndexingQueueTable)().bulkCreateOrReplace(S.messages.map(e => ({
          id: String(e.rowId)
        }))).then(() => {
          h.ftsClient.index().catch(() => {});
        });
      });
    }).catch(e => {
      __LOG__(3)`[history sync] Error storing MD initial sync messages with error ${e} after retry`;
      S.messages.map(e => e.id.toString());
    });
  })).apply(this, arguments);
}
function N() {
  return (N = (0, i.default)(function* (e, t) {
    let r = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
    let i = arguments.length > 3 && arguments[3] !== undefined && arguments[3];
    let a = arguments.length > 4 ? arguments[4] : undefined;
    let o = arguments.length > 5 ? arguments[5] : undefined;
    let l = e;
    const p = require("./351053.js").ChatCollection;
    const _ = new Map();
    const m = new Map();
    try {
      l = yield (0, d.applyOrphanRevokes)(e);
    } catch (e) {
      __LOG__(4, undefined, new Error(), undefined, ["history-sync"])`applyOrphanRevokes failed with error ${e}`;
    }
    l.forEach(e => {
      if (e.type === v.MSG_TYPE.GROUPS_V4_INVITE) {
        (0, c.persistGroupInviteV4Msg)(e.id.toString(), {
          id: e.id.toString(),
          from: e.from.toString(),
          to: e.to.toString(),
          groupId: e.inviteGrp,
          expiration: parseInt(e.inviteCodeExp, 10),
          expired: (0, s.unixTime)() >= parseInt(e.inviteCodeExp, 10)
        });
      }
      if ((0, S.getIsImportantMessage)(e)) {
        const a = e.id.remote.toString();
        let o = 0;
        if (m.has(a)) {
          var t;
          o = (t = m.get(a)) !== null && t !== undefined ? t : 0;
        } else {
          var n;
          var r;
          const e = p.get(a);
          o = (n = e == null || (r = e.groupMetadata) === null || r === undefined ? undefined : r.unreadMentionMetadata.pendingUnreadMentionCount) !== null && n !== undefined ? n : 0;
          m.set(a, o);
        }
        if (o > 0) {
          m.set(a, o - 1);
          const t = {
            id: e.id.toString(),
            timestamp: e.t
          };
          var i;
          if (_.has(a)) {
            if (!((i = _.get(a)) === null || i === undefined)) {
              i.push(t);
            }
          } else {
            _.set(a, [t]);
          }
        }
      }
    });
    const h = yield (0, f.encryptMultipleDBMsgs)(l, r);
    (0, C.setRecentSyncSingleChunkStatus)(a, P.HISTORY_SYNC_SINGLE_CHUNK_STATUS_TYPE.ENCRYPTED, o);
    return (0, g.storeEncryptedDBMessages)(h, t, i).then(() => {
      if (_.size > 0) {
        _.forEach((e, t) => {
          var n;
          var r;
          const i = p.get(t);
          const a = (n = m.get(t)) !== null && n !== undefined ? n : 0;
          const o = i == null || (r = i.groupMetadata) === null || r === undefined ? undefined : r.unreadMentionMetadata;
          if ((o == null ? undefined : o.pendingUnreadMentionCount) === 0 || (i == null ? undefined : i.hasChatBeenOpened)) {
            _.delete(t);
          } else if (o && o.pendingUnreadMentionCount > 0) {
            o.pendingUnreadMentionCount = a;
            const t = e.map(e => new b.default({
              id: e.id.toString(),
              timestamp: e.timestamp
            }));
            o.addUnreadMentions(t, y.UnreadMessageType.HISTORYC_SYNC_CHUNK);
          }
        });
        if (_.size > 0) {
          (0, u.addUnreadMentionChat)(_, m);
        }
      }
    }).catch(() => {
      __LOG__(3)`[history sync] Error storing MD recent or full sync messages`;
    });
  })).apply(this, arguments);
}
function D() {
  return w.apply(this, arguments);
}
function w() {
  return (w = (0, i.default)(function* (e, t) {
    let n = e;
    const r = new Set();
    const i = [];
    for (let e = t.length - 1; e >= 0 && !(n <= 0); e--) {
      const a = t[e];
      if ((yield (0, m.isPendingUnreadReceipt)(a.id, a)) && (n--, r.add(String(a.id)), (0, S.getIsImportantMessage)(a))) {
        const e = {
          id: String(a.id),
          timestamp: a.t
        };
        i.push(e);
      }
    }
    return {
      pendingUnreadIds: r,
      unreadMentions: i
    };
  })).apply(this, arguments);
}