var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.persistContactUpdateBatched = function (e, t) {
  return l((0, i.default)((0, i.default)({}, t), {}, {
    id: e.toJid()
  }));
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./392646.js");
var s = require("./691195.js");
const l = (0, o.batch)({
  delayMs: 3000
}, function () {
  var e = (0, a.default)(function* (e) {
    yield function () {
      return u.apply(this, arguments);
    }(e);
    return e.map(() => {});
  });
  return function () {
    return e.apply(this, arguments);
  };
}());
function u() {
  return (u = (0, a.default)(function* (e) {
    const t = Array.from(e.reduce((e, t) => {
      var n;
      e.set(t.id, (0, i.default)((0, i.default)({}, (n = e.get(t.id)) !== null && n !== undefined ? n : {}), t));
      return e;
    }, new Map()).values());
    yield (0, s.getContactTable)().bulkCreateOrMerge(t);
  })).apply(this, arguments);
}