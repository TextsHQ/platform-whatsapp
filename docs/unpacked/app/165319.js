var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.backoff = function (e, t) {
  const {
    signal: n,
    timeoutIterator: r,
    timeoutIncludesTaskDuration: l
  } = (0, i.default)((0, i.default)({}, s), e);
  return (0, o.default)(e => {
    let {
      retry: n,
      failCount: i
    } = e;
    return new Promise((e, o) => {
      const s = Date.now();
      try {
        t(function (e) {
          return Promise.reject(new a.default(e));
        }, i).then(e).catch(u);
      } catch (e) {
        return void u(e);
      }
      function u(e) {
        if (!(e instanceof a.default)) {
          return void o(e);
        }
        const t = r.next();
        if (t.done) {
          return void o(e.source);
        }
        const i = Date.now() - s;
        const u = l ? Math.max(t.value - i, 0) : t.value;
        n(u);
      }
    });
  }, n);
};
exports.defaults = undefined;
var i = r(require("../vendor/73982.js"));
var a = r(require("./449203.js"));
var o = r(require("./616144.js"));
const s = Object.freeze({
  timeoutIncludesTaskDuration: true
});
exports.defaults = s;