Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mediaConnParser = undefined;
var r = require("./760518.js");
const i = new (require("./347387.js").WapParser)("mediaConnParser", e => {
  var t;
  var n;
  const r = e.child("media_conn");
  return {
    hosts: r.mapChildrenWithTag("host", o),
    authToken: r.attrString("auth"),
    authTokenExpiryTs: r.attrFutureTime("auth_ttl"),
    routesExpiryTs: r.attrFutureTime("ttl"),
    maxBuckets: r.attrInt("max_buckets"),
    maxManualRetry: (t = r.maybeAttrInt("max_manual_retry", 0, 4)) !== null && t !== undefined ? t : 3,
    maxAutoDownloadRetry: (n = r.maybeAttrInt("max_auto_download_retry", 0, 4)) !== null && n !== undefined ? n : 3
  };
});
function a(e) {
  var t;
  var n;
  if (e.hasAttr("fallback_hostname")) {
    return {
      domain: e.attrString("fallback_hostname"),
      class: e.maybeAttrString("fallback_class"),
      ip4: (t = e.maybeAttrString("fallback_ip4")) !== null && t !== undefined ? t : undefined,
      ip6: (n = e.maybeAttrString("fallback_ip6")) !== null && n !== undefined ? n : undefined
    };
  }
}
function o(e) {
  var t;
  var n;
  var r;
  var i;
  return {
    domain: e.attrString("hostname"),
    fallback: a(e),
    uploadable: s(e, "upload"),
    downloadable: s(e, "download"),
    isFallback: e.maybeAttrString("type") === "fallback",
    downloadBuckets: (t = (n = e.maybeChild("download_buckets")) === null || n === undefined ? undefined : n.mapChildren(e => parseInt(e.tag(), 10))) !== null && t !== undefined ? t : [],
    class: e.maybeAttrString("class"),
    ip4: (r = e.maybeAttrString("ip4")) !== null && r !== undefined ? r : undefined,
    ip6: (i = e.maybeAttrString("ip6")) !== null && i !== undefined ? i : undefined
  };
}
function s(e, t) {
  if (e.hasChild(t)) {
    return e.child(t).mapChildren(e => {
      const t = e.tag();
      return (0, r.castToServerMediaType)(t);
    }).filter(Boolean);
  } else {
    return r.SERVER_MEDIA;
  }
}
exports.mediaConnParser = i;