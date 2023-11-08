var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mexGetNewsletter = function () {
  return l.apply(this, arguments);
};
var i;
var a = r(require("../vendor/348926.js"));
var o = require("./123982.js");
var s = r(require("./124928.js"));
function l() {
  return (l = (0, a.default)(function* (e, t, r) {
    const a = i !== undefined ? i : i = require("./473627.js");
    const l = s.default.isNewsletter(e) ? "JID" : "INVITE";
    const u = {
      input: {
        key: e,
        type: l,
        view_role: t
      },
      fetch_viewer_metadata: r.fetchViewerMetadata,
      fetch_full_image: l !== "INVITE",
      fetch_creation_time: r.fetchCreationTime
    };
    const c = yield (0, o.fetchQuery)(a, u);
    __LOG__(2, undefined, undefined, undefined, ["GQL", "MEX"])`[MEX][NEWSLETTER] fetched get newsletter job for ${e}`;
    return c;
  })).apply(this, arguments);
}