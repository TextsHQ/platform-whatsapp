var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./8304.js");
var s = require("./780549.js");
var l = require("./924910.js");
var u = require("./359484.js");
var c = require("./38878.js");
var d = require("./157942.js");
var p = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = g(t);
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
}(require("../vendor/667294.js"));
var f = require("./808446.js");
var _ = r(require("./895851.js"));
function g(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (g = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const m = require("../vendor/76672.js").Mirrored(["INITIAL_LOAD", "CONNECTING", "FAKE_FILL", "DOWNLOADING", "ORGANIZING"]);
const h = require("../vendor/76672.js").Mirrored(["NOT_STARTED", "STARTED", "PAST_MIN_TIME"]);
var y = e => {
  let {
    onReady: t,
    onLogout: n,
    initialLoadReady: r
  } = e;
  const g = (0, _.default)();
  const y = (0, p.useRef)(false);
  const [E, S] = (0, p.useState)(r ? l.Stage.CONNECTING : l.Stage.INITIAL_LOAD);
  const [v] = (0, p.useState)((0, d.getInitialHistorySyncCompleteLocalStorage)());
  const [T, M] = (0, p.useState)({
    INITIAL_LOAD: r ? h.PAST_MIN_TIME : h.NOT_STARTED,
    CONNECTING: h.NOT_STARTED,
    FAKE_FILL: h.NOT_STARTED,
    DOWNLOADING: h.NOT_STARTED,
    ORGANIZING: h.NOT_STARTED
  });
  const [A, b] = (0, p.useState)(0);
  const [C, P] = (0, p.useState)(null);
  (0, f.useListener)(s.Cmd, "offline_progress_update", () => {
    const e = u.OfflineMessageHandler.getHasMessagesToDownload();
    if (C == null && e != null) {
      P(e);
    }
    if (e === true && T.CONNECTING === h.PAST_MIN_TIME) {
      b(u.OfflineMessageHandler.getOfflineDeliveryProgress());
    }
  });
  const O = (0, p.useCallback)(function () {
    var e = (0, a.default)(function* (e, t) {
      M(t => (0, i.default)((0, i.default)({}, t), {}, {
        [e]: h.STARTED
      }));
      __LOG__(2)`DebouncedLoadingScreen: ${e} - starts minimum display time`;
      yield (0, o.delayMs)(t);
      if (!g.aborted) {
        M(t => (0, i.default)((0, i.default)({}, t), {}, {
          [e]: h.PAST_MIN_TIME
        }));
        __LOG__(2)`DebouncedLoadingScreen: ${e} - ends minimum display time`;
      }
    });
    return function () {
      return e.apply(this, arguments);
    };
  }(), [g]);
  const {
    CONNECTING: I,
    DOWNLOADING: R,
    ORGANIZING: N,
    FAKE_FILL: D,
    INITIAL_LOAD: w
  } = T;
  (0, p.useEffect)(() => {
    if (N === h.PAST_MIN_TIME) {
      if (!y.current) {
        t();
        y.current = true;
      }
    } else if (R === h.PAST_MIN_TIME && A >= 100 && N === h.NOT_STARTED) {
      (0, o.delayMs)(450).then(() => {
        if (!g.aborted) {
          S(l.Stage.ORGANIZING);
          O(m.ORGANIZING, 800);
        }
      });
    } else if (I === h.PAST_MIN_TIME && C != null && R === h.NOT_STARTED && D === h.NOT_STARTED) {
      const e = u.OfflineMessageHandler.getFinishedDownloading();
      if (C && !e) {
        S(l.Stage.DOWNLOADING);
        b(u.OfflineMessageHandler.getOfflineDeliveryProgress());
        O(m.DOWNLOADING, 450);
      } else {
        b(100);
        O(m.FAKE_FILL, 450).then(() => {
          if (!g.aborted) {
            if (c.Socket.hasSynced) {
              if (!y.current) {
                t();
                y.current = true;
              }
            } else {
              S(l.Stage.ORGANIZING);
              O(m.ORGANIZING, 800);
            }
          }
        });
      }
    } else if (r && w === h.PAST_MIN_TIME && I === h.NOT_STARTED) {
      S(l.Stage.CONNECTING);
      O(m.CONNECTING, 1500);
    } else if (w === h.NOT_STARTED) {
      O(m.INITIAL_LOAD, 500);
    }
  }, [A, t, C, O, g, r, I, R, N, D, w]);
  let L = l.LoadingScreenTheme.MULTI_STAGE;
  if (r) {
    L = v ? C === true ? l.LoadingScreenTheme.UNIFIED_WITH_PROGRESS : l.LoadingScreenTheme.LOGO : l.LoadingScreenTheme.UNIFIED;
  }
  return p.default.createElement(l.LoadingScreen, {
    stage: E,
    progress: A,
    onLogout: n,
    theme: L
  });
};
exports.default = y;