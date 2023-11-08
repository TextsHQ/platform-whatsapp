var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryAndRemoveLocalLabelAssociation = function () {
  return s.apply(this, arguments);
};
exports.queryLocalLabelAssociation = o;
var i = r(require("../vendor/348926.js"));
var a = require("./362029.js");
function o(e) {
  return (0, a.getLabelAssociationTable)().anyOf(["associationId", "type"], e.map(e => {
    let {
      associationId: t,
      type: n
    } = e;
    return [t, n];
  }));
}
function s() {
  return (s = (0, i.default)(function* (e) {
    const t = yield o(e);
    yield (0, a.getLabelAssociationTable)().bulkRemove(t.map(e => {
      let {
        labelId: t,
        associationId: n,
        type: r
      } = e;
      return [t, n, r];
    }));
  })).apply(this, arguments);
}