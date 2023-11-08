Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WamEvent = undefined;
var r = require("./508247.js");
var i = require("./330964.js");
var a = require("./413950.js");
var o = require("./623703.js");
let s = 1;
class l extends o.TypeHash {
  constructor() {
    super();
    this.instanceId = s++;
    this.eventTime = Date.now();
    this.commitTime = undefined;
    this.startMarkers = {};
    if (r.USER_TIMINGS && self.performance !== undefined && self.performance.mark) {
      this.startMark = `${this.$className} ${this.instanceId}: Start`;
      self.performance.mark(this.startMark);
    }
  }
  commit() {
    const e = (0, a.getWamRuntime)();
    if (e) {
      e.commit(this, false);
    } else {
      (0, i.queueEvent)(this, false);
    }
  }
  commitAndWaitForFlush() {
    let e = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
    const t = (0, a.getWamRuntime)();
    if (t == null) {
      (0, i.queueEvent)(this, e);
      return Promise.resolve();
    } else {
      return t.commit(this, e);
    }
  }
  setTime(e) {
    this.eventTime = e || Date.now();
  }
}
exports.WamEvent = l;