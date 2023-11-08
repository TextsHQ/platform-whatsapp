Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t) {
  let n;
  let o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  n = e == null ? [] : Array.isArray(e) ? e : [e];
  const [l, i] = (0, a.useState)(o);
  (0, r.useListeners)(n.map(e => ({
    source: e,
    eventOrEvents: t,
    callback: function () {
      let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      i(t => t + e);
    }
  })));
  return l;
};
var a = require("../vendor/667294.js");
var r = require("../app/808446.js");