var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../vendor/506479.js"));
var o = a(require("../vendor/348926.js"));
var l = a(require("../app/98017.js"));
var i = a(require("../app/670983.js"));
var u = a(require("./300568.js"));
var s = require("../app/780549.js");
var c = require("./845582.js");
var d = require("./776078.js");
var f = a(require("../app/932325.js"));
var p = require("../app/696430.js");
var m = a(require("./915226.js"));
var h = a(require("./959187.js"));
var g = a(require("./113768.js"));
var E = require("./48794.js");
var v = require("./492638.js");
var _ = require("../app/97858.js");
var y = require("../app/61113.js");
var C = require("../app/787742.js");
var b = require("../app/373070.js");
var M = require("../main-chunk/931109.js");
var S = require("./512873.js");
var T = require("../vendor/548360.js");
var w = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = D(t);
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
var A = a(require("../app/408662.js"));
var P = a(require("../app/156720.js"));
const O = ["msgs"];
const k = ["msgs"];
function D(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (D = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const I = {
  messageList: {
    flex: "n5hs2j7m",
    paddingBottom: "oq31bsqd",
    paddingStart: "gx1rr48f",
    transition: "qh5tioqs"
  },
  messageListSelectable: {
    paddingStart: "lqec2n0o",
    transition: "eu5j4lnj"
  }
};
class R extends w.Component {
  constructor(e) {
    var t;
    super(e);
    t = this;
    this._renderedMsgs = {};
    this._renderedDateMarkers = {};
    this._renderedAlbums = {};
    this._renderedBotPluginCarousel = {};
    this._renderedMsgToAlbum = {};
    this._refUnread = (0, w.createRef)();
    this._getRefUnread = () => this._refUnread.current;
    this._handleRefreshMessages = () => {
      this.forceUpdate();
    };
    this._handleOpenMediaViewerForAlbumMedia = e => {
      const t = this._renderedMsgToAlbum[e.id.toString()];
      if (!t) {
        return;
      }
      if (t.isGroupedSticker()) {
        return;
      }
      const n = t.props.msgs;
      const a = new Set((n || []).map(e => e.id.toString()));
      const r = () => {
        const n = t.refAlbumComponents[e.id.toString()];
        if (n == null) {
          return undefined;
        } else {
          return n.getContainerElement();
        }
      };
      if (this._renderedMsgToAlbum[e.id.toString()]) {
        s.Cmd.mediaViewerModal({
          msg: e,
          getZoomNode: r,
          highlightedMsgIds: a
        });
      }
    };
    this._handleMsgKeyChange = e => {
      let {
        newKey: t,
        oldKey: n
      } = e;
      const a = t.toString();
      const r = n.toString();
      const o = this._renderedMsgs[r];
      if (o) {
        delete this._renderedMsgs[r];
        this._renderedMsgs[a] = o;
      }
    };
    this._handleMsgRendered = (e, t) => {
      if (e) {
        this._renderedMsgs[t] = e;
      } else {
        delete this._renderedMsgs[t];
      }
    };
    this._rowRenderers = {
      msg: (e, t, n, a) => {
        var r;
        const o = this.props;
        let l;
        l = a && !n ? E.MsgPosition.FRONT : a && n ? E.MsgPosition.MID : !a && n ? E.MsgPosition.END : E.MsgPosition.SINGLE;
        const i = e.type === b.MSG_TYPE.IMAGE || e.type === b.MSG_TYPE.VIDEO || e.type === b.MSG_TYPE.AUDIO;
        return w.default.createElement(S.Wrapper, {
          key: "msg-" + e.id.toString(),
          ref: t => {
            this._handleMsgRendered(t, e.id.toString());
          },
          msg: e.unsafe(),
          displayType: (r = o.displayType) !== null && r !== undefined ? r : (0, c.getDisplayType)(e.unsafe()),
          isMsgVisible: i ? o.isMsgVisible : () => {},
          selectable: o.selectable,
          selectedMessages: o.selectedMessages,
          onMessageSelect: o.onMessageSelect,
          position: l,
          isFocusedMsg: t,
          getSequentialMsg: this.props.getSequentialMsg,
          isFocusable: true
        });
      },
      album: (e, t, n, a, r, o) => {
        const l = this.props;
        let i;
        i = a && !n ? E.MsgPosition.FRONT : a && n ? E.MsgPosition.MID : !a && n ? E.MsgPosition.END : E.MsgPosition.SINGLE;
        const u = e[0];
        return w.default.createElement(m.default, {
          msgs: e,
          ref: n => {
            this._handleAlbumRendered(n, t, e);
          },
          key: "album-" + t,
          position: i,
          isMsgVisible: l.isMsgVisible,
          selectable: l.selectable,
          selectedMessages: l.selectedMessages,
          onMessageSelect: l.onMessageSelect,
          albumId: t,
          isFocusedAlbum: r,
          focusedMsgIndex: o,
          displayType: (0, c.getDisplayType)(u == null ? undefined : u.unsafe()),
          isFocusable: true
        });
      },
      date: (e, t) => {
        const {
          isLoadingEarlierMsgs: n
        } = this.props;
        return w.default.createElement(h.default, {
          ref: e => {
            this._handleDateMarkerRendered(t, e);
          },
          key: "msg-" + e.id.toString() + "-date",
          timestamp: e.t,
          isFocusable: !n || t !== 0
        });
      },
      unread: () => w.default.createElement(v.MessageUnread, {
        key: "msg-unread",
        count: this.props.unreadCount,
        textContainerRef: this._refUnread
      }),
      botPluginCarousel: (e, t) => w.default.createElement(u.default, {
        msgs: e,
        ref: t => this._handleBotPluginCarouselRendered(t, e),
        botPluginCarouselId: t,
        key: "botCarousel-" + t
      })
    };
    this._openMsgContextMenu = e => {
      if (e.target instanceof HTMLElement) {
        var t;
        var n;
        const a = (t = e.target.dataset) === null || t === undefined ? undefined : t.id;
        const r = this._renderedMsgs[a] || this._renderedAlbums[a];
        if (!(r == null || (n = r.openContextMenu) === null || n === undefined)) {
          n.call(r);
        }
      }
    };
    this._handleBeforeEnd = (0, o.default)(function* () {
      yield s.Cmd.openChatBottom(t.props.chat);
    });
    const {
      msgs: n
    } = e;
    this._latestMsgWhenChatOpen = n.length > 0 ? n[n.length - 1] : null;
  }
  shouldComponentUpdate(e) {
    const {
      msgs: t
    } = e;
    const n = (0, r.default)(e, O);
    const a = this.props;
    const {
      msgs: o
    } = a;
    const i = (0, r.default)(a, k);
    return !(0, A.default)(n, i) || !(0, l.default)(t, o);
  }
  getSnapshotBeforeUpdate() {
    var e;
    const t = this.props.getScrollContainer();
    const n = this.props.msgs.find(e => this._renderedMsgs.hasOwnProperty(e.id));
    if (n == null) {
      return null;
    }
    const a = n.id.toString();
    return {
      commonMessageId: a,
      commonMessageTop: (0, i.default)((e = this.getMsgWrapperRef(a)) === null || e === undefined ? undefined : e.getContainerElement(), "this.getMsgWrapperRef(commonMessageId)?.getContainerElement()").offsetTop - t.scrollTop
    };
  }
  componentDidMount() {
    this.props.listeners.add(y.MsgCollection, "change:msgKey", this._handleMsgKeyChange);
    this.props.listeners.add(s.Cmd, "refresh_messages", this._handleRefreshMessages);
    this.props.listeners.add(s.Cmd, "open_media_viewer_for_album_media", this._handleOpenMediaViewerForAlbumMedia);
  }
  componentDidUpdate(e, t, n) {
    const a = this.props.getScrollContainer();
    if (n != null) {
      var r;
      const {
        commonMessageId: e,
        commonMessageTop: t
      } = n;
      const o = (0, i.default)((r = this.getMsgWrapperRef(e)) === null || r === undefined ? undefined : r.getContainerElement(), "this.getMsgWrapperRef(commonMessageId)?.getContainerElement()");
      a.scrollTop = o.offsetTop - t;
    }
  }
  getMsgVisibility(e) {
    const t = this.props.getScrollContainer();
    const n = t.scrollTop;
    const a = n + t.clientHeight;
    const r = e == null ? undefined : e.getContainerElement();
    if (r) {
      if (r.offsetTop + r.clientHeight <= n) {
        return {
          visibility: E.MSG_VISIBILITY.ABOVE,
          offset: r.offsetTop - n
        };
      } else if (r.offsetTop >= a) {
        return {
          visibility: E.MSG_VISIBILITY.BELOW,
          offset: r.offsetTop - n
        };
      } else {
        return {
          visibility: E.MSG_VISIBILITY.VISIBLE,
          offset: r.offsetTop - n
        };
      }
    } else {
      __LOG__(3)`getMsgVisibility on invalid ref: ${e}`;
      return {
        visibility: E.MSG_VISIBILITY.VISIBLE,
        offset: 0
      };
    }
  }
  getMsgWrapperRef(e) {
    return this._renderedMsgs[e] || this._renderedMsgToAlbum[e] || this._renderedBotPluginCarousel[e];
  }
  getMsgComponentRef(e) {
    if (this._renderedMsgs[e]) {
      return this._renderedMsgs[e].getMsgComponentRef();
    } else if (this._renderedMsgToAlbum[e]) {
      return this._renderedMsgToAlbum[e].refAlbumComponents[e] && this._renderedMsgToAlbum[e].refAlbumComponents[e].getRef();
    } else {
      return undefined;
    }
  }
  getDateMarkerRef(e) {
    return this._renderedDateMarkers[e];
  }
  _handleDateMarkerRendered(e, t) {
    if (t) {
      this._renderedDateMarkers[e] = t;
    } else {
      delete this._renderedDateMarkers[e];
    }
  }
  getRenderedDateMarkers() {
    return this._renderedDateMarkers;
  }
  _handleAlbumRendered(e, t, n) {
    if (e) {
      this._renderedAlbums[t] = e;
      n.forEach(t => {
        this._renderedMsgToAlbum[t.id.toString()] = e;
      });
    } else {
      delete this._renderedAlbums[t];
    }
  }
  _handleBotPluginCarouselRendered(e, t) {
    const n = (0, C.getBotResponseTargetId)(t[0]);
    if (n != null) {
      if (e) {
        this._renderedBotPluginCarousel[n] = e;
        t.forEach(t => {
          this._renderedBotPluginCarousel[t.id.toString()] = e;
        });
      } else {
        delete this._renderedBotPluginCarousel[n];
      }
    } else {
      __LOG__(2)`_handleBotPluginCarouselRendered: unexpected null botResponseTargetId`;
    }
  }
  render() {
    var e;
    var t;
    const {
      msgs: n,
      focusedMsgCtx: a,
      unreadCount: r
    } = this.props;
    let o;
    let l;
    if (a) {
      o = a.msg;
      if (a.isUnreadDivider && r > 0) {
        l = a.msg;
      }
    }
    const i = (0, _.messageListA11yRedesignEnabled)() ? null : {
      [`${f.default.LR("right", "left")}`]: this._openMsgContextMenu
    };
    const u = (0, _.messageListA11yRedesignEnabled)() ? null : f.default.LR(T.fbt._("Message list. Press right arrow key on a message to open message context menu.", null, {
      hk: "liGkN"
    }), T.fbt._("Message list. Press left arrow key on a message to open message context menu.", null, {
      hk: "4FnAYZ"
    }));
    return w.default.createElement(d.ListHotKeys, {
      dataTab: M.TAB_ORDER.MESSAGE_LIST,
      className: (0, P.default)(I.messageList, this.props.selectable && I.messageListSelectable),
      getPriorityFocusItem: this._getRefUnread,
      onBeforeEnd: this._handleBeforeEnd,
      handlers: i,
      role: "application",
      removeTabIndexFocusInside: (0, _.messageListA11yRedesignEnabled)(),
      "aria-label": u
    }, (0, g.default)(this._rowRenderers, n, (e = o) === null || e === undefined ? undefined : e.safe(), (t = l) === null || t === undefined ? undefined : t.safe(), r, this._latestMsgWhenChatOpen));
  }
}
R.displayName = "MessageList";
const N = (0, p.ListenerHOC)(R);
exports.default = class extends N {
  getDateMarkerRef(e) {
    return this.getComponent().getDateMarkerRef(e);
  }
  getMsgComponentRef(e) {
    return this.getComponent().getMsgComponentRef(e);
  }
  getMsgWrapperRef(e) {
    return this.getComponent().getMsgWrapperRef(e);
  }
  getMsgVisibility(e) {
    return this.getComponent().getMsgVisibility(e);
  }
  getRenderedDateMarkers() {
    return this.getComponent().getRenderedDateMarkers();
  }
};