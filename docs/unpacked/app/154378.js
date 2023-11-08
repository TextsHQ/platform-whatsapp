var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wam = undefined;
exports.doNotUseOnlyForTestStopPendingTimer = function () {
  U.cancel();
};
exports.initWamRuntime = function () {
  x = P.PrivateStatsAllIds.map(e => e.key);
  (0, N.initPrivateStats)();
  (0, O.startWamStore)();
  (0, C.logFingerprintToWam)();
  U = new c.ShiftTimer(() => {
    if (v.currentTabHasMutex()) {
      (function () {
        ie.apply(this, arguments);
      })();
    } else {
      __LOG__(3)`wam:this tab is in the background, skipping WAM processing for now`;
    }
  });
  (0, D.setWamRuntime)(j);
  for (; B.length;) {
    B.pop()();
  }
  F = true;
};
exports.sendAllLogs = ge;
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = r(require("../vendor/435161.js"));
var s = r(require("../vendor/66604.js"));
var l = r(require("./670983.js"));
var u = require("./950376.js");
var c = require("./685639.js");
var d = require("./632157.js");
var p = require("./508247.js");
var f = require("./323321.js");
var _ = G(require("./996588.js"));
var g = require("./525438.js");
var m = r(require("./524173.js"));
var h = require("./77343.js");
var y = r(require("./361927.js"));
var E = r(require("./460325.js"));
var S = require("./68389.js");
var v = G(require("./173077.js"));
var T = require("./404021.js");
var M = require("./524400.js");
var A = require("./300571.js");
var b = require("./97288.js");
var C = require("./332152.js");
var P = require("./130945.js");
var O = require("./334338.js");
var I = require("./205600.js");
var R = require("./350906.js");
var N = require("./359151.js");
var D = require("./413950.js");
var w = r(require("./32223.js"));
var L = require("./965259.js");
function k(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (k = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function G(e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = k(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var r = {};
  var i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e) {
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
      if (o && (o.get || o.set)) {
        Object.defineProperty(r, a, o);
      } else {
        r[a] = e[a];
      }
    }
  }
  r.default = e;
  if (n) {
    n.set(e, r);
  }
  return r;
}
let U;
let x = [];
const B = [];
let F = false;
const j = (0, s.default)({
  commit: function (e) {
    let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
    if (e.commitTime != null && e.commitTime !== 0) {
      __LOG__(3)`wam:commit redundant commit! ${e.$className}`;
      return Promise.resolve();
    }
    if (e.weight !== 0 && Math.random() * e.weight > 1) {
      e.commitTime = (0, d.unixTimeWithoutClockSkewCorrection)();
      return Promise.resolve();
    }
    (0, f.commitToCoreWam)(e).catch(t => {
      if (e.$className.includes("CrashLog")) {
        __LOG__(3)`wam:commit ${e.$className}, error: ${t}`;
      } else {
        __LOG__(4, undefined, new Error(), true, ["wam"])`wam:commit ${e.$className}, error: ${t}`;
        SEND_LOGS("failed-wam-commit-to-core", 1, "wam");
      }
    });
    X(e);
    (0, L.maybeForwardWamEventToJestE2e)(e);
    return te(e, t);
  },
  set: function (e, t) {
    (0, f.setToCoreWam)(e, t);
    (0, L.maybeForwardWamAttributeToJestE2e)(e.name, String(t));
    return te([e, t]);
  },
  resumeJobs: re,
  initialize: Z
}, function (e) {
  return function () {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) {
      n[r] = arguments[r];
    }
    if (F) {
      return e(...n);
    }
    B.push(() => {
      e(...n);
    });
  };
});
exports.Wam = j;
const Y = {};
let K = 0;
let W = [];
let V = false;
let H = false;
let $ = null;
let z = 0;
let q = new u.Resolvable();
let J = false;
let Q = false;
function X(e, t) {
  e.commitTime = t != null ? t : (0, d.unixTimeWithoutClockSkewCorrection)();
  e.sequenceNumber = z++;
}
function Z() {
  return ee.apply(this, arguments);
}
function ee() {
  return (ee = (0, a.default)(function* (e) {
    if ($ && !e) {
      return Promise.resolve($);
    }
    const t = m.default.info();
    const n = (0, i.default)({
      appVersion: p.VERSION_BASE,
      appBuild: (0, L.getAppBuild)(),
      platform: A.PLATFORM_TYPE.WEBCLIENT,
      appIsBetaRelease: yield (0, L.getAppIsBetaRelease)(),
      browser: t.name || null,
      browserVersion: t.ua || null,
      deviceName: t.os || null,
      deviceVersion: t.version || null,
      webcEnv: (0, L.getWamEnv)(),
      webcTabId: v.THIS_TAB,
      webcWebPlatform: b.WEBC_WEB_PLATFORM_TYPE[(0, R.getWamPlatform)()],
      ocVersion: g.isOfficialClient ? 1 : 0,
      deviceClassification: M.DEVICE_CLASSIFICATION.DESKTOP
    }, (0, h.maybeSetIsWWWBuildFlag)());
    $ = n;
    if (e) {
      Object.assign($, e);
    }
    P.Global.commitOnSet = false;
    P.Global.set($);
    P.Global.commitOnSet = true;
    Object.keys(n).forEach(e => (0, L.maybeForwardWamAttributeToJestE2e)(e, String(n[e])));
    (0, f.initializeCoreWam)(n);
    return n;
  })).apply(this, arguments);
}
function te(e) {
  let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
  W.push(e);
  if (V) {
    if (t) {
      J = false;
      Q = true;
      self.setTimeout(() => U.forceRunNow(), 1);
    } else {
      U.onOrBefore(T.PENDING_DELAY_IN_SECONDS * 1000);
    }
  } else if (t) {
    U.cancel();
    J = true;
    Q = false;
  }
  return q.promise;
}
function ne() {
  V = false;
  U.cancel();
  const e = q;
  q = new u.Resolvable();
  return e;
}
function re() {
  V = true;
  Q = false;
  if (W.length > 0) {
    U.onOrBefore(T.PENDING_DELAY_IN_SECONDS * 1000);
  }
  if (J) {
    J = false;
    Q = true;
    U.forceRunNow();
  }
}
function ie() {
  return (ie = (0, a.default)(function* () {
    const e = Q;
    const t = ne();
    const n = [...W];
    W = [];
    try {
      const r = yield Z();
      const i = yield (0, N.maybeRotatePsIds)();
      yield Promise.all(i.map(e => ae(e, r)));
      yield Promise.all(["regular", "none", ...x].map(t => de(t, n, e, r)));
    } finally {
      t.resolve();
      re();
    }
  })).apply(this, arguments);
}
function ae() {
  return oe.apply(this, arguments);
}
function oe() {
  return (oe = (0, a.default)(function* (e, t) {
    yield fe(e, t);
    Y[e] = yield se(e, t);
  })).apply(this, arguments);
}
function se() {
  return le.apply(this, arguments);
}
function le() {
  return (le = (0, a.default)(function* (e, t) {
    return new I.WamContext(e, yield w.default.getNextSequenceNumberForStream("1"), t);
  })).apply(this, arguments);
}
function ue() {
  return ce.apply(this, arguments);
}
function ce() {
  return (ce = (0, a.default)(function* (e, t) {
    var n;
    const r = (n = Y[e]) !== null && n !== undefined ? n : yield se(e, t);
    Y[e] = r;
    return r;
  })).apply(this, arguments);
}
function de() {
  return pe.apply(this, arguments);
}
function pe() {
  return (pe = (0, a.default)(function* (e, t, n, r) {
    const i = (0, L.getChannelFromBufferKey)(e);
    let a;
    try {
      a = yield ue(e, r);
    } catch (e) {
      return void __LOG__(3)`wam:_executePendingForContext failed to get context ${String((e == null ? undefined : e.stack) ? e.stack : e)}`;
    }
    try {
      for (let n = 0; n < t.length; n++) {
        if (a.size() > T.WAM_MAX_BUFFER_SIZE) {
          __LOG__(3)`wam:_executePendingForContext drop the rest due to size limit: ${a.size()} > ${T.WAM_MAX_BUFFER_SIZE}`;
          break;
        }
        const o = t[n];
        if (Array.isArray(o)) {
          const [e, t] = o;
          if (e.channels.includes(i)) {
            r[e.name] = t;
            a.set(e.id, t);
          }
        } else {
          const t = o;
          if (t.wamChannel === "regular" && t.wamChannel === i || t.wamChannel === "private" && e === (0, N.getPrivateStatsKeyFromInt)(t.privateStatsIdInt)) {
            a.write(t);
          }
        }
      }
      const o = (0, d.unixTimeWithoutClockSkewCorrection)();
      if (a.eventsWritten > 0 && (n || a.size() > T.WAM_MAX_BUFFER_SIZE || o >= K + T.WAM_ROTATE_INTERVAL_IN_SECONDS || !H)) {
        if (!(0, S.isLoggedIn)()) {
          return void (a.buffer.size() > T.WAM_MAX_BUFFER_SIZE ? Y[e] = null : yield fe(e, r));
        }
        yield ge(e);
      } else {
        yield fe(e, r);
      }
    } catch (t) {
      __LOG__(3)`wam:_executePending error ${String((t == null ? undefined : t.stack) ? t.stack : t)}`;
      _.upload({
        reason: "wam-error"
      });
      Y[e] = null;
    }
  })).apply(this, arguments);
}
function fe() {
  return _e.apply(this, arguments);
}
function _e() {
  return (_e = (0, a.default)(function* (e, t) {
    if (!Y[e]) {
      return;
    }
    const n = Y[e].stringBuffer();
    if (!n) {
      return;
    }
    const r = (0, l.default)(Y[e], "contexts[bufferKey]").unsavedPortion;
    if (r && r.eventsWritten === 0) {
      return;
    }
    const i = (0, l.default)(Y[e], "contexts[bufferKey]").saveKey;
    try {
      if (r) {
        const r = yield w.default.update(i, e, n);
        if (!Y[e]) {
          return;
        }
        if (r) {
          (0, l.default)(Y[e], "contexts[bufferKey]").unsavedPortion = yield se(e, t);
        } else {
          Y[e] = Y[e].unsavedPortion;
          yield fe(e, t);
        }
      } else {
        yield w.default.add(i, e, n);
        if (!Y[e]) {
          return;
        }
        (0, l.default)(Y[e], "contexts[bufferKey]").unsavedPortion = yield se(e, t);
      }
    } catch (e) {
      __LOG__(3)`wam:save WamStorage failed to save ${String(e)}`;
    }
  })).apply(this, arguments);
}
function ge() {
  return me.apply(this, arguments);
}
function me() {
  return (me = (0, a.default)(function* (e) {
    let t;
    try {
      t = yield w.default.deleteAll(e);
    } catch (e) {
      t = {};
      __LOG__(3)`wam:sendAllLogs failed to read because ${String(e)}`;
    }
    const n = t;
    if (Y[e]) {
      if (Y[e].unsavedPortion && !(Y[e].saveKey in n)) {
        Y[e] = Y[e].unsavedPortion;
      }
      const t = (0, l.default)(Y[e], "contexts[bufferKey]").saveKey;
      n[t] = (0, l.default)(Y[e], "contexts[bufferKey]").stringBuffer();
    }
    const r = yield Promise.all((0, o.default)(n, (t, n) => he(t, n, (0, L.getChannelFromBufferKey)(e))));
    const i = r.filter(Boolean);
    if (i.length !== r.length) {
      K = (0, d.unixTimeWithoutClockSkewCorrection)();
      H = true;
    }
    if (Y[e] && !i.includes(Y[e].saveKey)) {
      Y[e] = null;
    }
    if (i.length === 0) {
      return;
    }
    const s = i.reduce(function (e, t) {
      return e + n[t].length;
    }, 0);
    if (s < T.WAM_MAX_BUFFER_SIZE) {
      yield Promise.all((0, o.default)(i, function () {
        var t = (0, a.default)(function* (t) {
          try {
            yield w.default.add(t, e, n[t]);
          } catch (e) {
            __LOG__(3)`sendAllLogs: adding to WamStorage failed`;
          }
        });
        return function () {
          return t.apply(this, arguments);
        };
      }()));
    } else {
      Y[e] = null;
      __LOG__(3)`wam dropped ${i.length} buffers! (${s} bytes)`;
    }
  })).apply(this, arguments);
}
function he(e, t, n) {
  if (e === "" || e[0] === "[" || (0, L.isWamBufferTooLong)(e)) {
    return Promise.resolve();
  } else if (n === "private") {
    return (0, y.default)(e, t);
  } else if (n === "regular") {
    return (0, E.default)(e, t);
  } else {
    return Promise.resolve();
  }
}