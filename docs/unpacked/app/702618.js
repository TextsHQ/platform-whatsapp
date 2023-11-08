var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.markAsReadForTable = function (e, t) {
  return (0, o.getStorage)().lock([e], function () {
    var e = (0, a.default)(function* (e) {
      let [n] = e;
      const r = yield n.anyOf(["msgKey"], t);
      if (r.length !== 0) {
        yield n.bulkCreateOrReplace(r.map(e => (0, i.default)((0, i.default)({}, e), {}, {
          read: true
        })));
      }
      return r.map(e => {
        let {
          msgKey: t
        } = e;
        return s.default.from(t);
      });
    });
    return function () {
      return e.apply(this, arguments);
    };
  }());
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./732011.js");
var s = r(require("./565754.js"));