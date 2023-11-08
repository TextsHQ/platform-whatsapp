var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.backoff = function () {
  return c.apply(this, arguments);
};
var i = r(require("../vendor/73982.js"));
var a = r(require("../vendor/311504.js"));
var o = r(require("./415227.js"));
var s = require("./8304.js");
var l = r(require("./449203.js"));
const u = {
  retries: 1 / 0
};
function c() {
  return (c = (0, a.default)(function* (e, t) {
    const {
      delay: n,
      signal: r,
      retries: a
    } = (0, i.default)((0, i.default)({}, u), e);
    let c = 0;
    let d = Date.now();
    let p = null;
    const f = e => Promise.reject(new l.default(e));
    try {
      d = Date.now();
      return yield t(f, c, r);
    } catch (e) {
      c++;
      if (!(e instanceof l.default)) {
        throw e;
      }
      p = e;
    }
    for (; c <= a;) {
      const e = n({
        iterationCount: c,
        taskDuration: Date.now() - d
      });
      yield (0, s.delayMs)(e, r);
      try {
        d = Date.now();
        return yield t(f, c, r);
      } catch (e) {
        c++;
        if (!(e instanceof l.default)) {
          throw e;
        }
        p = e;
      }
    }
    if (!p) {
      throw (0, o.default)("assert: backoff completed without error or result");
    }
    throw p.source;
  })).apply(this, arguments);
}