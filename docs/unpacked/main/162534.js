var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const t = e.startOfDaySkew;
  if (t !== undefined && t > r.Clock.skew - 30 && t < r.Clock.skew + 30) {
    return e.startOfDay;
  }
  e.startOfDaySkew = r.Clock.skew;
  return e.startOfDay = o.default.unix(e.t + r.Clock.skew).startOf("day").unix();
};
var r = require("../app/63014.js");
var o = a(require("../vendor/730381.js"));