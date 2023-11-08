var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  var t;
  let {
    messageProtobuf: n,
    baseMessage: r,
    msgContext: f
  } = e;
  const {
    templateMessage: y
  } = n;
  if (y == null) {
    return;
  }
  const E = y.interactiveMessageTemplate;
  if (E) {
    return function (e, t, n, r) {
      var a;
      var l;
      var u;
      var d;
      const p = (0, i.default)((0, i.default)({}, e), {}, {
        type: s.MSG_TYPE.CHAT
      }, Boolean((a = n.body) === null || a === undefined ? undefined : a.text) && {
        body: (0, o.convertToTextWithoutSpecialEmojis)((l = n.body) === null || l === undefined ? undefined : l.text)
      });
      const f = (u = (d = (0, c.default)({
        messageProtobuf: {
          interactiveMessage: n
        },
        baseMessage: e,
        msgContext: t,
        bizSource: e.bizSource || ""
      })) === null || d === undefined ? undefined : d.msgData) !== null && u !== undefined ? u : p;
      return {
        msgData: (0, i.default)((0, i.default)({}, f), {}, {
          templateId: r,
          isFromTemplate: true,
          caption: f.caption,
          footer: f.footer,
          title: f.title
        }),
        contextInfo: undefined
      };
    }(r, f, E, y.templateId);
  }
  const S = (t = y.hydratedTemplate) !== null && t !== undefined ? t : (0, a.default)(y.hydratedFourRowTemplate, "templateMessage.hydratedFourRowTemplate");
  const {
    documentMessage: v,
    imageMessage: T,
    locationMessage: M,
    videoMessage: A,
    hydratedButtons: b,
    hydratedContentText: C,
    hydratedFooterText: P,
    hydratedTitleText: O,
    templateId: I
  } = S;
  if ((e => {
    if (e.length > 3) {
      return true;
    }
    if (e.length > 0) {
      const t = h(e[0]);
      if (!e.slice(1).every(e => {
        const n = h(e);
        if (t === _) {
          return n === t;
        } else if (t === g || t === m) {
          return n === g || n === m;
        } else {
          return undefined;
        }
      })) {
        return true;
      }
    }
    return false;
  })(b)) {
    return {
      msgData: (0, i.default)((0, i.default)({}, r), {}, {
        type: s.MSG_TYPE.UNKNOWN,
        subtype: "phone_only_feature"
      }),
      contextInfo: undefined
    };
  }
  const R = (() => {
    const e = (0, i.default)((0, i.default)({}, r), {}, {
      type: s.MSG_TYPE.CHAT
    }, Boolean(C) && {
      body: (0, o.convertToTextWithoutSpecialEmojis)(C)
    });
    var t;
    var n;
    var a;
    var c;
    var _;
    var g;
    var m;
    var h;
    if (T) {
      if ((t = (n = (0, u.default)({
        messageProtobuf: {
          imageMessage: T
        },
        baseMessage: r,
        msgContext: f
      })) === null || n === undefined ? undefined : n.msgData) !== null && t !== undefined) {
        return t;
      } else {
        return e;
      }
    } else if (v) {
      if ((a = (c = (0, l.default)({
        messageProtobuf: {
          documentMessage: v
        },
        baseMessage: r,
        msgContext: f
      })) === null || c === undefined ? undefined : c.msgData) !== null && a !== undefined) {
        return a;
      } else {
        return e;
      }
    } else if (M) {
      if ((_ = (g = (0, d.default)({
        messageProtobuf: {
          locationMessage: M
        },
        baseMessage: r,
        msgContext: f
      })) === null || g === undefined ? undefined : g.msgData) !== null && _ !== undefined) {
        return _;
      } else {
        return e;
      }
    } else if (A && (m = (h = (0, p.default)({
      messageProtobuf: {
        videoMessage: A
      },
      baseMessage: r,
      msgContext: f
    })) === null || h === undefined ? undefined : h.msgData) !== null && m !== undefined) {
      return m;
    } else {
      return e;
    }
  })();
  return {
    msgData: (0, i.default)((0, i.default)({}, R), {}, {
      templateId: I,
      isFromTemplate: true,
      caption: Boolean(C) ? (0, o.convertToTextWithoutSpecialEmojis)(C) : R.caption,
      footer: Boolean(P) ? (0, o.convertToTextWithoutSpecialEmojis)(P) : R.footer,
      title: Boolean(O) ? (0, o.convertToTextWithoutSpecialEmojis)(O) : R.title
    }, b.length > 0 && {
      hydratedButtons: b
    }),
    contextInfo: undefined
  };
};
var i = r(require("../vendor/81109.js"));
var a = r(require("./670983.js"));
var o = require("./974637.js");
var s = require("./373070.js");
var l = r(require("./901133.js"));
var u = r(require("./969938.js"));
var c = r(require("./107501.js"));
var d = r(require("./98613.js"));
var p = r(require("./319775.js"));
var f = require("./517286.js");
const {
  QUICK_REPLY: _,
  URL: g,
  CALL: m
} = f.TEMPLATE_BUTTON_SUBTYPE;
const h = e => {
  let t = "";
  if (e.callButton != null) {
    t = m;
  } else if (e.quickReplyButton != null) {
    t = _;
  } else if (e.urlButton != null) {
    t = g;
  }
  return t;
};