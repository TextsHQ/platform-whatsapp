var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/348926.js"));
var a = r(require("../vendor/81109.js"));
var o = require("./510530.js");
var s = require("./775593.js");
var l = require("./8304.js");
var u = require("./280015.js");
var c = require("./122393.js");
var d = require("./632157.js");
var p = require("./287461.js");
var f = require("./696155.js");
var _ = require("./160048.js");
var g = require("./612462.js");
var m = r(require("./542817.js"));
var h = require("./780549.js");
var y = require("./659102.js");
var E = require("./996578.js");
var S = require("./615263.js");
var v = require("./827747.js");
var T = require("./376651.js");
var M = require("./332108.js");
var A = require("./569852.js");
var b = r(require("./524173.js"));
var C = require("./180019.js");
var P = require("./899137.js");
var O = require("./60370.js");
var I = require("./274054.js");
var R = require("./114807.js");
var N = require("./314189.js");
var D = require("./978538.js");
var w = require("./610876.js");
var L = require("./734205.js");
var k = require("./510607.js");
var G = require("./366891.js");
var U = require("./142601.js");
var x = require("./960523.js");
var B = require("./157942.js");
var F = require("./599764.js");
var j = require("./658982.js");
var Y = require("./561913.js");
var K = require("./965259.js");
const W = require("../vendor/76672.js").Mirrored(["NotStarted", "InProcess", "Completed"]);
const V = {
  initialChatHistory: false,
  readReceipts: false,
  syncdCritical: false
};
const H = {
  initialChatHistoryTotalMsg: -1,
  initialChatHistoryTotalChats: -1
};
const $ = new class {
  constructor() {
    this._criticalState = {};
    this._debugOnlyState = H;
    this._progressiveHistorySyncRemainingIteration = 25;
    this._progressiveHistorySyncInFlight = false;
    this._allCriticalDataSynced = false;
    this._syncDCriticalDataTimeout = null;
    this._isHistorySyncLoopRunning = false;
    this.initState();
  }
  initState() {
    this._criticalState = (0, a.default)({}, V);
    this._debugOnlyState = (0, a.default)({}, H);
    this._syncDCriticalDataState = W.NotStarted;
    this._syncDNonCriticalDataState = W.NotStarted;
    this._syncDGroupMetadataQueryDataState = W.NotStarted;
  }
  _isCriticalSyncDoneThisSession() {
    for (const e in this._criticalState) {
      if (!this._criticalState[e]) {
        return false;
      }
    }
    return true;
  }
  _setSynced(e) {
    var t = this;
    return (0, i.default)(function* () {
      __LOG__(2)`[bootstrap][history sync] completed sync for ${e}`;
      t._criticalState[e] = true;
      if (t._isCriticalSyncDoneThisSession()) {
        __LOG__(2)`[bootstrap][history sync] critical sync done`;
        yield (0, x.setAllCriticalDataSynced)();
        h.Cmd.criticalSyncDone();
        m.default.initOrUpdateTracking(Y.WEBC_SCENARIO_TYPE.INITIAL_PAIRING);
        t.syncNonCriticalData();
      }
    })();
  }
  _syncContactsInChunks(e, t) {
    return (0, i.default)(function* () {
      __LOG__(2, undefined, undefined, undefined, ["contact-sync"])`start contact sync for ${e ? t.length + 1 : 0} chunks of contacts during the initial sync`;
      if (e != null) {
        yield (0, D.syncContactListJob)(Array.from(e), false);
      }
      for (let e = 0; e < t.length; e++) {
        const n = Array.from(t[e]);
        yield (0, l.delayMs)(20000);
        yield (0, D.syncContactListJob)(n);
      }
      __LOG__(2, undefined, undefined, undefined, ["contact-sync"])`initial contact sync completes`;
    })();
  }
  _syncDeviceList(e) {
    if (e == null) {
      __LOG__(2, undefined, undefined, undefined, ["contact-sync"])`syncMostRecentDevices has no contact to sync during bootstrap`;
      return Promise.resolve();
    }
    __LOG__(2, undefined, undefined, undefined, ["contact-sync"])`sync ${e.size} contacts for device info during the initial sync`;
    const t = Array.from(e);
    return (0, k.syncDeviceListJob)(t, null, null).catch(e => {
      __LOG__(4, true, new Error(), true)`Sync device failed`;
      SEND_LOGS("Sync device failed: " + e);
    });
  }
  setReadReceiptsSynced() {
    var e = this;
    return (0, i.default)(function* () {
      yield e._setSynced("readReceipts");
    })();
  }
  setInitialChatHistorySynced() {
    var e = this;
    return (0, i.default)(function* () {
      yield e._setSynced("initialChatHistory");
      if ((0, U.isHistorySyncNotificationHandlingV2Enabled)()) {
        __LOG__(2)`[history sync][continueProgressiveHistorySyncProcessingV2] initial chat history synced.`;
        $.continueProgressiveHistorySyncProcessingV2(S.HistorySyncScheduleSource.InitialSyncComplete);
      } else {
        $.continueProgressiveHistorySyncProcessing();
      }
    })();
  }
  setSyncDCriticalSynced() {
    var e = this;
    return (0, i.default)(function* () {
      e._syncDCriticalDataState = W.Completed;
      if (!e._criticalState.syncdCritical) {
        yield e._setSynced("syncdCritical");
      }
    })();
  }
  syncNonCriticalData() {
    let e = [];
    this._syncDGroupMetadataQueryDataState = W.InProcess;
    (0, I.queryAndUpdateAllGroupMetadata)(true).then(() => {
      e = (0, C.getAllContactsFromChatCollectionIntoChunks)();
      this._syncDeviceList(e[0]);
      (0, C.getAndUpdateNonAddressBookContacts)();
    }).then(() => {
      self.setTimeout(function () {
        this._syncContactsInChunks(e[0], e.slice(1, e.length));
      }.bind(this), 40000);
    }).finally(() => {
      this._syncDGroupMetadataQueryDataState = W.Completed;
    });
    (0, E.getAndUpdateStatus)();
    (0, f.getAndUpdateProfilePicture)();
    (0, f.updateBlocklist)();
    (0, g.bootstrapNewsletterBackend)();
    this._syncDNonCriticalDataState = W.InProcess;
    (0, u.markCollectionsForSync)([c.CollectionName.Regular, c.CollectionName.RegularLow, c.CollectionName.RegularHigh]).then(() => {
      this._syncDNonCriticalDataState = W.Completed;
    });
  }
  markInitialHistorySyncCountDebugStats(e, t) {
    this._debugOnlyState = {
      initialChatHistoryTotalMsg: e,
      initialChatHistoryTotalChats: t
    };
  }
  isSyncDCriticalDataSyncInProcess() {
    return this._syncDCriticalDataState === W.InProcess;
  }
  isSyncDBootstrapInProcess() {
    return this._syncDCriticalDataState === W.InProcess || this._syncDNonCriticalDataState === W.InProcess;
  }
  isSyncDBootstrapGroupMetadataQueryInProcess() {
    return this._syncDGroupMetadataQueryDataState === W.InProcess;
  }
  _initCriticalDataTimeoutIfNeeded() {
    var e = this;
    if (this._syncDCriticalDataTimeout == null) {
      __LOG__(2)`[bootstrap][history sync] setting critical data syncd timeout (${180})`;
      this._syncDCriticalDataTimeout = self.setTimeout((0, i.default)(function* () {
        if (!(yield e._isSyncDCriticalDataComplete())) {
          __LOG__(2)`[bootstrap] syncd critical data timeout exceeded, logging out`;
          yield (0, K.forceFlushAllWamBuffers)();
          (0, v.maybeLogToJestE2eJSConsole)("syncd critical data timeout exceeded, logging out");
          yield (0, N.socketLogout)(M.LogoutReason.SyncdTimeout);
        }
        if ((yield (0, B.getInitialHistorySyncComplete)()) !== true) {
          __LOG__(2)`[bootstrap][history sync] history sync critical data timeout exceeded, logging out`;
          yield (0, K.forceFlushAllWamBuffers)();
          (0, v.maybeLogToJestE2eJSConsole)("history sync critical data timeout exceeded, logging out");
          yield (0, N.socketLogout)(M.LogoutReason.HistorySyncTimeout);
        }
        __LOG__(2)`[bootstrap][history sync] all critical data synced within timeout period`;
      }), 180000);
    }
  }
  _isSyncDCriticalDataComplete() {
    return (0, i.default)(function* () {
      const e = yield (0, w.getSyncActionsRows)(["action"], [c.Actions.SettingPushName]);
      return e.length > 0 && e.find(e => e.actionState === c.SyncActionState.Success) != null;
    })();
  }
  setSyncDCriticalDataSyncCompleted() {
    var e = this;
    return (0, i.default)(function* () {
      if (e._syncDCriticalDataTimeout != null) {
        yield new A.MdBootstrapDataAppliedWamEvent({
          mdBootstrapPayloadType: F.MD_BOOTSTRAP_PAYLOAD_TYPE.CRITICAL,
          mdBootstrapSource: j.MD_BOOTSTRAP_SOURCE.APP_STATE,
          mdSessionId: yield G.MdSyncFieldStatsMeta.getMdSessionId(),
          mdTimestamp: (0, d.unixTimeMs)()
        }).commitAndWaitForFlush(true);
      }
    })();
  }
  getCriticalSyncDebugSummary() {
    var e = this;
    return (0, i.default)(function* () {
      if (yield e.isCriticalDataSynced()) {
        return "-------\nAll critical data synced\n-------\n\n";
      }
      return `-------\n Initial history sync complete: ${(yield (0, B.getHistorySyncStatus)()) ? "true" : e._criticalState.initialChatHistory.toString()}\n Initial msgs: ${e._debugOnlyState.initialChatHistoryTotalMsg}, initial chats: ${e._debugOnlyState.initialChatHistoryTotalChats}\n Receipt sync complete: ${e._criticalState.readReceipts.toString()} \n Critical collection sync complete: ${e._criticalState.syncdCritical.toString()} \n-------\n`;
    })();
  }
  isCriticalDataSynced() {
    var e = this;
    return (0, i.default)(function* () {
      e._allCriticalDataSynced = e._allCriticalDataSynced || (yield (0, x.getAllCriticalDataSynced)());
      return e._allCriticalDataSynced;
    })();
  }
  syncCriticalData() {
    var e = this;
    return (0, i.default)(function* () {
      m.default.initOrUpdateTracking(Y.WEBC_SCENARIO_TYPE.INITIAL_PAIRING);
      __LOG__(2)`[bootstrap][history sync] need to sync critical data: true`;
      const t = yield e.getCriticalSyncDebugSummary();
      __LOG__(2)`[bootstrap][history sync] ${t}`;
      __LOG__(2, undefined, undefined, undefined, ["history-sync"])`[bootstrap] syncing my device list`;
      const n = (0, k.syncMyDeviceListJob)();
      const r = new Promise((t, n) => {
        (0, f.updatePrivacySettings)().then(() => e.setReadReceiptsSynced()).then(t).catch(n);
      }).catch(e => {
        __LOG__(4, true, new Error(), true)`failed to sync privacy settings ${e.stack}`;
        SEND_LOGS("failed to update privacy settings from privacy request to server");
        (0, v.maybeLogToJestE2eJSConsole)("failed to sync privacy settings, logging out");
        (0, N.socketLogout)(M.LogoutReason.AccountSyncError);
      });
      (0, L.updateSyncdDisabledDueToFatalFlag)(false);
      e._initCriticalDataTimeoutIfNeeded();
      e._syncDCriticalDataState = W.InProcess;
      const a = n.then(() => (0, u.markCollectionsForSync)([c.CollectionName.CriticalBlock, c.CollectionName.CriticalUnblockLow])).then((0, i.default)(function* () {
        if (!e._criticalState.syncdCritical) {
          if (yield e._isSyncDCriticalDataComplete()) {
            yield e.setSyncDCriticalSynced();
            yield e.setSyncDCriticalDataSyncCompleted();
          }
        }
      }));
      if ((yield (0, B.getInitialHistorySyncComplete)()) === true) {
        yield e.setInitialChatHistorySynced();
      }
      const o = (0, f.updateDefaultDisappearingMode)().catch(e => {
        __LOG__(4, true, new Error(), true)`failed to sync default disappearing mode ${e.stack}`;
        SEND_LOGS("failed initial sync of default disappearing mode");
      });
      yield Promise.all([r, a, o]);
    })();
  }
  continueProgressiveHistorySyncProcessing() {
    __LOG__(2)`[history sync] continueProgressiveHistorySyncProcessing`;
    const e = b.default.info().name !== "Safari";
    this._initNextProgressiveHistorySyncRunLoop(e);
  }
  _progressiveHistorySyncRun() {
    var e = this;
    return (0, i.default)(function* () {
      if (!e._allCriticalDataSynced && e._criticalState.initialChatHistory !== true) {
        __LOG__(2)`[history sync] Skip processLoop, until initial sync is complete`;
        return void e._progressiveHistorySyncRemainingIteration++;
      }
      if (!h.Cmd.isMainStreamReadyMd) {
        __LOG__(2, undefined, undefined, undefined, ["history-sync"])`[history sync] Skip processLoop, until main is loaded`;
        return void e._progressiveHistorySyncRemainingIteration++;
      }
      const t = yield (0, _.fetchNextHistorySyncChunkForProcessing)();
      if (!t) {
        return;
      }
      __LOG__(2)`[history sync] processLoop picked up the next chunk with order ${t.chunkOrder}`;
      e._progressiveHistorySyncRemainingIteration++;
      const r = require("./9122.js").handleHistorySyncChunk;
      yield r(t);
    })();
  }
  _initNextProgressiveHistorySyncRunLoop() {
    var e = this;
    let t = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
    return (0, i.default)(function* () {
      e._isHistorySyncLoopRunning = true;
      if (t) {
        e._progressiveHistorySyncRemainingIteration++;
      }
      const n = (0, p.getABPropConfigValue)("history_sync_loop_interval_ms");
      if (e._progressiveHistorySyncRemainingIteration === 0) {
        (0, R.getHistorySyncNotificationTable)().equals(["processed"], 0, {
          shouldDecrypt: false
        }).then(e => {
          const t = e.filter(e => !_.inFlightChunk.has(e.msgKey) && !e.reuploadPending);
          if (t.length > 0) {
            __LOG__(3)`[history sync] No remaining iterations but still have unprocessed ${t.length} history sync notifications in table with loop interval ${n}`;
          }
        });
      }
      if (!e._progressiveHistorySyncInFlight && e._progressiveHistorySyncRemainingIteration > 0) {
        e._progressiveHistorySyncRemainingIteration--;
        e._progressiveHistorySyncInFlight = true;
        try {
          yield y.DbEncKeyStore.waitForFinalDbMsgEncKey();
          yield e._progressiveHistorySyncRun();
        } catch (e) {
          __LOG__(4, undefined, new Error())`[history sync] _progressiveHistorySyncRun failed with ${e == null ? undefined : e.message}, stack: ${e == null ? undefined : e.stack}`;
        }
        e._progressiveHistorySyncInFlight = false;
        const t = !e._allCriticalDataSynced && e._criticalState.initialChatHistory !== true;
        if (t) {
          __LOG__(2)`[history sync] initial sync is in progress, use default loop interval`;
        }
        yield new Promise(e => self.setTimeout(e, t ? 20000 : n));
        e._initNextProgressiveHistorySyncRunLoop();
      }
      e._isHistorySyncLoopRunning = false;
    })();
  }
  increaseProgressiveHistorySyncRemainingIteration() {
    this._progressiveHistorySyncRemainingIteration += 5;
  }
  _progressiveHistorySyncRunV2() {
    return (0, i.default)(function* () {
      if (!h.Cmd.isMainStreamReadyMd) {
        return void __LOG__(2, undefined, undefined, undefined, ["history-sync"])`[history sync][continueProgressiveHistorySyncProcessingV2] Skip processLoop, until main is loaded`;
      }
      const e = yield (0, _.fetchNextHistorySyncChunkForProcessing)();
      if (!e) {
        return;
      }
      __LOG__(2)`[history sync][continueProgressiveHistorySyncProcessingV2] processLoop picked up chunk`;
      if (e.syncType === O.HistorySync$HistorySyncType.RECENT && e.chunkOrder != null) {
        const t = e.chunkOrder;
        if (_.recentSyncChunkHandlingTriedCount[t] != null) {
          _.recentSyncChunkHandlingTriedCount[t]++;
        } else {
          _.recentSyncChunkHandlingTriedCount[t] = 1;
        }
      }
      const t = require("./9122.js").handleHistorySyncChunk;
      yield t(e);
    })();
  }
  _initNextProgressiveHistorySyncRunLoopV2() {
    var e = this;
    return (0, i.default)(function* () {
      __LOG__(2)`[history sync][continueProgressiveHistorySyncProcessingV2] job starts`;
      e._isHistorySyncLoopRunning = true;
      try {
        yield y.DbEncKeyStore.waitForFinalDbMsgEncKey();
        yield e._progressiveHistorySyncRunV2();
      } catch (e) {
        __LOG__(4, undefined, new Error())`[history sync][continueProgressiveHistorySyncProcessingV2] _progressiveHistorySyncRun failed with ${e == null ? undefined : e.message}, stack: ${e == null ? undefined : e.stack}`;
      }
      __LOG__(2)`[history sync][continueProgressiveHistorySyncProcessingV2] finish main flow`;
      const t = yield (0, B.getHistorySyncStatus)();
      if ((t == null ? undefined : t.recentCompleted) === true) {
        __LOG__(2)`[history sync][continueProgressiveHistorySyncProcessingV2] recent sync finishes, check remaining on demand sync notifications`;
        if ((yield (0, R.getHistorySyncNotificationTable)().equals(["processed", "syncType"], [0, O.HistorySync$HistorySyncType.ON_DEMAND], {
          shouldDecrypt: false
        })).length > 0) {
          e.continueProgressiveHistorySyncProcessingV2(S.HistorySyncScheduleSource.LastProcessedNotification);
        } else {
          __LOG__(2)`[history sync][continueProgressiveHistorySyncProcessingV2] skip scheduling the next run as no on demand notifications`;
        }
        return void (e._isHistorySyncLoopRunning = false);
      }
      __LOG__(2)`[history sync][continueProgressiveHistorySyncProcessingV2] recent sync is incompleted, check remaining recent sync notifications`;
      const n = yield (0, R.getHistorySyncNotificationTable)().equals(["processed", "syncType"], [0, O.HistorySync$HistorySyncType.RECENT], {
        shouldDecrypt: false
      }).then(e => e.filter(e => !_.inFlightChunk.has(e.msgKey) && !e.reuploadPending).sort((e, t) => {
        var n;
        var r;
        return ((n = e.chunkOrder) !== null && n !== undefined ? n : 0) - ((r = t.chunkOrder) !== null && r !== undefined ? r : 0);
      }));
      if (n.length === 0) {
        __LOG__(2)`[history sync][continueProgressiveHistorySyncProcessingV2] skip scheduling the next run as no recent notifications`;
        return void (e._isHistorySyncLoopRunning = false);
      }
      const r = n[0].chunkOrder;
      if (r == null) {
        __LOG__(2)`[history sync][continueProgressiveHistorySyncProcessingV2] skip scheduling the next run as first recent notification doesn't have chunk order`;
        return void (e._isHistorySyncLoopRunning = false);
      }
      __LOG__(2)`[history sync][continueProgressiveHistorySyncProcessingV2] next unprocessed recent notification has chunk order: ${r}`;
      const i = yield (0, B.getLastHistoryRecentSyncedChunk)();
      if (i == null && r !== 1) {
        __LOG__(2)`[history sync][continueProgressiveHistorySyncProcessingV2] skip scheduling the next run as no recent notifications with chunk order 1 after initial sync`;
        return void (e._isHistorySyncLoopRunning = false);
      } else {
        __LOG__(2)`[history sync][continueProgressiveHistorySyncProcessingV2] last processed recent notification has chunk order: ${i == null ? undefined : i.chunkOrder}`;
        if (i != null && i.chunkOrder + 1 !== r) {
          __LOG__(2)`[history sync][continueProgressiveHistorySyncProcessingV2] skip scheduling the next run as no recent notifications with correct chunk order`;
          return void (e._isHistorySyncLoopRunning = false);
        } else if (_.recentSyncChunkHandlingTriedCount[r] > 5) {
          __LOG__(2)`[history sync][continueProgressiveHistorySyncProcessingV2] skip scheduling the next run as recent notification with order ${r} fails too many times`;
          return void (e._isHistorySyncLoopRunning = false);
        } else {
          __LOG__(2)`[history sync][continueProgressiveHistorySyncProcessingV2] init next run`;
          e._isHistorySyncLoopRunning = false;
          return void e.continueProgressiveHistorySyncProcessingV2(S.HistorySyncScheduleSource.LastProcessedNotification);
        }
      }
    })();
  }
  continueProgressiveHistorySyncProcessingV2(e) {
    var t = this;
    return (0, i.default)(function* () {
      if (!t._allCriticalDataSynced && t._criticalState.initialChatHistory !== true) {
        __LOG__(2)`[history sync][continueProgressiveHistorySyncProcessingV2] Skip job scheduling as initial chat sync is incomplete`;
        return Promise.resolve();
      }
      if (e === S.HistorySyncScheduleSource.BackendStart) {
        const e = yield (0, B.getHistorySyncStatus)();
        if ((e == null ? undefined : e.recentCompleted) === true) {
          __LOG__(2)`[history sync][continueProgressiveHistorySyncProcessingV2] Skip job scheduling as recent sync is complete when starting backend`;
          return Promise.resolve();
        }
      }
      return (0, P.createNonPersistedJob)("continueProgressiveHistorySyncProcessingV2", function () {
        var n = (0, i.default)(function* () {
          __LOG__(2)`[history sync][continueProgressiveHistorySyncProcessingV2] job is scheduled, source: ${e}`;
          return t._initNextProgressiveHistorySyncRunLoopV2();
        });
        return function () {
          return n.apply(this, arguments);
        };
      }(), {
        priority: s.JOB_PRIORITY.HISTORY_SYNC,
        maxTimeoutMs: 120000
      }).waitUntilCompleted().catch(e => {
        __LOG__(4, undefined, new Error())`[history sync][continueProgressiveHistorySyncProcessingV2] error while running job: ${e}`;
      });
    })();
  }
  getIsHistorySyncRunning() {
    return this._isHistorySyncLoopRunning;
  }
}();
h.Cmd.on("on_initial_chat_synced", (0, i.default)(function* () {
  yield $.setInitialChatHistorySynced();
}));
h.Cmd.on("logout", () => {
  $.initState();
});
h.Cmd.on("on_recent_chat_history_synced", () => {
  const e = (0, T.getInstance)();
  if (e instanceof o.WAConcurrentBucketJobQueue) {
    __LOG__(2)`[history sync][continueProgressiveHistorySyncProcessingV2] clearing bucket queue for type ${s.JOB_PRIORITY.HISTORY_SYNC}`;
    e.clearQueueByPriority(s.JOB_PRIORITY.HISTORY_SYNC);
  }
});
var z = $;
exports.default = z;