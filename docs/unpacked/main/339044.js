Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  if (!(0, a.getABPropConfigValue)("web_abprop_remove_downloaded_files")) {
    return false;
  }
  try {
    return (0, r.getMsgMediaType)(e) === r.MEDIA_TYPES.DOCUMENT;
  } catch (e) {
    return false;
  }
};
var a = require("../app/287461.js");
var r = require("../app/708761.js");