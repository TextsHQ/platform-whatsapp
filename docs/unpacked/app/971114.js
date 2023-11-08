var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sortMutations = function (e) {
  return [...e].sort(S);
};
var i = r(require("./908002.js"));
var a = r(require("./341201.js"));
var o = r(require("./833979.js"));
var s = r(require("./722235.js"));
var l = r(require("./921955.js"));
var u = r(require("./786770.js"));
var c = r(require("./337448.js"));
var d = r(require("./398595.js"));
var p = r(require("./467069.js"));
var f = r(require("./994946.js"));
var _ = r(require("./41362.js"));
var g = r(require("./30843.js"));
var m = r(require("./707993.js"));
var h = r(require("./100805.js"));
var y = r(require("../vendor/441143.js"));
const E = [_.default, p.default, m.default, g.default, f.default, c.default, h.default, d.default, a.default, l.default, i.default, o.default, u.default, s.default];
function S(e, t) {
  const n = E.indexOf(e.constructor);
  const r = E.indexOf(t.constructor);
  (0, y.default)(n !== -1, `Mutation ${e.constructor.name} is not a known mutation type`);
  (0, y.default)(r !== -1, `Mutation ${t.constructor.name} is not a known mutation type`);
  return n - r;
}