var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t) {
  const n = function (e) {
    return (t, n) => {
      __LOG__(3)`Loadable error: ${t.stack}`;
      const a = n > 1 ? "s" : "";
      __LOG__(4, undefined, new Error(), true)`Failed to load a component`;
      SEND_LOGS(`loadable:${e} failed to load after [${n}] attempt${a}`);
    };
  }(t);
  let a;
  let u = "INIT";
  let s = 0;
  return function c() {
    switch (u) {
      case "INIT":
      case "FAILURE":
        u = "INFLIGHT";
        a = e().then(e => {
          if (!e) {
            n((0, i.default)("Lazyload response is empty"), s);
          }
          u = "SUCCESS";
          return e;
        }).catch(function () {
          var e = (0, r.default)(function* (e) {
            __LOG__(3)`Lazyload failure for component ${t}`;
            u = "FAILURE";
            s++;
            if (s <= 10) {
              yield (0, l.delayMs)(s * 1000);
              return c();
            }
            n(e, s);
            throw e;
          });
          return function () {
            return e.apply(this, arguments);
          };
        }());
        return a;
      case "INFLIGHT":
      case "SUCCESS":
        return (0, o.default)(a, "inflightPromise");
      default:
        return Promise.reject((0, i.default)("retriable_promise_hoc:promiseStatus is invalid"));
    }
  };
};
var r = a(require("../vendor/348926.js"));
var o = a(require("../app/670983.js"));
var l = require("../app/8304.js");
var i = a(require("../app/556869.js"));