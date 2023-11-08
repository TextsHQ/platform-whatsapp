var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mexFetchPlaintextLinkPreview = function () {
  return u.apply(this, arguments);
};
var r;
var o = a(require("../vendor/348926.js"));
var l = require("../app/123982.js");
const i = r !== undefined ? r : r = require("./744999.js");
function u() {
  return (u = (0, o.default)(function* (e) {
    var t;
    var n;
    var a;
    var r;
    var o;
    try {
      new URL(e);
    } catch (t) {
      __LOG__(4, undefined, new Error())`[MEX][NEWSLETTER] ${e} is not a valid url`;
      return null;
    }
    const {
      xwa2_newsletter_link_preview: u
    } = yield (0, l.fetchQuery)(i, {
      input: {
        url: e
      }
    });
    const s = (u == null ? undefined : u.direct_path) != null && (u == null ? undefined : u.hash) != null ? {
      directPath: u.direct_path,
      thumbHash: u.hash,
      thumbHeight: (t = u.height) !== null && t !== undefined ? t : 0,
      thumbWidth: (n = u.width) !== null && n !== undefined ? n : 0
    } : undefined;
    return {
      url: e,
      canonicalUrl: (a = u == null ? undefined : u.canonical_url) !== null && a !== undefined ? a : undefined,
      title: (r = u == null ? undefined : u.title) !== null && r !== undefined ? r : undefined,
      description: (o = u == null ? undefined : u.description) !== null && o !== undefined ? o : undefined,
      hqThumbnail: s,
      thumbData: u == null ? undefined : u.thumb_data
    };
  })).apply(this, arguments);
}