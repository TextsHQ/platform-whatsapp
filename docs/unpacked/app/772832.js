var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deferredMessagesStorageCreateTable = function () {
  return (0, i.getStorage)().versions.version(1);
};
exports.localStorageCreateTable = function () {
  return (0, i.getStorage)().versions.version(0);
};
var i = require("./722136.js");
var a = require("./103435.js");
var o = r(require("../vendor/441143.js"));
a.versionToRollout;
(0, o.default)(true, "only for use in worker");