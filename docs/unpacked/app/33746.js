Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringifyIdentityKey = function (e) {
  if (e instanceof ArrayBuffer) {
    return (0, r.bufferToStr)(e);
  }
  return e;
};
var r = require("./999821.js");