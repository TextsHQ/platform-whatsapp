var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatusV3Player = function (e) {
  const {
    msg: t,
    mediaData: n,
    statusV3: a,
    msgIdx: l,
    sessionId: u,
    viewerSessionId: d,
    rowIdx: N,
    rowSection: j,
    onNext: U,
    markRead: Y,
    closeStatusViewer: z,
    statusItemViewMap: K,
    statusItemLastImpressionTimestampMap: $
  } = e;
  const me = (0, Ee.default)();
  const ve = (0, fe.default)(() => (0, q.setupStatusV3Controller)(n, t));
  const Pe = (0, se.useRef)(true);
  const Oe = (0, fe.default)(() => {
    var e;
    if ((e = K.get(t.id.toString())) !== null && e !== undefined) {
      return e;
    } else {
      return new x.StatusItemViewWamEvent({
        statusItemViewResult: te.STATUS_ITEM_VIEW_RESULT.ERROR_UNKNOWN,
        statusItemReplied: 0,
        statusItemViewTime: 0,
        statusItemViewCount: 0,
        statusItemImpressionCount: 0
      });
    }
  });
  const ke = (0, fe.default)(() => new L.StatusReplyWamEvent({
    statusReplyResult: ne.STATUS_REPLY_RESULT.CANCELLED
  }));
  const De = (0, se.useRef)(null);
  const Ie = (0, se.useRef)(null);
  const Re = (0, se.useRef)(null);
  const Ne = (0, se.useRef)(null);
  const xe = (0, se.useRef)(null);
  const Le = (0, se.useRef)(null);
  const je = (0, se.useRef)(null);
  const [Be, Fe] = (0, se.useState)(false);
  const [Ge, Ue] = (0, se.useState)(false);
  const [We, He] = (0, se.useState)(false);
  const [Ve, qe] = (0, se.useState)(false);
  const [Ye, ze] = (0, se.useState)(false);
  const [Ke, Qe] = (0, se.useState)(false);
  const [Xe, Ze] = (0, se.useState)(null);
  const [Je, $e] = (0, se.useState)(false);
  const et = (0, G.areStatusQuickRepliesEnabled)();
  const tt = () => {
    const e = Le.current;
    const t = Ne.current;
    if (!e || !t) {
      return;
    }
    const n = e.getBoundingClientRect();
    const a = t.getBoundingClientRect();
    if (!_.default.isRTL() && n.right > a.left - 5 || _.default.isRTL() && n.left < a.right + 5) {
      Fe(true);
    } else {
      Fe(false);
    }
  };
  const nt = (0, de.default)(tt);
  const at = () => {
    if (!Oe.current.statusItemLoadTime) {
      Oe.current.markStatusItemLoadTime();
      Oe.current.statusItemViewResult = te.STATUS_ITEM_VIEW_RESULT.OK;
    }
  };
  const rt = (0, ge.default)(e => {
    if (Ce(n) && n.mediaStage !== b.MEDIA_DATA_STAGE.RESOLVED) {
      return;
    }
    const t = De.current;
    if (t != null) {
      Oe.current.statusItemViewTime += Math.round(window.performance.now() - t);
      De.current = undefined;
    }
    ve.current.pause();
    Ie.current = e;
  });
  const ot = (0, ge.default)(() => {
    var e;
    if (Ce(n)) {
      if (n.mediaStage !== b.MEDIA_DATA_STAGE.RESOLVED) {
        return;
      }
      at();
    }
    if (!((e = Re.current) === null || e === undefined ? undefined : e.isPaused())) {
      if (Pe.current) {
        De.current = window.performance.now();
        ve.current.resume();
      }
    }
  });
  const lt = () => {
    var e;
    const t = je.current;
    if (t) {
      E.default.focus(t);
    }
    if (!((e = Re.current) === null || e === undefined)) {
      e.blur();
    }
    $e(false);
  };
  const it = e => {
    var t;
    var n;
    if (!(e && (e.stopPropagation(), e.preventDefault()), (0, m.getIsMe)(a.contact))) {
      if ((t = Re.current) === null || t === undefined ? undefined : t.isFocused()) {
        lt();
      } else if (!((n = Re.current) === null || n === undefined)) {
        n.restoreFocus();
      }
    }
  };
  const ut = () => {
    M.ModalManager.close();
    ot();
    Ue(false);
  };
  const st = (0, ge.default)(() => {
    rt(Te.MOUSEDOWN);
  });
  const ct = (0, ge.default)(() => {
    ot();
  });
  const dt = () => {
    (0, ue.logStatusReportingEvent)({
      statusReportingInteraction: ae.STATUS_REPORT_INTERACTION.CLICK_CANCEL_REPORT
    });
    ut();
  };
  const ft = e => {
    (0, ue.logStatusReportingEvent)({
      statusReportingInteraction: e === true ? ae.STATUS_REPORT_INTERACTION.CLICK_SUBMIT_REPORT_BLOCK : ae.STATUS_REPORT_INTERACTION.CLICK_SUBMIT_REPORT
    });
    (0, D.sendReport)({
      spamFlow: R.SpamFlow.StatusPostReport,
      msg: t,
      msgType: A.MSG_TYPE.STATUS_V3
    }).then(() => {
      if (e) {
        (0, s.blockContact)((0, r.default)({
          contact: a.contact,
          blockEntryPoint: c.BlockEntryPoint.StatusPostReport
        }, a.contact.isBusiness && {
          bizOptOutArgs: {
            entryPoint: c.BlockEntryPoint.StatusPostReport
          }
        }));
      }
      M.ModalManager.close();
      Ue(false);
      z();
    }).catch(() => {});
  };
  (0, se.useLayoutEffect)(() => {
    var e;
    var r;
    if (d != null && j != null) {
      if (j === oe.STATUS_ROW_SECTION.MY_STATUS) {
        T.MsgInfoCollection.find(t.id).then(e => {
          if (!me.aborted) {
            Ze(e.read);
          }
        }).catch((0, o.filteredCatch)(i.EphemeralDrop, () => {}));
      }
      const e = a.msgs.length - 1 - l < a.unreadCount;
      let r;
      if (n) {
        switch (n.type) {
          case y.default.TYPE.VIDEO:
            r = n.isGif ? ee.MEDIA_TYPE.GIF : ee.MEDIA_TYPE.VIDEO;
            break;
          case y.default.TYPE.IMAGE:
            r = ee.MEDIA_TYPE.PHOTO;
            break;
          case y.default.TYPE.AUDIO:
            r = ee.MEDIA_TYPE.AUDIO;
            break;
          case y.default.TYPE.PTT:
            r = ee.MEDIA_TYPE.PTT;
            break;
          default:
            r = ee.MEDIA_TYPE.NONE;
        }
      } else {
        if ((0, w.getLinksFromMsg)(t).length) {
          r = ee.MEDIA_TYPE.URL;
          if (Oe.current.urlStatusClicked == null) {
            Oe.current.urlStatusClicked = le.URL_STATUS_CLICKED.NO_CLICK;
          }
          Oe.current.urlStatusType = ie.URL_STATUS_TYPE.NO_PREVIEW;
        } else {
          r = ee.MEDIA_TYPE.NONE;
        }
        at();
      }
      Oe.current.statusViewerSessionId = d;
      Oe.current.statusItemViewCount += 1;
      Oe.current.statusRowSection = j;
      Oe.current.statusRowIndex = N;
      Oe.current.mediaType = r;
      Oe.current.statusItemImpressionCount += (() => {
        const e = t.id.toString();
        const n = Math.floor(window.performance.now());
        const a = $.get(e);
        return (a == null || n - a > 60000) && ($.set(e, n), true);
      })() ? 1 : 0;
      if (Oe.current.statusItemUnread == null) {
        Oe.current.statusItemUnread = e;
      }
      if ((0, G.smbStatusLoggingEnabled)()) {
        Oe.current.isPosterBiz = a.contact.isBusiness;
        ke.current.isPosterBiz = a.contact.isBusiness;
        Oe.current.isPosterInAddressBook = (0, m.getIsMyContact)(a.contact);
        ke.current.isPosterInAddressBook = (0, m.getIsMyContact)(a.contact);
      }
    }
    if (u != null) {
      ke.current.statusSessionId = u;
      if ((0, G.smbStatusLoggingEnabled)()) {
        ke.current.isPosterBiz = a.contact.isBusiness;
        ke.current.isPosterInAddressBook = (0, m.getIsMyContact)(a.contact);
      }
    }
    if (!((e = ve.current) === null || e === undefined || (r = e.addListeners) === null || r === undefined)) {
      r.call(e, {
        onPlay: (e, t) => {
          const n = xe.current;
          if (!(n == null)) {
            n.handleStart(e, t);
          }
          He(false);
          Ie.current = null;
        },
        onPause: () => {
          const e = xe.current;
          if (!(e == null)) {
            e.handlePause();
          }
          He(true);
        },
        onEnd: () => {
          const e = xe.current;
          if (!(e == null)) {
            e.handleEnded().then(() => {
              if (!me.aborted) {
                U(re.STATUS_ROW_ENTRY_METHOD.PREVIOUS_ROW_TIMEOUT);
              }
            });
          }
        },
        onLoad: (e, t) => {
          qe(t);
          ze(e);
        }
      });
    }
    if (n) {
      ot();
      if ((n == null ? undefined : n.mediaStage) === b.MEDIA_DATA_STAGE.RESOLVED) {
        Y(a, t);
      }
    } else {
      t.type;
      A.MSG_TYPE.CHAT;
      ot();
      Y(a, t);
    }
    const s = je.current;
    if (!(s == null)) {
      s.focus();
    }
    tt();
  }, []);
  (0, he.default)(() => {
    ve.current.removeListeners();
    if (d != null && j != null) {
      const e = De.current;
      if (e != null) {
        Oe.current.statusItemViewTime += Math.round(window.performance.now() - e);
        De.current = undefined;
      }
      const n = Number.isNaN(ve.current.duration) ? 0 : Math.round(ve.current.duration);
      Oe.current.statusItemLength = n;
      K.set(t.id.toString(), Oe.current);
    }
    if (u != null) {
      ke.current.commit();
    }
    ye(a.contact, "statusViews");
  });
  const pt = (0, ge.default)(Y);
  (0, pe.useListener)(window, "focus", () => {
    Pe.current = true;
    if (!(Ge || Ie.current !== Te.WINDOW_BLUR)) {
      ot();
    }
  });
  (0, pe.useListener)(window, "blur", () => {
    Pe.current = false;
    if (!We) {
      rt(Te.WINDOW_BLUR);
    }
  });
  (0, pe.useListener)(window, "resize", nt);
  (0, pe.useListener)(p.Cmd, "open_long_link_modal", () => {
    if (!We) {
      rt(Te.LINK_MODAL_OPEN);
    }
  });
  (0, pe.useListener)(p.Cmd, "close_long_link_modal", e => {
    if (e === true && Ie.current === Te.LINK_MODAL_OPEN) {
      ot();
    }
  });
  (0, X.useTsNavigation)({
    surface: "status-v3-view"
  });
  const mt = function (e, t) {
    if (e) {
      switch (e.type) {
        case y.default.TYPE.IMAGE:
        case y.default.TYPE.VIDEO:
          {
            const t = (0, C.getHighestQualityThumbnailUrl)(e);
            if (t != null) {
              return {
                backgroundImage: `url(${t})`
              };
            } else {
              return null;
            }
          }
        case y.default.TYPE.PTT:
        case y.default.TYPE.AUDIO:
          if ((0, G.isStatusV3VoiceStatusReceiptEnabled)()) {
            return {
              backgroundColor: (0, S.getStatusV3CanvasColor)(t)
            };
          } else {
            return null;
          }
      }
    } else if (t.type === A.MSG_TYPE.CHAT) {
      return {
        backgroundColor: (0, S.getStatusV3CanvasColor)(t)
      };
    }
  }(n, t);
  const ht = se.default.createElement(Se, {
    mediaData: n,
    msg: t,
    statusV3: a,
    markRead: pt,
    play: ot,
    pause: rt,
    onMouseDown: st,
    onMouseUp: ct,
    playbackController: ve.current,
    statusItemViewEventRef: Oe
  });
  const gt = se.default.createElement("div", {
    ref: Ne
  }, se.default.createElement(H.default, {
    ref: xe,
    current: e.msgIdx,
    total: e.totalMsgs,
    onClick: e.onClickProgressBar
  }));
  const Et = (0, S.getIsSentByMe)(t) || (0, m.getIsPSA)(a.contact);
  const vt = e => e.stopPropagation();
  const _t = se.default.createElement(P.ContactName, {
    className: (0, ce.default)(_e.msgInfoName),
    contact: a.contact,
    you: true,
    ellipsify: true,
    showBusinessCheckmark: (0, m.getShowBusinessCheckmarkAsPrimary)(a.contact)
  });
  const yt = se.default.createElement("div", {
    className: (0, ce.default)(_e.profile, Et && _e.nonClickProfile, Be && _e.profileNarrow, false, false),
    onClick: Et ? null : () => {
      const e = a.contact.id;
      (0, g.findChat)(e, "statusV3ComposeBox").then(e => p.Cmd.openChatBottom(e)).then(() => {
        z(true);
      });
    }
  }, se.default.createElement("div", {
    className: (0, ce.default)(_e.playerAvatar)
  }, se.default.createElement(h.DetailImage, {
    id: a.contact.id,
    theme: "status_v3",
    size: 40
  })), se.default.createElement("div", {
    className: (0, ce.default)(_e.msgInfo)
  }, se.default.createElement("div", {
    className: (0, ce.default)(!Et && _e.msgInfoNameWrapper, (0, m.getIsPSA)(a.contact) && _e.msgInfoNamePSA)
  }, _t), !(0, m.getIsPSA)(a.contact) && se.default.createElement("div", {
    className: (0, ce.default)(_e.timestamp)
  }, f.Clock.relativeDateAndTimeStr(t.t))), se.default.createElement("div", {
    className: (0, ce.default)(_e.statusMediaControls),
    onClick: vt
  }, se.default.createElement(W.default, {
    isPaused: We,
    hasAudio: be(n) && Ye,
    isMuted: Ve,
    onPlay: ot,
    onPauseButtonClick: () => {
      rt(Te.PAUSE_BUTTON);
    },
    onOverflowMenuShown: () => {
      rt(Te.OVERFLOW_MENU_BUTTON);
    },
    onOverflowMenuDismissed: () => {
      if (Ie.current === Te.OVERFLOW_MENU_BUTTON) {
        ot();
      }
    },
    onMute: () => {
      ve.current.mute();
      qe(true);
    },
    onUnmute: () => {
      ve.current.unmute();
      qe(false);
    },
    onReport: () => {
      rt(Te.STATUS_REPORT_MODAL_OPEN);
      (0, ue.logStatusReportingEvent)({
        statusReportingInteraction: ae.STATUS_REPORT_INTERACTION.CLICK_REPORT
      });
      M.ModalManager.open(se.default.createElement(k.default, {
        contact: a.contact,
        onCancel: dt,
        onReport: ft
      }));
      Ue(true);
    },
    onDelete: () => {
      (0, I.isStatusPostingEnabled)();
      0;
    },
    contact: a.contact
  })));
  const Ct = se.default.createElement("div", {
    ref: Le,
    className: (0, ce.default)(_e.profile, _e.measuringProfile, false)
  }, se.default.createElement("div", {
    className: (0, ce.default)(_e.playerAvatar)
  }, se.default.createElement(h.DetailImage, {
    id: a.contact.id,
    theme: "status_v3",
    size: 40
  })), se.default.createElement("div", {
    className: (0, ce.default)(_e.msgInfo)
  }, _t, se.default.createElement("div", {
    className: (0, ce.default)(_e.timestamp)
  }, f.Clock.relativeDateAndTimeStr(t.t))));
  const bt = n ? se.default.createElement(we, {
    mediaData: n
  }) : null;
  const Mt = (0, m.getIsMe)(a.contact) || (0, m.getIsPSA)(a.contact) ? null : se.default.createElement(v.HotKeys, {
    handlers: {
      left: vt,
      right: vt
    },
    onClick: e => {
      var t;
      var n;
      if (e) {
        e.stopPropagation();
        e.preventDefault();
      }
      if ((t = Re.current) === null || t === undefined ? undefined : t.isFocused()) {
        if (!((n = Re.current) === null || n === undefined)) {
          n.restoreFocus();
        }
      }
    }
  }, se.default.createElement(F.default, {
    msg: e.msg,
    dismissReply: lt,
    onSend: () => {
      Oe.current.statusItemReplied++;
      ye(a.contact, "statusReplies");
    },
    onFocusChange: e => {
      if (et) {
        $e(e);
      }
    },
    pause: rt,
    play: ot,
    ref: e => {
      Re.current = e;
    },
    statusReplyMetric: ke.current,
    isStatusQuickRepliesEnabled: et
  }));
  const St = (0, m.getIsMe)(a.contact) && Xe ? se.default.createElement("div", {
    className: (0, ce.default)(_e.seen)
  }, se.default.createElement(V.default, {
    seenCount: Xe.length,
    onClick: () => {
      if (Xe) {
        M.ModalManager.open(se.default.createElement(Q.default, {
          onClose: ut,
          viewers: Xe
        }));
        rt(Te.OPEN_SEE_VIEWERS_MODAL);
        Ue(true);
      }
    }
  })) : null;
  const Tt = t.type === A.MSG_TYPE.CHAT || Me(n) ? null : se.default.createElement("div", {
    className: (0, ce.default)(_e.progressBackdrop, Be && _e.progressBarBackdropNarrow)
  });
  const wt = t.type !== A.MSG_TYPE.CHAT && typeof t.caption == "string" ? se.default.createElement("div", {
    className: (0, ce.default)(_e.caption)
  }, se.default.createElement(O.default, {
    type: "contain",
    size: {
      width: n.fullWidth,
      height: n.fullHeight
    }
  }, se.default.createElement(B.default, {
    text: t.caption,
    isExpandedCaptionText: Ke,
    onExpandCaptionText: () => {
      Qe(!Ke);
    }
  }))) : null;
  return se.default.createElement("div", null, se.default.createElement(J.UIE, {
    displayName: "StatusV3Player",
    escapable: true,
    requestDismiss: t => {
      if (t !== Z.DismissReason.LIFECYCLE) {
        e.closeStatusViewer();
      }
    },
    requestFocus: lt
  }, se.default.createElement(v.HotKeys, {
    handlers: {
      tab: it,
      "shift+tab": it
    },
    onClick: lt
  }, se.default.createElement("div", {
    className: (0, ce.default)(_e.playerWrapper),
    key: t.id.toString(),
    tabIndex: -1,
    ref: je
  }, Ct, yt, Je ? se.default.createElement(Ae, null) : null, Tt, gt, se.default.createElement("div", {
    className: (0, ce.default)(_e.playerBackground, n != null && !Me(n) && _e.playerBackgroundMedia),
    style: mt
  }), null, ht, wt, bt, St, Mt))));
};
var r = a(require("../vendor/81109.js"));
var o = require("../app/122583.js");
var l = require("../app/632157.js");
var i = require("../app/984330.js");
var u = require("../app/72696.js");
var s = require("../app/547979.js");
var c = require("../app/400436.js");
var d = require("../app/698867.js");
var f = require("../app/63014.js");
var p = require("../app/780549.js");
var m = require("../app/660666.js");
var h = require("../app/23641.js");
var g = require("../app/581354.js");
var E = a(require("../app/335540.js"));
var v = require("../app/81644.js");
var _ = a(require("../app/932325.js"));
var y = a(require("../app/116253.js"));
var C = require("../app/232294.js");
var b = require("../app/172259.js");
var M = require("../app/114850.js");
var S = require("../app/787742.js");
var T = require("../app/241164.js");
var w = require("../app/44118.js");
var A = require("../app/373070.js");
var P = require("../app/21645.js");
var O = a(require("./821384.js"));
var k = a(require("./694003.js"));
var D = require("../app/383296.js");
var I = require("../app/115927.js");
var R = require("../app/453603.js");
var N = require("../app/956113.js");
var x = require("./82271.js");
var L = require("./440612.js");
var j = require("./270639.js");
var B = a(require("./971982.js"));
var F = a(require("./430513.js"));
var G = require("../app/918715.js");
var U = require("./12545.js");
var W = a(require("./498454.js"));
var H = a(require("./325698.js"));
var V = a(require("./502622.js"));
var q = require("./557674.js");
var Y = require("./688468.js");
var z = require("./100225.js");
var K = require("./882170.js");
var Q = a(require("./526562.js"));
var X = require("../app/717089.js");
var Z = require("../app/238669.js");
var J = require("../app/392632.js");
var $ = a(require("../app/844453.js"));
var ee = require("../app/684290.js");
var te = require("./633557.js");
var ne = require("./873225.js");
var ae = require("./865772.js");
var re = require("./552747.js");
var oe = require("./122093.js");
var le = require("../app/913249.js");
var ie = require("./815060.js");
var ue = require("./304739.js");
var se = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = ve(t);
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
var ce = a(require("../app/156720.js"));
var de = a(require("../app/710629.js"));
var fe = a(require("../app/637660.js"));
var pe = require("../app/808446.js");
var me = require("../app/655241.js");
var he = a(require("../app/558532.js"));
var ge = a(require("../app/17533.js"));
var Ee = a(require("../app/895851.js"));
function ve(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (ve = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const _e = {
  tinter: {
    width: "ln8gz9je",
    height: "ppled2lx",
    backgroundColor: "ceoseaut",
    position: "lhggkp7q",
    top: "qq0sjtgm",
    start: "tkdu00h0",
    opacity: "ebu6xrgy",
    zIndex: "nbczt5ty"
  },
  msgInfoName: {
    fontSize: "enbbiyaj",
    color: "lxozqee9"
  },
  playerAvatar: {
    marginTop: "m3ct2rho",
    marginEnd: "oz083wsx",
    marginBottom: "ec1z5skj",
    marginStart: "gj5xqxfh",
    display: "l7jjieqr"
  },
  msgInfo: {
    display: "p357zi0d",
    flexDirection: "f8m0rgwh",
    justifyContent: "ac2vgrno",
    maxWidth: "j216idpa"
  },
  timestamp: {
    marginBottom: "inww9tbj",
    fontSize: "ovllcyds",
    color: "g3s9j5t3"
  },
  statusMediaControls: {
    display: "p357zi0d",
    flexDirection: "v76qf5v1",
    flexGrow: "gj6qtt9u",
    marginEnd: "om6y7gxh",
    cursor: "bx7g2weo"
  },
  seen: {
    position: "lhggkp7q",
    end: "ebjesfe0",
    bottom: "fucf9dil",
    start: "tkdu00h0",
    zIndex: "nbczt5ty",
    width: "b1qcobdr",
    maxWidth: "ckq3dtew",
    marginEnd: "k1jo73ug",
    marginStart: "isfiuinm"
  },
  caption: {
    position: "lhggkp7q",
    bottom: "jxacihee",
    width: "ln8gz9je",
    height: "ppled2lx"
  },
  playerWrapper: {
    position: "lhggkp7q",
    top: "qq0sjtgm",
    start: "tkdu00h0",
    width: "ln8gz9je",
    height: "ppled2lx",
    backgroundColor: "ss9a15xu"
  },
  mediaStateControls: {
    position: "lhggkp7q",
    top: "qq0sjtgm",
    end: "ebjesfe0",
    bottom: "jxacihee",
    start: "tkdu00h0",
    width: "b6qzmhfs",
    height: "qmp0wt83",
    marginTop: "m3ct2rho",
    marginEnd: "k1jo73ug",
    marginBottom: "ec1z5skj",
    marginStart: "isfiuinm",
    pointerEvents: "m62443ks"
  },
  playerBackground: {
    position: "lhggkp7q",
    top: "qq0sjtgm",
    start: "tkdu00h0",
    width: "ln8gz9je",
    height: "ppled2lx",
    backgroundRepeat: "sxl192xd",
    backgroundPosition: "t3g6t33p",
    backgroundSize: "qnwaluaf"
  },
  progressBackdrop: {
    position: "lhggkp7q",
    zIndex: "thghmljt",
    width: "ln8gz9je",
    height: "q7zw29cd",
    pointerEvents: "m62443ks",
    backgroundImage: "hzap6c9h"
  },
  progressBarBackdropNarrow: {
    height: "ied3pvzy"
  },
  profile: {
    position: "lhggkp7q",
    top: "lxwgj1sq",
    start: "hcc3cqto",
    zIndex: "nbczt5ty",
    display: "p357zi0d",
    cursor: "ajgl1lbb",
    flexDirection: "sap93d0t",
    maxWidth: "culzvsue",
    textAlign: "ljrqcn24"
  },
  profileNarrow: {
    top: "re70xkk9",
    end: "ebjesfe0",
    start: "tkdu00h0",
    marginEnd: "k1jo73ug",
    marginStart: "isfiuinm"
  },
  nonClickProfile: {
    cursor: "bx7g2weo"
  },
  measuringProfile: {
    pointerEvents: "m62443ks",
    opacity: "axi1ht8l"
  },
  profileMac: {
    start: "kpl3m0p3"
  },
  profileMacNarrow: {
    start: "tkdu00h0"
  },
  msgInfoNameWrapper: {
    display: "p357zi0d",
    marginTop: "kiiy14zj",
    marginBottom: "ngycyvoj"
  },
  msgInfoNamePSA: {
    marginTop: "tt8xd2xn",
    marginEnd: "jnwc1y2a",
    marginBottom: "mpdn4nr2",
    marginStart: "svoq16ka"
  },
  playerBackgroundMedia: {
    filter: "ln3j75h5",
    opacity: "n791o4v8"
  }
};
function ye(e, t) {
  if ((0, u.btmThreadsLoggingEnabled)() && !(0, m.getIsMe)(e)) {
    (0, g.findChat)(e.id, "statusV3Player").then(e => {
      (0, d.handleActivitiesForChatThreadLogging)([{
        activityType: t,
        ts: (0, l.unixTime)(),
        chatId: e.id
      }]);
    });
  }
}
function Ce(e) {
  let t = [y.default.TYPE.VIDEO, y.default.TYPE.IMAGE];
  if ((0, G.isStatusV3VoiceStatusReceiptEnabled)()) {
    t = t.concat([y.default.TYPE.AUDIO, y.default.TYPE.PTT]);
  }
  return e != null && t.includes(e.type);
}
function be(e) {
  const t = (0, G.isStatusV3VoiceStatusReceiptEnabled)() ? [y.default.TYPE.VIDEO, y.default.TYPE.AUDIO, y.default.TYPE.PTT] : [y.default.TYPE.VIDEO];
  return e != null && t.includes(e.type);
}
function Me(e) {
  const t = [y.default.TYPE.AUDIO, y.default.TYPE.PTT];
  return e != null && t.includes(e.type);
}
function Se(e) {
  let {
    mediaData: t,
    msg: n,
    statusV3: a,
    markRead: r,
    play: o,
    pause: l,
    onMouseDown: i,
    onMouseUp: u,
    playbackController: s,
    statusItemViewEventRef: c
  } = e;
  if (!t) {
    if (n.type === A.MSG_TYPE.CHAT) {
      return se.default.createElement(Y.StatusV3Text, {
        msg: n,
        onMouseDown: i,
        onMouseUp: u,
        statusItemViewEventRef: c
      });
    } else {
      return se.default.createElement(z.StatusV3Unknown, {
        onMouseDown: i,
        onMouseUp: u
      });
    }
  }
  switch (t.type) {
    case y.default.TYPE.IMAGE:
      return se.default.createElement(U.StatusV3Img, {
        msg: n,
        statusV3: a,
        mediaData: t,
        markRead: r,
        play: o,
        pause: l,
        onMouseDown: i,
        onMouseUp: u
      });
    case y.default.TYPE.VIDEO:
      return se.default.createElement(K.StatusV3Video, {
        msg: n,
        statusV3: a,
        mediaData: t,
        markRead: r,
        play: o,
        pause: l,
        playbackController: s,
        onMouseDown: i,
        onMouseUp: u
      });
    case y.default.TYPE.PTT:
    case y.default.TYPE.AUDIO:
      if ((0, G.isStatusV3VoiceStatusReceiptEnabled)()) {
        return se.default.createElement(j.StatusV3Audio, {
          msg: n,
          mediaData: t,
          statusV3: a,
          markRead: r,
          play: o,
          pause: l,
          playbackController: s,
          onMouseDown: i,
          onMouseUp: u
        });
      } else {
        return se.default.createElement(z.StatusV3Unknown, {
          onMouseDown: i,
          onMouseUp: u
        });
      }
    default:
      __LOG__(3)`Unexpected Status media type: ${t.type}`;
      return se.default.createElement(z.StatusV3Unknown, {
        onMouseDown: i,
        onMouseUp: u
      });
  }
}
const Te = require("../vendor/76672.js").Mirrored(["PAUSE_BUTTON", "MOUSEDOWN", "WINDOW_BLUR", "OPEN_SEE_VIEWERS_MODAL", "LINK_MODAL_OPEN", "OVERFLOW_MENU_BUTTON", "STATUS_REPORT_MODAL_OPEN"]);
function we(e) {
  const t = (0, me.useModelValues)(e.mediaData, ["mediaStage"]);
  if (!Ce(e.mediaData)) {
    return null;
  }
  const n = t.mediaStage !== b.MEDIA_DATA_STAGE.RESOLVED ? se.default.createElement("div", {
    className: (0, ce.default)(_e.mediaStateControls)
  }, se.default.createElement("button", {
    className: "icon-media-disabled"
  }, se.default.createElement(N.Spinner, {
    size: 50,
    stroke: 4,
    color: "white"
  }))) : null;
  return se.default.createElement($.default, {
    transitionName: "status-v3-media-loading",
    appear: true
  }, n);
}
function Ae() {
  return se.default.createElement("div", {
    className: (0, ce.default)(_e.tinter)
  });
}