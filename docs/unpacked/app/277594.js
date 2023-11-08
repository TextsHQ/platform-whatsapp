Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jobsCreateV1Table = function () {
  return (0, r.getStorage)().versions.version(0);
};
exports.jobsCreateV2Table = function () {
  return (0, r.getStorage)().versions.version(1);
};
exports.versionToRollout = undefined;
var r = require("./325553.js");
exports.versionToRollout = 1;