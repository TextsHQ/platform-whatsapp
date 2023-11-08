var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageContainer = function (e) {
  const t = (0, _.classnamesConvertMeToStylexPlease)({
    "message-out": e.isSentByMe,
    "message-in": !e.isSentByMe,
    [Ye.default.msgContainer]: true
  });
  const n = (0, _.classnamesConvertMeToStylexPlease)(Ye.default.message, Ye.default.hasTail, "tail-override-left");
  const a = (0, Qe.getTailIcon)(ze.MSG_DIRECTION.IN);
  return lt.default.createElement("div", {
    className: t
  }, lt.default.createElement("div", {
    className: n
  }, lt.default.createElement("div", {
    className: Ye.default.messageBackground
  }, lt.default.createElement("div", {
    className: Ye.default.tail
  }, lt.default.createElement(a, null)), e.children)));
};
exports.Wrapper = undefined;
var r = a(require("../vendor/348926.js"));
var o = a(require("../app/670983.js"));
var l = require("../app/287461.js");
var i = require("./464520.js");
var u = a(require("./190643.js"));
var s = require("./980518.js");
var c = require("../app/72696.js");
var d = a(require("./217260.js"));
var f = a(require("./396517.js"));
var p = require("../app/354458.js");
var m = require("../app/169571.js");
var h = require("../app/37237.js");
var g = a(require("./131177.js"));
var E = require("../app/351053.js");
var v = require("../app/374660.js");
var _ = require("../app/396574.js");
var y = require("../app/780549.js");
var C = require("../app/789437.js");
var b = a(require("./167364.js"));
var M = require("../app/174834.js");
var S = require("../app/877171.js");
var T = require("../app/103440.js");
var w = require("./931178.js");
var A = a(require("./804418.js"));
var P = require("../app/356097.js");
var O = require("../main-chunk/465113.js");
var k = require("../app/664149.js");
var D = require("../app/675085.js");
var I = require("../app/707529.js");
var R = a(require("./592713.js"));
var N = require("./225446.js");
var x = a(require("../app/395767.js"));
var L = require("./821130.js");
var j = a(require("../app/988410.js"));
var B = a(require("../app/335540.js"));
var F = require("./361483.js");
var G = require("../app/163755.js");
var U = a(require("../app/97359.js"));
var W = require("./911842.js");
var H = a(require("../app/462824.js"));
var V = a(require("./180901.js"));
var q = require("./501532.js");
var Y = require("../app/81644.js");
var z = require("./776078.js");
var K = a(require("./650199.js"));
var Q = require("./614724.js");
var X = a(require("./493355.js"));
var Z = a(require("./6323.js"));
var J = require("./153114.js");
var $ = a(require("./419154.js"));
var ee = require("./48794.js");
var te = require("../app/97858.js");
var ne = require("../app/114850.js");
var ae = require("../app/939716.js");
var re = a(require("./137560.js"));
var oe = require("../app/787742.js");
var le = require("./722119.js");
var ie = require("../app/373070.js");
var ue = require("./664184.js");
var se = require("./352740.js");
var ce = require("./179268.js");
var de = require("../app/533494.js");
var fe = require("./491320.js");
var pe = require("../app/989199.js");
var me = require("../app/316348.js");
var he = require("./541345.js");
var ge = require("./400874.js");
var Ee = require("./474474.js");
var ve = require("./461424.js");
var _e = a(require("./313014.js"));
var ye = a(require("./207511.js"));
var Ce = a(require("./338695.js"));
var be = require("./626163.js");
var Me = a(require("./286391.js"));
var Se = require("./774401.js");
var Te = require("../app/472685.js");
var we = require("./435595.js");
var Ae = require("./381158.js");
var Pe = require("./923743.js");
var Oe = require("./594149.js");
var ke = require("./948101.js");
var De = require("./708127.js");
var Ie = require("../app/383296.js");
var Re = require("../app/937001.js");
var Ne = require("../app/453603.js");
var xe = require("../app/163139.js");
var Le = require("../app/625786.js");
var je = require("../app/390737.js");
var Be = require("../app/368170.js");
var Fe = require("../app/392632.js");
var Ge = a(require("../app/37875.js"));
var Ue = a(require("../app/395967.js"));
var We = a(require("./599395.js"));
var He = a(require("../app/844453.js"));
var Ve = require("./982015.js");
var qe = require("./328340.js");
var Ye = a(require("./409468.js"));
var ze = require("./367466.js");
var Ke = a(require("../app/328861.js"));
var Qe = require("./205528.js");
var Xe = require("./146398.js");
var Ze = require("./609859.js");
var Je = require("./669145.js");
var $e = require("./936355.js");
var et = require("./963352.js");
var tt = a(require("./424590.js"));
var nt = a(require("./137788.js"));
var at = require("./785044.js");
var rt = require("./445818.js");
var ot = require("../vendor/548360.js");
var lt = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = vt(t);
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
var it = a(require("../app/710629.js"));
var ut = a(require("../app/524578.js"));
var st = a(require("../app/969651.js"));
var ct = a(require("../app/637660.js"));
var dt = require("../app/808446.js");
var ft = require("./290870.js");
var pt = require("./55355.js");
var mt = require("./871210.js");
var ht = a(require("./798546.js"));
var gt = a(require("../app/17533.js"));
var Et = a(require("../app/321201.js"));
function vt(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (vt = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const _t = {
  atLeastOnceKeyboardUser: true
};
const yt = (0, lt.forwardRef)((e, t) => {
  var a;
  const {
    msg: vt,
    position: yt,
    displayType: Ct = P.DISPLAY_TYPE.CONVERSATION,
    selectedMessages: bt,
    isFocusable: Mt,
    selectable: St,
    isMsgVisible: Tt,
    onMessageSelect: wt,
    getSequentialMsg: At,
    onProductClick: Pt,
    onMessageClick: Ot,
    current: kt
  } = e;
  (0, ht.default)({
    markerId: me.QuickLogMarkerId.MESSAGE_RENDER,
    annotations: {
      string: {
        msgType: e.msg.type
      }
    }
  });
  const {
    isKeyboardUser: Dt
  } = (0, Ue.default)();
  const It = (0, st.default)();
  const [Rt] = (0, dt.useAddListenerOnce)();
  const [Nt, xt, Lt, jt, Bt, Ft, Gt, Ut, Wt, Ht, Vt, qt, Yt, zt, Kt] = (0, mt.useMsgValues)(e.msg.id, [G.getAsMms, G.getAsPollCreation, G.getAsPttLike, G.getAsRevoked, oe.getAuthor, oe.getBody, G.getDir, oe.getEphemeralDuration, oe.getEphemeralOutOfSync, oe.getFilehash, oe.getId, oe.getIsAvatar, oe.getIsBizNotification, oe.getIsEphemeral, oe.getIsFailed]);
  const [Qt, Xt, Zt, Jt, $t, en, tn, nn, an, rn, on, ln, un, sn, cn, dn, fn] = (0, mt.useMsgValues)(e.msg.id, [oe.getIsFrequentlyForwarded, oe.getIsFutureproof, oe.getIsGif, oe.getIsGroupMsg, oe.getIsLive, oe.getIsMedia, oe.getIsMdHistoryMsg, oe.getIsNotification, G.getIsRTL, oe.getIsSentByMe, G.getIsUnsentMedia, oe.getIsViewOnce, oe.getLinkPreview, oe.getList, G.getMediaData, oe.getMatchedText, oe.getQuotedMsg]);
  const [pn, mn, hn, gn, En, vn, _n, yn, Cn, bn, Mn, Sn, Tn, wn, An, Pn] = (0, mt.useMsgValues)(e.msg.id, [oe.getRichPreviewType, oe.getSender, G.getSenderObj, oe.getStar, oe.getSubtype, oe.getType, oe.getTitle, G.getHasTemplateButtons, G.getIsQuickReply, oe.getIsFromTemplate, oe.getDoNotPlayInline, oe.getCtwaContext, oe.getBizPrivacyStatus, oe.getVerifiedBizName, oe.getTemplateParams, oe.getDynamicReplyButtons, G.getReplyButtons]);
  const [On, kn, Dn, In, Rn, Nn, xn, Ln, jn, Bn] = (0, mt.useMsgValues)(e.msg.id, [oe.getHasReaction, oe.getBroadcastId, oe.getDeprecatedMms3Url, oe.getIsKept, G.getPendingDeleteForMe, oe.getMessageSecret, oe.getOriginalSelfAuthor, oe.getFrom, oe.getTo, G.getIsTransparentMsg]);
  const Fn = (0, G.getChat)(vt);
  const Gn = (0, lt.useRef)(null);
  const Un = (0, lt.useRef)(null);
  const Wn = (0, lt.useRef)(null);
  const Hn = (0, lt.useRef)(null);
  const Vn = (0, lt.useRef)(null);
  const qn = (0, lt.useRef)(null);
  const Yn = (0, lt.useRef)(null);
  const zn = (0, lt.useRef)(null);
  const Kn = (0, lt.useRef)(null);
  const Qn = (0, ct.default)(() => (Ct === P.DISPLAY_TYPE.STARRED_MSGS || Ct === P.DISPLAY_TYPE.REPORTED_MSG || Ct === P.DISPLAY_TYPE.GALLERY || Ct === P.DISPLAY_TYPE.GALLERY_LINKS || Ct === P.DISPLAY_TYPE.MSG_INFO || Ct === P.DISPLAY_TYPE.CONTACT_CARD || Ct === P.DISPLAY_TYPE.CHANNEL_ALERTS_MSGS) && (Zt || vn === ie.MSG_TYPE.IMAGE));
  const Xn = (0, lt.useRef)(undefined);
  const [Zn, Jn] = (0, lt.useState)(null);
  const [$n, ea] = (0, lt.useState)(null);
  const [ta, na] = (0, lt.useState)(null);
  const [aa, ra] = (0, lt.useState)(false);
  const [oa, la] = (0, lt.useState)(false);
  const [ia, ua] = (0, lt.useState)(() => !!e.selectedMessages && e.selectedMessages.isSelected((0, xe.unproxy)(e.msg)));
  const [sa, ca] = (0, lt.useState)(false);
  const [da, fa] = (0, lt.useState)(false);
  const [pa, ma] = (0, lt.useState)(false);
  const [ha, ga] = (0, lt.useState)({
    atLeastOnceKeyboardUser: false
  });
  const Ea = (0, pt.useMessageAriaLabel)(vt, ha);
  (0, lt.useEffect)(() => {
    if (Dt && ha.atLeastOnceKeyboardUser === false) {
      ga(_t);
    }
  }, [Dt]);
  (0, lt.useEffect)(() => {
    if (Qn.current && Vn.current) {
      Xn.current = Vn.current.offsetWidth;
      It();
    }
  }, []);
  const va = (0, Et.default)();
  const {
    handleMsgInfoClick: _a,
    handleOpenContactChat: ya,
    handleOpenWebSearchFlow: Ca,
    handleOpenEphemeralInfoPopup: ba,
    handleOpenBizPrivacyInfoPopup: Ma,
    handleOpenEphemeralExemptionInfoPopup: Sa,
    handleViewAllRepliesClick: Ta
  } = (0, Xe.getHandlers)(vt, va);
  const wa = () => !(nn || vt.type === ie.MSG_TYPE.CHAT && vt.subtype === m.BOT_TYPING_PLACEHOLDER_MSG_SUBTYPE || Ct === P.DISPLAY_TYPE.GALLERY || Ct === P.DISPLAY_TYPE.CONTACT_CARD || Ct === P.DISPLAY_TYPE.EDITING);
  const Aa = e => {
    if (!(e.buttons || aa || !wa())) {
      ra(true);
    }
  };
  const Pa = () => {
    ra(false);
  };
  const Oa = (0, P.isMsgGalleryDisplay)(Ct);
  const ka = (0, P.isConversationDisplay)(Ct);
  const Da = (0, P.isWideDisplay)(Ct);
  const Ia = () => {
    var e;
    var t;
    const n = (e = (t = zn.current) === null || t === undefined ? undefined : t.contains(document.activeElement)) !== null && e !== undefined && e;
    return Dt && n;
  };
  const Ra = (0, it.default)(() => {
    const e = (0, te.messageListA11yRedesignEnabled)() && Ia();
    ma(ka && (St == null || St === false) && (da || ta != null || $n != null || e));
  }, ze.DEBOUNCE_DURATION.REACTION_BUTTON);
  const Na = () => {
    fa(true);
    Ra();
  };
  const xa = () => {
    fa(false);
    Ra();
  };
  const La = () => {
    Ra();
  };
  const ja = () => {
    ne.ModalManager.open(lt.default.createElement(A.default, {
      chat: Fn,
      msgList: [vt].map(xe.unproxy),
      isMsgVisible: Tt
    }));
    Se.UiRevokeActionHelper.startSession();
    Se.UiRevokeActionHelper.messageSelected();
  };
  const Ba = () => {
    var e;
    var t;
    const n = (0, xe.unproxy)(vt);
    Fn.composeQuotedMsg = n;
    if ((0, oe.getIsMetaBotResponse)(n) && Fn.canInvokeBot() && ((e = (t = Fn.getComposeContents()) === null || t === undefined ? undefined : t.text) !== null && e !== undefined ? e : "") === "") {
      const e = `${Te.ZWS}${hn.id.toString()}${Te.ZWS} `;
      S.ComposeBoxActions.paste(Fn, e);
    }
    if (Fn === E.ChatCollection.getActive()) {
      S.ComposeBoxActions.focus(Fn);
    } else {
      y.Cmd.openChatBottom(Fn);
    }
  };
  const Fa = () => {
    const e = (0, xe.unproxy)(vt);
    (0, _e.default)(e);
  };
  const Ga = () => {
    L.FileSaver.initDownload((0, xe.unproxy)(vt));
  };
  const Ua = () => {
    Ha(h.BotFeedbackKind.POSITIVE);
  };
  const Wa = () => {
    ne.ModalManager.open(lt.default.createElement(f.default, {
      msg: vt,
      onSubmit: Ha
    }));
  };
  const Ha = e => {
    (0, Ae.sendBotFeedback)(vt, e);
    je.ToastManager.open(lt.default.createElement(Le.Toast, {
      msg: ot.fbt._("Feedback submitted to Meta", null, {
        hk: "2j7bNw"
      })
    }));
    ne.ModalManager.close();
  };
  const Va = () => {
    ne.ModalManager.open(lt.default.createElement(se.PinMessageModal, {
      msg: vt
    }));
  };
  const qa = () => {
    (0, Pe.sendPinInChatMsg)(vt, de.Message$PinInChatMessage$Type.UNPIN_FOR_ALL).catch(e => {
      __LOG__(4, undefined, new Error())`Error while unpinning a message: ${e}`;
    });
  };
  const Ya = () => {
    const e = (0, xe.unproxy)(vt);
    y.Cmd.sendStarMsgs(Fn, [e]);
  };
  const za = () => {
    const e = (0, xe.unproxy)(vt);
    y.Cmd.sendUnstarMsgs(Fn, [e]);
  };
  const Ka = function () {
    var e = (0, r.default)(function* () {
      try {
        yield (0, q.runKeepInChatUX)((0, xe.unproxy)(vt), Ve.KIC_ENTRY_POINT_TYPE.CHAT);
      } catch (t) {
        var e;
        __LOG__(2)`Keep operation not complete. Reason: ${(e = t.reason) !== null && e !== undefined ? e : "unknown"}`;
      }
    });
    return function () {
      return e.apply(this, arguments);
    };
  }();
  const Qa = function () {
    var e = (0, r.default)(function* () {
      try {
        yield (0, q.runUndoKeepInChatUX)((0, xe.unproxy)(vt), Ve.KIC_ENTRY_POINT_TYPE.CHAT);
      } catch (t) {
        var e;
        __LOG__(2)`UndoKeep operation not complete. Reason: ${(e = t.reason) !== null && e !== undefined ? e : "unknown"}`;
      }
    });
    return function () {
      return e.apply(this, arguments);
    };
  }();
  const Xa = () => {
    (0, N.addStickerMsgsToFavorites)([(0, xe.unproxy)(vt)]);
  };
  const Za = () => {
    (0, N.removeStickerMsgFromFavorites)((0, xe.unproxy)(vt));
  };
  const Ja = e => {
    if (zn.current) {
      B.default.focus(zn.current, e);
    }
  };
  const $a = (0, gt.default)(() => {
    if ((0, te.messageListA11yRedesignEnabled)()) {
      Ja({
        preventScroll: true
      });
    }
  });
  const er = (0, gt.default)(() => {
    if (Dt) {
      $a();
    }
  });
  const tr = (0, gt.default)(() => {
    $a();
    Jn(null);
    if (Dt) {
      ra(false);
    }
  });
  const nr = (0, gt.default)(() => {
    $a();
    ea(null);
    if (Dt) {
      fa(false);
    }
    Ra();
  });
  const ar = (0, gt.default)(() => {
    $a();
    na(null);
    if (Dt) {
      fa(false);
    }
    Ra();
  });
  const rr = () => {
    $a();
  };
  const or = e => {
    Se.UiRevokeActionHelper.startSession();
    if (e) {
      e.stopPropagation();
    }
    if (wt) {
      wt((0, xe.unproxy)(vt), !ia, e);
    } else {
      __LOG__(4, undefined, new Error(), true)`no onMessageSelect`;
      SEND_LOGS("wrapper-onSelectClick");
    }
  };
  const lr = () => (0, o.default)(zn.current, "containerRef.current");
  const ir = () => {
    const e = Vn.current;
    const t = Hn.current;
    if (e) {
      la(true);
      if (Bn) {
        const e = Yn.current;
        j.default.indicateFocus(e == null ? undefined : e.getAnchorRef().current, Ye.default.highlightAnimation);
        j.default.indicateFocus(e == null ? undefined : e.getMetaRef().current, Ye.default.highlightAnimation);
        j.default.indicateFocus(t, Ye.default.highlightAnimation);
      } else {
        j.default.indicateFocus(e, Ye.default.highlightAnimation);
        j.default.indicateFocus(t, Ye.default.highlightAnimation);
      }
      Rt(e, "animationend", () => {
        la(false);
      });
      if (Mt) {
        Ja({
          preventScroll: true
        });
      }
    }
  };
  const ur = e => {
    let t;
    if (vn === ie.MSG_TYPE.CIPHERTEXT) {
      t = ot.fbt._("Wait until this message is fully delivered before forwarding.", null, {
        hk: "2idST1"
      });
    } else if (jt) {
      t = ot.fbt._("Unable to forward unsent message.", null, {
        hk: "2P62jf"
      });
    } else if (on) {
      t = ot.fbt._({
        "*": "Wait until the messages finish sending and displays a checkmark before forwarding.",
        _1: "Wait until the message finishes sending and displays a checkmark before forwarding."
      }, [ot.fbt._plural(1)], {
        hk: "Q1oiD"
      });
    }
    if (t) {
      ne.ModalManager.open(lt.default.createElement(T.ConfirmPopup, {
        title: ot.fbt._("Can't Forward", null, {
          hk: "3fgR0v"
        }),
        onOK: () => ne.ModalManager.close(),
        okText: (0, x.default)("OK")
      }, t));
    } else {
      if (e && ka) {
        return void or();
      }
      ne.ModalManager.open(lt.default.createElement(F.ForwardMessageModalLoadable, {
        msgs: [(0, xe.unproxy)(vt)],
        onClose: () => ne.ModalManager.close()
      }), {
        transition: "modal-flow"
      });
    }
  };
  const sr = () => {
    ur(true);
  };
  const cr = () => {
    if (!(0, ae.canEnterEditingFlow)(vt)) {
      return;
    }
    const e = (0, U.default)(require("./632011.js"));
    ne.ModalManager.open(lt.default.createElement(e, {
      msg: vt
    }));
  };
  const dr = () => {
    (0, be.logRTAReportingEvent)({
      reportToAdminInteraction: qe.REPORT_TO_ADMIN_INTERACTION.CLICK_SEND_FOR_ADMIN_REVIEW,
      groupId: (0, G.getChat)(vt).id.user
    });
    ne.ModalManager.open(lt.default.createElement(Me.default, {
      msg: vt
    }));
  };
  const fr = (0, gt.default)(e => {
    if ((0, Ee.canReactToMessage)(e)) {
      ea({
        dirY: k.DirY.BOTTOM,
        dirX: rn && !Da ? k.DirX.LEFT : k.DirX.RIGHT,
        type: k.MenuType.ReactionPicker,
        menu: lt.default.createElement(ge.ReactionsPanel, {
          msgId: Vt.toString(),
          onSelection: t => {
            (0, Oe.sendReactionToMsg)(e, t).catch(() => {});
            nr();
          }
        }),
        flipOnRTL: true,
        anchor: Kn.current
      });
    }
  });
  const pr = (0, gt.default)(e => {
    if (!(0, Ee.canReactToMessage)(e)) {
      return;
    }
    if (!((0, G.getChat)(e).isCAG || (0, G.getChat)(e).isNewsletter)) {
      (0, ce.prepareChatForMessageSending)((0, G.getChat)(e));
    }
    const t = t => {
      if (t !== ke.MORE_REACTIONS) {
        (0, Oe.sendReactionToMsg)(e, t).catch(() => {});
      } else {
        self.setTimeout(() => {
          fr(e, zn.current);
        }, 150);
      }
      Ra();
      ar();
    };
    self.setTimeout(() => {
      var n;
      na({
        dirY: k.DirY.TOP,
        dirX: k.DirX.CENTER,
        type: k.MenuType.ReactionSendTray,
        menu: lt.default.createElement(De.SendReactionsTrayContainer, {
          selectedCallback: t,
          msg: e,
          onMouseEnter: Na,
          onMouseOver: Na,
          onMouseLeave: xa
        }),
        flipOnRTL: true,
        anchor: ((n = Kn.current) === null || n === undefined ? undefined : n.getBoundingClientRect().left) !== 0 ? Kn.current : Wn.current
      });
    }, 50);
  });
  const mr = () => {
    if (ta) {
      ar();
    } else {
      pr(vt);
    }
  };
  const hr = () => {
    var e;
    if ((e = Gn.current) === null || e === undefined) {
      return undefined;
    } else {
      return e.getRef();
    }
  };
  const gr = e => {
    const t = hr();
    if ((t == null ? undefined : t.handleKeyActivation) != null) {
      t.handleKeyActivation(e);
    }
  };
  const Er = (e, t) => {
    if (t && Zn) {
      Jn(null);
      ea(null);
      return void na(null);
    }
    const n = t ? Wn.current : e;
    const a = lt.default.createElement($e.MessageDropdownMenu, {
      msg: vt,
      onKeepClick: Ka,
      onUndoKeepClick: Qa,
      displayType: Ct,
      onMsgInfoClick: _a,
      onReplyClick: Ba,
      onPrivateReplyClick: Fa,
      onMessageDownloadClick: Ga,
      onBotPositiveFeedbackClick: Ua,
      onBotNegativeFeedbackClick: Wa,
      onStarClick: Ya,
      onUnstarClick: za,
      onFavoriteStickerClick: Xa,
      onUnfavoriteStickerClick: Za,
      onEditLabelClick: () => {
        if (ka) {
          or();
        } else {
          ne.ModalManager.open(lt.default.createElement(Q.ManageLabelFlowLoadable, {
            modelsToUpdate: [(0, xe.unproxy)(vt)],
            onClose: () => ne.ModalManager.close()
          }));
        }
      },
      onMessageDeleteClick: ja,
      onOpenContactChatClick: ya,
      onForwardClick: sr,
      onCopyFavoriteStickerClick: e => (0, w.copyImageToClipboard)(e),
      onOpenStickerPackClick: e => y.Cmd.openStickerPack(e),
      onReactionClick: () => pr(vt),
      onReportClick: () => {
        var e;
        var t;
        if ((0, G.getChat)(vt).isNewsletter) {
          ne.ModalManager.open(lt.default.createElement(ye.default, {
            chat: (0, G.getChat)(vt),
            msg: vt,
            spamFlow: Ne.SpamFlow.MessageMenu
          }));
        } else {
          ne.ModalManager.open(lt.default.createElement(Ce.default, {
            isMessage: true,
            isBizBot3p: (e = (t = (0, G.getChat)(vt).contact.businessProfile) === null || t === undefined ? undefined : t.isBizBot3p) !== null && e !== undefined && e,
            sender: vt.displayName(),
            onReport: () => {
              (0, Ie.sendMessageReport)(vt).finally(() => {
                ne.ModalManager.close();
              });
            },
            onReportBlock: () => {
              (0, Ie.sendMessageReportBlock)(vt).finally(() => {
                ne.ModalManager.close();
              });
            },
            onCancel: () => ne.ModalManager.close()
          }));
        }
      },
      onEditClick: cr,
      onRTAClick: dr,
      onPinClick: Va,
      onUnpinClick: qa,
      onNewsletterMessageLinkCopyClick: () => (0, ue.handleNewsletterMessageLinkCopyClick)(vt),
      onViewAllRepliesClick: Ta
    });
    Jn({
      menu: a,
      anchor: n,
      theme: D.ThemeOptions.COMPACT,
      autoFocus: Dt
    });
  };
  const vr = e => {
    var t;
    var n;
    const a = (0, xe.unproxy)(vt);
    if ((0, le.canReplyMsg)(a) && !St && ka && !Zn && !ta && !(e.target instanceof HTMLElement && ((e, t) => {
      let n = t;
      for (; n;) {
        if (n === e) {
          return true;
        }
        n = n.parentNode;
      }
      return false;
    })(Vn.current, e.target))) {
      Fn.composeQuotedMsg = a;
      if ((0, oe.getIsMetaBotResponse)(a) && Fn.canInvokeBot() && ((t = (n = Fn.getComposeContents()) === null || n === undefined ? undefined : n.text) !== null && t !== undefined ? t : "") === "") {
        const e = `${Te.ZWS}${hn.id.toString()}${Te.ZWS} `;
        S.ComposeBoxActions.paste(Fn, e);
      }
      S.ComposeBoxActions.focus(Fn);
      ir();
    }
  };
  const _r = () => {
    if (wa()) {
      ra(true);
      Er(undefined, true);
    }
  };
  const yr = e => {
    if (ia !== e) {
      ua(e);
    }
  };
  const Cr = (e, t) => {
    if (zn.current) {
      (0, O.scrollAt)(zn.current, undefined, t).then(e);
    }
  };
  const br = () => {
    vt.resend().catch(function (e) {
      __LOG__(2)`wrapper:resend failure: ${e}`;
    });
  };
  const Mr = () => {
    if (zn) {
      j.default.indicateFocus(zn.current, Ye.default.highlightMentionAnimation);
    }
  };
  (0, lt.useImperativeHandle)(t, () => ({
    focus: Ja,
    openContextMenu: _r,
    getContainerElement: lr,
    getMsgComponentRef: hr,
    resend: br
  }));
  const Sr = (0, ut.default)(vt, "change", () => (0, ae.canQuickForwardMsg)(vt));
  (0, dt.useListener)(vt, "revoked", () => {
    if (Zn) {
      tr();
    }
    if (ta) {
      ar();
    }
    if ($n) {
      nr();
    }
  });
  (0, dt.useListener)(window, "resize", It);
  (0, dt.useListener)(document, "selectionchange", () => {
    var e;
    var t;
    if (((e = (t = document.getSelection()) === null || t === undefined ? undefined : t.toString()) !== null && e !== undefined ? e : "") !== "") {
      Pa();
    }
  });
  (0, dt.useListener)(y.Cmd, "media_viewer_modal", Pa);
  const Tr = (0, at.shouldDisplayAuthor)({
    msg: vt,
    position: yt,
    displayType: Ct
  });
  let wr;
  const Ar = (0, te.messageListA11yRedesignEnabled)() && ka ? 0 : -1;
  if ((() => {
    const e = (0, te.messageListA11yRedesignEnabled)() && Ia();
    return wa() && !St && (aa && !oa || !!kt || !!Zn || e);
  })()) {
    wr = lt.default.createElement($.default, {
      msg: vt,
      hasAuthor: Tr,
      displayType: Ct,
      position: yt,
      key: "icon-context",
      onToggle: e => {
        Er(e);
      },
      role: "button",
      ariaLabel: ot.fbt._("Context Menu", null, {
        hk: "17twZE"
      }),
      tabIndex: Ar
    });
  }
  const Pr = lt.default.createElement("div", {
    className: Ye.default.menuAnchor,
    ref: Wn
  });
  let Or = null;
  const kr = (a = (0, ft.useMessageAriaDescription)(vt, ha)) !== null && a !== undefined ? a : undefined;
  if (!nn && e.selectable && (vt.type !== ie.MSG_TYPE.CHAT || vt.subtype !== m.BOT_TYPING_PLACEHOLDER_MSG_SUBTYPE)) {
    const e = Ct === P.DISPLAY_TYPE.GALLERY || Ct === P.DISPLAY_TYPE.GALLERY_LINKS ? "gallery" : null;
    Or = lt.default.createElement(Z.default, {
      checked: !!ia,
      onClick: or,
      msgTheme: e,
      ariaLabel: kr
    });
  }
  let Dr = null;
  var Ir;
  if (vn === ie.MSG_TYPE.STICKER && e.selectable) {
    Dr = lt.default.createElement("span", null, lt.default.createElement("div", {
      className: Ye.default.stickerWrapperContainer,
      onMouseEnter: (Ir = qn.current) === null || Ir === undefined ? undefined : Ir.startAnimation,
      onClick: or
    }));
  }
  let Rr = false;
  if (vn === ie.MSG_TYPE.CHAT) {
    const e = C.Code.match(Ft);
    Rr = e.length === 1 && e[0][4][0].length === Ft.length;
  }
  const Nr = Fn == null ? undefined : Fn.isPSA;
  const xr = (0, rt.shouldHaveTail)({
    chat: Fn,
    isNotification: nn,
    displayType: Ct,
    tailOverride: e.tailOverride,
    position: yt
  });
  const Lr = Bn && (!Tr || rn || !Jt && !fn) && (ka && (yt === ee.MsgPosition.FRONT || yt === ee.MsgPosition.SINGLE) || !ka);
  const jr = !e.selectable && (ka || Ct === P.DISPLAY_TYPE.MSG_INFO || Ct === P.DISPLAY_TYPE.STARRED_MSGS || Ct === P.DISPLAY_TYPE.REPORTED_MSG);
  const Br = Wt && !nn && !Xt;
  const Fr = jr && Sr;
  const Gr = jr && Qt && vn === ie.MSG_TYPE.CHAT;
  const Ur = Tn != null && !Fn.id.isBot() && vt.invokedBotWid == null;
  let Wr;
  let Hr;
  let Vr;
  const qr = rn && !Da;
  if (!Bn && vt && ka && (0, Ee.shouldShowReactionBubble)(vt, s.AddOnBubbleType.DEFAULT)) {
    Hr = lt.default.createElement(he.ReactionBubbleContainer, {
      msgIds: [Vt.toString()],
      isOutgoingMsg: qr,
      hasReaction: On,
      onDetailsPaneClosed: rr
    });
  }
  if (!Bn && vt && ka && !nn && Ct === P.DISPLAY_TYPE.ANNOUNCEMENT && (0, M.isCommentMessagesEnabled)()) {
    Vr = lt.default.createElement(b.default, {
      parentMsg: vt
    });
  }
  if (!(Hr == null && Vr == null)) {
    Wr = lt.default.createElement(u.default, {
      isOutgoingMsg: qr,
      bubbleType: vn === ie.MSG_TYPE.IMAGE ? s.AddOnBubbleType.IMAGE_MSG : s.AddOnBubbleType.DEFAULT
    }, Hr, Vr);
  }
  const Yr = (0, et.isMessageExemptedFromDisappearing)(Fn, vt);
  const zr = Ur || Br || Fr || Gr || Yr;
  const Kr = (0, _.classnamesConvertMeToStylexPlease)({
    [Ye.default.row]: true,
    [Ye.default.msgBottomMargin]: true,
    [Ye.default.msgContinuation]: !(yt !== ee.MsgPosition.FRONT && yt !== ee.MsgPosition.MID || bn && Cn || Da)
  });
  const Qr = (0, _.classnamesConvertMeToStylexPlease)({
    [Ye.default.msgDeletePending]: (0, te.accidentalDeleteMessageEnabled)() && Rn,
    [Ye.default.msgPSA]: Ct !== P.DISPLAY_TYPE.STARRED_MSGS && Ct !== P.DISPLAY_TYPE.REPORTED_MSG && Nr,
    [Ye.default.msgSystem]: nn,
    [Ye.default.msgGallery]: Oa,
    [Ye.default.wideDisplay]: Da,
    [Ye.default.msgInfo]: Ct === P.DISPLAY_TYPE.MSG_INFO,
    [Ye.default.msgWithQuickAction]: zr,
    "message-out": !nn && rn || Ct === P.DISPLAY_TYPE.MSG_INFO,
    "message-in": !nn && !rn,
    [z.LIST_FOCUSABLE_ITEM_CLASS_NAME]: Mt,
    [Ye.default.wrapperProfilePictureDisplayed]: !nn && Ct !== P.DISPLAY_TYPE.ANNOUNCEMENT,
    [Ye.default.wrapperAdjustedOneOnOneChat]: !Fn.isGroup,
    [Ye.default.msgAnnouncement]: Da,
    [Ye.default.msg]: true,
    [Ye.default.animateMsg]: (0, l.getABPropConfigValue)("web_animate_messages"),
    [Ye.default.wrapperChannelAlerts]: Ct === P.DISPLAY_TYPE.CHANNEL_ALERTS_MSGS
  });
  const Xr = ze.NO_PADDING_SUBTYPES.includes(vt.subtype) && (0, M.communityRichSystemMessageEnabled)();
  const Zr = (0, _.classnamesConvertMeToStylexPlease)(Ye.default.message, function (e, t, n) {
    if (e.isViewOnce) {
      return Ye.default.messageChat;
    }
    switch (e.type) {
      case ie.MSG_TYPE.NOTIFICATION_TEMPLATE:
        if (ze.NON_E2E_NOTIFICATION_SUBTYPES.includes(e.subtype)) {
          return Ye.default.messageNonE2ENotification;
        } else if ((0, oe.getIsBizNotification)(e)) {
          return Ye.default.messageBizNotification;
        } else {
          return undefined;
        }
      case ie.MSG_TYPE.E2E_NOTIFICATION:
        if (e.subtype === "encrypt" && (0, v.isSupportGroupOrSupportAdmin)((0, G.getChat)(e)) || e.subtype === "chat_psa") {
          return Ye.default.messageNonE2ENotification;
        } else {
          return Ye.default.messageE2ENotification;
        }
      case ie.MSG_TYPE.GROUPS_V4_INVITE:
        return Ye.default.messageChat;
      case ie.MSG_TYPE.CHAT:
        if (n) {
          return Ye.default.messageTransparent;
        } else if ((0, We.default)(e)) {
          if ((0, P.isWideDisplay)(t)) {
            return Ye.default.messageVideoLinkPreviewWide;
          } else {
            return Ye.default.messageVideoLinkPreview;
          }
        } else {
          return Ye.default.messageChat;
        }
      case ie.MSG_TYPE.REVOKED:
        return Ye.default.messageChat;
      case ie.MSG_TYPE.LOCATION:
        if (e.isLive) {
          return Ye.default.messageLiveLocation;
        } else {
          return Ye.default.messageLocation;
        }
      case ie.MSG_TYPE.VCARD:
        return Ye.default.messageVcard;
      case ie.MSG_TYPE.CIPHERTEXT:
        return (0, _.classnamesConvertMeToStylexPlease)(Ye.default.messageChat, Ye.default.messagePlaceholder);
      case ie.MSG_TYPE.MULTI_VCARD:
        return Ye.default.messageMultiVcard;
      case ie.MSG_TYPE.IMAGE:
        return Ye.default.messageImage;
      case ie.MSG_TYPE.PRODUCT:
        return Ye.default.messageProduct;
      case ie.MSG_TYPE.STICKER:
        if (n) {
          return Ye.default.messageTransparent;
        } else {
          return Ye.default.messageSticker;
        }
      case ie.MSG_TYPE.VIDEO:
        if (e.mediaData.isGif) {
          return Ye.default.messageGif;
        } else {
          return Ye.default.messageVideo;
        }
      case ie.MSG_TYPE.AUDIO:
        return Ye.default.messageAudio;
      case ie.MSG_TYPE.PTT:
        return Ye.default.messagePTT;
      case ie.MSG_TYPE.DOCUMENT:
        return Ye.default.messageDocument;
      case ie.MSG_TYPE.TEMPLATE_BUTTON_REPLY:
      case ie.MSG_TYPE.BUTTONS_RESPONSE:
      case ie.MSG_TYPE.LIST_RESPONSE:
        return Ye.default.messageChat;
      case ie.MSG_TYPE.POLL_CREATION:
        return (0, _.classnamesConvertMeToStylexPlease)(Ye.default.messageChat, (0, P.isWideDisplay)(t) ? Ye.default.pollAnnouncement : Ye.default.pollMessage);
      case ie.MSG_TYPE.PTV:
        return (0, _.classnamesConvertMeToStylexPlease)(Ye.default.messageChat, Ye.default.ptvMessage, (0, P.isWideDisplay)(t) ? Ye.default.ptvAnnouncement : null, (0, pe.isPtvReceivingEnabled)() ? null : Ye.default.messagePlaceholder);
      case ie.MSG_TYPE.REQUEST_PHONE_NUMBER:
        return Ye.default.messageChat;
      case ie.MSG_TYPE.ORDER:
        return Ye.default.messageProduct;
      case ie.MSG_TYPE.LIST:
        return Ye.default.messageList;
      case ie.MSG_TYPE.UNKNOWN:
        return (0, _.classnamesConvertMeToStylexPlease)(Ye.default.messageChat, Ye.default.messagePlaceholder);
      case ie.MSG_TYPE.DEBUG:
      default:
        return;
    }
  }(vt, Ct, Bn), {
    [Ye.default.messageSystem]: (0, oe.getIsNotification)(vt),
    [Ye.default.messageSystemNoPadding]: Xr,
    [Ye.default.messageCode]: Rr,
    [Ye.default.hasTail]: xr,
    "tail-override-left": e.tailOverride === "left",
    "tail-override-right": e.tailOverride === "right",
    [Ye.default.tailOverrideHide]: Lr
  });
  const Jr = (0, _.classnamesConvertMeToStylexPlease)({
    [Ye.default.messageBackground]: !Bn,
    [Ye.default.hasBorderBox]: !nn && !Bn,
    [Ye.default.hasUrlCallButtons]: bn && yn && !Cn,
    [Ye.default.msgBubbleAnimation]: (0, p.shouldAnimateAsBotStream)(vt)
  });
  if (Qn.current && !Vn.current) {
    return lt.default.createElement("div", {
      className: Ye.default.placeholder,
      ref: Vn
    });
  }
  let $r;
  let eo;
  let to;
  let no;
  let ao;
  $r = Zn ? "none" : an ? "pop-fast-reverse" : "pop-fast";
  if (Zn) {
    eo = lt.default.createElement(Fe.UIE, {
      displayName: "MsgContextMenu",
      escapable: true,
      popable: true,
      dismissOnWindowResize: true,
      requestDismiss: tr
    }, lt.default.createElement(Ge.default, {
      contextMenu: Zn
    }));
  }
  if ($n) {
    to = lt.default.createElement(Fe.UIE, {
      displayName: "MsgReactionPicker",
      escapable: true,
      popable: true,
      dismissOnWindowResize: true,
      requestDismiss: nr
    }, lt.default.createElement(Ge.default, {
      contextMenu: $n
    }));
  } else if (ta) {
    to = lt.default.createElement(Fe.UIE, {
      displayName: "MsgReactionTray",
      escapable: true,
      popable: true,
      dismissOnWindowResize: true,
      requestDismiss: ar
    }, lt.default.createElement(Ge.default, {
      contextMenu: ta
    }));
  }
  if (e.isFocusedMsg) {
    no = lt.default.createElement(Ze.WhileFocusedListener, {
      parent: {
        scrollMsg: Cr,
        highlight: ir,
        highlightMention: Mr
      }
    });
  }
  if (bt) {
    ao = lt.default.createElement(Ze.SelectionListener, {
      parent: {
        onSelectChange: yr
      },
      msgId: Vt.toString(),
      selectedMessages: bt
    });
  }
  const ro = [];
  if (zr) {
    const e = lt.default.createElement(tt.default, {
      showQuickEphemeralInfoAction: Br,
      onOpenEphemeralInfoPopup: ba,
      showQuickBizPrivacyInfoAction: Ur,
      onOpenBizPrivacyInfoPopup: Ma,
      showQuickForwardAction: Fr,
      onOpenForwardFlow: ur,
      showQuickSearchAction: Gr,
      onOpenWebSearchFlow: Ca,
      showQuickEphemeralExemptionInfoAction: Yr,
      onOpenEphemeralExemptionInfoPopup: Sa
    });
    ro.push(e);
  }
  let oo;
  let lo;
  let io;
  let uo;
  if ((0, Ee.canReactToMessage)(vt)) {
    ro.push(lt.default.createElement(nt.default, {
      ref: Kn,
      msg: vt,
      showButton: pa,
      onToggleReactionTray: mr
    }));
  }
  if ((0, le.canReplyMsg)(vt) && !Da && (0, c.messageQuickReplyEnabled)()) {
    oo = pa === true ? lt.default.createElement(we.Round, {
      theme: we.RoundTheme.QuickAction,
      onClick: vr,
      title: ot.fbt._("Reply", null, {
        hk: "2W8swU"
      })
    }, lt.default.createElement(ve.ReplyChatIcon, {
      className: Ye.default.messageQuickReplyButtonColor,
      width: Be.UA.isElectron ? 25 : 20
    })) : null;
    lo = lt.default.createElement("div", null, oo);
  }
  ro.push(lo);
  if (cn) {
    io = lt.default.createElement(Ze.MediaListener, {
      forceUpdate: It,
      mediaData: cn
    });
  }
  if (xr) {
    let t;
    t = e.tailOverride === "left" ? (0, Qe.getTailIcon)(ze.MSG_DIRECTION.IN) : e.tailOverride === "right" ? (0, Qe.getTailIcon)(ze.MSG_DIRECTION.OUT) : (0, Qe.getTailIcon)(rn);
    uo = lt.default.createElement(t, {
      className: Ye.default.tail,
      containerRef: Hn
    });
  }
  const so = vt.safe();
  const co = so.type === ie.MSG_TYPE.INTERACTIVE ? lt.default.createElement(V.default, {
    msg: so,
    mainMsgWrapperRef: Un
  }) : null;
  let fo;
  let po;
  if (bn && yn) {
    fo = lt.default.createElement(d.default, {
      msg: vt,
      chat: Fn
    });
  } else if (Pn != null && Pn.length > 0 && Ct !== P.DISPLAY_TYPE.STARRED_MSGS && Ct !== P.DISPLAY_TYPE.REPORTED_MSG) {
    fo = lt.default.createElement(X.default, {
      msg: vt
    });
  }
  if (nn || yt === ee.MsgPosition.MID) {
    po = null;
  } else if (rn && vn !== ie.MSG_TYPE.POLL_CREATION) {
    po = lt.default.createElement(i.InvisibleLabel, null, ot.fbt._("You:", null, {
      hk: "23aeBt"
    }));
  } else if (!Jt) {
    po = lt.default.createElement(i.InvisibleLabel, null, ot.fbt._("{author}:", [ot.fbt._param("author", vt.displayName())], {
      hk: "4BX1T3"
    }));
  }
  let mo = null;
  if (zt) {
    mo = lt.default.createElement(i.InvisibleLabel, null, ot.fbt._("This is a disappearing message", null, {
      hk: "2ZKFVj"
    }));
  }
  const ho = [P.DISPLAY_TYPE.CONVERSATION, P.DISPLAY_TYPE.ALL_REPLIES];
  const go = Jt && !rn && (!!xr || vt.type === ie.MSG_TYPE.PTV) && ho.includes(Ct) && e.selectable !== true && (hn == null ? undefined : hn.id) != null ? lt.default.createElement(W.GroupChatProfilePicture, {
    userContact: hn,
    chatWid: Fn.id
  }) : null;
  const Eo = lt.default.createElement(Y.HotKeys, {
    className: Kr,
    "data-id": Vt.toString(),
    handlers: (() => {
      let e;
      let t;
      if (Lt && Re.ServerProps.pttPlaybackSpeedEnabled) {
        e = e => {
          e.preventDefault();
          e.stopPropagation();
          fe.PttPrefs.increasePlaybackRateFor(Vt);
        };
        t = e => {
          e.preventDefault();
          e.stopPropagation();
          fe.PttPrefs.decreasePlaybackRateFor(Vt);
        };
      }
      return {
        enter: gr,
        space: gr,
        "shift+>": e,
        "shift+<": t
      };
    })(),
    onDoubleClick: vr,
    ref: zn,
    tabIndex: -1,
    onMouseOver: Na,
    onMouseEnter: Na,
    onFocus: La,
    onBlur: La,
    onMouseLeave: xa
  }, lt.default.createElement("div", {
    "aria-label": Ea,
    className: Qr,
    ref: Un
  }, lt.default.createElement(He.default, {
    transitionName: "delay-leave"
  }, Or), lt.default.createElement("div", {
    className: Zr,
    onContextMenu: e => {
      e.stopPropagation();
    },
    onMouseOver: Aa,
    onMouseEnter: Aa,
    onMouseLeave: () => {
      if (wa()) {
        Pa();
      }
    }
  }, uo, go, ln && null, lt.default.createElement(re.default, {
    displayType: Ct,
    msg: vt
  }), Dr, lt.default.createElement(g.default, {
    shouldAnimation: (0, p.shouldAnimateAsBotStream)(vt),
    lastBotEditBodyLength: vt.lastBotEditBodyLength,
    bubbleRef: Vn,
    msg: vt,
    componentClass: Jr
  }, po, (vo = Tr, lt.default.createElement(I.ErrorBoundary, {
    name: "msg"
  }, lt.default.createElement(H.default.Provider, {
    value: Fn.groupMetadata
  }, lt.default.createElement(J.MsgComponent, {
    chat: Fn,
    displayAuthor: vo,
    displayType: Ct,
    hover: aa,
    isMsgVisible: Tt,
    maxWidth: Xn.current,
    msg: vt,
    ref: Gn,
    position: yt,
    getSequentialMsg: At,
    onProductClick: Pt,
    onMessageClick: Ot,
    forwardStickerRef: qn,
    stickerLikeBubbleContainerRef: Yn
  })))), lt.default.createElement(He.default, {
    transitionName: $r
  }, wr), Pr), lt.default.createElement(Je.MessageActionButtonsRow, {
    isOutgoingMsg: !Da && rn,
    key: `msg-acton-button-row-${Vt.toString()}`,
    isMsgGallery: Oa,
    hasReaction: On,
    messageActionButtons: ro
  }), fo, mo), Wr, to, eo, no, ao, io), co);
  var vo;
  if ((0, te.messageListA11yRedesignEnabled)()) {
    return lt.default.createElement(R.default.Provider, {
      value: er
    }, lt.default.createElement(Ke.default.Provider, {
      value: Ct
    }, lt.default.createElement(K.default, {
      role: "row"
    }, Eo)));
  } else {
    return Eo;
  }
});
exports.Wrapper = yt;
yt.displayName = "Wrapper";