Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inboxFiltersEnabled = function () {
  return !(0, r.isSMB)() && (0, o.getABPropConfigValue)("inbox_filters_enabled");
};
var o = require("../app/287461.js");
var r = require("../app/94602.js");