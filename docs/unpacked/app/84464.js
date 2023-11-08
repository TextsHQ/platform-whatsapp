var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t, n) {
  return (0, o.default)(e, function () {
    var r = (0, i.default)(function* (r) {
      if (r.signal.aborted) {
        throw new a.AbortError();
      }
      const i = e(r);
      const o = yield t.get(i, r);
      if (r.signal.aborted) {
        throw new a.AbortError();
      }
      if (o != null) {
        return o;
      }
      const s = yield n(r);
      if (r.signal.aborted) {
        throw new a.AbortError();
      }
      yield t.set(i, s, r);
      return s;
    });
    return function () {
      return r.apply(this, arguments);
    };
  }());
};
var i = r(require("../vendor/311504.js"));
var a = require("./898817.js");
var o = r(require("./66836.js"));