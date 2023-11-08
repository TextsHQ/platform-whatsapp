var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findLocal = function () {
  return s.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./147793.js");
var o = require("./61229.js");
function s() {
  return (s = (0, i.default)(function* (e) {
    const t = yield (0, o.getChatTable)().get(e, false);
    if (t) {
      return (0, a.hydrateWids)(t);
    } else {
      return null;
    }
  })).apply(this, arguments);
}