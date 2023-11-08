var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const [t, n] = (0, s.useState)(null);
  const [a, r] = (0, s.useState)(d);
  const o = m(e);
  (0, s.useEffect)(() => {
    if (t) {
      return f().observe(t, r, e);
    }
  }, [t, o]);
  return [n, a];
};
var r = a(require("../vendor/81109.js"));
var o = a(require("../vendor/751463.js"));
var l = a(require("../app/270441.js"));
var i = a(require("../app/670983.js"));
var u = a(require("../app/556869.js"));
var s = require("../vendor/667294.js");
const c = {
  root: null,
  rootMargin: "0px",
  threshold: 0
};
const d = {
  intersectionRatio: 0,
  isIntersecting: false
};
const f = (0, o.default)(() => new p());
class p {
  constructor() {
    this._observers = new Map();
    this._getObserver = e => {
      const t = m(e);
      if (!this._observers.has(t)) {
        const n = new Map();
        const a = new IntersectionObserver(e => {
          for (const t of e) {
            const e = n.get(t.target);
            const {
              intersectionRatio: a,
              isIntersecting: r
            } = t;
            if (!(e == null)) {
              e({
                intersectionRatio: a,
                isIntersecting: r
              });
            }
          }
        }, e);
        this._observers.set(t, {
          observer: a,
          callbacks: n
        });
      }
      return (0, i.default)(this._observers.get(t), "this._observers.get(key)");
    };
    this._cleanup = e => {
      const t = m(e);
      this._observers.delete(t);
    };
    this.observe = (e, t, n) => {
      const {
        observer: a,
        callbacks: r
      } = this._getObserver(n);
      if (r.has(e)) {
        throw (0, u.default)("You can't observe the same element twice.");
      }
      r.set(e, t);
      a.observe(e);
      return () => {
        a.unobserve(e);
        r.delete(e);
        if (r.size === 0) {
          a.disconnect();
          this._cleanup(n);
        }
      };
    };
  }
}
function m(e) {
  const {
    root: t,
    rootMargin: n,
    threshold: a
  } = (0, r.default)((0, r.default)({}, c), e);
  return [t, n, a].map(e => (0, l.default)(e)).join("-");
}