var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return c.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./791357.js");
var o = require("./263958.js");
var s = r(require("./852152.js"));
var l = require("./804074.js");
const u = "complete";
function c() {
  return (c = (0, i.default)(function* (e) {
    const t = {
      encFilehash: e.encFilehash,
      type: e.type
    };
    __LOG__(2)`mmsCheckIfUploadExists: start`;
    try {
      const t = yield (0, s.default)(e);
      const {
        directPath: n,
        url: r,
        handle: i,
        resume: l
      } = t;
      if (l === u) {
        if (n == null || n === "") {
          throw new a.HttpInvalidResponseError("mmsCheckIfUploadExists: missing directPath");
        }
        if (r == null || r === "") {
          throw new a.HttpInvalidResponseError("mmsCheckIfUploadExists: missing url");
        }
        __LOG__(2)`mmsCheckIfUploadExists: success`;
        return {
          directPath: n,
          url: r,
          handle: i,
          complete: true
        };
      }
      const c = parseInt(l, 10);
      if (c === 0) {
        throw new o.MediaNotFoundError("mmsCheckIfUploadExists");
      }
      if (Number.isNaN(c)) {
        __LOG__(4, undefined, new Error(), true)`mmsCheckIfUploadExists: resume is NaN, resume=${c}`;
        SEND_LOGS("upload-offset-is-NaN");
        throw new a.HttpInvalidResponseError("mmsCheckIfUploadExists: invalid resume");
      }
      return {
        complete: false,
        resume: c
      };
    } catch (e) {
      (0, l.mmsLogError)("mmsCheckIfUploadExists", e, t);
      throw e;
    }
  })).apply(this, arguments);
}