var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    directPath: t,
    encFilehash: n,
    hostname: r,
    type: c,
    mode: d,
    byteRange: p,
    downloadBucket: f
  } = e;
  if (t) {
    return function (e) {
      let {
        directPath: t,
        encFilehash: n,
        hostname: r,
        query: o,
        downloadBucket: l,
        type: c
      } = e;
      const d = new URL(t, `https://${r}`);
      if (d.hostname !== r) {
        __LOG__(4, undefined, new Error(), true)`url.hostname: ${d.hostname}, hostname: ${r}, directPath: ${t}`;
        SEND_LOGS("malicious directPath");
        throw (0, u.default)("malicious directPath");
      }
      const p = d.searchParams || new s.default(d.search);
      p.set("hash", (0, i.default)(n));
      if (l != null) {
        p.set("_nc_cat", l.toString());
      }
      const f = (0, a.getABPropConfigValue)("low_cache_hit_rate_media_types");
      if (f != null) {
        if (f.split(",").includes(c)) {
          p.set("_nc_map", "whatsapp-nofna");
        }
      }
      Object.keys(o).forEach(e => {
        const t = o[e];
        if (t != null) {
          p.set(e, t);
        }
      });
      return `https://${d.host}${d.pathname}?${p.toString()}`;
    }({
      encFilehash: n,
      hostname: r,
      directPath: t,
      query: {
        mode: d,
        bytestart: p == null ? undefined : p.start.toString(),
        byteend: p == null ? undefined : p.end.toString(),
        [l.MMS_URL_MEDIA_TYPE_SEARCH_PARAM]: c,
        [l.IS_MMS_URL_SEARCH_PARAM]: ""
      },
      downloadBucket: f,
      type: c
    });
  }
  if ((0, a.getABPropConfigValue)("web_deprecate_mms4_hash_based_download")) {
    __LOG__(4, undefined, new Error(), true, ["media"])`[WAWebMmsClientFormatDownloadUrl] failed: No direct path is found, hash based url is not allowed`;
    SEND_LOGS("no-direct-path-found", 1, "media");
    throw (0, u.default)("No direct path is available for download, abort");
  }
  return (0, o.default)({
    hostname: r,
    type: c,
    encFilehash: n,
    query: {
      mode: d,
      [l.IS_MMS_URL_SEARCH_PARAM]: ""
    }
  });
};
var i = r(require("./861309.js"));
var a = require("./287461.js");
var o = r(require("./955233.js"));
var s = r(require("./665810.js"));
var l = require("./746410.js");
var u = r(require("./556869.js"));