var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaults = undefined;
exports.exponentialBackoffIterator = function* (e) {
  const {
    factor: t,
    jitter: n,
    maxTimeout: r,
    minTimeout: s,
    retries: l
  } = (0, i.default)((0, i.default)({}, o), e);
  let u = 0;
  for (const e of (0, a.default)(t)) {
    u++;
    if (u > l) {
      return;
    }
    const t = Math.random() * n * 2 - n + 1;
    yield Math.min(s * e * t, r);
  }
};
var i = r(require("../vendor/73982.js"));
var a = r(require("./250917.js"));
const o = {
  factor: 2,
  jitter: 0,
  maxTimeout: 1 / 0
};
exports.defaults = o;