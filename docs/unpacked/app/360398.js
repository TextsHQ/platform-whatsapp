var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.minutesToTime = function (e) {
  return a.default.utc().startOf("day").add(e, "minutes").format(i.Clock.timestampStrFormat());
};
exports.timeStringToMinutes = undefined;
var i = require("./63014.js");
var a = r(require("../vendor/730381.js"));
const o = ["h:mm A", "h:mmA", "HH:mm", "HH.mm", "H:mm", "H.mm"];
exports.timeStringToMinutes = e => {
  let t;
  const n = e.trim();
  if (!n) {
    return;
  }
  for (const e of o) {
    const r = (0, a.default)(n, e, true);
    if (r.isValid()) {
      t = r;
      break;
    }
  }
  if (!t) {
    return;
  }
  const r = t;
  const i = (0, a.default)().startOf("day");
  const s = r.diff(i);
  return a.default.duration(s).asMinutes();
};