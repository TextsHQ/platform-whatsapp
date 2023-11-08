Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exceedInlineMutationCount = function (e) {
  const t = Math.min(2000, Math.max((0, r.getConfig)().syncdInlineMutationsMaxCount(), 100));
  return e.length > t;
};
exports.exceedPatchProtobufSize = function (e) {
  const t = Math.min(100, Math.max((0, r.getConfig)().syncdPatchProtobufMaxSize(), 10)) * 1000;
  return e.byteLength > t;
};
var r = require("./819416.js");