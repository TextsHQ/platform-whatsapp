var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.durationToLabel = function (e) {
  const t = d().find(t => t.value === e);
  if (t === undefined && typeof e == "number") {
    __LOG__(4, undefined, new Error(), true)`Could not find matching duration label for duration: "${e}"`;
    SEND_LOGS("No matching duration label");
    return i.fbt._("On", null, {
      hk: "1HkDTU"
    });
  }
  if (t === undefined) {
    return i.fbt._("Off", null, {
      hk: "1ueKlZ"
    });
  }
  return t.label;
};
exports.getAdditionalEphemeralityDurations = function (e) {
  return d(e).filter(e => ["additional", "dev"].includes(e.type));
};
exports.getDefaultEphemeralityDurations = function (e) {
  return d(e).filter(e => e.type === "default");
};
exports.getEphemeralityDurations = d;
var r = require("../app/287461.js");
var o = require("../app/730514.js");
var l = a(require("../app/286816.js"));
var i = require("../vendor/548360.js");
const u = [86400, 604800, 7776000];
const s = [3600, 10800, 21600, 43200, 172800, 259200, 345600, 432000, 518400, 1209600, 1814400, 2592000, 5184000, 15552000, 31536000];
function c(e, t) {
  return {
    type: t,
    value: e,
    label: (0, o.getDisappearingMessageDurationString)(e)
  };
}
function d() {
  let e = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
  let t = [...u.map(e => c(e, "default"))];
  if ((0, r.getABPropConfigValue)("dm_additional_durations")) {
    t.push(...s.map(e => c(e, "additional")));
  }
  if (e) {
    t.sort((e, t) => t.value - e.value);
  } else {
    t.sort((e, t) => e.value - t.value);
  }
  t.push({
    type: "default",
    value: 0,
    label: l.default._("Off", null, {
      hk: "2oC0wl"
    })
  });
  return t;
}