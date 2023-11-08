var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shouldShowConsumerTransparencyDisclosure = exports.handleConsumerTransparencyForNewMsg = undefined;
var i = require("./72696.js");
var a = r(require("./883891.js"));
var o = require("./958464.js");
exports.shouldShowConsumerTransparencyDisclosure = e => {
  if (!e.contact.isBusiness) {
    return false;
  }
  return !(!o.ConsumerTransparencyInfoIconModel.shouldShowIcon(e.id) && a.default.getCTWAEligibilityFromChat(e) == null) && (0, i.isConsumerTransparencyEnabled)();
};
exports.handleConsumerTransparencyForNewMsg = (e, t, n) => {
  if (t == null || n == null) {
    return;
  }
  if (!e.contact.isBusiness || !(0, i.isConsumerTransparencyEnabled)()) {
    return;
  }
  if (!o.ConsumerTransparencyInfoIconModel.shouldShowIcon(e.id)) {
    o.ConsumerTransparencyInfoIconModel.add(e.id);
  }
};