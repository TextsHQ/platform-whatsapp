Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateClockSkew = function (e) {
  const t = Date.now() / 1000;
  const n = Math.round(t - e);
  const s = Math.round(n / r.HOUR_SECONDS);
  if (s !== 0 && (0, i.getABPropConfigValue)("log_clock_skew")) {
    new o.ClockSkewDifferenceTWamEvent({
      clockSkewHourly: s * -1
    }).commit();
  }
  (0, r.setClockSkew)(n);
  (0, a.frontendFireAndForget)("setWebClockSkew", {
    newClockSkew: n
  });
};
var r = require("./632157.js");
var i = require("./287461.js");
var a = require("./359987.js");
var o = require("./930711.js");