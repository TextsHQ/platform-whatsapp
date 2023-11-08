var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OfflinePendingDeviceCache = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./250281.js");
var o = require("./652204.js");
var s = require("./685639.js");
var l = require("./853670.js");
const u = new class {
  constructor() {
    this.pendingDeviceCache = new Set();
    this.pendingAcks = [];
    this.snapshotTimer = new s.ShiftTimer(() => {
      this.createSnapshot();
    });
    this.checkpointQueue = new o.PromiseQueue();
  }
  addOfflinePendingDevice(e, t) {
    this.pendingDeviceCache.add(e);
    if (t) {
      this.pendingAcks.push(t);
    }
    if (!this.snapshotTimer.isScheduled()) {
      __LOG__(2)`[offline-resume][device-cache]: creating snapshot: schedule in ${3000} ms`;
      this.snapshotTimer.onOrAfter(3000);
    }
  }
  createSnapshot() {
    if (this.snapshotTimer.isScheduled()) {
      this.snapshotTimer.cancel();
    }
    const e = Array.from(this.pendingDeviceCache);
    const t = this.pendingAcks;
    __LOG__(2)`[offline-resume][device-cache]: creating snapshot for pending devices ${e.join(",")}`;
    this.checkpointQueue.enqueue((0, i.default)(function* () {
      yield (0, l.addUserToPendingDeviceSync)(e);
      t.forEach(e => (0, a.deprecatedCastStanza)(e));
      (0, a.cancelDeadSocketTimer)();
    }));
    this.pendingDeviceCache = new Set();
    this.pendingAcks = [];
  }
}();
exports.OfflinePendingDeviceCache = u;