Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LabelAssociationType = undefined;
exports.addTable = function () {
  const e = (0, r.getStorage)();
  const {
    addCompositePrimaryKey: t,
    addIndex: n,
    addCompositeIndex: o
  } = (0, a.columnBuilder)(e.config);
  e.add("label-association").version((0, i.labelAssociationCreateTable)(), [t(["labelId", "associationId", "type"]), n("labelId"), o(["associationId", "type"])]).view(e => e);
};
exports.getLabelAssociationTable = function () {
  return (0, r.getStorage)().table("label-association");
};
var r = require("./732011.js");
var i = require("./612975.js");
var a = require("./322511.js");
const o = require("../vendor/76672.js")({
  Jid: "jid",
  Message: "message"
});
exports.LabelAssociationType = o;