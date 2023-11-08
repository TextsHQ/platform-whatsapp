Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHistorySyncProgress = function () {
  if (d == null) {
    if ((0, r.getABPropConfigValue)("web_history_sync_ui")) {
      const e = new ((0, o.defineModel)(s))();
      e.init();
      d = e;
    } else {
      d = new ((0, o.defineModel)(c))();
    }
  }
  return d;
};
var a = require("../app/632157.js");
var r = require("../app/287461.js");
var o = require("../app/481173.js");
var l = require("../app/382849.js");
var i = require("../app/157942.js");
const u = 1200;
class s extends o.BaseModel {
  constructor() {
    super(...arguments);
    this._inProgress = (0, l.prop)(false);
    this._progress = (0, l.prop)(null);
    this._remainingPausedSeconds = (0, l.prop)((0, i.getHistorySyncRemainingPausedSeconds)());
    this._fakePausedCompletionTimeout = (0, l.prop)();
    this._progressIncrementTimeout = (0, l.prop)();
    this._lastUpdateSeconds = (0, l.prop)((0, a.unixTime)());
    this._fakeProgress = (0, l.prop)(0);
    this.paused = (0, l.derived)(function () {
      return this._remainingPausedSeconds != null;
    }, ["_remainingPausedSeconds"]);
    this.progress = (0, l.derived)(function () {
      if (this._progress == null) {
        return null;
      } else {
        return Math.min(this._progress + this._fakeProgress, 100);
      }
    }, ["_progress", "_fakeProgress"]);
    this.inProgress = (0, l.derived)(function () {
      return this._inProgress && (this._progress == null || this._progress < 100) && (this._remainingPausedSeconds == null || this._remainingPausedSeconds > 0);
    }, ["_progress", "_inProgress", "_remainingPausedSeconds"]);
  }
  init() {
    if (this._remainingPausedSeconds != null && this._remainingPausedSeconds > 0) {
      this.pausedExpiryCheckpoint(0);
    }
  }
  setPaused(e) {
    if (e) {
      if (this.paused) {
        return;
      }
      (0, i.setHistorySyncRemainingPausedSeconds)(u);
      this._remainingPausedSeconds = u;
      return void self.setTimeout(() => this.pausedExpiryCheckpoint(30), 30000);
    }
    (0, i.setHistorySyncRemainingPausedSeconds)(null);
    this._remainingPausedSeconds = null;
  }
  pausedExpiryCheckpoint(e) {
    self.clearTimeout(this._fakePausedCompletionTimeout);
    const t = this._remainingPausedSeconds;
    if (t == null) {
      return;
    }
    const n = t - e;
    (0, i.setHistorySyncRemainingPausedSeconds)(n);
    this._remainingPausedSeconds = n;
    if (n <= 0) {
      __LOG__(4, undefined, new Error())`[history sync] pausedExpiryCheckpoint: waited for at least ${u}s in paused state, removing progress UI`;
    } else {
      self.setTimeout(() => this.pausedExpiryCheckpoint(30), 30000);
    }
  }
  setProgress(e) {
    var t;
    const n = (t = this._progress) !== null && t !== undefined ? t : 0;
    this._progress = e;
    if (e <= n) {
      return;
    }
    this._fakeProgress = 0;
    self.clearTimeout(this._progressIncrementTimeout);
    const r = (0, a.unixTime)();
    if (e < 100) {
      const t = r - this._lastUpdateSeconds;
      const a = e - n;
      this._incrementFakeProgressByOne(Math.max(t / a, 1), Math.min(a, 100 - e));
    }
    this._lastUpdateSeconds = r;
  }
  setInProgress(e) {
    this._inProgress = e;
  }
  _incrementFakeProgressByOne(e, t) {
    if (this._progressIncrementTimeout != null) {
      self.clearTimeout(this._progressIncrementTimeout);
    }
    if (!(!this.inProgress || this._fakeProgress + 1 >= t)) {
      this._progressIncrementTimeout = self.setTimeout(() => {
        this._fakeProgress += 1;
        this._incrementFakeProgressByOne(e, t);
      }, e * 1000);
    }
  }
}
s.Proxy = "historySyncProgress";
class c extends o.BaseModel {
  constructor() {
    super(...arguments);
    this.paused = (0, l.derived)(function () {
      return false;
    });
    this.progress = (0, l.derived)(function () {
      return null;
    });
    this.inProgress = (0, l.derived)(function () {
      return false;
    });
  }
  setPaused() {}
  setProgress() {}
  setInProgress() {}
}
c.Proxy = "historySyncProgress";
let d = null;