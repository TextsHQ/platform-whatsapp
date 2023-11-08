var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLocalSchemaVersions = function () {
  return u.apply(this, arguments);
};
exports.getLocalVersion = s;
var i = r(require("../vendor/348926.js"));
var a = r(require("./721698.js"));
var o = require("./309998.js");
function s() {
  return l.apply(this, arguments);
}
function l() {
  return (l = (0, i.default)(function* (e) {
    try {
      const t = new a.default(e);
      const n = (yield t.open()).verno;
      yield t.close();
      return n - 1;
    } catch (e) {
      if (e.name !== "NoSuchDatabaseError") {
        __LOG__(4, undefined, new Error())`db: error while getting db local version: ${e}`;
      }
      return null;
    }
  })).apply(this, arguments);
}
function u() {
  return (u = (0, i.default)(function* () {
    const e = (yield Promise.all(Array.from(o.DatabaseNames.members()).map(function () {
      var e = (0, i.default)(function* (e) {
        const t = yield s(e);
        if (t != null) {
          return [e, t];
        } else {
          return null;
        }
      });
      return function () {
        return e.apply(this, arguments);
      };
    }()))).filter(Boolean);
    return new Map(e);
  })).apply(this, arguments);
}