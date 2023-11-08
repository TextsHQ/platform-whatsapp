var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return _.apply(this, arguments);
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./898817.js");
var s = require("./477689.js");
var l = r(require("./229922.js"));
var u = require("./434517.js");
var c = require("./677332.js");
var d = require("./86595.js");
var p = require("./709089.js");
var f = require("./189123.js");
function _() {
  return (_ = (0, a.default)(function* (e) {
    const {
      thumbnail: t,
      mediaType: n,
      mediaKeyInfo: r,
      uploadOrigin: _,
      forwardedFromWeb: g,
      timeout: m,
      signal: h,
      isViewOnce: y
    } = e;
    const E = new f.MediaObject();
    try {
      if (m == null) {
        return yield S();
      } else {
        return yield (0, u.promiseTimeout)(S(), m);
      }
    } catch (e) {
      const t = e;
      if (t instanceof s.TimeoutError) {
        (0, p.cancelUploadMedia)(E);
        return {
          kind: p.UploadMediaResultKind.TIMEOUT
        };
      }
      throw t;
    }
    function S() {
      return v.apply(this, arguments);
    }
    function v() {
      return (v = (0, a.default)(function* () {
        try {
          const e = yield (0, l.default)((0, c.calculateFilehashFromBlob)(t), h);
          E.filehash = e;
          E.mediaBlob = t;
          const a = (0, d.isMediaCryptoExpectedForMediaType)(n) ? p.uploadMedia : p.uploadUnencryptedMedia;
          const o = yield (0, l.default)(a({
            mimetype: "image/jpeg",
            mediaObject: E,
            mediaType: n,
            forwardedFromWeb: g,
            uploadOrigin: _,
            mediaKeyInfo: r,
            isViewOnce: y
          }), h);
          if (o.kind === p.UploadMediaResultKind.SUCCESS) {
            return (0, i.default)((0, i.default)({}, o), {}, {
              filehash: e
            });
          } else {
            return {
              kind: o.kind
            };
          }
        } catch (e) {
          if (typeof e == "object" && (e == null ? undefined : e.name) === o.ABORT_ERROR) {
            (0, p.cancelUploadMedia)(E);
            return {
              kind: p.UploadMediaResultKind.CANCELLATION
            };
          }
        }
      })).apply(this, arguments);
    }
  })).apply(this, arguments);
}