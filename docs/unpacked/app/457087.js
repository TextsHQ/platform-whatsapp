var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendQueryMediaConn = function (e) {
  return (0, o.backoff)({
    delay: e => {
      let {
        taskDuration: t
      } = e;
      const n = c() * 1000;
      return Math.max(n - t, 0);
    },
    signal: e
  }, function () {
    var t = (0, a.default)(function* (t) {
      const n = (0, u.queryMediaConn)(e);
      try {
        const e = yield n;
        let {
          ttl: t,
          authTTL: r
        } = e;
        if (r == null) {
          r = t * 1000;
          t = 300000;
        } else {
          r *= 1000;
          t *= 1000;
        }
        return (0, i.default)((0, i.default)({}, e), {}, {
          authTTL: r,
          ttl: t
        });
      } catch (e) {
        if (e instanceof l.E507) {
          throw e;
        }
        if (e instanceof l.ServerStatusCodeError && e.status >= 500) {
          return t(e);
        }
        throw e;
      }
    });
    return function () {
      return t.apply(this, arguments);
    };
  }());
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./927440.js");
var s = require("./504425.js");
var l = require("./984330.js");
var u = require("./949241.js");
const c = (0, s.createTimer)({
  algo: {
    type: "fibonacci",
    first: 0,
    second: 1
  },
  max: 900000,
  jitter: 0.25
});