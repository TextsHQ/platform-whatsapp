Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WamManager = undefined;
var r = require("./838383.js");
class i {
  constructor(e) {
    this._sequenceNumbers = new Map();
    this._options = e;
  }
  _setSequenceNumber(e, t) {
    if (t == null || t === 0 || t < 0) {
      this._sequenceNumbers.set(e, "uninitialized");
    } else {
      this._sequenceNumbers.set(e, t);
    }
  }
  getSequenceNumber__INTERNAL() {
    return this._sequenceNumbers;
  }
  initializeForChannel(e, t) {
    t.forEach((t, n) => {
      var r;
      if (e === "regular" && n === "regular") {
        this._setSequenceNumber(n, t);
      } else if (e === "private" && n !== "regular") {
        this._setSequenceNumber(n, t);
      } else if (e !== "private" || ((r = this._options) === null || r === undefined ? undefined : r.multipleSequences)) {
        var i;
        __LOG__(4, undefined, new Error())`SequenceNumberGenerator::initializeForChannel: Incorrect combination of parameters: ${e} ${n} ${(i = this._options) === null || i === undefined ? undefined : i.multipleSequences}`;
      } else {
        this._setSequenceNumber(n, t);
      }
    });
  }
  next(e) {
    const t = this._sequenceNumbers.get(e);
    let n;
    if (t == null || t === "uninitialized") {
      n = 1;
    } else {
      n = t + 1;
      if (n > 65535) {
        n = 1;
      }
    }
    this._sequenceNumbers.set(e, n);
    return n;
  }
}
exports.WamManager = class {
  constructor() {
    this._wamInstances = new Map();
    this._sequenceNumberGenerator = null;
  }
  getWamInstance(e) {
    let t = this._wamInstances.get(e);
    if (!t) {
      t = new r.Wam(e);
      this._wamInstances.set(e, t);
    }
    return t;
  }
  initialize(e, t, n, r, a) {
    const o = this.getWamInstance(e);
    if (o.isInitialized()) {
      return void __LOG__(3)`WAM instance for channel ${e} has already been initialized`;
    }
    if (this._sequenceNumberGenerator == null) {
      this._sequenceNumberGenerator = new i(a);
    }
    const s = this._sequenceNumberGenerator;
    this._sequenceNumberGenerator.initializeForChannel(e, n);
    o.initialize(t, e => s.next(e), r, a);
  }
  deinitialize() {
    this._wamInstances.forEach((e, t) => {
      if (e.isInitialized()) {
        __LOG__(2)`WamManager: Deinitializing WAM Channel ${t}`;
        e.deinitialize();
      }
    });
    this._sequenceNumberGenerator = null;
  }
  enqueueEvent(e, t, n, r, i, a, o) {
    this.getWamInstance(e).enqueueEvent(t, n, r, i, a, o);
  }
  enqueueAttributesUpdate(e, t) {
    this.getWamInstance(e).enqueueAttributesUpdate(t);
  }
  updatePrivateStatsIds(e) {
    this.getWamInstance("private").updatePrivateStatsIds(e);
  }
  forceFlushBuffers() {
    this._wamInstances.forEach(e => {
      e.forceSerializePending();
    });
  }
  rotateBuffers() {
    this._wamInstances.forEach(e => {
      e.finalizeBuffers.forceRunNow();
    });
  }
  getSequenceNumberGenerator__INTERNAL() {
    return this._sequenceNumberGenerator;
  }
};