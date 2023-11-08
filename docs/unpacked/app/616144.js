var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t) {
  return new Promise((n, r) => {
    let o;
    let s = 0;
    let l = false;
    if (t) {
      const e = () => {
        t.removeEventListener("abort", e);
        l = true;
        if (o != null) {
          clearTimeout(o);
        }
        r(new i.AbortError());
      };
      if (t.aborted) {
        return void e();
      }
      t.addEventListener("abort", e);
    }
    !function t() {
      let i = false;
      let u = false;
      o = null;
      try {
        const c = e({
          retry: e => {
            if (!l && !u) {
              i = true;
              s++;
              if (e == null) {
                return t();
              }
              o = setTimeout(t, e);
            }
          },
          failCount: s
        });
        if (!(c instanceof Promise)) {
          throw (0, a.default)("TypeError: task must return a promise");
        }
        c.then(e => {
          if (!(l || i)) {
            u = true;
            n(e);
          }
        }).catch(e => {
          if (!(l || i)) {
            u = true;
            r(e);
          }
        });
      } catch (e) {
        if (l || i) {
          return;
        }
        r(e);
      }
    }();
  });
};
var i = require("./898817.js");
var a = r(require("./415227.js"));