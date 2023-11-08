Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.elevatedPushNamesEnabled = function (e) {
  if (!e) {
    return false;
  }
  return e.isGroup && e.getParticipantCount() > 2;
};
exports.elevatedPushNamesM2Enabled = function (e) {
  if (!e) {
    return false;
  }
  return e.isGroup && e.getParticipantCount() > 2 && (0, r.getABPropConfigValue)("elevated_push_names_v2_m2_enabled");
};
exports.pushNameCanBeUsed = function (e) {
  if (e == null) {
    return false;
  }
  const t = (0, o.unproxy)(e);
  const n = (0, i.getNotifyName)(t);
  return (0, a.getFormattedName)(t) === (0, a.getFormattedPhone)(t) && n != null && n !== "";
};
var r = require("./287461.js");
var i = require("./660666.js");
var a = require("./714574.js");
var o = require("./163139.js");