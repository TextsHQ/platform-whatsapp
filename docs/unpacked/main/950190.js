Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterStickersForNewsletters = function (e) {
  if ((0, a.isNewsletterSendingNonBasicStickersEnabled)()) {
    return e;
  }
  return e.filter(e => e.mediaData.isAiSticker !== true && e.mediaData.isAvatar !== true);
};
var a = require("../app/73225.js");