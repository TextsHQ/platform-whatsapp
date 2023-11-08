Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatePwaManifestOnMacOS = function () {
  var e;
  if (i.UA.os === i.OS_TYPE.MAC) {
    if (!((e = document.getElementById("whatsapp-pwa-manifest-link")) === null || e === undefined)) {
      e.setAttribute("href", `${r.WEB_PUBLIC_PATH}manifest-apple.json`);
    }
  }
};
var r = require("./508247.js");
var i = require("./368170.js");