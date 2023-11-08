var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGeoSuspendedCountriesAction = function () {
  return l.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./549142.js");
var o = require("./630031.js");
var s = require("./263318.js");
function l() {
  return (l = (0, i.default)(function* (e) {
    try {
      const t = (0, s.toNewsletterJidOrThrow)(e.toJid());
      const n = yield (0, o.getNewsletterGeosuspendedCountryUpdates)(t);
      if (n == null) {
        return;
      }
      const {
        countriesToAdd: r,
        countriesToRemove: i
      } = n;
      a.NewsletterBridgeApi.updateGeosuspendedCountry({
        id: e,
        countryCodes: r,
        toAdd: true
      });
      a.NewsletterBridgeApi.updateGeosuspendedCountry({
        id: e,
        countryCodes: i,
        toAdd: false
      });
    } catch (e) {
      __LOG__(4, undefined, new Error(), true, ["newsletter"])`[newsletters][getGeoSuspendedCountriesAction] Failed to get geo suspended countries: ${e}`;
      SEND_LOGS("newsletter-failed-to-get-geosuspended-countries", 1, "newsletter");
    }
  })).apply(this, arguments);
}