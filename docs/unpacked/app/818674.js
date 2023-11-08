Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logDailyPrivateStatsTestEvents = function () {
  new a.TestAnonymousDailyWamEvent().commit();
  if ((0, r.getABPropConfigValue)("web_ps_v3_enabled")) {
    new l.TestAnonymousWeeklyIdWamEvent().commit();
    new o.TestAnonymousIdLessWamEvent().commit();
  }
};
exports.logUiActionShadowPrivateStatsTestEvents = function () {
  if ((0, r.getABPropConfigValue)("web_ps_v3_enabled")) {
    new i.TestAnonymousDailyIdWamEvent().commit();
    new s.TestAnonymousMonthlyIdWamEvent().commit();
  }
};
var r = require("./287461.js");
var i = require("./830921.js");
var a = require("./457073.js");
var o = require("./739777.js");
var s = require("./222406.js");
var l = require("./398743.js");