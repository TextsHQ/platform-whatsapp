var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.consolidateMediaUpdate = function (e, t) {
  if (e.isUnsentPhoneMsg()) {
    if (e.mediaObject) {
      __LOG__(4, undefined, new Error(), true)`id: ${e.id.toString()} type: ${e.type}`;
      SEND_LOGS("media-fault: consolidateMediaUpdate unsent message");
    }
    const t = m(e);
    if (t.hasOwnProperty("preview")) {
      const n = t.preview;
      delete t.preview;
      if (n) {
        u.default.createFromBase64Jpeg(n).then(t => {
          if ((e == null ? undefined : e.mediaData) && e.isUnsentPhoneMsg()) {
            e.mediaData.preview = t;
          }
        });
      }
    }
    e.mediaData.set((0, i.default)((0, i.default)({}, t), {}, {
      mediaStage: d.MEDIA_DATA_STAGE.REMOTE_NEED_UPLOAD
    }));
  } else {
    h(e, e, t);
  }
};
exports.consolidateMediaUpdateWithValues = h;
var i = r(require("../vendor/81109.js"));
var a = require("./86595.js");
var o = r(require("./762467.js"));
var s = require("./102645.js");
var l = require("./189123.js");
var u = r(require("./756680.js"));
var c = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = g(t);
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
var d = require("./172259.js");
var p = require("./708761.js");
var f = require("./787742.js");
var _ = require("./373070.js");
function g(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (g = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function m(e) {
  const t = {};
  d.MAPPED_MSG_PROPS.forEach(n => {
    const r = e[n];
    const i = d.MSG_TO_MEDIA[n];
    t[i] = r;
  });
  if (t.type === _.MSG_TYPE.INTERACTIVE) {
    t.type = (0, l.getInteractiveMsgMediaType)(e);
  }
  return t;
}
function h(e, t, n, r) {
  const i = m(t);
  let u = e.mediaObject;
  const _ = t.filehash;
  const g = (0, a.isMediaCryptoExpectedForMsg)(e);
  if (u) {
    if (_ && _ !== u.filehash) {
      __LOG__(2)`media:msg ${e.id.toString()} ${u.filehash ? "changed" : "added"} filehash`;
      c.disassociateMediaFromMsg(u, e);
      u = c.getOrCreateMediaObject(_);
      e.mediaObject = u;
      c.associateMediaWithMsg(u, e);
    }
  } else {
    u = _ ? c.getOrCreateMediaObject(_) : new l.MediaObject();
    const t = e.mediaData;
    if (t.aspectRatio !== undefined) {
      i.aspectRatio = t.aspectRatio;
    }
    e.mediaObject = u;
    c.associateMediaWithMsg(u, e);
  }
  let h = false;
  const {
    deprecatedMms3Url: y,
    mediaKey: E,
    mediaKeyTimestamp: S,
    encFilehash: v,
    type: T,
    streamingSidecar: M,
    firstFrameSidecar: A,
    directPath: b,
    scansSidecar: C,
    scanLengths: P,
    staticUrl: O
  } = t;
  if (y || v || !g) {
    let e;
    let n;
    try {
      e = (0, p.msgToMediaType)({
        type: t.type,
        isGif: t.isGif,
        interactiveHeader: t.interactiveHeader,
        isNewsletter: (0, f.getIsNewsletterMsg)(t)
      });
    } catch (t) {
      e = ~p.MEDIA_TYPE_VALUES.indexOf(T) ? T : null;
    }
    h = g ? !u.entries.has({
      encFilehash: v,
      deprecatedMms3Url: y
    }) : !u.entries.hasUnencryptedEntry({
      filehash: _,
      directPath: b
    });
    if (h) {
      if (e == null || v == null && g) {
        h = false;
      } else if (g && E != null) {
        n = u.entries.addEntry({
          deprecatedMms3Url: y,
          mediaKey: E,
          mediaKeyTimestamp: S,
          encFilehash: v,
          type: e,
          sidecar: M,
          directPath: b,
          firstFrameSidecar: A,
          scansSidecar: C,
          scanLengths: P,
          debugHint: "consolidate",
          staticUrl: O
        });
      } else if (!(g || b == null || _ == null)) {
        n = u.entries.addUnencryptedEntry({
          debugHint: "consolidate",
          directPath: b,
          filehash: _,
          type: e
        });
      }
    } else if (g && E != null && E !== "") {
      n = u.entries.updateEntry({
        deprecatedMms3Url: y,
        mediaKey: E,
        mediaKeyTimestamp: S,
        encFilehash: v,
        type: e,
        sidecar: M,
        directPath: b,
        firstFrameSidecar: A,
        scansSidecar: C,
        scanLengths: P,
        staticUrl: O
      });
    } else if (!(g || _ == null)) {
      n = u.entries.updateUnencryptedEntry({
        filehash: _,
        directPath: b
      });
    }
    if (!n) {
      h = false;
    }
    if (h && u.downloadStage === d.DOWNLOAD_STAGE.ERROR_MISSING) {
      i.downloadStage = d.DOWNLOAD_STAGE.INIT;
    }
  }
  if (!u.consolidate(i)) {
    u.notifyMsgsAsync();
  }
  if (h && u.downloadStage === d.DOWNLOAD_STAGE.NEED_POKE) {
    let i;
    try {
      i = (0, p.getMsgMediaType)(e);
    } catch (n) {
      if (!t.type) {
        throw n;
      }
      i = (0, p.msgToMediaType)({
        type: t.type,
        isGif: e.isGif,
        isNewsletter: (0, f.getIsNewsletterMsg)(e)
      });
    }
    (0, s.downloadMedia)({
      mimetype: t.mimetype,
      mediaObject: u,
      downloadEvenIfExpensive: false,
      mediaType: i,
      rmrReason: n,
      downloadOrigin: (0, o.default)(e),
      chatWid: r
    });
  }
}