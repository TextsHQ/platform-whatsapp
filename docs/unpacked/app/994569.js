var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TRIM_LENGTH = exports.END_OF_UPLOAD = undefined;
exports.getTimeboxedAndTrimmedLogs = function () {
  return o.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
const a = "==================================================EOU";
exports.END_OF_UPLOAD = a;
function o() {
  return (o = (0, i.default)(function* (e) {
    let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    let n = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
    const r = [];
    if (n) {
      const n = yield e.logs.orderBy("timestamp").filter(e => e.timestamp >= t).reverse().until(e => e.log.includes("[sendlogs]"), true).toArray();
      for (let e = n.length - 1; e >= 0 && (s(n[e], r), !n[e].log.includes(a)); e--);
    } else {
      yield e.logs.orderBy("timestamp").filter(e => e.timestamp >= t).each(e => {
        s(e, r);
      });
    }
    return r;
  })).apply(this, arguments);
}
function s(e, t) {
  e.log = e.log.slice(0, 2500);
  t.push(e);
}
exports.TRIM_LENGTH = 2500;