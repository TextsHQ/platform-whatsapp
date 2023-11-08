var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchNewsletterProfilePic = function () {
  return u.apply(this, arguments);
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./418987.js");
var s = require("./787671.js");
var l = require("./14291.js");
function u() {
  return (u = (0, a.default)(function* (e) {
    var t;
    var n;
    var r;
    var a;
    var u;
    const c = {
      id: e
    };
    const d = (0, o.toNewsletterJid)(e.toString());
    const p = (0, l.getRoleByIdentifier)(e);
    const f = yield (0, s.getNewsletterMetadata)(d, p, {
      picture: true
    });
    const _ = f == null || (t = f.newsletterPictureMetadataMixin) === null || t === undefined ? undefined : t.picture;
    if (_ == null) {
      return c;
    }
    const g = (0, l.mapPicturesToProfilePicThumb)(d, _);
    return (0, i.default)((0, i.default)({}, c), {}, {
      tag: (n = g.tag) !== null && n !== undefined ? n : undefined,
      eurl: (r = g.eurl) !== null && r !== undefined ? r : undefined,
      previewEurl: (a = g.previewEurl) !== null && a !== undefined ? a : undefined,
      stale: g.stale,
      eurlStale: false,
      timestamp: (u = g.timestamp) !== null && u !== undefined ? u : Date.now()
    });
  })).apply(this, arguments);
}