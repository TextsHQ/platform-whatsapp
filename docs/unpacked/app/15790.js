var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DOMAINS = undefined;
exports.handleRoutingInfo = function () {
  return l.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./390934.js");
var o = require("./673168.js");
const s = {
  fb: "fb",
  sl: "sl"
};
function l() {
  return (l = (0, i.default)(function* (e) {
    let t = e.domain;
    if (!t) {
      const e = yield (0, o.getRoutingInfo)();
      t = e ? e.domain : s.fb;
    }
    const n = (0, a.bytesToBuffer)(e.edgeRouting);
    yield (0, o.setRoutingInfo)({
      domain: t,
      edgeRouting: n
    });
    __LOG__(2)`handleInfoBulletin setting and domain: ${t} and edgeRouting:`;
  })).apply(this, arguments);
}
exports.DOMAINS = s;