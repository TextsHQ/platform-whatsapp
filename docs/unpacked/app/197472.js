var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.computedForComponent = undefined;
var i = r(require("../vendor/288306.js"));
var a = require("./442457.js");
var o = require("./272619.js");
const s = new a.FakeCacheMap();
const l = (0, i.default)(e => (0, o.createGetterFactories)({
  root: e,
  createCache: () => s
}));
const u = (0, i.default)(e => {
  const t = e[0].$$root;
  const {
    computed: n
  } = l(t);
  return n(e => e, e);
}, e => e.map(p).join("-"));
exports.computedForComponent = u;
const c = new WeakMap();
let d = 0;
function p(e) {
  let t = c.get(e);
  if (t == null) {
    t = (d++).toString();
    c.set(e, t);
  }
  return t;
}