var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SeekBar = function (e) {
  const t = r.Clock.durationStr(e.currentTime) + " / " + r.Clock.durationStr(e.duration);
  return l.default.createElement(o.SmoothRangeInput, {
    value: e.currentTime,
    valueText: t,
    min: 0,
    max: e.duration,
    smallSkip: 1,
    largeSkip: 10,
    onChange: e.onSeek,
    onCommit: e.onCommit,
    disabled: e.disabled,
    theme: i(e)
  });
};
var r = require("../app/63014.js");
var o = require("./945178.js");
var l = a(require("../vendor/667294.js"));
function i(e) {
  let {
    outgoing: t,
    played: n
  } = e;
  if (t) {
    if (n) {
      return o.SmoothRangeInputTheme.AUDIO_OUTGOING_PLAYED;
    } else {
      return o.SmoothRangeInputTheme.AUDIO_OUTGOING_UNPLAYED;
    }
  } else if (n) {
    return o.SmoothRangeInputTheme.AUDIO_INCOMING_PLAYED;
  } else {
    return o.SmoothRangeInputTheme.AUDIO_INCOMING_UNPLAYED;
  }
}