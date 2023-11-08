var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAddonProcessor = function (e) {
  return (0, i.default)(o.get(e), "processorLookupMap.get(type)");
};
exports.getAddonProcessorsMap = function () {
  return o;
};
exports.hasAddonProcessor = function (e) {
  return Boolean(o.get(e));
};
var i = r(require("./670983.js"));
var a = r(require("./637072.js"));
const o = function () {
  const e = new Map();
  for (const {
    type: t,
    processor: n
  } of a.default) {
    if (n != null) {
      e.set(t, n);
    }
  }
  return e;
}();