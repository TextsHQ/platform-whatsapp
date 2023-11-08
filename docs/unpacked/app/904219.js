var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return d.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./417405.js");
var o = require("./562075.js");
var s = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = c(t);
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
}(require("./288057.js"));
var l = require("./708761.js");
var u = r(require("./556869.js"));
function c(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (c = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function d() {
  return (d = (0, i.default)(function* (e, t) {
    const n = p(e);
    let r;
    try {
      r = (0, a.decodeB64)(t);
    } catch (e) {}
    if (!t || !n || !r) {
      throw new s.MediaEncryptionError(`createKeys fail: !!mediakey: ${!!t} info: ${n} type: ${e}`);
    }
    const i = yield (0, o.extractAndExpand)(r, n, 112);
    if (!i || i.byteLength < 112) {
      throw new s.MediaEncryptionError("computeMediaKeys: hkdf error");
    }
    return {
      iv: i.slice(0, 16),
      encKey: i.slice(16, 48),
      macKey: i.slice(48, 80),
      refKey: i.slice(80, 112)
    };
  })).apply(this, arguments);
}
function p(e) {
  switch (e) {
    case l.MEDIA_TYPES.AUDIO:
      return "WhatsApp Audio Keys";
    case l.MEDIA_TYPES.DOCUMENT:
      return "WhatsApp Document Keys";
    case l.MEDIA_TYPES.GIF:
      return "WhatsApp Video Keys";
    case l.MEDIA_TYPES.IMAGE:
      return "WhatsApp Image Keys";
    case l.MEDIA_TYPES.PPIC:
      throw (0, u.default)("Cannot create media keys for profile pics");
    case l.MEDIA_TYPES.PRODUCT:
      return "WhatsApp Image Keys";
    case l.MEDIA_TYPES.PTT:
      return "WhatsApp Audio Keys";
    case l.MEDIA_TYPES.STICKER:
      return "WhatsApp Image Keys";
    case l.MEDIA_TYPES.VIDEO:
    case l.MEDIA_TYPES.PTV:
      return "WhatsApp Video Keys";
    case l.MEDIA_TYPES.THUMBNAIL_DOCUMENT:
      return "WhatsApp Document Thumbnail Keys";
    case l.MEDIA_TYPES.THUMBNAIL_IMAGE:
      return "WhatsApp Image Thumbnail Keys";
    case l.MEDIA_TYPES.THUMBNAIL_VIDEO:
      return "WhatsApp Video Thumbnail Keys";
    case l.MEDIA_TYPES.THUMBNAIL_LINK:
      return "WhatsApp Link Thumbnail Keys";
    case l.MEDIA_TYPES.TEMPLATE:
      throw (0, u.default)("Cannot create media keys for template");
    case l.MEDIA_TYPES.HISTORY_SYNC:
      return "WhatsApp History Keys";
    case l.MEDIA_TYPES.MD_APP_STATE:
      return "WhatsApp App State Keys";
    case l.MEDIA_TYPES.PRODUCT_CATALOG_IMAGE:
      throw (0, u.default)("Cannot create media keys for product catalog image");
    case l.MEDIA_TYPES.PAYMENT_BG_IMAGE:
      return "WhatsApp Payment Background Keys";
  }
}