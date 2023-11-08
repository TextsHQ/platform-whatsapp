var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mexFetchIntegrityUpdates = function () {
  return u.apply(this, arguments);
};
var i;
var a = r(require("../vendor/348926.js"));
var o = require("./212065.js");
var s = require("./258269.js");
const l = i !== undefined ? i : i = require("./180880.js");
function u() {
  return (u = (0, a.default)(function* (e) {
    var t;
    var n;
    var r;
    var i;
    var a;
    const u = yield (0, s.fetchQuery)(l, {
      newsletter_id: e
    });
    __LOG__(2, undefined, undefined, undefined, ["GQL", "MEX"])`[MEX][NEWSLETTER] fetched geo suspended countries and violating messages for ${e}`;
    const c = (t = u.data.xwa2_newsletter_admin) === null || t === undefined || (n = t.thread_metadata) === null || n === undefined || (r = n.geo_states) === null || r === undefined ? undefined : r.filter(e => {
      var t;
      return ((t = e.state) === null || t === undefined ? undefined : t.type) === "GEOSUSPENDED";
    });
    const d = {};
    d.geosuspendedCountries = c == null ? undefined : c.map(e => e.country_code);
    d.messageDeliveryUpdates = (i = u.data.xwa2_newsletter_admin) === null || i === undefined || (a = i.messages) === null || a === undefined ? undefined : a.edges.map(e => ({
      serverId: parseInt(e.node.server_id, 10),
      issueCode: (0, o.mapIssueCodeToNumber)(e.node.message_delivery_update.issue.code)
    }));
    return d;
  })).apply(this, arguments);
}