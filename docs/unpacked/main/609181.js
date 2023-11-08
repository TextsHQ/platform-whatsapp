Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.qplEndProfileView = function (e) {
  r.QPL.markerEnd(a.QuickLogMarkerId.WHATSAPP_PROFILE_VIEW, e);
};
exports.qplStartOrderView = function (e) {
  r.QPL.markerStart(a.QuickLogMarkerId.WHATSAPP_ORDER_VIEW, {
    annotations: {
      bool: {
        IsCached: e
      }
    }
  });
};
exports.qplStartProfileView = function (e) {
  r.QPL.markerStart(a.QuickLogMarkerId.WHATSAPP_PROFILE_VIEW, {
    annotations: {
      string: {
        EntryPoint: e
      }
    }
  });
};
var a = require("../app/316348.js");
var r = require("../app/555622.js");