var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return s.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./247531.js");
var o = require("./371629.js");
function s() {
  return (s = (0, i.default)(function* (e) {
    const t = [];
    for (const n of e) {
      const e = a.PremiumMessageCollection.get(n.premiumMessageId);
      if (e) {
        const r = new Set(e.sentMessageIds);
        r.add(n.messageId);
        t.push(e);
        e.set("sentMessageIds", r);
      }
    }
    yield (0, o.getPremiumMessageTable)().bulkCreateOrMerge(t.map(e => ({
      id: e.id,
      name: e.name,
      type: e.type,
      isDeleted: e.isDeleted,
      mediaId: e.mediaId,
      sentMessageIds: e.sentMessageIds
    })));
  })).apply(this, arguments);
}