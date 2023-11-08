var r = require("./530066.js").default;
var i = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadUrlError = undefined;
exports.getSupportedImageFormatUrl = _;
exports.loadUrl = function (e) {
  const t = new r();
  const n = _(e).then(function () {
    var n = (0, a.default)(function* (n) {
      yield c.default.waitIfOffline({
        signal: t.signal
      });
      const r = Date.now();
      const i = yield (0, u.extendedFetch)(n, {
        signal: t.signal
      });
      const a = e.getConsumerPromiseResolve();
      if (!i.ok || !a) {
        throw new f(n, i.status, Date.now() - r);
      }
      a(n);
    });
    return function () {
      return n.apply(this, arguments);
    };
  }());
  e.setLoadUrlPromise(n, t);
  return n;
};
var a = i(require("../vendor/348926.js"));
var o = require("./477689.js");
var s = i(require("./670983.js"));
var l = require("./868607.js");
var u = require("./754424.js");
var c = i(require("./99398.js"));
const d = "default";
const p = "webp";
class f extends (0, o.customError)("LoadUrlError") {
  constructor(e, t, n) {
    super(`Failed to load url. StatusCode: ${t}. Duration: ${n} ms`);
    this.url = e;
    this.statusCode = t;
  }
}
function _() {
  return g.apply(this, arguments);
}
function g() {
  return (g = (0, a.default)(function* (e) {
    const t = yield (0, l.detectWebpSupport)();
    const {
      asset: n,
      resolution: r
    } = e;
    const i = t && n[r][p] ? p : d;
    return (0, s.default)(n[r][i], "asset[resolution][format]");
  })).apply(this, arguments);
}
exports.LoadUrlError = f;