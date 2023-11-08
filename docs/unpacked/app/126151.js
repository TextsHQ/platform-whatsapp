Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.estimateSize = function (e, t) {
  if (t === "lru-media-meta-info") {
    let t = 0;
    if (e.size && typeof e.size == "number") {
      t += e.size;
    }
    t += a(e);
    return t;
  }
  return a(e);
};
exports.getSampleRateOverride = function (e, t, n) {
  if (t === "lru-media-meta-info" && n === "lru-media-storage-idb") {
    return 1;
  }
  return e;
};
exports.skipRow = function (e, t) {
  if (t === "message" && !i.has(e.type)) {
    return true;
  }
  return false;
};
var r = require("./373070.js");
const i = new Set([r.MSG_TYPE.AUDIO, r.MSG_TYPE.CHAT, r.MSG_TYPE.DOCUMENT, r.MSG_TYPE.GROUPS_V4_INVITE, r.MSG_TYPE.HSM, r.MSG_TYPE.IMAGE, r.MSG_TYPE.INTERACTIVE, r.MSG_TYPE.LIST, r.MSG_TYPE.LOCATION, r.MSG_TYPE.MULTI_VCARD, r.MSG_TYPE.ORDER, r.MSG_TYPE.PAYMENT, r.MSG_TYPE.PRODUCT, r.MSG_TYPE.PTT, r.MSG_TYPE.STICKER, r.MSG_TYPE.TEMPLATE_BUTTON_REPLY, r.MSG_TYPE.VCARD, r.MSG_TYPE.VIDEO]);
function a(e) {
  let t = 0;
  JSON.stringify(e, (e, n) => {
    if (typeof e == "string") {
      t += e.length * 2;
    }
    if (n instanceof ArrayBuffer) {
      t += n.byteLength;
    } else if (n instanceof Blob) {
      t += n.size;
    } else if (typeof n == "number") {
      t += 8;
    } else if (typeof n == "boolean") {
      t += 1;
    } else {
      if (typeof n != "string") {
        return n;
      }
      t += n.length * 2;
    }
  });
  return t;
}