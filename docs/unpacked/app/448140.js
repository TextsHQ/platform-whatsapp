var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = require("./714574.js");
var a = r(require("./629116.js"));
var o = require("./97858.js");
class s extends a.default {}
exports.default = s;
s.mutates = true;
s.mutate = (e, t) => {
  const {
    contact: n,
    groupMetadata: r
  } = t;
  if ((0, o.isDropLastNameEnabled)() && r && r.hasUniqueShortNameMention(n)) {
    return `@${n.shortName}`;
  } else {
    return `@${(0, i.getDisplayName)(n)}`;
  }
};