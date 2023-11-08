exports.TG = function (e) {
  const {
    promise: t,
    reason: n
  } = e;
  const a = i.Logger.logUncaughtError(n, t);
  if (!d(n)) {
    return;
  }
  r.upload({
    reason: a,
    hasTaggedMessage: true,
    tags: ["unhandled_promise"]
  });
};
exports.HC = function (e, t, a, o, p) {
  if (function (e) {
    const t = [...l];
    t.push(...u);
    return t.some(t => {
      let {
        partialUserAgent: n,
        partialMsg: r
      } = t;
      return c.includes(n) && String(e).includes(r);
    });
  }(e)) {
    __LOG__(3)`Ignored Error: ${e || (p || "").toString()}`;
    return true;
  }
  try {
    const {
      UIM: e
    } = require("./238669.js");
    e.pprint(true);
  } catch (e) {
    __LOG__(3)`UIM Print Failed!`;
  }
  const f = t.split("?")[0];
  let _;
  _ = f && typeof a == "number" ? ` (${f}:${a}:${o})` : f ? ` (${f})` : "";
  if (e === "Script error." && !p) {
    i.Logger.logUncaughtError(`${_} ${e}`);
    if (f) {
      r.upload({
        reason: "script-error",
        hasTaggedMessage: true,
        tags: ["uncaught_error"]
      });
    }
    return false;
  }
  const g = p instanceof Error && p.stack ? p : `${e || `Given: ${String(p)}`}`;
  const m = i.Logger.logUncaughtError(g);
  if (!d(p)) {
    return true;
  }
  if (function (e) {
    return s.some(t => {
      let {
        partialMsg: n
      } = t;
      return String(e).includes(n);
    });
  }(e) || function (e) {
    return e instanceof Error && e.stack != null && e.stack.includes("chrome-extension://");
  }(p)) {
    return true;
  }
  r.upload({
    reason: m,
    hasTaggedMessage: true,
    tags: ["uncaught_error"]
  }).catch(() => {});
  return true;
};
var r = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = o(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var r = {};
  var i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e) {
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var s = i ? Object.getOwnPropertyDescriptor(e, a) : null;
      if (s && (s.get || s.set)) {
        Object.defineProperty(r, a, s);
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
}(require("./996588.js"));
var i = require("./591547.js");
var a = require("./288057.js");
function o(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (o = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const s = [{
  partialMsg: "webpackJsonp is not defined"
}, {
  partialMsg: "WUPE is not defined"
}, {
  partialMsg: "spectrum is not a function"
}, {
  partialMsg: "evaluating 'document.getElementsByClassName('_3B9bf')"
}, {
  partialMsg: "onWebLoad is not defined"
}];
const l = [{
  partialUserAgent: "Chrome",
  partialMsg: "ResizeObserver loop limit exceeded"
}, {
  partialUserAgent: "",
  partialMsg: "Failed to execute 'put' on 'Cache'"
}];
const u = [{
  partialUserAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36",
  partialMsg: "Cannot read property 'style' of null"
}, {
  partialUserAgent: "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.78 Safari/537.36",
  partialMsg: "Unexpected token :"
}, {
  partialUserAgent: "Firefox/52.0,,Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.0.4) Gecko/20100101 Firefox/52.0",
  partialMsg: "Cannot read property 'style' of undefined"
}, {
  partialUserAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Safari/605.1.15",
  partialMsg: "is not an object"
}, {
  partialUserAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36",
  partialMsg: "Cannot read property 'getElementsByTagName' of undefined"
}, {
  partialUserAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36",
  partialMsg: "Can't find variable: dismissKeyboard"
}, {
  partialUserAgent: "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.78 Safari/537.36",
  partialMsg: "ReferenceError: None is not defined"
}, {
  partialUserAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36",
  partialMsg: "Cannot read properties of null (reading 'style')"
}, {
  partialUserAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36",
  partialMsg: "Cannot read properties of undefined (reading 'getElementsByTagName')"
}, {
  partialUserAgent: "Chrome/60.0.3112.113",
  partialMsg: "Cannot read properties of null (reading 'removeChild')"
}, {
  partialUserAgent: "Chrome/60.0.3112.113",
  partialMsg: "Cannot read properties of undefined (reading 'isSettingDark')"
}];
const c = window.navigator.userAgent;
function d(e) {
  return ![a.DbOnLogoutAbort, a.DbClosedOnTakeover, a.DbNotFoundOnTakeover].some(t => e instanceof t);
}