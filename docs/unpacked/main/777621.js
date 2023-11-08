Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  new r.WebcMenuWamEvent({
    webcMenuAction: a.WEBC_MENU_TYPE.THREADS_SCREEN_CLICK,
    webcMenuItemLabel: e
  }).commit();
};
var a = require("./134650.js");
var r = require("./859042.js");