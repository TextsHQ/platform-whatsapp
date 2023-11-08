var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flattenPairList = function (e) {
  return (0, i.default)(e.map(e => [e[0], e[1]]));
};
exports.unFlattenPairList = function (e) {
  if (e.length % 2 != 0) {
    throw new RangeError("Flattened pairs come in 2, invalid list size to unflatten!");
  }
  const t = [];
  for (let n = 0; n < e.length; n++) {
    t.push([e[n], e[++n]]);
  }
  return t;
};
var i = r(require("../vendor/385564.js"));