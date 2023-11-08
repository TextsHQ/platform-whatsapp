var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OfflineBlockingResumeStageManager = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./685639.js");
var o = require("./853670.js");
var s = require("./359987.js");
var l = r(require("./542817.js"));
var u = require("./698867.js");
var c = require("./780549.js");
var d = require("./257845.js");
var p = require("./724469.js");
var f = require("./150204.js");
var _ = require("./412985.js");
var g = require("./928621.js");
var m = require("./634919.js");
var h = require("./538222.js");
var y = require("./889263.js");
var E = require("./76256.js");
var S = require("./757453.js");
var v = require("./561913.js");
var T = require("./209983.js");
var M = require("./766187.js");
exports.OfflineBlockingResumeStageManager = class {
  constructor() {
    this._offlineCompleteTimer = null;
    this._progressBarTimer = new a.ShiftTimer(() => {
      c.Cmd.handleOfflineProgressUpdate();
      this._progressBarTimer.onOrAfter(g.UI_UPDATE_TIME_MS);
    });
    this._chatsAndMsgsRestored = false;
    this._initState();
  }
  _initState() {
    this.offlineMessagePreviewCounter = -1;
    this._decryptedMessageCount = 0;
    this._decryptionErrorCount = 0;
    this._finishedDownloading = false;
    this._hasMessagesToDownload = null;
    this._status = g.ResumeStatus.INIT;
  }
  _setStatus(e) {
    __LOG__(2)`[offline-resume][blocking] offline resume stage: ${this._status} -> ${e}`;
    this._status = e;
  }
  processOfflinePreview(e) {
    T.OfflineResumeReporter.logOfflinePreviewT();
    if (this.isResumeFromRestartComplete()) {
      __LOG__(2)`[offline-resume][blocking] Offline session is complete when receiving offline preview ib.`;
      if ((0, h.exceedResumeWithOpenTabLimit)(e.message, e.receipt)) {
        __LOG__(2)`[offline-resume][blocking] restart client due to exceed the LIMIT, message: ${e.message}, receipt: ${e.receipt}`;
        (0, h.refreshWindow)();
      }
      f.jsHaltDetector.restartDetection();
      this._setStatus(g.ResumeStatus.RESUME_WITH_OPEN_TAB);
      (0, s.frontendFireAndForget)("updateChatSortListener", {
        enable: false
      });
      self.setTimeout(() => {
        (0, s.frontendFireAndForget)("updateChatSortListener", {
          enable: true
        });
      }, 7000);
    } else if (this._status === g.ResumeStatus.INIT) {
      if ((0, p.isOfflinePriorityBucketEnabled)()) {
        l.default.initOrUpdateTracking(v.WEBC_SCENARIO_TYPE.OFFLINE_RESUME);
      }
      T.OfflineResumeReporter.logOfflineCount(e);
      this._hasMessagesToDownload = e.message > 0;
      this._finishedDownloading = e.message === 0;
      this.offlineMessagePreviewCounter = e.message;
      this._decryptedMessageCount = 0;
      this._firstPreviewReceivedT = Date.now();
      (0, E.enableMemSignalStore)();
      c.Cmd.handleOfflineProgressUpdate();
      f.jsHaltDetector.restartDetection();
      this._setStatus(g.ResumeStatus.RESUME_ON_RESTART);
      this._startOfflineCompleteTimer(e.message, e.receipt);
      this._progressBarTimer.onOrAfter(g.UI_UPDATE_TIME_MS);
      c.Cmd.readyForProcessOffline();
      __LOG__(2)`[offline-resume][blocking] start handling offline stanza`;
    } else {
      const t = this._firstPreviewReceivedT;
      if (t != null) {
        const n = Date.now() - t;
        if (n < g.OFFLINE_PREVIEW_PERIOD_MS) {
          __LOG__(2)`[offline-resume][blocking] Accept multiple offline preview ibs during offline resume, delay ${n}.`;
          this.offlineMessagePreviewCounter += e.message;
          this._hasMessagesToDownload = this.offlineMessagePreviewCounter > 0;
          this._finishedDownloading = this.offlineMessagePreviewCounter === 0;
          T.OfflineResumeReporter.logOfflineCount(e);
          c.Cmd.handleOfflineProgressUpdate();
        } else {
          __LOG__(2)`[offline-resume][blocking] Reject multiple offline preview ib during offline resume, delay ${n}.`;
        }
      }
      this._refreshOfflineCompleteTimer();
    }
  }
  processOfflineThreadMeta() {}
  getOfflineDeliveryProgress() {
    if (this._finishedDownloading) {
      return 100;
    } else if (this.offlineMessagePreviewCounter === -1) {
      return 0;
    } else if (this.offlineMessagePreviewCounter === 0) {
      return 100;
    } else {
      return Math.min(Math.ceil(this._decryptedMessageCount * 100 / this.offlineMessagePreviewCounter), 100);
    }
  }
  processOfflineSessionComplete(e) {
    var t = this;
    let n = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
    return (0, i.default)(function* () {
      var r;
      let i = e;
      if (n) {
        i = t.offlineMessagePreviewCounter;
      }
      self.setTimeout(() => {
        (0, s.frontendFireAndForget)("updateChatSortListener", {
          enable: true
        });
      }, 3000);
      if (!((r = t._offlineCompleteTimer) === null || r === undefined)) {
        r.cancel();
      }
      t._offlineCompleteTimer = null;
      c.Cmd.readyForProcessOffline();
      __LOG__(2)`[offline-resume][non-blocking] start handling offline stanza`;
      if (t._status !== g.ResumeStatus.COMPLETE) {
        if (t._status === g.ResumeStatus.RESUME_WITH_OPEN_TAB) {
          yield (0, _.waitForOnlineMsgThread)();
          yield (0, o.doPendingDeviceSync)();
          return void t._setStatus(g.ResumeStatus.COMPLETE);
        } else {
          t._hasMessagesToDownload = i > 0;
          t._finishedDownloading = i === 0;
          t._offlineStanzaCountAfterOfflineMarker = 0;
          self.setTimeout(() => {
            if (t._offlineStanzaCountAfterOfflineMarker > g.OFFLINE_STANZA_COUNT_LIMIT) {
              __LOG__(3)`[offline-resume][blocking] ${t._offlineStanzaCountAfterOfflineMarker} received after offline completion marker. Refreshing window due to potential server issue.`;
              (0, h.refreshWindow)();
            }
          }, g.OFFLINE_STANZA_COUNT_CHECK_TIMEOUT_MS);
          c.Cmd.handleOfflineProgressUpdate();
          if (n) {
            return t._handleOfflinePriorityComplete();
          } else {
            t._setStatus(g.ResumeStatus.COMPLETE);
            return t._handleOfflineComplete();
          }
        }
      }
      if ((0, p.isNonBlockingResumeFromOpenTabEnabled)()) {
        T.OfflineResumeReporter.logLastStanzaT();
        T.OfflineResumeReporter.commit();
      }
    })();
  }
  isResumeFromRestartComplete() {
    return this._status !== g.ResumeStatus.RESUME_ON_RESTART && this._status !== g.ResumeStatus.INIT;
  }
  isResumeOnSocketDisconnectInProgress() {
    return this._status === g.ResumeStatus.RESUME_WITH_OPEN_TAB;
  }
  isResumeFromRestartInProgress() {
    return this._status !== g.ResumeStatus.INIT && !c.Cmd.isOfflineDeliveryEnd;
  }
  getHasMessagesToDownload() {
    return this._hasMessagesToDownload;
  }
  getFinishedDownloading() {
    return this.getOfflineDeliveryProgress() === 100;
  }
  shouldUseOfflineResumeScreen() {
    return this.offlineMessagePreviewCounter > this._decryptedMessageCount;
  }
  processDecryptResult(e) {
    this._decryptedMessageCount += 1;
    if (e === d.E2EProcessResult.RETRY) {
      this._decryptionErrorCount += 1;
    }
  }
  offlineStanzaReceivedAfterComplete() {
    if (this.isResumeFromRestartComplete()) {
      this._offlineStanzaCountAfterOfflineMarker += 1;
    }
  }
  newOfflineStanza(e, t) {
    this._refreshOfflineCompleteTimer();
    T.OfflineResumeReporter.logAddOfflineSizeBytes(t);
    T.OfflineResumeReporter.logOldestStanzaTime(e);
  }
  getResumeUIProgressBarType() {
    return m.ResumeUIProgressBarType.None;
  }
  _refreshOfflineCompleteTimer() {
    if (this._offlineCompleteTimer) {
      this._offlineCompleteTimer.onOrAfter(g.OFFLINE_STANZA_TIMEOUT_MS);
    }
  }
  _startOfflineCompleteTimer(e, t) {
    var n;
    if (!((n = this._offlineCompleteTimer) === null || n === undefined)) {
      n.cancel();
    }
    this._offlineCompleteTimer = new a.ShiftTimer(() => {
      if (this._status !== g.ResumeStatus.COMPLETE) {
        __LOG__(2)`[offline-resume][blocking]: offline session completed by timeout`;
        if ((0, p.isOfflineDynamicBatchSizeEnabled)() || (0, p.isPreAckM2Enabled)()) {
          __LOG__(4, undefined, new Error(), true)`[offline-resume][blocking]offline resume finished by timeout`;
          SEND_LOGS("offline-resume-timeout");
        }
        this.processOfflineSessionComplete(e + t);
        this._offlineCompleteTimer = null;
        T.OfflineResumeReporter.logMissedOfflineComplete();
      }
    });
    this._offlineCompleteTimer.onOrAfter(g.OFFLINE_STANZA_TIMEOUT_MS);
  }
  _handleOfflinePriorityComplete() {
    var e = this;
    return (0, i.default)(function* () {
      __LOG__(2)`[offline-resume][blocking] _handleOfflinePriorityComplete.`;
      yield (0, _.waitForOfflineMsgThread)();
      c.Cmd.handleOfflineProgressUpdate();
      yield (0, h.clearOfflineSnapShot)();
      if (!e._mainScreenLoadPromise) {
        e._mainScreenLoadPromise = (0, h.loadMainScreen)({
          shouldRestoreChatsAndMsgs: true,
          shouldUpdateReceipts: false
        });
        e._chatsAndMsgsRestored = true;
      }
      yield e._mainScreenLoadPromise;
      T.OfflineResumeReporter.logLastStanzaT();
    })();
  }
  _handleOfflineComplete() {
    var e = this;
    return (0, i.default)(function* () {
      yield (0, _.waitForOfflineMsgThread)();
      e._finishedDownloading = true;
      c.Cmd.handleOfflineProgressUpdate();
      T.OfflineResumeReporter.logOfflineDecryptionErrorCount(e._decryptionErrorCount);
      __LOG__(2)`[offline-resume][blocking] _onOfflineComplete: waitForOfflineMsgThread done, total decryption error: ${e._decryptionErrorCount}`;
      e._decryptionErrorCount = 0;
      yield (0, h.clearOfflineSnapShot)();
      __LOG__(2)`[offline-resume][blocking] _onOfflineComplete: clearOfflineSnapShot done.`;
      (0, E.enablePersistSignalStore)();
      (0, h.runReceiptCleanUpLoop)();
      try {
        yield (0, y.pruneExpiredMessagesWithAddOns)();
      } catch (e) {
        __LOG__(4, undefined, new Error())`[offline-resume][blocking] _onOfflineComplete: pruneExpiredMessages message failed with error: ${e}`;
        throw e;
      }
      T.OfflineResumeReporter.logLastStanzaT();
      yield (0, h.restoreDataFromStorage)({
        shouldUpdateReceipts: true,
        shouldRestoreChatsAndMsgs: !e._chatsAndMsgsRestored
      });
      (0, h.readyForMainScreen)();
      c.Cmd.offlineDeliveryEnd();
      (0, S.setOfflinePushCount)(0);
      T.OfflineResumeReporter.commit();
      (0, M.workerSafeFireAndForget)("processAllOrphanPaymentNotifications");
      (0, u.uploadChatThreadLoggingEvents)();
      if ((0, p.isOfflinePriorityBucketEnabled)()) {
        l.default.initOrUpdateTracking(v.WEBC_SCENARIO_TYPE.IDLE);
      }
      self.setTimeout(() => {
        (0, o.doPendingDeviceSync)();
      }, g.OFFLINE_DEVICE_SYNC_DELAY);
    })();
  }
};