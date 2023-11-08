var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enableMemSignalStore = function () {
  i.default.switchToMemMode();
};
exports.enablePersistSignalStore = function () {
  i.default.switchToPersistMode();
};
exports.getPersistSignalProtocolStore = function () {
  return i.default;
};
exports.getSignalProtocolStore = function () {
  return i.default;
};
var i = r(require("./509677.js"));