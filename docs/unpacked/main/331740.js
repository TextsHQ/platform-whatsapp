var a = require("../app/530066.js").default;
var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLinkPreview = function () {
  return D.apply(this, arguments);
};
var o = r(require("../vendor/348926.js"));
var l = require("../app/417405.js");
var i = require("../app/477689.js");
var u = require("../app/229079.js");
var s = require("../app/434517.js");
var c = require("../app/287461.js");
var d = require("../app/251780.js");
var f = require("../app/127714.js");
var p = require("./639151.js");
var m = require("../app/941555.js");
var h = require("./56212.js");
var g = require("./468105.js");
var E = require("./732741.js");
var v = require("./404838.js");
var _ = require("../app/708761.js");
var y = r(require("../app/565754.js"));
var C = require("./58508.js");
var b = require("../app/73225.js");
var M = require("./495751.js");
var S = require("../app/805617.js");
var T = require("../app/533494.js");
var w = require("../app/229479.js");
var A = require("../app/437911.js");
var P = require("../app/163139.js");
var O = require("./420142.js");
var k = require("./256677.js");
function D() {
  return (D = (0, o.default)(function* (e, t) {
    var n;
    const r = t != null && (0, P.unproxy)(t).isNewsletter;
    if (r && (0, b.isNewsletterLinkPreviewEnabled)()) {
      return (0, C.fetchPlaintextLinkPreviewAction)(e, t);
    }
    if (!(yield (0, v.checkIfDomainIsPreviewable)(e.domain, t))) {
      return null;
    }
    __LOG__(2)`link preview: start flow`;
    const o = r ? (0, g.getNewsletterPreviewCache)() : (0, g.getPreviewCache)();
    if (o.has(e.url)) {
      __LOG__(2)`link preview: in cache`;
      return o.get(e.url);
    }
    let k;
    const D = (0, f.parseAPICmd)(e.url);
    if (D.resultType === d.APICmd.CATALOG) {
      k = yield (0, p.getProductOrCatalogLinkPreview)(e.url, D.data.catalogOwnerJid);
    } else if (D.resultType === d.APICmd.PRODUCT) {
      k = yield (0, p.getProductOrCatalogLinkPreview)(e.url, D.data.businessOwnerJid, D.data.productId);
    } else if (D.resultType === d.APICmd.GROUP_INVITE) {
      const t = yield (0, E.getGroupInviteLinkPreview)(e.url, D.data.code);
      if (t) {
        k = t;
      }
    } else {
      D.resultType;
    }
    if (k) {
      o.set(e.url, k);
      return k;
    }
    if ((n = e.suspiciousCharacters) === null || n === undefined ? undefined : n.size) {
      return null;
    }
    if (!(0, c.getABPropConfigValue)("web_link_preview_sync_enabled") || !S.PrimaryFeatures.linkPreview) {
      __LOG__(2)`link preview: opted out of primary preview. primary flag: ${S.PrimaryFeatures.linkPreview}. abprop: ${(0, c.getABPropConfigValue)("web_link_preview_sync_enabled")}`;
      return (0, h.genMinimalLinkPreview)(e);
    }
    const N = yield y.default.newId();
    const x = (0, M.registerLinkPreviewHandlerHook)(N);
    __LOG__(2)`link preview: request from primary`;
    const L = !r && (0, c.getABPropConfigValue)("high_quality_link_preview_enabled") && S.PrimaryFeatures.hqLinkPreview;
    yield (0, A.sendPeerDataOperationRequest)(T.Message$PeerDataOperationRequestType.GENERATE_LINK_PREVIEW, {
      urls: [e.url],
      includeHqThumbnail: L
    }, N);
    try {
      var j;
      var B;
      var F;
      var G;
      __LOG__(2)`link preview: wait for primary`;
      const n = yield (0, s.promiseTimeout)(x.promise, (0, c.getABPropConfigValue)("link_preview_wait_time") * 1000);
      __LOG__(2)`link preview: got primary response or timeout`;
      if ((n == null || (j = n.linkPreviewResponse) === null || j === undefined ? undefined : j.url) != null && (n == null || (B = n.linkPreviewResponse) === null || B === undefined ? undefined : B.url) !== e.url) {
        __LOG__(4, undefined, new Error())`link preview: response url is different than expected url`;
      }
      const r = n == null ? undefined : n.linkPreviewResponse;
      if (!r) {
        R(O.WEBC_DISPLAY_STATUS_TYPE.PREVIEW_MALFORMED, L);
        const t = yield (0, h.genMinimalLinkPreview)(e);
        if ((n == null ? undefined : n.mediaUploadResult) === w.MediaRetryNotification$ResultType.NOT_FOUND && t != null) {
          o.set(e.url, t);
        }
        return t;
      }
      if ((n == null ? undefined : n.mediaUploadResult) != null && (n == null ? undefined : n.mediaUploadResult) !== w.MediaRetryNotification$ResultType.SUCCESS) {
        I(n == null ? undefined : n.mediaUploadResult, L);
        return (0, h.genMinimalLinkPreview)(e);
      }
      const i = D.resultType === d.APICmd.GROUP_INVITE ? E.GROUP_INVITE_DEFAULT_DESCRIPTION : r.description;
      let f;
      const p = r.hqThumbnail;
      let g;
      let v;
      let y = !p && undefined;
      if (L && p != null) {
        try {
          const {
            directPath: e,
            encThumbHash: n,
            thumbHash: r,
            mediaKey: o,
            mediaKeyTimestampMs: i
          } = p;
          if (e != null && n != null && r != null && o != null && i != null) {
            __LOG__(2)`link preview: found HQ preview`;
            g = (0, u.numberOrThrowIfTooLarge)(i);
            v = (0, l.encodeB64)(o);
            f = yield m.downloadManager.downloadAndMaybeDecrypt({
              directPath: e,
              encFilehash: n,
              filehash: r,
              mediaKey: v,
              mediaKeyTimestamp: g,
              type: _.MEDIA_TYPES.THUMBNAIL_LINK,
              signal: new a().signal,
              userDownloadAttemptCount: 0,
              chatWid: t == null ? undefined : t.id
            });
          } else {
            __LOG__(2)`link preview: malformed HQ preview`;
            y = true;
          }
        } catch (e) {
          __LOG__(4, undefined, new Error())`link preview: could not download HQ preview. details: ${e}`;
          y = true;
        }
      } else {
        __LOG__(2)`link preview: did not find HQ preview`;
      }
      R(O.WEBC_DISPLAY_STATUS_TYPE.SHOWED_PREVIEW_TO_USER, L, p != null, y);
      const C = f ? (0, l.encodeB64)(f) : undefined;
      const b = C !== undefined ? (F = r.hqThumbnail) === null || F === undefined ? undefined : F.thumbHeight : undefined;
      const M = C !== undefined ? (G = r.hqThumbnail) === null || G === undefined ? undefined : G.thumbWidth : undefined;
      k = {
        url: e.url,
        data: {
          title: r.title,
          description: i,
          canonicalUrl: r.url,
          matchedText: e.url,
          richPreviewType: r.previewType === "video" ? T.Message$ExtendedTextMessage$PreviewType.VIDEO : T.Message$ExtendedTextMessage$PreviewType.NONE,
          thumbnail: r.thumbData ? (0, l.encodeB64)(r.thumbData) : "",
          thumbnailHQ: C,
          thumbnailHeight: b,
          thumbnailWidth: M,
          thumbnailDirectPath: p == null ? undefined : p.directPath,
          thumbnailEncSha256: p == null ? undefined : p.encThumbHash,
          thumbnailSha256: p == null ? undefined : p.thumbHash,
          mediaKeyTimestamp: g,
          mediaKey: v,
          doNotPlayInline: false,
          isLoading: false
        }
      };
      o.set(e.url, k);
      return k;
    } catch (t) {
      if (t instanceof i.TimeoutError) {
        __LOG__(2)`link preview: timeout during link generation`;
        R(O.WEBC_DISPLAY_STATUS_TYPE.PREVIEW_TIMEOUT, L);
        return (0, h.genMinimalLinkPreview)(e);
      }
    }
  })).apply(this, arguments);
}
function I(e, t) {
  switch (e) {
    case w.MediaRetryNotification$ResultType.DECRYPTION_ERROR:
      R(O.WEBC_DISPLAY_STATUS_TYPE.PREVIEW_DECRYPTION_ERROR, t);
      break;
    case w.MediaRetryNotification$ResultType.NOT_FOUND:
      R(O.WEBC_DISPLAY_STATUS_TYPE.PREVIEW_NOT_FOUND, t);
      break;
    case w.MediaRetryNotification$ResultType.GENERAL_ERROR:
      R(O.WEBC_DISPLAY_STATUS_TYPE.PREVIEW_GENERAL_ERROR, t);
  }
}
function R(e, t, n, a) {
  __LOG__(2)`link preview: status ${e}`;
  new k.WebcLinkPreviewDisplayWamEvent({
    webcDisplayStatus: e,
    didRequestHq: t,
    didRespondHqPreview: !!n,
    didFallbackNonHq: !!a
  }).commit();
}