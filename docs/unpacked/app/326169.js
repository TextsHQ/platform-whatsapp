var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.syncPrivacyDisallowedLists = s;
exports.syncSinglePrivacyDisallowedList = function () {
  return u.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./578300.js");
var o = require("./384464.js");
function s() {
  return l.apply(this, arguments);
}
function l() {
  return (l = (0, i.default)(function* (e) {
    const t = yield Promise.all(e.map(function () {
      var e = (0, i.default)(function* (e) {
        return {
          type: e,
          response: yield (0, a.queryPrivacyDisallowedList)(e)
        };
      });
      return function () {
        return e.apply(this, arguments);
      };
    }()));
    const n = [];
    t.forEach(e => {
      const {
        status: t,
        users: r,
        dhash: i
      } = e.response;
      if (t === "mismatch" && r != null && i != null) {
        n.push({
          id: e.type,
          disallowedList: r.map(e => e.toString()),
          dhash: i
        });
      }
    });
    yield (0, o.getPrivacyDisallowedListTable)().bulkCreateOrReplace(n);
    return n;
  })).apply(this, arguments);
}
function u() {
  return (u = (0, i.default)(function* (e) {
    yield s([e]);
  })).apply(this, arguments);
}