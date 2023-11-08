Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEVEN_DAYS = exports.ONE_DAY = exports.OFF = exports.NINETY_DAYS = exports.KeepInChatState = exports.DurationUnit = exports.DisappearingModeInitiator = undefined;
exports.getDurationForString = function (e) {
  let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
  if (e <= r.MINUTE_SECONDS) {
    return {
      duration: e,
      unit: u.Seconds
    };
  }
  if (e < r.HOUR_SECONDS) {
    return {
      duration: Math.floor(e / 60),
      unit: u.Minutes
    };
  }
  if (e <= r.DAY_SECONDS) {
    return {
      duration: Math.floor(e / 60 / 60),
      unit: u.Hours
    };
  }
  if (Boolean(t)) {
    if (e < r.WEEK_SECONDS) {
      return {
        duration: Math.floor(e / 24 / 60 / 60),
        unit: u.Days
      };
    }
    return {
      duration: Math.floor(e / 7 / 24 / 60 / 60),
      unit: u.Weeks
    };
  }
  const n = Math.floor(e / 24 / 60 / 60);
  return {
    duration: n,
    unit: u.Days
  };
};
var r = require("./632157.js");
exports.OFF = 0;
const i = r.DAY_SECONDS;
exports.ONE_DAY = i;
const a = r.DAY_SECONDS * 7;
exports.SEVEN_DAYS = a;
const o = r.DAY_SECONDS * 90;
exports.NINETY_DAYS = o;
const s = require("../vendor/76672.js")({
  ChangedInChat: "chat",
  InitiatedByMe: "me",
  InitiatedByOther: "other"
});
exports.DisappearingModeInitiator = s;
const l = require("../vendor/76672.js").Mirrored(["KEPT", "UNKEPT"]);
exports.KeepInChatState = l;
const u = require("../vendor/76672.js").Mirrored(["Seconds", "Minutes", "Hours", "Days", "Weeks"]);
exports.DurationUnit = u;