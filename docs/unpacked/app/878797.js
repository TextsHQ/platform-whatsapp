var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDynamicReplyButtonsMessage = function (e, t, n) {
  const {
    documentMessage: r,
    imageMessage: i,
    locationMessage: a,
    videoMessage: o
  } = e;
  if (t.isForwarded && (r || i || a || o)) {
    return e;
  }
  const s = {
    buttons: t.isForwarded === true ? undefined : t.dynamicReplyButtons,
    footerText: t.footer,
    contextInfo: n
  };
  if (r) {
    s.documentMessage = r;
    s.headerType = d.Message$ButtonsMessage$HeaderType.DOCUMENT;
    s.contentText = t.caption;
  } else if (i) {
    s.imageMessage = i;
    s.headerType = d.Message$ButtonsMessage$HeaderType.IMAGE;
    s.contentText = t.caption;
  } else if (a) {
    s.locationMessage = a;
    s.headerType = d.Message$ButtonsMessage$HeaderType.LOCATION;
    s.contentText = t.caption;
  } else if (o) {
    s.videoMessage = o;
    s.headerType = d.Message$ButtonsMessage$HeaderType.VIDEO;
    s.contentText = t.caption;
  } else if (t.title) {
    s.text = t.title;
    s.headerType = d.Message$ButtonsMessage$HeaderType.TEXT;
    s.contentText = t.body;
  } else {
    s.contentText = t.body;
    s.headerType = d.Message$ButtonsMessage$HeaderType.EMPTY;
  }
  return {
    buttonsMessage: s
  };
};
exports.parseButtonsMessageProto = function (e) {
  let {
    buttonsMessage: t,
    baseMessage: n,
    msgContext: r
  } = e;
  const {
    documentMessage: d,
    imageMessage: p,
    locationMessage: f,
    videoMessage: _,
    contentText: g,
    footerText: m,
    text: h,
    headerType: y
  } = t;
  const E = (() => {
    const e = (0, i.default)((0, i.default)({}, n), {}, {
      type: o.MSG_TYPE.CHAT,
      title: h == null ? n.title : (0, a.convertToTextWithoutSpecialEmojis)(h),
      body: g == null ? n.body : (0, a.convertToTextWithoutSpecialEmojis)(g)
    });
    var t;
    var m;
    var y;
    var E;
    var S;
    var v;
    var T;
    var M;
    if (p) {
      if ((t = (m = (0, l.default)({
        messageProtobuf: {
          imageMessage: p
        },
        baseMessage: n,
        msgContext: r
      })) === null || m === undefined ? undefined : m.msgData) !== null && t !== undefined) {
        return t;
      } else {
        return e;
      }
    } else if (d) {
      if ((y = (E = (0, s.default)({
        messageProtobuf: {
          documentMessage: d
        },
        baseMessage: n,
        msgContext: r
      })) === null || E === undefined ? undefined : E.msgData) !== null && y !== undefined) {
        return y;
      } else {
        return e;
      }
    } else if (f) {
      if ((S = (v = (0, u.default)({
        messageProtobuf: {
          locationMessage: (0, i.default)((0, i.default)({}, f), {}, {
            name: undefined,
            address: undefined
          })
        },
        baseMessage: n,
        msgContext: r
      })) === null || v === undefined ? undefined : v.msgData) !== null && S !== undefined) {
        return S;
      } else {
        return e;
      }
    } else if (_ && (T = (M = (0, c.default)({
      messageProtobuf: {
        videoMessage: _
      },
      baseMessage: n,
      msgContext: r
    })) === null || M === undefined ? undefined : M.msgData) !== null && T !== undefined) {
      return T;
    } else {
      return e;
    }
  })();
  return (0, i.default)((0, i.default)({}, E), {}, {
    headerType: y,
    caption: g != null ? (0, a.convertToTextWithoutSpecialEmojis)(g) : E.caption,
    footer: m != null ? (0, a.convertToTextWithoutSpecialEmojis)(m) : E.footer
  });
};
var i = r(require("../vendor/81109.js"));
var a = require("./974637.js");
var o = require("./373070.js");
var s = r(require("./901133.js"));
var l = r(require("./969938.js"));
var u = r(require("./98613.js"));
var c = r(require("./319775.js"));
var d = require("./533494.js");