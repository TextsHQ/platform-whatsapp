Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openExternalWhatsAppDesktopDownloadUrl = function (e) {
  const t = (0, r.getUserDesktopOs)();
  if (t === r.UserDesktopOs.WINDOWS) {
    (function (e) {
      try {
        (0, i.openExternalLink)(function (e) {
          switch (e) {
            case o.WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.QR_BANNER:
              return i.WINDOWS_STORE_URIS.link_device_banner;
            case o.WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.QR_BANNER_2:
              return i.WINDOWS_STORE_URIS.link_device_banner_2;
            case o.WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.INTRO_PANEL:
              return i.WINDOWS_STORE_URIS.intro_panel;
            case o.WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.BUTTERBAR:
              return i.WINDOWS_STORE_URIS.chatlist_toastbar;
            case o.WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.SEARCH_RESULTS:
              return i.WINDOWS_STORE_URIS.search_results_toastbar;
            case o.WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.CALL_BTN_MODAL:
              return i.WINDOWS_STORE_URIS.call_btn_modal;
            case o.WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.CALL_BTN_MODAL_2:
              return i.WINDOWS_STORE_URIS.call_btn_modal_2;
            case o.WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.CHATLIST_DROPDOWN:
              return i.WINDOWS_STORE_URIS.chatlist_dropdown_menu;
            case o.WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.MISSED_CALL_MODAL:
              return i.WINDOWS_STORE_URIS.missed_call_modal;
            case o.WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.MISSED_CALL_MODAL_2:
              return i.WINDOWS_STORE_URIS.missed_call_modal_2;
          }
          const t = new Error(`Invalid CTA source: ${e}`);
          t.stack;
          throw t;
        }(e), {
          target: i.ExternalLinkTarget.DEEPLINK_IN_CURRENT_TAB
        });
      } catch (e) {
        __LOG__(4, undefined, new Error())`web-desktop-upsells: Failed to open MS Store app with error: ${e}`;
      }
    })(e);
  } else if (t === r.UserDesktopOs.MACOS) {
    (function () {
      try {
        (0, i.openExternalLink)(i.MAC_EXTERNAL_APP_STORE_URI, {
          target: i.ExternalLinkTarget.DEEPLINK_IN_CURRENT_TAB
        });
      } catch (e) {
        __LOG__(4, undefined, new Error())`web-desktop-upsells: Failed to open Mac App Store app with error: ${e}`;
      }
    })();
  }
  new s.WebcNativeUpsellCtaWamEvent({
    webcNativeUpsellCtaEventType: a.WEBC_NATIVE_UPSELL_CTA_EVENT_TYPE.CTA_BTN_CLICK,
    webcNativeUpsellCtaSource: e
  }).commitAndWaitForFlush(true);
};
var r = require("./787827.js");
var i = require("./753233.js");
var a = require("./23892.js");
var o = require("./239097.js");
var s = require("./543696.js");