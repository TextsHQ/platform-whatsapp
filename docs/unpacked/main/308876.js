var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const t = (0, i.useRef)(null);
  const n = (0, s.default)();
  const a = (0, u.default)(e.onDOMCommit);
  const c = (0, u.default)(e.onMount);
  const d = (0, u.default)(e.onBeforePaint);
  const f = (0, u.default)(e.onAfterPaint);
  const p = (0, u.default)(e.onUnmount);
  const m = (0, u.default)(e.onError);
  (0, i.useEffect)(() => {
    c();
    t.current = window.requestAnimationFrame(() => {
      t.current = null;
      d();
    });
    (0, l.documentFlushed)({
      signal: n
    }).then(() => {
      if (!n.aborted) {
        f();
      }
    }).catch((0, o.filteredCatch)(r.AbortError, m));
    return () => {
      if (t.current != null) {
        window.cancelAnimationFrame(t.current);
      }
      p();
    };
  }, [c, d, f, p, m, n]);
  (0, i.useLayoutEffect)(() => {
    a();
  }, [a]);
};
var r = require("../app/898817.js");
var o = require("../app/122583.js");
var l = require("../app/493288.js");
var i = require("../vendor/667294.js");
var u = a(require("../app/17533.js"));
var s = a(require("../app/895851.js"));