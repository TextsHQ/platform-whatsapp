Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UIBusyTasks = exports.IdleEnum = exports.IdleCallbackTasks = undefined;
var r = require("./685639.js");
var i = require("./881839.js");
const a = require("../vendor/76672.js").Mirrored(["IDLE_CALLBACK", "UI_BUSY"]);
exports.IdleEnum = a;
class o {
  constructor(e) {
    this.busyMap = new Map();
    this.busyId = 0;
    this._clearBusyMap = () => {
      this.busyMap.clear();
    };
    this._taskMap = new Map();
    this.taskId = 0;
    this.runIdleLoop = () => {
      if (this.idleType === a.IDLE_CALLBACK) {
        this.idleCallbackId = (0, i.requestIdleCallback)(this._ricOnIdle);
      } else if (this.isIdle()) {
        this._uiBusyOnIdle();
      }
    };
    this._ricOnIdle = e => {
      let t;
      const n = this._taskMap.entries();
      for (; (t = n.next()) && !t.done;) {
        const [n, r] = t.value;
        r();
        this._taskMap.delete(n);
        if (e.timeRemaining() <= 0) {
          break;
        }
      }
      if (this._taskMap.size > 0) {
        this.runIdleLoop();
      }
    };
    this.idleType = e;
  }
  setBusy(e) {
    let t = e;
    if (t != null && this.busyMap.has(t)) {
      this.busyMap.set(t, this.busyMap.get(t) + 1);
    } else {
      t = ++this.busyId;
      this.busyMap.set(t, 1);
    }
    if (!this.busyTimer) {
      this.busyTimer = new r.ShiftTimer(this._clearBusyMap);
    }
    this.busyTimer.debounce(1000);
    return t;
  }
  decBusy(e) {
    if (e == null) {
      return;
    }
    const t = this.busyMap.get(e);
    if (!(t == null || t === 0)) {
      if (t === 1) {
        this.clearBusy(e);
      } else {
        this.busyMap.set(e, t - 1);
      }
    }
  }
  clearBusy(e) {
    if (this.busyMap.get(e) != null) {
      this.busyMap.delete(e);
    }
    if (this.isIdle()) {
      this.busyTimer.cancel();
      if (this._taskMap.size > 0) {
        self.setTimeout(this.runIdleLoop, 0);
      }
    }
  }
  isIdle() {
    return this.busyMap.size === 0;
  }
  isBusy() {
    return this.busyMap.size > 0;
  }
  cancelIdleLoop() {
    if (this.idleType === a.IDLE_CALLBACK && this.idleCallbackId != null) {
      (0, i.cancelIdleCallback)(this.idleCallbackId);
    }
  }
  _uiBusyOnIdle() {
    let e;
    const t = this._taskMap.entries();
    for (; (e = t.next()) && !e.done;) {
      const [t, n] = e.value;
      n();
      this._taskMap.delete(t);
      if (this.isBusy()) {
        break;
      }
    }
  }
  enqueue(e) {
    this._taskMap.set(++this.taskId, e);
    if (this._taskMap.size === 1) {
      this.runIdleLoop();
    }
    return this.taskId;
  }
  dequeue(e) {
    const t = this._taskMap.delete(e);
    if (t && this._taskMap.size === 0) {
      this.cancelIdleLoop();
    }
    return t;
  }
  isInQueue(e) {
    return this._taskMap.has(e);
  }
}
const s = new o(a.UI_BUSY);
exports.UIBusyTasks = s;
const l = new o(a.IDLE_CALLBACK);
exports.IdleCallbackTasks = l;