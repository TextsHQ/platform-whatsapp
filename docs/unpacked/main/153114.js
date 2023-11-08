var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgComponent = undefined;
var r = a(require("../vendor/81109.js"));
var o = a(require("../app/939067.js"));
var l = a(require("./838920.js"));
var i = require("../app/169571.js");
var u = a(require("./352896.js"));
var s = require("../app/356097.js");
var c = require("../app/163755.js");
var d = a(require("./843435.js"));
var f = a(require("./287465.js"));
var p = a(require("./149814.js"));
var m = a(require("./329820.js"));
var h = a(require("./666212.js"));
var g = a(require("./454856.js"));
var E = a(require("./387876.js"));
var v = a(require("./224813.js"));
var _ = require("./597245.js");
var y = a(require("./427896.js"));
var C = a(require("./913508.js"));
var b = require("./293815.js");
var M = require("./443465.js");
var S = a(require("./579043.js"));
var T = a(require("./799546.js"));
var w = a(require("./743090.js"));
var A = require("./654386.js");
var P = require("./279997.js");
var O = a(require("./80384.js"));
var k = a(require("./438462.js"));
var D = a(require("./479585.js"));
var I = a(require("./359596.js"));
var R = a(require("./590389.js"));
var N = a(require("./142295.js"));
var x = require("../app/787742.js");
var L = require("../app/435711.js");
var j = require("../app/373070.js");
var B = a(require("./629922.js"));
var F = require("../app/73225.js");
var G = a(require("./874530.js"));
var U = a(require("./46356.js"));
var W = require("../app/591800.js");
var H = require("./702008.js");
var V = require("./228529.js");
var q = require("./525177.js");
var Y = require("../app/989199.js");
var z = require("./699417.js");
var K = a(require("./666413.js"));
var Q = require("./615170.js");
var X = require("../app/592978.js");
var Z = a(require("./457306.js"));
var J = require("../app/163139.js");
var $ = a(require("./536706.js"));
var ee = require("../app/517660.js");
var te = require("../vendor/548360.js");
var ne = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = le(t);
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
}(require("../vendor/667294.js"));
var ae = require("../app/655241.js");
var re = require("./871210.js");
var oe = a(require("../app/17533.js"));
function le(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (le = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const ie = (0, ne.forwardRef)((e, t) => {
  const {
    msg: n,
    displayAuthor: a,
    displayType: le,
    isMsgVisible: ie
  } = e;
  const ue = (0, ne.useRef)(null);
  const [se, ce, de, fe, pe, me, he, ge, Ee, ve, _e, ye, Ce, be, Me, Se, Te] = (0, re.useMsgValues)(e.msg.id, [x.getBody, x.getCaption, c.getRtl, c.getDir, x.getIsSentByMe, x.getIsPSA, x.getIsViewOnce, x.getCtwaContext, x.getInitialPageSize, c.getHasTemplateButtons, x.getThumbnail, x.getOrderTitle, x.getTotalAmount1000, x.getTotalCurrencyCode, x.getItemCount, x.getIsGif, x.getIsLive]);
  const [we, Ae, Pe, Oe, ke, De, Ie, Re, Ne, xe, Le, je, Be, Fe, Ge, Ue] = (0, re.useMsgValues)(e.msg.id, [x.getIsVcardOverMmsDocument, c.getMediaData, x.getNativeFlowName, x.getNativeFlowButtons, c.getSenderObj, x.getSubtype, x.getType, x.getT, x.getId, x.getTitle, x.getIsFromTemplate, x.getVcard, x.getVcardList, x.getInviteGrpType, x.getFutureproofType, x.getFutureproofSubtype]);
  const We = (0, ae.useModelValues)(e.chat, ["trusted"]);
  const He = () => {
    if (le === s.DISPLAY_TYPE.GALLERY || le === s.DISPLAY_TYPE.ALL_REPLIES) {
      return null;
    }
    const e = (0, X.getQuotedMsgObj)(n);
    if (e) {
      return ne.default.createElement(K.default, {
        msg: e,
        key: e.id.toString(),
        rootMsg: (0, J.unproxy)(n.safe()),
        displayType: le,
        theme: "conversation",
        chat: (0, J.unproxy)(We),
        t: Re
      });
    }
    const t = (0, X.getQuotedMsgAdminGroupJid)(n);
    if (t) {
      const e = (0, X.getQuotedMsgAdminGroupSubject)(n);
      const a = (0, X.getQuotedMsgAdminParentGroupJid)(n);
      return ne.default.createElement(Q.QuotedMsgAdminGroupName, {
        quotedGroupJid: t,
        quotedGroupSubject: e,
        quotedParentGroupJid: a
      });
    }
    return null;
  };
  const Ve = (0, oe.default)(() => ue.current);
  const qe = (0, ne.useCallback)((0, o.default)(e => {
    let {
      vcardList: t
    } = e;
    if (t) {
      return t.map(e => (0, r.default)((0, r.default)({}, e), {}, {
        parsedVcard: (0, ee.parseVcard)(e.vcard)
      }));
    } else {
      return [];
    }
  }), []);
  (0, ne.useImperativeHandle)(t, () => ({
    getRef: Ve
  }), [Ve]);
  const Ye = n.safe();
  const ze = (0, c.getAsViewOnce)(n);
  if (ze != null) {
    return ne.default.createElement(N.default, {
      displayType: le,
      displayAuthor: a,
      mediaData: ze.mediaData,
      msg: ze,
      quotedMsg: He(),
      ref: ue,
      trusted: (0, L.isTrusted)(n)
    });
  }
  const Ke = (0, P.renderMsg)({
    chat: We,
    msg: n,
    displayAuthor: a
  });
  if (Ke != null) {
    return Ke;
  }
  switch (Ye.type) {
    case j.MSG_TYPE.NATIVE_FLOW:
      return ne.default.createElement(B.default, {
        msg: (0, J.unproxy)(Ye),
        displayAuthor: a,
        displayType: le
      });
    case j.MSG_TYPE.CHAT:
    case j.MSG_TYPE.LIST_RESPONSE:
    case j.MSG_TYPE.BUTTONS_RESPONSE:
      if (De === i.BOT_TYPING_PLACEHOLDER_MSG_SUBTYPE) {
        return ne.default.createElement(E.default, {
          isBotMsgStreaming: false
        });
      } else {
        return ne.default.createElement(D.default, {
          msg: (0, J.unproxy)(Ye),
          contact: Ye.senderObj,
          quotedMsg: He(),
          trusted: (0, L.isTrusted)(Ye.unsafe()),
          displayType: le,
          displayAuthor: a,
          stickerLikeBubbleContainerRef: e.stickerLikeBubbleContainerRef,
          position: e.position
        });
      }
    case j.MSG_TYPE.IMAGE:
      return ne.default.createElement(A.ImageMessage, {
        msg: Ye,
        displayType: le,
        mediaData: Ye.mediaData,
        ref: ue,
        quotedMsg: He(),
        maxWidth: e.maxWidth,
        isMsgVisible: ie,
        trusted: (0, L.isTrusted)(Ye.unsafe()),
        displayAuthor: a
      });
    case j.MSG_TYPE.PRODUCT:
      return ne.default.createElement(l.default, {
        msg: Ye,
        displayType: le,
        displayAuthor: a,
        trusted: (0, L.isTrusted)(Ye.unsafe()),
        onProductClick: e.onProductClick,
        quotedMsg: He()
      });
    case j.MSG_TYPE.GP2:
      return ne.default.createElement(y.default, {
        msg: Ye,
        ref: ue,
        clickable: true
      });
    case j.MSG_TYPE.NEWSLETTER_NOTIFICATION:
      if ((0, F.isNewsletterEnabled)()) {
        return ne.default.createElement(T.default, {
          msg: Ye
        });
      } else {
        return null;
      }
    case j.MSG_TYPE.BROADCAST_NOTIFICATION:
      return ne.default.createElement(u.default, {
        msg: Ye,
        clickable: true
      });
    case j.MSG_TYPE.NOTIFICATION:
    case j.MSG_TYPE.NOTIFICATION_TEMPLATE:
    case j.MSG_TYPE.E2E_NOTIFICATION:
    case j.MSG_TYPE.CALL_LOG:
      return ne.default.createElement(w.default, {
        contact: (0, J.unproxy)(We).contact,
        msg: Ye,
        ref: ue
      });
    case j.MSG_TYPE.DEBUG:
      return null;
    case j.MSG_TYPE.AUDIO:
      return ne.default.createElement(V.Audio, {
        msg: Ye,
        mediaData: Ye.mediaData,
        quotedMsg: He(),
        displayAuthor: a,
        displayType: le,
        ref: ue
      });
    case j.MSG_TYPE.VIDEO:
      if (Ye.isGif === true) {
        return ne.default.createElement(_.WrappedGif, {
          displayAuthor: a,
          displayType: le,
          isMsgVisible: ie,
          maxWidth: e.maxWidth,
          mediaData: Ye.mediaData,
          msg: Ye,
          quotedMsg: He(),
          ref: ue,
          trusted: (0, L.isTrusted)(Ye.unsafe())
        });
      } else {
        return ne.default.createElement(h.default, {
          displayAuthor: a,
          displayType: le,
          hover: e.hover,
          msg: Ye,
          quotedMsg: He(),
          ref: ue,
          trusted: (0, L.isTrusted)(Ye.unsafe())
        });
      }
    case j.MSG_TYPE.PTV:
      if ((0, Y.isPtvReceivingEnabled)()) {
        return ne.default.createElement(z.PtvMessageComponent, {
          msg: Ye,
          quotedMsg: He(),
          mediaData: Ye.mediaData,
          displayAuthor: a,
          displayType: le,
          position: e.position
        });
      } else {
        return ne.default.createElement($.default, {
          msg: Ye,
          displayAuthor: a,
          hideUpdateButton: true
        });
      }
    case j.MSG_TYPE.VCARD:
      return ne.default.createElement(I.default, {
        msg: Ye,
        vcard: je,
        quotedMsg: He(),
        displayType: le,
        displayAuthor: a,
        onMessageClick: e.onMessageClick
      });
    case j.MSG_TYPE.MULTI_VCARD:
      return ne.default.createElement(S.default, {
        msg: Ye,
        vcardList: qe({
          vcardList: Be
        }),
        quotedMsg: He(),
        displayType: le,
        displayAuthor: a
      });
    case j.MSG_TYPE.GROUPS_V4_INVITE:
      return ne.default.createElement(d.default, {
        msg: Ye,
        displayAuthor: a
      });
    case j.MSG_TYPE.LOCATION:
      if (Ye.isLive === true) {
        return ne.default.createElement(b.LiveLocation, {
          msg: (0, J.unproxy)(Ye),
          quotedMsg: He(),
          trusted: (0, L.isTrusted)(Ye.unsafe()),
          displayAuthor: a,
          displayType: le
        });
      } else {
        return ne.default.createElement(M.Location, {
          msg: (0, J.unproxy)(Ye),
          quotedMsg: He(),
          trusted: (0, L.isTrusted)(Ye.unsafe()),
          displayAuthor: a,
          displayType: le
        });
      }
    case j.MSG_TYPE.PAYMENT:
      return ne.default.createElement(U.default, {
        msg: Ye,
        quotedMsg: He(),
        displayAuthor: a
      });
    case j.MSG_TYPE.PTT:
      return ne.default.createElement(q.Ptt, {
        msg: Ye,
        mediaData: Ye.mediaData,
        quotedMsg: He(),
        displayAuthor: a,
        displayType: le,
        ref: ue,
        getSequentialMsg: e.getSequentialMsg
      });
    case j.MSG_TYPE.POLL_CREATION:
      return ne.default.createElement(H.Poll, {
        msg: Ye,
        displayAuthor: a,
        trusted: (0, L.isTrusted)(Ye.unsafe()),
        quotedMsg: He(),
        displayType: le
      });
    case j.MSG_TYPE.REQUEST_PHONE_NUMBER:
      return ne.default.createElement(Z.default, {
        msg: Ye
      });
    case j.MSG_TYPE.STICKER:
      return ne.default.createElement(k.default, {
        msg: Ye,
        stickerLikeBubbleContainerRef: e.stickerLikeBubbleContainerRef,
        mediaData: Ye.mediaData,
        quotedMsg: He(),
        displayAuthor: a,
        position: e.position,
        forwardRef: e.forwardStickerRef,
        displayType: le,
        animateOnView: true
      });
    case j.MSG_TYPE.DOCUMENT:
      if (we) {
        return ne.default.createElement(R.default, {
          chat: We,
          msg: Ye,
          mediaData: Ae,
          displayAuthor: a,
          displayType: le,
          getQuotedMsg: () => He(),
          onMessageClick: e.onMessageClick
        });
      } else {
        return ne.default.createElement(m.default, {
          msg: Ye,
          displayType: le,
          quotedMsg: He(),
          trusted: (0, L.isTrusted)(Ye.unsafe()),
          displayAuthor: a
        });
      }
    case j.MSG_TYPE.UNKNOWN:
      if (Ge === j.MSG_TYPE.KEEP_IN_CHAT) {
        const e = te.fbt._("To see it, get the latest version of WhatsApp.", null, {
          hk: "fMYKO"
        });
        return ne.default.createElement($.default, {
          msg: Ye,
          displayAuthor: a,
          customUpdateButtonFbt: e
        });
      }
      if (Ge === j.MSG_TYPE.PROTOCOL && Ue === "message_edit") {
        const e = te.fbt._("Update WhatsApp", null, {
          hk: "MdRCZ"
        });
        return ne.default.createElement($.default, {
          msg: Ye,
          displayAuthor: a,
          customUpdateButtonFbt: e
        });
      }
      return ne.default.createElement($.default, {
        msg: (0, J.unproxy)(Ye),
        displayAuthor: a,
        hideUpdateButton: Ye.subtype === "phone_only_feature"
      });
    case j.MSG_TYPE.CIPHERTEXT:
      return ne.default.createElement(v.default, {
        msg: Ye,
        displayAuthor: a
      });
    case j.MSG_TYPE.REVOKED:
      ue.current = null;
      return ne.default.createElement(O.default, {
        msg: (0, J.unproxy)(Ye),
        displayType: le,
        displayAuthor: a
      });
    case j.MSG_TYPE.OVERSIZED:
      return ne.default.createElement(G.default, {
        msg: (0, J.unproxy)(Ye),
        displayAuthor: a
      });
    case j.MSG_TYPE.HSM:
    case j.MSG_TYPE.TEMPLATE_BUTTON_REPLY:
      return ne.default.createElement(D.default, {
        msg: (0, J.unproxy)(Ye),
        contact: Ye.senderObj,
        quotedMsg: He(),
        trusted: (0, L.isTrusted)(Ye.unsafe()),
        displayType: le,
        displayAuthor: a
      });
    case j.MSG_TYPE.PROTOCOL:
      if (De === "ephemeral_setting" || De === "share_phone_number") {
        return ne.default.createElement(w.default, {
          contact: (0, J.unproxy)(We).contact,
          msg: Ye,
          ref: ue
        });
      } else {
        return ne.default.createElement($.default, {
          msg: (0, J.unproxy)(Ye),
          displayAuthor: a
        });
      }
    case j.MSG_TYPE.ORDER:
      return ne.default.createElement(g.default, {
        displayAuthor: a,
        msg: (0, J.unproxy)(Ye)
      });
    case j.MSG_TYPE.LIST:
      return ne.default.createElement(C.default, {
        msg: (0, J.unproxy)(Ye),
        displayAuthor: a,
        quotedMsg: He()
      });
    case j.MSG_TYPE.INTERACTIVE:
      return ne.default.createElement(f.default, {
        msg: (0, J.unproxy)(Ye),
        quotedMsg: He(),
        displayAuthor: a,
        displayType: le
      });
    case j.MSG_TYPE.INTERACTIVE_RESPONSE:
      return ne.default.createElement(p.default, {
        msg: (0, J.unproxy)(Ye),
        quotedMsg: He(),
        displayAuthor: a,
        displayType: le
      });
    case j.MSG_TYPE.KEEP_IN_CHAT:
      return ne.default.createElement($.default, {
        msg: Ye,
        displayAuthor: a,
        customUpdateButtonFbt: te.fbt._("To see it, get the latest version of WhatsApp.", null, {
          hk: "fMYKO"
        })
      });
    case j.MSG_TYPE.PINNED_MESSAGE:
      if ((0, W.isPinnedMessagesM1ReceiverEnabled)()) {
        return ne.default.createElement(w.default, {
          contact: (0, J.unproxy)(We).contact,
          msg: Ye,
          ref: ue
        });
      }
      break;
    case j.MSG_TYPE.COMMENT:
      return ne.default.createElement($.default, {
        msg: Ye,
        displayAuthor: a,
        hideUpdateButton: true
      });
  }
  __LOG__(2)`messageList:render Unknown message type: ${Ie}`;
  return ne.default.createElement($.default, {
    msg: (0, J.unproxy)(Ye),
    ref: ue,
    displayAuthor: a
  });
});
exports.MsgComponent = ie;
ie.displayName = "MsgComponent";