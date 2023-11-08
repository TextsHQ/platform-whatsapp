var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteModelsForLastAddOnPreview = function (e) {
  const t = new Set(e.map(e => i.default.fromString(e).remote.toString()));
  const r = require("./351053.js").ChatCollection;
  t.forEach(t => {
    var n;
    const i = r.get(t);
    if (i != null && e.includes((n = i.chatlistPreview) === null || n === undefined ? undefined : n.parentMsgKey)) {
      i.unset(["chatlistPreview", "lastReactionPreview"]);
    }
  });
};
exports.updateModelsForLastAddOnPreview = function (e) {
  const t = require("./351053.js").ChatCollection;
  e.forEach((e, n) => {
    const r = t.get(n);
    if (r != null) {
      r.set({
        chatlistPreview: e,
        lastReactionPreview: undefined
      });
    }
  });
};
var i = r(require("./565754.js"));