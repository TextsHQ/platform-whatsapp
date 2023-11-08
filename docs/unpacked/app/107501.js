var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  var t;
  var n;
  let {
    messageProtobuf: r,
    baseMessage: a,
    bizInfo: s,
    bizSource: _,
    msgContext: g
  } = e;
  const {
    interactiveMessage: m
  } = r;
  if (m == null) {
    return;
  }
  const S = (0, o.getInteractiveMessageTypeForProto)(m);
  if (!S || !(0, o.isInteractiveMessageTypeEnabled)(S)) {
    return E(a, m);
  }
  const {
    body: v,
    footer: T
  } = m;
  const M = (0, o.getInteractiveMessageFieldNameForType)(S);
  let A = {
    type: p.MSG_TYPE.INTERACTIVE,
    caption: (t = (0, o.convertToTextWithoutSpecialEmojis)(v == null ? undefined : v.text)) !== null && t !== undefined ? t : "",
    interactiveType: S,
    interactivePayload: m[M],
    pmCampaignId: s == null ? undefined : s.campaignId,
    bizSource: _
  };
  if (!(0, o.isSupportedInteractiveMessageVersion)(S, m[M])) {
    return E(a, m);
  }
  const b = function (e, t, n, r, a) {
    const s = t.carouselMessage;
    if (s == null) {
      return null;
    }
    const l = s.cards.map(t => function (e, t, n, r, a) {
      var s;
      const {
        body: l,
        header: u
      } = e;
      const f = (0, o.getInteractiveMessageTypeForProto)(e);
      if (!f || !(0, o.isInteractiveMessageTypeEnabled)(f)) {
        return null;
      }
      const _ = (0, i.default)((0, i.default)({}, u), {}, {
        type: p.MSG_TYPE.INTERACTIVE,
        caption: (s = (0, o.convertToTextWithoutSpecialEmojis)(l == null ? undefined : l.text)) !== null && s !== undefined ? s : "",
        interactiveType: f,
        interactivePayload: e.nativeFlowMessage,
        pmCampaignId: r == null ? undefined : r.campaignId,
        bizSource: a
      });
      const g = u != null ? y(u, t, n) : undefined;
      const m = g == null ? undefined : g.headerMessage;
      if (g == null || m == null) {
        return null;
      }
      const h = (0, i.default)((0, i.default)({}, g.interactiveHeader), {}, {
        title: null,
        subtitle: null
      });
      const E = new c.default({
        fromMe: m.id.fromMe,
        remote: m.id.remote,
        participant: m.id.participant,
        id: (0, d.getMsgKeyNewId)()
      });
      if (m.type === p.MSG_TYPE.VIDEO) {
        return (0, i.default)((0, i.default)((0, i.default)({}, m), _), {}, {
          id: E,
          interactiveHeader: h,
          footer: null,
          isCarouselCard: true
        });
      }
      if (m.type === p.MSG_TYPE.IMAGE) {
        return (0, i.default)((0, i.default)((0, i.default)({}, m), _), {}, {
          id: E,
          interactiveHeader: h,
          footer: null,
          isCarouselCard: true
        });
      }
    }(t, e, n, r, a));
    const u = (0, h.default)(l);
    if (u.length === 0) {
      return null;
    }
    return u;
  }(a, m, g, s, _);
  if (S === u.default.NATIVE_FLOW) {
    var C;
    const e = l.default.cast((0, o.getBizNativeFlowName)({
      interactiveMessage: m
    }));
    A = (0, i.default)((0, i.default)({}, A), {}, {
      nativeFlowName: e
    });
    if (!(0, o.isValidNativeFlowName)(e, s) || !(0, f.isValidNativeFlowMessage)(A, _, a == null || (C = a.id) === null || C === undefined ? undefined : C.fromMe)) {
      return {
        msgData: (0, i.default)((0, i.default)({}, a), {}, {
          type: p.MSG_TYPE.UNKNOWN,
          subtype: "phone_only_feature"
        }),
        contextInfo: m.contextInfo
      };
    }
  }
  const P = m.header != null ? y(m.header, a, g) : undefined;
  return {
    msgData: (0, i.default)((0, i.default)((0, i.default)((0, i.default)({}, a), (n = P == null ? undefined : P.headerMessage) !== null && n !== undefined ? n : {}), A), {}, {
      interactiveHeader: P == null ? undefined : P.interactiveHeader,
      footer: T ? (0, o.convertToTextWithoutSpecialEmojis)(T.text) : a.footer,
      carouselCardsParsed: b != null ? b : undefined
    }),
    contextInfo: m.contextInfo
  };
};
var i = r(require("../vendor/81109.js"));
var a = require("./21094.js");
var o = require("./974637.js");
var s = require("./943914.js");
var l = r(require("./753110.js"));
var u = r(require("./182394.js"));
var c = r(require("./565754.js"));
var d = require("./189161.js");
var p = require("./373070.js");
var f = require("./903373.js");
var _ = r(require("./901133.js"));
var g = r(require("./969938.js"));
var m = r(require("./319775.js"));
var h = r(require("./170872.js"));
function y(e, t, n) {
  const r = e.hasMediaAttachment === true ? e.imageMessage ? {
    headerMessage: (i = (0, g.default)({
      messageProtobuf: {
        imageMessage: e.imageMessage
      },
      baseMessage: t,
      msgContext: n
    })) === null || i === undefined ? undefined : i.msgData,
    mediaType: s.InteractiveMessageHeaderMediaType.IMAGE
  } : e.documentMessage ? {
    headerMessage: (l = (0, _.default)({
      messageProtobuf: {
        documentMessage: e.documentMessage
      },
      baseMessage: t,
      msgContext: n
    })) === null || l === undefined ? undefined : l.msgData,
    mediaType: s.InteractiveMessageHeaderMediaType.DOCUMENT
  } : e.videoMessage ? {
    headerMessage: (u = (0, m.default)({
      messageProtobuf: {
        videoMessage: e.videoMessage
      },
      baseMessage: t,
      msgContext: n
    })) === null || u === undefined ? undefined : u.msgData,
    mediaType: s.InteractiveMessageHeaderMediaType.VIDEO
  } : undefined : undefined;
  var i;
  var l;
  var u;
  return {
    headerMessage: r == null ? undefined : r.headerMessage,
    interactiveHeader: {
      title: (0, o.convertToTextWithoutSpecialEmojis)(e.title),
      subtitle: (0, o.convertToTextWithoutSpecialEmojis)(e.subtitle),
      thumbnail: (0, a.decodeBytes)(e.jpegThumbnail),
      hasMediaAttachment: Boolean(e.hasMediaAttachment),
      mediaType: r == null ? undefined : r.mediaType
    }
  };
}
function E(e, t) {
  return {
    msgData: (0, i.default)((0, i.default)({}, e), {}, {
      type: p.MSG_TYPE.UNKNOWN,
      subtype: "phone_only_feature"
    }),
    contextInfo: t.contextInfo
  };
}