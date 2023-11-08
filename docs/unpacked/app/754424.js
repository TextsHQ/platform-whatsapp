var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extendedFetch = function () {
  return g.apply(this, arguments);
};
exports.sharedFetch = m;
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./898817.js");
var s = require("./459617.js");
var l = require("./791357.js");
var u = require("./507942.js");
var c = r(require("./284187.js"));
var d = r(require("./381912.js"));
var p = r(require("./556869.js"));
var f = require("../vendor/725241.js");
const _ = require("../vendor/76672.js")({
  UNSENT: 0,
  OPENED: 1,
  HEADERS_RECEIVED: 2,
  LOADING: 3,
  DONE: 4
});
function g() {
  return (g = (0, a.default)(function* (e) {
    let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    try {
      if ((0, u.canUseExtendedFetchWithStreams)(t.method)) {
        return yield (0, u.extendedFetchWithStreams)(e, t);
      } else {
        return yield m(e, t);
      }
    } catch (e) {
      if (e.name === o.ABORT_ERROR) {
        throw new o.AbortError();
      }
      if (e instanceof l.HttpNetworkError) {
        throw e;
      }
      throw new l.HttpNetworkError(e.message);
    }
  })).apply(this, arguments);
}
function m(e) {
  let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return new Promise((n, r) => {
    var o;
    if ((o = t.signal) === null || o === undefined ? undefined : o.aborted) {
      return void r(new f.DOMException("AbortError"));
    }
    const u = new XMLHttpRequest();
    if (t.signal) {
      const e = t.signal;
      e.addEventListener("abort", function t() {
        e.removeEventListener("abort", t);
        u.onreadystatechange = () => {};
        u.abort();
        r(new f.DOMException("AbortError"));
      });
    }
    const {
      onProgress: g,
      onData: m
    } = t;
    var h;
    if (g != null || m) {
      (((h = t.method) === null || h === undefined ? undefined : h.toLowerCase()) === "post" && u.upload != null ? u.upload : u).onprogress = e => {
        if (m) {
          m(e, u.responseText);
        }
        if (g) {
          g(e);
        }
      };
    }
    const {
      onHeadersReceived: y
    } = t;
    u.onreadystatechange = () => {
      if (u.readyState === _.UNSENT) {
        r((0, p.default)("fetch error: not sent"));
      } else if (u.readyState === _.HEADERS_RECEIVED && y != null) {
        y(new d.default((0, c.default)(u.getAllResponseHeaders())));
      } else if (u.readyState === _.DONE) {
        if (u.status == null) {
          return void r((0, p.default)("fetch error: no status"));
        }
        if (u.status === 0 || u.status >= 12000) {
          return void r((0, p.default)(`fetch error: unexpected status ${u.status}`));
        }
        n(S());
      }
    };
    u.onerror = () => r((0, p.default)("fetch error: error"));
    u.ontimeout = () => {
      r(new l.HttpTimedOutError("fetch error: timedout"));
    };
    u.withCredentials = t.credentials === "include";
    if (t.timeout != null) {
      u.timeout = t.timeout;
    }
    u.open(t.method || "get", e.toString(), true);
    const E = new d.default(t.headers || {});
    for (const e of E.keys()) {
      const t = E.get(e);
      if (t != null) {
        u.setRequestHeader(e, t);
      }
    }
    function S() {
      const e = new d.default((0, c.default)(u.getAllResponseHeaders()));
      return (0, i.default)((0, i.default)({
        ok: u.status >= 200 && u.status < 300,
        statusText: u.statusText,
        status: u.status,
        url: u.responseURL
      }, function () {
        if (m) {
          return {
            text: () => Promise.resolve(u.responseText),
            json: () => Promise.resolve(JSON.parse(u.responseText)),
            arrayBuffer: () => (0, s.largeStringToArrayBuffer)(u.responseText)
          };
        }
        return {
          text: () => v(),
          json: (e = (0, a.default)(function* () {
            const e = yield v();
            return JSON.parse(e);
          }), function () {
            return e.apply(this, arguments);
          }),
          arrayBuffer: () => u.response
        };
        var e;
      }()), {}, {
        blob: () => Promise.resolve(new Blob([u.response], {
          type: e.get("content-type") || ""
        })),
        clone: S,
        headers: e
      });
    }
    function v() {
      return Promise.resolve(String.fromCharCode(...Array.from(new Uint8Array(u.response))));
    }
    if (m) {
      u.overrideMimeType("text/plain; charset=x-user-defined");
    } else {
      u.responseType = "arraybuffer";
    }
    u.send(t.body || null);
  });
}