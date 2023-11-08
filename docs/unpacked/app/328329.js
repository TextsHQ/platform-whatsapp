var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createOrUpdateOrphanTcToken = function (e, t) {
  return (0, a.getOrphanTcTokenTable)().createOrMerge(e, (0, i.default)({
    chatId: e
  }, t));
};
exports.getOrphanTcToken = function (e) {
  return (0, a.getOrphanTcTokenTable)().get(e);
};
exports.removeOrphanTcToken = function (e) {
  return (0, a.getOrphanTcTokenTable)().remove(e);
};
var i = r(require("../vendor/81109.js"));
var a = require("./324862.js");