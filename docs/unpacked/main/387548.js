var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.restoreSubgroupSuggestionsFromDb = function () {
  return s.apply(this, arguments);
};
var r = a(require("../vendor/81109.js"));
var o = a(require("../vendor/348926.js"));
var l = require("../app/900890.js");
var i = require("../app/369461.js");
var u = require("../app/163139.js");
function s() {
  return (s = (0, o.default)(function* (e) {
    var t;
    const n = (0, u.unproxy)(e);
    const a = yield (0, l.getSubgroupSuggestions)(n.id);
    if (!((t = n.groupMetadata) === null || t === undefined)) {
      t.subgroupSuggestions.add(a.map(e => (0, r.default)((0, r.default)({}, e), {}, {
        id: (0, i.getSubgroupSuggestionId)(e.id, e.owner),
        groupId: e.id
      })), {
        merge: true
      });
    }
  })).apply(this, arguments);
}