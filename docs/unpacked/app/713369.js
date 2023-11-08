var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deregisterMsg = function (e) {
  e.off(null, p);
  const t = e.mediaObject;
  if (t) {
    s.disassociateMediaFromMsg(t, e);
  }
};
exports.prepareMsg = function (e) {
  const t = e.mediaObject;
  if (t) {
    return t.resolveWhenConsolidated();
  }
  const n = e.mediaData;
  const r = n.preview;
  if (r instanceof o.default && n.aspectRatio === undefined && (n.fullWidth === undefined || n.fullHeight === undefined)) {
    return (0, a.getImageWidthHeight)(r).then(t => {
      let {
        width: n,
        height: r
      } = t;
      if (!e.mediaObject) {
        e.mediaData.set({
          aspectRatio: n / r
        });
      }
    });
  }
  return Promise.resolve();
};
exports.registerMsg = function (e) {
  if (!(e.mimetype || e.type !== l.OUTWARD_TYPES.IMAGE)) {
    e.mimetype = "image/jpeg";
  }
  if (!(e.mimetype || e.type !== l.OUTWARD_TYPES.STICKER)) {
    e.mimetype = "image/webp";
  }
  e.on(d, p);
  (0, i.consolidateMediaUpdate)(e, u.WEBC_RMR_REASON_CODE.MSG_INIT);
};
exports.registerMsgEarly = function (e, t) {
  if (e.isUnsentPhoneMsg()) {
    __LOG__(4, undefined, new Error(), true)`id: ${e.id.toString()} type: ${e.type}`;
    SEND_LOGS("media-fault: registerMsgEarly msg without mediaObject");
  }
  const n = {};
  for (let r = 0; r < l.MEDIA_MSG_PROPS.length; r++) {
    const i = l.MEDIA_MSG_PROPS[r];
    const a = t[i];
    n[i] = a !== undefined ? a : e[i];
  }
  if (!(n.mimetype || n.type !== l.OUTWARD_TYPES.IMAGE)) {
    t.mimetype = n.mimetype = "image/jpeg";
  }
  e.on(d, p);
  (0, i.consolidateMediaUpdateWithValues)(e, n, u.WEBC_RMR_REASON_CODE.MSG_UPDATE);
  const r = {};
  for (let e = 0; e < l.MSG_SPECIFIC_FIELDS.length; e++) {
    const t = l.MSG_SPECIFIC_FIELDS[e];
    r[t] = n[l.MEDIA_TO_MSG[t]];
  }
  e.mediaData.set(r);
};
var i = require("./261361.js");
var a = require("./232294.js");
var o = r(require("./756680.js"));
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
}(require("./231385.js"));
var l = require("./172259.js");
var u = require("./885313.js");
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
const d = `change:ack ${l.MEDIA_MSG_PROPS.map(e => `change:${e}`).join(" ")}`;
function p(e) {
  (0, i.consolidateMediaUpdate)(e, u.WEBC_RMR_REASON_CODE.MSG_UPDATE);
}