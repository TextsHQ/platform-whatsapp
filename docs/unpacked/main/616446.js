var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("../app/780549.js");
var o = require("../app/877171.js");
var l = require("./931178.js");
var i = a(require("./804418.js"));
require("./807078.js");
var u = require("../app/664149.js");
var s = require("../app/675085.js");
var c = require("./225446.js");
var d = require("../app/581354.js");
var f = require("../app/690495.js");
var p = a(require("../app/469733.js"));
var m = a(require("../app/335540.js"));
var h = require("../app/163755.js");
var g = a(require("../app/932325.js"));
var E = require("../app/196127.js");
var v = a(require("./419154.js"));
var _ = require("./48794.js");
var y = a(require("./438462.js"));
var C = require("../app/97858.js");
var b = require("../app/114850.js");
var M = require("../app/939716.js");
var S = require("../app/787742.js");
var T = require("./722119.js");
var w = require("./603960.js");
var A = require("./400874.js");
var P = require("./474474.js");
var O = a(require("./313014.js"));
a(require("../app/563226.js"));
var k = require("./774401.js");
var D = require("./435595.js");
var I = require("./594149.js");
var R = require("./948101.js");
var N = require("./708127.js");
var x = require("../app/163139.js");
var L = require("../app/392632.js");
var j = a(require("../app/37875.js"));
var B = a(require("../app/844453.js"));
var F = require("./609859.js");
var G = require("../vendor/548360.js");
var U = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = Y(t);
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
var W = a(require("../app/156720.js"));
var H = a(require("../app/710629.js"));
var V = require("./871210.js");
var q = a(require("../app/17533.js"));
function Y(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (Y = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const z = {
  color: "qcuzhokb"
};
const K = {
  position: "g0rxnol2",
  top: "bzb0giyb",
  width: "cxkis295"
};
const Q = {
  display: "p357zi0d"
};
const X = {
  position: "g0rxnol2",
  paddingStart: "rppts313"
};
const Z = 75;
function J(e, t) {
  const {
    msg: n,
    menuTransition: a,
    isMsgVisible: Y,
    onOpenForwardFlow: J,
    rowIsKeyboardFocused: $ = false,
    onModalClosed: ee
  } = e;
  const te = (0, U.useRef)(null);
  const ne = (0, U.useRef)();
  const [ae, re] = (0, U.useState)(null);
  const [oe, le] = (0, U.useState)(false);
  const [ie, ue] = (0, U.useState)(null);
  const [se, ce] = (0, U.useState)(null);
  const [de, fe] = (0, U.useState)(false);
  const pe = (0, U.useRef)(null);
  const [me] = (0, V.useMsgValues)(n.id, [h.getAsRevoked]);
  if (me) {
    r.Cmd.refreshMessages();
  }
  const he = (0, q.default)(() => {
    var e;
    e = {
      preventScroll: true
    };
    if (pe.current) {
      m.default.focus(pe.current, e);
    }
  });
  const ge = (0, H.default)(fe, Z);
  (0, U.useEffect)(() => {
    ge(oe || ie != null || $);
  }, [oe, ie, ge, $]);
  const Ee = () => {
    le(true);
  };
  const ve = () => {
    le(false);
  };
  const _e = () => {
    ge(oe || ie != null || $);
  };
  const ye = () => {
    r.Cmd.msgInfoDrawer((0, x.unproxy)(n.unsafe()));
  };
  const Ce = () => {
    const e = (0, x.unproxy)(n.unsafe());
    const t = (0, h.getChat)(e);
    t.composeQuotedMsg = e;
    o.ComposeBoxActions.focus(t);
  };
  const be = () => {
    const e = (0, x.unproxy)(n.unsafe());
    (0, O.default)(e);
  };
  const Me = () => {
    const e = (0, x.unproxy)(n.unsafe());
    r.Cmd.sendStarMsgs((0, h.getChat)(e), [e]);
  };
  const Se = () => {
    const e = (0, x.unproxy)(n.unsafe());
    r.Cmd.sendUnstarMsgs((0, h.getChat)(e), [e]);
  };
  const Te = () => {
    (0, c.addStickerMsgsToFavorites)([(0, x.unproxy)(n.unsafe())]);
  };
  const we = () => {
    (0, c.removeStickerMsgFromFavorites)((0, x.unproxy)(n.unsafe()));
  };
  const Ae = () => {
    b.ModalManager.open(U.default.createElement(i.default, {
      chat: (0, h.getChat)(n),
      msgList: [(0, x.unproxy)(n.unsafe())],
      isMsgVisible: Y
    }));
    k.UiRevokeActionHelper.startSession();
    k.UiRevokeActionHelper.messageSelected();
  };
  const Pe = () => {
    (0, d.findChat)(n.author, "messageGroupedSticker").then(e => {
      r.Cmd.openChatFromUnread(e).then(t => {
        if (t) {
          o.ComposeBoxActions.focus(e);
        }
      });
    });
  };
  const Oe = () => {
    if (!(ee == null)) {
      ee();
    }
    ue(null);
    he();
  };
  const ke = () => {
    if (!(ee == null)) {
      ee();
    }
    ce(null);
    he();
  };
  const De = (0, q.default)(e => {
    if ((0, P.canReactToMessage)(e)) {
      ce({
        dirY: u.DirY.BOTTOM,
        dirX: (0, S.getIsSentByMe)(e) ? u.DirX.LEFT : u.DirX.RIGHT,
        type: u.MenuType.ReactionPicker,
        menu: U.default.createElement(A.ReactionsPanel, {
          msgId: e.id.toString(),
          onSelection: t => {
            (0, I.sendReactionToMsg)(e, t).catch(() => {});
            ke();
          }
        }),
        flipOnRTL: true,
        anchor: ne.current
      });
    }
  });
  const Ie = e => {
    if (!(0, P.canReactToMessage)(e)) {
      return;
    }
    const t = {
      dirY: u.DirY.TOP,
      dirX: u.DirX.CENTER,
      type: u.MenuType.ReactionSendTray,
      menu: U.default.createElement(N.SendReactionsTrayContainer, {
        msg: n.unsafe(),
        selectedCallback: t => {
          if (t !== R.MORE_REACTIONS) {
            (0, I.sendReactionToMsg)(e, t).catch(() => {});
          } else {
            self.setTimeout(() => {
              De(e);
            }, 150);
          }
          Oe();
        },
        onMouseEnter: Ee,
        onMouseOver: Ee,
        onMouseLeave: ve
      }),
      flipOnRTL: false,
      anchor: ne.current
    };
    ue(t);
  };
  const Re = (e, t) => {
    if (t && ae) {
      return void re(null);
    }
    const a = t ? (() => {
      if (te.current) {
        return te.current.getContext();
      }
    })() : e;
    const o = (0, x.unproxy)(n);
    const i = [];
    if ((0, S.getIsSentByMe)(o) && !(0, h.getAsRevoked)(o)) {
      i.push(U.default.createElement(s.DropdownItem, {
        key: "info",
        testid: "mi-msg-info",
        action: ye
      }, G.fbt._("Message info", null, {
        hk: "2h2aKZ"
      })));
    }
    if ((0, T.canReplyMsg)(o.unsafe())) {
      i.push(U.default.createElement(s.DropdownItem, {
        key: "reply",
        testid: "mi-msg-reply",
        action: Ce
      }, G.fbt._("Reply", null, {
        hk: "1C7DPa"
      })));
    }
    if ((0, T.canPrivateReply)(o.unsafe()) || (0, T.canPrivateReplyInRestrictedGrp)(o.unsafe())) {
      i.push(U.default.createElement(s.DropdownItem, {
        key: "private_reply",
        testid: "mi-msg-reply",
        action: be
      }, G.fbt._("Reply privately", null, {
        hk: "1XQeK2"
      })));
    }
    if ((0, P.canReactToMessage)(n.unsafe())) {
      i.push(U.default.createElement(s.DropdownItem, {
        key: "sendReaction",
        testid: "send-reaction-btn",
        action: () => {
          Ie(n.unsafe());
        }
      }, G.fbt._("React", null, {
        hk: "1mI4Nl"
      })));
    }
    if ((0, M.canForwardMsg)(o.unsafe())) {
      i.push(U.default.createElement(s.DropdownItem, {
        key: "forward",
        testid: "mi-msg-forward",
        action: () => {
          J(true, n.unsafe());
        }
      }, g.default.t(60)));
    }
    if ((0, M.canStarMsg)(o.unsafe())) {
      if (o.star) {
        i.push(U.default.createElement(s.DropdownItem, {
          key: "star",
          testid: "mi-msg-unstar",
          action: Se
        }, g.default.t(153)));
      } else {
        i.push(U.default.createElement(s.DropdownItem, {
          key: "star",
          testid: "mi-msg-star",
          action: Me
        }, g.default.t(146)));
      }
    }
    if ((0, C.isFavoriteStickersEnabled)()) {
      if ((0, c.isStickerFilehashFavorited)(n.filehash)) {
        i.push(U.default.createElement(s.DropdownItem, {
          key: "remove-favorite-sticker",
          testid: "mi-remove-favorite-sticker",
          action: we
        }, G.fbt._("Remove from favorites", null, {
          hk: "2tJgjX"
        })));
      } else {
        i.push(U.default.createElement(s.DropdownItem, {
          key: "favorite-sticker",
          testid: "mi-favorite-sticker",
          action: Te
        }, G.fbt._("Add to favorites", null, {
          hk: "1iPksH"
        })));
      }
    }
    const {
      stickerPackId: u,
      isFirstParty: d
    } = n.mediaData;
    if (u && d === true) {
      i.push(U.default.createElement(s.DropdownItem, {
        key: "open-sticker-pack",
        testid: "mi-open-sticker-pack",
        action: () => r.Cmd.openStickerPack(u)
      }, G.fbt._("View pack", null, {
        hk: "1GGSoX"
      })));
    }
    const f = E.InMemoryMediaBlobCache.get(n.filehash);
    if (f != null && (0, l.supportsCopyImageToClipboard)()) {
      i.push(U.default.createElement(s.DropdownItem, {
        key: "copy-favorite-sticker",
        testid: "mi-copy-favorite-sticker",
        action: () => {
          (0, l.copyImageToClipboard)(f);
        }
      }, G.fbt._("Copy sticker image", null, {
        hk: "4FVy4K"
      })));
    }
    i.push(U.default.createElement(s.DropdownItem, {
      key: "delete",
      testid: "mi-msg-delete",
      action: Ae
    }, g.default.t(47)));
    if ((0, S.getIsGroupMsg)(n) && n.author && !(0, S.getIsSentByMe)(n)) {
      i.push(U.default.createElement(s.DropdownItem, {
        key: "author",
        testid: "mi-msg-author",
        action: Pe
      }, G.fbt._("Message {author}", [G.fbt._param("author", n.displayName())], {
        hk: "1kM7Cg"
      })));
    }
    re({
      menu: i,
      anchor: a,
      theme: s.ThemeOptions.COMPACT
    });
  };
  const Ne = () => {
    if (!(ee == null)) {
      ee();
    }
    re(null);
  };
  const xe = {
    scrollMsg: (t, n) => {
      e.scrollMsg(t, n);
    }
  };
  let Le;
  let je;
  let Be;
  let Fe;
  (0, U.useImperativeHandle)(t, () => xe);
  if (oe || ae || $) {
    Le = U.default.createElement(v.default, {
      msg: n.unsafe(),
      hasAuthor: false,
      displayType: e.displayType,
      position: _.MsgPosition.SINGLE,
      key: "icon-context",
      ref: te,
      onToggle: e => {
        Re(e);
      },
      isGroupedSticker: true,
      role: "button",
      ariaLabel: G.fbt._("Context Menu", null, {
        hk: "17twZE"
      }),
      tabIndex: 0,
      contextOwnerIsKeyboardFocused: $
    });
  }
  if (e.isFocused) {
    je = U.default.createElement(F.WhileFocusedListener, {
      parent: xe
    });
  }
  if (ae) {
    Be = U.default.createElement(L.UIE, {
      displayName: "MsgContextMenu",
      escapable: true,
      popable: true,
      dismissOnWindowResize: true,
      requestDismiss: Ne
    }, U.default.createElement(j.default, {
      contextMenu: ae
    }));
  }
  if (ie) {
    Fe = U.default.createElement(L.UIE, {
      displayName: "MsgReaction",
      escapable: true,
      popable: true,
      dismissOnWindowResize: true,
      requestDismiss: Oe
    }, U.default.createElement(j.default, {
      contextMenu: ie
    }));
  } else if (se) {
    Fe = U.default.createElement(L.UIE, {
      displayName: "MsgReactionPicker",
      escapable: true,
      popable: true,
      dismissOnWindowResize: true,
      requestDismiss: ke
    }, U.default.createElement(j.default, {
      contextMenu: se
    }));
  }
  const Ge = U.default.createElement(y.default, {
    key: "sticker-bubble",
    mediaData: n.mediaData,
    msg: n,
    displayAuthor: false,
    forwardRef: e.forwardRef,
    animateOnView: true,
    displayType: e.displayType,
    onDetailsPaneClosed: ee,
    isGroupedSticker: true
  });
  const Ue = [Ge];
  if ((0, P.canReactToMessage)(n.unsafe())) {
    let e = null;
    if (de) {
      e = U.default.createElement(p.default, null, U.default.createElement(D.Round, {
        testid: "reaction-entry-point",
        label: G.fbt._("React", null, {
          hk: "2Uy7fL"
        }),
        theme: D.RoundTheme.QuickAction,
        onClick: () => {
          n.unsafe();
          return void (ie ? Oe() : Ie(n.unsafe()));
        },
        small: true
      }, U.default.createElement(w.ReactIcon, {
        className: (0, W.default)(z),
        width: 15
      })));
    }
    const t = U.default.createElement("div", {
      key: "reaction-entry-point",
      ref: ne,
      className: (0, W.default)(K)
    }, e);
    if ((0, S.getIsSentByMe)(n)) {
      Ue.unshift(t);
    } else {
      Ue.push(t);
    }
  }
  return U.default.createElement("div", {
    className: (0, W.default)(Q),
    onMouseEnter: Ee,
    onFocus: _e,
    onBlur: _e,
    ref: pe,
    onMouseLeave: ve
  }, U.default.createElement(f.FlexRow, null, Ue), U.default.createElement("div", {
    className: (0, W.default)(X)
  }, U.default.createElement(B.default, {
    transitionName: a
  }, Le)), Be, Fe, je);
}
var $ = (0, U.forwardRef)(J);
exports.default = $;