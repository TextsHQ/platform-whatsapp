var a = require("../app/530066.js").default;
var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComposeBox = undefined;
var o = r(require("../vendor/348926.js"));
var l = r(require("../vendor/81109.js"));
var i = require("../app/898817.js");
var u = require("../app/122583.js");
var s = r(require("../app/670983.js"));
var c = require("../app/685639.js");
var d = require("../app/958808.js");
var f = require("../app/632157.js");
var p = require("../app/287461.js");
var m = require("./95112.js");
var h = require("./855637.js");
var g = require("./29638.js");
var E = require("../app/72696.js");
var v = require("./358380.js");
var _ = require("../app/474596.js");
var y = require("./687014.js");
var C = require("../app/354458.js");
var b = require("../app/169437.js");
var M = require("./405994.js");
var S = require("./628445.js");
var T = require("../app/396574.js");
var w = require("../app/780549.js");
var A = require("../app/789437.js");
var P = require("../app/174834.js");
var O = r(require("./575363.js"));
var k = require("./261821.js");
var D = r(require("./798006.js"));
var I = require("./743839.js");
var R = r(require("../app/846870.js"));
var N = r(require("../app/677102.js"));
var x = r(require("../app/152583.js"));
var L = r(require("../app/507511.js"));
var j = require("../app/177594.js");
var B = require("../app/900316.js");
var F = require("../app/235630.js");
var G = require("./934740.js");
var U = r(require("./688988.js"));
var W = require("../app/698210.js");
var H = require("../app/798202.js");
var V = r(require("../app/988410.js"));
var q = require("./56212.js");
var Y = require("../app/81644.js");
var z = at(require("../app/446303.js"));
var K = require("./331740.js");
var Q = r(require("../app/842156.js"));
var X = r(require("../app/756680.js"));
var Z = r(require("../app/820275.js"));
var J = require("./597820.js");
var $ = require("./335667.js");
var ee = require("../app/483460.js");
var te = require("../app/937484.js");
var ne = at(require("../app/288057.js"));
var ae = require("../app/708761.js");
var re = require("../app/373070.js");
var oe = require("../app/73225.js");
var le = require("../app/12074.js");
var ie = require("../app/95589.js");
var ue = require("./179268.js");
var se = require("../app/639880.js");
var ce = require("../app/814843.js");
var de = require("../app/533494.js");
var fe = r(require("./998970.js"));
var pe = require("./758721.js");
var me = require("./274851.js");
var he = require("./191117.js");
var ge = require("../main-chunk/150610.js");
var Ee = require("../app/858486.js");
var ve = require("../app/383296.js");
var _e = require("./941584.js");
var ye = require("../app/498703.js");
var Ce = require("../app/163139.js");
var be = require("./32364.js");
var Me = require("./414493.js");
var Se = require("../app/152189.js");
var Te = require("./204875.js");
var we = require("../main-chunk/931109.js");
var Ae = require("../app/625786.js");
var Pe = require("../app/390737.js");
var Oe = require("../app/238669.js");
var ke = require("../app/392632.js");
var De = require("./508228.js");
var Ie = r(require("./107233.js"));
var Re = r(require("../app/395967.js"));
var Ne = require("../app/757453.js");
var xe = require("../app/459857.js");
var Le = r(require("../app/844453.js"));
var je = require("./741571.js");
var Be = require("../app/169467.js");
var Fe = require("./216579.js");
var Ge = require("./843274.js");
var Ue = require("../app/574819.js");
var We = require("../vendor/548360.js");
var He = at(require("../vendor/667294.js"));
var Ve = r(require("../app/829686.js"));
var qe = r(require("../app/710629.js"));
var Ye = require("../app/140455.js");
var ze = r(require("../app/524578.js"));
var Ke = r(require("../app/969651.js"));
var Qe = r(require("../app/637660.js"));
var Xe = require("../app/808446.js");
var Ze = require("../app/655241.js");
var Je = r(require("./157558.js"));
var $e = r(require("../app/558532.js"));
var et = require("./636729.js");
var tt = r(require("../app/17533.js"));
function nt(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (nt = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function at(e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = nt(t);
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
const rt = /^https?:\/\/media\.giphy\.com\/media\/([a-zA-Z0-9]+)/;
const ot = (0, Se.getIntFromStylesProp)(O.default, "-overlay-border-left");
const lt = require("../vendor/76672.js").Mirrored(["ATTACHMENT_MENU", "OTHER"]);
const it = (0, He.forwardRef)((e, t) => {
  var n;
  const {
    onPageUpDown: r,
    onComposeHeightChange: Se
  } = e;
  const nt = (0, Ke.default)();
  const at = (0, Ze.useModelValues)(e.chat, ["id", "trusted", "composeContents", "composeQuotedMsg", "isPSA", "isGroup", "pttRecordingSession", "shouldAppearInList", "presence", "contact", "attachMediaContents", "quotedMsgAdminGroupJid", "quotedMsgAdminGroupSubject", "quotedMsgAdminParentGroupJid", "composeQuotedMsgRemoteJid", "isAutoMuted", "isNewsletter"]);
  const it = (0, et.useSetModelValue)(at, "composeQuotedMsg");
  const ut = (0, et.useSetModelValue)(at, "quotedMsgAdminGroupJid");
  const st = (0, et.useSetModelValue)(at, "composeQuotedMsgRemoteJid");
  const ct = (0, et.useSetModelValue)(at, "pttRecordingSession");
  const dt = (0, He.useMemo)(() => at.getComposeContents(), [at]);
  const ft = (0, He.useRef)(dt == null ? undefined : dt.omittedURL);
  const [pt, mt] = (0, He.useState)(null);
  const ht = (0, He.useRef)(dt == null ? undefined : dt.omittedURL);
  const gt = (0, He.useRef)((dt == null ? undefined : dt.text) || "");
  const Et = () => {
    const e = (0, A.removeCodeBlocks)(gt.current);
    return z.findLinks(e, true, (0, xe.assertGetMe)())[0];
  };
  const {
    isKeyboardUser: vt
  } = (0, Re.default)();
  const [_t, yt] = (0, He.useState)(null);
  const Ct = () => at.id.isBot() || _t != null;
  const bt = (0, De.useBusinessProfile)((0, C.isBizBot3pAvailable)() ? e.chat.id : null, ["commands", "prompts"]);
  const Mt = Ct() ? b.BotProfileCollection.get(_t != null ? _t : at.id) : null;
  const St = (bt == null ? undefined : bt.commands) || C.isMetaBotCommandsEnabled && (Mt == null ? undefined : Mt.commands) || null;
  const Tt = (0, He.useRef)([]);
  const wt = (0, Qe.default)(() => new a());
  const [At, Pt] = (0, He.useState)(false);
  const Ot = function (e, t) {
    const n = (0, ze.default)(e, ["change:msgsLength"], () => {
      var t;
      const n = (0, C.isBotEnabled)() && e.id.isBot();
      const a = (t = e.msgs.last()) === null || t === undefined ? undefined : t.subtype;
      return n && (e.msgsLength === 0 || e.msgsLength === 1 && a === "bot_init");
    });
    const a = (0, ze.default)(e, ["change:msgsLength"], () => {
      if (!(0, C.isBizBot3pAvailable)() || !t || t.length === 0) {
        return false;
      }
      const n = e.msgs.last();
      if (!n || n.subtype === "biz_bot_3p_disclosure") {
        return true;
      }
      if (n.type === re.MSG_TYPE.CHAT && !(0, xe.isMeAccount)(n.from)) {
        const t = e.msgs.at(e.msgs.length - 2);
        if ((t == null ? undefined : t.subtype) === "biz_bot_3p_disclosure") {
          return true;
        }
      }
      return !e.msgs.some(e => e.type !== re.MSG_TYPE.NOTIFICATION_TEMPLATE && e.type !== re.MSG_TYPE.E2E_NOTIFICATION);
    }, [t]);
    return n || a;
  }(e.chat, bt == null ? undefined : bt.prompts);
  const kt = () => {
    Tt.current = [];
    wt.current.abort();
    wt.current = new a();
    if (At) {
      Pt(false);
    }
  };
  const Dt = function () {
    let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Oe.DismissReason.UIM_INTERACTION;
    if (e !== Oe.DismissReason.LIFECYCLE) {
      if ((0, p.getABPropConfigValue)("link_preview_shimmer_enabled")) {
        kt();
      }
      if (pt) {
        ht.current = ft.current;
        mt(null);
      }
    }
  };
  const It = () => {
    ft.current = null;
    Dt();
  };
  const [Rt, Nt] = (0, He.useState)(!!gt.current);
  const [xt, Lt] = (0, He.useState)(dt == null ? undefined : dt.ctwaContextLinkData);
  const jt = (0, He.useRef)(null);
  const Bt = (0, He.useRef)(null);
  const Ft = (0, He.useRef)(null);
  const Gt = (0, He.useRef)(null);
  const Ut = (0, He.useRef)(null);
  const Wt = (0, He.useRef)(null);
  const Ht = (0, He.useRef)(0);
  const Vt = (0, He.useRef)(false);
  const qt = (0, He.useRef)(false);
  const Yt = (0, He.useRef)(null);
  const zt = (0, tt.default)(() => {
    if (!Rt || xt) {
      return void It();
    }
    const e = Et();
    if (!e) {
      return void It();
    }
    const t = e.url;
    if (ft.current && ft.current === t) {
      return;
    }
    ft.current = t;
    ht.current = null;
    const n = wt.current.signal;
    const a = (0, q.genMinimalLinkPreview)(e, true);
    if ((0, p.getABPropConfigValue)("link_preview_shimmer_enabled")) {
      mt(a);
    }
    const r = (0, K.getLinkPreview)(e, at).then(t => {
      if (n.aborted) {
        throw new i.AbortError();
      }
      if (t && ft.current === t.url && t.data && (t.data.title || t.data.description)) {
        mt(t);
        return ((e, t) => {
          if (e.data.thumbnailDirectPath !== undefined) {
            __LOG__(2)`link preview: using an existing thumbnail mms`;
            const t = (0, I.getCachedPreview)(e);
            mt(n => (n == null ? undefined : n.url) !== e.url ? n : t);
            return Promise.resolve();
          }
          __LOG__(2)`link preview: uploading new thumbnail mms`;
          const {
            thumbnailHQ: n
          } = e.data;
          if (n) {
            return X.default.createFromBase64Jpeg(n).then(e => (0, Z.default)({
              thumbnail: e,
              mediaType: at.isNewsletter ? ae.MEDIA_TYPES.NEWSLETTER_THUMBNAIL_LINK : ae.MEDIA_TYPES.THUMBNAIL_LINK,
              mediaKeyInfo: (0, L.default)(),
              uploadOrigin: (0, Q.default)(at),
              forwardedFromWeb: false,
              signal: t,
              timeout: R.default.MMS_THUMBNAIL_UPLOAD_TIMEOUT,
              isViewOnce: false
            })).then(t => {
              const n = t.mediaEntry;
              if (n) {
                mt(a => {
                  if ((a == null ? undefined : a.url) !== e.url) {
                    return a;
                  }
                  const r = {
                    mediaKey: n.mediaKey,
                    mediaKeyTimestamp: n.mediaKeyTimestamp,
                    thumbnailDirectPath: n.directPath,
                    thumbnailSha256: t.filehash,
                    thumbnailEncSha256: n.encFilehash
                  };
                  return (0, l.default)((0, l.default)({}, e), {}, {
                    data: (0, l.default)((0, l.default)({}, e.data), r)
                  });
                });
              }
            }).catch((0, i.catchAbort)(() => {})).catch(() => {
              __LOG__(2)`Full preview upload has failed: `;
            });
          } else {
            return Promise.resolve();
          }
        })(t, n);
      }
      if ((0, p.getABPropConfigValue)("link_preview_shimmer_enabled") && a != null) {
        mt((0, q.genMinimalLinkPreview)(e));
      }
    });
    Tt.current.push(r);
    r.catch((0, u.filteredCatch)(ne.Unmount, () => {})).catch((0, i.catchAbort)(() => {}));
  });
  const Kt = (0, Qe.default)(() => new c.ShiftTimer(zt));
  const Qt = (0, He.useRef)({
    text: "",
    parsableText: "",
    data: {}
  });
  const Xt = (0, He.useRef)(null);
  const [Zt, Jt] = (0, He.useState)();
  const [$t, en] = (0, He.useState)(at.pttRecordingSession);
  const [tn, nn] = (0, He.useState)(at.pttRecordingSession != null);
  const [an, rn] = (0, He.useState)(null);
  const [on, ln] = (0, He.useState)(N.default.get().textsize);
  const [un, sn] = (0, He.useState)(dt == null ? undefined : dt.ctwaContext);
  const [cn, dn] = (0, He.useState)(() => !at.trusted && !e.chat.msgs.getModelsArray().some(e => e.subtype === "contact_info_card"));
  const fn = (0, ie.getChatAutoMutedNuxKey)(at.id.toString());
  const [pn, mn] = (0, Je.default)(fn);
  const [hn, gn] = (0, He.useState)(false);
  const En = (0, Ve.default)(() => {
    new g.AutoMuteLargeGroupActionsWamEvent({
      autoMuteAction: je.AUTO_MUTE_ACTION_TYPE.USER_DIALOG_VIEW,
      autoMuteGroupSize: at.getParticipantCount()
    }).commit();
    gn(true);
  });
  const vn = function () {
    let e = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
    new g.AutoMuteLargeGroupActionsWamEvent({
      autoMuteAction: e === true ? je.AUTO_MUTE_ACTION_TYPE.USER_ADMIT_BY_MESSAGE_SEND : je.AUTO_MUTE_ACTION_TYPE.USER_ADMIT_BY_OK,
      autoMuteGroupSize: at.getParticipantCount()
    }).commit();
    mn();
    gn(false);
  };
  const [_n, yn] = (0, He.useState)({
    handleOnce: [],
    handleMultiple: []
  });
  (0, Xe.useListener)(_.BlocklistCollection, ["add", "remove", "reset"], nt);
  const Cn = () => {
    const e = gt.current;
    if ((0, j.draftMessageEnabled)()) {
      var t;
      const n = at.getComposeContents();
      if (n == null && e.trim() === "") {
        return;
      }
      if ((n == null || (t = n.text) === null || t === undefined ? undefined : t.trim()) === e.trim()) {
        return;
      }
    }
    const n = {
      text: e,
      timestamp: (0, f.unixTime)()
    };
    const {
      current: a
    } = ht;
    if (a != null) {
      n.omittedURL = a;
    }
    if (un != null) {
      n.ctwaContext = un;
    }
    if (xt != null) {
      n.ctwaContextLinkData = xt;
    }
    at.setComposeContents(n);
  };
  const bn = e => {
    Cn();
    It();
    const t = e.sourceUrl;
    if (t != null && t !== "") {
      (0, v.fetchCtwaContextData)(e).then(e => {
        sn(e);
        Cn();
      }).catch(e => {
        __LOG__(3)`Unable to retrieve CTWA context data, error: ${e}`;
      });
    }
  };
  (0, He.useEffect)(() => {
    Ht.current = (0, s.default)(Ft.current, "composeBlockRef.current").clientHeight;
    Kt.current.debounceAndCap(50, 50);
    if (!(!xt || un && un.sourceUrl === xt.sourceUrl)) {
      sn(null);
      bn(xt);
    }
  }, []);
  (0, $e.default)(() => {
    var e;
    Kt.current.cancel();
    wt.current.abort();
    if (!((e = Yt.current) === null || e === undefined)) {
      e.cancel();
    }
    Cn();
    (0, I.removeEmojisFromTouchBar)();
  });
  const Mn = (0, qe.default)(Cn, 200);
  const Sn = () => {
    const e = gt.current.trim().length > 0;
    if (!(0, j.draftMessageEnabled)()) {
      (0, k.setHasText)(e);
    }
    return e;
  };
  const Tn = () => {
    if (!(Zt == null)) {
      Zt.focus();
    }
  };
  const wn = (e, t) => {
    if (!(Zt == null)) {
      Zt.replaceSelection(e, t);
    }
  };
  const An = (0, He.useRef)(lt.OTHER);
  const Pn = () => {
    if (!(Zt == null)) {
      Zt.reset();
    }
  };
  const On = () => {
    Tn();
  };
  const kn = (0, He.useRef)(null);
  const Dn = (0, He.useRef)(null);
  const In = () => {
    Lt(null);
    sn(null);
    Cn();
    Kt.current.onOrBefore(1);
  };
  const Rn = e => {
    var t;
    if (r) {
      e.stopPropagation();
      r(e);
      if (!((t = Yt.current) === null || t === undefined)) {
        t.debounce(0);
      }
    }
  };
  const Nn = (0, tt.default)(() => at.getComposeContents());
  const xn = (0, tt.default)(function (e) {
    let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const {
      initCaptionUsed: n
    } = t;
    if (e && n) {
      Pn();
    }
    if (e) {
      In();
    }
  });
  const Ln = (0, tt.default)(() => {
    Mn.flush();
  });
  const jn = () => {
    rn(null);
    On();
  };
  const Bn = (e, t, n) => {
    const a = (0, I.fetchGif)(e, t, n);
    Mn.flush();
    w.Cmd.attachMediaDrawer({
      chat: at,
      attachments: [a],
      initCaption: Nn(),
      fileOrigin: Be.MEDIA_PICKER_ORIGIN_TYPE.CHAT_GIF_INAPP,
      onComplete: (e, t) => {
        xn(e, t);
        if (e) {
          jn();
        }
      }
    });
    a.catch(() => {});
    return a;
  };
  const Fn = (e, t) => {
    Bn(e, e, t);
  };
  const Gn = (e, t) => {
    var n;
    if (e.isCreateButton) {
      new Ge.WebcStickerMakerEventsWamEvent({
        stickerMakerEventName: Fe.WEBC_STICKER_MAKER_EVENT_NAME_TYPE.STICKER_MAKER_BUTTON_TAP
      }).commit();
      return void ((n = Ut.current) === null || n === undefined || n.open());
    }
    const a = at.composeQuotedMsg;
    const r = (0, m.prepareCtwaContextSend)(xt, un);
    (0, _e.sendStickerToChat)(at, e, {
      stickerSendOrigin: t,
      quotedMsg: a,
      ctwaContext: r
    });
    it(null);
    In();
  };
  const Un = function () {
    var e = (0, o.default)(function* () {
      let e;
      let t;
      if (at.pttRecordingSession != null) {
        e = at.pttRecordingSession;
      } else {
        e = (0, pe.createRecordingSession)({
          chat: (0, Ce.unproxy)(at)
        });
        e.on("change:state", () => {
          const t = e.state;
          if (!(at.pttRecordingSession !== e || t !== pe.RecordingSessionState.ERROR && t !== pe.RecordingSessionState.STOPPED)) {
            ct(null);
          }
        });
      }
      en(e);
      nn(false);
      try {
        t = yield e.start();
      } finally {
        const n = t ? e : null;
        ct(n);
        en(n);
        nn(n != null);
      }
    });
    return function () {
      return e.apply(this, arguments);
    };
  }();
  const Wn = e => {
    rn(e);
    if (e != null) {
      (0, Ne.setLastComposeBoxPanel)(e);
    }
  };
  const Hn = () => {
    var e;
    (0, he.reconnect)();
    const t = Qt.current.text;
    const n = Qt.current.data;
    if (t.length === 0 && !xt) {
      return;
    }
    kt();
    const a = at.composeQuotedMsg;
    const r = at.quotedMsgAdminGroupJid;
    let o;
    let l;
    if ((0, P.communitiesEnabled)()) {
      o = at.quotedMsgAdminGroupSubject;
      l = at.quotedMsgAdminParentGroupJid;
    }
    const i = pt == null ? undefined : pt.data;
    const u = n.mentionedJidList || [];
    const s = n.groupMentions || [];
    const c = (0, m.prepareCtwaContextSend)(xt, un);
    const d = qt.current;
    rn(null);
    Nt(false);
    mt(null);
    if (!((e = kn.current) === null || e === undefined)) {
      e.close();
    }
    if (hn) {
      vn(true);
    }
    if (d) {
      const e = (0, Ce.unproxy)(at);
      if (e.urlText) {
        e.urlText = undefined;
      }
    }
    const f = {
      linkPreview: i,
      quotedMsg: a,
      mentionedJidList: u,
      groupMentions: s,
      quotedMsgAdminGroupJid: r,
      quotedMsgAdminGroupSubject: o,
      quotedMsgAdminParentGroupJid: l,
      ctwaContext: c
    };
    if ((0, oe.isNewsletterEnabled)() && at.isNewsletter) {
      (0, le.sendNewsletterTextMsg)(at, t, f);
    } else {
      (0, ye.sendTextMsgToChat)(at, t, f);
      In();
      _n.handleOnce.forEach(e => e == null ? undefined : e());
      _n.handleMultiple.forEach(e => e == null ? undefined : e());
      yn({
        handleMultiple: _n.handleMultiple,
        handleOnce: []
      });
    }
    qt.current = false;
    it(null);
    ut(null);
    st(null);
    at.setComposeContents({});
    Pn();
    Sn();
  };
  const Vn = (0, qe.default)(e => {
    if (!Sn() && (at.isNewsletter ? (0, oe.isNewsletterMessageEditingEnabled)() : (0, ee.sendTextEditEnabled)() || (0, ee.sendCaptionEditEnabled)())) {
      (0, I.editLastMessage)(at, e);
    }
  }, 200, {
    trailing: true
  });
  (0, Ie.default)(at, {
    onFocus: On,
    onPaste: (e, t) => {
      if (e === " " && !Sn()) {
        return w.Cmd.scrollMessages();
      }
      Tn();
      wn(e, t);
    },
    onRoutedPaste: e => {
      Tn();
      if (!(Zt == null)) {
        Zt.paste(e);
      }
    },
    onSend: Hn,
    onTextSizeChange: e => {
      ln(e);
    },
    onToggleQuickReplies: () => {
      var e;
      if (!((e = Xt.current) === null || e === undefined)) {
        e.togglePanel();
      }
      An.current = lt.ATTACHMENT_MENU;
    },
    onCtwaContextLinkData: e => {
      Lt(e);
      sn(null);
      bn(e);
    },
    onSendingLogAttributes: e => {
      yn(t => {
        let {
          handleOnce: n,
          handleMultiple: a
        } = t;
        return {
          handleOnce: e.handleOnce ? n.concat(e.handleOnce) : n,
          handleMultiple: e.handleMultiple ? n.concat(e.handleMultiple) : a
        };
      });
    }
  });
  const qn = (0, Ye.useElectronCompatibleStyles)().composerFontSize;
  const Yn = (0, Ce.unproxy)(at).groupMetadata;
  const zn = e => {
    (0, ye.sendTextMsgToChat)(at, e);
  };
  const Kn = (0, I.getComposeBoxPlaceholderText)(at);
  const Qn = (0, He.useRef)(null);
  const Xn = He.default.createElement(ge.RichTextInput, {
    ref: Jt,
    placeholder: Kn,
    title: Kn,
    textXstyle: qn,
    testid: "conversation-compose-box-input",
    initialText: (n = Nn()) === null || n === undefined ? undefined : n.text,
    groupMetadata: Yn,
    readOnly: $t != null,
    maxLength: R.default.MAX_TXT_MSG_SIZE,
    maxVisibleLines: 5,
    spellCheck: true,
    multiline: true,
    focusOnMount: !vt,
    textFormatEnabled: true,
    tabOrder: we.TAB_ORDER.COMPOSE_BOX_INPUT,
    onChange: e => {
      Qt.current = e;
      (e => {
        const t = Sn();
        gt.current = e;
        const n = Sn();
        if (n !== t) {
          Nt(n);
        }
        if (n) {
          at.presence.subscribe();
          (0, se.markComposing)(at);
          (0, ue.prepareChatForMessageSending)(at);
        } else {
          (0, se.markPaused)(at);
        }
        const a = Et();
        if (!a && ft.current || a && a.url !== ft.current) {
          It();
        }
        if (Vt.current) {
          Kt.current.onOrBefore(1);
        } else {
          Kt.current.debounce(700);
        }
        Vt.current = false;
        Mn();
        if (!(cn || !e || at.trusted)) {
          dn(true);
        }
        const r = Qt.current.data.mentionedJidList;
        const o = r == null ? undefined : r.find(e => e.isBot());
        yt(o);
      })(e.parsableText);
    },
    onEnter: Hn,
    onFiles: e => {
      const t = e.getFiles().filter(e => {
        const t = (0, W.typeFromMimetype)(e.type);
        return t === "image" || t === "video";
      });
      if (t.length) {
        Mn.flush();
        w.Cmd.attachMediaDrawer({
          chat: at,
          attachments: t.map(e => ({
            file: e
          })),
          fileOrigin: Be.MEDIA_PICKER_ORIGIN_TYPE.PASTE,
          initCaption: Nn(),
          onComplete: xn
        });
      }
    },
    onTextPaste: e => {
      const t = rt.exec(e);
      if (t) {
        const n = `https://media.giphy.com/media/${t[1]}/200w.mp4`;
        Bn(n, e, de.Message$VideoMessage$Attribution.GIPHY).catch(() => {
          B.DrawerManager.closeDrawerMid();
          Tn();
          if (!(Zt == null)) {
            Zt.replaceSelection(e);
          }
          Pe.ToastManager.open(He.default.createElement(Ae.Toast, {
            msg: We.fbt._("The item you tried adding failed to load.", null, {
              hk: "1MmBvO"
            })
          }));
        });
        return true;
      }
      Vt.current = true;
      return false;
    },
    onMaxPasteExceeded: I.handleMaxPasteExceeded,
    bulletPointsEnabled: (0, Ee.expandedTextFormattingPreviewEnabled)(),
    numberedListEnabled: (0, Ee.expandedTextFormattingPreviewEnabled)(),
    inlineCodeEnabled: (0, Ee.expandedTextFormattingPreviewEnabled)(),
    blockQuoteEnabled: (0, Ee.expandedTextFormattingPreviewEnabled)(),
    botInvokeEnabled: at.canInvokeBot(),
    highlightedBotCommands: St,
    pasteFromHTML: (0, Ee.improvedMessageComposerEnabled)(),
    textFormatShortcutsEnabled: (0, Ee.improvedMessageComposerEnabled)()
  });
  let Zn;
  const Jn = Zt == null ? undefined : Zt.editor;
  if (Jn != null) {
    Zn = He.default.createElement(He.default.Fragment, null, He.default.createElement(J.MentionSuggestions, {
      kind: Te.SuggestionsPanelKind.ComposeBox,
      editor: Jn,
      groupMetadata: Yn,
      elevatedPushNamesEnabled: (0, F.elevatedPushNamesM2Enabled)(at),
      botInvokeEnabled: at.canInvokeBot()
    }), He.default.createElement(G.EmojiSuggestions, {
      kind: Te.SuggestionsPanelKind.ComposeBox,
      editor: Jn
    }), (0, p.getABPropConfigValue)("web_sticker_suggestions_enable") && He.default.createElement(be.StickerSuggestions, {
      ref: Qn,
      kind: Te.SuggestionsPanelKind.ComposeBox,
      editor: Jn,
      onSelect: () => {
        var e;
        if (!(kn == null || (e = kn.current) === null || e === undefined)) {
          e.close();
        }
      },
      onDismiss: () => {
        var e;
        if (!(kn == null || (e = kn.current) === null || e === undefined)) {
          e.close();
        }
      }
    }), (0, E.canSendQuickReplyInChat)(at) && He.default.createElement(me.QuickReplySuggestions, {
      kind: Te.SuggestionsPanelKind.ComposeBox,
      editor: Jn,
      ref: Xt,
      onSelect: () => {
        if (An.current === lt.ATTACHMENT_MENU) {
          h.AttachmentMenuLogger.logAttachmentSend(at, h.AttachmentMenuTarget.QUICK_REPLY);
        }
        An.current = lt.OTHER;
      },
      onHide: () => {
        if (An.current === lt.ATTACHMENT_MENU) {
          h.AttachmentMenuLogger.logAttachmentCancel(at, h.AttachmentMenuTarget.QUICK_REPLY);
        }
        An.current = lt.OTHER;
      }
    }), ((0, C.isBizBot3pEnabled)() && bt || (0, C.isMetaBotCommandsEnabled)() && Mt) && He.default.createElement(y.BotCommandSuggestions, {
      kind: Te.SuggestionsPanelKind.ComposeBox,
      editor: Jn,
      businessProfile: bt && (0, Ce.unproxy)(bt),
      botProfile: Mt
    }), null);
  }
  (0, He.useImperativeHandle)(t, () => ({
    flushSaveComposeContentDebounced: Ln,
    getCurrentComposeContent: Nn,
    updateTextAfterMediaDrawerClose: xn
  }), [Ln, Nn, xn]);
  let $n = null;
  if (Ot) {
    $n = He.default.createElement(M.BotSuggestions, {
      id: at.id,
      onPromptSelect: zn
    });
  }
  return He.default.createElement(ke.UIE, {
    displayName: "ComposeBox",
    ref: jt,
    uimState: Oe.UIMState.PASSIVE,
    requestFocus: vt ? null : On
  }, He.default.createElement(Y.HotKeys, {
    component: "footer",
    tabIndex: null,
    handlers: {
      pagedown: Rn,
      pageup: Rn
    },
    className: (0, T.classnamesConvertMeToStylexPlease)({
      [O.default.pttComposerActive]: tn,
      [O.default.footer]: true,
      [O.default.botSuggestions]: Ot
    }),
    ref: Bt
  }, null, $n, He.default.createElement(x.default, {
    canCut: true,
    className: (0, T.classnamesConvertMeToStylexPlease)(O.default.blockCompose, (0, S.getTextsizeClassForScale)(on)),
    ref: Ft
  }, He.default.createElement("div", {
    className: O.default.mainContentContainer
  }, He.default.createElement(Le.default, {
    transitionName: "pttComposer"
  }, tn ? He.default.createElement("div", {
    className: O.default.pttComposerContainer
  }, He.default.createElement(fe.default, {
    recordingSession: (0, s.default)($t, "recordingSession"),
    onComplete: () => {
      en(null);
      nn(false);
      On();
    }
  })) : null), He.default.createElement(Le.default, {
    transitionName: "messageComposer"
  }, He.default.createElement($.MessageComposer, {
    chat: at,
    pttComposerActive: tn,
    isMessageToBot: Ct(),
    selectedPanelId: an,
    handlePanelChange: Wn,
    getCurrentComposeContent: Nn,
    richTextInputRef: Zt,
    updateTextAfterMediaDrawerClose: xn,
    inputHotkeyRef: Wt,
    handleTab: e => {
      var t;
      if (an) {
        if (!((t = Gt.current) === null || t === undefined)) {
          t.restoreFocus(true);
        }
        (0, Me.stopEvent)(e);
      }
    },
    handleMetaUpDebounced: Vn,
    handleInputFocus: e => {
      var t;
      const {
        target: n
      } = e;
      var a;
      if (!(n instanceof HTMLElement && ((t = Dn.current) === null || t === undefined ? undefined : t.contains(n)))) {
        if (!((a = jt.current) === null || a === undefined)) {
          a.activate();
        }
        V.default.maybeIndicateFocus(Wt.current, O.default.focusAnimation);
        Tn();
        (0, I.addEmojisToTouchBar)(at);
        if ((0, H.supportsFMX)() && !at.isGroup && Rt) {
          dn(true);
        }
      }
    },
    handleInputBlur: () => {
      if (!(!(0, H.supportsFMX)() || at.isGroup || Rt)) {
        dn(false);
      }
      (0, I.removeEmojisFromTouchBar)();
    },
    input: Xn,
    expressionsPanelWrapperRef: Dn,
    expressionsPanelPickerRef: kn,
    replaceInputSelection: wn,
    handlePanelsSticker: Gn,
    handlePanelsGif: Fn,
    hasTextState: Rt,
    handleSendText: Hn,
    recordingSession: $t,
    startRecording: Un,
    onExpressionPanelActive: e => {
      var t;
      if (!(Qn == null || (t = Qn.current) === null || t === undefined)) {
        t.forceHide(e);
      }
    }
  })))), He.default.createElement(D.default, {
    ref: Gt,
    chat: at,
    linkPreviewData: pt == null ? undefined : pt.data,
    ctwaContextLinkData: xt,
    ctwaContextData: un,
    restoreFocus: On,
    selectedPanelId: an,
    getComposeBlockWidth: () => Ft.current ? Ft.current.offsetWidth - ot : 0,
    onComposeHeightChange: Se,
    omitLinkPreview: Dt,
    omitCtwa: In,
    attachmentButtonHidden: Ct(),
    onEmoji: wn,
    onGif: Fn,
    onPanelChange: Wn,
    onSticker: Gn,
    onPanelClose: jn,
    showSpamPanel: cn,
    onClickNotSpam: () => {
      dn(false);
      (0, ve.sendNotSpam)(at, true).catch(() => {});
      if (at.isGroup && (0, ce.callSilencingEnabled)()) {
        __LOG__(2)`[callp] acknowledging group ${at.id.toLogString()}`;
        (0, d.sendAcknowledgeGroupRPC)({
          iqTo: (0, Ue.widToGroupJid)(at.id)
        }).catch(() => {});
      }
    },
    canShowChatAutoMutedNux: pn,
    onOpenChatAutoMuteNux: En,
    onAcceptChatAutoMuteNux: vn,
    onUnmuteChatAutoMuteNux: () => {
      new g.AutoMuteLargeGroupActionsWamEvent({
        autoMuteAction: je.AUTO_MUTE_ACTION_TYPE.USER_DISMISS_BY_UNMUTE,
        autoMuteGroupSize: at.getParticipantCount()
      }).commit();
      w.Cmd.muteChat(at, false);
      mn();
      gn(false);
    }
  }), He.default.createElement(U.default, {
    ref: Ut,
    mimes: te.IMAGE_MIMES,
    onChange: e => {
      if (!e) {
        return;
      }
      e.stopPropagation();
      const t = e.target.files == null ? [] : Array.from(e.target.files);
      if (t.length) {
        new Ge.WebcStickerMakerEventsWamEvent({
          stickerMakerEventName: Fe.WEBC_STICKER_MAKER_EVENT_NAME_TYPE.IMAGE_UPLOADED
        }).commit();
        w.Cmd.attachMediaDrawer({
          chat: at,
          attachments: t.map(e => ({
            file: e,
            stickerMaker: true
          })),
          fileOrigin: Be.MEDIA_PICKER_ORIGIN_TYPE.CHAT_PHOTO_LIBRARY,
          sendAsSticker: true
        });
      }
    },
    multiple: false
  }), Zn));
});
it.displayName = "ComposeBoxImpl";
const ut = it;
exports.ComposeBox = ut;