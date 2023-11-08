Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFbBrandedNumber = function (e) {
  return (0, r.getABPropConfigValue)("system_msg_numbers_fb_branded").split(",").includes(e);
};
exports.getIsInternalNumber = function (e) {
  const t = (0, r.getABPropConfigValue)("system_msg_numbers_fb_branded").split(",");
  const n = (0, r.getABPropConfigValue)("system_msg_numbers_fb_inc").split(",");
  return t.includes(e) || n.includes(e);
};
var r = require("./287461.js");