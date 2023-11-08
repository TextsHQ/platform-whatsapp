var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BANNER_TYPE = exports.BANNER_CONFIG = undefined;
exports.getStorageAccessors = f;
exports.shouldShowSuggestion = function (e) {
  const t = (0, r.default)((0, r.default)({}, d), {}, {
    storageAccessors: f(e),
    bannerId: e
  });
  return (0, o.adsActionBannersEnabled)() && l.CTWASuggestionCollection.get(e) != null && (0, s.shouldShowNUX)(c, t);
};
var r = a(require("../vendor/81109.js"));
var o = require("../app/72696.js");
var l = require("./353556.js");
var i = require("./750271.js");
var u = require("../app/95589.js");
var s = require("./316488.js");
const c = u.NuxKeyTypes.COOL_OFF_NUX.CTWA_SUGGESTION;
exports.BANNER_TYPE = c;
const d = {
  COOL_OFF_START_STORAGE_KEY: u.CoolOffPeriodKeys.CTWA_SUGGESTION,
  MAX_CLICKS: 1
};
function f(e) {
  return {
    getNuxOptions: () => {
      var t;
      var n;
      if ((t = l.CTWASuggestionCollection.get(e)) === null || t === undefined || (n = t.suggestion) === null || n === undefined) {
        return undefined;
      } else {
        return n.nuxData;
      }
    },
    setNuxOptions: (t, n) => {
      (0, i.ctwaSuggestionNuxDataChanged)(e, (0, r.default)((0, r.default)({}, n), {}, {
        lastViewedDay: n.lastViewedDay.toISOString()
      }));
    },
    getCoolOffData: () => {
      var t;
      var n;
      if ((t = l.CTWASuggestionCollection.get(e)) === null || t === undefined || (n = t.suggestion) === null || n === undefined) {
        return undefined;
      } else {
        return n.coolOffData;
      }
    },
    setCoolOffData: (t, n) => {
      (0, i.ctwaSuggestionCoolOffDataChanged)(e, (0, r.default)((0, r.default)({}, n), {}, {
        startDate: n.startDate.toISOString()
      }));
    }
  };
}
exports.BANNER_CONFIG = d;