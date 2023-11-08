var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mexFetchNewsletterIsDomainPreviewable = function () {
  return u.apply(this, arguments);
};
var r;
var o = a(require("../vendor/348926.js"));
var l = require("../app/123982.js");
const i = r !== undefined ? r : r = require("./254958.js");
function u() {
  return (u = (0, o.default)(function* (e) {
    var t;
    var n;
    const a = yield (0, l.fetchQuery)(i, {
      url_domains: e
    });
    __LOG__(2, undefined, undefined, undefined, ["GQL", "MEX"])`[MEX][NEWSLETTER] fetched domains previewable status ${JSON.stringify(e)}`;
    const r = (t = (n = a.xwa2_newsletter_message_integrity) === null || n === undefined ? undefined : n.url_previews) !== null && t !== undefined ? t : [];
    return new Map(r.map(e => {
      let {
        url_domain: t,
        is_previewable: n
      } = e;
      return [t, n === true];
    }));
  })).apply(this, arguments);
}