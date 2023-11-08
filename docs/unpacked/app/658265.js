Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadQuickPromotions = function () {
  if (!(0, i.qpSDKProcessingEnabled)()) {
    return Promise.resolve();
  }
  return (0, a.getQuickPromotionsTable)().all().then(e => {
    e.sort((e, t) => e.data.qpConfigPriority - t.data.qpConfigPriority);
    (0, r.frontendFireAndForget)("loadedQuickPromotions", {
      promotions: e
    });
  });
};
var r = require("./359987.js");
var i = require("./72696.js");
var a = require("./332391.js");