var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendRemoveStickerFromRecent = function (e) {
  const t = o.default.generateRemoveStickerMutation(e);
  return (0, l.lockForSync)([], [t], () => Promise.resolve()).then(() => {
    r.RecentStickerCollectionMd.removeAndSave(e.id);
  });
};
var r = require("../app/951220.js");
var o = a(require("../app/102997.js"));
var l = require("../app/480313.js");