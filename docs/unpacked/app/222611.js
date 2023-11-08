var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mexFetchGeosuspendedCountryUpdates = function () {
  return l.apply(this, arguments);
};
var i;
var a = r(require("../vendor/348926.js"));
var o = require("./258269.js");
const s = i !== undefined ? i : i = require("./667752.js");
function l() {
  return (l = (0, a.default)(function* (e) {
    var t;
    var n;
    var r;
    const i = yield (0, o.fetchQuery)(s, {
      newsletter_id: e
    });
    __LOG__(2, undefined, undefined, undefined, ["GQL", "MEX"])`[MEX][NEWSLETTER] fetched geo suspended countries for ${e}`;
    const a = (t = i.data.xwa2_newsletter_admin) === null || t === undefined || (n = t.thread_metadata) === null || n === undefined || (r = n.geo_states) === null || r === undefined ? undefined : r.filter(e => {
      var t;
      return ((t = e.state) === null || t === undefined ? undefined : t.type) === "GEOSUSPENDED";
    });
    if (a == null) {
      return undefined;
    } else {
      return a.map(e => e.country_code);
    }
  })).apply(this, arguments);
}