var a = require("../app/530066.js").default;
var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var o = r(require("../vendor/506479.js"));
var l = r(require("../vendor/81109.js"));
var i = r(require("../vendor/441609.js"));
var u = r(require("../vendor/23279.js"));
var s = r(require("../vendor/823493.js"));
var c = require("../app/898817.js");
var d = r(require("./449015.js"));
var f = require("../app/122583.js");
var p = r(require("../app/670983.js"));
var m = r(require("../app/60748.js"));
var h = require("../app/685639.js");
var g = require("../app/632157.js");
var E = require("../app/984330.js");
var v = require("../app/723084.js");
var _ = require("../app/560861.js");
var y = require("../app/735618.js");
var C = require("./628445.js");
var b = require("../app/743643.js");
var M = require("../app/713105.js");
var S = require("../app/698867.js");
var T = r(require("./683874.js"));
var w = require("../app/396574.js");
var A = require("../app/63014.js");
var P = require("../app/780549.js");
var O = require("../app/877171.js");
var k = require("../app/152342.js");
var D = require("../app/660666.js");
var I = r(require("./920347.js"));
var R = r(require("../app/677102.js"));
var N = require("./970186.js");
var x = require("./662854.js");
var L = r(require("./37450.js"));
var j = Ae(require("./526638.js"));
var B = r(require("../app/152583.js"));
var F = require("../app/493288.js");
var G = require("./957546.js");
var U = r(require("../app/335540.js"));
var W = require("../app/914368.js");
var H = require("../app/163755.js");
var V = require("./286876.js");
var q = r(require("../app/932325.js"));
var Y = require("../app/696430.js");
var z = require("./154158.js");
var K = require("./229281.js");
var Q = r(require("./275403.js"));
var X = require("./48794.js");
var Z = r(require("./539322.js"));
var J = require("../app/97858.js");
var $ = require("../app/61113.js");
var ee = require("../app/787742.js");
var te = r(require("../app/565754.js"));
var ne = require("../app/73225.js");
var ae = require("../app/578606.js");
var re = require("./790105.js");
var oe = require("./824041.js");
var le = require("../app/535538.js");
var ie = require("./435595.js");
var ue = require("../main-chunk/931109.js");
var se = require("../app/625786.js");
var ce = require("../app/390737.js");
var de = require("../app/368170.js");
var fe = require("../app/392632.js");
var pe = r(require("../app/37875.js"));
var me = r(require("./43473.js"));
var he = require("../app/397516.js");
var ge = r(require("../app/330619.js"));
var Ee = r(require("../app/844453.js"));
var ve = r(require("../app/124928.js"));
var _e = r(require("../app/556869.js"));
var ye = require("../vendor/548360.js");
var Ce = Ae(require("../vendor/667294.js"));
var be = Ae(require("../vendor/973935.js"));
var Me = r(require("../app/408662.js"));
const Se = ["msgLoadState"];
const Te = ["msgLoadState"];
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
function Ae(e, t) {
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
}
class Pe extends Ce.Component {
  constructor(e) {
    var t;
    super(e);
    t = this;
    this._chatOpenScrollTimestamp = 0;
    this._renderedMsgCache = new Map();
    this._visibleMsgOrder = [];
    this._loadEarlierScrollThreshold = 300;
    this._mdHistorySyncStatusContentPlaceholderShown = false;
    this._blockAdditionalLoadEalierRequest = false;
    this._updatingLastMsg = false;
    this._setScrollContainer = e => this.scrollContainer = e;
    this._refStickyDateMarker = (0, Ce.createRef)();
    this._refMessageList = (0, Ce.createRef)();
    this._scrollByHeight = e => {
      const t = this.scrollContainer;
      if (t) {
        (0, ge.default)(t, "stop");
        (0, ge.default)(t, "scroll", {
          duration: 300,
          container: t,
          offset: e
        });
      }
    };
    this._handleHistorySyncStateUpdate = e => {
      if (e.has(this.props.chat.id.toString())) {
        __LOG__(2, undefined, undefined, undefined, ["history-sync"])`_onHistorySyncStateUpdate called, attempt to load earlier`;
        this._blockAdditionalLoadEalierRequest = false;
        this.loadEarlierMsgs();
      }
    };
    this._handleRefreshMessages = () => {
      this.forceUpdate();
    };
    this._handlePanesWillChange = () => {
      const e = this._visibleMsgOrder[this._visibleMsgOrder.length - 1];
      if (!e) {
        return;
      }
      const t = e.toString();
      const n = this._refMessageList.current;
      if (t && n) {
        var a;
        const e = (a = n.getMsgWrapperRef(t)) === null || a === undefined ? undefined : a.getContainerElement();
        if (e) {
          const t = this.scrollContainer;
          if (!t) {
            return;
          }
          const n = this._getMsgBottom(t, e);
          this._panesChanging = {
            msg: e,
            container: t,
            msgBottom: n
          };
        }
      }
    };
    this._handlePanesDidChange = () => {
      if (!this._panesChanging) {
        return;
      }
      const {
        msg: e,
        container: t,
        msgBottom: n
      } = this._panesChanging;
      this._setMsgBottom(t, e, n);
      this._panesChanging = undefined;
    };
    this._attachMsgCollectionObservers = e => {
      var t;
      var n;
      const {
        listeners: a,
        chat: r,
        msgCollection: o
      } = this.props;
      const {
        focusCtx: l,
        chat: i,
        msgCollection: u
      } = e;
      if (o) {
        a.remove(o, "remove_msgs insert_msgs", this._handleMsgsUpdate);
        a.remove(r.msgs, "change:last", this._handleLastMsgChanged);
      }
      a.remove(r, "change:unreadCount", this._handleUnreadCountDebounced);
      a.remove(r, "change:activeUnreadCount", this._handleActiveUnreadCount);
      if ((0, J.accidentalDeleteMessageEnabled)()) {
        a.remove(r, "change:pendingDeleteForMeCount", this._handleRefreshMessages);
      }
      if (this._msgLoadStateChangeUnsubscribe != null) {
        this._msgLoadStateChangeUnsubscribe();
      }
      this._msgLoadStateChangeUnsubscribe = u.onMsgLoadStateChange(this._handleMsgLoadStateChange);
      if (r.isGroup && ((t = r.groupMetadata) === null || t === undefined ? undefined : t.unreadMentionMetadata.unreadMentionCollection)) {
        a.remove(r.groupMetadata.unreadMentionMetadata.unreadMentionCollection, "add remove reset", this._handleUnreadMentionCount);
      }
      if (i.isGroup && ((n = i.groupMetadata) === null || n === undefined ? undefined : n.unreadMentionMetadata.unreadMentionCollection)) {
        a.add(i.groupMetadata.unreadMentionMetadata.unreadMentionCollection, "add remove reset", this._handleUnreadMentionCount);
      }
      a.add(i, "change:unreadCount", this._handleUnreadCountDebounced);
      a.add(i, "change:activeUnreadCount", this._handleActiveUnreadCount);
      if ((0, J.accidentalDeleteMessageEnabled)()) {
        a.add(i, "change:pendingDeleteForMeCount", this._handleRefreshMessages);
      }
      a.add(i.msgs, "change:last", this._handleLastMsgChanged);
      a.add(u, "remove_msgs insert_msgs", this._handleMsgsUpdate);
      if (l && u.loadAroundPromise) {
        u.loadAroundPromise.catch((0, f.filteredCatch)(E.E404, () => {
          ce.ToastManager.open(Ce.default.createElement(se.Toast, {
            msg: ye.fbt._("Couldn't find message", null, {
              hk: "2en5Pr"
            })
          }));
          P.Cmd.openChatBottom(i).catch(() => {});
        }));
      }
    };
    this._updateForCurrentPosition = (0, s.default)(() => {
      const e = this.props.getUnmountSignal();
      (0, F.documentFlushed)({
        signal: e
      }).then(() => {
        if (e.aborted) {
          throw new c.AbortError();
        }
        this._updateRenderedMsgCache();
        be.unstable_batchedUpdates(() => {
          if (e.aborted) {
            return;
          }
          const {
            scrollContainer: t
          } = this;
          if (t == null) {
            return;
          }
          if (!this._blockAdditionalLoadEalierRequest && t.scrollTop < 300) {
            this.loadEarlierMsgs();
          }
          if (this._blockAdditionalLoadEalierRequest && t.scrollTop < 80) {
            return;
          }
          if (t.scrollTop > 80) {
            this._blockAdditionalLoadEalierRequest = false;
          }
          const {
            isNearBottom: n,
            cursor: a
          } = this.state;
          const r = this._nearBottom();
          if (r) {
            this._maybeSendSeen(true);
            if (j.isMostRecentCMC(this.props) && n !== r) {
              this.setState({
                isNearBottom: r,
                newUnread: 0
              });
            }
            if (a.getEnd(this.props.msgCollection) < this.props.msgCollection.length || !j.isMostRecentCMC(this.props)) {
              this._loadRecentMsgs();
            }
          } else if (n !== r) {
            this.setState({
              isNearBottom: r
            });
          }
        });
      }).catch((0, f.filteredCatch)(c.AbortError, () => {}));
    }, 100);
    this._handleMsgLoadStateChange = () => {
      const e = this.state.msgLoadState;
      const t = j.getMsgLoadState(this.props.msgCollection);
      let n = {
        msgLoadState: t
      };
      if (e.isLoadingAroundMsgs && !t.isLoadingAroundMsgs) {
        const e = j.validateFocusCtx(this.props.focusCtx);
        const t = e == null ? undefined : e.msg;
        if (t) {
          n = (0, l.default)((0, l.default)({}, n), {}, {
            cursor: this.state.cursor.init(t.id, this.props.msgCollection),
            focusCtx: e
          });
        }
      }
      this.setState(n);
    };
    this._handleResizeThrottle = (0, s.default)(() => {
      this._updateRenderedMsgCache();
    }, 100);
    this._handleMsgKeyChange = e => {
      let {
        newKey: t,
        oldKey: n
      } = e;
      const a = n.toString();
      const r = t.toString();
      const o = this._renderedMsgCache.get(a);
      if (o) {
        this._renderedMsgCache.delete(a);
        this._renderedMsgCache.set(r, o);
      }
      for (let e = 0; e < this._visibleMsgOrder.length; ++e) {
        if (this._visibleMsgOrder[e] === n) {
          this._visibleMsgOrder[e] = t;
          break;
        }
      }
    };
    this._handleResizeDebounce = (0, u.default)(() => {
      const e = this._nearBottom();
      if (this._nearBottom !== e) {
        this.setState({
          isNearBottom: e
        });
      }
    }, 100);
    this.loadEarlierMsgs = () => {
      const {
        chat: e,
        msgCollection: t
      } = this.props;
      const {
        cursor: n,
        msgLoadState: a
      } = this.state;
      if (n.getStart(t) > 0) {
        if (n.hasBefore(t)) {
          this.setState({
            cursor: n.loadBefore(t)
          });
        }
      } else {
        if (a.isLoadingEarlierMsgs || a.isLoadingAroundMsgs) {
          return;
        }
        if (j.noEarlierMsgStateIsIncorrect(e, j.isMostRecentCMC(this.props), a)) {
          t.msgLoadState.noEarlierMsgs = false;
        }
        if (t.msgLoadState.noEarlierMsgs) {
          return;
        }
        const r = this.props.getUnmountSignal();
        (0, b.loadEarlierMsgs)(e, t).then(e => {
          if (r.aborted) {
            return;
          }
          if (e && e.length !== 0) {
            this._blockAdditionalLoadEalierRequest = false;
          } else {
            this._blockAdditionalLoadEalierRequest = true;
          }
          const a = {};
          if (!this.state.focusCtx) {
            a.focusCtx = j.getUnreadFocusCtx(this.props, this.state.unreadCount);
          }
          if (n.hasBefore(t)) {
            a.cursor = n.loadBefore(t);
            this.setState(a);
          } else {
            this.setState(a);
          }
        }).catch(e => {
          __LOG__(2)`ConversationMsgs:loadEarlierMsgs failed\n${e}`;
        });
      }
    };
    this._loadRecentMsgs = () => {
      const {
        chat: e,
        msgCollection: t
      } = this.props;
      const {
        cursor: n,
        msgLoadState: r
      } = this.state;
      if (n.getEnd(t) < t.length) {
        return void this.setState({
          cursor: n.loadAfter(t)
        });
      }
      if (r.isLoadingRecentMsgs || r.isLoadingAroundMsgs) {
        return;
      }
      const o = new a();
      const l = o.signal;
      const i = this.props.getUnmountSignal();
      const u = (0, m.default)([l, i], a => (0, b.loadRecentMsgs)(e, t, a).then(() => {
        if (a.aborted) {
          throw new c.AbortError();
        }
        if (n.hasAfter(t)) {
          this.setState({
            cursor: n.loadAfter(t)
          });
        } else if (this.state.cursor.getEnd(t) >= t.length && j.isMostRecentCMC(this.props)) {
          this.forceUpdate();
        }
      })).catch((0, c.catchAbort)(() => {})).catch(e => {
        __LOG__(2)`ConversationMsgs:loadRecentMsgs failed\n${e}`;
      }).finally(() => {
        this._loadRecentMsgsPromise = null;
      });
      this._loadRecentMsgsPromise = {
        promise: u,
        controller: o
      };
    };
    this.handleComposeHeightChange = e => {
      const t = this.scrollContainer;
      if (t) {
        if (e) {
          if (t && e < 0 && t.scrollTop === t.scrollHeight - t.clientHeight) {
            return;
          }
          this._setScrollTop(t, t.scrollTop + e);
        } else {
          const e = t.scrollHeight - (t.scrollTop + t.clientHeight);
          (0, ge.default)(t, {
            tween: 18
          }, {
            progress: () => {
              this._setScrollTop(t, t.scrollHeight - e - t.clientHeight);
            },
            duration: 300
          }, [0.1, 0.82, 0.25, 1]);
        }
      }
    };
    this._getScrollContainer = () => (0, p.default)(this.scrollContainer, "this.scrollContainer");
    this.getScrollBottom = () => {
      const e = this.scrollContainer;
      if (e) {
        return e.scrollHeight - (e.scrollTop + e.clientHeight);
      } else {
        return 0;
      }
    };
    this._hideStickyDateMarker = new h.ShiftTimer(() => {
      var e;
      if (!((e = this._refStickyDateMarker.current) === null || e === undefined)) {
        e.setVisibility(false);
      }
    });
    this._updateStickyDateMarker = new h.ShiftTimer(e => {
      const {
        dateMarkerIdx: t,
        silent: n = false
      } = e || {};
      const a = this._refMessageList.current;
      if (!a || typeof t != "number") {
        return;
      }
      if (!(n || Date.now() - (this._programmaticScroll || 0) < 200)) {
        this._showStickyDateMarker();
      }
      const r = a.getDateMarkerRef(t);
      var o;
      if (t === -1) {
        if (!((o = this._refStickyDateMarker.current) === null || o === undefined)) {
          o.updateDateMarkerText();
        }
      } else if (r) {
        var l;
        const e = r.getTimestamp();
        const t = A.Clock.relativeDateStr(e).toString().toUpperCase();
        if (!((l = this._refStickyDateMarker.current) === null || l === undefined)) {
          l.updateDateMarkerText(t);
        }
      }
      if (this._dateMarkerIdx !== t) {
        const e = a.getDateMarkerRef(this._dateMarkerIdx);
        if (e) {
          e.show();
        }
        if (r) {
          r.hide();
        }
      }
    });
    this._removeViewedMentions = () => {
      this._renderedMsgCache.forEach((e, t) => {
        var n;
        var a;
        if ((n = this.props.chat.groupMetadata) === null || n === undefined ? undefined : n.unreadMentionMetadata.hasMentionId(t)) {
          if (!((a = this.props.chat.groupMetadata) === null || a === undefined)) {
            a.unreadMentionMetadata.removeUnreadMentions(t);
          }
        }
      });
    };
    this.isMsgVisible = function (e) {
      let n = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
      return t._renderedMsgCache.has(e.toString()) && (!!n || t.getMsgComponent(e));
    };
    this.getSequentialMsg = e => {
      const t = this.getMsgs();
      if (t) {
        return (0, d.default)(t, t => e.equals(t.id));
      } else {
        return null;
      }
    };
    this._handleScroll = () => {
      this._updateForCurrentPosition();
    };
    this._handleWindowGainedFocus = () => {
      const e = this.props.chat;
      if (!(this._clearUnreadTimer || !e.isDirty() && !e.hasUnreadEdit())) {
        this._clearUnreadTimer = self.setTimeout(() => {
          delete this._clearUnreadTimer;
          this._maybeSendSeen();
        }, 2500);
      }
    };
    this._handleWindowLostFocus = () => {
      if (!this.state.unreadCount || !j.isMostRecentCMC(this.props)) {
        return;
      }
      const e = this.props.chat;
      if (e.unreadCount === 0) {
        this.setState({
          unreadCount: 0
        });
        e.activeUnreadCount = 0;
      }
      e.markedUnread = false;
    };
    this._jumpToBottom = () => {
      const {
        msgCollection: e
      } = this.props;
      if (j.isMostRecentCMC(this.props) && this.state.cursor.getEnd(e) >= e.length) {
        this._scrollToBottom();
      } else {
        P.Cmd.openChatBottom(this.props.chat).then(e => {
          if (e) {
            O.ComposeBoxActions.focus(this.props.chat);
          }
        });
      }
    };
    this._jumpToMention = () => {
      var e;
      const t = this.props.chat;
      const n = (e = t.groupMetadata) === null || e === undefined ? undefined : e.unreadMentionMetadata;
      if (n) {
        const e = n.pendingUnreadMentionCount;
        const a = (0, z.roundUp10thPercentage)(e, n.getUnreadMentionCount());
        new V.GroupCatchUpWamEvent({
          mentionsCountPendingPercentage: a
        }).commit();
        if (e > 0) {
          const t = ye.fbt._({
            "*": "{count} @ messages not synced",
            _1: "1 @ message not synced"
          }, [ye.fbt._plural(e, "count")], {
            hk: "Q4ytN"
          });
          ce.ToastManager.open(Ce.default.createElement(se.Toast, {
            msg: t
          }));
          n.pendingUnreadMentionCount = 0;
          return void this.setState({
            unreadMentionCount: n.getUnreadMentionCount()
          });
        }
        if (n.unreadMentionCollection.length) {
          const e = n.oldestUnreadMention();
          const a = te.default.fromString(e == null ? undefined : e.id);
          const r = $.MsgCollection.get(a.toString());
          const o = (0, M.getSearchContext)(t, r || a);
          o.highlightMentionMsg = true;
          o.enableAnimation = false;
          if (o) {
            P.Cmd.openChatAt(this.props.chat, o);
          }
        }
      }
    };
    this._scrollToBottom = e => {
      const t = this.scrollContainer;
      if (t) {
        this._setScrollTop(t, t.scrollHeight - t.clientHeight);
      }
      if (e) {
        e();
      }
      const n = this.props.getUnmountSignal();
      (0, F.documentFlushed)({
        signal: n
      }).then(() => {
        if (!n.aborted) {
          this.setState({
            cursor: this.state.cursor.resetBeforeCursor(this.props.msgCollection)
          });
        }
      }).catch((0, f.filteredCatch)(c.AbortError, () => {}));
    };
    this._handleLastMsgChanged = (e, t) => {
      const {
        msgCollection: n,
        chat: a
      } = this.props;
      const {
        focusCtx: r
      } = this.state;
      let {
        cursor: o
      } = this.state;
      const l = n.last();
      if (!j.isMostRecentCMC(this.props)) {
        return void (t && e && (0, ee.getIsSentByMe)(e) && this._jumpToBottom());
      }
      const u = {};
      const s = document.hasFocus();
      const c = this._nearBottom();
      let d = c;
      if (s && c) {
        u.unreadCount = a.activeUnreadCount;
        if (a.activeUnreadCount === 0) {
          u.focusCtx = undefined;
        }
        o = o.setFocusedMsgKey(n);
      } else if (l && (0, ee.getIsSentByMe)(l) && t) {
        d = true;
        if (this.state.unreadCount) {
          u.unreadCount = 0;
        }
        u.focusCtx = undefined;
        o = o.setFocusedMsgKey(n);
        this._jumpToBottom();
      }
      o = r && !u.hasOwnProperty("focusCtx") ? o.loadAfter(n, {
        count: 1
      }) : o.loadBeforeCapped(n, {
        count: 1
      });
      if (o !== this.state.cursor) {
        u.cursor = o;
      }
      if (!(0, i.default)(u)) {
        this._updatingLastMsg = true;
        this.setState(u, () => {
          if (t) {
            this._repairNewsletterMsgHistory({
              fetchLastMessage: false
            });
          }
          this._updatingLastMsg = false;
          if (d) {
            this._scrollToBottom();
          }
          this._handleUnreadCountDebounced();
        });
      }
    };
    this._reactionOnLastMessage = () => {
      this._reactionOnLastMessageTimer = self.setTimeout(() => {
        if (this.state.isNearBottom) {
          this._scrollToBottom();
        }
      }, 1);
    };
    this._handleUnreadMentionCount = () => {
      var e;
      var t;
      const {
        chat: n
      } = this.props;
      const a = (e = (t = n.groupMetadata) === null || t === undefined ? undefined : t.unreadMentionMetadata.getUnreadMentionCount()) !== null && e !== undefined ? e : 0;
      this.setState({
        unreadMentionCount: a
      });
    };
    this._handleUnreadCountDebounced = (0, u.default)(() => {
      if (this._updatingLastMsg) {
        return;
      }
      const {
        chat: e
      } = this.props;
      const t = this._nearBottom();
      const n = document.hasFocus();
      this._maybeSendSeen(t, n);
      const a = {};
      if (e.unreadCount && !e.pendingSeenCount && j.isMostRecentCMC(this.props)) {
        a.unreadCount = e.unreadCount;
        const t = j.getUnreadFocusCtx(this.props, this.state.unreadCount);
        var r;
        if (t && a.focusCtx !== this.props.focusCtx) {
          a.focusCtx = t;
          a.cursor = this.state.cursor.setFocusedMsgKey(this.props.msgCollection, (r = t.msg) === null || r === undefined ? undefined : r.id);
        }
      } else if (e.unreadCount === 0 && this.state.unreadCount !== 0) {
        const e = this.props.msgCollection.last();
        if (e && (0, H.getAsRevoked)(e)) {
          a.unreadCount = 0;
        }
      }
      const o = t && a.unreadCount - this.state.unreadCount == 1;
      if (!t && j.isMostRecentCMC(this.props) || !e.pendingSeenCount && this.state.newUnread !== e.unreadCount) {
        a.newUnread = e.unreadCount;
      }
      if (!(0, i.default)(a)) {
        this.setState(a, () => {
          if (o) {
            this._scrollToBottom();
          }
        });
      }
      if (e.unreadCount === 0 && this.state.unreadCount !== 0) {
        e.activeUnreadCount = this.state.unreadCount;
      }
    }, 150);
    this._handleActiveUnreadCount = () => {
      if (this._updatingLastMsg) {
        return;
      }
      const {
        chat: e
      } = this.props;
      this.setState({
        unreadCount: e.activeUnreadCount
      });
    };
    this._handleMsgsUpdate = () => {
      const e = this.state.cursor.ensureValidFocus(this.props.msgCollection);
      if (this.state.cursor !== e) {
        this.setState({
          cursor: e
        });
      } else {
        this.forceUpdate();
      }
    };
    this.handlePageUpDown = () => {
      U.default.focus(this.scrollContainer);
    };
    this.scrollMessages = () => {
      var e;
      const t = this._visibleMsgOrder[this._visibleMsgOrder.length - 1];
      if (!t) {
        return;
      }
      const n = this._refMessageList.current;
      if (!n) {
        return;
      }
      const a = (e = n.getMsgWrapperRef(t.toString())) === null || e === undefined ? undefined : e.getContainerElement();
      if (!a) {
        return;
      }
      const r = this._visibleMsgOrder.length === 1 ? a.clientHeight : 0;
      const o = this.scrollContainer;
      (0, ge.default)(a, "stop");
      if (o) {
        (0, ge.default)(o, "stop");
      }
      (0, ge.default)(a, "scroll", {
        duration: 300,
        container: o,
        offset: r
      });
    };
    this._handleKeyPress = e => {
      if (!(e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        if (e.key !== "Enter" || e.shiftKey) {
          O.ComposeBoxActions.paste(this.props.chat, String.fromCharCode(e.charCode));
        } else {
          O.ComposeBoxActions.send(this.props.chat);
        }
      }
    };
    this._handleContextMenu = e => {
      const t = this.props.chat;
      const n = this.props.onSelectMessages;
      let a;
      if ((0, D.getIsUser)(t)) {
        a = Ce.default.createElement(I.default, {
          chat: t,
          toContextMenuManager: true,
          contact: t.contact,
          onSelectMessages: n,
          enableChatThreadLogging: false
        });
      } else if ((0, D.getIsGroup)(t)) {
        a = (0, x.groupMenu)(t, n);
      } else {
        if (!(0, D.getIsBroadcast)(t)) {
          return;
        }
        a = (0, x.broadcastMenu)(t, n);
      }
      e.preventDefault();
      e.stopPropagation();
      (0, S.handleActivitiesForChatThreadLogging)([{
        activityType: "chatOverflowClicks",
        ts: (0, g.unixTime)(),
        chatId: t.id
      }]);
      this.setState({
        contextMenu: {
          menu: a,
          event: e
        }
      });
    };
    this._handleContextClose = () => {
      this.setState({
        contextMenu: null
      });
    };
    this._handlePaste = e => {
      e.preventDefault();
      O.ComposeBoxActions.sendPaste(this.props.chat, e);
    };
    this._notifyChatRendered = () => {
      if (this.props.notifyChatRendered) {
        this.props.notifyChatRendered(this.getMsgs());
      }
    };
    this._handlePreloadedMessages = () => {
      const {
        msgCollection: e
      } = this.props;
      const {
        cursor: t
      } = this.state;
      if (t.hasBefore(e)) {
        this.setState({
          cursor: t.loadBefore(e)
        });
      }
    };
    this._handleMsgHistoryRepaired = () => {
      var e;
      const {
        msgCollection: t
      } = this.props;
      this.setState({
        cursor: this.state.cursor.init((e = t.last()) === null || e === undefined ? undefined : e.id, t)
      }, () => {
        if (this.props.chat.unreadCount === 0) {
          this._jumpToBottom();
        }
      });
    };
    const {
      chat: n
    } = e;
    const r = n.pendingSeenCount ? 0 : n.unreadCount;
    let o = 0;
    var v;
    var _;
    if (n.isGroup) {
      o = (v = (_ = n.groupMetadata) === null || _ === undefined ? undefined : _.unreadMentionMetadata.getUnreadMentionCount()) !== null && v !== undefined ? v : 0;
    }
    this.state = (0, l.default)((0, l.default)({}, j.getInitialCursorAndFocusContext(e, r)), {}, {
      unreadCount: r,
      unreadMentionCount: o,
      isNearBottom: true,
      newUnread: 0,
      contextMenu: null,
      textsize: R.default.get().textsize,
      msgLoadState: j.getMsgLoadState(e.msgCollection),
      lastSelectable: e.selectable,
      lastChat: e.chat,
      lastMsgCollection: e.msgCollection,
      lastFocusCtx: e.focusCtx
    });
  }
  componentWillUnmount() {
    var e;
    if (this._msgLoadStateChangeUnsubscribe != null) {
      this._msgLoadStateChangeUnsubscribe();
    }
    this._updateStickyDateMarker.cancel();
    this._updateForCurrentPosition.cancel();
    this._handleResizeThrottle.cancel();
    this._handleResizeDebounce.cancel();
    this._hideStickyDateMarker.cancel();
    if (this._clearUnreadTimer) {
      self.clearTimeout(this._clearUnreadTimer);
    }
    if (this._reactionOnLastMessageTimer) {
      self.clearTimeout(this._reactionOnLastMessageTimer);
    }
    this._maybeSendSeen();
    this.props.chat.markedUnread = false;
    if (this.props.chat.isGroup) {
      if (!((e = this.props.chat.groupMetadata) === null || e === undefined)) {
        e.unreadMentionMetadata.reset();
      }
    }
    this.props.chat.activeUnreadCount = 0;
    this._unsubscribeFromNewsletterLiveUpdates();
  }
  _maybeRequestMessageUpdates() {
    const {
      chat: e
    } = this.props;
    if (e.isNewsletter && (0, ne.isNewsletterReactionEnabled)()) {
      (0, ae.maybeUpdateMsgsAddOns)(e.msgs.getModelsArray(), e);
    }
  }
  _maybeSubscribeToNewsletterLiveUpdates() {
    const {
      chat: e
    } = this.props;
    if (e.isNewsletter) {
      re.LiveUpdatesManager.subscribe(e.id);
    }
  }
  _unsubscribeFromNewsletterLiveUpdates() {
    re.LiveUpdatesManager.unsubscribe();
  }
  componentDidMount() {
    const {
      chat: e,
      listeners: t
    } = this.props;
    this._maybeSubscribeToNewsletterLiveUpdates();
    this._maybeRequestMessageUpdates();
    this._repairNewsletterMsgHistory({
      fetchLastMessage: true
    });
    t.add(P.Cmd, "scroll_chat_to_bottom", e => {
      this._scrollToBottom(e);
    });
    t.add(P.Cmd, "scroll_messages", this.scrollMessages);
    t.add(P.Cmd, "textsize_change", e => this.setState({
      textsize: e
    }));
    t.add(P.Cmd, "scroll_chat_by_height", e => {
      this._scrollByHeight(e);
    });
    t.add(P.Cmd, "panes_will_change", this._handlePanesWillChange);
    t.add(P.Cmd, "panes_did_change", this._handlePanesDidChange);
    t.add(P.Cmd, "scroll_to_focused_msg", e => {
      this._chatOpenScrollTimestamp = Date.now();
      e();
    });
    t.add(P.Cmd, "reaction_changed_last_msg", this._reactionOnLastMessage);
    t.add(window, "focus", this._handleWindowGainedFocus);
    t.add(window, "blur", this._handleWindowLostFocus);
    t.add(window, "resize", this._handleResizeThrottle);
    t.add(window, "resize", this._handleResizeDebounce);
    t.add($.MsgCollection, "change:msgKey", this._handleMsgKeyChange);
    t.add(P.Cmd, "new_history_sync_chunk_processed", this._handleHistorySyncStateUpdate);
    t.add(e, "msgs:preloaded", this._handlePreloadedMessages);
    t.add(e, "msgs:history_repaired", this._handleMsgHistoryRepaired);
    this._attachMsgCollectionObservers(this.props);
    const n = this.props.getUnmountSignal();
    (0, F.documentFlushed)({
      signal: n
    }).then(() => {
      if (!n.aborted) {
        this._showStickyDateMarker();
      }
    }).catch((0, f.filteredCatch)(c.AbortError, () => {}));
    this.props.updateOpenedChatInfo({
      chat: e
    });
    (0, he.sendSeen)(e);
    if ((0, _.canAssignChats)() && e.isAssignedToMe && e.unopenedByAssignedAgent) {
      (0, v.markChatAsOpened)(e, true);
    }
    this._updateForCurrentPosition();
    this._notifyChatRendered();
  }
  static getDerivedStateFromProps(e, t) {
    let n = {
      lastSelectable: e.selectable,
      lastChat: e.chat,
      lastMsgCollection: e.msgCollection,
      lastFocusCtx: e.focusCtx
    };
    if (!(e.selectable !== t.lastSelectable || e.chat === t.lastChat && e.msgCollection === t.lastMsgCollection && e.focusCtx === t.lastFocusCtx)) {
      n = (0, l.default)((0, l.default)({}, n), {}, {
        msgLoadState: j.getMsgLoadState(e.msgCollection)
      }, j.getInitialCursorAndFocusContext(e, t.unreadCount));
    }
    return n;
  }
  shouldComponentUpdate(e, t) {
    if (!(0, Me.default)(e, this.props)) {
      return true;
    }
    const n = this.state;
    const {
      msgLoadState: a
    } = n;
    const r = (0, o.default)(n, Se);
    const {
      msgLoadState: l
    } = t;
    const i = (0, o.default)(t, Te);
    return !(0, Me.default)(l, a) || !(0, Me.default)(i, r);
  }
  componentDidUpdate(e) {
    if (!(e.selectable !== this.props.selectable || e.chat === this.props.chat && e.msgCollection === this.props.msgCollection && e.focusCtx === this.props.focusCtx)) {
      if (this._loadRecentMsgsPromise) {
        this._loadRecentMsgsPromise.controller.abort();
      }
      this._attachMsgCollectionObservers(this.props);
    }
    if (e.chat !== this.props.chat) {
      this._unsubscribeFromNewsletterLiveUpdates();
      this._maybeSubscribeToNewsletterLiveUpdates();
    }
    const {
      chat: t
    } = this.props;
    this._updateRenderedMsgCache(e.chat === t);
    this.props.updateOpenedChatInfo({
      chat: t
    });
    if (e.msgCollection !== this.props.msgCollection) {
      this._repairNewsletterMsgHistory({
        fetchLastMessage: true
      });
      this._updateForCurrentPosition();
    }
    this._notifyChatRendered();
  }
  _repairNewsletterMsgHistory(e) {
    let {
      fetchLastMessage: t
    } = e;
    if (ve.default.isNewsletter(this.props.chat.id)) {
      (0, oe.repairNewsletterMsgHistory)({
        chat: this.props.chat,
        msgCollection: this.props.msgCollection,
        unmountSignal: this.props.getUnmountSignal(),
        fetchLastMessage: t
      });
    }
  }
  _getMsgBottom(e, t) {
    const n = e.scrollTop;
    const a = e.scrollHeight;
    const r = e.clientHeight;
    return a - (t.offsetTop + t.clientHeight + (a - (n + r)));
  }
  _setMsgBottom(e, t, n) {
    const a = t.offsetTop + t.clientHeight + n - e.clientHeight;
    this._setScrollTop(e, a);
  }
  getRenderedMessageCount() {
    return this.getMsgs().length;
  }
  setScrollBottom(e) {
    const t = this.scrollContainer;
    if (t) {
      this._setScrollTop(t, t.scrollHeight - e - t.clientHeight);
    }
  }
  _setScrollTop(e, t) {
    this._programmaticScroll = Date.now();
    if (e) {
      e.scrollTop = t;
    }
  }
  focus() {
    var e;
    var t;
    const n = (e = this.state.focusCtx) === null || e === undefined || (t = e.msg) === null || t === undefined ? undefined : t.id.toString();
    if (n != null) {
      var a;
      var r;
      const e = (a = this._refMessageList.current) === null || a === undefined ? undefined : a.getMsgWrapperRef(n);
      if (!(e == null || (r = e.getContainerElement()) === null || r === undefined)) {
        r.focus();
      }
    }
  }
  _showStickyDateMarker() {
    var e;
    if (!((e = this._refStickyDateMarker.current) === null || e === undefined)) {
      e.setVisibility(true);
    }
    this._hideStickyDateMarker.debounce(3000);
  }
  _nearBottom() {
    const e = this.scrollContainer;
    return !!e && e.scrollTop + W.SCROLL_FUDGE > e.scrollHeight - e.clientHeight;
  }
  getMsgs() {
    let e = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
    const {
      focusCtx: t,
      msgCollection: n
    } = this.props;
    const {
      cursor: a,
      msgLoadState: r
    } = this.state;
    if (t && r.isLoadingAroundMsgs) {
      return [];
    }
    const o = n.toArray().slice(a.getStart(n), a.getEnd(n)).map(e => e.safe()).filter(e => !(0, J.accidentalDeleteMessageEnabled)() || !e.pendingDeleteForMe);
    (0, le.handlePlaceholderMsgsSeen)(o, e);
    return o;
  }
  _checkIfAnimationCandidate(e) {
    if ((0, k.isCongratulationsAnimationsEnabled)()) {
      var t;
      const n = (0, H.getChat)(e);
      const a = (0, H.getCelebrationAnimationCandidate)(e);
      if (a == null || (0, D.getIsMe)(n.contact)) {
        return;
      }
      if (n.animationCandidateData != null ? e.t > ((t = n.animationCandidateData) === null || t === undefined ? undefined : t.msgTimestampSeconds) : e.t > n.celebrationAnimationLastPlayed) {
        n.setAnimationCandidateData({
          animationType: a,
          msgTimestampSeconds: e.t
        });
      }
    }
  }
  _updateRenderedMsgCache(e) {
    const t = this._refMessageList.current;
    if (!t) {
      return void this._renderedMsgCache.clear();
    }
    const n = [];
    const a = t.props.msgs;
    const r = new Map();
    const o = {};
    let l = 0;
    let i = a.length - 1;
    for (; l < i;) {
      const e = Math.floor((l + i) / 2);
      const n = a[e].id.toString();
      const r = t.getMsgWrapperRef(n);
      if (t.getMsgVisibility(r).visibility === X.MSG_VISIBILITY.ABOVE) {
        l = e + 1;
      } else {
        i = e;
      }
    }
    for (let e = l; e < a.length; e++) {
      const l = a[e].id.toString();
      const i = t.getMsgWrapperRef(l);
      if (!i) {
        throw (0, _e.default)("msgRef not found!");
      }
      const u = t.getMsgVisibility(i);
      if (u.visibility !== X.MSG_VISIBILITY.VISIBLE) {
        break;
      }
      o[l] = {
        offset: u.offset,
        t: a[e].t
      };
      r.set(l, i);
      n.push(a[e].id);
      this._checkIfAnimationCandidate(a[e].unsafe());
    }
    if (!this.scrollContainer) {
      return;
    }
    const u = this.scrollContainer.scrollTop;
    l = 0;
    i = Object.keys(t.getRenderedDateMarkers()).length - 1;
    const s = t.getDateMarkerRef(0);
    const c = s && s.getElement();
    if (c && c.offsetTop <= u + 8.5) {
      for (; l < i;) {
        const e = Math.ceil((l + i) / 2);
        const n = t.getDateMarkerRef(e);
        if (!n) {
          throw (0, _e.default)(`DateMarkerRef: ${e} not found. ${Object.keys(t.getRenderedDateMarkers()).toString()}}`);
        }
        if ((0, p.default)(n.getElement(), "midDateMarkerRef.getElement()").offsetTop > u + 8.5) {
          i = e - 1;
        } else {
          l = e;
        }
      }
    } else {
      l = -1;
    }
    this._updateStickyDateMarker.onOrBefore(0, {
      dateMarkerIdx: l,
      silent: e
    });
    this._dateMarkerIdx = l;
    this.pauseHiddenGifs(this._renderedMsgCache, r);
    this._renderedMsgCache = r;
    this._visibleMsgOrder = n;
    if (this.props.chat.isGroup) {
      this._removeViewedMentions();
    }
    this.props.updateOpenedChatInfo({
      renderedMsgsInfo: o,
      visibleMsgOrder: n,
      clientHeight: this.scrollContainer ? this.scrollContainer.clientHeight : 0
    });
  }
  getMsgComponent(e) {
    const t = this._refMessageList.current;
    if (t) {
      return t.getMsgComponentRef(e.toString());
    }
  }
  pauseHiddenGifs(e, t) {
    e.forEach((e, n) => {
      if (t.has(n)) {
        return;
      }
      const a = this.props.msgCollection.get(n);
      if ((a == null ? undefined : a.isGif) !== true) {
        return;
      }
      const r = this._refMessageList.current;
      const o = r == null ? undefined : r.getMsgComponentRef(n);
      if ((o == null ? undefined : o.pause) != null) {
        o.pause();
      }
    });
  }
  _maybeSendSeen(e, t) {
    let n = e;
    let a = t;
    const {
      chat: r,
      msgCollection: o
    } = this.props;
    const {
      cursor: l
    } = this.state;
    if ((r.isDirty() && j.isMostRecentCMC(this.props) && l.getEnd(o) >= o.length || r.hasUnreadEdit()) && (a === undefined && (a = document.hasFocus()), a && (n === undefined && (n = this._nearBottom()), n))) {
      (0, he.sendSeenDebounced)(r);
      return true;
    }
  }
  render() {
    const {
      chat: e,
      msgCollection: t,
      selectable: n,
      onMessageSelect: a
    } = this.props;
    const {
      focusCtx: r,
      msgLoadState: o,
      unreadMentionCount: l
    } = this.state;
    const i = (0, w.classnamesConvertMeToStylexPlease)({
      [L.default.selectable]: n,
      [L.default.pane]: true
    });
    const u = (0, C.getTextsizeClassForScale)(this.state.textsize);
    const s = this.getMsgs(true);
    const c = Ce.default.createElement(Q.default, {
      ref: this._refMessageList,
      getScrollContainer: this._getScrollContainer,
      chat: e,
      unreadCount: this.state.unreadCount,
      selectable: n,
      onMessageSelect: a,
      msgs: s,
      focusedMsgCtx: r,
      selectedMessages: this.props.selectedMessages,
      isMsgVisible: this.isMsgVisible,
      getSequentialMsg: this.getSequentialMsg,
      isLoadingEarlierMsgs: o.isLoadingEarlierMsgs
    });
    let d;
    let f;
    let p;
    let m;
    let h = Ce.default.createElement(N.LoadMoreMessages, {
      direction: "around",
      isMostRecentCMC: j.isMostRecentCMC(this.props),
      loadMoreMsgs: () => {},
      isLoadingEarlierMsgs: o.isLoadingEarlierMsgs,
      isLoadingRecentMsgs: o.isLoadingRecentMsgs,
      isLoadingAroundMsgs: o.isLoadingAroundMsgs,
      isRepairingMsgHistory: o.isRepairingMsgHistory
    });
    if (this.state.cursor.getStart(t) > 0 || !o.noEarlierMsgs || [y.ConversationEndOfHistoryTransferModelPropType.COMPLETE_BUT_MORE_MESSAGES_REMAIN_ON_PRIMARY, y.ConversationEndOfHistoryTransferModelPropType.NOT_INCLUDED_IN_HIST_SYNC, y.ConversationEndOfHistoryTransferModelPropType.COMPLETE_ON_DEMAND_SYNC_BUT_MORE_MSG_REMAIN_ON_PRIMARY].includes(e.endOfHistoryTransferType) || j.noEarlierMsgStateIsIncorrect(e, j.isMostRecentCMC(this.props), o)) {
      d = Ce.default.createElement(N.LoadMoreMessages, {
        direction: "earlier",
        isMostRecentCMC: j.isMostRecentCMC(this.props),
        loadMoreMsgs: this.loadEarlierMsgs,
        isLoadingEarlierMsgs: o.isLoadingEarlierMsgs,
        isLoadingRecentMsgs: o.isLoadingRecentMsgs,
        isLoadingAroundMsgs: o.isLoadingAroundMsgs,
        mdHistorySyncTransferState: e.endOfHistoryTransferType,
        isRepairingMsgHistory: o.isRepairingMsgHistory,
        chatId: e.id
      });
    }
    if (this.state.cursor.getEnd(t) < t.length || !j.isMostRecentCMC(this.props) || o.isRepairingMsgHistory) {
      f = Ce.default.createElement(N.LoadMoreMessages, {
        direction: "recent",
        isMostRecentCMC: j.isMostRecentCMC(this.props),
        loadMoreMsgs: this._loadRecentMsgs,
        isLoadingEarlierMsgs: o.isLoadingEarlierMsgs,
        isLoadingRecentMsgs: o.isLoadingRecentMsgs,
        isLoadingAroundMsgs: o.isLoadingAroundMsgs,
        isRepairingMsgHistory: o.isRepairingMsgHistory
      });
    }
    if (r && o.isLoadingAroundMsgs) {
      f = undefined;
      d = undefined;
    } else {
      h = undefined;
    }
    const {
      isNearBottom: g,
      newUnread: E
    } = this.state;
    if (!g || !o.isLoadingAroundMsgs && !j.isMostRecentCMC(this.props)) {
      if (E && e.unreadCount) {
        m = Ce.default.createElement(T.default, {
          count: this.state.newUnread,
          key: "icon-unread"
        });
      }
      const t = (0, w.classnamesConvertMeToStylexPlease)({
        [L.default.ffFix]: de.UA.isGecko,
        [L.default.incoming]: true
      });
      p = Ce.default.createElement(ie.Round, {
        className: t,
        dataTab: ue.TAB_ORDER.MESSAGE_LIST_SCROLL_BUTTON,
        onClick: this._jumpToBottom,
        label: ye.fbt._("Scroll to bottom", null, {
          hk: "3UK0Wq"
        })
      }, Ce.default.createElement(Ee.default, {
        transitionName: "pop",
        className: L.default.unread
      }, m), Ce.default.createElement(G.DownIcon, {
        className: L.default.iconDown
      }));
    }
    let v;
    let _ = null;
    if (e.isGroup && l > 0) {
      const e = (0, w.classnamesConvertMeToStylexPlease)({
        [L.default.ffFix]: de.UA.isGecko,
        [L.default.buttonGap]: p,
        [L.default.buttonGapRemove]: !p,
        [L.default.atMentions]: true
      });
      const t = ye.fbt._({
        "*": "{count} @ messages",
        _1: "{count} @ message"
      }, [ye.fbt._plural(l), ye.fbt._param("count", q.default.n(l))], {
        hk: "40qwqJ"
      }).toString();
      const n = Ce.default.createElement(ie.Round, {
        className: e,
        onClick: this._jumpToMention,
        dataTab: ue.TAB_ORDER.MESSAGE_LIST_SCROLL_BUTTON
      }, Ce.default.createElement(Ee.default, {
        transitionName: "pop",
        className: L.default.unread
      }, Ce.default.createElement(T.default, {
        count: l,
        ariaLabel: t
      })), Ce.default.createElement(K.MentionsIcon, {
        className: L.default.iconMentions
      }));
      _ = g ? n : Ce.default.createElement(Ee.default, {
        transitionName: "pop"
      }, n);
    }
    if (this.state.contextMenu) {
      v = Ce.default.createElement(fe.UIE, {
        displayName: "ConversationContextMenu",
        escapable: true,
        popable: true,
        dismissOnWindowResize: true,
        requestDismiss: this._handleContextClose
      }, Ce.default.createElement(pe.default, {
        contextMenu: this.state.contextMenu
      }));
    }
    return Ce.default.createElement(B.default, {
      className: u
    }, Ce.default.createElement(Z.default, {
      ref: this._refStickyDateMarker
    }), Ce.default.createElement("div", {
      className: L.default.incomingContainer
    }, _, Ce.default.createElement(Ee.default, {
      transitionName: "pop"
    }, p)), Ce.default.createElement("div", {
      className: i,
      ref: this._setScrollContainer,
      onScroll: this._handleScroll,
      onKeyPress: this._handleKeyPress,
      onContextMenu: n ? null : this._handleContextMenu,
      onPaste: this._handlePaste,
      tabIndex: "0"
    }, Ce.default.createElement("div", {
      className: L.default.empty
    }), h, d, c, f), v);
  }
}
Pe.displayName = "ConversationMsgs";
const Oe = (0, me.default)((0, Y.ListenerHOC)(Pe));
exports.default = class extends Oe {
  getRenderedMessageCount() {
    return this.getComponent().getRenderedMessageCount();
  }
  getScrollBottom() {
    return this.getComponent().getScrollBottom();
  }
  onComposeHeightChange(e) {
    this.getComponent().handleComposeHeightChange(e);
  }
  onPageUpDown(e) {
    this.getComponent().handlePageUpDown(e);
  }
  setScrollBottom(e) {
    this.getComponent().setScrollBottom(e);
  }
  focus() {
    this.getComponent().focus();
  }
};