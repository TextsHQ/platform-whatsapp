Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wam = exports.PRIVATE_STATS_DEFAULT_PS_ID_KEY_HASH_INT = undefined;
var r = require("./795297.js");
var i = require("./685639.js");
var a = require("./954875.js");
exports.PRIVATE_STATS_DEFAULT_PS_ID_KEY_HASH_INT = 113760892;
const o = {
  putBuffer: () => Promise.resolve()
};
exports.Wam = class {
  constructor(e) {
    this._pending = [];
    this._globals = new Map();
    this._initialized = false;
    this._buffers = new Map();
    this._streamId = -1;
    this._sink = o;
    this._getNextSequenceNumber = null;
    this.deinitialize = () => {
      this._initialized = false;
      this._pending = [];
      this._globals.clear();
      this._buffers = new Map();
      this._streamId = -1;
      this._sink = o;
      this.serializePending.cancel();
      this.finalizeBuffers.cancel();
    };
    this.enqueueEvent = (e, t, n, r, i, a) => {
      this._pending.push({
        type: 1,
        id: e,
        commitTime: t,
        psIdIntValue: n,
        weight: i,
        fields: r,
        resolve: a
      });
      if (this._initialized) {
        this.serializePending.onOrBefore(3000);
      }
    };
    this.enqueueAttributesUpdate = e => {
      const t = {
        type: 2,
        delta: []
      };
      e.forEach((e, n) => {
        if (e !== undefined) {
          t.delta.push([n, e]);
        }
      });
      if (t.delta.length > 0) {
        __LOG__(2)`WAM: Enqueued ${t.delta.length} attribute keys for update`;
        this._pending.push(t);
      }
    };
    this.finalizeBuffers = new i.ShiftTimer(() => {
      this.finalizeBuffers__INTERNAL();
    });
    this.serializePending = new i.ShiftTimer(() => {
      this.serializePending__INTERNAL();
    });
    this.forceSerializePending = () => {
      if (this._initialized && this._hasPendingEvents()) {
        this.serializePending.forceRunNow();
      }
    };
    this._channel = e;
  }
  initialize(e, t, n, r) {
    if (this._initialized) {
      __LOG__(4, undefined, new Error(), true)`WAM: Failed to initialize already initialized WAM`;
      return void SEND_LOGS("wam-initialize");
    }
    this._options = r;
    this._streamId = e;
    this._sink = n;
    this._getNextSequenceNumber = t;
    if (this._hasPendingEvents()) {
      this.serializePending.forceRunNow();
    }
    this._initialized = true;
    __LOG__(2)`WAM: Initialized with stream id ${this._streamId}`;
  }
  finalizeBuffers__INTERNAL() {
    this._buffers.forEach(e => {
      e.finalize();
    });
    if (this._buffers.size > 0) {
      this.serializePending.onOrBefore(3000);
    }
  }
  _getKeyHashIntForSequence(e) {
    var t;
    if ((t = this._options) === null || t === undefined ? undefined : t.multipleSequences) {
      if (e === 0) {
        return "null-psid";
      } else {
        return e;
      }
    } else {
      return "regular";
    }
  }
  _maybeCreateNewBuffer(e) {
    let t = this._buffers.get(e);
    if (t) {
      return t;
    }
    const n = this._getKeyHashIntForSequence(e);
    if (this._getNextSequenceNumber == null) {
      __LOG__(4, undefined, new Error(), true)`WAM: Sequence number generator not initialised for channel ${this._channel}`;
      return void SEND_LOGS("wam-serializePending");
    }
    const r = this._getNextSequenceNumber(n);
    t = new a.WamBuffer(this._channel, this._streamId, r, this._globals);
    this._buffers.set(e, t);
    if (e !== "regular") {
      if (this._privateStatsIds == null) {
        __LOG__(4, undefined, new Error(), true)`WAM: Tried to create a private buffer without setting private stats ids`;
        SEND_LOGS("wam-serializePending");
      } else {
        const n = e === 0 ? "none" : this._privateStatsIds.get(e);
        if (n == null) {
          __LOG__(4, undefined, new Error(), true)`WAM: Tried to create a private buffer without setting private stats id`;
          SEND_LOGS("wam-serializePending");
        } else {
          t.writeGlobal(6005, n);
        }
      }
    }
    return t;
  }
  serializePending__INTERNAL() {
    const e = [];
    this.finalizeBuffers.onOrBefore(300000);
    const t = new Map();
    let n = -1;
    this._pending.forEach((r, i) => {
      if (r.type === 1) {
        let o = true;
        t.forEach(e => {
          if (!(0, a.canWriteGlobal)(e)) {
            o = false;
          }
        });
        const s = (0, a.canWriteEvent)(r.fields);
        if (s && o) {
          let e;
          if (this._channel === "regular") {
            e = this._maybeCreateNewBuffer("regular");
          } else {
            this._channel;
            if (r.psIdIntValue == null) {
              __LOG__(4, undefined, new Error(), true)`A WAM event in channel private was dropped before serialization. Reason: missing psIdIntValue in the event payload`;
              SEND_LOGS("wam-serializePending");
            } else {
              e = this._maybeCreateNewBuffer(r.psIdIntValue);
            }
          }
          if (e != null) {
            t.forEach((e, t) => {
              const n = this._globals.get(t);
              if (!(n !== undefined && n === e)) {
                this._buffers.forEach(n => n.writeGlobal(t, e));
                this._globals.set(t, e);
              }
            });
            t.clear();
            e.writeEvent(r.commitTime, r.id, r.fields, r.weight);
          }
        } else {
          __LOG__(3)`A WAM event in channel ${this._channel} was dropped before serialization. Event correct: ${s}, pending attributes correct: ${o}`;
        }
        if (r.resolve != null) {
          e.push(r.resolve);
        }
        n = i;
      } else {
        r.type;
        for (let e = 0; e < r.delta.length; ++e) {
          const [n, i] = r.delta[e];
          t.set(n, i);
        }
      }
    });
    let i = false;
    this._buffers.forEach(e => {
      if (e.isFinalized() || e.getSize() > 65536) {
        i = true;
      }
    });
    const o = [];
    this._buffers.forEach((e, t) => {
      if (e.hasEvents()) {
        o.push([e.getKey(), e.peek(), this._getKeyHashIntForSequence(t)]);
      } else {
        __LOG__(3)`Skipping putting buffer to sink, as it does not contain any events`;
      }
    });
    const s = (0, r.promiseEach)(o, e => {
      let [t, n, r] = e;
      return this._sink.putBuffer(t, n, i, r);
    }).then(() => {
      e.forEach(e => {
        e();
      });
    });
    this._pending = this._pending.slice(n + 1);
    if (i) {
      this._buffers = new Map();
      this.finalizeBuffers.cancel();
    }
    return s;
  }
  _hasPendingEvents() {
    return this._pending.length > 0 && this._pending.some(e => e.type === 1);
  }
  isInitialized() {
    return this._initialized;
  }
  getStreamId() {
    return this._streamId;
  }
  getPendingActions() {
    return this._pending;
  }
  getBuffers__INTERNAL() {
    return this._buffers;
  }
  getGlobals__INTERNAL() {
    return this._globals;
  }
  setGlobals__INTERNAL(e) {
    this._globals = e;
  }
  getSink__INTERNAL() {
    return this._sink;
  }
  updatePrivateStatsIds(e) {
    if (this._channel !== "private") {
      __LOG__(4, undefined, new Error(), true)`WAM: Tried to set private stats ids on a non-private channel`;
      return void SEND_LOGS("wam-updatePrivateStatsIds");
    }
    this._privateStatsIds = e;
  }
};