Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.baseKeyCreateTable = function () {
  return (0, r.getStorage)().versions.version(5);
};
exports.identityCreateTable = function () {
  return (0, r.getStorage)().versions.version(0);
};
exports.metaCreateTable = function () {
  return (0, r.getStorage)().versions.version(1);
};
exports.preKeyCreateTable = function () {
  return (0, r.getStorage)().versions.version(2);
};
exports.senderKeyCreateTable = function () {
  return (0, r.getStorage)().versions.version(6);
};
exports.sessionCreateTable = function () {
  return (0, r.getStorage)().versions.version(3);
};
exports.signedPreKeyCreateTable = function () {
  return (0, r.getStorage)().versions.version(4);
};
exports.versionToRollout = undefined;
var r = require("./22399.js");
exports.versionToRollout = 6;