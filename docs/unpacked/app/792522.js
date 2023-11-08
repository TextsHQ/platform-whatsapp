var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useWAWebDesktopUpsellAbPropCheck = function (e) {
  const t = (0, i.getUserDesktopOs)();
  return (0, o.useABPropConfigValue)(t === i.UserDesktopOs.WINDOWS ? l[e] : u[e]);
};
exports.useWAWebDesktopUpsellAbPropCheckMissedCalls = function () {
  const e = (0, i.getUserDesktopOs)();
  const t = (0, o.useABPropConfigValue)("desktop_upsell_win_cta_missed_call_variation_1");
  const n = (0, o.useABPropConfigValue)("desktop_upsell_win_cta_missed_call_variation_2");
  if (e === i.UserDesktopOs.WINDOWS) {
    return t || n;
  }
  return false;
};
exports.useWAWebDesktopUpsellPlatformAwareCTACheckSynchronous = function () {
  const e = (0, i.getUserDesktopOs)();
  let t = false;
  var n;
  if (e === i.UserDesktopOs.WINDOWS) {
    t = (n = (0, i.isWebUserOnSupportedWindowsOSForUWPSync)()) !== null && n !== undefined && n;
  } else if (e === i.UserDesktopOs.MACOS) {
    var r;
    t = (r = (0, i.isWebUserOnSupportedMacOSForCatalystSync)()) !== null && r !== undefined && r;
  }
  return !(0, a.isSMB)() && t;
};
exports.useWAWebDesktopUpsellPlatformAwareOsVersionCheck = c;
exports.useWAWebDesktopUpsellPlatformCheck = function () {
  const e = c((0, i.getUserDesktopOs)());
  return !(0, a.isSMB)() && e;
};
var i = require("./787827.js");
var a = require("./94602.js");
var o = require("./325390.js");
var s = r(require("./802145.js"));
const l = {
  chatlist_toastbar: "desktop_upsell_win_cta_chatlist_toastbar",
  chatlist_dropdown: "desktop_upsell_win_cta_chatlist_dropdown",
  intro_panel: "desktop_upsell_win_cta_intro_panel",
  call_btn: "desktop_upsell_win_cta_call_btn",
  search_results: "desktop_upsell_win_cta_search_results_toastbar"
};
const u = {
  chatlist_toastbar: "desktop_upsell_mac_cta_chatlist_toastbar",
  chatlist_dropdown: "desktop_upsell_mac_cta_chatlist_dropdown",
  intro_panel: "desktop_upsell_mac_cta_intro_panel",
  call_btn: "desktop_upsell_mac_cta_call_btn",
  search_results: "desktop_upsell_mac_cta_search_results_toastbar"
};
function c(e) {
  const t = (0, s.default)(i.isWebUserOnSupportedWindowsOSForUWPAsync, []);
  const n = (0, s.default)(i.isWebUserOnSupportedMacOSForCatalystAsync, []);
  if (e == null) {
    return null;
  } else if (e !== i.UserDesktopOs.WINDOWS || t.loading || t.error) {
    return e === i.UserDesktopOs.MACOS && !n.loading && !n.error && n.value;
  } else {
    return t.value;
  }
}