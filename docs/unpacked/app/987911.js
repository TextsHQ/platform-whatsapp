var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNewsletterIntegrityUpdates = function (e) {
  let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : a.JOB_PRIORITY.LOW;
  return (0, p.createNonPersistedJob)("getNewsletterIntegrityUpdates", (0, i.default)(function* () {
    try {
      var n;
      var r;
      const i = yield (0, f.getNewsletterMetadataTable)().get(e);
      if (i == null) {
        return;
      }
      const {
        geosuspendedCountries: a = new Map(),
        messageDeliveryUpdates: p = new Map()
      } = i;
      const _ = yield (0, o.mexFetchIntegrityUpdates)(e);
      const g = (n = _ == null ? undefined : _.geosuspendedCountries) !== null && n !== undefined ? n : [];
      const {
        countriesToAdd: m,
        countriesToRemove: h
      } = (0, l.determineNewsletterGeosuspendedCountryUpdates)(g, a);
      const y = (r = _ == null ? undefined : _.messageDeliveryUpdates) !== null && r !== undefined ? r : [];
      const E = (0, u.determineNewsletterMessageDeliveryUpdates)(y, p);
      yield Promise.all([(0, s.updateGeosuspendedCountry)(e, m, true), (0, s.updateGeosuspendedCountry)(e, h, false), E != null && (0, d.updateNewsletterMessageDeliveryUpdates)(e, E.updatesToAdd, E.updatesToRemove, t)]);
      if (E == null) {
        return {
          geosuspendedCountriesToAdd: m,
          geosuspendedCountriesToRemove: h,
          violatingMessagesToAdd: [],
          violatingMessagesToRemove: []
        };
      }
      const S = yield (0, c.getMessageDeliveryUpdatesModelToUpdate)(e, E.updatesToAdd, E.updatesToRemove);
      return {
        geosuspendedCountriesToAdd: m,
        geosuspendedCountriesToRemove: h,
        violatingMessagesToAdd: S ? S.modelUpdatesToAdd : [],
        violatingMessagesToRemove: S ? S.modelUpdatesToRemove : []
      };
    } catch (e) {
      __LOG__(4, undefined, new Error(), undefined, ["GQL", "MEX"])`[MEX][NEWSLETTER] GET integrity updates error`;
      throw e;
    }
  }), {
    priority: t
  }).waitUntilCompleted();
};
var i = r(require("../vendor/348926.js"));
var a = require("./775593.js");
var o = require("./209932.js");
var s = require("./520670.js");
var l = require("./630031.js");
var u = require("./621017.js");
var c = require("./202917.js");
var d = require("./787671.js");
var p = require("./899137.js");
var f = require("./876358.js");