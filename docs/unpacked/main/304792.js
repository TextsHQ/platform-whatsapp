var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ALL_MUTE_DURATIONS = undefined;
exports.calculateMuteExpiration = function (e) {
  if (e === Number.POSITIVE_INFINITY) {
    return r.MUTE_ALWAYS_EXPIRATION_SENTINEL;
  }
  return e * 60 * 60 + (0, l.default)().unix();
};
exports.getDefaultMuteDuration = function () {
  return i[0].duration;
};
var r = require("../app/63014.js");
var o = require("../vendor/548360.js");
var l = a(require("../vendor/730381.js"));
const i = [{
  label: o.fbt._("8 Hours", null, {
    hk: "3orTzw"
  }),
  duration: 8,
  radioId: "8-hours"
}, {
  label: o.fbt._("1 Week", null, {
    hk: "23fAj3"
  }),
  duration: 168,
  radioId: "1-week"
}, {
  label: o.fbt._("Always", null, {
    hk: "26Zr18"
  }),
  duration: Number.POSITIVE_INFINITY,
  radioId: "always"
}];
exports.ALL_MUTE_DURATIONS = i;