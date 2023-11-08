var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OfflineResumeReporter = undefined;
exports.countDays = v;
exports.roundUp = S;
var i = r(require("../vendor/348926.js"));
var a = require("./390934.js");
var o = require("./15842.js");
var s = require("./632157.js");
var l = require("./287461.js");
var u = require("./166366.js");
var c = require("./457704.js");
var d = require("./316348.js");
var p = require("./555622.js");
var f = require("./757453.js");
var _ = require("./673168.js");
var g = require("./932489.js");
var m = require("./689732.js");
const h = require("../vendor/76672.js")({
  ResumeFromRestart: "ResumeFromRestart",
  ResumeFromOpentab: "ResumeFromOpentab"
});
class y {
  constructor(e) {
    this._mode = e;
  }
  start() {
    if ((0, l.getABPropConfigValue)("web_offline_resume_qpl_enabled")) {
      this.drop();
      this._qplEvent = p.QPL.markerStart(d.QuickLogMarkerId.OFFLINE_RESUME, {
        annotations: {
          string: {
            mode: h.getName(this._mode)
          }
        }
      });
    }
  }
  end() {
    var e;
    if (!((e = this._qplEvent) === null || e === undefined)) {
      e.end(o.QuickLogActionType.SUCCESS);
    }
  }
  drop() {
    var e;
    if (!((e = this._qplEvent) === null || e === undefined)) {
      e.drop();
    }
    this._qplEvent = undefined;
  }
  _addPoint(e, t) {
    var n;
    const r = t != null ? {
      data: t
    } : {};
    if (!((n = this._qplEvent) === null || n === undefined)) {
      n.addPoint(e, r);
    }
  }
  markOfflinePreviewReceived() {
    this._addPoint("offlinePreviewReceived");
  }
  markMainScreenLoad() {
    this._addPoint("mainScreenLoad");
  }
  markSocketConnect() {
    this._addPoint("socketConnect");
  }
  setAnnotations(e) {
    var t;
    if (!((t = this._qplEvent) === null || t === undefined)) {
      t.annotate({
        int: {
          messageCount: e.messageCount,
          receiptCount: e.receiptCount,
          notificationCount: e.notificationCount,
          sizeBytes: e.sizeBytes,
          chatThreadCount: e.chatThreadCount,
          decryptErrorCount: e.decryptErrorCount
        }
      });
    }
  }
}
class E {
  constructor(e) {
    this._sessionId = this._generateOfflineSessionId();
    this._offlineStartT = self.performance.now();
    this._resuemMode = e;
  }
  _generateOfflineSessionId() {
    return `${(0, a.randomHex)(4)}${(0, s.unixTimeWithoutClockSkewCorrection)()}`;
  }
  _commitOfflineStage(e) {
    const t = new u.OfflineResumeStageWamEvent({
      offlineSessionId: this._sessionId,
      offlineResumeMode: this._resuemMode === h.ResumeFromOpentab ? g.OFFLINE_RESUME_MODES.RESUME_FROM_OPEN_TAB : g.OFFLINE_RESUME_MODES.RESUME_FROM_RESTART,
      offlineStageTimestampMs: Math.floor(self.performance.now() - this._offlineStartT),
      currentOfflineStage: e
    });
    this._addOfflineMetadata(t);
    t.commit();
  }
  logOfflineStart() {
    this._offlineStartT = self.performance.now();
  }
  logSocketConnect() {
    this._commitOfflineStage(m.OFFLINE_RESUME_STAGES.SOCKET_CONNECT);
  }
  logProcessComplete() {
    this._commitOfflineStage(m.OFFLINE_RESUME_STAGES.PROCESS_COMPLETE);
  }
  logScreenLoad() {
    this._commitOfflineStage(m.OFFLINE_RESUME_STAGES.SCREEN_LOAD);
  }
  logOfflinePreview() {
    this._commitOfflineStage(m.OFFLINE_RESUME_STAGES.OFFLINE_PREVIEW);
  }
  logOfflineCount(e) {
    this._offlineMessageCount = (this._offlineMessageCount || 0) + e.message;
    this._offlineReceiptCount = (this._offlineReceiptCount || 0) + e.receipt;
    this._offlineNotificationCount = (this._offlineNotificationCount || 0) + e.notification;
  }
  logOfflineDecryptionErrorCount(e) {
    this._offlineDecryptErrorCount = e;
  }
  logOfflineChatThreadCount(e) {
    this._chatThreadCount = e;
  }
  logOldestStanzaTime(e) {
    if (this._oldestStanzaTs == null || this._oldestStanzaTs > e) {
      this._oldestStanzaTs = e;
    }
  }
  setLastPushCompleteTimestamp() {
    this._lastPushCompleteTimestampMs = (0, f.getLastPushCompleteTimestamp)();
  }
  _addOfflineMetadata(e) {
    if (this._offlineMessageCount != null) {
      e.offlineMessageCount = S(this._offlineMessageCount, 10);
    }
    if (this._offlineReceiptCount != null) {
      e.offlineReceiptCount = S(this._offlineReceiptCount, 10);
    }
    if (this._offlineNotificationCount != null) {
      e.offlineNotificationCount = S(this._offlineNotificationCount, 10);
    }
    if (this._oldestStanzaTs != null) {
      e.mailboxAge = v(this._oldestStanzaTs);
    }
    if (this._offlineDecryptErrorCount != null) {
      e.offlineDecryptErrorCount = this._offlineDecryptErrorCount;
    }
    if (this._chatThreadCount != null) {
      e.chatThreadCount = S(this._chatThreadCount, 10);
    }
    if (this._lastPushCompleteTimestampMs != null && e.currentOfflineStage === m.OFFLINE_RESUME_STAGES.SOCKET_CONNECT) {
      e.lastPushTimestampMs = this._lastPushCompleteTimestampMs;
      (0, f.clearLastPushCompleteTimestamp)();
      this._lastPushCompleteTimestampMs = null;
    }
  }
}
function S(e, t) {
  return Math.round(e / t) * t;
}
function v(e) {
  if (e === 0) {
    return 0;
  }
  const t = (0, s.unixTime)() - e;
  return Math.round(t / s.DAY_SECONDS);
}
const T = new class {
  constructor() {
    this._initEvent(h.ResumeFromRestart);
  }
  _initEvent(e) {
    this.isInitialSync = false;
    this.oldestStanzaTs = 0;
    this.offlineResume = new c.OfflineResumeWamEvent();
    this.offlineResume.offlineMessageCount = 0;
    this.offlineResume.offlineReceiptCount = 0;
    this.offlineResume.offlineNotificationCount = 0;
    this.offlineResume.offlineDecryptErrorCount = 0;
    this.offlineResume.offlineSizeBytes = 0;
    this.offlineResume.chatThreadCount = 0;
    this.offlineResume.isOfflineCompleteMissed = false;
    this.qpl = new y(e);
    this.offlineStage = new E(e);
  }
  logOldestStanzaTime(e) {
    this.offlineStage.logOldestStanzaTime(e);
    if (this.offlineResume != null && (this.oldestStanzaTs === 0 || this.oldestStanzaTs > e)) {
      this.oldestStanzaTs = e;
    }
  }
  logOfflineCount(e) {
    this.offlineStage.logOfflineCount(e);
    this.offlineStage.logOfflinePreview();
    if (this.offlineResume) {
      this.offlineResume.offlineMessageCount += e.message;
      this.offlineResume.offlineReceiptCount += e.receipt;
      this.offlineResume.offlineNotificationCount += e.notification;
    }
  }
  logOfflineDecryptionErrorCount(e) {
    this.offlineStage.logOfflineDecryptionErrorCount(e);
    if (this.offlineResume) {
      this.offlineResume.offlineDecryptErrorCount = e;
    }
  }
  logAddOfflineSizeBytes(e) {
    if (this.offlineResume) {
      this.offlineResume.offlineSizeBytes += e;
    }
  }
  logOfflineChatThreadCount(e) {
    this.offlineStage.logOfflineChatThreadCount(e);
    const t = S(e, 10);
    if (this.offlineResume) {
      this.offlineResume.chatThreadCount = t;
    }
  }
  _logPerformanceT(e) {
    const t = Math.floor(self.performance.now());
    if (this.offlineResume != null) {
      this.offlineResume[e] = t;
    }
  }
  logLastStanzaT() {
    var e;
    if (((e = this.offlineResume) === null || e === undefined ? undefined : e.lastStanzaT) == null) {
      this._logPerformanceT("lastStanzaT");
      if (!this.isInitialSync) {
        this.offlineStage.logProcessComplete();
      }
    }
  }
  logMainScreenLoadT() {
    this._logPerformanceT("mainScreenLoadT");
    this.qpl.markMainScreenLoad();
    if (!this.isInitialSync) {
      this.offlineStage.logScreenLoad();
    }
  }
  logOfflinePreviewT() {
    this._logPerformanceT("offlinePreviewT");
    this.qpl.markOfflinePreviewReceived();
  }
  logOfflineStartT() {
    this.qpl.start();
    this._logPerformanceT("pageLoadT");
    this.offlineStage.logOfflineStart();
    if (window.document && this.offlineResume) {
      this.offlineResume.isResumeInForeground = !document.hidden;
      document.addEventListener("visibilitychange", this.logResumeInBackground);
    }
  }
  logSocketConnectT() {
    this._logPerformanceT("socketConnectT");
    this.qpl.markSocketConnect();
    if (!this.isInitialSync) {
      this.offlineStage.logSocketConnect();
    }
  }
  logMissedOfflineComplete() {
    if (this.offlineResume) {
      this.offlineResume.isOfflineCompleteMissed = true;
    }
  }
  setIsInitialSync() {
    this.isInitialSync = true;
  }
  logResumeInBackground() {
    if (this.offlineResume && document.hidden) {
      this.offlineResume.isResumeInForeground = false;
    }
  }
  setLastPushCompleteTimestamp() {
    return this.offlineStage.setLastPushCompleteTimestamp();
  }
  commit() {
    var e = this;
    return (0, i.default)(function* () {
      const t = e.offlineResume;
      if (t) {
        t.offlineSizeBytes = S(t.offlineSizeBytes, 1000);
        t.offlineMessageCount = S(t.offlineMessageCount, 10);
        t.offlineReceiptCount = S(t.offlineReceiptCount, 10);
        t.offlineNotificationCount = S(t.offlineNotificationCount, 10);
        t.mailboxAge = v(e.oldestStanzaTs);
        yield (0, _.setRecentMailboxAgeDays)(t.mailboxAge);
        __LOG__(2)`[offline-resume] offline resume completes
============== offline resume perf ================
message: ${t.offlineMessageCount}
receipt: ${t.offlineReceiptCount}
notification: ${t.offlineNotificationCount}
chatThreadCount: ${t.chatThreadCount}
offlineSizeBytes: ${t.offlineSizeBytes}
decryptError: ${t.offlineDecryptErrorCount}
lastStanzaT: ${t.lastStanzaT}
pageLoadT: ${t.pageLoadT}
connectionT: ${t.socketConnectT}
offlinePreviewT: ${t.offlinePreviewT}
screenLoadT: ${t.mainScreenLoadT}
isResumeInForeground: ${t.isResumeInForeground}
mailboxAge: ${t.mailboxAge}
===================================================`;
        if (e.isInitialSync) {
          e.qpl.drop();
        } else {
          t.commit();
          e.qpl.setAnnotations({
            messageCount: t.offlineMessageCount,
            receiptCount: t.offlineReceiptCount,
            notificationCount: t.offlineNotificationCount,
            chatThreadCount: t.chatThreadCount,
            decryptErrorCount: t.offlineDecryptErrorCount,
            sizeBytes: t.offlineSizeBytes
          });
          e.qpl.end();
        }
        e.offlineResume = null;
        if (window.document) {
          document.removeEventListener("visibilitychange", e.logResumeInBackground);
        }
      }
    })();
  }
  resetEvent() {
    if (this.offlineResume == null) {
      this._initEvent(h.ResumeFromOpentab);
      this.logOfflineStartT();
    }
  }
}();
exports.OfflineResumeReporter = T;