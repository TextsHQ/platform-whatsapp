var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useChatOpenMetrics = function (e) {
  (0, d.useEffect)(() => {
    if (e.hasOpened !== true) {
      (0, u.setChatHasOpened)(e).catch(() => {});
      self.setTimeout((0, r.default)(function* () {
        var t;
        var n;
        if (e.msgs.some(e => e.subtype === "contact_info_card")) {
          new l.FmxActionWamEvent({
            fmxEntryPoint: s.FMX_ENTRY_POINT.FMX_CARD,
            fmxEvent: c.FMX_EVENT.FMX_CARD_VIEWED,
            countryShown: yield (0, i.shouldShowCountryCodeTrustSignal)(e.contact),
            notAContactShown: yield (0, i.shouldShowContactTrustSignal)(e.contact),
            commonGroupNum: (t = (n = yield (0, o.findCommonGroups)(e.contact)) === null || n === undefined ? undefined : n.length) !== null && t !== undefined ? t : 0
          }).commit();
        }
      }), 1000);
    }
  }, []);
};
var r = a(require("../vendor/348926.js"));
var o = require("./701777.js");
var l = require("../app/392802.js");
var i = require("./93907.js");
var u = require("./286573.js");
var s = require("../app/604106.js");
var c = require("../app/283136.js");
var d = require("../vendor/667294.js");