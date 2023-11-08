Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const t = (0, r.getABPropConfigValue)("in_app_support_v2_number_prefixes");
  if (t == null || t === "") {
    return false;
  }
  return t.split(",").some(t => e.startsWith(t));
};
var r = require("./287461.js");