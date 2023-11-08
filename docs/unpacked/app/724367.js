var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMessageOrphansByParentMsgKey = function (e) {
  return (0, o.getMessageOrphanTable)().equals(["parentMsgKey"], String(e)).then(e => e.filter(Boolean).map(a.orphanFromDbRow));
};
exports.getMessageOrphansByParentMsgKeys = function () {
  return s.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./939314.js");
var o = require("./292174.js");
function s() {
  return (s = (0, i.default)(function* (e) {
    const t = new Set(e.map(e => String(e)));
    const n = yield (0, o.getMessageOrphanTable)().anyOf(["parentMsgKey"], Array.from(t));
    const r = new Map();
    n.forEach(e => {
      const t = r.get(e.parentMsgKey) || [];
      t.push(e);
      r.set(e.parentMsgKey, t);
    });
    return r;
  })).apply(this, arguments);
}