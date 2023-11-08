Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showBizIconsOnToolBar = function () {
  return i() && (0, r.getABPropConfigValue)("web_biz_tools_on_navbar_enabled");
};
exports.topMenuRedesignEnabled = i;
exports.webChatlistToggleEnabled = function () {
  return (0, r.getABPropConfigValue)("web_chatlist_toggle") && !i();
};
var r = require("./287461.js");
function i() {
  return (0, r.getABPropConfigValue)("top_menu_redesign_enabled");
}