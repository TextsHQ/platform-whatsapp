var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.detectWebpSupport = function () {
  return u.apply(this, arguments);
};
exports.getCachedWebpSupport = function () {
  return l;
};
var i = r(require("../vendor/348926.js"));
var a = require("./434517.js");
var o = require("./197636.js");
const s = (0, a.promiseTimeout)(new Promise(e => {
  (0, o.loadImage)("data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA").then(t => e(t.height === 2));
}), 5000).catch(() => false);
let l = null;
function u() {
  return (u = (0, i.default)(function* () {
    if (l != null) {
      return Promise.resolve(l);
    }
    const e = yield s;
    l = e;
    return e;
  })).apply(this, arguments);
}