var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.processRawMedia = function (e, t) {
  const n = Promise.resolve().then(() => {
    var n;
    var r;
    const p = e.size();
    let f;
    f = t.asDocument === true ? a.FILETYPE.DOCUMENT : t.asSticker === true ? a.FILETYPE.STICKER : (0, a.typeFromMimetype)(e.type());
    const _ = (n = t.isVcardOverMmsDocument) !== null && n !== undefined && n;
    const g = (0, l.getUploadLimit)(f, _);
    if (f === "document") {
      (0, c.logSendDocumentEvent)(t.filename, p);
    }
    if (p > g) {
      throw new s.default(e);
    }
    if (p <= 0) {
      throw new u.MediaFileEmpty();
    }
    let m;
    if (t.gifAttribution != null) {
      m = t.gifAttribution;
    } else if (t.asGif === true) {
      m = 0;
    }
    switch (f) {
      case "image":
        return o.processRawImage(e, {
          maxDimension: (r = t.maxDimension) !== null && r !== undefined ? r : (0, i.getABPropConfigValue)("web_image_max_edge"),
          minDimension: t.minDimension,
          transparency: t.transparency
        });
      case "sticker":
        return o.processRawSticker(e);
      case "video":
      case "audio":
        return o.processRawAudioVideo(e, !!t.isPtt, t.precomputedFields, t.asGif, m, e.type());
      case "document":
        return o.processRawDocument(e, t.filename, _, t.documentPageCount);
      default:
        throw (0, d.default)("Received unsupported mediaType: " + f);
    }
  });
  e.retain();
  e.autoreleaseWhenPromiseCompletes(n);
  return n;
};
var i = require("./287461.js");
var a = require("./698210.js");
var o = f(require("./232294.js"));
var s = r(require("./409701.js"));
var l = require("./75421.js");
var u = f(require("./288057.js"));
var c = require("./468819.js");
var d = r(require("./556869.js"));
function p(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (p = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function f(e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = p(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var r = {};
  var i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e) {
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
      if (o && (o.get || o.set)) {
        Object.defineProperty(r, a, o);
      } else {
        r[a] = e[a];
      }
    }
  }
  r.default = e;
  if (n) {
    n.set(e, r);
  }
  return r;
}