var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logElectronDeprecationCtaClickToWam = function () {
  return s.apply(this, arguments);
};
exports.logElectronDeprecationCtaImpressionToWam = function (e, t) {
  new u.WebcElectronDeprecationCtaWamEvent({
    webcElectronDeprecationCtaEventType: o.WEBC_ELECTRON_DEPRECATION_CTA_EVENT_TYPE.IMPRESSION,
    webcElectronDeprecationCtaSource: e,
    webcElectronDeprecationCtaType: t
  }).commit();
};
exports.logElectronDeprecationStage1ButterbarDismissToWam = function () {
  new u.WebcElectronDeprecationCtaWamEvent({
    webcElectronDeprecationCtaEventType: o.WEBC_ELECTRON_DEPRECATION_CTA_EVENT_TYPE.CTA_DISMISS,
    webcElectronDeprecationCtaSource: l.WEBC_ELECTRON_DEPRECATION_CTA_SOURCE.BUTTERBAR,
    webcElectronDeprecationCtaType: i.WEBC_ELECTRON_DEPRECATION_CTA_TYPE.SOFT_MIGRATION
  }).commit();
};
var r = a(require("../vendor/348926.js"));
var o = require("./43698.js");
var l = require("./86242.js");
var i = require("./185327.js");
var u = require("./303745.js");
function s() {
  return (s = (0, r.default)(function* (e, t) {
    yield new u.WebcElectronDeprecationCtaWamEvent({
      webcElectronDeprecationCtaEventType: o.WEBC_ELECTRON_DEPRECATION_CTA_EVENT_TYPE.CTA_BTN_CLICK,
      webcElectronDeprecationCtaSource: e,
      webcElectronDeprecationCtaType: t
    }).commitAndWaitForFlush(true);
  })).apply(this, arguments);
}