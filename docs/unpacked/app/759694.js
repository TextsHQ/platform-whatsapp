var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateFileash = function () {
  return o.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./815612.js");
function o() {
  return (o = (0, i.default)(function* (e, t) {
    return t === (yield (0, a.calculateFilehash)(e));
  })).apply(this, arguments);
}