var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mainScriptTimer = exports.initialScreenTimer = exports.exeTimer = exports.PageLoad = undefined;
exports.onInitialRenderComplete = function () {
  p();
};
exports.saveInitialPanelMountTime = function (e) {
  u = e;
};
exports.setInitialScreen = function (e) {
  if (c == null) {
    return;
  }
  c.set({
    webcInitialPanel: e
  });
};
exports.streamInfoChange = function (e, t, n) {
  const r = Math.floor(self.performance.now());
  d[e] = r;
  if (n) {
    d.socketSequence = t;
    f();
  }
};
var i = r(require("./670983.js"));
var a = require("./154378.js");
var o = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = l(t);
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
}(require("./824194.js"));
var s = r(require("./24650.js"));
function l(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (l = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
let u;
let c = new (require("./453060.js").WebcPageLoadWamEvent)();
const d = {};
let p;
let f;
const _ = new Promise(e => p = e);
const g = new Promise(e => f = e);
let m;
let h = false;
function y(e) {
  if (self.performance && self.performance.timing && self.performance.timing.navigationStart) {
    return e - self.performance.timing.navigationStart;
  } else {
    return null;
  }
}
function E() {
  if (c && document.hidden) {
    m = false;
  }
}
function S() {
  var e;
  if (!((e = self.performance) === null || e === undefined ? undefined : e.timing) || !self.performance.navigation) {
    return void __LOG__(2)`MetricReporter:logPageLoad metrics not provided by browser!`;
  }
  if (!c) {
    return;
  }
  const t = c;
  const n = self.performance.timing;
  const r = self.performance.navigation;
  const i = n.navigationStart;
  const a = n.loadEventEnd - i;
  if (a <= 0) {
    __LOG__(2)`MetricReporter:logPageLoad delayed`;
    return void self.setTimeout(S, 10000);
  }
  function o(e) {
    const t = n[e];
    return t && y(t);
  }
  t.set({
    webcPageLoadT: a,
    webcUnloadEventStart: o("unloadEventStart"),
    webcUnloadEventEnd: o("unloadEventEnd"),
    webcRedirectStart: o("redirectStart"),
    webcRedirectEnd: o("redirectEnd"),
    webcFetchStart: o("fetchStart"),
    webcDomainLookupStart: o("domainLookupStart"),
    webcDomainLookupEnd: o("domainLookupEnd"),
    webcConnectStart: o("connectStart"),
    webcConnectEnd: o("connectEnd"),
    webcSecureConnectionStart: o("secureConnectionStart"),
    webcRequestStart: o("requestStart"),
    webcResponseStart: o("responseStart"),
    webcResponseEnd: o("responseEnd"),
    webcDomLoading: o("domLoading"),
    webcDomInteractive: o("domInteractive"),
    webcDomContentLoadedEventStart: o("domContentLoadedEventStart"),
    webcDomContentLoadedEventEnd: o("domContentLoadedEventEnd"),
    webcDomComplete: o("domComplete"),
    webcLoadEventStart: o("loadEventStart"),
    webcLoadEventEnd: o("loadEventEnd"),
    webcCached: n.fetchStart === n.domainLookupEnd,
    webcNavigation: r.type,
    webcRedirectCount: r.redirectCount,
    webcWsOpening: d.OPENING,
    webcWsPairing: d.PAIRING,
    webcWsSyncing: d.SYNCING,
    webcWsNormal: d.NORMAL,
    webcWsAttempts: d.socketSequence,
    webcQrCode: !d.SYNCING,
    webcInitialPanelMountT: u - i,
    webcLoadInForeground: m
  });
  t.commit();
  if (window.document) {
    document.removeEventListener("visibilitychange", E);
  }
  c = null;
}
if (window.document) {
  m = !document.hidden;
  document.addEventListener("visibilitychange", E);
}
Promise.all([_, g]).then(() => {
  S();
  (0, s.default)();
  if (!h) {
    h = true;
    a.Wam.resumeJobs();
  }
});
class v {
  constructor(e) {
    this._hasStarted = false;
    this._label = e.label;
    this._startProperty = e.startProperty;
    this._endProperty = e.endProperty;
  }
  start() {
    this._hasStarted = true;
    if (c != null) {
      c.set({
        [this._startProperty]: y(Date.now())
      });
      this._measure = o.startMeasure(this._label);
    }
  }
  end() {
    if (c != null) {
      c.set({
        [this._endProperty]: y(Date.now())
      });
      (0, i.default)(this._measure, "this._measure").end();
    }
  }
  hasStarted() {
    return this._hasStarted;
  }
}
const T = new v({
  label: "PageLoad.webcExe",
  startProperty: "webcExeStart",
  endProperty: "webcExeDone"
});
exports.exeTimer = T;
const M = new v({
  label: "PageLoad.webcMainScript",
  startProperty: "webcMainScriptStart",
  endProperty: "webcMainScriptEnd"
});
exports.mainScriptTimer = M;
const A = new v({
  label: "PageLoad.webcInitialPanelRender",
  startProperty: "webcInitialPanelMountStartT",
  endProperty: "webcInitialPanelRenderT"
});
exports.initialScreenTimer = A;
const b = (0, i.default)(c, "_PageLoad");
exports.PageLoad = b;