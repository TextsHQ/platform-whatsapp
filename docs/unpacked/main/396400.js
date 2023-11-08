var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../vendor/81109.js"));
a(require("../app/953268.js"));
var o = a(require("../app/670983.js"));
var l = require("./700071.js");
var i = require("./842529.js");
var u = a(require("./970622.js"));
var s = require("../app/351053.js");
var c = require("../app/394164.js");
var d = require("./822652.js");
var f = require("../app/642838.js");
var p = require("./683481.js");
var m = a(require("../main-chunk/638938.js"));
var h = require("./628445.js");
var g = require("./367744.js");
var E = require("../app/79672.js");
var v = require("../app/2754.js");
var _ = require("./567559.js");
var y = require("../app/780549.js");
var C = require("./648678.js");
var b = require("../app/174834.js");
var M = require("../app/877171.js");
var S = require("../app/660666.js");
a(require("../app/102130.js"));
var T = a(require("../app/677102.js"));
var w = require("./751461.js");
var A = require("../app/235630.js");
var P = require("../app/305521.js");
var O = require("../app/707529.js");
require("../app/581354.js");
var k = require("./512938.js");
var D = a(require("../app/335540.js"));
var I = Z(require("../app/675886.js"));
var R = require("../app/714574.js");
var N = require("../app/163755.js");
var x = require("../main-chunk/516197.js");
var L = a(require("../app/591748.js"));
var j = require("../app/81644.js");
var B = a(require("../app/682026.js"));
var F = require("../app/696430.js");
var G = require("../app/787742.js");
require("../app/772358.js");
require("../app/971804.js");
var U = a(require("./772549.js"));
var W = require("../main-chunk/931109.js");
var H = a(require("./423962.js"));
var V = require("../app/717089.js");
var q = require("../app/238669.js");
var Y = require("../app/392632.js");
var z = require("./281134.js");
var K = require("../vendor/548360.js");
var Q = Z(require("../vendor/667294.js"));
a(require("../app/156720.js"));
function X(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (X = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function Z(e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = X(t);
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
const J = {
  unreadChatsHeader: {
    paddingStart: "rn41jex5"
  }
};
const $ = "SEC_CHATS";
const ee = "SEC_UNREAD_CHATS";
const te = "SEC_CONTACTS";
const ne = "SEC_COMMUNITIES";
const ae = "SEC_ACTIONS";
const re = "SEC_DEBUG_COMMANDS";
const oe = "SEC_SETTINGS";
const le = "SEC_COMMON_GROUPS";
const ie = "SEC_STARRED";
const ue = "SEC_MSG";
const se = "SEC_MUTED_CHATS";
const ce = "SEC_KEPT";
const de = "SEC_ASSIGNED_TO_YOU";
const fe = "ROW_CHATS";
const pe = "ROW_CONTACTS";
const me = "ROW_ACTIONS";
const he = "ROW_DEBUG_COMMANDS";
const ge = "ROW_COMMUNITIES";
const Ee = "ROW_SETTINGS";
const ve = "ROW_COMMON_GROUPS";
const _e = "ROW_STARRED";
const ye = "ROW_KEPT";
const Ce = "ROW_MSG";
const be = (0, l.ChatFactory)();
const Me = (0, d.ContactFactory)();
const Se = (0, k.FlatListFactory)();
function Te(e) {
  let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const {
    formatString: n = ""
  } = t;
  const a = (0, B.default)(e.map(e => {
    const t = (0, A.pushNameCanBeUsed)(e) ? (0, f.getFormattedNotifyName)((0, S.getNotifyName)(e)).toString() : (0, R.getFormattedName)(e);
    return `${n}${t}${n}`;
  }), true);
  return K.fbt._({
    "*": "{contacts-list} are also in this group",
    _1: "{contacts-list} is also in this group"
  }, [K.fbt._plural(e.length), K.fbt._param("contacts-list", a)], {
    hk: "46OC7g"
  });
}
class we extends Q.Component {
  static getDerivedStateFromProps(e) {
    const t = e.ftsResult.filter(e => (0, G.getIsKept)(e));
    const n = e.ftsResult.filter(e => !e.star && !(0, G.getIsKept)(e));
    return (0, r.default)({
      ftsStarred: e.ftsResult.filter(e => {
        let {
          star: t
        } = e;
        return t;
      }),
      ftsKept: t,
      ftsMessages: n
    }, null);
  }
  _isKeyboardUser() {
    return this.context.isKeyboardUser;
  }
  _openSelected() {
    let e = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
    const t = this.props.selection.getVal();
    if (t != null) {
      if (t instanceof E.Chat && t !== s.ChatCollection.getActive()) {
        y.Cmd.openChatFromUnread(t).then(n => {
          if (n && e === true) {
            M.ComposeBoxActions.focus(t);
          }
        });
      } else if (e === true) {
        M.ComposeBoxActions.focus(t);
      }
    }
  }
  constructor(e) {
    super(e);
    this._activeChat = s.ChatCollection.getActive();
    this._tsNavigationId = 0;
    this._setRefHotKeys = e => {
      this._refHotKeys = e;
    };
    this.setRefUIE = e => {
      this.uie = e;
    };
    this.setRefList = e => {
      this.refList = e;
    };
    this._handleFocusList = () => {
      if (this.refList && this._refHotKeys) {
        D.default.focus(this._refHotKeys);
      }
    };
    this._handleMutedChatsBarClick = () => {};
    this.requestFocus = () => {
      if (this.props.mode !== m.default.CommandPalette) {
        this.props.selection.reset(false, false);
        if (this.props.selection.index > -1 && document.activeElement === document.body) {
          this._handleFocusList();
        }
      }
    };
    this._handleFocusSearch = e => {
      e.stopPropagation();
      e.preventDefault();
      this.props.onFocusSearch();
    };
    this._handleCloseChat = e => {
      if (e === this.props.selection.getVal()) {
        this.props.selection.unset();
      }
      this._activeChat = null;
    };
    this.restoreFocus = () => {
      this.props.selection.reset(true);
    };
    this._handleKeptMessageClick = (e, t) => {
      const n = new w.DisappearingMessageKeepInChatWamEvent({
        kicActionName: z.KIC_ACTION_NAME_TYPE.SEARCH_RESULTS_TAP,
        isAGroup: t.isGroup
      });
      var a;
      if (t.isGroup) {
        n.set({
          isAdmin: (a = t.groupMetadata) === null || a === undefined ? undefined : a.participants.iAmAdmin()
        });
      }
      n.commit();
      this.props.onItemClick(e, t);
    };
    this._handleMultiSelect = (e, t, n) => {
      const {
        multiSelection: a
      } = this.props;
      if (a) {
        a.setVal(e, t, n);
      }
    };
    this._renderWrappedItem = (e, t) => {
      const {
        multiSelection: n,
        selectableState: a
      } = this.props;
      if (n && a) {
        return Q.default.createElement(O.ErrorBoundary, {
          name: "chat-list-item"
        }, Q.default.createElement(u.default, {
          model: t,
          theme: "chat-checkbox",
          selectableState: a,
          multiSelection: n,
          onSelect: this._handleMultiSelect
        }, e));
      } else {
        return Q.default.createElement(O.ErrorBoundary, {
          name: "chat-list-item"
        }, e);
      }
    };
    this.renderItem = e => {
      const {
        searchQuery: t,
        filterPreset: n
      } = this.props;
      switch (e.type) {
        case $:
          return Q.default.createElement(U.default, {
            header: K.fbt._("Chats", null, {
              hk: "46DIdr"
            })
          });
        case ee:
          return Q.default.createElement(U.default, {
            xstyle: J.unreadChatsHeader,
            header: K.fbt._("Filtered By Unread", null, {
              hk: "46ZyXR"
            })
          });
        case te:
          return Q.default.createElement(U.default, {
            header: K.fbt._("Contacts", null, {
              hk: "2jWpt9"
            })
          });
        case ae:
          return Q.default.createElement(U.default, {
            header: K.fbt._("Actions", null, {
              hk: "1QkAAV"
            })
          });
        case re:
          return Q.default.createElement(U.default, {
            header: "Debug Commands"
          });
        case ne:
          return Q.default.createElement(U.default, {
            header: K.fbt._("Communities", null, {
              hk: "1ycJwZ"
            })
          });
        case oe:
          return Q.default.createElement(U.default, {
            header: K.fbt._("Settings", null, {
              hk: "1Zpffq"
            })
          });
        case le:
          return Q.default.createElement(U.default, {
            header: K.fbt._("Groups in Common", null, {
              hk: "2WB4P8"
            })
          });
        case ie:
          return Q.default.createElement(U.default, {
            testid: "starred-messages-header",
            header: K.fbt._("Starred messages", null, {
              hk: "4wVbNG"
            })
          });
        case ce:
          return Q.default.createElement(U.default, {
            testid: "kept-messages-header",
            header: K.fbt._("Kept Messages", null, {
              hk: "4ECKrT"
            })
          });
        case ue:
          return Q.default.createElement(U.default, {
            header: K.fbt._("Messages", null, {
              hk: "3oyd2B"
            })
          });
        case se:
          return null;
        case de:
          return Q.default.createElement(U.default, {
            header: K.fbt._("ASSIGNED TO YOU", null, {
              hk: "2b6bp3"
            })
          });
        case fe:
          {
            var a;
            const {
              data: r,
              index: i
            } = e;
            const u = (a = r.groupMetadata) === null || a === undefined ? undefined : a.getParentGroupChat();
            if (u != null && this._shouldNestThisChat(r)) {
              return this._renderWrappedItem(Q.default.createElement(C.CommunityCell, {
                active: this.props.selection,
                chat: r,
                parentGroupMetadata: (0, o.default)(u.groupMetadata, "communityChat.groupMetadata"),
                parentGroupChat: u,
                onClick: e => this.props.onItemClick(e, u),
                inChatList: true
              }), u);
            } else {
              return this._renderWrappedItem(Q.default.createElement(be, {
                chat: r,
                mode: l.Mode.LAST,
                searchQuery: t,
                filterPreset: n,
                onClick: this.props.onItemClick,
                mouseDownAsClick: true,
                selectableState: this.props.selectableState,
                multiSelection: this.props.multiSelection,
                onStartMultiSelect: this.props.onStartMultiSelect,
                active: this.props.selection,
                ephemeralIcon: "chat-list",
                showStatusRingAroundProfilePhoto: true,
                index: i,
                photoSize: this._getDetailImageSize(),
                showCommunityInfo: true
              }), r);
            }
          }
        case pe:
          {
            const {
              data: n
            } = e;
            return this._renderWrappedItem(Q.default.createElement(Me, {
              contact: n,
              active: this.props.selection,
              searchQuery: t,
              onClick: this.props.onItemClick,
              mouseDownAsClick: true,
              waitIdle: true,
              showStatusRingAroundProfilePhoto: true,
              photoSize: this._getDetailImageSize(),
              hideStatus: (0, S.getIsMe)(n),
              showMessageYourselfName: (0, S.getIsMe)(n)
            }), n);
          }
        case me:
          {
            const {
              data: n
            } = e;
            return this._renderWrappedItem(Q.default.createElement(i.ActionLabel, {
              action: n,
              active: this.props.selection,
              onClick: this.props.onItemClick,
              searchQuery: t
            }), n);
          }
        case he:
          {
            const {
              data: n
            } = e;
            return this._renderWrappedItem(Q.default.createElement(p.DebugCommandLabel, {
              active: this.props.selection,
              debugCommand: n,
              onClick: this.props.onItemClick,
              searchQuery: t
            }), n);
          }
        case ge:
          {
            const {
              data: t
            } = e;
            return this._renderWrappedItem(Q.default.createElement(C.CommunityCell, {
              active: this.props.selection,
              parentGroupMetadata: (0, o.default)(t.groupMetadata, "community.groupMetadata"),
              parentGroupChat: t,
              onClick: e => this.props.onItemClick(e, t),
              inCommandPalette: true
            }), t);
          }
        case Ee:
          {
            const {
              data: n
            } = e;
            return this._renderWrappedItem(Q.default.createElement(_.Setting, {
              active: this.props.selection,
              onClick: this.props.onItemClick,
              searchQuery: t,
              setting: n
            }), n);
          }
        case ve:
          {
            const {
              data: a
            } = e;
            const r = a[0];
            const o = this._getCommonGroupSubtitle(a);
            return this._renderWrappedItem(Q.default.createElement(be, {
              chat: r,
              secondary: o,
              mode: l.Mode.LAST,
              searchQuery: t,
              filterPreset: n,
              onClick: this.props.onItemClick,
              mouseDownAsClick: true,
              selectableState: this.props.selectableState,
              multiSelection: this.props.multiSelection,
              onStartMultiSelect: this.props.onStartMultiSelect,
              active: this.props.selection
            }), r);
          }
        case _e:
          {
            const {
              data: a
            } = e;
            return this._renderWrappedItem(Q.default.createElement(g.Message, {
              msg: a,
              chat: (0, N.getChat)(a),
              searchQuery: t,
              filterPreset: n,
              onClick: this.props.onItemClick,
              active: this.props.selection,
              testid: `chatlist-starred-message-${a.id.toString()}`
            }), a);
          }
        case ye:
          {
            const {
              data: a
            } = e;
            return this._renderWrappedItem(Q.default.createElement(g.Message, {
              msg: a,
              chat: (0, N.getChat)(a),
              searchQuery: t,
              filterPreset: n,
              onClick: this._handleKeptMessageClick,
              active: this.props.selection,
              testid: `chatlist-kept-message-${a.id.toString()}`
            }), a);
          }
        case Ce:
          {
            const {
              data: a
            } = e;
            return this._renderWrappedItem(Q.default.createElement(g.Message, {
              msg: a,
              chat: (0, N.getChat)(a),
              searchQuery: t,
              filterPreset: n,
              onClick: this.props.onItemClick,
              active: this.props.selection,
              testid: `chatlist-message-${a.id.toString()}`
            }), a);
          }
        default:
          throw new k.UnknownDataError(e);
      }
    };
    this._updateSelected = e => {
      this._debouncedOpenSelected.cancel();
      this.props.selection.setVal(e, false);
      this._oldSelection = e;
    };
    this._handleFocusGain = e => {
      if (e.target === this._refHotKeys && this._listPointerEvents) {
        if (this.props.selection.index < 0) {
          this.focusFirst();
        } else {
          const {
            uie: e
          } = this;
          if (e) {
            e.activate();
          }
          this.props.selection.reset(true);
        }
      }
    };
    this._handleListPointerEventsOn = () => {
      this._listPointerEvents = true;
    };
    this._handleListPointerEventsOff = () => {
      this._listPointerEvents = false;
    };
    this._listPointerEvents = true;
    this._oldSelection = null;
    this._debouncedOpenSelected = this.props.debounce(() => {
      this._openSelected(this._focusComposer);
      this._focusComposer = false;
    }, 200);
    this.state = {
      textsize: T.default.get().textsize,
      ftsStarred: [],
      ftsKept: [],
      ftsMessages: [],
      mutedChats: [],
      collapseMutedChatsEnabled: false,
      mutedChatsCollapsed: true
    };
  }
  componentWillUnmount() {
    (0, V.tsNavigationExit)(this._tsNavigationId);
    const e = this.props.selection;
    if (e.list.length > 0) {
      return;
    }
    const t = e.getVal();
    if (t instanceof E.Chat && t.isState && !this.props.isSearching) {
      y.Cmd.closeChat(t);
    }
  }
  _getHeight() {
    const {
      textsize: e
    } = this.state;
    return (0, h.getListHeightForTextsize)(e);
  }
  _getDetailImageSize() {
    const {
      textsize: e
    } = this.state;
    return (0, h.getDetailImageSizeForTextSize)(e);
  }
  _getCommonGroupSubtitle(e) {
    const t = e[1].slice(0, 2);
    const n = Te(t, {
      formatString: "*"
    });
    const a = Te(t).toString();
    const r = I.Search({
      terms: [this.props.searchQuery.trimmed()]
    });
    return Q.default.createElement(P.EmojiText, {
      text: n,
      formatters: r,
      titlify: true,
      title: a,
      direction: "auto"
    });
  }
  _shouldNestThisChat(e) {
    var t;
    return (0, b.communityChatListNestingEnabled)() && !this.props.isSearching && (e == null || (t = e.groupMetadata) === null || t === undefined ? undefined : t.getParentGroupChat()) != null;
  }
  getData() {
    const {
      chats: e,
      contacts: t,
      actions: n,
      debugCommands: a,
      communities: r,
      settings: o,
      commonGroups: l,
      isSearching: i,
      messages: u,
      searchQuery: s
    } = this.props;
    const {
      ftsStarred: d,
      ftsMessages: f,
      ftsKept: p,
      mutedChats: m,
      mutedChatsCollapsed: h,
      collapseMutedChatsEnabled: g
    } = this.state;
    const E = [];
    let _ = 0;
    if (i && a.length > 0) {
      E.push({
        itemKey: "section-debug-commands",
        type: re
      });
    }
    E.push(...a.map(e => ({
      itemKey: `debug-command-${e.id.toString()}`,
      data: e,
      type: he,
      height: 60
    })));
    if (i && n.length > 0) {
      E.push({
        itemKey: "section-actions",
        type: ae
      });
    }
    E.push(...n.map(e => ({
      itemKey: `action-${e.id.toString()}`,
      data: e,
      type: me,
      height: 60
    })));
    if (i && o.length > 0) {
      E.push({
        itemKey: "section-settings",
        type: oe
      });
    }
    E.push(...o.map(e => ({
      itemKey: `setting-${e.id.toString()}`,
      data: e,
      type: Ee,
      height: 60
    })));
    if (i && r.length > 0) {
      E.push({
        itemKey: "section-communities",
        type: ne
      });
    }
    E.push(...r.map(e => ({
      itemKey: `community-${e.id.toString()}`,
      data: e,
      type: ge,
      height: 72
    })));
    if (i && e.length > 0) {
      E.push({
        itemKey: "section-chats",
        type: $
      });
    } else if (i || s.filter.kind !== v.SEARCH_FILTERS.UNREAD || (0, x.inboxFiltersEnabled)()) {
      if (!(i || s.filter.kind !== v.SEARCH_FILTERS.ASSIGNED_TO_YOU)) {
        E.push({
          itemKey: "section-chats",
          type: de
        });
      }
    } else {
      E.push({
        itemKey: "section-chats",
        type: ee
      });
    }
    if (!i && g) {
      if (m.length > 0) {
        E.push({
          itemKey: "section-collapse-muted",
          contentKey: `${String(h)}-${m.length}`,
          type: se,
          height: 30
        });
      }
      if (!h) {
        E.push(...m.map(e => ({
          itemKey: `chat-${e.id.toString()}`,
          data: e,
          expanded: !h,
          type: fe
        })));
      }
      E.push(...e.filter(e => !e.mute.isMuted).map(e => ({
        itemKey: `chat-${e.id.toString()}`,
        data: e,
        type: fe,
        index: _++,
        height: (0, b.shouldShowNewSubgroupIdentity)(e.groupMetadata) ? c.SUBGROUP_V2_CHAT_CELL_HEIGHT : undefined
      })));
    } else {
      const t = [...e];
      E.push(...t.map(e => ({
        itemKey: `chat-${e.id.toString()}`,
        data: e,
        type: fe,
        index: _++,
        height: (0, b.shouldShowNewSubgroupIdentity)(e.groupMetadata) ? c.SUBGROUP_V2_CHAT_CELL_HEIGHT : undefined
      })));
    }
    if (i && t.length > 0) {
      E.push({
        itemKey: "section-contacts",
        type: te
      });
    }
    E.push(...t.map(e => ({
      itemKey: `contact-${e.id.toString()}`,
      data: e,
      type: pe
    })));
    if (i && l.length > 0) {
      E.push({
        itemKey: "section-common-groups",
        type: le
      });
    }
    E.push(...l.map(e => ({
      itemKey: `common-group-${e[0].id.toString()}-${e[1].map(e => e.id.toString()).join("-")}`,
      data: e,
      type: ve
    })));
    if (i && d.length > 0) {
      E.push({
        itemKey: "section-starred",
        type: ie
      });
    }
    E.push(...d.map(e => ({
      itemKey: `starred-${e.id.toString()}`,
      data: e,
      type: _e
    })));
    if (i && p.length > 0) {
      E.push({
        itemKey: "section-kept",
        type: ce
      });
    }
    E.push(...p.map(e => ({
      itemKey: `kept-${e.id.toString()}`,
      data: e,
      type: ye
    })));
    if (i && f.length > 0) {
      E.push({
        itemKey: "section-msg",
        type: ue
      });
    }
    E.push(...f.map(e => ({
      itemKey: `msg-${e.id.toString()}`,
      data: e,
      type: Ce
    })));
    if (i && u.length > 0) {
      E.push({
        itemKey: "section-msg",
        type: ue
      });
    }
    E.push(...u.map(e => ({
      itemKey: `msg-${e.id.toString()}`,
      data: e,
      type: Ce
    })));
    return E;
  }
  _scrollListIntoFocusedItem() {
    let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
    if (this.refList) {
      this.refList.scrollIntoViewIfNeeded(this.props.selection.index, e);
    }
  }
  componentDidMount() {
    this._tsNavigationId = (0, V.tsNavigationEnter)({
      surface: "chat-list"
    });
    this.props.selection.init(this.getSelection());
    this.props.listeners.add(y.Cmd, "focus_next_chat", e => {
      this._handleNextChat(null, true, e);
    });
    this.props.listeners.add(y.Cmd, "focus_prev_chat", e => {
      this._handlePrevChat(null, true, e);
    });
    this.props.listeners.add(y.Cmd, "update_chatlist_selection", this._updateSelected);
    this.props.listeners.add(y.Cmd, "close_chat", this._handleCloseChat);
    this.props.listeners.add(y.Cmd, "open_chat", e => {
      this._activeChat = e;
    });
    this.props.listeners.add(y.Cmd, "archive_chat", e => {
      if (e === this._activeChat) {
        this._activeChat = null;
      }
    });
    this.props.listeners.add(y.Cmd, "textsize_change", e => {
      this.setState({
        textsize: e
      });
    });
    this.props.listeners.add(s.ChatCollection, "change:isParentGroup", () => this.forceUpdate());
  }
  componentDidUpdate(e) {
    const t = e.selection.getVal();
    const n = this._activeChat;
    const a = !(e.isSearching || this.props.isSearching || this.props.searchQuery.hasFilter() || (n == null ? undefined : n.archive));
    const {
      selection: r
    } = this.props;
    const o = r.list.map(e => e.id.toString()).join("-");
    const l = this.getSelection();
    const i = l.map(e => e.id.toString()).join("-");
    r.init(l, a);
    if (n && r.list.includes(n) && r.getVal() !== n && !this._isKeyboardUser() && this.props.mode === m.default.Chatlist && !this.props.isSearching) {
      r.setVal(n);
    }
    if (this.props.mode === m.default.CommandPalette && o !== i) {
      r.setFirst(false);
    }
    const u = this.props.selection.getVal();
    if (e.isSearching && !this.props.isSearching && !u && this._oldSelection) {
      this.props.selection.setVal(this._oldSelection);
    }
    if (u && u !== t && u !== n && this.props.mode === m.default.Chatlist && !this._shouldNestThisChat(n)) {
      this._focusComposer = !this._isKeyboardUser();
      this._debouncedOpenSelected();
    }
  }
  getSelection() {
    return [...this.props.debugCommands, ...this.props.actions, ...this.props.settings, ...this.props.communities, ...this.props.chats, ...this.props.contacts, ...this.props.commonGroups.map(e => e[0]), ...this.state.ftsStarred, ...this.state.ftsMessages, ...this.props.messages];
  }
  _handlePrevChat(e, t, n) {
    if (e) {
      e.preventDefault();
    }
    if (this.props.selection.prev() > -1) {
      this.props.selection.setPrev(true);
      this._focusComposer = n;
      this._scrollListIntoFocusedItem();
      if (this.props.mode === m.default.Chatlist) {
        this._debouncedOpenSelected();
      }
    } else if (!t) {
      if (this.props.mode === m.default.Chatlist) {
        this._openSelected();
      }
      this._debouncedOpenSelected.cancel();
      if ((0, x.inboxFiltersEnabled)()) {
        this.props.onFocusFilters();
      } else {
        this.props.onFocusSearch();
      }
    }
  }
  _handleNextChat(e, t, n) {
    if (e) {
      e.preventDefault();
    }
    const a = this.props.selection.next();
    if (this.props.selection.index !== a) {
      this.props.selection.setNext(true);
      this._focusComposer = n;
      this._scrollListIntoFocusedItem();
      if (this.props.mode === m.default.Chatlist) {
        this._debouncedOpenSelected();
      }
    }
  }
  focusFirst() {
    const {
      uie: e
    } = this;
    if (e) {
      e.activate();
    }
    this.props.selection.setFirst();
    this._scrollListIntoFocusedItem(0);
    if (this.props.mode === m.default.Chatlist) {
      this._debouncedOpenSelected();
    }
    if (this.props.mode === m.default.CommandPalette) {
      this._handleNextChat(undefined);
    }
  }
  render() {
    var e;
    const {
      isSearching: t,
      chats: n
    } = this.props;
    let a;
    a = t ? K.fbt._("Search results.", null, {
      hk: "28LBod"
    }) : K.fbt._("Chat list", null, {
      hk: "iikD9"
    });
    return Q.default.createElement(Y.UIE, {
      displayName: "Chatlist",
      ref: this.setRefUIE,
      uimState: q.UIMState.PASSIVE,
      requestFocus: this.requestFocus
    }, Q.default.createElement(j.HotKeys, {
      handlers: {
        down: e => this._handleNextChat(e, false),
        j: e => this._handleNextChat(e, false),
        up: e => this._handlePrevChat(e, false),
        k: e => this._handlePrevChat(e, false),
        "/": e => this._handleFocusSearch(e)
      },
      onFocus: this._handleFocusGain,
      ref: this._setRefHotKeys,
      "data-tab": W.TAB_ORDER.CHAT_LIST
    }, Q.default.createElement(Se, {
      "aria-label": a,
      testid: "chat-list",
      data: this.getData(),
      renderItem: this.renderItem,
      flatListController: this.props.flatListController,
      direction: "vertical",
      defaultItemHeight: this._getHeight(),
      onPointerEventsOff: this._handleListPointerEventsOff,
      onPointerEventsOn: this._handleListPointerEventsOn,
      ref: this.setRefList,
      role: "grid",
      "aria-rowcount": (e = n == null ? undefined : n.length) !== null && e !== undefined ? e : 0
    })));
  }
}
we.contextType = L.default;
we.defaultProps = {
  chats: [],
  commonGroups: []
};
we.displayName = "Chatlist";
const Ae = (0, F.ListenerHOC)((0, H.default)(we));
exports.default = class extends Ae {
  focusFirst() {
    return this.getComponent().focusFirst();
  }
};