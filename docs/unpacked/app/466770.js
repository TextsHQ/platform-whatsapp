Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t) {
  let n = "";
  switch (e.subtype) {
    case "miss":
      n = t ? i.fbt._({
        "*": "Missed voice call at {time}",
        _1: "Missed voice call at {time}"
      }, [i.fbt._plural(r.Clock.timestampHour(e.t)), i.fbt._param("time", r.Clock.timestampStr(e.t))], {
        hk: "2YRenv"
      }) : i.fbt._("Missed voice call", null, {
        hk: "4AAI49"
      });
      break;
    case "miss_video":
      n = t ? i.fbt._({
        "*": "Missed video call at {time}",
        _1: "Missed video call at {time}"
      }, [i.fbt._plural(r.Clock.timestampHour(e.t)), i.fbt._param("time", r.Clock.timestampStr(e.t))], {
        hk: "3WhcHr"
      }) : i.fbt._("Missed video call", null, {
        hk: "3B2vuW"
      });
      break;
    case "miss_group":
      n = t ? i.fbt._({
        "*": "Missed group voice call at {time}",
        _1: "Missed group voice call at {time}"
      }, [i.fbt._plural(r.Clock.timestampHour(e.t)), i.fbt._param("time", r.Clock.timestampStr(e.t))], {
        hk: "1ZXZic"
      }) : i.fbt._("Missed group voice call", null, {
        hk: "nrsOB"
      });
      break;
    case "miss_group_video":
      n = t ? i.fbt._({
        "*": "Missed group video call at {time}",
        _1: "Missed group video call at {time}"
      }, [i.fbt._plural(r.Clock.timestampHour(e.t)), i.fbt._param("time", r.Clock.timestampStr(e.t))], {
        hk: "2SVLUU"
      }) : i.fbt._("Missed group video call", null, {
        hk: "2nThzV"
      });
      break;
    case "silence":
      n = t ? i.fbt._("Silenced unknown caller at {time}", [i.fbt._param("time", r.Clock.timestampStr(e.t))], {
        hk: "1CJQa"
      }) : i.fbt._("Silenced unknown caller", null, {
        hk: "3aH6cr"
      });
  }
  return n;
};
var r = require("./63014.js");
var i = require("../vendor/548360.js");