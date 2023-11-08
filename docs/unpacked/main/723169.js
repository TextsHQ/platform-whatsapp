Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canBeGroupedAsBotCarousel = function (e, t) {
  return (0, a.getABPropConfigValue)("bonsai_carousel_enabled") === true && t.botResponseTargetId === e.botResponseTargetId;
};
var a = require("../app/287461.js");