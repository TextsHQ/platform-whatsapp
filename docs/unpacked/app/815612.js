Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateFilehash = function (e) {
  return (0, r.sha256Base64)(e);
};
exports.getRandomFilehash = function () {
  const {
    buffer: e
  } = self.crypto.getRandomValues(new Uint8Array(20));
  return (0, r.sha256Base64)(e);
};
var r = require("./517301.js");