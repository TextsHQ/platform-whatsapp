var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TAGS = p;
exports.getWaLoggerAdditionalOptions = f;
exports.initializeWaLogger = function (e) {
  var t;
  c = e;
  if (!((t = s) === null || t === undefined)) {
    t();
  }
  s = null;
};
exports.whenReady = function () {
  return u.apply(this, arguments);
};
var i = r(require("../vendor/311504.js"));
var a = require("./650278.js");
var o = r(require("./670983.js"));
let s;
const l = new Promise(e => {
  s = e;
});
function u() {
  return (u = (0, i.default)(function* () {
    yield l;
  })).apply(this, arguments);
}
let c = null;
function d() {
  return (0, o.default)(c, "WALogger called before initialization");
}
function p(e) {
  return {
    TAGS: t => p([...e, ...t]),
    DEV: function (t) {
      for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) {
        r[i - 1] = arguments[i];
      }
      const o = (0, a.rebuildTemplate)(t, r);
      const s = {
        level: "DEV",
        template: t,
        expressions: r,
        logString: o
      };
      d().debug(o, e, s);
      return f(s);
    },
    DEV_XMPP: function (t) {
      for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) {
        r[i - 1] = arguments[i];
      }
      const o = (0, a.rebuildTemplate)(t, r);
      const s = {
        level: "DEV_XMPP",
        template: t,
        expressions: r,
        logString: o
      };
      d().logRestricted(o, e, s);
      return f(s);
    },
    LOG: function (t) {
      for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) {
        r[i - 1] = arguments[i];
      }
      const o = (0, a.rebuildTemplate)(t, r);
      const s = {
        level: "LOG",
        template: t,
        expressions: r,
        logString: o
      };
      d().info(o, e, s);
      return f(s);
    },
    WARN: function (t) {
      for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) {
        r[i - 1] = arguments[i];
      }
      const o = (0, a.rebuildTemplate)(t, r);
      const s = {
        level: "WARN",
        template: t,
        expressions: r,
        logString: o
      };
      d().warn(o, e, s);
      return f(s);
    },
    ERROR: function (t) {
      for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) {
        r[i - 1] = arguments[i];
      }
      const o = (0, a.rebuildTemplate)(t, r);
      const s = {
        level: "ERROR",
        template: t,
        expressions: r,
        logString: o
      };
      let l;
      for (const e of r) {
        if (e instanceof Error) {
          l = e;
          break;
        }
      }
      if (l != null) {
        d().error(o, e, l, s);
      } else {
        d().error(o, e, undefined, s);
      }
      return f(s);
    },
    CATCHING: function (t) {
      for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) {
        r[i - 1] = arguments[i];
      }
      const o = (0, a.rebuildTemplate)(t, r);
      const s = {
        level: "CATCHING",
        template: t,
        expressions: r,
        logString: o
      };
      d().error(o, e, undefined, s);
      return f(s);
    }
  };
}
function f(e) {
  return {
    verbose: () => {
      e.verbose = true;
      return f(e);
    },
    color: t => {
      e.color = t;
      return f(e);
    },
    devConsole: function () {
      for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) {
        n[r] = arguments[r];
      }
      d().devConsole(e.level, e.logString, [], ...n);
      return f(e);
    },
    sendLogs: (t, n) => {
      var r;
      var i;
      if (d().sendLogs != null) {
        e.sendLogs = {
          reason: t,
          sampling: n
        };
        if (!((r = (i = d()).sendLogs) === null || r === undefined)) {
          r.call(i, e);
        }
      } else if (e.level !== "ERROR" && e.level !== "CATCHING") {
        return p([]).ERROR`[${t}] ${e.logString}`;
      }
      return f(e);
    },
    tags: function () {
      for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) {
        n[r] = arguments[r];
      }
      e.tags = n;
      return f(e);
    }
  };
}