var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.USER_REPORT = exports.SERVER_REQUESTED = exports.MANUAL_UPLOAD = exports.LogType = undefined;
exports.registerCrashlogUploadInformationalLoggingFunction = function (e) {
  T = e;
};
exports.registerCrashlogUploadIsUserInExternalBetaFunction = function (e) {
  M = e;
};
exports.sendLogs = function () {
  return F.apply(this, arguments);
};
exports.upload = w;
var i = r(require("../vendor/348926.js"));
var a = r(require("../vendor/823493.js"));
var o = r(require("./542817.js"));
var s = require("./508247.js");
var l = require("./801506.js");
var u = require("./207024.js");
var c = require("./495726.js");
var d = r(require("./97359.js"));
var p = require("./697371.js");
var f = require("./591547.js");
var _ = require("./994569.js");
var g = require("./381162.js");
var m = require("./755985.js");
var h = r(require("./79291.js"));
var y = require("./459857.js");
var E = require("./513918.js");
var S = r(require("./556869.js"));
const v = e => new Promise(t => self.setTimeout(t, e));
let T;
let M;
const A = require("../vendor/76672.js")({
  CRASHLOG: "crashlog",
  SUPPORT: "support"
});
exports.LogType = A;
const b = "server-requested";
exports.SERVER_REQUESTED = b;
exports.MANUAL_UPLOAD = "manual-upload";
exports.USER_REPORT = "user-report";
const C = {
  electron_native: E.PS_CRASH_TYPE.NATIVE_CRASH,
  uncaught_error: E.PS_CRASH_TYPE.UNHANDLED_EXCEPTION,
  unhandled_promise: E.PS_CRASH_TYPE.UNHANDLED_EXCEPTION,
  sad: E.PS_CRASH_TYPE.CRITICAL_EVENT,
  logout: E.PS_CRASH_TYPE.APP_CRASH
};
const P = require("../vendor/76672.js")({
  ONLY_EXCEPTION: "only_exception"
});
const O = {
  shouldHitCheckEndpoint: () => false,
  expectedCodes: [],
  appendToFormDataForCheck: () => {},
  appendToFormDataForUpload: () => {},
  shouldUseLightWeightLogs: () => false
};
const I = {
  shouldHitCheckEndpoint: () => true,
  expectedCodes: [200, 403],
  appendToFormDataForCheck: (e, t) => {
    e.append("reason", t);
  },
  appendToFormDataForUpload: () => {},
  shouldUseLightWeightLogs: () => false
};
const R = {
  shouldHitCheckEndpoint: () => true,
  expectedCodes: [200, 403],
  appendToFormDataForCheck: (e, t) => {
    e.append("support_exception_only_upload", "true");
    e.append("reason", t);
  },
  appendToFormDataForUpload: (e, t) => {
    if (t && t.upload === P.ONLY_EXCEPTION) {
      e.append("exception_only_upload", "true");
    }
  },
  shouldUseLightWeightLogs: e => !!e && e.upload === P.ONLY_EXCEPTION
};
function N(e, t, n) {
  if (n) {
    return O;
  } else if (t) {
    return R;
  } else {
    return I;
  }
}
const D = (0, a.default)(k, 7200000, {
  trailing: false
});
function w() {
  return L.apply(this, arguments);
}
function L() {
  return (L = (0, i.default)(function* (e) {
    let {
      reason: t = "reason-unspecified",
      immediate: n = false,
      logType: r = A.CRASHLOG,
      isHighPri: i = false,
      nativeCrash: a,
      voipLog: s,
      hasTaggedMessage: l = false,
      ticketId: u,
      clientSamplingRate: d = 1,
      tags: p = []
    } = e;
    if (o.default.isLogoutInProgress) {
      return Promise.resolve();
    }
    let f = a ? p.concat("electron_native") : p;
    if (M && (yield M())) {
      f = f.concat("web-joined-beta");
    }
    if ((0, m.isWorker)()) {
      f = f.concat("service-worker");
    }
    if (d > 0 && d < 1) {
      f = f.concat(["sampled", d.toString()]);
    }
    try {
      const e = new c.CrashLogWamEvent();
      e.crashReason = t;
      const n = f.find(e => C[e]);
      if (n != null) {
        e.crashType = C[n];
      }
      if (f.length) {
        e.crashContext = f.join(",");
      }
      e.commitAndWaitForFlush().catch(e => {
        __LOG__(2)`wa:uploadLogs error during wam commit: ${e}`;
      });
    } catch (e) {
      __LOG__(2)`wa:uploadLogs error logging wam event: ${e}`;
    }
    if ((0, g.isWaitingForUpload)()) {
      return Promise.resolve();
    }
    (0, g.setWaitingForUpload)(true);
    if ((0, g.passesSampling)(d)) {
      let e = k;
      if (!i) {
        e = D;
      }
      const o = N(0, l, t === b);
      try {
        const c = yield e({
          isHighPri: i,
          immediate: n,
          logType: r,
          nativeCrash: a,
          voipLog: s,
          ticketId: u,
          getFullLogs: t === b,
          uploadStrategy: o,
          tags: f,
          reason: t,
          hasTaggedMessage: l
        });
        (0, g.setWaitingForUpload)(false);
        return c;
      } catch (e) {
        (0, g.setWaitingForUpload)(false);
        __LOG__(2)`wa:uploadLogs error uploading: ${e}`;
      }
    } else {
      (0, g.setWaitingForUpload)(false);
      __LOG__(2)`Crashlog:upload client sampling check w/rate: ${d} prevented upload`;
    }
  })).apply(this, arguments);
}
function k() {
  return G.apply(this, arguments);
}
function G() {
  return (G = (0, i.default)(function* (e) {
    var t;
    var n;
    let {
      isHighPri: r = false,
      immediate: i,
      logType: a,
      nativeCrash: o,
      voipLog: c,
      ticketId: d,
      getFullLogs: p = false,
      uploadStrategy: g,
      tags: m = [],
      reason: h = "reason-unspecified",
      hasTaggedMessage: y = false
    } = e;
    const E = T ? T() : {
      platform: undefined,
      ref: undefined
    };
    let M;
    __LOG__(2)`==================================================`;
    __LOG__(2)`wa:uploadLogs ref: ${(t = E.ref) !== null && t !== undefined ? t : "no conn"}`;
    __LOG__(2)`wa:uploadLogs hash: ${s.HASH_PLACEHOLDER}`;
    __LOG__(2)`wa:uploadLogs version: ${s.VERSION_BASE}`;
    __LOG__(2)`wa:uploadLogs userAgent: ${navigator.userAgent}`;
    __LOG__(2)`wa:uploadLogs platform: ${(n = E.platform) !== null && n !== undefined ? n : "no platform"}`;
    __LOG__(2)`wa:uploadLogs webPlatform: ${s.FLB_PLATFORM || "web"}`;
    __LOG__(2)`wa:uploadLogs appId: ${s.FB_APP_ID}`;
    __LOG__(2)`wa:uploadLogs url: ${location.href}`;
    __LOG__(2)`wa:uploadLogs distribution: ${(0, u.getDistribution)()}`;
    __LOG__(2)`wa:uploadLogs buildId: ${s.BUILD_ID || "0"}`;
    if (y) {
      __LOG__(2)`wa:uploadLogs hasTaggedMessage`;
    }
    __LOG__(2)`reason for logs: ${h}`;
    __LOG__(2)`${_.END_OF_UPLOAD}`;
    yield v(i ? 0 : 1000);
    if (g.shouldHitCheckEndpoint()) {
      const e = U({
        isHighPri: r
      });
      g.appendToFormDataForCheck(e, h);
      M = yield self.fetch(x(a), {
        method: "POST",
        body: e
      });
      if (!g.expectedCodes.includes(M.status)) {
        return void __LOG__(2)`Crashlog:doUpload code of ${M.status} from ${l.CLB_CHECK_URL} was unexpected, expected values are: ${g.expectedCodes.toString()}`;
      }
      if (M.status === 403) {
        return void __LOG__(2)`Crashlog:doUpload aborting crashlog upload due to 403 check response`;
      }
    } else {
      __LOG__(2)`Crashlog:doUpload skipping sampling check`;
    }
    let A = null;
    if (M) {
      try {
        var b;
        var C;
        A = JSON.parse(yield M.text());
        if (((b = A) === null || b === undefined || (C = b.config) === null || C === undefined ? undefined : C.sampling) != null && (A.config.sampling === 0 || Math.random() * A.config.sampling > 1)) {
          return void __LOG__(2)`Crashlog:doUpload server configured sampling check w/rate: ${A.config.sampling} prevented upload`;
        }
      } catch (e) {
        __LOG__(2)`Crashlog:failed to parse response from upload check ${String(e)}, will perform default upload`;
      }
    }
    const P = U({
      isHighPri: r
    });
    g.appendToFormDataForUpload(P, A);
    const O = (yield f.Logger.getLogs(p, g.shouldUseLightWeightLogs(A))).join("\n");
    const I = new Blob([O], {
      type: "text/plain"
    });
    P.append("file", I, "logs.txt");
    if (m.length) {
      P.append("tags", m.join(","));
    }
    if (d) {
      P.append("ticket_id", d);
    }
    if (o) {
      P.append("attachment", new Blob([o.contents], {
        type: "application/octet-stream"
      }), o.filename);
      P.set("agent", o.agent);
      if (c) {
        P.append("voip_log", new Blob([c.contents], {
          type: "text/plain"
        }), c.filename);
      }
    }
    const R = B(a);
    const N = yield self.fetch(R, {
      method: "POST",
      body: P
    });
    if (N.status !== 200) {
      throw (0, S.default)(`Status code of ${N.status} from ${R} was unexpected, expected 200`);
    }
    return N.headers.get("X-Uploaded-File-Id");
  })).apply(this, arguments);
}
function U(e) {
  let {
    isHighPri: t
  } = e;
  const r = new FormData();
  if (t) {
    r.append("forced", "true");
  }
  const i = (0, m.isWorker)() && !(0, p.areGlobalsReady)() ? undefined : (0, y.getMe)();
  if (i) {
    r.append("from_jid", i.toString());
  }
  const a = (0, d.default)(require("./524173.js")).info();
  const o = (0, u.getLogUserAgent)({
    device: a.os,
    browser: a.ua,
    appVersion: s.VERSION_BASE
  });
  r.append("agent", o);
  r.append("app_id", s.FB_APP_ID);
  r.append("build_id", s.BUILD_ID);
  return r;
}
function x(e) {
  return h.default.build(l.CLB_CHECK_URL, {
    type: String(e),
    access_token: l.CLB_TOKEN
  });
}
function B(e) {
  return h.default.build(l.CLB_URL, {
    type: String(e),
    access_token: l.CLB_TOKEN
  });
}
function F() {
  return (F = (0, i.default)(function* (e, t) {
    if (!f.Logger.isTakeOver) {
      try {
        for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) {
          r[i - 2] = arguments[i];
        }
        yield w({
          reason: e,
          hasTaggedMessage: true,
          clientSamplingRate: t != null ? t : 1,
          tags: r
        });
      } catch (e) {
        __LOG__(4, undefined, new Error())`Crash log sendLogs failed, ${e}`;
      }
    }
  })).apply(this, arguments);
}