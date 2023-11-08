Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    animationFrames: t,
    signal: n,
    onFrameChange: r,
    shouldStop: o
  } = e;
  if (n.aborted) {
    return Promise.reject(new a.AbortError());
  }
  if (t.length === 0) {
    return Promise.resolve();
  }
  const l = new Date().getTime();
  let i;
  let u = 0;
  let s = l;
  let c = () => {};
  return new Promise((e, l) => {
    const d = () => {
      if (i != null) {
        window.cancelAnimationFrame(i);
      }
      l(new a.AbortError());
    };
    n.addEventListener("abort", d);
    c = () => {
      n.removeEventListener("abort", d);
    };
    const f = () => {
      const n = new Date().getTime();
      if (n < s) {
        return void (i = window.requestAnimationFrame(f));
      }
      const {
        duration: a,
        rgbaBuffer: l
      } = t[u];
      r(l);
      u = (u + 1) % t.length;
      s = n + a;
      if (u === 1 && o()) {
        e();
      } else {
        i = window.requestAnimationFrame(f);
      }
    };
    i = window.requestAnimationFrame(f);
  }).finally(() => {
    c();
  });
};
var a = require("../app/898817.js");