Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatMeasureLabel = l;
exports.startMeasure = function (e) {
  if (!i.USER_TIMINGS) {
    return a;
  }
  if (!o) {
    return a;
  }
  const t = (s.get(e) || 0) + 1;
  s.set(e, t);
  const n = l(t === 1 ? e : `${e} (${t})`);
  const r = `${n}: Start`;
  const u = `${n}: End`;
  self.performance.mark(r);
  let c = false;
  return {
    end() {
      if (c) {
        return;
      }
      c = true;
      const t = s.get(e) || 0;
      if (t > 1) {
        s.set(e, t - 1);
      } else {
        s.delete(e);
      }
      self.performance.mark(u);
      self.performance.measure(n, r, u);
    }
  };
};
var r;
var i = require("./508247.js");
const a = {
  end() {}
};
const o = ((r = self.performance) === null || r === undefined ? undefined : r.mark) && self.performance.measure;
const s = new Map();
function l(e) {
  return `💬 ${e}`;
}