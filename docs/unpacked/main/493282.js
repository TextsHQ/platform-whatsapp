var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    rootMsg: t,
    theme: n,
    excludeSymbol: a = false
  } = e;
  let k = e.msg;
  if (t && (k.unsafe().fromQuotedMsg || (0, h.getIsEdited)(k))) {
    k = (0, r.default)((0, y.createQuotedMsgObj)(t.unsafe()), "createQuotedMsgObj(rootMsg.unsafe())");
  }
  const D = (0, P.default)();
  (0, A.useEffect)(() => {
    if (k.type === L) {
      k.downloadMedia({
        downloadEvenIfExpensive: false,
        rmrReason: S.WEBC_RMR_REASON_CODE.MSG_RENDER,
        isUserInitiated: false
      });
    }
    if (k.type === E.MSG_TYPE.DOCUMENT && k.isVcardOverMmsDocument && (!k.mediaData || !k.mediaData.mediaBlob) && (0, g.isTrusted)(k.unsafe()) && k.size <= b.MMS_VCARD_AUTODOWNLOAD_SIZE_KB * 1024) {
      k.downloadMedia({
        downloadEvenIfExpensive: true,
        rmrReason: S.WEBC_RMR_REASON_CODE.MSG_RENDER,
        isUserInitiated: false
      }).then(() => (0, o.delayMs)(0));
    }
  }, []);
  (0, O.useListener)(k.type === E.MSG_TYPE.DOCUMENT && k.mediaData && k.isVcardOverMmsDocument ? k.mediaData : null, "change:parsedVcards", () => {
    D();
  });
  const G = () => k.downloadMedia({
    downloadEvenIfExpensive: false,
    rmrReason: S.WEBC_RMR_REASON_CODE.MSG_RENDER,
    isUserInitiated: false
  });
  const U = [];
  if (!a && (0, g.hasSymbol)(k.unsafe()) && k.type !== L && k.type !== B) {
    U.push(A.default.createElement(i.default, {
      msg: k.unsafe(),
      key: "msg-symbol",
      viewOnceStatic: true
    }));
  }
  if (!((k.type !== N || k.isGif || k.caption || k.isViewOnce) && k.type !== x)) {
    U.push(s.Clock.durationStr(Number(k.duration)) + " ");
  }
  const W = d.QuotedMention({
    mentions: k.mentionMap(),
    groupMentions: k.groupMentionMap()
  });
  if (k.type === I || k.type === R || k.type === N || k.isFromTemplate || k.isDynamicReplyButtonsMsg) {
    var H;
    let e;
    e = ((H = (0, p.getAsViewOnce)(k)) === null || H === undefined ? undefined : H.isViewOnce) ? k.type === R ? T.fbt._("Photo", null, {
      hk: "SBkDD"
    }) : T.fbt._("Video", null, {
      hk: "2SOGaJ"
    }) : k.isFromTemplate && k.type === E.MSG_TYPE.CHAT && k.title ? "*" + k.title + "*\n" + k.body : (0, f.default)(k.unsafe(), {
      stripFormatting: false
    });
    U.push(A.default.createElement(c.EmojiText, {
      formatters: W,
      className: "quoted-mention",
      text: e,
      textLimit: (0, h.getInitialPageSize)(k),
      direction: "auto",
      key: "status"
    }));
  } else if (k.type === L) {
    const t = e.theme === "composeBox" ? "composeBoxQuoted" : "quoted";
    U.push(A.default.createElement(M.default, {
      key: "sticker",
      mediaData: k.mediaData,
      theme: t,
      downloadMedia: G
    }));
  } else if (k.type === j) {
    if ((0, w.isNonZeroNumber)(k.paymentAmount1000) && k.paymentCurrency || k.subtype === "invite") {
      U.push(A.default.createElement(v.default, {
        key: "payment",
        msgKey: k.id,
        subtype: k.subtype,
        receiverJid: k.paymentMessageReceiverJid,
        isQuoted: true
      }));
    } else {
      U.push(T.fbt._("Payment message • Amount unavailable", null, {
        hk: "3SAp3h"
      }));
    }
  } else if (k.type === B) {
    U.push(A.default.createElement(l.OrderDescription, {
      msg: k.unsafe(),
      showMessage: true,
      key: "order"
    }));
  } else {
    U.push(A.default.createElement(c.EmojiText, {
      formatters: W,
      className: "quoted-mention",
      text: (0, C.formatQuotedMsg)(k),
      preformatted: k.type === F && k.nativeFlowName === m.default.ORDER_DETAILS,
      textLimit: (0, h.getInitialPageSize)(k),
      direction: "auto",
      key: "status"
    }));
  }
  const V = (0, u.classnamesConvertMeToStylexPlease)({
    [_.default.composeBoxQuotedMsg]: e.theme === "composeBox",
    [_.default.messageText]: true
  });
  const q = n === "conversation" || n === "starred" ? "button" : null;
  return A.default.createElement("div", {
    className: V,
    dir: (0, p.getDir)(k),
    role: q
  }, U);
};
var r = a(require("../app/670983.js"));
var o = require("../app/8304.js");
var l = require("./754904.js");
var i = a(require("./859297.js"));
var u = require("../app/396574.js");
var s = require("../app/63014.js");
var c = require("../app/305521.js");
var d = D(require("../app/675886.js"));
var f = a(require("./353033.js"));
var p = require("../app/163755.js");
var m = a(require("../app/753110.js"));
var h = require("../app/787742.js");
var g = require("../app/435711.js");
var E = require("../app/373070.js");
var v = a(require("./929810.js"));
var _ = a(require("./582306.js"));
var y = require("../app/592978.js");
var C = require("./865582.js");
var b = require("../app/962260.js");
var M = a(require("./799451.js"));
var S = require("../app/885313.js");
var T = require("../vendor/548360.js");
var w = require("../app/113189.js");
var A = D(require("../vendor/667294.js"));
var P = a(require("../app/969651.js"));
var O = require("../app/808446.js");
function k(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (k = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function D(e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = k(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var a = {};
  var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e) {
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
      if (l && (l.get || l.set)) {
        Object.defineProperty(a, o, l);
      } else {
        a[o] = e[o];
      }
    }
  }
  a.default = e;
  if (n) {
    n.set(e, a);
  }
  return a;
}
const {
  CHAT: I,
  IMAGE: R,
  VIDEO: N,
  AUDIO: x,
  STICKER: L,
  PAYMENT: j,
  ORDER: B,
  INTERACTIVE: F
} = E.MSG_TYPE;