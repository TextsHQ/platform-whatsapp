var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OfflineMessageHandlerImpl = exports.OfflineMessageHandler = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./685639.js");
var o = require("./780549.js");
var s = r(require("./254028.js"));
var l = require("./724469.js");
var u = require("./538222.js");
var c = require("./674899.js");
var d = r(require("../vendor/441143.js"));
const p = 200;
const f = 10;
const _ = 200;
const g = new Map([[0, 200], [1, 100], [2, 50], [3, 10]]);
const m = function () {
  let e = null;
  return (t, n) => {
    const {
      version: r,
      multiplier: i
    } = (0, l.getOfflineDynamicBatchConfig)();
    const a = e;
    e = t;
    switch (r) {
      case "mapbyretry":
        return function (e) {
          if (e === 0) {
            return _;
          }
          if (e > 3) {
            return 10;
          }
          const t = g.get(e);
          (0, d.default)(t != null, `[getBatchSizeByRetryCount] unexpected value for batch size with retryCount ${e}`);
          if (t != null) {
            return t;
          } else {
            return _;
          }
        }(t);
      case "progressive":
        return function (e, t, n) {
          var r;
          let i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0.2;
          if (e === 0) {
            return _;
          }
          if (e > 3) {
            return f;
          }
          let a = null;
          if (e - (t != null ? t : 0) == 0) {
            var o;
            a = Math.floor(n * i) + n;
            if (((o = g.get(e - 1)) !== null && o !== undefined ? o : _) <= a) {
              a = n;
            }
          } else {
            a = g.get(e);
          }
          (0, d.default)(a != null, `[getBatchSizeByProgress] unexpected value for batch size with retryCount ${e}, prevRetryCount ${t != null ? t : "N/A"}, currentSize ${n}`);
          if ((r = a) !== null && r !== undefined) {
            return r;
          } else {
            return _;
          }
        }(t, a, n, i);
      case "v1":
        return function (e, t) {
          const n = 2;
          if (e === 0) {
            return Math.min(t * n, _);
          }
          if (e >= 1) {
            return Math.max(Math.floor(t / n), f);
          }
          return t;
        }(t, n);
      default:
        return _;
    }
  };
}();
class h {
  constructor() {
    this._offlineManagerInitialized = false;
    this._pendingMessageCount = 0;
    this._isPendingPrevBatch = false;
    this._isPendingCurrentBatch = false;
    this._currentBatchSize = p;
    this._runningMaxOfflineRetry = 0;
    this._shiftTimer = null;
    this._isOfflineDynamicBatchSizeEnabled = false;
  }
  initState(e) {
    if (this._offlineResumeManager != null) {
      __LOG__(4, undefined, new Error())`[offline-resume] initState called more than once`;
    }
    this._offlineResumeManager = e.createBlockingStageManager();
    this._createNonblockingStageManager = e.createNonblockingStageManager;
  }
  setOfflineMessagePreviewCounter(e) {
    if ((0, l.isResetStateAfterIBPreviewEnabled)()) {
      this._resetBatchState();
    }
    this._isOfflineDynamicBatchSizeEnabled = (0, l.isOfflineDynamicBatchSizeEnabled)();
    if (this._createNonblockingStageManager != null) {
      const t = this._createNonblockingStageManager;
      if ((0, l.isNonBlockingResumeFromOpenTabEnabled)() && o.Cmd.isMainStreamReadyMd && this.isResumeFromRestartComplete()) {
        if (y(e.message)) {
          __LOG__(2)`[resume-from-open-tab][non-blocking] resume from current state of app`;
          this._offlineResumeManager = t({
            mainScreenLoaded: true
          });
        } else {
          __LOG__(2)`[resume-from-open-tab] restart client due to exceed the LIMIT, message: ${e.message}`;
          (0, u.refreshWindow)();
        }
      } else if (!(this._offlineManagerInitialized || this.isResumeFromRestartComplete() || !y(e.message))) {
        this._offlineResumeManager = t();
      }
    }
    this._offlineManagerInitialized = true;
    this._offlineResumeManager.processOfflinePreview(e);
  }
  setOfflineThreadMeta(e) {
    this._offlineResumeManager.processOfflineThreadMeta(e);
  }
  processMessageDecryptResult(e) {
    this._offlineResumeManager.processDecryptResult(e);
    this._pendingMessageCount -= 1;
    this._maybeRequestMoreStanza();
  }
  addOfflinePendingMessage() {
    if (!this.isResumeFromRestartComplete()) {
      this._pendingMessageCount += 1;
    }
  }
  newOfflineStanza(e, t, n) {
    this._isPendingPrevBatch = false;
    if (this._isOfflineDynamicBatchSizeEnabled) {
      this._runningMaxOfflineRetry = Math.max(this._runningMaxOfflineRetry, n);
      this._maybeRequestMoreStanza();
    } else if (this._endBatchCheck == null) {
      this._endBatchCheck = self.setTimeout(() => {
        this._maybeRequestMoreStanza();
        this._endBatchCheck = null;
        __LOG__(2)`[offline-resume][adaptive] _endBatchCheck: done`;
      }, 0);
    }
    return this._offlineResumeManager.newOfflineStanza(e, t, n);
  }
  offlineStanzaReceivedAfterComplete() {
    return this._offlineResumeManager.offlineStanzaReceivedAfterComplete();
  }
  getOfflineDeliveryProgress() {
    return this._offlineResumeManager.getOfflineDeliveryProgress();
  }
  getOfflineMessageCount() {
    return Math.max(this._offlineResumeManager.offlineMessagePreviewCounter, 0);
  }
  isResumeOnSocketDisconnectInProgress() {
    return this._offlineResumeManager.isResumeOnSocketDisconnectInProgress();
  }
  isResumeFromRestartComplete() {
    return this._offlineResumeManager.isResumeFromRestartComplete();
  }
  getHasMessagesToDownload() {
    return this._offlineResumeManager.getHasMessagesToDownload();
  }
  getFinishedDownloading() {
    return this.getOfflineDeliveryProgress() === 100;
  }
  setOfflineSessionComplete(e) {
    return this._offlineResumeManager.processOfflineSessionComplete(e);
  }
  setOfflinePrioritySessionComplete() {
    return this._offlineResumeManager.processOfflineSessionComplete(0, true);
  }
  shouldUseOfflineResumeScreen() {
    return this._offlineResumeManager.shouldUseOfflineResumeScreen();
  }
  getResumeUIProgressBarType() {
    return this._offlineResumeManager.getResumeUIProgressBarType();
  }
  _resetBatchState() {
    this._isPendingPrevBatch = false;
    this._isPendingCurrentBatch = false;
  }
  _sendBatchRequestIBDebounced(e) {
    if (this._shiftTimer == null) {
      this._shiftTimer = new a.ShiftTimer(e => {
        __LOG__(2)`[offline-resume][adaptive][debounced] _maybeRequestMoreStanza: request next batch, pending message ${this._pendingMessageCount}`;
        (0, c.sendBatchRequestIb)(e);
        this._runningMaxOfflineRetry = 0;
        this._isPendingCurrentBatch = false;
        this._isPendingPrevBatch = true;
      });
      this._shiftTimer.onOrBefore(0, e);
    } else {
      this._shiftTimer.debounce(100, e);
    }
  }
  _maybeRequestMoreStanza() {
    var e = this;
    return (0, i.default)(function* () {
      if (e.isResumeFromRestartComplete() || e._isPendingPrevBatch || e._isPendingCurrentBatch) {
        if (!e.isResumeFromRestartComplete()) {
          __LOG__(2)`[offline-resume][adaptive] _maybeRequestMoreStanza: skip, prevPending: ${e._isPendingPrevBatch}, currentPending: ${e._isPendingCurrentBatch}, complete: ${e.isResumeFromRestartComplete()}`;
        }
      } else if (e._pendingMessageCount <= p) {
        __LOG__(2)`[offline-resume][adaptive] _maybeRequestMoreStanza: start request next batch`;
        e._isPendingCurrentBatch = true;
        if ((0, l.isLazyPullEnabled)()) {
          yield (0, s.default)();
        }
        let t = p;
        if (e._isOfflineDynamicBatchSizeEnabled) {
          t = m(e._runningMaxOfflineRetry, e._currentBatchSize);
          e._currentBatchSize = t;
          e._sendBatchRequestIBDebounced(t);
        } else {
          (0, c.sendBatchRequestIb)(p);
          e._isPendingCurrentBatch = false;
          e._isPendingPrevBatch = true;
          __LOG__(2)`[offline-resume][adaptive] _maybeRequestMoreStanza: request next batch, pending message ${e._pendingMessageCount}`;
        }
      }
    })();
  }
}
function y(e) {
  return !(e >= (0, l.getNonBlockingOfflineResumeMaxMessageCount)());
}
exports.OfflineMessageHandlerImpl = h;
const E = new h();
exports.OfflineMessageHandler = E;