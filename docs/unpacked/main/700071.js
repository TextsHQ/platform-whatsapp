var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Chat = undefined;
exports.ChatFactory = _e;
exports.Mode = exports.ChatOrContact = undefined;
var r = require("../app/122583.js");
var o = require("./464520.js");
var l = require("../app/72696.js");
var i = require("../app/412380.js");
var u = require("../app/698052.js");
var s = require("../app/560861.js");
var c = a(require("./991370.js"));
var d = require("../app/351053.js");
var f = require("./822652.js");
var p = require("./874446.js");
var m = require("./112285.js");
var h = require("./124896.js");
var g = require("./374762.js");
var E = require("./216423.js");
var v = require("./618681.js");
var _ = require("./178479.js");
var y = require("../app/738501.js");
var C = require("./457796.js");
var b = require("../app/79672.js");
var M = require("./668231.js");
var S = a(require("./262290.js"));
var T = a(require("./829087.js"));
var w = require("../app/780549.js");
var A = require("../app/174834.js");
var P = require("../app/877171.js");
var O = require("../app/660666.js");
var k = a(require("../main-chunk/194886.js"));
var D = require("../app/23641.js");
require("./807078.js");
var I = require("../main-chunk/465113.js");
var R = require("../app/675085.js");
var N = require("../app/896971.js");
var x = require("../app/707529.js");
var L = require("./488940.js");
var j = a(require("../app/988410.js"));
var B = a(require("../app/335540.js"));
var F = a(require("./131247.js"));
var G = a(require("../app/667845.js"));
var U = a(require("../app/462824.js"));
var W = require("../app/862159.js");
var H = require("../app/806279.js");
var V = require("../app/81644.js");
var q = require("../app/696430.js");
var Y = he(require("../app/288057.js"));
var z = require("./608834.js");
require("../app/971804.js");
var K = require("../app/21645.js");
var Q = a(require("./314239.js"));
var X = a(require("./252303.js"));
var Z = a(require("./714540.js"));
var J = require("./652117.js");
var $ = require("../app/146254.js");
var ee = a(require("../app/634152.js"));
var te = require("./260818.js");
var ne = a(require("./625973.js"));
var ae = require("../app/163139.js");
var re = a(require("./18290.js"));
var oe = a(require("./423962.js"));
var le = require("../app/392632.js");
var ie = a(require("../app/37875.js"));
var ue = a(require("./555517.js"));
var se = require("../app/169467.js");
var ce = require("./122093.js");
var de = a(require("../app/124928.js"));
var fe = require("../vendor/548360.js");
var pe = he(require("../vendor/667294.js"));
function me(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (me = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function he(e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = me(t);
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
const ge = {
  LAST: "LAST",
  INFO: "INFO"
};
exports.Mode = ge;
const Ee = "Files";
class ve extends pe.PureComponent {
  static getDerivedStateFromProps(e, t) {
    const n = {};
    const a = e.active;
    let r = false;
    if (a != null) {
      const {
        value: t
      } = a;
      if (t instanceof b.Chat) {
        r = de.default.equals(t.id, e.chat.id);
      } else if (t instanceof de.default && de.default.isGroup(t)) {
        r = de.default.equals(t, e.chat.id);
      }
    }
    if (t.active !== r) {
      n.active = !!r;
    }
    const o = e.searchQuery ? e.searchQuery.trimmed() : "";
    if (t.searchText !== o) {
      n.searchText = o;
    }
    const l = e.chat.id;
    if (t.chatId !== l) {
      n.chatId = l;
      n.unreadCount = e.chat.optimisticUnreadCount;
    }
    return n;
  }
  constructor(e) {
    super(e);
    this._hoverCounter = 0;
    this._setCellRef = e => {
      this._cellRef = e;
    };
    this._setHotKeysRef = e => {
      this._hotKeysRef = e;
    };
    this.state = {
      active: false,
      dragging: false,
      searchText: "",
      contextMenu: null,
      chatId: null,
      unreadCount: 0,
      showUnreadMentonIcon: false,
      isHovered: false,
      chatAssignmentVisibleToUser: false,
      assignedAgents: (0, l.chatAssignmentEnabled)() ? i.ChatAssignmentCollection.getAgentCollectionForChatId(this.props.chat.id).toArray() : []
    };
    this._setUnreadCount = () => {
      const e = this.props.chat.optimisticUnreadCount;
      if (e !== this.state.unreadCount) {
        this.setState({
          unreadCount: e
        });
      }
    };
    this._prefetchGroupMetadata = () => {
      var e;
      const {
        chat: t
      } = this.props;
      if (t.isGroup && ((e = t.groupMetadata) === null || e === undefined ? undefined : e.stale)) {
        G.default.find(t.id);
      }
    };
    this._handleSearch = () => {
      if (this.props.searchQuery) {
        this.setState({
          searchText: this.props.searchQuery.trimmed()
        });
      } else {
        __LOG__(3)`Chat: prop searchQuery is undefined`;
      }
    };
    this._handleActiveChange = e => {
      if (e === "focus") {
        const e = this._hotKeysRef;
        var t;
        if (e) {
          (0, I.scrollIntoViewIfNeeded)(e);
          B.default.focus(e);
          if (!((t = this._cellRef) === null || t === undefined)) {
            t.indicateFocus();
          }
        }
      }
      this.setState({
        active: !!e
      });
    };
    this._handleAssignedAgentsChange = () => {
      if ((0, l.chatAssignmentEnabled)()) {
        const e = i.ChatAssignmentCollection.getAgentCollectionForChatId(this.props.chat.id).toArray();
        this.setState({
          assignedAgents: e
        });
      }
    };
    this.contextEnabled = () => {
      const {
        noContext: e
      } = this.props;
      return !e;
    };
    this.assignChat = () => {
      const e = Boolean(this.props.searchQuery && !this.props.searchQuery.isEmptyQuery());
      const t = this.props.chat.archive;
      if (this.props.mode === ge.INFO) {
        return void w.Cmd.assignChat(this.props.chat, u.ChatAssignmentEntryPointType.CONTACT_INFO_SCREEN);
      }
      if (e || t) {
        return void w.Cmd.assignChat(this.props.chat, u.ChatAssignmentEntryPointType.MULTI_SELECT);
      }
      const {
        selectableState: n,
        multiSelection: a,
        onStartMultiSelect: r
      } = this.props;
      if (n && a && r) {
        n.setSelectable(true);
        a.setVal((0, ae.unproxy)(this.props.chat));
        r(z.MultiSelectEntryPoint.ChatAssignment);
      }
    };
    this._handleMenu = e => {
      if (this.state.contextMenu) {
        return void this.setState({
          contextMenu: null
        });
      }
      const t = this.props.chat;
      const n = [];
      n.push(pe.default.createElement(p.ChatContextMenuItemArchive, {
        chat: t
      }));
      n.push(pe.default.createElement(v.ChatContextMenuItemMute, {
        chat: t
      }));
      n.push(pe.default.createElement(h.ChatContextMenuItemDelete, {
        chat: t
      }));
      n.push(pe.default.createElement(_.ChatContextMenuItemPin, {
        chat: t
      }));
      if ((0, s.canAssignChats)()) {
        n.push(pe.default.createElement(R.DropdownItem, {
          key: "AssignChat",
          action: this.assignChat,
          testid: "mi-assign-chat"
        }, fe.fbt._("Assign chat", null, {
          hk: "2wu1x7"
        })));
      }
      if ((0, l.canEditLabelAssociation)()) {
        n.push(pe.default.createElement(g.ChatContextMenuItemEditLabel, {
          chat: t,
          searchQuery: this.props.searchQuery,
          selectableState: this.props.selectableState,
          multiSelection: this.props.multiSelection,
          onStartMultiSelect: this.props.onStartMultiSelect
        }));
      }
      n.push(pe.default.createElement(E.ChatContextMenuItemMarkUnread, {
        chat: t
      }));
      if (!t.id.isBot()) {
        n.push(pe.default.createElement(m.ChatContextMenuItemBlock, {
          chat: t
        }));
      }
      this.setState({
        contextMenu: {
          menu: n,
          event: e.event,
          anchor: e.anchor
        }
      });
    };
    this._removeContext = () => {
      this.setState({
        contextMenu: null
      });
    };
    this._handleClick = e => {
      const {
        onClick: t,
        chat: n
      } = this.props;
      if (t) {
        t(e, (0, ae.unproxy)(n));
      }
    };
    this._handleMouseDown = e => {
      if (e.button === 0) {
        this._handleClick(e);
      }
    };
    this._handleMouseEnter = () => {
      (0, J.preloadChatMessagesAction)((0, ae.unproxy)(this.props.chat));
      this.setState({
        isHovered: true
      });
    };
    this._handleMouseLeave = () => {
      this.setState({
        isHovered: false
      });
    };
    this._handleKeyboardActivation = e => {
      e.preventDefault();
      e.stopPropagation();
      j.default.shouldIndicateFocus();
      this._handleClick(e);
    };
    this._handleDragEnter = e => {
      if (!this.props.chat.canSend) {
        return;
      }
      if (new k.default(e.dataTransfer).hasType(Ee)) {
        if (this._hoverCounter === 0) {
          this.setState({
            dragging: true
          });
        }
        this._hoverCounter += 1;
      }
    };
    this._handleDragLeave = e => {
      if (!this.props.chat.canSend) {
        return;
      }
      if (new k.default(e.dataTransfer).hasType(Ee)) {
        this._hoverCounter -= 1;
        if (this._hoverCounter === 0) {
          this.setState({
            dragging: false
          });
        }
      }
    };
    this._handleDrop = e => {
      const {
        chat: t
      } = this.props;
      if (!t.canSend) {
        return;
      }
      this.setState({
        dragging: false
      });
      const n = new k.default(e.dataTransfer);
      if (n.hasType(Ee) || n.hasType("text/uri-list") || n.hasType("text/html")) {
        (0, L.getFiles)(e).then(e => {
          w.Cmd.openChatFromUnread(t).then(n => {
            if (n) {
              w.Cmd.attachMediaDrawer({
                chat: t,
                initCaption: t.getComposeContents(),
                attachments: e.map(e => ({
                  file: e
                })),
                fileOrigin: se.MEDIA_PICKER_ORIGIN_TYPE.CHAT_PHOTO_LIBRARY
              });
            }
          });
        }).catch((0, r.filteredCatch)(Y.MediaDragDropError, e => {
          w.Cmd.openChatFromUnread(t).then(n => {
            if (n && e.src) {
              P.ComposeBoxActions.paste(t, e.src);
            }
          });
        }));
      }
    };
    this.indicateFocus = e => {
      var t;
      e.stopPropagation();
      e.preventDefault();
      if (!((t = this._cellRef) === null || t === undefined)) {
        t.indicateFocus();
      }
    };
    this._toggleFocusInContact = () => {
      if (this._hotKeysRef && this._hotKeysRef !== document.activeElement) {
        B.default.focus(this._hotKeysRef);
      } else if (this._cellRef) {
        this._cellRef.focusOnContextMenuButton();
      }
    };
    this._handlers = {
      enter: this._handleKeyboardActivation,
      space: this._handleKeyboardActivation,
      right: this._toggleFocusInContact,
      left: this._toggleFocusInContact
    };
    this._throttledSetUnreadCount = this.props.throttle(this._setUnreadCount, 0, {
      leading: false,
      tailing: true
    });
  }
  componentDidMount() {
    var e;
    const {
      chat: t
    } = this.props;
    this.initListeners(this.props);
    if (t.isGroup && ((e = t.groupMetadata) === null || e === undefined ? undefined : e.stale)) {
      H.UIBusyTasks.enqueue(this._prefetchGroupMetadata);
    }
    if ((0, s.canAssignChats)()) {
      this.setState({
        chatAssignmentVisibleToUser: true
      });
    }
  }
  componentDidUpdate(e) {
    const {
      chat: t
    } = this.props;
    var n;
    if (t !== e.chat) {
      if (t.isGroup && ((n = t.groupMetadata) === null || n === undefined ? undefined : n.stale)) {
        H.UIBusyTasks.enqueue(this._prefetchGroupMetadata);
      }
    }
    if (t.optimisticUnreadCount !== this.state.unreadCount) {
      this._throttledSetUnreadCount();
    }
    this.initListeners(this.props, e);
  }
  _clearUnreadMentions() {
    const {
      chat: e
    } = this.props;
    var t;
    if (e.isGroup) {
      if (!((t = e.groupMetadata) === null || t === undefined)) {
        t.unreadMentionMetadata.reset();
      }
    }
  }
  initListeners(e, t) {
    const {
      listeners: n,
      active: a,
      chat: r,
      searchQuery: o,
      frequent: u
    } = e;
    if ((t == null ? undefined : t.searchQuery) && t.searchQuery !== o) {
      n.remove(t.searchQuery, M.SEARCH_EVENT, this._handleSearch);
    }
    if (!(!o || t && o === t.searchQuery)) {
      n.add(o, M.SEARCH_EVENT, this._handleSearch);
    }
    const s = t == null ? undefined : t.chat.id;
    if (!r.id.equals(s) && ((t == null ? undefined : t.active) && n.remove(t.active, t.chat.id.toString(), this._handleActiveChange), a)) {
      const e = (u ? f.FREQUENT_PREFIX : "") + r.id.toString();
      n.add(a, e, this._handleActiveChange);
    }
    if ((0, l.chatAssignmentEnabled)()) {
      (0, $.listen)("MD_EXTENSION", (e, t) => {
        if (t) {
          this.setState({
            chatAssignmentVisibleToUser: Boolean(e && !e.isDeactivated)
          });
        }
      });
    }
    if (s) {
      n.remove(i.ChatAssignmentCollection.getAgentCollectionForChatId(s), "add change remove", this._handleAssignedAgentsChange);
    }
    n.add(i.ChatAssignmentCollection.getAgentCollectionForChatId(r.id), "add change remove", this._handleAssignedAgentsChange);
    n.add(d.ChatCollection, "change:isParentGroup", () => this.forceUpdate());
  }
  render() {
    var e;
    var t;
    let {
      chat: n,
      mode: a,
      secondary: r,
      theme: i,
      filterPreset: u,
      ephemeralIcon: d,
      hideArchivedIcon: f,
      hideMuteIcon: p,
      smallUnread: m,
      doNotBoldUnread: h,
      hidePin: g,
      fakePin: E,
      forceActive: v,
      testid: _,
      overrideCommunityAnnouncementGroupName: b,
      heightStyle: w,
      showNewsletterCheckmark: P,
      firstCellInList: k
    } = this.props;
    const {
      searchText: I,
      active: R,
      dragging: L,
      contextMenu: j,
      unreadCount: B,
      isHovered: G,
      assignedAgents: H
    } = this.state;
    let q;
    let Y;
    let z;
    switch (a) {
      case ge.LAST:
        q = pe.default.createElement(T.default, {
          chat: n
        });
        if (r == null) {
          r = pe.default.createElement(S.default, {
            chat: n
          });
          Y = n.isNewsletter ? pe.default.createElement(X.default, {
            unreadCount: B
          }) : pe.default.createElement(C.Icons, {
            chat: n,
            mute: n.mute,
            unreadCount: B,
            hideArchivedIcon: f === true,
            hideMuteIcon: p === true,
            settings: ee.default,
            unreadMentionIcon: n.hasUnreadMention,
            smallUnread: m,
            hidePin: g,
            fakePin: E
          });
        }
        z = n.isNewsletter ? pe.default.createElement(Q.default, {
          msg: n.previewMessage
        }) : null;
        break;
      case ge.INFO:
        if (r == null) {
          r = n.isGroup || n.isBroadcast ? pe.default.createElement(Z.default, {
            groupMetadata: n.groupMetadata
          }) : pe.default.createElement(ue.default, {
            contact: n.contact,
            presence: n.presence,
            chatstate: n.presence.chatstate,
            location: "list",
            chatId: n.id
          });
        }
    }
    let J = this.props.photoSize;
    if (i === "chat-info" || i === "subgroup" || i === "community-tab-subgroup") {
      J = 40;
    } else if (i === "newsletter-cell") {
      J = 36;
    }
    const $ = ((e = n.groupMetadata) === null || e === undefined ? undefined : e.groupType) === W.GroupType.LINKED_ANNOUNCEMENT_GROUP;
    const ne = pe.default.createElement(D.DetailImage, {
      id: n.id,
      size: J,
      waitIdle: true,
      shape: $ ? D.DetailImageShape.Squircle : null,
      ephemeralIcon: d,
      showOutline: n.isNewsletter
    });
    const ae = this.props.showStatusRingAroundProfilePhoto === true ? pe.default.createElement(re.default, {
      contact: n.contact,
      photoSize: J,
      waitIdle: true,
      rowSection: (0, M.isSearchResult)(this.props.searchQuery) ? ce.STATUS_ROW_SECTION.CHAT_LIST_SEARCH : ce.STATUS_ROW_SECTION.CHAT_LIST,
      rowIndex: (0, M.isSearchResult)(this.props.searchQuery) ? 0 : this.props.index || 0
    }) : ne;
    const {
      showCommunityInfo: oe = false
    } = this.props;
    const se = pe.default.createElement(F.default, {
      chat: n,
      regularChatImage: ne,
      selection: this.props.active,
      showSpeakerForCag: this.props.showSpeakerForCag,
      showCommunityInfo: oe,
      isHovered: G,
      size: J,
      theme: te.SubgroupImageTheme.CHAT_LIST
    });
    const de = this.props.mouseDownAsClick;
    let fe;
    if (j) {
      fe = pe.default.createElement(le.UIE, {
        displayName: "ChatContextMenu",
        escapable: true,
        popable: true,
        dismissOnWindowResize: true,
        requestDismiss: this._removeContext
      }, pe.default.createElement(ie.default, {
        contextMenu: j
      }));
    }
    const me = (0, l.chatAssignmentEnabled)() && this.state.chatAssignmentVisibleToUser;
    const he = pe.default.createElement(K.Name, {
      chat: n,
      firstLabel: u == null ? undefined : u.label,
      highlightText: I,
      showBusinessCheckmark: (0, O.getShowBusinessCheckmarkInChatlist)(n.contact),
      showLabel: true,
      titlify: true,
      ellipsify: true,
      showChatAssignmentIcon: me,
      assignedAgents: H,
      showMessageYourselfName: (0, O.getIsMe)(n.contact),
      overrideCommunityAnnouncementGroupName: b,
      showNewsletterCheckmark: P
    });
    let Ee = null;
    const ve = (0, y.getEphemeralSetting)(n);
    if (ve != null && ve !== 0) {
      Ee = pe.default.createElement(o.InvisibleLabel, null, (0, N.getDisappearingMessageExplanationStringKic)(ve));
    }
    const _e = (0, s.canAssignChats)() && n.isAssignedToMe && n.unopenedByAssignedAgent;
    let ye;
    if (this.props.showCommunityInfo === true && (0, A.shouldShowNewSubgroupIdentity)(n.groupMetadata)) {
      var Ce;
      const e = (Ce = n.groupMetadata) === null || Ce === undefined ? undefined : Ce.getParentGroupChat();
      if (e != null) {
        ye = pe.default.createElement(K.Name, {
          chat: e,
          titlify: true,
          ellipsify: true
        });
      }
    }
    const be = pe.default.createElement(x.ErrorBoundary, {
      name: "chat-cell-image"
    }, n.isGroup ? se : ae);
    return pe.default.createElement(U.default.Provider, {
      value: n.groupMetadata
    }, pe.default.createElement(V.HotKeys, {
      ref: this._setHotKeysRef,
      handlers: this._handlers,
      onFocus: this.indicateFocus,
      onDragEnter: this._handleDragEnter,
      onDragLeave: this._handleDragLeave,
      onDrop: this._handleDrop,
      "aria-selected": v != null ? v : R,
      tabIndex: R ? 0 : -1,
      role: "row"
    }, pe.default.createElement(c.default, {
      id: n.id,
      ref: this._setCellRef,
      theme: i,
      contextEnabled: this.contextEnabled,
      pendingAction: n.pendingAction,
      contextMenu: !!j,
      unreadStyle: h !== true && (B !== 0 || _e),
      active: v != null ? v : !!R,
      isMuted: false,
      dragging: !!L,
      image: be,
      primary: he,
      primaryDetail: q,
      secondary: r,
      secondaryDetail: Y,
      onClick: de ? undefined : this._handleClick,
      onMouseDown: de ? this._handleMouseDown : undefined,
      onContext: this._handleMenu,
      onMouseEnter: this._handleMouseEnter,
      onMouseLeave: this._handleMouseLeave,
      testid: (0, O.getIsMe)(n.contact) ? "message-yourself-row" : _,
      isNewsletter: n.isNewsletter,
      heightStyle: n.isNewsletter ? w : null,
      mediaPreview: z,
      label: ye,
      hideMeta: n.isNewsletter && ((t = n.newsletterMetadata) === null || t === undefined ? undefined : t.suspended),
      firstCellInList: k
    }), Ee, fe));
  }
}
function _e() {
  return (0, oe.default)((0, q.ListenerHOC)((0, ne.default)(ve, ve.CONCERNS)));
}
ve.CONCERNS = {
  chat: ["id", "isReadOnly", "isGroup", "pendingAction", "canSend", "isUser", "isNewsletter", "contact", "presence", "groupMetadata", "newsletterMetadata", "mute", "isBroadcast", "canUnread", "optimisticUnreadCount", "labels", "archive", "hasUnreadMention", "kind", "unopenedByAssignedAgent", "isAssignedToMe", "isPSA", "msgs", "previewMessage"]
};
ve.defaultProps = {
  mode: ge.LAST
};
ve.displayName = "ChatImpl";
const ye = _e();
exports.Chat = ye;
const Ce = _e();
exports.ChatOrContact = Ce;