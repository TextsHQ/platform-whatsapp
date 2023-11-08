var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return a.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
function a() {
  return (a = (0, i.default)(function* () {
    const e = window.caches;
    if (e == null) {
      return;
    }
    const t = yield e.keys();
    yield Promise.all(t.map(t => e.delete(t)));
  })).apply(this, arguments);
}