var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useWAWebDesktopUpsellWamImpression = function (e) {
  const {
    source: t,
    isCtaVisible: n
  } = e;
  const r = (0, s.default)(() => {
    new a.WebcNativeUpsellCtaWamEvent({
      webcNativeUpsellCtaEventType: i.WEBC_NATIVE_UPSELL_CTA_EVENT_TYPE.IMPRESSION,
      webcNativeUpsellCtaSource: t
    }).commit();
  });
  (0, o.useEffect)(() => {
    if (n) {
      r();
    }
  }, [r, n]);
};
var i = require("./23892.js");
var a = require("./543696.js");
var o = require("../vendor/667294.js");
var s = r(require("./829686.js"));