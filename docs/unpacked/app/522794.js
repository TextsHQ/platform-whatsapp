var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storeMessageOrphans = function () {
  return d.apply(this, arguments);
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./944749.js");
var s = require("./907539.js");
var l = require("./803328.js");
var u = require("./787742.js");
var c = require("./292174.js");
function d() {
  return (d = (0, a.default)(function* (e, t) {
    __LOG__(2)`storeMessageOrphans:`;
    const n = e.map(e => {
      var n;
      var r;
      return {
        msgKey: e.id.toString(),
        parentMsgKey: t(e).toString(),
        sender: (0, u.getSender)(e).toString(),
        parsedMsgPayload: (0, s.dbRowFromMessage)((0, i.default)({}, e)),
        type: (n = (r = o.addOnProviders.find(t => t.matches(e))) === null || r === undefined ? undefined : r.type) !== null && n !== undefined ? n : l.MessageAddOnType.Unknown,
        senderTimestampMs: e.senderTimestampMs,
        t: e.t
      };
    });
    yield (0, c.getMessageOrphanTable)().bulkCreateOrReplace(n);
  })).apply(this, arguments);
}