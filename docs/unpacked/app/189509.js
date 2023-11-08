var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCountriesMap = function () {
  return s.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./256354.js");
var o = require("./464175.js");
function s() {
  return (s = (0, i.default)(function* (e) {
    const t = (yield (0, o.getSupportedLocales)()).default.includes(e) ? e : a.DEFAULT_LOCALE;
    return (yield (0, o.getCountryData)(t)).default;
  })).apply(this, arguments);
}