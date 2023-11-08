var r = require("./530066.js").default;
var i = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.documentFlushed = function (e) {
  var t;
  const n = (t = e == null ? undefined : e.signal) !== null && t !== undefined ? t : l();
  return new Promise((e, t) => {
    if (n.aborted) {
      return void t(new o.AbortError());
    }
    let r;
    function i() {
      n.removeEventListener("abort", l);
      const e = s.indexOf(a);
      if (e !== -1) {
        s.splice(e, 1);
      }
      if (s.length === 0 && r != null) {
        r();
        r = null;
      }
    }
    function a() {
      i();
      e();
    }
    function l() {
      i();
      t(new o.AbortError());
    }
    s.push(a);
    n.addEventListener("abort", l);
    if (s.length === 1) {
      r = function () {
        let e;
        const t = window.requestAnimationFrame(() => {
          e = self.setTimeout(() => {
            u();
          }, 0);
        });
        return () => {
          window.cancelAnimationFrame(t);
          self.clearTimeout(e);
        };
      }();
    }
  });
};
exports.resolveAllForTestingOnly = undefined;
var a = i(require("../vendor/751463.js"));
var o = require("./898817.js");
const s = [];
const l = (0, a.default)(() => new r().signal);
function u() {
  for (; s.length > 0;) {
    s.shift()();
  }
}
exports.resolveAllForTestingOnly = () => {
  u();
  return Promise.resolve();
};