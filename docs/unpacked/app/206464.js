var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getExisting = function () {
  return l.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./351053.js");
var o = require("./518567.js");
var s = r(require("./358533.js"));
function l() {
  return (l = (0, i.default)(function* (e) {
    const t = a.ChatCollection.get(e);
    if (t && !t.stale) {
      return t;
    }
    const n = e.isNewsletter();
    if (n) {
      const t = s.default.get(e);
      if (t != null && !t.stale) {
        return s.default.get(e);
      }
    }
    const r = yield (0, o.findLocal)(e.toString());
    if (r) {
      if (n) {
        return s.default.gadd(r);
      } else {
        return a.ChatCollection.gadd(r);
      }
    } else {
      return null;
    }
  })).apply(this, arguments);
}