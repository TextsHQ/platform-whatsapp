var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return f.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./791357.js");
var o = require("./754424.js");
var s = require("./263958.js");
var l = r(require("./949779.js"));
var u = require("./804074.js");
var c = require("./708761.js");
function d(e) {
  if (e.direct_path == null || e.direct_path === "") {
    throw new a.HttpInvalidResponseError("mmsUpload: missing direct_path");
  }
  if (e.url == null || e.url === "") {
    throw new a.HttpInvalidResponseError("mmsUpload: missing url");
  }
  return {
    directPath: e.direct_path,
    url: e.url,
    handle: e.handle
  };
}
function p(e) {
  if (e.ts == null) {
    throw new a.HttpInvalidResponseError("mmsUpload: missing ts (timestamp)");
  }
  if (e.meta_hmac == null) {
    throw new a.HttpInvalidResponseError("mmsUpload: missing meta_hmac");
  }
  if (e.fbid == null) {
    throw new a.HttpInvalidResponseError("mmsUpload: missing fbid");
  }
  return {
    directPath: "",
    url: "",
    ts: e.ts,
    metaHmac: e.meta_hmac,
    fbid: e.fbid
  };
}
function f() {
  return (f = (0, i.default)(function* (e) {
    const {
      auth: t,
      ciphertextHmac: n,
      encFilehash: r,
      hostname: i,
      type: f,
      signal: _,
      onProgress: g,
      byteRange: m,
      mediaId: h
    } = e;
    const y = (0, l.default)({
      auth: t,
      encFilehash: r,
      hostname: i,
      type: f,
      byteRange: m,
      mediaId: h,
      token: e.token
    });
    __LOG__(2)`mmsUpload: start`;
    try {
      const e = f === c.MEDIA_TYPES.BIZ_COVER_PHOTO ? p : d;
      const t = yield (0, o.extendedFetch)(y, {
        method: "post",
        body: n,
        signal: _,
        onProgress: g
      }).then(e => {
        if (!e.ok) {
          switch (e.status) {
            case 401:
              throw new s.MMSUnauthorizedError("mmsUpload", {
                url: y
              });
            case 413:
              throw new s.MediaTooLargeError("mmsUpload", {
                url: y
              });
            case 415:
              throw new s.MediaInvalidError("mmsUpload: hash mismatch", {
                url: y
              });
            case 507:
              throw new s.MMSThrottleError("mmsUpload", {
                url: y
              });
            default:
              throw new a.HttpStatusCodeError(e.status, "mmsUpload", {
                url: y
              });
          }
        }
        return e.json();
      }).then(e);
      __LOG__(2)`mmsUpload: success`;
      return t;
    } catch (e) {
      (0, u.mmsLogError)("mmsUpload", e, {
        encFilehash: r,
        type: f,
        url: y
      }, false);
      throw e;
    }
  })).apply(this, arguments);
}