var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WAWebDesktopUpsellCallingMissedCallPopover = function (e) {
  let {
    userDesktopOs: t
  } = e;
  const n = (0, f.useABPropConfigValue)("desktop_upsell_win_cta_missed_call_variation_2");
  const a = n ? u.WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.MISSED_CALL_MODAL_2 : u.WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.MISSED_CALL_MODAL;
  (0, p.useWAWebDesktopUpsellWamImpression)({
    isCtaVisible: true,
    source: a
  });
  (0, m.default)(() => {
    new s.WebcNativeUpsellCtaWamEvent({
      webcNativeUpsellCtaEventType: i.WEBC_NATIVE_UPSELL_CTA_EVENT_TYPE.CTA_DISMISS,
      webcNativeUpsellCtaSource: a
    }).commit();
  });
  return d.default.createElement(r.WAWebDesktopUpsellCallingPopover, {
    title: h(n, t),
    body: t === l.UserDesktopOs.WINDOWS ? c.fbt._("Download WhatsApp for Windows to start returning missed calls.", null, {
      hk: "xMS6T"
    }) : c.fbt._("Download WhatsApp for Mac to start returning missed calls.", null, {
      hk: "41R5Vc"
    }),
    onClick: () => {
      (0, o.openExternalWhatsAppDesktopDownloadUrl)(a);
    }
  });
};
var r = require("./154215.js");
var o = require("../app/29054.js");
var l = require("../app/787827.js");
var i = require("../app/23892.js");
var u = require("../app/239097.js");
var s = require("../app/543696.js");
var c = require("../vendor/548360.js");
var d = a(require("../vendor/667294.js"));
var f = require("../app/325390.js");
var p = require("../app/505046.js");
var m = a(require("../app/558532.js"));
function h(e, t) {
  if (e) {
    if (t === l.UserDesktopOs.WINDOWS) {
      return c.fbt._("Return calls with the Windows app", null, {
        hk: "2oLNa4"
      });
    } else {
      return c.fbt._("Return calls with the Mac app", null, {
        hk: "2dukst"
      });
    }
  } else {
    return c.fbt._("Calling is only available on the app", null, {
      hk: "13C0uv"
    });
  }
}