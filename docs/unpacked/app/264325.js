var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QPL = undefined;
var i = r(require("../vendor/311504.js"));
var a = require("./855034.js");
var o = r(require("./492533.js"));
var s = require("./954273.js");
var l = require("./766924.js");
var u = require("./15842.js");
let c;
class d {
  static setAllowListDevVerboseLogging(e) {
    d.allowListDevVerboseLogging = e;
  }
  static setStartupAllowListEventFilter(e) {
    d._startupAllowListEventFilter = e;
  }
  static setQplReducePrecisionMapMs(e) {
    d._qplReducePrecisionMapMs = e;
  }
  static resetQplSettings() {
    d._qplSettings = d._SETTINGS_ON_STARTUP;
  }
  static setIsDev(e) {
    d.isDev = e;
  }
  static setEnumConversion(e) {
    d._enumConversion = e;
  }
  static setStorageApi(e) {
    d._storageApi = e;
  }
  static setHealthLogger(e) {
    d._healthLogger = e;
  }
  static init(e, t, n) {
    d._qplSettings = {
      sendEvent: e,
      isQplEnabled: n,
      getEventDetails: t
    };
  }
  static getInstance() {
    if (!c) {
      c = new o.default(d._qplSettingsDecorator);
    }
    return c;
  }
  static setInstance(e) {
    c = e;
  }
  static clearInstance() {
    c = null;
    Object.assign(d._qplSettings, d._SETTINGS_ON_STARTUP);
    d.markerInstanceHelper.clear();
  }
  static getNextMarkerInstanceValue(e) {
    if (!d.markerInstanceHelper.get(e)) {
      d.markerInstanceHelper.set(e, d._instanceKeyGenerator());
    }
    const t = d.markerInstanceHelper.get(e);
    const n = t !== undefined ? t.next().value : 0;
    if (n !== undefined) {
      return n;
    } else {
      return 0;
    }
  }
  static *_instanceKeyGenerator() {
    let e = 0;
    for (;;) {
      yield e++;
    }
  }
  static throwKillswitch(e) {
    d._qplSettings.isQplEnabled = () => !e;
    d.isDev;
  }
  static clearStorage() {
    d._storageApi.clear();
  }
  static logActiveQplMarkers() {
    const e = d.getInstance().getActiveMarkerIDs({
      type: u.QuickLogMarkerType.REGULAR
    });
    if (e.length) {
      e.forEach(e => {
        var t;
        var n;
        const r = (t = (n = d._enumConversion).getName) === null || t === undefined ? undefined : t.call(n, e);
        __LOG__(3)`QPL [${r}] There are ${d._numberOfMarkersOpen(e)} active markers remaining. You need to call markerEnd`;
      });
    }
  }
  static markerStart(e, t) {
    var n;
    var r;
    var i;
    var a;
    if (d.isDev && d.allowListDevVerboseLogging.includes(e)) {
      if (!((n = (r = d._enumConversion).getName) === null || n === undefined)) {
        n.call(r, e);
      }
      if (!d._qplSettings.isQplEnabled()) {
        __LOG__(3)`QPL [${(i = (a = d._enumConversion).getName) === null || i === undefined ? undefined : i.call(a, e)}] markerStart called but killSwitch is ON, this call will be ignored, no marker will be instantiated`;
      }
    }
    let o;
    o = (t == null ? undefined : t.instanceKeyOption) === u.QplInstanceKeyOptions.AUTO_INCREMENT ? d.getNextMarkerInstanceValue(e) : (t == null ? undefined : t.instanceKey) !== undefined ? t.instanceKey : 0;
    if (t == null ? undefined : t.closePreviousInstanceWithAction) {
      const n = [u.QplInstanceKeyOptions.AUTO_INCREMENT, u.QplInstanceKeyOptions.MANUAL_INCREMENT].includes(t.instanceKeyOption) ? o - 1 : o;
      if (d._markerInstanceExists(e, n)) {
        const r = t.closePreviousInstanceWithAction || u.QuickLogActionType.ABORTED;
        var l;
        var c;
        if (d.isDev && d.allowListDevVerboseLogging.includes(e)) {
          if (!((l = (c = d._enumConversion).getName) === null || l === undefined)) {
            l.call(c, e);
          }
        }
        d.markerEnd(e, r, {
          instanceKey: n
        });
      }
    }
    if (d._markerExists(e)) {
      const t = d._numberOfMarkersOpen(e);
      var p;
      var f;
      var _;
      var g;
      var m;
      var h;
      if (t < d._SOFT_MAX_CONCURRENT_OPEN_MARKERS) {
        if (d.isDev && d.allowListDevVerboseLogging.includes(e)) {
          __LOG__(3, undefined, undefined, undefined, ["qpl"])`QPL [${(p = (f = d._enumConversion).getName) === null || p === undefined ? undefined : p.call(f, e)}] is already opened ${t} time(s), attempting ${t + 1}, not a problem if intended`;
        }
      } else {
        __LOG__(3, undefined, undefined, true, ["qpl"])`QPL [${(_ = (g = d._enumConversion).getName) === null || _ === undefined ? undefined : _.call(g, e)}] already has ${t} open markers`;
        SEND_LOGS(`QPL [${((m = (h = d._enumConversion).getName) === null || m === undefined ? undefined : m.call(h, e)) || "unknown"}] has ${d._SOFT_MAX_CONCURRENT_OPEN_MARKERS} or more open markers`, 1, "qpl");
      }
    }
    d.getInstance().markerStart(e, o);
    if ((t == null ? undefined : t.annotations) && (0, s.validateAnnotations)(e, o, t.annotations, d._healthLogger)) {
      const n = t.annotations;
      d.getInstance().markerAnnotate(e, n, {
        instanceKey: o
      });
    }
    return {
      instanceKey: o,
      annotate: t => {
        d.markerAnnotate(e, t, {
          instanceKey: o
        });
      },
      addPoint: (t, n) => {
        d.markerPoint(e, t, {
          data: n == null ? undefined : n.data,
          instanceKey: o
        });
      },
      end: t => {
        d.markerEnd(e, t, {
          instanceKey: o
        });
      },
      drop: () => {
        d.markerDrop(e, {
          instanceKey: o
        });
      }
    };
  }
  static markerAnnotate(e, t, n) {
    var r;
    var i;
    if (d.isDev && d.allowListDevVerboseLogging.includes(e)) {
      if (!((r = (i = d._enumConversion).getName) === null || r === undefined)) {
        r.call(i, e);
      }
      d._warnIfMarkerDoesntExist(e, n ? n.instanceKey : 0, "markerAnnotate");
    }
    if ((0, s.validateAnnotations)(e, n == null ? undefined : n.instanceKey, t, d._healthLogger)) {
      d.getInstance().markerAnnotate(e, t, {
        instanceKey: n == null ? undefined : n.instanceKey
      });
    }
  }
  static markerPoint(e, t, n) {
    var r;
    var i;
    if (d.isDev && d.allowListDevVerboseLogging.includes(e)) {
      if (!((r = (i = d._enumConversion).getName) === null || r === undefined)) {
        r.call(i, e);
      }
      if (n) {
        JSON.stringify(n);
      }
      d._warnIfMarkerDoesntExist(e, n ? n.instanceKey : 0, "markerPoint");
    }
    if (n == null ? undefined : n.data) {
      (0, s.validateAnnotations)(e, n.instanceKey, n.data, d._healthLogger);
    }
    if ((0, s.validatePoints)(e, (n == null ? undefined : n.instanceKey) || 0, t, d._healthLogger)) {
      d.getInstance().markerPoint(e, t, n);
    }
  }
  static markerEnd(e, t, n) {
    this.genMarkerEnd(e, t, n);
  }
  static genMarkerEnd(e, t, n) {
    return (0, i.default)(function* () {
      var r;
      var i;
      if (d.isDev && d.allowListDevVerboseLogging.includes(e)) {
        if (!((r = (i = d._enumConversion).getName) === null || r === undefined)) {
          r.call(i, e);
        }
        u.QuickLogActionType.getName(t);
        d._warnIfMarkerDoesntExist(e, n == null ? undefined : n.instanceKey, "markerEnd");
      }
      yield d.getInstance().genMarkerEnd(e, t, n == null ? undefined : n.instanceKey);
      (0, s.markerEnded)(e, n == null ? undefined : n.instanceKey);
    })();
  }
  static markerDrop(e, t) {
    var n;
    var r;
    if (d.isDev && d.allowListDevVerboseLogging.includes(e)) {
      if (!((n = (r = d._enumConversion).getName) === null || n === undefined)) {
        n.call(r, e);
      }
      d._warnIfMarkerDoesntExist(e, t == null ? undefined : t.instanceKey, "markerDrop");
    }
    d.getInstance().markerDrop(e, t == null ? undefined : t.instanceKey);
    (0, s.markerEnded)(e, t == null ? undefined : t.instanceKey);
  }
  static getActiveMarkerIDs(e) {
    return d.getInstance().getActiveMarkerIDs({
      type: e.type
    });
  }
  static getMarker(e) {
    let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return d.getInstance().getMarker(e, t);
  }
  static getMarkerInstances(e) {
    return d.getInstance().getMarkerInstances(e);
  }
  static _markerExists(e) {
    const t = d.getMarkerInstances(e);
    return !!t && t.size !== 0;
  }
  static _markerInstanceExists(e, t) {
    const n = d.getMarkerInstances(e);
    return !!n && n.get(t) !== undefined;
  }
  static _numberOfMarkersOpen(e) {
    const t = d.getMarkerInstances(e);
    if (t) {
      return t.size;
    } else {
      return 0;
    }
  }
  static _warnIfMarkerDoesntExist(e) {
    let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    let n = arguments.length > 2 ? arguments[2] : undefined;
    var r;
    var i;
    if (!d._markerInstanceExists(e, t)) {
      __LOG__(3)`QPL [${(r = (i = d._enumConversion).getName) === null || r === undefined ? undefined : r.call(i, e)}] calling ${n} without a corresponding open marker for instance: ${t}`;
    }
  }
}
exports.QPL = d;
d._defaultSettings = {
  sendEvent: e => {
    if (d.isDev) {
      var t;
      var n;
      const r = (t = (n = d._enumConversion).cast) === null || t === undefined ? undefined : t.call(n, e.marker_id);
      if (r != null) {
        d.allowListDevVerboseLogging.includes(r);
      }
    }
    d._storageApi.add([e]);
    return Promise.resolve();
  },
  getEventDetails: e => ({
    sampleRate: d._startupAllowListEventFilter.includes(e) ? 1 : 0,
    samplingMethod: a.QplSampleMethod.EVENT_BASED_SAMPLING
  }),
  isQplEnabled: () => true
};
d._SETTINGS_ON_STARTUP = {
  sendEvent: e => {
    if (d.isDev) {
      var t;
      var n;
      const r = (t = (n = d._enumConversion).cast) === null || t === undefined ? undefined : t.call(n, e.marker_id);
      if (r != null) {
        d.allowListDevVerboseLogging.includes(r);
      }
    }
    d._storageApi.add([e]);
    return Promise.resolve();
  },
  getEventDetails: e => ({
    sampleRate: d._startupAllowListEventFilter.includes(e) ? 1 : 0,
    samplingMethod: a.QplSampleMethod.EVENT_BASED_SAMPLING
  }),
  isQplEnabled: () => false
};
d._qplSettingsDecorator = {
  performanceNow: () => performance.now(),
  moduleLoadTimestamp: performance.now(),
  logger: {
    debug: () => {},
    warn: () => {}
  },
  sendEvent: (e, t) => {
    const n = d._qplReducePrecisionMapMs.get(e.marker_id);
    if (n != null && n !== 0) {
      (0, l.inplaceTruncateEventPrecision)(e, n);
    }
    return d._qplSettings.sendEvent(e, t);
  },
  quickLogConfigHelper: {
    getEventDetails: e => d._qplSettings.getEventDetails(e),
    isKillswitchOn: () => !d._qplSettings.isQplEnabled()
  }
};
d.markerInstanceHelper = new Map();
d._SOFT_MAX_CONCURRENT_OPEN_MARKERS = 100;
d._startupAllowListEventFilter = [];
d.allowListDevVerboseLogging = [];
d.isDev = false;
d._qplReducePrecisionMapMs = new Map();
d.resetQplSettings();