var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_SCREEN_LOCK_DURATION_SECONDS = undefined;
exports.getScreenLockAutoTimerLabelForSummary = function (e) {
  var t;
  var n;
  if (e === 0) {
    return i.fbt._("Require password to unlock WhatsApp", null, {
      hk: "4G6B3n"
    });
  }
  const a = (t = s().find(t => t.value === e)) === null || t === undefined ? undefined : t.summaryText;
  if (a != null) {
    return a;
  }
  __LOG__(3)`Screen lock auto lock option ${e} does not exist`;
  (0, l.setScreenLockDurationInSeconds)(u);
  return (0, r.default)((n = s().find(e => e.value === u)) === null || n === undefined ? undefined : n.summaryText, "getScreenLockTimerOptions().find(option => option.value === DEFAULT_SCREEN_LOCK_DURATION_SECONDS)?.summaryText");
};
exports.getScreenLockTimerOptions = s;
var r = a(require("../app/670983.js"));
var o = require("../app/632157.js");
var l = require("../app/499264.js");
var i = require("../vendor/548360.js");
const u = o.MINUTE_SECONDS * 15;
function s() {
  return [{
    value: o.MINUTE_SECONDS,
    label: i.fbt._("After 1 minute", null, {
      hk: "O7QYv"
    }),
    summaryText: i.fbt._("After 1 minute", null, {
      hk: "oRF4Y"
    })
  }, {
    value: u,
    label: i.fbt._("After 15 minutes", null, {
      hk: "1neKeg"
    }),
    summaryText: i.fbt._("After 15 minutes", null, {
      hk: "2HTYLA"
    })
  }, {
    value: o.HOUR_SECONDS,
    label: i.fbt._("After 1 hour", null, {
      hk: "3Njkk5"
    }),
    summaryText: i.fbt._("After 1 hour", null, {
      hk: "4IwpA"
    })
  }];
}
exports.DEFAULT_SCREEN_LOCK_DURATION_SECONDS = u;