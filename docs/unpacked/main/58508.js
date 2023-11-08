var a = require("../app/530066.js").default;
var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchPlaintextLinkPreviewAction = function () {
  return m.apply(this, arguments);
};
var o = r(require("../vendor/348926.js"));
var l = require("../app/417405.js");
var i = require("../app/941555.js");
var u = require("./56212.js");
var s = require("./468105.js");
var c = require("./404838.js");
var d = require("./492394.js");
var f = require("../app/708761.js");
var p = require("../app/533494.js");
function m() {
  return (m = (0, o.default)(function* (e, t) {
    try {
      var n;
      var a;
      if (!(yield (0, c.checkIfDomainIsPreviewable)(e.domain, t))) {
        return null;
      }
      const r = (0, s.getNewsletterPreviewCache)();
      if (r.has(e.url)) {
        return r.get(e.url);
      }
      const o = yield (0, d.mexFetchPlaintextLinkPreview)(e.url);
      if (o == null) {
        return (0, u.genMinimalLinkPreview)(e);
      }
      const {
        hqThumbnail: l
      } = o;
      const {
        directPath: i,
        thumbHash: f
      } = l != null ? l : {};
      const m = yield h(i, f, t == null ? undefined : t.id);
      const g = {
        url: e.url,
        data: {
          title: o == null ? undefined : o.title,
          canonicalUrl: o == null ? undefined : o.canonicalUrl,
          description: o == null ? undefined : o.description,
          matchedText: e.url,
          richPreviewType: p.Message$ExtendedTextMessage$PreviewType.NONE,
          doNotPlayInline: true,
          isLoading: false,
          thumbnail: o == null ? undefined : o.thumbData,
          thumbnailDirectPath: i,
          thumbnailSha256: f,
          thumbnailHQ: m,
          thumbnailHeight: m != null ? o == null || (n = o.hqThumbnail) === null || n === undefined ? undefined : n.thumbHeight : undefined,
          thumbnailWidth: m != null ? o == null || (a = o.hqThumbnail) === null || a === undefined ? undefined : a.thumbWidth : undefined
        }
      };
      if (m != null) {
        r.set(e.url, g);
      }
      return g;
    } catch (e) {
      __LOG__(4, undefined, new Error())`[newsletter] while trying to fetch newsletter link preview ${e}`;
    }
  })).apply(this, arguments);
}
function h() {
  return g.apply(this, arguments);
}
function g() {
  return (g = (0, o.default)(function* (e, t, n) {
    if (t == null || e == null || e === "") {
      return null;
    }
    try {
      const r = yield i.downloadManager.downloadAndMaybeDecrypt({
        directPath: e,
        encFilehash: null,
        filehash: t,
        type: f.MEDIA_TYPES.NEWSLETTER_THUMBNAIL_LINK,
        signal: new a().signal,
        userDownloadAttemptCount: 0,
        chatWid: n
      });
      return (0, l.encodeB64)(r);
    } catch (e) {
      __LOG__(4, undefined, new Error())` Failed to download HQ link preview ${e}`;
      return null;
    }
  })).apply(this, arguments);
}