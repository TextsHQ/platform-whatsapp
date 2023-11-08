Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createOrUpdateDirectConnectionKeys = function (e) {
  return (0, r.getDirectConnectionKeysTable)().createOrMerge(e.id, e);
};
exports.fetchDirectConnectionKeys = function (e) {
  return (0, r.getDirectConnectionKeysTable)().get(e);
};
exports.removeDirectConnectionKeys = function (e) {
  return (0, r.getDirectConnectionKeysTable)().remove(e);
};
var r = require("./515609.js");