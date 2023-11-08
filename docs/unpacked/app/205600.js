Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WamContext = undefined;
var r = require("./417405.js");
var i = require("./904704.js");
var a = require("./901032.js");
var o = require("./404021.js");
var s = require("./184274.js");
var l = require("./359151.js");
exports.WamContext = class {
  constructor(e, t, n) {
    this.bufferKey = e;
    this.buffer = new i.Binary(undefined, true);
    this.buffer.writeString("WAM");
    this.buffer.writeUint8(o.WAM_PROTOCOL_VERSION);
    this.buffer.writeUint8(1);
    this.buffer.writeUint16(t);
    if (this.bufferKey === "regular") {
      this.buffer.writeUint8(0);
    } else {
      this.buffer.writeUint8(2);
    }
    this.eventsWritten = 0;
    this.prevGlobals = {};
    this.dirtyGlobals = {};
    this.unsavedPortion = null;
    this.saveKey = String(Math.random() * 1000000000 | 0);
    this._setAll(n);
  }
  size() {
    return this.buffer.size();
  }
  set(e, t) {
    this.dirtyGlobals[String(e)] = t;
    if (this.unsavedPortion) {
      this.unsavedPortion.set(e, t);
    }
  }
  write(e) {
    const t = this.buffer;
    this.set(47, e.commitTime);
    this.set(3433, e.sequenceNumber);
    if (e.wamChannel === "private") {
      this.set(6005, (0, l.getLatestPrivateStatsIdValueFromKey)(this.bufferKey).toString());
    }
    this._flushGlobals();
    const n = e.all;
    const r = Object.keys(n);
    let i = -1;
    let o = false;
    for (let e = 0; e < r.length; e++) {
      if (n[r[e]] != null) {
        i = e;
        o = true;
      }
    }
    (0, s.writeEvent)(t, e.id, -e.weight, o);
    for (let l = 0; l <= i; l++) {
      const u = r[l];
      const {
        id: c,
        type: d
      } = a.metrics.getEvent(e.$className, u);
      let p = n[u];
      if (p != null) {
        if (typeof p == "boolean") {
          p = p ? 1 : 0;
        }
        o = l < i;
        if (d === "timer" && p > 2147483647) {
          __LOG__(4, undefined, new Error(), true)`wam: invalid value for timer field ${e.$className}.${u}`;
          SEND_LOGS("wam-event-validation-error");
        } else {
          (0, s.writeField)(t, c, p, o);
        }
      }
    }
    this.eventsWritten++;
    if (this.unsavedPortion) {
      this.unsavedPortion.write(e);
    }
  }
  stringBuffer() {
    if (this.eventsWritten > 0) {
      return (0, r.encodeB64)(this.buffer.peek(e => e.readByteArray()));
    } else {
      return "";
    }
  }
  getBuffer() {
    return this.buffer;
  }
  _setAll(e) {
    const t = this.bufferKey === "regular" ? "regular" : "private";
    for (const n in e) {
      const r = e[n];
      const i = a.metrics.getGlobal(n).channels.includes(t);
      if (r !== undefined && i) {
        this.set(a.metrics.getGlobal(n).id, r);
      }
    }
  }
  _flushGlobals() {
    const e = this.dirtyGlobals;
    const t = this.prevGlobals;
    for (const n in e) {
      let r = e[n];
      if (typeof r == "boolean") {
        r = r ? 1 : 0;
      } else if (r === undefined) {
        r = null;
      } else if (Number.isNaN(r)) {
        continue;
      }
      if (r !== t[n] || n === String(47) || n === String(6005)) {
        t[n] = r;
        const e = parseInt(n, 10);
        (0, s.writeGlobalAttribute)(this.buffer, e, r);
      }
    }
    this.dirtyGlobals = {};
  }
};