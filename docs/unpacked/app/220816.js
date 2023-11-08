Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SyncdKeyRotationEventType = exports.SyncdEventFlow = exports.SyncdCriticalEventType = exports.SyncdBootstrapDataAppliedSnapshotUsed = undefined;
exports.constructAnnotationsFromContext = c;
exports.convertSyncdBootstrapAppStateDownloadFromAnnotations = function (e) {
  var t;
  var n;
  var r;
  var i;
  const o = e == null || (t = e.string) === null || t === undefined ? undefined : t.collection;
  const s = e == null || (n = e.int) === null || n === undefined ? undefined : n.downloadSize;
  const l = e == null || (r = e.int) === null || r === undefined ? undefined : r.downloadStartTs;
  const u = e == null || (i = e.bool) === null || i === undefined ? undefined : i.isSuccess;
  if (o == null) {
    __LOG__(4, undefined, new Error())`syncd: missing collection for bootstrap app state download metric`;
    return null;
  }
  if (l == null) {
    __LOG__(4, undefined, new Error())`syncd: missing downloadStartTs for bootstrap app state download metric`;
    return null;
  }
  if (u == null) {
    __LOG__(4, undefined, new Error())`syncd: missing isSuccess for bootstrap app state download metric`;
    return null;
  }
  const c = a.CollectionName.cast(o);
  if (c == null) {
    __LOG__(4, undefined, new Error())`syncd: unknown collection ${o} for bootstrap app state download metric`;
    return null;
  }
  return {
    collection: c,
    downloadStartTs: l,
    downloadSize: s,
    isSuccess: u ? "success" : "failure"
  };
};
exports.convertSyncdBootstrapDataAppliedFromAnnotations = function (e) {
  var t;
  var n;
  var r;
  const i = e == null || (t = e.string) === null || t === undefined ? undefined : t.collection;
  const o = e == null || (n = e.bool) === null || n === undefined ? undefined : n.snapshot;
  const l = e == null || (r = e.int) === null || r === undefined ? undefined : r.durationMs;
  if (i == null) {
    __LOG__(4, undefined, new Error())`syncd: missing collection for bootstrap data applied event`;
    return null;
  }
  if (o == null) {
    __LOG__(4, undefined, new Error())`syncd: missing snapshotUsed for bootstrap data applied event`;
    return null;
  }
  if (l == null) {
    __LOG__(4, undefined, new Error())`syncd: missing durationMs for bootstrap data applied event`;
    return null;
  }
  const u = a.CollectionName.cast(i);
  if (u == null) {
    __LOG__(4, undefined, new Error())`syncd: unknown collection ${i} for bootstrap data applied event`;
    return null;
  }
  const c = o ? s.SNAPSHOT_USED : s.SNAPSHOT_NOT_USED;
  return {
    collection: u,
    snapshotUsed: c,
    durationMs: l
  };
};
exports.convertSyncdCriticalEventFromAnnotations = function (e) {
  var t;
  var n;
  const r = e == null || (t = e.string) === null || t === undefined ? undefined : t.criticalEventCode;
  if (r == null) {
    __LOG__(4, undefined, new Error())`syncd: missing error code for critical event`;
    return null;
  }
  const i = o.cast(r);
  if (i == null) {
    __LOG__(4, undefined, new Error())`syncd: unknown error code: ${r} for critical event`;
    return null;
  }
  return {
    type: i,
    collection: a.CollectionName.cast(e == null || (n = e.string) === null || n === undefined ? undefined : n.collection)
  };
};
exports.convertSyncdKeyRotationEventFromAnnotations = function (e) {
  var t;
  const n = e == null || (t = e.string) === null || t === undefined ? undefined : t.keyRotationEventCode;
  if (n == null) {
    __LOG__(4, undefined, new Error())`syncd: missing error code for key rotation event`;
    return null;
  }
  const r = l.cast(n);
  if (r == null) {
    __LOG__(4, undefined, new Error())`syncd: unknown error code: ${n} for key rotation event`;
    return null;
  }
  return {
    type: r
  };
};
exports.reportSyncdBootstrapAppStateDownloadMetric = function (e) {
  const t = (0, i.startMetric)(r.PRE_METRIC.SYNCD_BOOTSTRAP_APP_STATE_DOWNLOAD);
  if (e.isSuccess !== "success") {
    t.endFail("syncd error: Error downloading snapshot or patches", u(e));
  } else {
    t.endSuccess(u(e));
  }
};
exports.reportSyncdBootstrapDataApplied = function (e, t, n) {
  (0, i.startMetric)(r.PRE_METRIC.SYNCD_BOOTSTRAP_DATA_APPLIED).endSuccess((a = {
    collection: e,
    snapshotUsed: t,
    durationMs: n
  }, {
    string: {
      collection: a.collection
    },
    bool: {
      snapshot: a.snapshotUsed === s.SNAPSHOT_USED
    },
    int: {
      durationMs: a.durationMs
    }
  }));
  var a;
};
exports.reportSyncdCriticalEvent = function (e, t) {
  (0, i.startMetric)(r.PRE_METRIC.SYNCD_CRITICAL_EVENT).endFail("syncd critical event: " + e, (n = {
    type: e,
    collection: t
  }, {
    string: {
      criticalEventCode: n.type,
      collection: n.collection == null ? null : n.collection
    }
  }));
  var n;
};
exports.reportSyncdKeyRotationEvent = function (e) {
  (0, i.startMetric)(r.PRE_METRIC.SYNCD_KEY_ROTATION).endSuccess((t = {
    type: e
  }, {
    string: {
      keyRotationEventCode: t.type
    }
  }));
  var t;
};
var r = require("./489783.js");
var i = require("./947339.js");
var a = require("./122393.js");
const o = require("../vendor/654302.js").Mirrored(["MISSING_MUTATION_TO_REMOVE"]);
exports.SyncdCriticalEventType = o;
const s = require("../vendor/654302.js").Mirrored(["SNAPSHOT_USED", "SNAPSHOT_NOT_USED"]);
exports.SyncdBootstrapDataAppliedSnapshotUsed = s;
const l = require("../vendor/654302.js").Mirrored(["APP_STATE_SYNC_KEY_EXPIRY", "DEVICE_DEREGISTERATION", "NO_KEYS"]);
function u(e) {
  const {
    collection: t,
    downloadSize: n,
    downloadStartTs: r,
    isSuccess: i
  } = e;
  return {
    string: {
      collection: t
    },
    int: {
      downloadSize: n,
      downloadStartTs: r
    },
    bool: {
      isSuccess: i === "success"
    }
  };
}
function c(e) {
  const t = {};
  Object.keys(e).forEach(n => {
    if (typeof e[n] == "number") {
      if (t.int == null) {
        t.int = {};
      }
      t.int[n] = e[n];
    } else if (typeof e[n] == "string") {
      if (t.string == null) {
        t.string = {};
      }
      t.string[n] = e[n];
    }
  });
  if (Object.keys(t).length > 0) {
    return t;
  } else {
    return undefined;
  }
}
exports.SyncdKeyRotationEventType = l;
exports.SyncdEventFlow = class {
  constructor() {
    this.event = (0, i.startMetric)(r.PRE_METRIC.SYNCD);
  }
  end() {
    if (arguments.length > 0 && arguments[0] !== undefined && arguments[0]) {
      this.event.endFail("syncd failed");
    } else {
      this.event.endSuccess();
    }
  }
  mark(e, t) {
    this.event.addPoint(e, c(t));
  }
};