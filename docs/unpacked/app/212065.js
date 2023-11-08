var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapIssueCodeToNumber = s;
exports.mexFetchMessageDeliveryUpdates = function () {
  return u.apply(this, arguments);
};
var i;
var a = r(require("../vendor/348926.js"));
var o = require("./123982.js");
function s(e) {
  if (e === "NONE") {
    return 0;
  } else {
    return 1;
  }
}
const l = i !== undefined ? i : i = require("./566483.js");
function u() {
  return (u = (0, a.default)(function* (e) {
    var t;
    var n;
    const r = {
      jid: e.toString()
    };
    const i = yield (0, o.fetchQuery)(l, r);
    __LOG__(2, undefined, undefined, undefined, ["GQL", "MEX"])`[MEX][NEWSLETTER] fetched message delivery updates for ${e}`;
    if ((t = i.xwa2_newsletter) === null || t === undefined || (n = t.messages) === null || n === undefined) {
      return undefined;
    } else {
      return n.edges.map(e => ({
        serverId: parseInt(e.node.server_id, 10),
        issueCode: s(e.node.message_delivery_update.issue.code)
      }));
    }
  })).apply(this, arguments);
}