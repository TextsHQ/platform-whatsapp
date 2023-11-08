var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t, n) {
  let r;
  let l = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  r = e == null ? [] : Array.isArray(e) ? e.filter(Boolean) : [e];
  const u = (0, a.useRef)(true);
  const c = (0, s.default)(() => n());
  const [d, p] = (0, a.useState)(() => c());
  (0, o.useListeners)(r.map(e => ({
    source: e,
    eventOrEvents: t,
    callback: () => {
      p(c());
    }
  })));
  const f = r.map(i.default).join(" ");
  (0, a.useEffect)(() => {
    if (u.current) {
      u.current = false;
    } else {
      p(c());
    }
  }, [f, c, ...l]);
  return d;
};
var i = r(require("./270441.js"));
var a = require("../vendor/667294.js");
var o = require("./808446.js");
var s = r(require("./17533.js"));