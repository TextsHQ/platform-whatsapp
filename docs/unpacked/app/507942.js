var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canUseExtendedFetchWithStreams = function (e) {
  return "fetch" in self && "ReadableStream" in self && (e === "get" || e == null) && (0, o.isNativeFetchEnabled)();
};
exports.extendedFetchWithStreams = function () {
  return l.apply(this, arguments);
};
var i = r(require("../vendor/506479.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./75421.js");
const s = ["onHeadersReceived", "onProgress", "onData", "timeout"];
function l() {
  return (l = (0, a.default)(function* (e, t) {
    var n;
    const {
      onHeadersReceived: r,
      onProgress: a,
      onData: o,
      timeout: l
    } = t;
    const c = (0, i.default)(t, s);
    const d = yield self.fetch(e, c);
    const p = d.headers;
    if (!(r == null)) {
      r(p);
    }
    if (a == null && o == null || c.method !== "get" && c.method != null) {
      return d;
    }
    const f = p.get("Content-Length");
    const _ = f != null ? Number.parseInt(f, 10) : null;
    u((n = d.clone().body) === null || n === undefined ? undefined : n.getReader(), {
      onProgress: a,
      onData: o
    }, {
      contentLength: _
    });
    return d;
  })).apply(this, arguments);
}
function u(e, t, n) {
  if (e == null) {
    return;
  }
  let r = 0;
  return new ReadableStream({
    start(i) {
      !function a() {
        e.read().then(e => {
          var o;
          var s;
          let {
            done: l,
            value: u
          } = e;
          if (l || !(u instanceof Uint8Array)) {
            return i.close();
          }
          r += u.byteLength;
          const c = new ProgressEvent("progress", {
            total: n.contentLength,
            lengthComputable: n.contentLength != null,
            loaded: r
          });
          if (!((o = t.onData) === null || o === undefined)) {
            o.call(t, c, u.buffer);
          }
          if (!((s = t.onProgress) === null || s === undefined)) {
            s.call(t, c);
          }
          i.enqueue(u);
          a();
        }).catch(() => {
          i.close();
        });
      }();
    }
  });
}