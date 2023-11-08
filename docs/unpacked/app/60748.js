var r = require("./530066.js").default;
var i = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return o.apply(this, arguments);
};
var a = i(require("../vendor/311504.js"));
function o() {
  return (o = (0, a.default)(function* (e, t) {
    let n;
    const i = new r();
    if (e.some(e => e.aborted)) {
      i.abort();
    } else {
      n = () => {
        for (const n of e) {
          n.removeEventListener("abort", t);
        }
        n = null;
      };
      const t = () => {
        var e;
        if (!((e = n) === null || e === undefined)) {
          e();
        }
        i.abort();
      };
      for (const n of e) {
        n.addEventListener("abort", t);
      }
    }
    try {
      return yield t(i.signal);
    } finally {
      var a;
      if (!((a = n) === null || a === undefined)) {
        a();
      }
    }
  })).apply(this, arguments);
}