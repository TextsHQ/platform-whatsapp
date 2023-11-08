var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPaymentMessageBackgroundImageBuffer = function () {
  return i.apply(this, arguments);
};
var r = a(require("../vendor/348926.js"));
var o = require("./429093.js");
var l = require("./194022.js");
function i() {
  return (i = (0, r.default)(function* (e, t) {
    if (e.id == null) {
      return;
    }
    const {
      id: n
    } = e;
    let a = yield (0, o.getPaymentBackgroundImageBuffer)(n);
    return a || (a = yield (0, l.downloadPaymentBackgroundImage)({
      paymentBackground: e,
      chatWid: t
    }), a ? (yield (0, o.addPaymentBackground)({
      id: n,
      imageBuffer: a
    }), a) : null);
  })).apply(this, arguments);
}