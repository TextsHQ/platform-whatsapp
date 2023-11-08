var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.determineNewsletterGeosuspendedCountryUpdates = c;
exports.getNewsletterGeosuspendedCountryUpdates = function (e) {
  return (0, l.createNonPersistedJob)("getNewsletterGeoSuspendedCountryUpdates", (0, i.default)(function* () {
    try {
      const t = yield (0, u.getNewsletterMetadataTable)().get(e);
      if (t == null) {
        return;
      }
      const {
        geosuspendedCountries: n = new Map()
      } = t;
      const r = yield (0, o.mexFetchGeosuspendedCountryUpdates)(e);
      const {
        countriesToAdd: i,
        countriesToRemove: a
      } = c(r, n);
      yield Promise.all([(0, s.updateGeosuspendedCountry)(e, i, true), (0, s.updateGeosuspendedCountry)(e, a, false)]);
      return {
        countriesToAdd: i,
        countriesToRemove: a
      };
    } catch (e) {
      __LOG__(4, undefined, new Error(), undefined, ["GQL", "MEX"])`[MEX][NEWSLETTER] GET geo suspended countries error`;
      throw e;
    }
  }), {
    priority: a.JOB_PRIORITY.HIGH
  }).waitUntilCompleted();
};
var i = r(require("../vendor/348926.js"));
var a = require("./775593.js");
var o = require("./222611.js");
var s = require("./520670.js");
var l = require("./899137.js");
var u = require("./876358.js");
function c(e, t) {
  const n = [];
  const r = e != null ? e : [];
  if (!(t == null)) {
    t.forEach((t, r) => {
      if (!(e == null ? undefined : e.includes(r))) {
        n.push(r);
      }
    });
  }
  return {
    countriesToAdd: r,
    countriesToRemove: n
  };
}