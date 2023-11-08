var r = require("./530066.js").default;
var i = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t) {
  const n = new Map();
  return function (i) {
    if (i.signal.aborted) {
      return Promise.reject(new o.AbortError());
    }
    const u = e.call(this, i);
    let c = n.get(u);
    if (c == null || c.aggregator.signal.aborted) {
      const e = new l.default();
      const r = (0, a.default)((0, a.default)({}, i), {}, {
        signal: e.signal
      });
      c = {
        aggregator: e,
        promise: t.call(this, r).finally(() => {
          e.dispose();
          n.delete(u);
        })
      };
      n.set(u, c);
    }
    const d = i.signal || new r().signal;
    c.aggregator.add(d);
    return (0, s.default)(c.promise, d);
  };
};
var a = i(require("../vendor/73982.js"));
var o = require("./898817.js");
var s = i(require("./229922.js"));
var l = i(require("./96896.js"));