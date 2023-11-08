var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mexGetNewsletterDehydrated = function () {
  return l.apply(this, arguments);
};
var i;
var a = r(require("../vendor/348926.js"));
var o = require("./123982.js");
var s = r(require("./124928.js"));
function l() {
  return (l = (0, a.default)(function* (e, t) {
    const r = i !== undefined ? i : i = require("./763312.js");
    const a = s.default.isNewsletter(e) ? "JID" : "INVITE";
    const l = yield (0, o.fetchQuery)(r, {
      input: {
        key: e,
        type: a,
        view_role: t
      }
    });
    __LOG__(2, undefined, undefined, undefined, ["GQL", "MEX"])`[MEX][NEWSLETTER] fetched verification and subscribers count for ${e}`;
    return l;
  })).apply(this, arguments);
}