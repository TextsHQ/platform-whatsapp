var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bulkPersistProfilePicChanges = l;
exports.persistProfilePicBatched = function (e) {
  return s(e);
};
var i = r(require("../vendor/348926.js"));
var a = require("./392646.js");
var o = require("./829884.js");
const s = (0, a.batch)({
  delayMs: 3000
}, function () {
  var e = (0, i.default)(function* (e) {
    yield l(e);
    return [];
  });
  return function () {
    return e.apply(this, arguments);
  };
}());
function l() {
  return u.apply(this, arguments);
}
function u() {
  return (u = (0, i.default)(function* (e) {
    const t = Array.from(e.reduce((e, t) => {
      e.set(t.id, t);
      return e;
    }, new Map()).values());
    yield (0, o.getProfilePicThumbTable)().bulkCreateOrMerge(t);
  })).apply(this, arguments);
}