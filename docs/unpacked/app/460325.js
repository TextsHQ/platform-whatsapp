var r = require("./530066.js").default;
var i = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t) {
  const n = new Uint8Array((0, s.decodeB64)(e));
  const i = (0, c.unixTime)();
  _ = t;
  g = function () {
    var e = (0, a.default)(function* (e) {
      const r = yield (0, f.default)(n, i);
      if (r == null ? undefined : r.errorCode) {
        if (r.errorCode >= 500) {
          throw new d.ServerStatusCodeError(r.errorCode, r.errorText);
        }
        e(t);
      }
      e(undefined);
    });
    return function () {
      return e.apply(this, arguments);
    };
  }();
  return (0, u.promiseLoop)(function () {
    var e = (0, a.default)(function* (e, t, n) {
      const i = (0, l.delayMs)((0, o.expBackoff)(n, 120000, 1000, 0.1));
      try {
        yield p.default.waitIfOffline({
          signal: new r().signal
        });
        return yield g(e);
      } catch (t) {
        if (n > 1) {
          __LOG__(3)`wam:sendLogs failure error: ${String(t)}`;
          return e(_);
        } else {
          return i;
        }
      }
    });
    return function () {
      return e.apply(this, arguments);
    };
  }());
  var _;
  var g;
};
var a = i(require("../vendor/348926.js"));
var o = require("./250655.js");
var s = require("./417405.js");
var l = require("./8304.js");
var u = require("./904086.js");
var c = require("./632157.js");
var d = require("./984330.js");
var p = i(require("./99398.js"));
var f = i(require("./122596.js"));