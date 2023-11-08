var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mmsUploadStream = function (e) {
  let {
    auth: t,
    encFilehash: n,
    type: r,
    hostname: i,
    byteStart: a,
    byteEnd: s,
    chunk: u,
    signal: d,
    onProgress: p,
    mediaId: f,
    token: _
  } = e;
  const g = (0, l.default)({
    auth: t,
    encFilehash: n,
    type: r,
    hostname: i,
    query: {
      stream: 1
    },
    byteRange: {
      start: a,
      end: s
    },
    mediaId: f,
    token: _
  });
  return (0, o.extendedFetch)(g, {
    method: "post",
    body: u,
    signal: d,
    onProgress: p
  }).then(e => {
    if (!e.ok) {
      c(e.status, "mmsUploadStream", g);
    }
  });
};
exports.mmsUploadStreamFinalize = function () {
  return d.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./791357.js");
var o = require("./754424.js");
var s = require("./263958.js");
var l = r(require("./949779.js"));
var u = require("./804074.js");
function c(e, t, n) {
  switch (e) {
    case 401:
      throw new s.MMSUnauthorizedError(t, {
        url: n
      });
    case 413:
      throw new s.MediaTooLargeError(t, {
        url: n
      });
    case 415:
      throw new s.MediaInvalidError(`${t}: hash mismatch`, {
        url: n
      });
    case 507:
      throw new s.MMSThrottleError("mmsUploadStreamFinalize", {
        url: n
      });
    default:
      throw new a.HttpStatusCodeError(e, t, {
        url: n
      });
  }
}
function d() {
  return (d = (0, i.default)(function* (e) {
    let {
      auth: t,
      encFilehash: n,
      type: r,
      hostname: i,
      finalHash: s,
      signal: d,
      mediaId: p
    } = e;
    const f = (0, l.default)({
      auth: t,
      encFilehash: n,
      type: r,
      hostname: i,
      query: {
        stream: 1,
        final_hash: s
      },
      mediaId: p,
      token: n
    });
    __LOG__(2)`mmsUploadStreamFinalize: start`;
    try {
      const e = yield (0, o.extendedFetch)(f, {
        method: "post",
        signal: d
      }).then(e => {
        if (!e.ok) {
          c(e.status, "mmsUploadStreamFinalize", f);
        }
        return e.json();
      }).then(e => {
        if (e.direct_path == null || e.direct_path === "") {
          throw new a.HttpInvalidResponseError("mmsUploadStreamFinalize: missing direct_path");
        }
        if (e.url == null || e.url === "") {
          throw new a.HttpInvalidResponseError("mmsUploadStreamFinalize: missing url");
        }
        return {
          directPath: e.direct_path,
          url: e.url,
          handle: e.handle
        };
      });
      __LOG__(2)`mmsUploadStreamFinalize: success`;
      return e;
    } catch (e) {
      (0, u.mmsLogError)("mmsUpload", e, {
        encFilehash: n,
        type: r,
        url: f
      }, false);
      throw e;
    }
  })).apply(this, arguments);
}