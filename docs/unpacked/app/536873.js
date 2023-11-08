var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorkerOfflineResumeReporter = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./390934.js");
var o = require("./685639.js");
var s = require("./632157.js");
var l = require("./508247.js");
var u = require("./755985.js");
var c = require("./757453.js");
var d = require("./673168.js");
var p = require("./111879.js");
var f = require("./209983.js");
var _ = require("./873423.js");
const g = new class {
  constructor() {
    this._processingStageTimer = null;
    this._sessionId = this._generateOfflineSessionId();
    this.pageLoadT = self.performance.now();
    this._offlineMessageCount = 0;
    this._offlineReceiptCount = 0;
    this._offlineNotificationCount = 0;
    this._oldestStanzaTs = 0;
    this._offlineDecryptErrorCount = 0;
    this._processedMessageCount = 0;
    this._processedNotificationCount = 0;
  }
  _generateOfflineSessionId() {
    return `${(0, a.randomHex)(4)}${(0, s.unixTimeWithoutClockSkewCorrection)()}`;
  }
  _commit(e, t) {
    const n = new _.WebcOfflineNotificationProcessWamEvent({
      offlineProcessSessionId: this._sessionId,
      offlineProcessStageTimestampMs: t,
      currentOfflineProcessStage: e,
      swVersion: l.VERSION_BASE
    });
    if (!(e !== p.OFFLINE_PROCESS_STAGES.PROCESSING && e !== p.OFFLINE_PROCESS_STAGES.PROCESS_COMPLETE && e !== p.OFFLINE_PROCESS_STAGES.PROCESS_INTERRUPTED)) {
      this._addOfflineProcessMetadata(n);
    }
    if (e === p.OFFLINE_PROCESS_STAGES.PROCESS_COMPLETE || e === p.OFFLINE_PROCESS_STAGES.PROCESS_INTERRUPTED) {
      n.commitAndWaitForFlush(true);
    } else {
      n.commit();
    }
  }
  _addOfflineProcessMetadata(e) {
    var t;
    var n;
    var r;
    var i;
    e.offlineProcessMessageCount = (0, f.roundUp)((t = this._processedMessageCount) !== null && t !== undefined ? t : 0, 10);
    e.offlineProcessNotificationCount = (0, f.roundUp)((n = this._processedNotificationCount) !== null && n !== undefined ? n : 0, 10);
    e.offlineProcessMailboxAge = (0, f.countDays)((r = this._oldestStanzaTs) !== null && r !== undefined ? r : 0);
    e.offlineProcessDecryptErrorCount = (i = this._offlineDecryptErrorCount) !== null && i !== undefined ? i : 0;
  }
  _refreshProcessingStage() {
    if (this._processingStageTimer == null) {
      this._processingStageTimer = new o.ShiftTimer(() => {
        if (this._currentStage !== p.OFFLINE_PROCESS_STAGES.PROCESSING) {
          return;
        }
        const e = Math.floor(self.performance.now() - this.pageLoadT);
        __LOG__(2)`[offline-resume][worker] worker offline processing progress updates
======= worker offline processing update ========
ProcessedMessage: ${this._processedMessageCount}
ProcessedNotification: ${this._processedNotificationCount}
currentProcessingT: ${e}
=================================================`;
        if (e > 120000) {
          __LOG__(4, undefined, new Error(), true)` [offline-resume][worker] worker offline processing takes too long`;
          return void SEND_LOGS("worker-offline-process-takes-too-long");
        }
        this._commit(p.OFFLINE_PROCESS_STAGES.PROCESSING, e);
        this._refreshProcessingStage();
      });
    }
    this._processingStageTimer.onOrAfter(10000);
  }
  _startProcessingStage() {
    var e;
    this._currentStage = p.OFFLINE_PROCESS_STAGES.PROCESSING;
    if (!((e = this._processingStageTimer) === null || e === undefined)) {
      e.cancel();
    }
    this._refreshProcessingStage();
  }
  _printProcessingPerf() {
    let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
    __LOG__(2)`[offline-resume][worker] worker offline processing ends
========= worker offline processing perf ==========
message: ${this._offlineMessageCount}
receipt: ${this._offlineReceiptCount}
notification: ${this._offlineNotificationCount}
ProcessedMessage: ${this._processedMessageCount}
ProcessedNotification: ${this._processedNotificationCount}
decryptError: ${this._offlineDecryptErrorCount}
pageLoadT: 0
socketConnectT: ${this.socketConnectT}
offlinePreviewT: ${this.offlinePreviewT}
processCompleteT: ${this.processCompleteT}
mailboxAge: ${e}
isInterrupted: ${this._currentStage === p.OFFLINE_PROCESS_STAGES.PROCESS_INTERRUPTED}
===================================================`;
  }
  updateOldestStanzaTime(e) {
    if (this._oldestStanzaTs == null || this._oldestStanzaTs > e) {
      this._oldestStanzaTs = e;
    }
  }
  updateOfflineCount(e) {
    this._offlineMessageCount = e.message;
    this._offlineReceiptCount = e.receipt;
    this._offlineNotificationCount = e.notification;
  }
  updateOfflineDecryptionErrorCount(e) {
    this._offlineDecryptErrorCount = e;
  }
  updateProcessedMessageCount() {
    if ((0, u.isWorker)()) {
      this._processedMessageCount += 1;
    }
  }
  updateProcessedNotificationCount() {
    if ((0, u.isWorker)()) {
      this._processedNotificationCount += 1;
    }
  }
  logWorkerInitialized() {
    this._currentStage = p.OFFLINE_PROCESS_STAGES.PAGE_LOAD;
    this._commit(p.OFFLINE_PROCESS_STAGES.PAGE_LOAD, 0);
  }
  logSocketConnect() {
    this._currentStage = p.OFFLINE_PROCESS_STAGES.SOCKET_CONNECT;
    const e = Math.floor(self.performance.now() - this.pageLoadT);
    this.socketConnectT = e;
    this._commit(p.OFFLINE_PROCESS_STAGES.SOCKET_CONNECT, e);
  }
  logOfflinePreview() {
    this._currentStage = p.OFFLINE_PROCESS_STAGES.OFFLINE_PREVIEW;
    const e = Math.floor(self.performance.now() - this.pageLoadT);
    this.offlinePreviewT = e;
    this._commit(p.OFFLINE_PROCESS_STAGES.OFFLINE_PREVIEW, e);
    this._startProcessingStage();
  }
  logProcessComplete() {
    var e = this;
    return (0, i.default)(function* () {
      var t;
      if (e._currentStage === p.OFFLINE_PROCESS_STAGES.PROCESS_COMPLETE || e._currentStage === p.OFFLINE_PROCESS_STAGES.PROCESS_INTERRUPTED) {
        return;
      }
      e._currentStage = p.OFFLINE_PROCESS_STAGES.PROCESS_COMPLETE;
      if (!((t = e._processingStageTimer) === null || t === undefined)) {
        t.cancel();
      }
      e._processingStageTimer = null;
      const n = (0, f.countDays)(e._oldestStanzaTs);
      yield (0, d.setRecentMailboxAgeDays)(n);
      const r = Math.floor(self.performance.now() - e.pageLoadT);
      e.processCompleteT = r;
      e._printProcessingPerf(n);
      e._commit(p.OFFLINE_PROCESS_STAGES.PROCESS_COMPLETE, r);
      (0, c.setLastPushCompleteTimestamp)((0, s.unixTimeMs)());
    })();
  }
  logProcessInterrupted() {
    var e;
    if (this._currentStage == null || this._currentStage === p.OFFLINE_PROCESS_STAGES.PROCESS_COMPLETE || this._currentStage === p.OFFLINE_PROCESS_STAGES.PROCESS_INTERRUPTED) {
      return;
    }
    this._currentStage = p.OFFLINE_PROCESS_STAGES.PROCESS_INTERRUPTED;
    if (!((e = this._processingStageTimer) === null || e === undefined)) {
      e.cancel();
    }
    this._processingStageTimer = null;
    const t = Math.floor(self.performance.now() - this.pageLoadT);
    this.processCompleteT = t;
    this._printProcessingPerf();
    this._commit(p.OFFLINE_PROCESS_STAGES.PROCESS_INTERRUPTED, t);
  }
}();
exports.WorkerOfflineResumeReporter = g;