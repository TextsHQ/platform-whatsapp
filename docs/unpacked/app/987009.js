var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = U;
var i = r(require("../vendor/348926.js"));
var a = require("./250281.js");
var o = require("./44276.js");
var s = require("./917406.js");
var l = require("./359987.js");
var u = require("./320437.js");
var c = r(require("./542817.js"));
var d = require("./508247.js");
var p = require("./780549.js");
var f = require("./642067.js");
var _ = r(require("./762848.js"));
var g = require("./188472.js");
var m = require("./476443.js");
var h = require("./110567.js");
var y = require("./422481.js");
var E = require("./542137.js");
var S = require("./65889.js");
var v = require("./555823.js");
var T = require("./598031.js");
var M = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = L(t);
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
}(require("./218925.js"));
var A = require("./282062.js");
var b = require("./309998.js");
var C = require("./311721.js");
var P = require("./38878.js");
var O = require("./581263.js");
var I = require("./757453.js");
var R = require("./68389.js");
var N = require("./673168.js");
var D = require("./209983.js");
var w = r(require("./556869.js"));
function L(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (L = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function k() {
  return G.apply(this, arguments);
}
function G() {
  return (G = (0, i.default)(function* () {
    const e = (0, f.getCommsConfig)(undefined);
    (0, a.startComms)(_.default, e, e => Promise.resolve((0, o.inflate)(e)));
    yield (0, a.waitForConnection)();
    return (0, a.startHandlingRequests)();
  })).apply(this, arguments);
}
function U() {
  __LOG__(2)`start launchSocket`;
  const e = (0, u.makeBridge)();
  (0, l.setApi)(e);
  (0, S.requireSetFrontendHandlers)().then(t => t(e));
  (0, S.requireSetWorkerSafeHandlers)().then(t => t(e));
  h.ftsClient.initialize();
  return (0, m.loadSchemaVersions)().then(() => {
    __LOG__(2)`db: send schema versions to fts worker`;
    return void (0, E.get)().setSchemaVersions((0, b.getSchemaVersions)());
  }).then(() => (0, g.initEncSalt)()).then(() => (0, g.initEncSaltForInvoker)()).then(() => (0, C.initialize)()).then(() => (0, v.initialize)().then(() => (0, T.migrateMDUserPrefsToIndexedDB)())).then(() => {
    {
      const e = require("./961209.js").j2;
      return Promise.all([(0, I.getLogoutReason)(), e(), (0, I.setAppVersionBase)(d.VERSION_BASE)]);
    }
  }).catch(e => {
    __LOG__(4, undefined, new Error(), undefined, ["launch-socket"])`storageInitializationError triggered logout: ${(e == null ? undefined : e.message) || (e == null ? undefined : e.name)}.`;
    p.Cmd.storageInitializationError();
  }).then(e => {
    const t = e == null ? undefined : e[0];
    if (t) {
      P.Socket.logout(t.reason);
    }
    if (c.default.isLogoutInProgress) {
      throw (0, w.default)("aborting launchSocket due to logout");
    }
    if ((0, N.isRegistered)()) {
      __LOG__(2)`[launch socket] launch socket for loggin`;
      (0, R.setIsConnectedAsRegistered)(true);
      p.Cmd.initialLoadReady();
      return (0, v.initialize)().catch(() => p.Cmd.storageInitializationError()).then(s.updateABPropsFromStorage).then(() => {
        p.Cmd.abPropsLoaded();
        (0, y.restoreImportantMetaData)();
      }).then(() => (0, y.restoreBlocklist)()).then(() => {
        M.setStartCommsT();
        (0, O.startBackend)();
      });
    } else {
      __LOG__(2)`[launch socket] launch socket for registration`;
      D.OfflineResumeReporter.setIsInitialSync();
      return Promise.all([(0, A.refreshNoiseCredentials)(), (0, A.refreshSignalCredentials)()]).then(() => {
        k();
      });
    }
  });
}
p.Cmd.on("md_refresh_qr", () => {
  (0, a.stopComms)();
  k();
});
p.Cmd.on("logout", () => {
  U();
});
p.Cmd.on("reconnect_socket", () => {
  (0, a.forceAbortSocketConnection)();
  (0, a.maybeResetSocketLoop)();
});