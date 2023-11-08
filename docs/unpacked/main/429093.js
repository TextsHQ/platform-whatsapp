var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addPaymentBackground = function (e) {
  i.add(e.id, e.imageBuffer);
  return (0, o.getTable)().createOrReplace(e);
};
exports.getPaymentBackgroundImageBuffer = function (e) {
  return i.get(e);
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/742096.js");
let l = new Map();
const i = {
  reset: () => {
    l = new Map();
  },
  add: (e, t) => {
    l.set(e, t);
  },
  get: e => (0, r.default)(function* () {
    if (!l.has(e)) {
      const t = yield (0, o.getTable)().get(e);
      const n = t == null ? undefined : t.imageBuffer;
      if (n != null) {
        l.set(e, n);
      }
    }
    return l.get(e);
  })()
};