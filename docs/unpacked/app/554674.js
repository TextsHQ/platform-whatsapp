var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.columnPackingEnabled = function () {
  return s.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./732011.js");
var o = require("./530089.js");
function s() {
  return (s = (0, i.default)(function* (e) {
    if (yield (0, a.storageExists)()) {
      const e = yield (0, o.getColumnPackingValueFromStorage)();
      if (e == null) {
        yield (0, o.setColumnPackingValueToStorage)(false);
        return false;
      } else {
        return e;
      }
    }
    yield (0, o.setColumnPackingValueToStorage)(e);
    return e;
  })).apply(this, arguments);
}