var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MediaPrep = undefined;
exports.sendMediaMsgToChat = ne;
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./815612.js");
var s = require("./71230.js");
var l = require("./632157.js");
var u = require("./402994.js");
var c = require("./763614.js");
var d = require("./588750.js");
var p = require("./738501.js");
var f = require("./677332.js");
var _ = r(require("./507511.js"));
var g = r(require("./97359.js"));
var m = require("./862159.js");
var h = Q(require("./428363.js"));
var y = require("./86595.js");
var E = r(require("./116253.js"));
var S = require("./232294.js");
var v = require("./509998.js");
var T = r(require("./245655.js"));
var M = r(require("./104120.js"));
var A = r(require("./842156.js"));
var b = require("./196127.js");
var C = require("./901959.js");
var P = require("./102645.js");
var O = require("./709089.js");
var I = r(require("./756680.js"));
var R = Q(require("./231385.js"));
var N = require("./172259.js");
var D = r(require("./855118.js"));
var w = r(require("./820275.js"));
var L = require("./97858.js");
var k = require("./708761.js");
var G = r(require("./565754.js"));
var U = require("./373070.js");
var x = require("./73225.js");
var B = require("./918602.js");
var F = require("./693741.js");
var j = require("./115927.js");
var Y = require("./163139.js");
var K = r(require("./79291.js"));
var W = require("./459857.js");
var V = require("./59095.js");
var H = require("./804974.js");
var $ = require("./885313.js");
var z = r(require("./556869.js"));
var q = r(require("../vendor/441143.js"));
function J(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (J = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function Q(e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = J(t);
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
function X(e, t) {
  if (t.type === "product") {
    return V.DOWNLOAD_ORIGIN_TYPE.PRODUCT_CATALOG;
  }
  const n = (0, Y.unproxy)(e);
  if (n.isGroup) {
    return V.DOWNLOAD_ORIGIN_TYPE.CHAT_GROUP;
  } else if (n.isNewsletter) {
    return V.DOWNLOAD_ORIGIN_TYPE.CHANNEL;
  } else {
    return V.DOWNLOAD_ORIGIN_TYPE.CHAT_PERSONAL;
  }
}
function Z(e) {
  return e === k.MEDIA_TYPES.DOCUMENT;
}
function ee(e) {
  var t;
  if (!((t = e.wamMessageSendReporter) === null || t === undefined)) {
    t.postFailure({
      result: H.MESSAGE_SEND_RESULT_TYPE.ERROR_UPLOAD,
      isTerminal: true
    });
  }
  return F.SendMsgResult.ERROR_UPLOAD;
}
function te(e, t, n, r) {
  return e.waitForPrep().then(e => {
    const t = e.mediaBlob;
    if (!t || t instanceof I.default) {
      return e;
    } else {
      return I.default.createFromData(t, t.type).then(t => {
        e.mediaBlob = t;
        return e;
      });
    }
  }).then(e => {
    const a = e.filehash;
    if (!a) {
      __LOG__(4, undefined, new Error(), true)`Assertion failed!`;
      SEND_LOGS("media-fault: sendToChat filehash undefined");
    }
    const o = R.getOrCreateMediaObject(a);
    const s = o.mediaBlob;
    if (s) {
      s.retain();
      if (e.mediaBlob instanceof I.default) {
        e.mediaBlob.autorelease();
      }
      e.mediaBlob = s;
    }
    if (e.mediaBlob instanceof I.default) {
      e.renderableUrl = e.mediaBlob.url();
    }
    o.consolidate(e.toJSON());
    if (e.mediaBlob instanceof I.default) {
      e.mediaBlob.autorelease();
    }
    if ((0, S.shouldUseMediaCache)((0, k.castToV4)(o.type)) && e.mediaBlob instanceof I.default) {
      const t = e.mediaBlob.formData();
      b.InMemoryMediaBlobCache.put(a, t);
    }
    (0, P.downloadMedia)({
      mimetype: e.mimetype,
      mediaObject: o,
      downloadEvenIfExpensive: true,
      mediaType: (0, k.msgToMediaType)({
        type: e.type,
        isGif: e.isGif,
        isNewsletter: t.isNewsletter
      }),
      rmrReason: $.WEBC_RMR_REASON_CODE.SEND_TO_CHAT,
      downloadOrigin: X(t, r),
      mode: "manual",
      chatWid: t.id
    });
    const l = (0, i.default)({}, o.msgProps(e));
    l.caption = n.caption;
    if (!((0, L.documentWithCaptionsSendEnabled)() || n.caption != null && n.caption !== "" || e.type !== N.OUTWARD_TYPES.DOCUMENT)) {
      l.caption = e.filename;
    }
    if (n.isViewOnce === true) {
      l.isViewOnce = true;
    }
    return l;
  });
}
function ne() {
  return re.apply(this, arguments);
}
function re() {
  return (re = (0, a.default)(function* (e, t, r, s) {
    var f;
    var E;
    __LOG__(2)`Media:sendToChat chat ${t.id.toLogString()}`;
    const {
      caption: S,
      footer: b
    } = r;
    const P = r.quotedMsg ? r.quotedMsg.msgContextInfo(t.id) : {};
    const I = (0, W.getMeUser)();
    const R = (f = r.productMsgOptions) !== null && f !== undefined ? f : {};
    const Y = (0, p.isEphemeralSettingOn)(t) ? (0, p.getEphemeralSetting)(t) : undefined;
    const V = (0, p.getEphemeralSettingTimestamp)(t);
    const $ = (0, p.getDisappearingModeInitiator)(t);
    let J;
    if (t.isGroup) {
      const e = (0, g.default)(require("./667845.js"));
      const r = yield e.find(t.id);
      const i = (r == null ? undefined : r.groupType) === m.GroupType.LINKED_ANNOUNCEMENT_GROUP;
      const a = r == null ? undefined : r.participants.iAmAdmin();
      if (i && a) {
        J = self.crypto.getRandomValues(new Uint8Array(32));
      }
    }
    const Q = (0, i.default)({
      t: (0, l.unixTime)(),
      from: I,
      isNewMsg: true,
      to: t.id,
      self: "out",
      type: (E = r.type) !== null && E !== undefined ? E : e._baseType,
      ack: u.ACK.CLOCK,
      local: true,
      id: new G.default({
        from: I,
        to: t.id,
        id: yield G.default.newId(),
        participant: t.isGroup || t.id.isStatusV3() ? I : undefined,
        selfDir: "out"
      }),
      caption: S,
      footer: b,
      quotedMsg: P.quotedMsg,
      quotedParticipant: P.quotedParticipant,
      quotedStanzaID: P.quotedStanzaID,
      quotedRemoteJid: P.quotedRemoteJid,
      mentionedJidList: r.mentionedJidList,
      groupMentions: r.groupMentions,
      isForwarded: r.isForwarded,
      forwardingScore: r.forwardingScore,
      forwardedNewsletterMessageInfo: r.forwardedNewsletterMessageInfo,
      multicast: r.multicast,
      forwardedFromWeb: r.forwardedFromWeb,
      ctwaContext: r.ctwaContext,
      ephemeralDuration: Y,
      ephemeralSettingTimestamp: V,
      disappearingModeInitiator: $,
      messageSecret: J,
      isAvatar: r.isAvatar
    }, R);
    let X;
    let ne;
    let re;
    function ie() {
      return ae.apply(this, arguments);
    }
    function ae() {
      return (ae = (0, a.default)(function* (e) {
        X = e;
        const {
          mediaObject: n
        } = e;
        if (!n) {
          __LOG__(4, undefined, new Error(), true)`Assertion failed!`;
          SEND_LOGS("media-fault: incorrect media object for created msg");
        }
        (0, q.default)(n, "msg is missing mediaObject");
        const r = (0, k.getMsgMediaType)(e);
        const a = n.entries.getUploadEntry((0, y.isMediaCryptoExpectedForChat)(t));
        const u = a instanceof v.EncryptedMediaEntry ? {
          key: a.mediaKey,
          timestamp: a.mediaKeyTimestamp
        } : (0, _.default)();
        let {
          fullPreviewData: c,
          fullPreviewSize: p
        } = n.contentInfo;
        let f = e.body;
        if (Z(r) && !c && n.contentInfo.preview) {
          const e = yield h.base64ImageToCanvas(n.contentInfo.preview.url());
          const t = yield (0, d.generateMicroThumb)(e, 1300, {
            mimetype: "image/jpeg",
            maxAttempts: 10
          });
          c = n.contentInfo.preview;
          p = {
            width: t.width,
            height: t.height
          };
          f = K.default.parseDataURL(t.dataUrl).data;
        }
        const g = e.safe();
        const m = c && p && Z(r);
        const E = c && m === true && g.type === U.MSG_TYPE.DOCUMENT ? (0, w.default)({
          thumbnail: c,
          mediaKeyInfo: u,
          mediaType: (0, M.default)(g),
          uploadOrigin: (0, A.default)(t),
          forwardedFromWeb: Boolean(e.forwardedFromWeb),
          isViewOnce: Boolean(e.isViewOnce)
        }) : Promise.resolve(null);
        const S = {
          mimetype: e.mimetype,
          mediaObject: n,
          mediaType: r,
          forwardedFromWeb: Boolean(e.forwardedFromWeb),
          uploadOrigin: (0, A.default)(t),
          isViewOnce: Boolean(e.isViewOnce),
          earlyUpload: s
        };
        const b = (0, y.isMediaCryptoExpectedForChat)(t) ? (0, O.uploadMedia)((0, i.default)((0, i.default)({}, S), {}, {
          mediaKeyInfo: u
        })) : (0, O.uploadUnencryptedMedia)((0, i.default)((0, i.default)({}, S), {}, {
          calculateToken: o.getRandomFilehash
        }));
        const {
          filehash: P
        } = n;
        if ((0, C.shouldUseMediaKeyCache)() && P != null) {
          C.MediaKeyCache.put(P, u);
        }
        const [{
          kind: I,
          mediaEntry: R
        }, N] = yield Promise.all([b, E]);
        if ((0, T.default)(r)) {
          n.clearBlob({
            reset: true
          });
        }
        ne = I;
        if (!R) {
          throw (0, z.default)("upload failed: media entry was not created");
        }
        if ((0, C.shouldUseMediaKeyCache)() && P != null) {
          C.MediaKeyCache.delete(P);
        }
        const L = N == null ? undefined : N.mediaEntry;
        let G = {};
        if (m === true) {
          if (!(L && N && p)) {
            const e = {
              thumbnailResultEntry: L,
              uploadThumbnailResult: N,
              fullPreviewSize: p
            };
            __LOG__(4, undefined, new Error(), true)`upload failed: thumbnail data incomplete\nDebug info:${JSON.stringify(e)}`;
            SEND_LOGS("mms-thumbnail-data-incomplete");
            throw (0, z.default)("upload failed: thumbnail data incomplete");
          }
          G = {
            thumbnailDirectPath: L.directPath,
            thumbnailSha256: N.filehash,
            thumbnailEncSha256: L.encFilehash,
            thumbnailHeight: p.height,
            thumbnailWidth: p.width
          };
        }
        yield (0, D.default)(X, (0, i.default)({
          deprecatedMms3Url: R.deprecatedMms3Url,
          directPath: R.directPath,
          mediaKey: R.getMediaKey(),
          mediaKeyTimestamp: R.getMediaKeyTimestamp(),
          filehash: n.filehash,
          encFilehash: R.getEncfilehash(),
          size: n.size,
          streamingSidecar: R.sidecar,
          firstFrameSidecar: R.firstFrameSidecar,
          body: f,
          stickerSentTs: (0, l.unixTimeMs)(),
          mediaHandle: R instanceof v.UnencryptedMediaEntry ? R.handle : null
        }, G));
        return X;
      })).apply(this, arguments);
    }
    if (r.type === U.MSG_TYPE.DOCUMENT && (0, L.documentWithCaptionsSendEnabled)() && Boolean(r.caption)) {
      Q.isCaptionByUser = true;
    }
    if (r.addEvenWhilePreparing === true) {
      const a = r.placeholderProps || {};
      const o = (0, i.default)((0, i.default)({}, a), Q);
      const s = n => {
        X = n;
        return te(e, t, r, Q).then(e => (0, D.default)(X, e)).then(() => ie(X));
      };
      re = (0, x.isNewsletterEnabled)() && t.isNewsletter ? require("./12074.js").sendNewsletterMediaMsg(t, o, s) : (0, j.isStatusPostingEnabled)() && t.id.isStatusV3() ? Promise.reject((0, z.default)("unsupported")) : (0, B.addAndSendMsgToChat)(t, o, s)[1];
    } else {
      const a = te(e, t, r, Q).then(e => {
        const t = r.useBasePropsType === true ? Q.type : e.type;
        return (0, i.default)((0, i.default)((0, i.default)({}, Q), e), {}, {
          type: t
        });
      });
      re = (0, x.isNewsletterEnabled)() && t.isNewsletter ? require("./12074.js").sendNewsletterMediaMsg(t, yield a, ie) : (0, j.isStatusPostingEnabled)() && t.id.isStatusV3() ? Promise.reject((0, z.default)("unsupported")) : (0, B.addAndSendMsgToChat)(t, a, ie)[1];
    }
    return re.then(e => ({
      result: e,
      error: null
    })).catch(e => ({
      result: null,
      error: e
    })).then(e => {
      var t;
      var r;
      let {
        result: i,
        error: a
      } = e;
      if ((i == null ? undefined : i.messageSendResult) === F.SendMsgResult.OK) {
        if (X.type === N.OUTWARD_TYPES.STICKER && X.isAvatar !== true) {
          require("./951220.js").RecentStickerCollectionMd.addStickerWithMediaData(X);
        }
        return {
          messageSendResult: F.SendMsgResult.OK
        };
      }
      if (X) {
        X.ack = u.ACK.FAILED;
      }
      const o = (t = X) === null || t === undefined || (r = t.mediaObject) === null || r === undefined ? undefined : r.uploadStage;
      if (X && (0, k.getMsgMediaType)(X) === N.OUTWARD_TYPES.STICKER && (0, c.areExpressionPanelsEnabled)()) {
        const e = o || "undefined";
        __LOG__(4, undefined, new Error(), true)`Sticker:sendToChat failed with expressions panel enabled`;
        SEND_LOGS(`sticker-send-fail-with-expressions-panel-enabled-uploadStage-${e}`);
      }
      var s;
      if (ne === O.UploadMediaResultKind.CANCELLATION) {
        __LOG__(2)`Media:sendToChat canceled`;
        if (!((s = X.wamMessageSendReporter) === null || s === undefined)) {
          s.postFailure({
            result: H.MESSAGE_SEND_RESULT_TYPE.ERROR_CANCELLED,
            isTerminal: true
          });
        }
        return {
          messageSendResult: F.SendMsgResult.ERROR_CANCELLED
        };
      }
      __LOG__(3)`Media:sendToChat error\nresult: ${i}\nuploadStage: ${o}\nuploadResultKind: ${ne}\nerror: ${String(a)}`;
      if (o != null) {
        switch (o) {
          case N.UPLOAD_STAGE.NEED_UPLOAD:
          case N.UPLOAD_STAGE.ERROR_TOO_LARGE:
            return {
              messageSendResult: ee(X)
            };
          case N.UPLOAD_STAGE.ERROR_MISSING:
            return {
              messageSendResult: F.SendMsgResult.ERROR_EXPIRED
            };
        }
      }
      if (ne === O.UploadMediaResultKind.ERROR) {
        return {
          messageSendResult: ee(X)
        };
      } else if (i != null) {
        return i;
      } else {
        if (X && (0, k.getMsgMediaType)(X) === N.OUTWARD_TYPES.STICKER) {
          __LOG__(4, undefined, new Error(), true)`Sticker:sendToChat failed with unknown error`;
          SEND_LOGS("sticker-send-fail-unknown-" + ((0, c.areExpressionPanelsEnabled)() ? "expression-panels" : "old-panels"));
        }
        return {
          messageSendResult: F.SendMsgResult.ERROR_UNKNOWN
        };
      }
    });
  })).apply(this, arguments);
}
exports.MediaPrep = class {
  constructor(e, t) {
    this._baseType = e;
    this._mediaData = new E.default({
      mediaStage: N.MEDIA_DATA_STAGE.PREPARING
    });
    this._prepwork = t.then(e => {
      this._mediaData.set(e);
      if (!e.filehash) {
        if (!e.mediaBlob) {
          __LOG__(4, undefined, new Error(), true)`Assertion failed!`;
          SEND_LOGS("media-fault: no hash or blob");
        }
        return (0, f.calculateFilehashFromBlob)(e.mediaBlob).then(e => {
          this._mediaData.filehash = e;
        });
      }
    }, e => {
      this._mediaData.mediaStage = N.MEDIA_DATA_STAGE.ERROR_UNSUPPORTED;
      throw e;
    });
  }
  sendToChat(e, t, n) {
    return (0, s.promiseCallSync)(ne, null, this, e, t, n);
  }
  waitForPrep() {
    var e = this;
    return (0, a.default)(function* () {
      yield e._prepwork;
      return e._mediaData;
    })();
  }
};