var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shouldEnableArchiveV2 = function () {
  return false;
};
exports.shouldUnarchiveChat = function () {
  if ((0, i.archiveV2Supported)() && a.default.showArchiveV2) {
    return false;
  }
  return true;
};
var i = require("./97858.js");
var a = r(require("./634152.js"));