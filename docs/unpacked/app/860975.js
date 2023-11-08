Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerPwaDisplayModeListener = function () {
  window.matchMedia("(display-mode: standalone)").addListener(() => {
    (0, r.setDocumentTitle)(null);
    (0, r.setAppBadge)(null);
    o.Global.set({
      webcWebPlatform: a.WEBC_WEB_PLATFORM_TYPE[(0, s.getWamPlatform)()]
    });
  });
};
exports.registerPwaInstallListener = function () {
  window.addEventListener("appinstalled", () => {
    new l.WebcPwaEventWamEvent({
      webcPwaAction: i.WEBC_PWA_ACTION_TYPE.INSTALL
    }).commit();
  });
};
var r = require("./311057.js");
var i = require("./753404.js");
var a = require("./97288.js");
var o = require("./130945.js");
var s = require("./350906.js");
var l = require("./616467.js");