var r = require("./530066.js").default;
var i = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleHistorySyncChunk = ie;
var a = i(require("../vendor/81109.js"));
var o = i(require("../vendor/348926.js"));
var s = require("./138291.js");
var l = require("./904704.js");
var u = require("./44276.js");
var c = require("./229079.js");
var d = require("./632157.js");
var p = require("./317851.js");
var f = require("./34214.js");
var _ = require("./160048.js");
var g = require("./359987.js");
var m = require("./735618.js");
var h = require("./780549.js");
var y = require("./941555.js");
var E = require("./810718.js");
var S = require("./200679.js");
var v = require("./615263.js");
var T = require("./926552.js");
var M = require("./791357.js");
var A = require("./569852.js");
var b = require("./390753.js");
var C = require("./751972.js");
var P = i(require("./28790.js"));
var O = i(require("./565754.js"));
var I = i(require("./99398.js"));
var R = require("./510306.js");
var N = require("./588444.js");
var D = require("./324720.js");
var w = require("./190274.js");
var L = require("./923544.js");
var k = require("./533494.js");
var G = require("./60370.js");
var U = require("./756588.js");
var x = require("./61229.js");
var B = i(require("./74082.js"));
var F = require("./259377.js");
var j = require("./937001.js");
var Y = require("./139374.js");
var K = require("./366891.js");
var W = require("./142601.js");
var V = require("./987189.js");
var H = require("./487837.js");
var $ = require("./129417.js");
var z = require("./960523.js");
var q = require("./157942.js");
var J = require("./128378.js");
var Q = require("./599764.js");
var X = require("./658982.js");
var Z = require("./355933.js");
var ee = require("./814173.js");
var te = require("./669050.js");
var ne = require("./394629.js");
const re = 100;
function ie() {
  return ae.apply(this, arguments);
}
function ae() {
  return (ae = (0, o.default)(function* (e) {
    let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
    __LOG__(2, undefined, undefined, undefined, ["history-sync"])`[history sync] handleHistorySyncChunk started for ${(0, v.getHistorySyncLogDetailsString)(e)}`;
    if (e.syncType === G.HistorySync$HistorySyncType.INITIAL_BOOTSTRAP) {
      if ((yield (0, q.getInitialHistorySyncComplete)()) === true) {
        return void __LOG__(2, undefined, undefined, undefined, ["history-sync"])`[history sync] Skip duplicate initial sync chunk ${(0, v.getHistorySyncLogDetailsString)(e)}`;
      }
    }
    if (e.syncType === G.HistorySync$HistorySyncType.INITIAL_STATUS_V3) {
      try {
        const t = O.default.fromString(e.msgKey);
        (0, F.sendAggregateReceipts)(t.remote, F.RECEIPT_TYPE.HISTORY_SYNC_COMPLETION, undefined, new Map().set(t.remote, [t.id]));
      } catch (e) {
        __LOG__(3, undefined, undefined, undefined, ["history-sync"])`[history sync] history_sync_notification_handler: sending Status v3 receipt failed`;
      }
    }
    const i = e.syncType === G.HistorySync$HistorySyncType.INITIAL_BOOTSTRAP ? Q.MD_BOOTSTRAP_PAYLOAD_TYPE.CRITICAL : Q.MD_BOOTSTRAP_PAYLOAD_TYPE.NON_CRITICAL;
    const o = (0, E.getMetricHistorySyncPayloadType)(e.syncType);
    const g = yield K.MdSyncFieldStatsMeta.getMdSessionId();
    const x = yield (0, v.getHistorySyncProgress)(e);
    const ae = new C.MdBootstrapHistoryDataStartDownloadingWamEvent({
      mdBootstrapPayloadType: i,
      mdBootstrapPayloadSize: e.historySyncPayloadSize,
      mdBootstrapHistoryPayloadType: o,
      mdSessionId: g,
      historySyncStageProgress: x
    });
    const ue = new b.MdBootstrapHistoryDataDownloadedWamEvent({
      mdBootstrapPayloadType: i,
      mdBootstrapPayloadSize: e.historySyncPayloadSize,
      mdBootstrapHistoryPayloadType: o,
      mdSessionId: g,
      historySyncStageProgress: x
    });
    if (e.chunkOrder != null) {
      ae.historySyncChunkOrder = e.chunkOrder;
      ue.historySyncChunkOrder = e.chunkOrder;
      (0, q.setRecentSyncSingleChunkStatus)(e.syncType, J.HISTORY_SYNC_SINGLE_CHUNK_STATUS_TYPE.DOWNLOADING, e.chunkOrder);
    }
    const de = yield K.MdSyncFieldStatsMeta.getStorageEstimation();
    if (de.mdStorageQuotaBytes !== K.STORAGE_QUOTA_UNAVAILABLE) {
      ue.mdStorageQuotaUsedBytes = de.mdStorageQuotaUsedBytes;
      ue.mdStorageQuotaBytes = de.mdStorageQuotaBytes;
    }
    (0, v.commitHistoryStartDownloadingMetric)(ae, e.historySyncStepStartedTs, (0, d.unixTimeMs)());
    let pe = null;
    const fe = (0, v.maybeGetInlinePayload)(e);
    if (fe != null) {
      __LOG__(2, undefined, undefined, undefined, ["history-sync"])`[history sync] get inline payload in chunk, ${(0, v.getHistorySyncLogDetailsString)(e)}`;
      pe = fe;
    } else {
      try {
        __LOG__(2, undefined, undefined, undefined, ["history-sync"])`[history sync] start downloading chunk, ${(0, v.getHistorySyncLogDetailsString)(e)}`;
        pe = yield y.downloadManager.downloadAndMaybeDecrypt((0, a.default)({
          signal: new r().signal
        }, e.downloadOptions));
      } catch (n) {
        __LOG__(3)`[history sync] history sync download failed`;
        if (n instanceof M.HttpNetworkError) {
          if (e.syncType === G.HistorySync$HistorySyncType.INITIAL_BOOTSTRAP && t > 0) {
            yield I.default.waitIfOffline({
              signal: new r().signal
            });
            __LOG__(3, undefined, undefined, undefined, ["history-sync"])`[history sync] Initial sync download failed due to network error retry download`;
            return ie(e, t - 1);
          } else {
            return void (0, _.removeLocalFailureFromInFlightChunk)(e.msgKey);
          }
        }
        const i = O.default.fromString(e.msgKey);
        var _e;
        var ge;
        (0, v.commitHistoryDownloadedMetric)(ue, e.historySyncStepStartedTs, false, (0, d.unixTimeMs)());
        if (e.syncType === G.HistorySync$HistorySyncType.ON_DEMAND) {
          __LOG__(2)`[history sync][rdu] history sync on demand chunk fails to download.`;
          (0, R.handleHistorySyncOnDemandFailure)((_e = e.peerDataRequestChatId) !== null && _e !== undefined ? _e : "");
          (0, N.logHistorySyncOnDemandResponse)(ee.PEER_DATA_RESPONSE_APPLY_RESULT_TYPE.FAIL_TO_DOWNLOAD, (ge = e.peerDataRequestSessionId) !== null && ge !== undefined ? ge : "");
        }
        (0, B.default)(i.remote, i.id, e.downloadOptions.mediaKey);
        return void (yield (0, _.markChunkForReuploadPending)(e.msgKey));
      }
    }
    (0, q.setRecentSyncSingleChunkStatus)(e.syncType, J.HISTORY_SYNC_SINGLE_CHUNK_STATUS_TYPE.DOWNLOADED, e.chunkOrder);
    e.downloadOptions.mediaKey = "";
    ue.mdBootstrapStepResult = Z.MD_BOOTSTRAP_STEP_RESULT.SUCCESS;
    const me = new l.Binary(pe);
    const he = yield (0, u.inflate)(me.readByteArray());
    const ye = (0, ne.decodeProtobuf)(G.HistorySyncSpec, he);
    (0, q.setRecentSyncSingleChunkStatus)(e.syncType, J.HISTORY_SYNC_SINGLE_CHUNK_STATUS_TYPE.DECODED, e.chunkOrder);
    __LOG__(2)`[history sync] chunk downloaded, ${(0, v.getHistorySyncLogDetailsString)(e, undefined, ye.conversations.length)}`;
    const Ee = (0, d.unixTimeMs)();
    if (e.syncType === G.HistorySync$HistorySyncType.RECENT && e.chunkOrder != null) {
      (0, T.updateHistorySyncProgressModel)();
    }
    const Se = new A.MdBootstrapDataAppliedWamEvent({
      mdBootstrapPayloadType: i,
      mdBootstrapSource: X.MD_BOOTSTRAP_SOURCE.HISTORY,
      mdBootstrapHistoryPayloadType: o,
      mdSessionId: g,
      sentViaMms: fe == null,
      historySyncStageProgress: x
    });
    if (e.chunkOrder != null) {
      Se.historySyncChunkOrder = e.chunkOrder;
    }
    if (e.syncType === G.HistorySync$HistorySyncType.INITIAL_STATUS_V3 && ye.statusV3Messages && ye.statusV3Messages.length > 0) {
      yield (0, S.handleStatusV3Messages)(ye, e, ue, Se, Ee);
    } else if (e.syncType === G.HistorySync$HistorySyncType.NON_BLOCKING_DATA) {
      yield (0, S.handleNonBlockingData)(ye, e);
    } else if (e.syncType !== G.HistorySync$HistorySyncType.PUSH_NAME) {
      ye.conversations = ye.conversations.reduce((e, t) => {
        let n = null;
        try {
          n = (0, te.createWid)(t.id);
          if (n.isLid() && !(0, w.lidHistorySyncEnabled)()) {
            n = null;
          }
        } catch (e) {
          __LOG__(3, undefined, undefined, undefined, ["history-sync"])`[history sync] history_sync_notification_handler: invalid wid`;
        }
        if (n) {
          return e.concat(t);
        } else {
          return e;
        }
      }, []);
    }
    const ve = [];
    const Te = [];
    const Me = [];
    const Ae = (0, W.isHistorySyncNotificationHandlingV2Enabled)();
    if (e.syncType === G.HistorySync$HistorySyncType.INITIAL_BOOTSTRAP) {
      yield (0, S.handleInitialSyncMsgs)(ye, e, ve, Te, ue, Se, Ee, Me);
    } else if (e.syncType === G.HistorySync$HistorySyncType.PUSH_NAME) {
      yield (0, S.handlePushName)(ye, e, ue, Se, Ee);
    } else if (e.syncType !== G.HistorySync$HistorySyncType.INITIAL_STATUS_V3 && (__LOG__(2)`[history sync] start processing non initial status V3 messages`, yield new Promise(e => self.setTimeout(e, 0)), !oe(e, ye))) {
      const t = [];
      let r = [];
      let i = [];
      let a = [];
      let o = [];
      const l = new Set();
      const u = [];
      const d = (0, q.getHistoryInitialSyncBoundary)();
      let g = 0;
      let y = 0;
      let E = false;
      const M = (0, W.getRecentSyncMessageProcessingBreakIteration)();
      const A = yield (0, z.getAllCriticalDataSynced)();
      if (!(d != null && Object.keys(d).length !== 0)) {
        __LOG__(2)`[history sync] boundary data is null or empty`;
      }
      for (let _ = 0; _ < ye.conversations.length; _++) {
        let h = false;
        const S = ye.conversations[_];
        const T = d == null ? undefined : d[S.id];
        if (T == null) {
          __LOG__(2, undefined, undefined, undefined, ["history-sync"])`[history sync] Dropping chat ${"-"}$ due to null entry in initial sync boundary`;
          const e = (0, te.createWid)(S.id).toJid();
          if ((d == null ? undefined : d[e]) != null) {
            __LOG__(2, undefined, undefined, true)`[history sync] dropping chat ${"-"} due to null entry in initial sync boundary, but it exists as chatJid ${"-"}`;
            SEND_LOGS("history-sync-unexpected-conversation-drop");
          }
          h = true;
        }
        const b = (0, te.createWid)(S.id);
        if (b.isNewsletter() || b.isLid() && !(0, w.lidHistorySyncEnabled)()) {
          __LOG__(2)`[history sync] Dropping chat ${"-"}$ due to chat is not enabled for sync`;
          h = true;
        }
        const C = require("./351053.js").ChatCollection.get(b);
        const P = (C == null ? undefined : C.endOfHistoryTransferType) === m.ConversationEndOfHistoryTransferModelPropType.COMPLETE_AND_NO_MORE_MESSAGE_REMAIN_ON_PRIMARY;
        if (!C && T != null || C && C.endOfHistoryTransferType == null || P) {
          __LOG__(2, undefined, undefined, undefined, ["history-sync"])`[history sync] Dropping chat ${"-"} due to the chat in sync payload ${(0, v.getHistorySyncLogDetailsString)(e)} is already marked as complete locally`;
          h = true;
        }
        if (h) {
          if (e.syncType === G.HistorySync$HistorySyncType.ON_DEMAND) {
            E = true;
          }
        } else {
          for (let n = 0; n < S.messages.length; n++) {
            var be;
            var Ce;
            var Pe;
            var Oe;
            var Ie;
            g++;
            const d = S.messages[n];
            const _ = (0, c.maybeNumberOrThrowIfTooLarge)(d.msgOrderId);
            if (T != null && T !== -1 && _ != null && _ >= T) {
              continue;
            }
            if ((d == null || (be = d.message) === null || be === undefined || (Ce = be.message) === null || Ce === undefined || (Pe = Ce.protocolMessage) === null || Pe === undefined ? undefined : Pe.type) === k.Message$ProtocolMessage$Type.REQUEST_WELCOME_MESSAGE === true) {
              __LOG__(2)`[history sync] Dropping request welcome message`;
              continue;
            }
            l.add(S.id);
            const m = (0, v.parseWebMsgInfoAndReturnNullOnFailure)(b, e, d.message);
            if (m && m.id.remote.toString() !== S.id) {
              l.add(m.id.remote.toString());
            }
            if (n === 0 && m && C && C.msgs.length === 0) {
              u.push(m);
            }
            r = r.concat((0, U.parseWebMsgInfoReaction)(d.message, m));
            i = i.concat((0, L.parseWebMsgInfoPollUpdates)({
              webMsgInfo: d.message,
              parsedWebMsgInfo: m,
              isFromCag: (Oe = S.isDefaultSubgroup) !== null && Oe !== undefined && Oe
            }));
            if (!(0, p.isUnifiedPinAddonInfraEnabled)()) {
              a = a.concat((0, D.parseWebMsgInfoPinInChat)(d.message, m));
            }
            o = o.concat((0, f.parseHistorySyncMsg)({
              webMsgInfo: d.message,
              parsedWebMsgInfo: m,
              isFromCag: (Ie = S.isDefaultSubgroup) !== null && Ie !== undefined && Ie
            }));
            if (m) {
              t.push(m);
            }
            yield (0, s.asyncSleepAfterGivenLoopIteration)(y++, A ? M : re);
          }
        }
      }
      ue.mdBootstrapMessagesCount = g;
      ue.mdBootstrapChatsCount = ye.conversations.length;
      (0, v.commitHistoryDownloadedMetric)(ue, e.historySyncStepStartedTs, true, Ee);
      (0, q.setRecentSyncSingleChunkStatus)(e.syncType, J.HISTORY_SYNC_SINGLE_CHUNK_STATUS_TYPE.MESSAGE_PREPROCESSED, e.chunkOrder);
      if (t.length !== 0) {
        yield (0, S.handleProgressiveHistorySyncMsgs)(t, Array.from(l), r, i, a, o, u, e.syncType, e.chunkOrder);
      } else {
        __LOG__(2)`[history sync] no messages from history sync need to handle`;
      }
      yield (0, q.setLastHistorySyncedChunk)(e.syncType, e.chunkOrder, x);
      (0, T.updateHistorySyncProgressModel)();
      yield (0, _.updateCurrentlyProcessed)(e.msgKey, e.syncType, e.chunkOrder);
      const b = new Set();
      ye.conversations.forEach(e => {
        const t = (0, te.createWid)(e.id);
        if (t.isLid() && !(0, w.lidHistorySyncEnabled)()) {
          return;
        }
        b.add(t.toString());
        let n = null;
        if ((d == null ? undefined : d[e.id]) != null) {
          n = e.endOfHistoryTransferType;
        }
        if (n != null) {
          return le(t, n);
        } else {
          return undefined;
        }
      });
      se(e, ye, E);
      h.Cmd.onHistorySyncChunkProcessed(b);
      (0, v.commitHistoryDataAppliedMetric)(Se, e.historySyncStepStartedTs, true);
      (0, q.setRecentSyncSingleChunkStatus)(e.syncType, J.HISTORY_SYNC_SINGLE_CHUNK_STATUS_TYPE.APPLIED, e.chunkOrder);
      __LOG__(2)`[history sync] storing recent/full/on-demand chunk complete, ${(0, v.getHistorySyncLogDetailsString)(e, g, l.size)}`;
    }
    const Re = O.default.fromString(e.msgKey);
    const Ne = new Map();
    Ne.set(Re.remote, [Re.id]);
    if (e.syncType !== G.HistorySync$HistorySyncType.INITIAL_STATUS_V3) {
      (0, F.sendAggregateReceipts)(Re.remote, F.RECEIPT_TYPE.HISTORY_SYNC_COMPLETION, undefined, Ne);
    }
    if (Ae) {
      yield (0, V.createLidPnMappings)({
        mappings: Te,
        flushImmediately: true
      });
      yield (0, V.updateLidMetadata)({
        updates: ve
      });
      if ((0, $.usernameDisplayedEnabled)()) {
        yield (0, Y.setUsernamesJob)(Me);
      }
    } else {
      yield (0, H.createLidPnMappingsJob)(Te, true);
      yield (0, H.updateLidMetadataJob)(ve);
      yield (0, Y.setUsernamesJob)(Me);
    }
    yield (0, _.updateCurrentlyProcessed)(e.msgKey, e.syncType, e.chunkOrder);
    if (j.ServerProps.webMdMmsSyncDeletionRequest && e.downloadOptions.encFilehash != null) {
      P.default.deleteMdHistorySyncBlob({
        directPath: e.downloadOptions.directPath,
        encFilehash: e.downloadOptions.encFilehash,
        signal: new r().signal
      }).catch(() => {
        __LOG__(3)`MMS client delete error`;
      });
    }
    const De = ye.conversations.length === 1 ? ye.conversations[0].id : null;
    yield ce(e.syncType, ye.progress, De);
  })).apply(this, arguments);
}
function oe(e, t) {
  var n;
  var r;
  return e.syncType === G.HistorySync$HistorySyncType.ON_DEMAND && t.conversations.length !== 1 && (__LOG__(2)`[history sync][rdu] dropping history sync on demand response as its conversation length ${""} is not 1.`, (0, R.handleHistorySyncOnDemandFailure)((n = e.peerDataRequestChatId) !== null && n !== undefined ? n : ""), (0, N.logHistorySyncOnDemandResponse)(ee.PEER_DATA_RESPONSE_APPLY_RESULT_TYPE.INVALID_RESPONSE, (r = e.peerDataRequestSessionId) !== null && r !== undefined ? r : ""), true);
}
function se(e, t, n) {
  if (e.syncType === G.HistorySync$HistorySyncType.ON_DEMAND && t.conversations.length === 1) {
    var r;
    const i = t.conversations[0].id;
    if (n) {
      (0, R.handleHistorySyncOnDemandFailure)(i);
    } else {
      (0, R.handleHistorySyncOnDemandSuccess)(i);
    }
    (0, N.logHistorySyncOnDemandResponse)(n ? ee.PEER_DATA_RESPONSE_APPLY_RESULT_TYPE.OTHER_ERROR : ee.PEER_DATA_RESPONSE_APPLY_RESULT_TYPE.SUCCESS, (r = e.peerDataRequestSessionId) !== null && r !== undefined ? r : "");
  }
}
function le() {
  return ue.apply(this, arguments);
}
function ue() {
  return (ue = (0, o.default)(function* (e, t) {
    let n = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
    const r = (0, v.convertEndofHistoryTransferTypeFromProtoToModelPropType)(t);
    const i = {
      id: e,
      endOfHistoryTransferType: r
    };
    if (n) {
      i.t = 0;
    }
    yield (0, g.frontendSendAndReceive)("chatCollectionAdd", {
      things: [i],
      options: {
        merge: true
      }
    });
    yield (0, x.getChatTable)().merge(e.toString(), {
      endOfHistoryTransferType: r
    });
  })).apply(this, arguments);
}
function ce() {
  return de.apply(this, arguments);
}
function de() {
  return (de = (0, o.default)(function* (e, t, n) {
    const r = (0, W.isHistorySyncOnDemandEnabled)();
    if (e === G.HistorySync$HistorySyncType.INITIAL_BOOTSTRAP) {
      __LOG__(2, undefined, undefined, undefined, ["history-sync"])`[history sync] Initial bootstrap history sync complete`;
      yield (0, q.setInitialHistorySyncComplete)();
      yield (0, q.setHistorySyncStatus)({
        initialCompleted: true
      });
      h.Cmd.onInitialChatHistorySynced();
    } else if (e === G.HistorySync$HistorySyncType.RECENT && t === 100) {
      __LOG__(2, undefined, undefined, undefined, ["history-sync"])`[history sync] Recent history sync complete`;
      yield (0, q.setHistorySyncStatus)({
        recentCompleted: true
      });
      h.Cmd.onRecentChatHistorySynced();
    } else if (e === G.HistorySync$HistorySyncType.FULL && t === 100) {
      __LOG__(2, undefined, undefined, undefined, ["history-sync"])`[history sync] Full history sync complete`;
      if (!r) {
        __LOG__(2)`[history sync] set history initial sync boundary to empty`;
        (0, q.setHistoryInitialSyncBoundary)({});
      }
      yield (0, q.setHistorySyncStatus)({
        fullCompleted: true
      });
      h.Cmd.onFullChatHistorySynced();
    } else if (r && e === G.HistorySync$HistorySyncType.ON_DEMAND && t === 100) {
      __LOG__(2, undefined, undefined, undefined, ["history-sync"])`[history sync] On demand history sync complete for chat ${"-"}`;
      const e = "onDemandCompleted_" + (n != null ? n : "");
      yield (0, q.setHistorySyncStatus)({
        [e]: true
      });
    }
  })).apply(this, arguments);
}