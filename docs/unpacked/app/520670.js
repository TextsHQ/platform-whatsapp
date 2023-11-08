var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateGeosuspendedCountry = function (e, t, n) {
  return (0, a.createNonPersistedJob)("updateGeosuspendedCountry", (0, i.default)(function* () {
    const r = yield (0, o.getNewsletterMetadataTable)().get(e);
    if (r == null) {
      return Promise.resolve();
    }
    const {
      geosuspendedCountries: i = new Map()
    } = r;
    if (n) {
      t.forEach(e => {
        if (!(i == null)) {
          i.set(e, {
            geosuspended: true
          });
        }
      });
    } else {
      t.forEach(e => {
        if (!(i == null)) {
          i.delete(e);
        }
      });
    }
    r.geosuspendedCountries = i;
    return (0, o.getNewsletterMetadataTable)().merge(e, r);
  })).waitUntilCompleted();
};
var i = r(require("../vendor/348926.js"));
var a = require("./899137.js");
var o = require("./876358.js");