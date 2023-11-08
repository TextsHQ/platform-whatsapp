var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OfflineNonBlockingResumeStageManager = undefined;
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
var g = require("./511899.js");
var m = require("./928621.js");
var h = require("./634919.js");
var y = require("./538222.js");
var E = require("./76256.js");
var S = require("./757453.js");
var v = require("./561913.js");
var T = require("./209983.js");
var M = require("./766187.js");
exports.OfflineNonBlockingResumeStageManager = class {
  constructor(e) {
    this._offlineCompleteTimer = null;
    this._progressBarTimer = new a.ShiftTimer(() => {
      c.Cmd.handleOfflineProgressUpdate();
      this._progressBarTimer.onOrAfter(m.UI_UPDATE_TIME_MS);
    });
    this._maxProgress = 95;
    if (e == null ? undefined : e.mainScreenLoaded) {
      this._mainScreenLoaded = true;
    }
    this._initState();
  }
  _initState() {
    this.offlineMessagePreviewCounter = -1;
    this._decryptedMessageCount = 0;
    this._decryptionErrorCount = 0;
    this._finishedDownloading = false;
    this._hasMessagesToDownload = null;
    this._status = m.ResumeStatus.INIT;
  }
  _setStatus(e) {
    __LOG__(2)`[offline-resume][non-blocking] offline resume stage: ${this._status} -> ${e}`;
    this._status = e;
  }
  processOfflinePreview(e) {
    T.OfflineResumeReporter.logOfflinePreviewT();
    if ((0, p.isNonBlockingResumeFromOpenTabEnabled)() && this._mainScreenLoaded) {
      __LOG__(2)`[resume-from-open-tab] reset offline delivery end to false`;
      c.Cmd.offlineDeliveryStart();
    }
    if (this.isResumeFromRestartComplete()) {
      __LOG__(2)`[offline-resume][non-blocking] Offline session is complete when receiving offline preview ib.`;
      if ((0, y.exceedResumeWithOpenTabLimit)(e.message, e.receipt)) {
        __LOG__(2)`[offline-resume][non-blocking] restart client due to exceed the LIMIT, message: ${e.message}, receipt: ${e.receipt}`;
        (0, y.refreshWindow)();
      }
      f.jsHaltDetector.restartDetection();
      this._setStatus(m.ResumeStatus.RESUME_WITH_OPEN_TAB);
      (0, s.frontendFireAndForget)("updateChatSortListener", {
        enable: false
      });
      self.setTimeout(() => {
        (0, s.frontendFireAndForget)("updateChatSortListener", {
          enable: true
        });
      }, 7000);
    } else if (this._status === m.ResumeStatus.INIT) {
      if ((0, p.isOfflinePriorityBucketEnabled)()) {
        l.default.initOrUpdateTracking(v.WEBC_SCENARIO_TYPE.OFFLINE_RESUME);
      }
      T.OfflineResumeReporter.logOfflineCount(e);
      this.offlineMessagePreviewCounter = e.message;
      this._hasMessagesToDownload = false;
      this._finishedDownloading = true;
      this._decryptedMessageCount = 0;
      this._firstPreviewReceivedT = Date.now();
      (0, E.enableMemSignalStore)();
      c.Cmd.handleOfflineProgressUpdate();
      f.jsHaltDetector.restartDetection();
      this._progressBarTimer.onOrAfter(m.UI_UPDATE_TIME_MS);
      this._setStatus(m.ResumeStatus.RESUME_ON_RESTART);
      this._startOfflineCompleteTimer(e.message, e.receipt);
      if (this._mainScreenLoaded) {
        __LOG__(2)`[resume-from-open-tab] Main screen is loaded`;
      } else {
        this._mainScreenLoadPromise = (0, y.loadMainScreen)(this._threadMeta ? {
          threadMeta: this._threadMeta
        } : {});
      }
    } else {
      const t = this._firstPreviewReceivedT;
      if (t != null) {
        const n = Date.now() - t;
        if (n < m.OFFLINE_PREVIEW_PERIOD_MS) {
          __LOG__(2)`[offline-resume][non-blocking] Accept multiple offline preview ibs during offline resume, delay ${n}.`;
          this.offlineMessagePreviewCounter += e.message;
          this._hasMessagesToDownload = false;
          this._finishedDownloading = true;
          T.OfflineResumeReporter.logOfflineCount(e);
        } else {
          __LOG__(2)`[offline-resume][non-blocking] Reject multiple offline preview ib during offline resume, delay ${n}.`;
        }
      }
      this._refreshOfflineCompleteTimer();
    }
  }
  processOfflineThreadMeta(e) {
    this._threadMeta = e;
    if (this._mainScreenLoaded) {
      (0, s.frontendFireAndForget)("updateChatPreviewT", {
        threadMeta: e
      });
    }
  }
  getOfflineDeliveryProgress() {
    if (this.offlineMessagePreviewCounter === 0) {
      return this._maxProgress;
    } else {
      return Math.min(Math.ceil(this._decryptedMessageCount * 100 / this.offlineMessagePreviewCounter), this._maxProgress);
    }
  }
  processOfflineSessionComplete() {
    var e = this;
    let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
    return (0, i.default)(function* () {
      var n;
      self.setTimeout(() => {
        (0, s.frontendFireAndForget)("updateChatSortListener", {
          enable: true
        });
      }, 3000);
      if (!((n = e._offlineCompleteTimer) === null || n === undefined)) {
        n.cancel();
      }
      e._offlineCompleteTimer = null;
      if (e._status !== m.ResumeStatus.COMPLETE) {
        if (e._status === m.ResumeStatus.RESUME_WITH_OPEN_TAB) {
          yield (0, _.waitForOnlineMsgThread)();
          yield (0, o.doPendingDeviceSync)();
          return void e._setStatus(m.ResumeStatus.COMPLETE);
        } else {
          if (e._status === m.ResumeStatus.INIT) {
            e._hasMessagesToDownload = false;
            e._finishedDownloading = true;
            c.Cmd.handleOfflineProgressUpdate();
            if (!(e._mainScreenLoaded || e._mainScreenLoadPromise)) {
              e._mainScreenLoadPromise = (0, y.loadMainScreen)(e._threadMeta ? {
                threadMeta: e._threadMeta
              } : {});
            }
          }
          yield e._mainScreenLoadPromise;
          e._offlineStanzaCountAfterOfflineMarker = 0;
          self.setTimeout(() => {
            if (e._offlineStanzaCountAfterOfflineMarker > m.OFFLINE_STANZA_COUNT_LIMIT) {
              __LOG__(3)`[offline-resume][non-blocking] ${e._offlineStanzaCountAfterOfflineMarker} received after offline completion marker. Refreshing window due to potential server issue.`;
              (0, y.refreshWindow)();
            }
          }, m.OFFLINE_STANZA_COUNT_CHECK_TIMEOUT_MS);
          if (t) {
            return e._handleOfflinePriorityComplete();
          } else {
            e._setStatus(m.ResumeStatus.COMPLETE);
            return e._handleOfflineComplete();
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
    return this._status !== m.ResumeStatus.RESUME_ON_RESTART && this._status !== m.ResumeStatus.INIT;
  }
  isResumeFromRestartInProgress() {
    return this._status !== m.ResumeStatus.INIT && !c.Cmd.isOfflineDeliveryEnd;
  }
  isResumeOnSocketDisconnectInProgress() {
    return this._status === m.ResumeStatus.RESUME_WITH_OPEN_TAB;
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
    T.OfflineResumeReporter.logAddOfflineSizeBytes(t);
    T.OfflineResumeReporter.logOldestStanzaTime(e);
    this._refreshOfflineCompleteTimer();
  }
  getResumeUIProgressBarType() {
    if (!c.Cmd.isOfflineDeliveryEnd && this.offlineMessagePreviewCounter >= 100) {
      if ((0, p.isOfflineProgressToastbarEnabled)()) {
        return h.ResumeUIProgressBarType.Toastbar;
      } else {
        return h.ResumeUIProgressBarType.ButterBar;
      }
    } else {
      return h.ResumeUIProgressBarType.None;
    }
  }
  _refreshOfflineCompleteTimer() {
    if (this._offlineCompleteTimer) {
      this._offlineCompleteTimer.onOrAfter(m.OFFLINE_STANZA_TIMEOUT_MS);
    }
  }
  _startOfflineCompleteTimer(e, t) {
    var n;
    if (!((n = this._offlineCompleteTimer) === null || n === undefined)) {
      n.cancel();
    }
    this._offlineCompleteTimer = new a.ShiftTimer(() => {
      if (this._status !== m.ResumeStatus.COMPLETE) {
        __LOG__(2)`[offline-resume][non-blocking]: offline session completed by timeout`;
        if ((0, p.isOfflineDynamicBatchSizeEnabled)() || (0, p.isPreAckM2Enabled)()) {
          __LOG__(4, undefined, new Error(), true)`[offline-resume][non-blocking] offline resume finished by timeout`;
          SEND_LOGS("offline-resume-timeout");
        }
        this.processOfflineSessionComplete(e + t);
        this._offlineCompleteTimer = null;
        T.OfflineResumeReporter.logMissedOfflineComplete();
      }
    });
    this._offlineCompleteTimer.onOrAfter(m.OFFLINE_STANZA_TIMEOUT_MS);
  }
  _handleOfflinePriorityComplete() {
    return (0, i.default)(function* () {
      __LOG__(2)`[offline-resume][non-blocking] _handleOfflinePriorityComplete.`;
      yield (0, _.waitForOfflineMsgThread)();
      c.Cmd.handleOfflineProgressUpdate();
      yield (0, y.clearOfflineSnapShot)();
      T.OfflineResumeReporter.logLastStanzaT();
    })();
  }
  _handleOfflineComplete() {
    var e = this;
    return (0, i.default)(function* () {
      yield (0, _.waitForOfflineMsgThread)();
      const t = e._threadMeta;
      if (t != null) {
        (0, s.frontendFireAndForget)("resetChatPreviewT", {
          chatIds: Object.keys(t)
        });
      }
      T.OfflineResumeReporter.logOfflineDecryptionErrorCount(e._decryptionErrorCount);
      T.OfflineResumeReporter.logLastStanzaT();
      __LOG__(2)`[offline-resume][non-blocking] _onOfflineComplete: waitForOfflineMsgThread done, total decryption error: ${e._decryptionErrorCount}`;
      e._decryptionErrorCount = 0;
      yield (0, y.clearOfflineSnapShot)();
      e._maxProgress = 97;
      yield e._mainScreenLoadPromise;
      yield (0, g.updatePeerReceipts)();
      e._maxProgress = 99;
      __LOG__(2)`[offline-resume][non-blocking] _onOfflineComplete: clearOfflineSnapShot done.`;
      c.Cmd.offlineDeliveryEnd();
      (0, S.setOfflinePushCount)(0);
      e._progressBarTimer.forceRunNow();
      e._progressBarTimer.cancel();
      T.OfflineResumeReporter.commit();
      (0, E.enablePersistSignalStore)();
      (0, y.runReceiptCleanUpLoop)();
      (0, M.workerSafeFireAndForget)("processAllOrphanPaymentNotifications");
      (0, u.uploadChatThreadLoggingEvents)();
      if ((0, p.isOfflinePriorityBucketEnabled)()) {
        l.default.initOrUpdateTracking(v.WEBC_SCENARIO_TYPE.IDLE);
      }
      self.setTimeout(() => {
        (0, o.doPendingDeviceSync)();
      }, m.OFFLINE_DEVICE_SYNC_DELAY);
    })();
  }
};