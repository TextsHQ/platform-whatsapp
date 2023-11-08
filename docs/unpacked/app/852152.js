var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return c.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./791357.js");
var o = require("./754424.js");
var s = require("./263958.js");
var l = r(require("./949779.js"));
var u = require("./804074.js");
function c() {
  return (c = (0, i.default)(function* (e) {
    const {
      auth: t,
      encFilehash: n,
      hostname: r,
      signal: i,
      type: c,
      onProgress: d,
      mediaId: p,
      token: f
    } = e;
    const _ = (0, l.default)({
      auth: t,
      encFilehash: n,
      hostname: r,
      query: {
        resume: 1
      },
      type: c,
      mediaId: p,
      token: f
    });
    __LOG__(2)`mmsGetUploadProgress: start`;
    try {
      const e = yield (0, o.extendedFetch)(_, {
        method: "post",
        signal: i,
        onProgress: d
      });
      if (!e.ok) {
        switch (e.status) {
          case 401:
            throw new s.MMSUnauthorizedError("mmsGetUploadProgress", {
              url: _
            });
          case 404:
            throw new s.MediaNotFoundError("mmsGetUploadProgress", {
              url: _
            });
          default:
            throw new a.HttpStatusCodeError(e.status, "mmsGetUploadProgress", {
              url: _
            });
        }
      }
      const t = yield e.json();
      if (!t.resume) {
        throw new a.HttpInvalidResponseError("mmsGetUploadProgress: missing resume", {
          url: _
        });
      }
      __LOG__(2)`mmsGetUploadProgress: success`;
      return {
        directPath: t.direct_path,
        resume: t.resume,
        url: t.url,
        handle: t.handle
      };
    } catch (e) {
      (0, u.mmsLogError)("mmsUpload", e, {
        encFilehash: n,
        type: c,
        url: _
      });
      throw e;
    }
  })).apply(this, arguments);
}