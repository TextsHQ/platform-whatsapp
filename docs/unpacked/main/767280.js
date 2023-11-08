var a = require("../app/530066.js").default;
var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MainComponent = function (e) {
  const {
    animate: t
  } = e;
  const n = (0, ye.useContext)(re.ThemeContext);
  const r = (0, ye.useRef)(null);
  const v = (0, ye.useRef)(null);
  const G = (0, ye.useRef)(null);
  const W = (0, ye.useRef)(null);
  const we = (0, ye.useRef)(null);
  const De = (0, ye.useRef)(null);
  const Ie = (0, ye.useRef)(null);
  const Re = (0, ye.useRef)(false);
  const Ne = (0, ye.useRef)(null);
  const xe = (0, be.default)(() => new c.ShiftTimer(() => {
    if (document.activeElement !== document.body) {
      return;
    }
    const e = ue.UIM.Manager.getTop();
    if (!(e == null)) {
      e.requestFocus();
    }
  }));
  const [Le, je] = (0, ye.useState)(false);
  const [Be, Fe] = (0, ye.useState)(false);
  const [Ge, Ue] = (0, ye.useState)(O.Conn.isVoipInitialized);
  const We = e => {
    var t;
    var n;
    var a;
    const o = (t = v.current) === null || t === undefined ? undefined : t.clientWidth;
    if (o == null) {
      return false;
    }
    const l = (n = r.current) === null || n === undefined ? undefined : n.clientWidth;
    if (l == null) {
      return false;
    }
    if (!we.current) {
      return false;
    }
    const i = (a = W.current) === null || a === undefined ? undefined : a.clientWidth;
    return we.current.animatePanel(l, o, i, e);
  };
  const [He, Ve] = (0, ye.useState)(() => (0, pe.getChatlistPanelState)() === pe.ChatlistPanelState.COLLAPSED);
  const [qe, Ye] = (0, ye.useState)(true);
  const [ze, Ke] = (0, ye.useState)(false);
  const [Qe, Xe] = (0, ye.useState)();
  const [Ze, Je] = (0, ye.useState)(ke.Chats);
  const $e = () => Ke(true);
  (0, Me.useListener)(D.DrawerManager, "open_drawer_left", () => Ye(false));
  (0, Me.useListener)(D.DrawerManager, "drawer_left_closed", () => Ye(true));
  const et = () => {
    switch (O.Conn.tos) {
      case 1:
      case 2:
        U.ModalManager.open(ye.default.createElement(le.default, null), {
          blockClose: true
        });
        break;
      case 3:
        __LOG__(2)`TOS (terms of service) stage number 3, logging out`;
        ne.Socket.logout();
    }
  };
  const tt = () => {
    if (O.Conn.smbTos) {
      U.ModalManager.open(ye.default.createElement(E.default, null), {
        blockClose: true
      });
    }
  };
  const nt = () => {
    if ((0, ve.isNonZeroNumber)(Y.default.noticeId) && Y.default.blocking === true) {
      U.ModalManager.open(ye.default.createElement(fe.default, {
        notice: Y.default
      }), {
        blockClose: true
      });
    }
  };
  const at = e => {
    let t = e ? 60000 : 0;
    De.current = new a();
    const n = De.current.signal;
    (0, s.promiseLoop)(function () {
      var e = (0, o.default)(function* (e) {
        try {
          yield (0, u.delayMs)(t);
          if (n.aborted) {
            throw new i.AbortError();
          }
          ae.Stream.markUnavailable(30000);
          yield new Promise(e => {
            Ne.current = e;
          });
          if (n.aborted) {
            throw new i.AbortError();
          }
          if (document.hasFocus()) {
            ae.Stream.markAvailable();
          }
          t = 60000;
        } catch (t) {
          if (t.name !== i.ABORT_ERROR) {
            throw t;
          }
          e();
        }
      });
      return function () {
        return e.apply(this, arguments);
      };
    }()).finally(() => {
      De.current = null;
    });
  };
  const rt = () => {
    Ie.current = p.default.setLocalTimeout(() => {
      (0, ce.queryServerProps)();
      rt();
    }, (0, _e.default)().add(1, "days").valueOf());
  };
  (0, ye.useEffect)(() => {
    ae.Stream.uiActive = true;
    ae.Stream.markAvailable();
    const {
      platform: e
    } = O.Conn;
    (0, N.default)((0, R.getEmojiTypeFromPlatform)(e));
    h.AssetLoader.setPlatform(e);
    if (Pe && Ae) {
      Pe(Ae.LOGGED_IN);
    }
    L.default.menuBatchRenderWith(() => {
      L.default.trigger(`${x.default.Event}:${x.default.Events.LOGGED_IN}`);
    });
    at(true);
    rt();
    if (O.Conn.isSMB) {
      tt();
    }
    et();
    nt();
    if (ie.UA.isSafari && !Z.default && (0, me.shouldShowNUX)(K.NUX.SAFARI_LIMITED_SUPPORT)) {
      self.setTimeout(() => {
        U.ModalManager.open(ye.default.createElement(P.ConfirmPopup, {
          onOK: () => U.ModalManager.close(),
          okText: Ee.fbt._("OK, got it", null, {
            hk: "2hEWOg"
          })
        }, ye.default.createElement($.SafariLimitedText, null)));
      }, 250);
      (0, me.setNUX)(K.NUX.SAFARI_LIMITED_SUPPORT, {
        views: 1
      });
    }
    if (ee.ServerProps.wallpapersV2) {
      const e = M.default.get(S.DEFAULT_PREFERENCE);
      if (e && he.DEFAULT_CHAT_WALLPAPER !== e.wallpaperColor) {
        const t = n.theme;
        if (!(0, he.colorExistsInTheme)(e.wallpaperColor, t)) {
          const n = t === "light" ? "dark" : "light";
          if ((0, he.colorExistsInTheme)(e.wallpaperColor, n)) {
            const t = (0, he.toggleWallpaperColor)(e.wallpaperColor, n);
            e.set("wallpaperColor", t);
          }
        }
      }
    }
  }, []);
  (0, Se.default)(() => {
    var e;
    xe.current.cancel();
    if (Pe && Ae) {
      Pe(Ae.LOGGED_OUT);
    }
    L.default.menuBatchRenderWith(() => {
      L.default.trigger(`${x.default.Event}:${x.default.Events.LOGGED_OUT}`);
    });
    if (de.default.canMuckHistory()) {
      window.history.back();
    }
    ae.Stream.uiActive = false;
    if (!((e = De.current) === null || e === undefined)) {
      e.abort();
    }
    p.default.clearTimeout(Ie.current);
  });
  const ot = de.default.canMuckHistory();
  (0, Me.useListener)(ot ? window : null, "popstate", Oe);
  (0, ye.useEffect)(() => {
    if (ot) {
      Oe();
    }
  }, []);
  (0, ye.useEffect)(() => {
    if (!(0, g.shouldFetchLinkedAccounts)()) {
      return;
    }
    const e = new a();
    (0, B.getActiveLinkedAccountInfo)().then(t => {
      if (!e.signal.aborted) {
        (0, f.setActiveAccountInfo)(t);
        Xe(t);
      }
    }).catch(() => {
      __LOG__(3)`WAWebMain: could not fetch linked accounts`;
    });
    return () => e.abort();
  }, []);
  (0, Me.useListener)(O.Conn, "change:isVoipInitialized", () => {
    Ue(O.Conn.isVoipInitialized);
  });
  (0, Me.useListener)(O.Conn, "change:tos", et);
  (0, Me.useListener)(O.Conn.isSMB ? O.Conn : null, "change:smbTos", tt);
  (0, Me.useListener)(Y.default, ["change:blocking", "change:noticeId"], nt);
  (0, Me.useListener)(null, "keydown", e => {
    if (e.ctrlKey && !e.altKey && !e.metaKey && !e.shiftKey) {
      e.keyCode;
      l.default.EQUAL_SIGN;
    }
  });
  const lt = () => {
    var e;
    if (!((e = Ne.current) === null || e === undefined)) {
      e.call(Ne);
    }
    Ne.current = null;
  };
  (0, Me.useListener)(document, ["mousemove", "scroll", "keydown"], lt);
  (0, Me.useListener)(window, ["focus", "resize"], lt);
  const it = (0, T.classnamesConvertMeToStylexPlease)({
    three: Le,
    two: !Le,
    "app-animating": Be,
    [F.default.noAnimation]: !t,
    [F.default.app]: true
  });
  let ut;
  (0, Ce.useExternalBetaValidator)();
  false;
  const st = ye.default.createElement(C.ChatlistPanel, {
    ref: G,
    settings: te.default,
    mode: b.default.Chatlist,
    key: ze ? "inMultiSelectMode" : "inNonSelectableMode",
    selectable: ze,
    endMultiSelect: () => Ke(false),
    multiSelectEntryPoint: ze ? H.MultiSelectEntryPoint.ChatListHeaderDropdown : null
  });
  const ct = ye.default.createElement("div", {
    className: F.default.drawerManager
  }, ye.default.createElement("div", {
    className: (0, T.classnamesConvertMeToStylexPlease)({
      [F.default.chatlistPanelClosed]: He && qe,
      [F.default.paneOneDrawerWithNavBar]: (0, oe.topMenuRedesignEnabled)(),
      [F.default.pane]: true,
      [F.default.paneOne]: true,
      [F.default.paneOneDrawer]: true
    })
  }, ye.default.createElement(I.DrawerManagerComponent, {
    direction: I.Dir.LEFT,
    animationDisabled: He
  })), ye.default.createElement("div", {
    className: (0, T.classnamesConvertMeToStylexPlease)(F.default.pane, F.default.paneTwo)
  }, ye.default.createElement(I.DrawerManagerComponent, {
    direction: I.Dir.MID
  })));
  const dt = (0, oe.topMenuRedesignEnabled)() ? ye.default.createElement(q.NavBar, {
    headerRef: v,
    mute: V.MuteCollection.globalMute(),
    settings: te.default,
    activeAccountInfo: Qe,
    leftDrawerClosed: qe,
    activeNavBarItem: Ze,
    setActiveNavBarItem: Je
  }) : null;
  const ft = (0, oe.topMenuRedesignEnabled)() ? ye.default.createElement("div", {
    className: (0, T.classnamesConvertMeToStylexPlease)({
      [F.default.pane]: true,
      [F.default.paneOne]: true
    })
  }, te.default && ye.default.createElement(y.default, {
    headerRef: v,
    mute: V.MuteCollection.globalMute(),
    settings: te.default,
    onSelectChatClick: $e,
    isMultiSelectMode: ze,
    activeAccountInfo: Qe
  }), st) : ye.default.createElement("div", {
    className: (0, T.classnamesConvertMeToStylexPlease)({
      [F.default.chatlistPanelClosed]: He && qe,
      [F.default.pane]: true,
      [F.default.paneOne]: true
    })
  }, te.default && (!He || qe) && ye.default.createElement(_.default, {
    headerRef: v,
    mute: V.MuteCollection.globalMute(),
    settings: te.default,
    onSelectChatClick: $e,
    chatListCollapsed: He,
    isMultiSelectMode: ze,
    activeAccountInfo: Qe
  }), He ? ye.default.createElement(A.CollapsedChatlistPanel, null) : st);
  const pt = ye.default.createElement("div", {
    className: (0, T.classnamesConvertMeToStylexPlease)(F.default.pane, F.default.paneTwo)
  }, (0, oe.webChatlistToggleEnabled)() && qe && ye.default.createElement(Q.PaneToggle, {
    onClick: () => {
      let e;
      let t;
      if (He) {
        e = pe.ChatlistPanelState.FULL;
        t = false;
      } else {
        e = pe.ChatlistPanelState.COLLAPSED;
        t = true;
      }
      (0, pe.setChatlistPanelState)(e);
      Ve(t);
    },
    pointerDirection: He ? "right" : "left"
  }), ye.default.createElement(k.default, {
    animate: t,
    ref: we
  }));
  const mt = ye.default.createElement("div", {
    className: (0, T.classnamesConvertMeToStylexPlease)({
      [F.default.pane]: true,
      [F.default.paneThree]: true,
      [F.default.paneThreeWithNavBar]: (0, oe.topMenuRedesignEnabled)()
    }),
    ref: W
  }, ye.default.createElement(I.DrawerManagerComponent, {
    direction: I.Dir.RIGHT,
    onDrawerIn: () => {
      Re.current = false;
      w.Cmd.onPanesWillChange(3);
      je(true);
      Fe(true);
      w.Cmd.onPanesDidChange(3);
      We(true);
    },
    onDrawerOut: () => {
      Re.current = true;
      Fe(true);
      if (We(false)) {
        w.Cmd.onPanesWillChange(2);
        je(false);
        w.Cmd.onPanesDidChange(2);
      } else {
        je(false);
      }
    },
    onDrawerAnimationComplete: () => {
      Fe(false);
      if (Le && Re.current) {
        je(false);
      }
    }
  }));
  return ye.default.createElement(m.AppContextProvider, {
    rightDrawerOpen: Le,
    chatListCollapsed: He
  }, ye.default.createElement(se.UIE, {
    uimState: ue.UIMState.INACTIVE,
    displayName: "Main"
  }, ye.default.createElement(j.default, {
    className: it,
    onBlur: () => {
      xe.current.debounce(10);
    },
    ref: r,
    onShowKeyboardShortcuts: e => {
      let {
        target: t
      } = e;
      for (let e = 0; e < 5; e++) {
        if ((n = t) && n.getAttribute("contentEditable") || n instanceof HTMLInputElement) {
          return;
        }
        t = t.parentNode;
      }
      var n;
      if (Te.default) {
        U.ModalManager.open(ye.default.createElement(Te.default, null));
      }
      e.preventDefault();
    },
    skipNode: e => {
      let t = false;
      D.DrawerManager.existsDrawerLeft(n => {
        const a = G.current;
        t = t || n && Boolean(a == null ? undefined : a.containsDOMNode(e));
      });
      D.DrawerManager.existsDrawerMid(n => {
        const a = we.current;
        t = t || n && Boolean(a == null ? undefined : a.containsDOMNode(e));
      });
      return t;
    }
  }, ye.default.createElement(J.PopoverPortalBucket, null), ye.default.createElement(z.default, null), ye.default.createElement(d.default, null), ye.default.createElement(X.PiPManager, null), ye.default.createElement(ge.default, null), ut, undefined, undefined, ct, (0, oe.topMenuRedesignEnabled)() && dt, ft, pt, mt, false)));
};
exports.NavbarItems = undefined;
exports.hasPending = function () {
  const e = require("./261821.js").hasText;
  return W.MsgCollection.some(e => {
    const t = (0, G.accidentalDeleteMessageEnabled)() && e.pendingDeleteForMe;
    return W.MsgCollection.hasUnsentMessages() || t;
  }) || v.ChatCollection.some(e => e.isComposing()) || e();
};
var o = r(require("../vendor/348926.js"));
var l = r(require("../app/953268.js"));
var i = require("../app/898817.js");
var u = require("../app/8304.js");
var s = require("../app/904086.js");
var c = require("../app/685639.js");
var d = r(require("./712260.js"));
var f = require("./113428.js");
var p = r(require("../app/164325.js"));
var m = require("./99186.js");
var h = require("../app/789379.js");
var g = require("../app/72696.js");
var E = r(require("./49095.js"));
var v = require("../app/351053.js");
var _ = r(require("./299874.js"));
var y = r(require("./33758.js"));
var C = require("./793458.js");
var b = r(require("../main-chunk/638938.js"));
var M = r(require("../app/659177.js"));
var S = require("../app/438328.js");
var T = require("../app/396574.js");
require("../app/650201.js");
var w = require("../app/780549.js");
var A = require("./598490.js");
var P = require("../app/103440.js");
var O = require("../app/445729.js");
var k = r(require("./201937.js"));
var D = require("../app/900316.js");
var I = require("./708467.js");
require("../app/70354.js");
var R = require("../app/343168.js");
var N = r(require("../main-chunk/797163.js"));
var x = r(require("./693701.js"));
var L = r(require("./156095.js"));
require("../app/299950.js");
var j = r(require("./400390.js"));
var B = require("./426835.js");
var F = r(require("./485422.js"));
var G = require("../app/97858.js");
var U = require("../app/114850.js");
var W = require("../app/61113.js");
var H = require("./608834.js");
var V = require("../app/971804.js");
var q = require("./607452.js");
var Y = r(require("./338847.js"));
var z = r(require("./544815.js"));
var K = require("../app/95589.js");
var Q = require("./542612.js");
var X = require("./724360.js");
var Z = r(require("./65162.js"));
var J = require("../app/411342.js");
var $ = require("./425448.js");
var ee = require("../app/937001.js");
var te = r(require("../app/634152.js"));
var ne = require("../app/38878.js");
var ae = require("../app/973981.js");
var re = require("../app/667738.js");
var oe = require("../app/454905.js");
var le = r(require("./594696.js"));
var ie = require("../app/368170.js");
var ue = require("../app/238669.js");
var se = require("../app/392632.js");
var ce = require("../app/460148.js");
var de = r(require("../app/79291.js"));
var fe = r(require("./851707.js"));
var pe = require("../app/757453.js");
var me = require("../app/377773.js");
var he = require("../app/905225.js");
var ge = r(require("./317406.js"));
var Ee = require("../vendor/548360.js");
var ve = require("../app/113189.js");
var _e = r(require("../vendor/730381.js"));
var ye = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = we(t);
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
var Ce = require("./597518.js");
var be = r(require("../app/637660.js"));
var Me = require("../app/808446.js");
var Se = r(require("../app/558532.js"));
var Te = r(require("./494843.js"));
function we(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (we = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const {
  CRASH_REPORTER_EVENTS: Ae,
  updateCrashReporter: Pe
} = {
  CRASH_REPORTER_EVENTS: null,
  updateCrashReporter: null
};
function Oe() {
  window.history.pushState({}, "", window.location.href);
}
const ke = require("../vendor/76672.js").Mirrored(["Chats", "Communities", "Newsletters", "Catalog", "Orders", "Labels", "Starred", "Archived", "Settings", "Beta", "Status"]);
exports.NavbarItems = ke;