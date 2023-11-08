Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ftsV1DeleteAndDeprecate = function () {
  return (0, r.getStorage)().versions.version(6);
};
exports.ftsV1IndexCreateTable = function () {
  return (0, r.getStorage)().versions.version(0);
};
exports.ftsV2Delete = function () {
  return (0, r.getStorage)().versions.version(7);
};
exports.ftsV2DeleteTokenPrefixes = function () {
  return (0, r.getStorage)().versions.version(8);
};
exports.ftsV2IndexCreateTable = function () {
  return (0, r.getStorage)().versions.version(3);
};
exports.ftsV2TokenToPrefixesCreateTable = function () {
  return (0, r.getStorage)().versions.version(4);
};
exports.ftsV3IndexCreateTable = function () {
  return (0, r.getStorage)().versions.version(5);
};
exports.manifestCreateTable = function () {
  return (0, r.getStorage)().versions.version(1);
};
exports.purgeRangeQueueCreateTable = function () {
  return (0, r.getStorage)().versions.version(2);
};
exports.versionToRollout = undefined;
var r = require("./965363.js");
exports.versionToRollout = 8;