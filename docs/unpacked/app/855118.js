var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return o.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./891244.js");
function o() {
  return (o = (0, i.default)(function* (e, t) {
    yield (0, a.updateMessageTable)(e.id, t);
    e.set(t);
  })).apply(this, arguments);
}