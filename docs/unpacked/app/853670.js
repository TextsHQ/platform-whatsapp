var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addUserToPendingDeviceSync = function (e) {
  return (0, a.getTable)().bulkCreateOrMerge(e.map(e => ({
    id: e
  })));
};
exports.doPendingDeviceSync = function () {
  return s.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./286714.js");
var o = require("./669050.js");
function s() {
  return (s = (0, i.default)(function* () {
    try {
      const e = yield (0, a.getTable)().all();
      const t = require("./510607.js").syncDeviceListJob;
      yield t(e.map(e => (0, o.createWid)(e.id)), null, null);
      yield (0, a.getTable)().bulkRemove(e.map(e => e.id));
    } catch (e) {
      __LOG__(4, true, new Error())`doPendingDeviceSync failed during RESUME_WITH_OPEN_TAB`;
    }
  })).apply(this, arguments);
}