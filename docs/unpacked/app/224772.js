var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hydrateOrGetReaction = function () {
  return l.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./364622.js");
var o = require("./590677.js");
var s = require("./896122.js");
function l() {
  return (l = (0, i.default)(function* (e) {
    const t = o.FlattenedReactionsCollection.byParent(e).toArray();
    if (t.length !== 0) {
      return t;
    }
    const n = yield (0, a.getReactions)(e);
    const r = [].concat(...n.reactions.map(e => e.senders)).map(e => (0, s.convertReactionRowToFlattenedReaction)(e));
    o.FlattenedReactionsCollection.addOrUpdateReaction(r);
    return r;
  })).apply(this, arguments);
}