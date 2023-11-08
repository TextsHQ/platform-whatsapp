var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClosestMessageBetweenDates = function () {
  return u.apply(this, arguments);
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/702018.js");
var l = require("../app/878685.js");
var i = require("../app/851698.js");
function u() {
  return (u = (0, r.default)(function* (e, t, n, a, r) {
    const u = (0, l.craftMessageRangeIndex)(e, a, false, t);
    const s = (0, l.craftMessageRangeIndex)(e, a, false, n);
    return (yield (0, i.getMessageTable)().between(["messageRangeIndex"], u, s, {
      lowerInclusive: true,
      upperInclusive: true,
      reverse: r,
      limit: 1
    }, e => !(0, o.shouldRenderInUI)(e, undefined)))[0];
  })).apply(this, arguments);
}