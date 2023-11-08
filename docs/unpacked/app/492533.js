var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/73982.js"));
var a = r(require("./994071.js"));
const o = Object.freeze({
  TRUST_CLIENT_REPORTED_SAMPLE_RATE: 1
});
const s = Object.freeze({
  API_CALL: 27787270,
  CRASH_RESILIENCE: 27787276,
  LOCKLESS_IS_MARKER_ON_ACCURACY: 27787269,
  LOCKLESS_MARKER_START: 27787266,
  LOCKLESS_QUEUE_SIZE: 27787265,
  LOCKLESS_STARTED_MARKERS_MAP_COLLISIONS: 27787273,
  LOSS_TRACKING_MARKER_RECEIVED: 27787272,
  LOSS_TRACKING_MARKER_STARTED: 27787271,
  QPL_CONFIG_LOAD: 27799150,
  QPL_CONFIG_SAVE: 27791744,
  QPL_HEARTBEAT_HARDCODED_CONFIG: 27792138,
  QPL_HEARTBEAT_SEVER_CONFIG: 27803336,
  USAGE: 27791726,
  ZERO_SAMPLE_RATE_DUE_MISSING_CONFIG: 27787268,
  ZERO_SAMPLE_RATE_DUE_MISSING_EVENT_IN_CONFIG: 27787267
});
const l = Object.freeze({
  REGULAR: 1,
  USER_FLOW: 2
});
function u(e, t) {
  const n = t - e;
  if (n === 0) {
    return "0";
  }
  const [r, i] = n.toFixed(6).split(".", 2);
  if (r === "0") {
    return i.replace(/^0+/, "");
  } else {
    return r + i;
  }
}
function c(e, t, n, r) {
  const a = t[e];
  if (!a || Object.entries(a).length === 0) {
    return null;
  }
  const o = {};
  Object.keys(a).forEach(e => {
    const t = a[e];
    if (t == null || t.length === 0) {
      delete a[e];
    } else {
      o[e] = r ? r(t) : t;
    }
  });
  return {
    [e]: (0, i.default)((0, i.default)({}, n == null ? undefined : n[e]), o)
  };
}
function d(e, t) {
  if (e == null) {
    return t;
  }
  const n = (0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)({}, t), c("string", e, t)), c("int", e, t, Math.trunc)), c("double", e, t)), c("bool", e, t)), c("string_array", e, t)), c("int_array", e, t, e => e.map(Math.trunc))), c("double_array", e, t)), c("bool_array", e, t));
  Object.keys(n).forEach(e => {
    const t = n[e];
    if (!(t != null && Object.entries(t).length !== 0)) {
      delete n[e];
    }
  });
  if (Object.entries(n).length !== 0) {
    return n;
  } else {
    return null;
  }
}
function p(e, t) {
  if (!t) {
    return e;
  }
  const n = {};
  if (t.string) {
    n.annotations = t.string;
  }
  if (t.int) {
    n.annotations_int = t.int;
  }
  if (t.double) {
    n.annotations_double = t.double;
  }
  if (t.bool) {
    n.annotations_bool = t.bool;
  }
  if (t.string_array) {
    n.annotations_string_array = t.string_array;
  }
  if (t.int_array) {
    n.annotations_int_array = t.int_array;
  }
  if (t.double_array) {
    n.annotations_double_array = t.double_array;
  }
  if (t.bool_array) {
    n.annotations_bool_array = t.bool_array;
  }
  return (0, i.default)((0, i.default)({}, e), n);
}
const f = new Map([[1, "random_sampling"], [3, "per_user"]]);
function _(e, t) {
  return e !== 0 && (e <= 1 || (typeof t == "string" ? (n = t, ((0, a.default)(n) >>> 0) % e) == 0 : Math.random() * e <= 1));
  var n;
}
exports.default = class {
  constructor(e) {
    let t;
    this._nextListenerId = 1;
    this._defaultSampleRate = 100;
    this._listeners = new Map();
    this._listenersWithMarker = new Map();
    this._debuggingId = null;
    this._markerSampleRate = {};
    this.activeMarkers = new Map();
    this._settings = e;
    this._logger = e.logger;
    this._listenersWithMarker = (t = e.listenersWithMarker) !== null && t !== undefined ? t : new Map();
  }
  getMarker(e, t) {
    const n = this._getMarkerInstances(e);
    if (!n) {
      return null;
    }
    const r = n.get(t);
    return r || null;
  }
  getMarkerInstances(e) {
    return this._getMarkerInstances(e);
  }
  _getMarkerInstances(e) {
    let t;
    if ((t = this._settings.quickLogConfigHelper) === null || t === undefined ? undefined : t.isKillswitchOn()) {
      return null;
    } else {
      return this.activeMarkers.get(e);
    }
  }
  addMarker(e, t, n) {
    let r = this.activeMarkers.get(e);
    if (!r) {
      r = new Map();
      this.activeMarkers.set(e, r);
    }
    r.set(t, n);
  }
  deleteMarker(e, t) {
    let n;
    if (!((n = this.activeMarkers.get(e)) === null || n === undefined)) {
      n.delete(t);
    }
  }
  markerStart(e) {
    let t;
    let n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    let r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.currentTimestamp();
    let {
      cancelOnUnload: i = false,
      trackedForLoss: a = false,
      type: o = l.REGULAR,
      samplingBasis: u = null
    } = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    if ((t = this._settings.quickLogConfigHelper) === null || t === undefined ? undefined : t.isKillswitchOn()) {
      return;
    }
    if (this.getMarker(e, n)) {
      this._logger.warn(`Duplicate QPL markerId: ${e} & instanceKey: ${n}`);
    }
    const [c, d, p] = this._getSamplingPolicy(e, u);
    const f = {
      passesSampling: c,
      timestamp: r,
      sampleRate: d,
      samplingMethod: p,
      points: [],
      cancelOnUnload: i,
      trackedForLoss: a,
      type: o
    };
    this._listeners.forEach(t => {
      t.onMarkerStart(e, n, r);
    });
    this._listenersWithMarker.forEach(t => {
      t.onMarkerStartWithMarker(e, n, r, f);
    });
    if (c) {
      this.addMarker(e, n, f);
    }
    if (c && a === true) {
      this._uploadEvent({
        marker_id: s.LOSS_TRACKING_MARKER_STARTED,
        action_id: 0,
        sample_rate: 1,
        annotations_int: {
          tracked_marker_id: e
        },
        marker_type: l.REGULAR
      });
    }
  }
  markerAnnotate(e, t) {
    let {
      instanceKey: n = 0
    } = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    this._listeners.forEach(r => {
      Object.keys(t).forEach(i => {
        const a = t[i];
        if (a) {
          Object.keys(a).forEach(t => {
            r.onAnnotation(e, n, t, a[t]);
          });
        }
      });
    });
    const r = this.getMarker(e, n);
    if (r) {
      r.annotations = d(t, r.annotations);
    }
  }
  markerPoint(e, t) {
    let {
      instanceKey: n = 0,
      data: r,
      timestamp: i = this.currentTimestamp()
    } = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    this._listeners.forEach(a => {
      let o;
      return a.onMarkerPoint(e, n, t, r == null || (o = r.string) === null || o === undefined ? undefined : o.__key, i);
    });
    const a = this.getMarker(e, n);
    if (!a) {
      return;
    }
    const o = {
      name: t,
      timeSinceStart: Math.trunc(i - a.timestamp)
    };
    const s = d(r);
    if (s) {
      o.data = s;
    }
    a.points.push(o);
  }
  markerEnd(e, t) {
    let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    let r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.currentTimestamp();
    this.genMarkerEnd(e, t, n, r);
  }
  genMarkerEnd(e, t) {
    let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    let r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.currentTimestamp();
    this._listeners.forEach(i => i.onMarkerEnd(t, e, n, r));
    const a = this.getMarker(e, n);
    if (!a) {
      return Promise.resolve();
    }
    let s = Promise.resolve();
    if (a.passesSampling) {
      if (a.timestampIsApproximate !== true) {
        const c = a.type === l.USER_FLOW ? a.points : function (e) {
          return Array.from(new Set(e.map(e => e.name))).map(t => e.find(e => e.name === t)).filter(Boolean);
        }(a.points);
        const d = function (e, t) {
          if (t === true) {
            return (0, i.default)((0, i.default)({}, e), {}, {
              tracked_for_loss: true
            });
          } else {
            return e;
          }
        }(p({
          marker_id: e,
          action_id: t,
          instance_id: n,
          sample_rate: a.sampleRate,
          method: f.get(a.samplingMethod),
          duration_ns: u(a.timestamp, r),
          points: c,
          metadata: {
            application_analytics: {
              time_since_qpl_module_init: r - this._settings.moduleLoadTimestamp
            }
          },
          marker_type: a.type,
          flags: o.TRUST_CLIENT_REPORTED_SAMPLE_RATE
        }, a.annotations), a.trackedForLoss);
        s = this._uploadEvent(d);
      }
      if (this._debuggingId === e && this._settings.onDebuggingIdEnded) {
        this._settings.onDebuggingIdEnded();
      }
    }
    this.deleteMarker(e, n);
    return s;
  }
  markerDrop(e) {
    let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    this.deleteMarker(e, t);
    const n = this.currentTimestamp();
    this._listeners.forEach(r => {
      if (r.onMarkerDrop) {
        r.onMarkerDrop(e, t, n);
      }
    });
  }
  markEvent(e, t, n) {
    let r;
    let {
      timestamp: i = this.currentTimestamp(),
      annotations: a
    } = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    if ((r = this._settings.quickLogConfigHelper) === null || r === undefined ? undefined : r.isKillswitchOn()) {
      return;
    }
    const [s, u, c] = this._getSamplingPolicy(e);
    if (!s) {
      return;
    }
    const _ = d(typeof a == "function" ? a() : a);
    const g = {
      marker_id: e,
      action_id: 0,
      instance_id: 0,
      sample_rate: u,
      method: f.get(c),
      da_type: t,
      da_level: n,
      metadata: {
        application_analytics: {
          time_since_qpl_module_init: i - this._settings.moduleLoadTimestamp
        }
      },
      marker_type: l.REGULAR,
      flags: o.TRUST_CLIENT_REPORTED_SAMPLE_RATE
    };
    this._uploadEvent(p(g, _));
  }
  dropAllMarkers() {
    this.activeMarkers.clear();
  }
  setAlwaysOnSampleRate(e, t) {
    this._markerSampleRate[e] = t;
  }
  currentTimestamp() {
    return this._settings.performanceNow();
  }
  enableDebug(e) {
    this._debuggingId = parseInt(e, 10);
  }
  disableDebug() {
    this._debuggingId = null;
  }
  addListener(e) {
    const t = this._nextListenerId++;
    this._listeners.set(t, e);
    return {
      dispose: () => {
        this._listeners.delete(t);
      }
    };
  }
  _getSamplingPolicy(e, t) {
    let n;
    let r;
    let i;
    let a;
    let o;
    if (this._settings.unsampleAllEvents && this._settings.unsampleAllEvents() || this._debuggingId === e) {
      return [true, 1, 1];
    }
    const s = (n = (r = this._settings.quickLogConfigHelper) === null || r === undefined ? undefined : r.getEventDetails(e)) !== null && n !== undefined ? n : {
      sampleRate: 0,
      samplingMethod: 1
    };
    if (this._markerSampleRate[e] == null && s.sampleRate !== 0 && s.samplingMethod === 3) {
      let e;
      return [true, (e = s.sampleRate) !== null && e !== undefined ? e : 1, 3];
    }
    const l = (i = (a = this._markerSampleRate[e]) !== null && a !== undefined ? a : s.sampleRate) !== null && i !== undefined ? i : this._defaultSampleRate;
    const u = (o = s.samplingMethod) !== null && o !== undefined ? o : 1;
    return [_(l, t), l, u];
  }
  _uploadEvent(e) {
    const t = this._settings.decorateEventBeforeUpload ? this._settings.decorateEventBeforeUpload(e) : e;
    return this._settings.sendEvent(e, t);
  }
  getActiveMarkerIDs(e) {
    let {
      type: t
    } = e;
    const n = new Set();
    this.activeMarkers.forEach((e, r) => {
      e.forEach(e => {
        if (e.type === t) {
          n.add(r);
        }
      });
    });
    return Array.from(n);
  }
  forEachMarkerInstance(e, t) {
    const n = this._getMarkerInstances(e);
    if (n) {
      for (const e of n.keys()) {
        t(e);
      }
    }
  }
};