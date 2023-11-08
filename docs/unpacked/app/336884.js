var r = require("../vendor/595318.js");
var i = r(require("../vendor/348926.js"));
var a = require("./508247.js");
require("./650201.js");
var o = r(require("./97359.js"));
var s = require("./222601.js");
r(require("./98165.js"));
var l = r(require("./286816.js"));
require("../vendor/548360.js");
function u() {
  return (u = (0, i.default)(function* () {
    var e;
    var t;
    const {
      loadStackPromisePolyfill: r
    } = require("./312592.js");
    r();
    const {
      setupLodashMemoizeCache: u
    } = require("./67819.js");
    u();
    window.__LOG__ = require("./591547.js").log;
    window.SEND_LOGS = require("./996588.js").sendLogs;
    window.onerror = require("./463812.js").HC;
    window.onunhandledrejection = require("./463812.js").TG;
    const {
      initializePREMetrics: c
    } = require("./377795.js");
    c();
    const d = require("./174285.js").default;
    self.URL = self.URL || self.webkitURL;
    self.AudioContext = self.AudioContext || self.webkitAudioContext;
    self.requestFileSystem = self.requestFileSystem || self.webkitRequestFileSystem;
    require("./846870.js").default;
    const {
      KEYS: p
    } = require("./94872.js");
    const {
      UA: f
    } = require("./368170.js");
    const _ = (d == null ? undefined : d.getItem(p.LOGOUT_DIRTY_BIT)) === "1";
    const g = !(d == null ? undefined : d.getItem(p.LAST_WID_MD)) && !(d == null ? undefined : d.getItem(p.LAST_WID));
    const {
      deleteAllIdb: m
    } = require("./344611.js");
    const {
      initWAWC: h
    } = require("./460888.js");
    if (_ || g) {
      try {
        yield m();
        yield h();
      } catch (e) {
        __LOG__(4, undefined, new Error(), undefined, ["app-wrapper"])`Preemptive db delete failed with error ${e}`;
      }
    }
    const {
      copyUserPrefValuesToCacheStorage: y
    } = require("./442988.js");
    yield y();
    const E = new (0, require("./665810.js").default)((e = window.location.search) !== null && e !== undefined ? e : "");
    if (_) {
      if (!(d == null)) {
        d.clear();
      }
      E.set("post_logout", "1");
      window.location.href = `${window.location.pathname}?${E.toString()}`;
    }
    const S = E.get("logout_reason");
    if (S != null) {
      (0, require("./383047.js").setPrevLogoutReasonCode)(S);
    }
    const v = E.get("logout_message_header");
    const T = E.get("logout_message_subtext");
    if (v != null || T != null) {
      (0, require("./383047.js").setPrevCustomLogoutMessage)({
        logoutMessageHeader: v,
        logoutMessageSubtext: T
      });
    }
    if (E.get("post_logout") === "1" || S != null) {
      if (require("./79291.js").default.canMuckHistory()) {
        window.history.replaceState({}, document.title, "/");
      }
    }
    require("./430252.js").fetchKillswitchValues();
    const {
      initModules: M
    } = require("./981433.js");
    M();
    const {
      initializeABPropsCache: A
    } = require("./238196.js");
    A();
    const {
      initWamRuntime: b
    } = require("./154378.js");
    b();
    require("./550660.js");
    const {
      exeTimer: C
    } = require("./115383.js");
    C.start();
    const P = require("./670983.js").default;
    const O = require("../vendor/620745.js");
    const I = require("../vendor/667294.js");
    if (f.isSafari && f.browserVersion.startsWith("13.")) {
      P(document.body, "document.body").className += " text-rendering-bug-fix";
    }
    require("./694114.js");
    window.Velocity = require("../vendor/512641.js");
    require("../vendor/38161.js");
    require("./959206.js").registerEffects();
    const R = require("./542137.js");
    const N = require("./403868.js").Z;
    R.set(N);
    const {
      isFunction: D
    } = require("./724976.js");
    ["getSelection", "open", "focus"].forEach(function (e) {
      const t = Object.getPrototypeOf(window)[e];
      if (D(t) && window[e] !== t) {
        window[e] = t;
      }
    });
    if (!window.Debug) {
      window.Debug = {};
    }
    try {
      if (f.isLocalStorageBroken) {
        const e = require("./584666.js").default;
        yield e.loadUserIdb();
      }
    } finally {
      const e = require("./932325.js").default;
      const t = (0, o.default)(require("./627162.js")).getLangPref();
      e.init(t).then((0, i.default)(function* () {
        const {
          Clock: e
        } = yield Promise.resolve().then(require.bind(require, 63014));
        e.setIs24HourBasedOnLocale();
      }));
      require("./591547.js").Logger;
      const {
        App: r,
        hasPending: s
      } = require("./446709.js");
      window.Debug.VERSION = a.VERSION_STR;
      window.Debug.DESKTOP_BETA = false;
      window.Debug.BUILD_ID = a.BUILD_ID;
      const u = require("./524173.js").default;
      window.onbeforeunload = function () {
        let e = false;
        {
          const {
            closeSocketBeforeUnload: t,
            forceReconnectSocketLoopIfUnloadFails: r
          } = require("./446709.js");
          const {
            isOpeningDeeplinkInCurrentTab: i
          } = require("./753233.js");
          const o = s();
          if (!o && !i()) {
            try {
              e = true;
              t();
            } catch (e) {
              __LOG__(4, undefined, new Error())`error while stopping comms onbeforeunload: ${e}`;
            }
          }
          if (u.isDownloading()) {
            return void u.clearDownloading();
          }
          __LOG__(2)`webclient close/reload triggered`;
          __LOG__(2)`latest hash: ${a.HASH_PLACEHOLDER}`;
          __LOG__(2)`version: ${a.VERSION_STR}`;
          if (u.promptUnloadGuards > 0) {
            return;
          }
          if (o) {
            __LOG__(2)`Prompt webclient close/reload due to pending draft message`;
            return l.default._("You are closing WhatsApp.", null, {
              hk: "2eSubU"
            }).toString();
          }
          if (e) {
            self.setTimeout(() => {
              try {
                __LOG__(4, undefined, new Error())`unload failed, force restarting comms`;
                r();
              } catch (e) {
                __LOG__(4, undefined, new Error())`error while force restarting comms after unload failure: ${e}`;
              }
            }, 15000);
          }
        }
      };
      window.addEventListener("dragover", function (e) {
        e.preventDefault();
      });
      window.addEventListener("drop", function (e) {
        e.preventDefault();
      });
      if (!(0, require("./103375.js").Z)()) {
        const e = P(document.getElementById("app"), "document.getElementById('app')");
        O.createRoot(e).render(I.createElement(r, null));
        C.end();
      }
    }
    require("./787827.js").isWebUserOnSupportedWindowsOSForUWPAsync();
    if (window.navigator.serviceWorker && !window.navigator.serviceWorker.controller) {
      try {
        yield window.navigator.serviceWorker.register(`${a.WEB_PUBLIC_PATH}serviceworker.js`, {
          scope: a.WEB_PUBLIC_PATH
        });
      } catch (e) {
        __LOG__(4, undefined, new Error(), true)`service-worker-registration-failure: ${e.stack}`;
        SEND_LOGS("service-worker-registration-failure");
      }
    } else if ((t = window.navigator.serviceWorker) === null || t === undefined ? undefined : t.controller) {
      (0, s.updateSw)();
    }
  })).apply(this, arguments);
}
!function () {
  u.apply(this, arguments);
}();