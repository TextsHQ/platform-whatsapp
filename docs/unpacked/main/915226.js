var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../vendor/967154.js"));
var o = a(require("../app/670983.js"));
var l = require("../app/287461.js");
var i = a(require("./190643.js"));
var u = require("./468926.js");
var s = require("../app/396574.js");
var c = require("../app/650201.js");
var d = require("../app/780549.js");
var f = require("../app/103440.js");
var p = a(require("./804418.js"));
var m = require("../app/356097.js");
var h = require("../main-chunk/465113.js");
var g = require("../app/675085.js");
var E = a(require("../app/395767.js"));
var v = require("./821130.js");
var _ = a(require("../app/988410.js"));
var y = a(require("../app/335540.js"));
var C = require("./930302.js");
var b = require("./361483.js");
var M = require("../app/163755.js");
var S = require("./911842.js");
var T = a(require("../app/591748.js"));
var w = require("./776078.js");
var A = a(require("./650199.js"));
var P = require("../app/644234.js");
var O = a(require("./802574.js"));
var k = require("./602876.js");
var D = a(require("./599664.js"));
var I = a(require("./6323.js"));
var R = a(require("./428759.js"));
var N = a(require("./616446.js"));
var x = a(require("./59376.js"));
var L = require("./663940.js");
var j = a(require("./419154.js"));
var B = require("./48794.js");
var F = require("./115900.js");
var G = require("../app/97858.js");
var U = require("../app/114850.js");
var W = require("../app/939716.js");
var H = require("../app/787742.js");
var V = require("./192071.js");
var q = a(require("./906940.js"));
var Y = require("./541345.js");
var z = a(require("./456825.js"));
var K = require("./474474.js");
var Q = require("./774401.js");
var X = require("./435595.js");
var Z = require("../app/163139.js");
var J = require("../app/392632.js");
var $ = a(require("../app/37875.js"));
var ee = a(require("../app/844453.js"));
var te = a(require("./409468.js"));
var ne = require("./205528.js");
var ae = require("./609859.js");
var re = require("./669145.js");
var oe = require("../vendor/548360.js");
var le = a(require("../vendor/441143.js"));
var ie = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = se(t);
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
var ue = a(require("../app/408662.js"));
a(require("../app/156720.js"));
function se(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (se = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const ce = {
  svgColor: {
    color: "r83rrh3w"
  }
};
const de = [k.AlbumPosition.TOP_LEFT, k.AlbumPosition.TOP_RIGHT, k.AlbumPosition.BOTTOM_LEFT, k.AlbumPosition.BOTTOM_RIGHT];
class fe extends ie.Component {
  getContainerElement() {
    return this._refAlbumWrapper.current;
  }
  constructor(e) {
    super(e);
    this._refAlbumWrapper = (0, ie.createRef)();
    this.refAlbumComponents = {};
    this.setRefContext = e => {
      this.refContext = e;
    };
    this._refTail = (0, ie.createRef)();
    this.setRefBubble = e => {
      this.refBubble = e;
    };
    this._setRefLeftStickerBubble = e => {
      this._refLeftStickerBubble = e;
    };
    this._setRefRightStickerBubble = e => {
      this._refRightStickerBubble = e;
    };
    this._firstStickerRef = (0, ie.createRef)();
    this._secondStickerRef = (0, ie.createRef)();
    this.mouseOver = e => {
      if (!(e.buttons || this.state.hover)) {
        this.setState({
          hover: true
        });
      }
    };
    this.mouseDown = () => {
      if (this.state.hover) {
        this.setState({
          hover: false
        });
      }
    };
    this.contextMenu = e => {
      e.stopPropagation();
    };
    this._handleImageAlbumAriaLabel = e => {
      this.setState({
        imageAlbumCustomAriaLabel: e
      });
    };
    this.openForwardFlow = (e, t) => {
      const {
        msgs: n
      } = this.props;
      let a;
      for (let e = 0; e < n.length; e++) {
        if ((0, M.getIsUnsentMedia)(n[e])) {
          a = oe.fbt._({
            "*": "Wait until the messages finish sending and displays a checkmark before forwarding.",
            _1: "Wait until the message finishes sending and displays a checkmark before forwarding."
          }, [oe.fbt._plural(1)], {
            hk: "Q1oiD"
          });
          break;
        }
      }
      if (a) {
        U.ModalManager.open(ie.default.createElement(f.ConfirmPopup, {
          title: oe.fbt._("Can't Forward", null, {
            hk: "3fgR0v"
          }),
          onOK: () => U.ModalManager.close(),
          okText: (0, E.default)("OK")
        }, a));
      } else if (e) {
        this._handleSelectClick({
          selectedMsg: t
        });
      } else {
        U.ModalManager.open(ie.default.createElement(b.ForwardMessageModalLoadable, {
          msgs: n.map(e => e.unsafe()),
          onClose: () => U.ModalManager.close()
        }), {
          transition: "modal-flow"
        });
      }
    };
    this._handleStar = () => {
      const {
        msgs: e
      } = this.props;
      d.Cmd.sendStarMsgs((0, M.getChat)(e[0]), e);
    };
    this._handleUnstar = () => {
      const {
        msgs: e
      } = this.props;
      d.Cmd.sendUnstarMsgs((0, M.getChat)(e[0]), e);
    };
    this._returnFocusToRow = () => {
      if ((0, G.messageListA11yRedesignEnabled)()) {
        this.focus({
          preventScroll: true
        });
      }
    };
    this._handleModalClosed = () => {
      this._returnFocusToRow();
    };
    this._handleSelectClick = e => {
      const {
        selectedMsg: t,
        event: n
      } = e;
      Q.UiRevokeActionHelper.startSession();
      if (n) {
        n.stopPropagation();
      }
      if (t) {
        return void this.props.onMessageSelect((0, Z.unproxy)(t.unsafe()), !this.props.selectedMessages.isSelected((0, Z.unproxy)(t)), n);
      }
      const a = this.state.selectedCount === 0;
      this.props.msgs.forEach(e => {
        this.props.onMessageSelect((0, Z.unproxy)(e.unsafe()), a, n);
      });
    };
    this._computeSelectedCount = () => {
      const {
        msgs: e,
        selectedMessages: t
      } = this.props;
      let n = 0;
      e.forEach(e => {
        if (t.isSelected((0, Z.unproxy)(e.unsafe()))) {
          n++;
        }
      });
      return n;
    };
    this._handleDownload = () => {
      v.FileSaver.initDownload(this.props.msgs.map(e => e.unsafe()));
    };
    this._handleDeleteMessage = () => {
      const {
        msgs: e
      } = this.props;
      U.ModalManager.open(ie.default.createElement(p.default, {
        chat: (0, M.getChat)(e[0].unsafe()),
        msgList: e.map(e => e.unsafe()),
        isMsgVisible: this.props.isMsgVisible
      }));
      Q.UiRevokeActionHelper.startSession();
      Q.UiRevokeActionHelper.messageSelected();
    };
    this._getMenuRefContext = () => {
      if (this.refContext) {
        return this.refContext.getContext();
      }
    };
    this._handleMenu = (e, t) => {
      const {
        msgs: n
      } = this.props;
      if (t && this.state.contextMenu) {
        return void this.setState({
          contextMenu: null
        });
      }
      const a = t ? this._getMenuRefContext() : e;
      const r = [];
      if (n.every(e => (0, W.canDownloadMsg)(e.unsafe()))) {
        r.push(ie.default.createElement(g.DropdownItem, {
          key: "download",
          testid: "mi-msg-download",
          action: this._handleDownload
        }, oe.fbt._("Download all", null, {
          hk: "22A8O7"
        })));
      }
      if (n.every(e => (0, W.canForwardMsg)(e.unsafe()))) {
        r.push(ie.default.createElement(g.DropdownItem, {
          key: "forward",
          testid: "mi-msg-forward",
          action: () => {
            this.openForwardFlow(true);
          }
        }, oe.fbt._("Forward all", null, {
          hk: "1iWm4D"
        })));
      }
      if (n.every(e => (0, W.canStarMsg)(e.unsafe()))) {
        if (n.every(e => e.star)) {
          r.push(ie.default.createElement(g.DropdownItem, {
            key: "star",
            testid: "mi-msg-unstar",
            action: () => {
              this._handleUnstar();
            }
          }, oe.fbt._("Unstar all", null, {
            hk: "3XG8TV"
          })));
        } else {
          r.push(ie.default.createElement(g.DropdownItem, {
            key: "star",
            testid: "mi-msg-star",
            action: () => {
              this._handleStar();
            }
          }, oe.fbt._("Star all", null, {
            hk: "k3tpf"
          })));
        }
      }
      r.push(ie.default.createElement(g.DropdownItem, {
        key: "delete",
        testid: "mi-msg-delete",
        action: this._handleDeleteMessage
      }, oe.fbt._("Delete all", null, {
        hk: "4FG8uO"
      })));
      this.setState({
        contextMenu: {
          menu: r,
          anchor: a,
          theme: g.ThemeOptions.COMPACT
        }
      });
    };
    this.openContextMenu = () => {
      if (this.state.hover) {
        this._handleMenu(undefined, true);
      } else {
        this.setState({
          hover: true
        }, () => {
          this._handleMenu(undefined, true);
        });
      }
    };
    this.closeContextMenu = () => {
      this._handleModalClosed();
      const e = {
        contextMenu: null
      };
      if (this._isKeyboardUser()) {
        e.hover = false;
      }
      this.setState(e);
    };
    this._isWrapperKeyboardFocused = () => {
      var e;
      var t;
      const n = (e = (t = this._refAlbumWrapper.current) === null || t === undefined ? undefined : t.contains(document.activeElement)) !== null && e !== undefined && e;
      return this._isKeyboardUser() && n;
    };
    this._handleAlbumGridRendered = (e, t) => {
      if (e) {
        this.refAlbumComponents[t.id.toString()] = e;
      } else {
        delete this.refAlbumComponents[t.id.toString()];
      }
    };
    this.scrollMsg = (e, t) => {
      const n = this._refAlbumWrapper.current;
      if (!n) {
        return;
      }
      const a = n.offsetParent;
      if (a) {
        (0, le.default)(a instanceof HTMLElement, "DOM offset parent is not a valid HTMLElement");
        (0, h.scrollAt)(n, a, t).then(e);
      }
    };
    this.highlight = () => {
      const e = this._refTail.current;
      let t;
      if (this.isGroupedSticker()) {
        if (this.props.focusedMsgIndex === 0) {
          t = this._refLeftStickerBubble;
        } else if (this.props.focusedMsgIndex === 1) {
          t = this._refRightStickerBubble;
        }
      } else {
        t = this.refBubble;
      }
      if (t) {
        _.default.indicateFocus(t, te.default.highlightAnimation);
        _.default.indicateFocus(e, te.default.highlightAnimation);
        if (this.props.isFocusable) {
          this.focus({
            preventScroll: true
          });
        }
      }
    };
    this._handleReactionChange = () => {
      const e = this.props.msgs.map(e => e.id.toString());
      (0, K.lastMessageReactionChange)(e);
      if ((0, G.messageCustomAriaLabelEnabled)()) {
        (0, F.getAlbumRowAriaLabel)(this.props.msgs).then(this._handleImageAlbumAriaLabel).catch(() => {});
      }
    };
    const t = this._computeSelectedCount();
    this.state = {
      contextMenu: null,
      hover: false,
      selectedCount: t,
      imageAlbumCustomAriaLabel: null
    };
  }
  componentDidMount() {
    if ((0, c.isFeatureEnabled)("media_existence_check")) {
      this.props.msgs.map(e => (0, M.getAsAlbumAsset)(e.unsafe())).filter(Boolean).forEach(e => {
        (0, P.checkMediaExistence)(e);
      });
    }
  }
  componentDidUpdate(e) {
    if (this.props.msgs !== e.msgs) {
      if ((0, c.isFeatureEnabled)("media_existence_check")) {
        const t = new Set(e.msgs);
        this.props.msgs.map(e => (0, M.getAsAlbumAsset)(e.unsafe())).filter(Boolean).filter(e => !t.has(e)).forEach(e => {
          (0, P.checkMediaExistence)(e);
        });
      }
      if ((0, G.messageCustomAriaLabelEnabled)()) {
        (0, F.getAlbumRowAriaLabel)(this.props.msgs).then(this._handleImageAlbumAriaLabel).catch(() => {});
      }
    }
  }
  shouldComponentUpdate(e, t) {
    return !(0, ue.default)(t, this.state) || !(0, ue.default)(e.msgs, this.props.msgs) || e.selectable !== this.props.selectable;
  }
  onSelectChange(e) {
    let t;
    t = this.isGroupedSticker() ? this._computeSelectedCount() : e ? this.props.msgs.length : 0;
    if (this.state.selectedCount !== t) {
      this.setState({
        selectedCount: t
      });
    }
  }
  _isKeyboardUser() {
    return this.context.isKeyboardUser;
  }
  isGroupedSticker() {
    const [e, t] = this.props.msgs;
    return (0, M.getAsGroupedSticker)(e.unsafe()) != null && (0, M.getAsGroupedSticker)(t.unsafe()) != null;
  }
  focus(e) {
    var t;
    if ((t = this._refAlbumWrapper) === null || t === undefined ? undefined : t.current) {
      y.default.focus(this._refAlbumWrapper.current, e);
    }
  }
  render() {
    var e;
    const {
      msgs: t,
      position: n,
      isMsgVisible: a,
      albumId: c,
      isFocusedAlbum: d,
      focusedMsgIndex: f,
      selectedMessages: p,
      isFocusable: h,
      displayType: g
    } = this.props;
    const [E, v] = t;
    const _ = (0, H.getIsSentByMe)(E);
    const y = (0, H.getIsGroupMsg)(E);
    const b = this.isGroupedSticker();
    const T = (0, G.messageListA11yRedesignEnabled)() && this._isWrapperKeyboardFocused();
    const P = t.length > L.ALBUM_MIN_SIZE ? t.length - L.ALBUM_MIN_SIZE + 1 : null;
    const k = (0, m.isWideDisplay)(g);
    const F = !k && (n === B.MsgPosition.FRONT || n === B.MsgPosition.SINGLE || b);
    const U = y && !_ && !!F && g === m.DISPLAY_TYPE.CONVERSATION && !this.props.selectable && ((e = E.senderObj) === null || e === undefined ? undefined : e.id) != null ? ie.default.createElement(S.GroupChatProfilePicture, {
      userContact: E.senderObj,
      chatWid: (0, M.getChat)(E.unsafe()).id
    }) : null;
    const Q = (0, s.classnamesConvertMeToStylexPlease)({
      [te.default.msgContinuation]: (n === B.MsgPosition.FRONT || n === B.MsgPosition.MID) && !k,
      "message-out": _,
      "message-in": !_,
      [w.LIST_FOCUSABLE_ITEM_CLASS_NAME]: h,
      [te.default.wrapperProfilePictureDisplayed]: g !== m.DISPLAY_TYPE.ANNOUNCEMENT,
      [te.default.wrapperAdjustedOneOnOneChat]: !(0, M.getChat)(E.unsafe()).isGroup,
      [te.default.row]: true,
      [te.default.msg]: true,
      [te.default.animateMsg]: (0, l.getABPropConfigValue)("web_animate_messages"),
      [te.default.msgAnnouncement]: k
    });
    const le = (!_ || k) && y;
    let ue;
    if (le) {
      const e = (0, s.classnamesConvertMeToStylexPlease)({
        [te.default.groupStickerAuthor]: b,
        [te.default.groupStickerAuthorAnnouncement]: k,
        [te.default.author]: true,
        [te.default.groupStickerAuthorOutgoing]: _
      });
      ue = ie.default.createElement("div", {
        className: e
      }, ie.default.createElement(D.default, {
        msg: t[0],
        contact: t[0].senderObj,
        albumId: c,
        displayType: g
      }));
    }
    const se = (0, s.classnamesConvertMeToStylexPlease)({
      [te.default.messageTransparent]: b,
      [te.default.hasTail]: F,
      [te.default.tailOverrideHide]: b && F && (_ || !y),
      [te.default.hasAuthor]: !this.isGroupedSticker() && le,
      [te.default.forwarded]: !this.isGroupedSticker() && (0, V.showForwarded)(t[0]),
      [te.default.message]: true
    });
    const fe = (0, s.classnamesConvertMeToStylexPlease)({
      [te.default.messageBackground]: !b,
      [te.default.hasBorderBox]: !b,
      [te.default.albumBubbleContainer]: true,
      [te.default.albumAnnouncementBubbleContainer]: k
    });
    let pe;
    if (F) {
      const e = (0, ne.getTailIcon)(_);
      pe = ie.default.createElement(e, {
        className: te.default.tail,
        containerRef: this._refTail
      });
    }
    const me = [];
    if ((0, W.canQuickForwardMsg)(E.unsafe())) {
      const e = ie.default.createElement(X.Round, {
        label: oe.fbt._("Forward media", null, {
          hk: "4DjgJi"
        }),
        theme: X.RoundTheme.QuickAction,
        className: (0, s.classnamesConvertMeToStylexPlease)({
          [te.default.authorForward]: le,
          [te.default.quickActionButton]: true
        }),
        onClick: () => {
          this.openForwardFlow(false);
        }
      }, ie.default.createElement(C.ForwardChatIcon, {
        xstyle: ce.svgColor
      }));
      me.push(e);
    }
    const he = t.map(e => (0, M.getAsAlbumAsset)(e.unsafe())).filter(Boolean);
    const ge = he.some(e => e.hasReaction === true);
    let Ee;
    let ve;
    let _e;
    if (this.state.hover || this.state.contextMenu || T) {
      Ee = ie.default.createElement(j.default, {
        msg: E.unsafe(),
        hasAuthor: le,
        position: n,
        key: "icon-context",
        ref: this.setRefContext,
        onToggle: e => {
          this._handleMenu(e);
        },
        role: "button",
        ariaLabel: oe.fbt._("Context Menu", null, {
          hk: "17twZE"
        }),
        tabIndex: 0,
        displayType: g
      });
    }
    ve = this.state.contextMenu ? "none" : (0, M.getIsRTL)(E) ? "pop-fast-reverse" : "pop-fast";
    if (this.state.contextMenu) {
      _e = ie.default.createElement(J.UIE, {
        displayName: "MsgContextMenu",
        escapable: true,
        popable: true,
        dismissOnWindowResize: true,
        requestDismiss: this.closeContextMenu
      }, ie.default.createElement($.default, {
        contextMenu: this.state.contextMenu
      }));
    }
    const ye = this.props.selectable ? ie.default.createElement(I.default, {
      checked: this.state.selectedCount > 0,
      theme: this.state.selectedCount > 0 && this.state.selectedCount < t.length ? u.CheckboxTheme.PARTIAL : undefined,
      onClick: e => {
        this._handleSelectClick({
          event: e
        });
      }
    }) : null;
    let Ce;
    if (this.props.isFocusedAlbum) {
      Ce = ie.default.createElement(ae.WhileFocusedListener, {
        parent: this
      });
    }
    if (b) {
      var be;
      var Me;
      const e = t.map(e => ie.default.createElement(ae.SelectionListener, {
        key: e.id.toString(),
        parent: this,
        msgId: e.id.toString(),
        selectedMessages: p
      }));
      const n = this.props.selectable ? ie.default.createElement(x.default, {
        checked: this.props.selectedMessages.isSelected((0, Z.unproxy)(E.unsafe())),
        onClick: () => {
          this._handleSelectClick({
            selectedMsg: E.unsafe()
          });
        }
      }) : null;
      const r = this.props.selectable ? ie.default.createElement(x.default, {
        checked: this.props.selectedMessages.isSelected((0, Z.unproxy)(v.unsafe())),
        onClick: () => {
          this._handleSelectClick({
            selectedMsg: v.unsafe()
          });
        }
      }) : null;
      const l = t.some(e => (0, K.canReactToMessage)(e.unsafe())) ? ie.default.createElement(q.default, {
        msgs: t,
        showForMessages: false,
        showForAddOns: true,
        displayType: m.DISPLAY_TYPE.CONVERSATION
      }) : null;
      const i = (0, s.classnamesConvertMeToStylexPlease)({
        [te.default.groupStickerContainer]: true,
        [te.default.groupStickerAnnouncementContainer]: k
      });
      const u = ie.default.createElement("div", {
        className: Q,
        "data-id": c,
        ref: this._refAlbumWrapper,
        tabIndex: -1
      }, ie.default.createElement(ee.default, {
        transitionName: "delay-leave"
      }, ye), ie.default.createElement("div", {
        className: se,
        onContextMenu: this.contextMenu
      }, pe, U, ue, ie.default.createElement("div", {
        className: i
      }, ie.default.createElement("div", {
        onMouseEnter: (be = this._firstStickerRef.current) === null || be === undefined ? undefined : be.startAnimation,
        className: te.default.singleGroupedStickerContainer,
        ref: this._setRefLeftStickerBubble
      }, ie.default.createElement(ee.default, {
        transitionName: "delay-leave"
      }, n), ie.default.createElement(N.default, {
        msg: (0, o.default)((0, M.getAsGroupedSticker)(E.unsafe()), "getAsGroupedSticker(firstMsg.unsafe())"),
        menuTransition: ve,
        onOpenForwardFlow: this.openForwardFlow,
        isMsgVisible: a,
        scrollMsg: this.scrollMsg,
        highlight: this.highlight,
        isFocused: d && f === 0,
        forwardRef: this._firstStickerRef,
        displayType: g,
        rowIsKeyboardFocused: T,
        onModalClosed: this._handleModalClosed
      })), ie.default.createElement("div", {
        onMouseEnter: (Me = this._secondStickerRef.current) === null || Me === undefined ? undefined : Me.startAnimation,
        className: te.default.singleGroupedStickerContainer,
        ref: this._setRefRightStickerBubble
      }, ie.default.createElement(ee.default, {
        transitionName: "delay-leave"
      }, r), ie.default.createElement(N.default, {
        msg: (0, o.default)((0, M.getAsGroupedSticker)(v.unsafe()), "getAsGroupedSticker(secondMsg.unsafe())"),
        menuTransition: ve,
        onOpenForwardFlow: this.openForwardFlow,
        isMsgVisible: a,
        scrollMsg: this.scrollMsg,
        highlight: this.highlight,
        isFocused: d && f === 1,
        forwardRef: this._secondStickerRef,
        displayType: g,
        rowIsKeyboardFocused: T,
        onModalClosed: this._handleModalClosed
      })), ie.default.createElement(z.default, {
        msgIds: t.map(e => e.id.toString()),
        onReactionChange: this._handleReactionChange
      })), l), e);
      if ((0, G.messageListA11yRedesignEnabled)()) {
        return ie.default.createElement(A.default, {
          role: "row"
        }, u);
      } else {
        return u;
      }
    }
    if (he.length !== t.length) {
      __LOG__(4, undefined, new Error(), true)`Only ${he.length}/${t.length} were valid album messages`;
      SEND_LOGS("invalid-album-grid");
    }
    let Se = null;
    if (he.length > 0) {
      const e = he.map(e => e.id.toString());
      Se = ie.default.createElement(i.default, {
        isOutgoingMsg: _,
        displayType: g
      }, ie.default.createElement(Y.ReactionBubbleContainer, {
        msgIds: e,
        isOutgoingMsg: _,
        displayType: g,
        hasReaction: ge,
        onDetailsPaneClosed: this._handleModalClosed
      }));
    }
    const Te = he.length > 0 ? ie.default.createElement(q.default, {
      msgs: he,
      showForMessages: false,
      showForAddOns: true,
      displayType: m.DISPLAY_TYPE.CONVERSATION
    }) : null;
    const we = he.length > L.ALBUM_MIN_SIZE ? he[0] : null;
    const Ae = (0, V.showForwarded)(t[0]) ? ie.default.createElement(R.default, {
      msg: t[0].unsafe(),
      className: te.default.forwardedIndicator
    }) : null;
    const Pe = ie.default.createElement("div", {
      className: Q,
      "data-id": c,
      ref: this._refAlbumWrapper,
      "aria-label": this.state.imageAlbumCustomAriaLabel,
      tabIndex: -1
    }, ie.default.createElement(ee.default, {
      transitionName: "delay-leave"
    }, ye), ie.default.createElement("div", {
      className: se,
      onContextMenu: this.contextMenu,
      onMouseOver: this.mouseOver,
      onMouseDown: this.mouseDown,
      onMouseUp: this.mouseOver,
      onMouseLeave: this.mouseDown
    }, pe, U, ie.default.createElement("div", {
      className: fe,
      ref: this.setRefBubble
    }, ue, Ae, ie.default.createElement("div", {
      className: (0, s.classnamesConvertMeToStylexPlease)({
        [te.default.gridContainer]: true,
        [te.default.gridAnnouncementContainer]: k
      })
    }, t.slice(0, 4).map((e, t) => {
      const n = t === 3 ? {
        numAdditionalMedia: P,
        zoomMsg: we
      } : null;
      return ie.default.createElement(O.default, (0, r.default)({
        key: e.id.toString(),
        msg: (0, o.default)((0, M.getAsAlbumAsset)(e.unsafe()), "getAsAlbumAsset(msg.unsafe())"),
        albumMsgs: he,
        albumPosition: de[t % 4],
        isMsgVisible: a,
        displayType: g,
        ref: t => {
          this._handleAlbumGridRendered(t, e);
        }
      }, n));
    }))), ie.default.createElement(ee.default, {
      transitionName: ve
    }, Ee), Te, ie.default.createElement(re.MessageActionButtonsRow, {
      isOutgoingMsg: _,
      isMsgGallery: false,
      hasReaction: ge,
      messageActionButtons: me
    })), Se, (0, G.messageCustomAriaLabelEnabled)() ? ie.default.createElement(z.default, {
      msgIds: t.map(e => e.id.toString()),
      onReactionChange: this._handleReactionChange
    }) : null, _e, Ce, ie.default.createElement(ae.SelectionListener, {
      parent: this,
      msgId: t[0].id.toString(),
      selectedMessages: p
    }));
    if ((0, G.messageListA11yRedesignEnabled)()) {
      return ie.default.createElement(A.default, {
        role: "row"
      }, Pe);
    } else {
      return Pe;
    }
  }
}
exports.default = fe;
fe.contextType = T.default;
fe.displayName = "AlbumWrapper";