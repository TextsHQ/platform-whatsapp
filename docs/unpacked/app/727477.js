Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseNewsletterResponseNegative = function (e, t) {
  const n = (0, i.assertTag)(e, "ack");
  if (!n.success) {
    return n;
  }
  const a = (0, r.parseNegativeAckMixin)(e, t);
  if (!a.success) {
    return a;
  }
  return a;
};
var r = require("./845945.js");
var i = require("./686310.js");