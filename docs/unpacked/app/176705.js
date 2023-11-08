var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asComposeContentsType = function (e) {
  if (e == null) {
    return e;
  }
  const {
    ctwaContext: t
  } = e;
  const n = (0, i.default)(e, u);
  if (t != null) {
    const {
      conversionData: e,
      mediaType: r
    } = t;
    const s = (0, i.default)(t, c);
    if (e != null) {
      s.conversionData = (0, a.stringToArrayBuffer)(e);
    }
    if (r != null) {
      s.mediaType = o.ContextInfo$ExternalAdReplyInfo$MediaType.cast(r);
    }
    n.ctwaContext = s;
  }
  return n;
};
exports.asSerialisableComposeContentsType = function (e) {
  const {
    ctwaContext: t
  } = e;
  const n = (0, i.default)(e, s);
  if (t != null) {
    const {
      conversionData: e,
      mediaType: r
    } = t;
    const o = (0, i.default)(t, l);
    if (e != null) {
      o.conversionData = (0, a.arrayBufferToString)(e);
    }
    if (r != null) {
      o.mediaType = r;
    }
    n.ctwaContext = o;
  }
  return n;
};
var i = r(require("../vendor/506479.js"));
var a = require("./459617.js");
var o = require("./533494.js");
const s = ["ctwaContext"];
const l = ["conversionData", "mediaType"];
const u = ["ctwaContext"];
const c = ["conversionData", "mediaType"];