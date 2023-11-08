var a = require("../app/530066.js").default;
var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatlistPanel = undefined;
var o = r(require("../vendor/81109.js"));
var l = r(require("../vendor/348926.js"));
var i = r(require("../vendor/82569.js"));
var u = r(require("../vendor/435161.js"));
var s = r(require("../vendor/23279.js"));
var c = require("../app/898817.js");
var d = r(require("./909097.js"));
var f = r(require("../app/670983.js"));
var p = r(require("../app/229922.js"));
var m = require("../app/685639.js");
var h = require("../app/287461.js");
var g = require("../app/72696.js");
var E = require("../app/454794.js");
var v = r(require("./64053.js"));
var _ = require("../app/412380.js");
var y = require("../app/560861.js");
var C = require("../app/351053.js");
var b = r(require("./396400.js"));
var M = r(require("./309556.js"));
var S = require("./649773.js");
var T = r(require("./266709.js"));
var w = r(require("../main-chunk/638938.js"));
var A = require("../main-chunk/409623.js");
var P = require("./628445.js");
var O = require("../app/713105.js");
var k = require("../app/79672.js");
var D = require("../app/2754.js");
var I = require("./668231.js");
require("../app/701173.js");
var R = require("../app/396574.js");
var N = require("../app/650201.js");
var x = require("../app/780549.js");
var L = require("./824470.js");
var j = r(require("./246943.js"));
var B = require("../app/174834.js");
var F = require("../app/359198.js");
var G = require("../app/877171.js");
var U = require("../app/445729.js");
var W = r(require("../app/846870.js"));
var H = r(require("./344012.js"));
var V = require("../app/177938.js");
var q = require("../app/660666.js");
var Y = r(require("../app/102130.js"));
var z = r(require("../app/677102.js"));
var K = require("./874989.js");
var Q = require("./809470.js");
var X = require("../app/900316.js");
var Z = require("./811720.js");
var J = require("../app/707529.js");
var $ = require("../main-chunk/206563.js");
var ee = r(require("./695144.js"));
var te = require("./701777.js");
require("./512938.js");
var ne = r(require("./964223.js"));
var ae = r(require("./570834.js"));
var re = r(require("../app/988410.js"));
var oe = r(require("../app/335540.js"));
var le = require("../app/914368.js");
var ie = require("../app/163755.js");
var ue = require("../app/969104.js");
var se = r(require("./720107.js"));
var ce = require("../app/862159.js");
var de = require("./217714.js");
var fe = require("../main-chunk/516197.js");
var pe = require("../app/81644.js");
var me = r(require("./731648.js"));
var he = require("../app/299950.js");
var ge = r(require("../app/932325.js"));
var Ee = require("../app/856311.js");
var ve = require("../app/696430.js");
var _e = require("../app/48343.js");
var ye = require("../main-chunk/165433.js");
var Ce = require("../app/97858.js");
var be = r(require("./801056.js"));
var Me = require("../app/114850.js");
var Se = require("../app/61113.js");
var Te = require("../app/772358.js");
var we = require("./608834.js");
var Ae = r(require("./930440.js"));
var Pe = require("./494095.js");
var Oe = require("../app/359484.js");
var ke = require("./606268.js");
var De = require("../app/634919.js");
var Ie = require("../app/843337.js");
var Re = require("./608456.js");
var Ne = require("./177586.js");
var xe = require("./252787.js");
var Le = r(require("./725863.js"));
var je = require("../app/937001.js");
var Be = require("./73016.js");
var Fe = require("./523233.js");
var Ge = r(require("../app/237889.js"));
var Ue = require("../app/956113.js");
var We = r(require("./625973.js"));
var He = r(require("./423962.js"));
var Ve = require("../app/454905.js");
var qe = require("../app/392632.js");
var Ye = r(require("./43473.js"));
var ze = r(require("../app/330619.js"));
r(require("../app/844453.js"));
var Ke = require("../app/571444.js");
var Qe = require("../app/965927.js");
var Xe = r(require("../app/124928.js"));
var Ze = r(require("../app/556869.js"));
var Je = require("../vendor/548360.js");
var $e = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = et(t);
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
r(require("../app/156720.js"));
function et(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (et = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const tt = 450;
const nt = 50;
const at = 75;
class rt extends $e.Component {
  constructor(e) {
    var t;
    super(e);
    t = this;
    this._refPanel = null;
    this.flatListController = new ae.default();
    this._batchState = {};
    this.setRefSearch = e => {
      this.refSearch = e;
    };
    this._refFilters = (0, $e.createRef)();
    this._setRefInputHotkey = e => {
      this._refInputHotkey = e;
    };
    this._refChatlist = (0, $e.createRef)();
    this._filterSession = new ee.default();
    this._hasLabelEditGK = false;
    this._refContainer = (0, $e.createRef)();
    this._unreadScrollTop = 0;
    this._chatlistHidden = false;
    this._debounceSetState = new m.ShiftTimer(() => {
      this.setState(this._batchState);
      this._batchState = {};
    });
    this.debounceSetState = (e, t, n) => {
      Object.assign(this._batchState, e);
      if (t === undefined) {
        this._debounceSetState.onOrBeforeRepaint();
      } else if (n === undefined) {
        this._debounceSetState.debounce(t);
      } else {
        this._debounceSetState.debounceAndCap(t, n);
      }
    };
    this._enableMutiSelection = () => {
      this.selectableState = new Le.default(this.props.selectable || false);
      this.props.listeners.add(this._multiSelection, "all", this._updateShowMultiselectBar);
      this.setState({
        chatlistKeyId: 1
      });
    };
    this._unreadCountChanged = e => {
      if (e.active) {
        return;
      }
      const t = this._unreadChat && Xe.default.equals(this._unreadChat.id, e.id);
      if (e.isDirty()) {
        if (!t) {
          this._unreadChat = e;
        }
      } else if (t) {
        this._removeUnreadButton();
      }
    };
    this._handleChatArchiveOrRemove = e => {
      if (this._unreadChat && Xe.default.equals(this._unreadChat.id, e.id)) {
        this._removeUnreadButton();
      }
    };
    this._updateShowMultiselectBar = () => {
      const {
        showMultiSelectBar: e
      } = this.state;
      const t = this._multiSelection && this._multiSelection.getSelected().length > 0 && !this.props.hideMultiSelectBar;
      if (e === false && t) {
        this.setState({
          showMultiSelectBar: true
        });
      }
    };
    this._handleStartMultiSelect = e => {
      if (e !== this.state.multiSelectEntryPoint) {
        this.setState({
          multiSelectEntryPoint: e
        });
      }
    };
    this._scrollChatListToTop = () => {
      const e = this._refPanel;
      if (e) {
        const t = e.scrollTop;
        if (e.scrollTop !== 0) {
          if (t < e.clientHeight) {
            (0, ze.default)(e, "scroll", {
              duration: 300,
              container: e,
              offset: -(e.scrollTop + e.getBoundingClientRect().top)
            });
          } else {
            e.scrollTop = 0;
          }
        }
      }
    };
    this.getFilteredContacts = e => {
      const {
        searchText: t,
        filter: n = {},
        includeChats: a = false,
        includeNonContacts: r = false
      } = e != null ? e : {};
      if (n.kind === D.SEARCH_FILTERS.CONTACT || n.kind === D.SEARCH_FILTERS.NON_CONTACT || n.kind === D.SEARCH_FILTERS.UNREAD) {
        return [];
      }
      let o = (t || "").trim();
      if (!o && this._isEmptyFilterQuery(n)) {
        return [];
      }
      o = ge.default.accentFold(o);
      const l = (0, Re.numberSearch)(o);
      return V.ContactCollection.getFilteredContacts({
        showMe: !!o,
        showWithoutName: r
      }).filter(function (e) {
        if (!e.searchMatch(o, l, n.label)) {
          return false;
        }
        if (!a) {
          const t = C.ChatCollection.get(e.id);
          if (t == null ? undefined : t.shouldAppearInList) {
            return false;
          }
        }
        return true;
      });
    };
    this.getFilteredCommunities = e => {
      const t = (e || "").trim().toLowerCase();
      if (!t || this.props.mode !== w.default.CommandPalette) {
        return [];
      }
      return C.ChatCollection.filter(e => {
        var n;
        return ((n = e.groupMetadata) === null || n === undefined ? undefined : n.groupType) === ce.GroupType.COMMUNITY && e.formattedTitle.toLowerCase().includes(t);
      });
    };
    this.getFilteredActions = e => {
      const t = (e || "").trim();
      if (t && this.props.mode === w.default.CommandPalette) {
        return L.CommandCollection.query({
          query: t,
          type: "action"
        });
      } else {
        return [];
      }
    };
    this.getFilteredDebugCommands = e => (e || "").trim() && this.props.mode === w.default.CommandPalette && (0, N.isFeatureEnabled)("debug_commands") ? (undefined, []) : [];
    this.getFilteredSettings = e => {
      const t = (e || "").trim();
      if (t && this.props.mode === w.default.CommandPalette) {
        return L.CommandCollection.query({
          query: t,
          type: "setting"
        });
      } else {
        return [];
      }
    };
    this._getFilteredMessages = function () {
      var e;
      let n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (t._isEmptyFilterQuery(n)) {
        return;
      }
      if (!n.label) {
        return;
      }
      const a = ((e = Ee.LabelCollection.get(n.label)) === null || e === undefined ? undefined : e.labelItemCollection.filter(e => e.parentType === E.LabelItemParentType.Msg).map(e => e.parentId)) || [];
      Se.MsgCollection.getMessagesById(a).then(e => {
        t.setState({
          messages: e.messages
        });
      });
    };
    this._getFilteredChats = function (e) {
      let n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      let a = arguments.length > 2 ? arguments[2] : undefined;
      const {
        includeActiveChat: r = false
      } = a != null ? a : {};
      let o = (e || "").trim();
      if (o || !t._isEmptyFilterQuery(n)) {
        o = ge.default.accentFold(o);
        const e = (0, Re.numberSearch)(o);
        return C.ChatCollection.filter(a => {
          if (!a.shouldAppearInList) {
            return false;
          }
          const l = n.label && a.contact.searchMatch(o, e, n.label);
          const i = !o || a.contact.searchMatch(o, e);
          const u = !n.kind && !n.label || (0, O.matchFilter)(a, n);
          const s = [D.SEARCH_FILTERS.UNREAD].concat((0, fe.inboxFiltersEnabled)() ? [D.SEARCH_FILTERS.CONTACT, D.SEARCH_FILTERS.GROUP] : []).includes(n.kind) && a.archive;
          const c = r && t.selection.getVal() === a;
          let d = false;
          if (a.isGroup) {
            d = (0, f.default)(a.groupMetadata, "chat.groupMetadata").isUnnamed && (0, Ie.calculateUnnamedGroupFullParticipantsList)((0, f.default)(a.groupMetadata, "chat.groupMetadata")).includes(o);
          }
          return l || i && u && !s || c || d && u;
        });
      }
      let l = C.ChatCollection.filter(e => !e.archive && e.shouldAppearInList);
      if ((0, B.communityChatListNestingEnabled)()) {
        const e = new Set();
        l = l.filter(t => {
          if (!(0, q.getIsGroup)(t)) {
            return true;
          }
          if (t.groupMetadata == null) {
            return true;
          }
          const {
            parentGroup: n
          } = t.groupMetadata;
          return n == null || !e.has(n.toString()) && (e.add(n.toString()), true);
        });
      }
      return l;
    };
    this.fullTextSearch = (e, t) => {
      const n = e || this.searchQuery.query;
      if ((0, d.default)(n) || (t == null ? undefined : t.label)) {
        if (!this.state.searching) {
          this.debounceSetState({
            searching: true
          });
        }
        this._fts();
      } else if (this.isFTSSearching()) {
        this._cancelSearch();
      } else {
        this.ftsMsgs.reset();
      }
    };
    this.shouldFTSSearch = e => !(!this.ftsMsgs.hasMoreMsgs || this.isFTSSearching() || !(0, d.default)(this.searchQuery.query || "")) && e.scrollTop + le.SCROLL_FUDGE > e.scrollHeight - e.clientHeight;
    this._mapGroupToContacts = (e, t) => {
      const n = new Map();
      for (let a = 0; a < e.length; a++) {
        const r = e[a];
        if (r) {
          r.forEach(e => {
            if (e) {
              if (!n.has(e)) {
                n.set(e, []);
              }
              n.get(e).push(t[a]);
            }
          });
        }
      }
      const a = [];
      n.forEach((e, t) => {
        a.push([t, e]);
      });
      a.sort(function (e, t) {
        if (e[1].length === t[1].length) {
          if (e[0].t != null && t[0].t != null) {
            return t[0].t - e[0].t;
          } else if (e[0].t != null) {
            return -1;
          } else {
            return 1;
          }
        } else {
          return t[1].length - e[1].length;
        }
      });
      return a.slice(0, (0, h.getABPropConfigValue)("web_max_found_common_groups_displayed"));
    };
    this._handleSearch = (e, t) => {
      if (!e && this._isEmptyFilterQuery(t)) {
        this.searchQuery.updateQuery(e);
        this.searchQuery.updateLabelQuery({});
        return void this._handleStopSearch();
      }
      const n = this.searchQuery.query;
      if (!this.searchQuery.equals(e, t)) {
        this.searchQuery.updateQuery(e);
        this.searchQuery.updateLabelQuery(t);
        if (this._isSearching()) {
          this.fullTextSearch(e, t);
          this._commonGroupSearch();
          this._throttledFilteredChats(e, t);
          this._throttledFilteredContacts(e, t);
          this._throttledFilteredActions(e);
          this._throttledFilteredDebugCommands(e);
          this._throttledFilteredCommunities(e);
          this._throttledFilteredSettings(e);
        } else {
          if (n && !e) {
            this._handleStopSearch();
          }
          this.debounceSetState({
            chats: this._getFilteredChats(undefined, t)
          });
        }
      }
    };
    this._hasSearchText = () => !!this.searchQuery.query;
    this.isFTSSearching = () => {
      const e = this._batchState;
      if ("searching" in e) {
        return e.searching;
      } else {
        return this.state.searching;
      }
    };
    this._cancelSearch = () => {
      var e;
      var t;
      this._fts.cancel();
      this._commonGroupSearch.cancel();
      this.ftsMsgs.resetSearch();
      this.ftsMsgs.reset();
      if (!((e = this._ftsAbortController) === null || e === undefined)) {
        e.abort();
      }
      if (!((t = this._findCommonGroupsAbortController) === null || t === undefined)) {
        t.abort();
      }
      this.setState({
        commonGroups: []
      });
      if (this.isFTSSearching()) {
        this.debounceSetState({
          searching: false
        }, at);
      }
    };
    this._cancelThrottled = () => {
      this._throttledFilteredChats.cancel();
      this._throttledFilteredContacts.cancel();
      this._throttledFilteredActions.cancel();
      this._throttledFilteredCommunities.cancel();
      this._throttledFilteredSettings.cancel();
      this._throttledOnScroll.cancel();
    };
    this._handleStopSearch = () => new Promise(e => {
      if (!this._isEmptyFilterQuery(this.searchQuery.filter)) {
        (0, $.logSearchWithFilterEvent)(this._filterSession.sessionId);
      }
      this._cancelSearch();
      this.searchQuery.clear();
      this._cancelThrottled();
      if (this.refSearch != null) {
        this.refSearch.clearSearch();
      }
      this.setState({
        chats: this._getFilteredChats(),
        contacts: this.getFilteredContacts(),
        actions: this.getFilteredActions(),
        debugCommands: this.getFilteredDebugCommands(),
        communities: this.getFilteredCommunities(),
        settingsCommands: this.getFilteredSettings(),
        searching: false
      }, () => e());
    });
    this._handleFocusFilters = e => {
      if (!(e == null)) {
        e.preventDefault();
      }
      re.default.shouldIndicateFocus();
      oe.default.focus(this._refFilters.current);
    };
    this._handleFocusChatList = e => {
      var t;
      if (this._refChatlist.current) {
        if (!(e == null)) {
          e.preventDefault();
        }
        re.default.shouldIndicateFocus();
        if (!((t = this._refChatlist.current) === null || t === undefined)) {
          t.focusFirst();
        }
      }
    };
    this._handleSearchNextControlFocus = e => {
      if (!(e.repeat || this.refSearch && !this.refSearch.cursorIsAtEnd())) {
        if ((0, fe.inboxFiltersEnabled)()) {
          this._handleFocusFilters(e);
        } else {
          this._handleFocusChatList(e);
        }
      }
    };
    this._handleMessageClick = function () {
      var e = (0, l.default)(function* (e, n, a) {
        yield (0, P.openChat)(n.id, a);
        t._handleItemSelected("message", n);
      });
      return function () {
        return e.apply(this, arguments);
      };
    }();
    this._handleChatClick = function () {
      var e = (0, l.default)(function* (e, n) {
        yield (0, P.openChat)(n.id);
        if (n.isBroadcast) {
          t._handleItemSelected("broadcast_list", n);
        } else if (n.isGroup) {
          new F.CommunityGroupJourneyEvent({
            action: Ke.CHAT_FILTER_ACTION_TYPES.GROUP_NAVIGATION,
            surface: Qe.SURFACE_TYPE.CHATLIST,
            chat: n
          }).commit();
          t._handleItemSelected("group", n);
        } else {
          t._handleItemSelected("chat", n);
        }
      });
      return function () {
        return e.apply(this, arguments);
      };
    }();
    this._handleContactClick = function () {
      var e = (0, l.default)(function* (e, n) {
        const a = yield (0, P.openChat)(n.id);
        t._handleItemSelected("contact", a);
      });
      return function () {
        return e.apply(this, arguments);
      };
    }();
    this._handleItemClick = (e, t, n) => {
      e.preventDefault();
      e.stopPropagation();
      if (this.props.mode === w.default.CommandPalette) {
        Me.ModalManager.close();
      }
      if (t instanceof Te.Msg) {
        const n = (0, ie.getChat)(t);
        const a = (0, O.getSearchContext)(n, t);
        a.msg = t;
        this._handleMessageClick(e, n, a);
      } else if (t instanceof k.Chat) {
        var a;
        if (n != null) {
          this._handleMessageClick(e, t, n);
        } else if (((a = t.groupMetadata) === null || a === undefined ? undefined : a.groupType) === ce.GroupType.COMMUNITY) {
          x.Cmd.openCommunityHome(t.id, false);
        } else {
          this._handleChatClick(e, t);
        }
      } else if (t instanceof Y.default) {
        this._handleContactClick(e, t);
      } else if (t instanceof j.default) {
        switch (t.type) {
          case "setting":
            X.DrawerManager.openDrawerLeft($e.default.createElement(Fe.SettingsFlowLoadable, {
              initialStep: Be.SettingsSteps.cast(t.id)
            }));
            break;
          case "action":
            (0, me.default)(t.name);
        }
      }
    };
    this._handleOpenFirst = e => {
      var t;
      var n;
      var a;
      var r;
      var o;
      var l;
      const i = this.searchQuery.query;
      const u = this.searchQuery.filter;
      const s = (t = (n = (a = (r = (o = (l = this.getFilteredDebugCommands(i)[0]) !== null && l !== undefined ? l : this.getFilteredActions(i)[0]) !== null && o !== undefined ? o : this.getFilteredSettings(i)[0]) !== null && r !== undefined ? r : this.getFilteredCommunities(i)[0]) !== null && a !== undefined ? a : this._getFilteredChats(i, u)[0]) !== null && n !== undefined ? n : this.getFilteredContacts({
        searchText: i,
        filter: u
      })[0]) !== null && t !== undefined ? t : this.ftsMsgs.at(0);
      if (s) {
        this._handleItemClick(e, s);
      }
    };
    this._handleFocusSearch = () => {
      X.DrawerManager.existsDrawerLeft(e => {
        if (!(e && this.props.mode !== w.default.CommandPalette)) {
          re.default.shouldIndicateFocus();
          oe.default.focus(this.refSearch);
        }
      });
    };
    this.indicateFocus = () => {
      re.default.maybeIndicateFocus(this._refInputHotkey);
    };
    this._handleScroll = e => {
      this._throttledOnScroll(e.target);
    };
    this._handleNewChat = () => {
      X.DrawerManager.openDrawerLeft($e.default.createElement(Pe.NewChatFlowLoadable, {
        onEnd: () => X.DrawerManager.closeDrawerLeft()
      }), {
        focusType: he.FocusType.TABBABLE
      });
      ye.UiMessageYourselfNewChatAction.startSession();
      ye.UiMessageYourselfNewChatAction.newChatPressed();
    };
    this.getEmptyChatlistState = e => {
      const {
        chats: t,
        contacts: n,
        messages: a,
        communities: r,
        debugCommands: o,
        actions: l,
        settingsCommands: i
      } = this.state;
      if ((t == null ? undefined : t.length) || (n == null ? undefined : n.length) || e.length || (a == null ? undefined : a.length) || (r == null ? undefined : r.length) || (o == null ? undefined : o.length) || (l == null ? undefined : l.length) || (i == null ? undefined : i.length)) {
        return null;
      } else if (this.props.labelFilter) {
        if (this.state.searching) {
          return $e.default.createElement("span", null);
        } else {
          return $e.default.createElement(Z.NoResultForLabel, {
            labelId: this.props.labelFilter
          });
        }
      } else if (this.searchQuery.query) {
        if (this.state.searching) {
          return $e.default.createElement(Z.Searching, null);
        } else {
          return $e.default.createElement(Z.Search, {
            hasFilter: this.searchQuery.hasFilter(),
            onClearFilter: this._handleClearFilter
          });
        }
      } else if (!this._isSearching() && [D.SEARCH_FILTERS.UNREAD, D.SEARCH_FILTERS.ASSIGNED_TO_YOU].concat((0, fe.inboxFiltersEnabled)() ? [D.SEARCH_FILTERS.CONTACT, D.SEARCH_FILTERS.GROUP] : []).includes(this.searchQuery.filter.kind) && this.searchQuery.filter.kind != null) {
        return $e.default.createElement(Z.NoFilteredChats, {
          filter: this.searchQuery.filter.kind,
          onClearFilter: this._handleClearFilter,
          filterSession: this._filterSession
        });
      } else if (C.ChatCollection.some(e => e.shouldAppearInList)) {
        return $e.default.createElement(Z.AllArchived, null);
      } else {
        return $e.default.createElement(Z.ListChats, null);
      }
    };
    this._setRefPanel = e => {
      this._refPanel = e;
    };
    this._handleClearFilter = () => {
      var e;
      if (!((e = this.refSearch) === null || e === undefined)) {
        e.clearFilter();
      }
    };
    this._handleCancelLabelSelection = () => {
      var e;
      var t;
      this.setState({
        showMultiSelectBar: false
      });
      if (this._multiSelection) {
        this._multiSelection.unsetAll();
      }
      if (this.selectableState) {
        this.selectableState.setSelectable(!!this.props.selectable);
      }
      if (!((e = (t = this.props).endMultiSelect) === null || e === undefined)) {
        e.call(t);
      }
    };
    this._handleItemSelected = (e, t) => {
      if (t != null && (0, q.getIsMe)(t.contact)) {
        ye.UiMessageYourselfSearchAction.logMessageYourselfOpenedEvent(t, this._isSearching());
      }
      if ((0, g.smartFiltersEnabled)() && !this.props.labelFilter && (!this._isEmptyFilterQuery(this.searchQuery.filter) || this._hasSearchText())) {
        const n = this.searchQuery.filter;
        const a = this._filterSession.sessionId;
        (0, $.logSearchItemSelectedFilterEvent)(a, n, e);
        if (t) {
          G.ComposeBoxActions.addMsgSendingLogAttributes(t, {
            handleOnce() {
              (0, $.logSearchMsgSentFilterEvent)(a, n, e);
            }
          });
        }
      }
    };
    this._handleChatlistDisplayUpdate = function () {
      let e = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
      if (!t.searchQuery.filter.kind) {
        return;
      }
      if (e && t._chatlistHidden) {
        return;
      }
      const n = t.props.getUnmountSignal();
      const a = new Promise(e => {
        self.setTimeout(() => X.DrawerManager.existsDrawerLeft(e), 0);
      });
      const r = new Promise(e => {
        self.setTimeout(() => Me.ModalManager.exists(e), 0);
      });
      const o = new Promise(e => {
        self.setTimeout(() => Me.ModalManager.existsMedia(e), 0);
      });
      Promise.all([a, r, o]).then(e => {
        let [a, r, o] = e;
        if (!n.aborted) {
          if (a || r || o) {
            t._chatlistHidden = true;
          } else if (t._chatlistHidden && (t._chatlistHidden = false, t._chatlistFiltersSetTime != null)) {
            if (Date.now() - (0, f.default)(t._chatlistFiltersSetTime, "_this._chatlistFiltersSetTime") >= (0, h.getABPropConfigValue)("inbox_filters_reset_timeout") * 1000) {
              t._handleSearch(t.searchQuery.query, {
                kind: null
              });
            }
          }
        }
      }).catch(() => {});
    };
    this.ftsMsgs = new se.default();
    this.selection = new Ge.default([], e => e.id.toString());
    this.searchQuery = new I.SearchQuery();
    this._multiSelection = this.props.multiSelection || new Ae.default([], e => e.id.toString());
    this._fts = this.props.debounce(() => {
      var e;
      if (!this.props.labelFilter) {
        this.logSearchEvent();
      }
      const t = this.searchQuery.trimmed();
      if (!((e = this._ftsAbortController) === null || e === undefined)) {
        e.abort();
      }
      this._ftsAbortController = new a();
      const n = this._ftsAbortController.signal;
      const r = this.props.getUnmountSignal();
      const o = Promise.resolve().then(() => {
        if (!this.isFTSSearching()) {
          this.debounceSetState({
            searching: true
          }, at);
        }
      }).then(() => this.ftsMsgs.search({
        count: ue.FTS_NUM_RESULTS,
        filter: this.searchQuery.filter,
        searchTerm: t
      }));
      this._ftsPromise = (0, p.default)(o, n).then(e => {
        if (!r.aborted) {
          if (e && !e.canceled) {
            this.debounceSetState({
              searching: false
            }, at);
          }
        }
      }).catch((0, c.catchAbort)(() => {})).finally(() => {
        this._ftsPromise = undefined;
        this._ftsAbortController = undefined;
      }).catch(() => {
        if (this.isFTSSearching()) {
          this.debounceSetState({
            searching: false
          }, at);
        }
      });
    }, ue.FTS_TYPING_DELAY);
    this._throttledFilteredChats = this.props.throttle((e, t) => {
      const n = this._getFilteredChats(e, t);
      this.debounceSetState({
        chats: n
      }, at, nt);
    }, tt, {
      leading: false,
      trailing: true
    });
    this._throttledFilteredContacts = this.props.throttle((e, t) => {
      const n = this.getFilteredContacts({
        searchText: e,
        filter: t
      });
      this.debounceSetState({
        contacts: n
      }, at, nt);
    }, tt, {
      leading: false,
      trailing: true
    });
    this._throttledFilteredActions = this.props.throttle(e => {
      const t = this.getFilteredActions(e);
      this.debounceSetState({
        actions: t
      }, at, nt);
    }, tt, {
      leading: false,
      trailing: true
    });
    this._throttledFilteredDebugCommands = this.props.throttle(e => {
      const t = this.getFilteredDebugCommands(e);
      this.debounceSetState({
        debugCommands: t
      }, at, nt);
    }, tt, {
      leading: false,
      trailing: true
    });
    this._throttledFilteredCommunities = this.props.throttle(e => {
      const t = this.getFilteredCommunities(e);
      this.debounceSetState({
        communities: t
      }, at, nt);
    }, tt, {
      leading: false,
      trailing: true
    });
    this._throttledFilteredSettings = this.props.throttle(e => {
      const t = this.getFilteredSettings(e);
      this.debounceSetState({
        settingsCommands: t
      }, at, nt);
    }, tt, {
      leading: false,
      trailing: true
    });
    this._throttledOnScroll = this.props.throttle(e => {
      if (this.shouldFTSSearch(e)) {
        this.fullTextSearch();
      }
    }, 100);
    this._commonGroupSearch = (0, s.default)(() => {
      var e;
      const t = this.searchQuery.trimmed();
      if (!t) {
        return void this.setState({
          commonGroups: []
        });
      }
      const n = this.searchQuery.filter;
      if (n.kind === D.SEARCH_FILTERS.CONTACT || n.kind === D.SEARCH_FILTERS.NON_CONTACT) {
        return void this.setState({
          commonGroups: []
        });
      }
      const r = this.getFilteredContacts({
        searchText: t,
        filter: n,
        includeChats: true,
        includeNonContacts: true
      });
      const o = (0, h.getABPropConfigValue)("web_max_contacts_to_show_common_groups");
      if (r.length === 0 || r.length > o) {
        return void this.setState({
          commonGroups: []
        });
      }
      const i = (0, u.default)(r, function () {
        var e = (0, l.default)(function* (e) {
          try {
            yield (0, te.findCommonGroups)(e);
            return e.commonGroups;
          } catch (e) {
            __LOG__(4, true, new Error(), true)`get from participants table failed`;
            SEND_LOGS("get from participants table failed when finding common groups: " + e);
            throw (0, Ze.default)("get from participants table failed");
          }
        });
        return function () {
          return e.apply(this, arguments);
        };
      }());
      if (!((e = this._findCommonGroupsAbortController) === null || e === undefined)) {
        e.abort();
      }
      this._findCommonGroupsAbortController = new a();
      const s = this._findCommonGroupsAbortController.signal;
      this._findCommonGroupsPromise = (0, p.default)(Promise.all(i), s).then(e => {
        if (t === this.searchQuery.trimmed()) {
          const t = this._mapGroupToContacts(e, r);
          this.setState({
            commonGroups: t
          });
        }
      }).catch(() => {}).finally(() => {
        this._findCommonGroupsPromise = null;
        this._findCommonGroupsAbortController = null;
      });
    }, 750);
    const {
      labelFilter: n,
      multiSelectEntryPoint: r
    } = this.props;
    const i = this.props.labelFilter ? {
      label: n
    } : undefined;
    this.state = (0, o.default)((0, o.default)({
      searching: false,
      chats: this._getFilteredChats("", i),
      contacts: this.getFilteredContacts({
        searchText: "",
        filter: i
      }),
      actions: this.getFilteredActions(""),
      debugCommands: this.getFilteredDebugCommands(""),
      communities: this.getFilteredCommunities(""),
      settingsCommands: this.getFilteredSettings(""),
      commonGroups: [],
      showMultiSelectBar: false,
      multiSelectEntryPoint: r,
      chatlistKeyId: 0,
      filterPreset: i,
      textsize: z.default.get().textsize,
      isOverflowing: false
    }, {}), {}, {
      showOfflineToastbar: Oe.OfflineMessageHandler.getResumeUIProgressBarType() === De.ResumeUIProgressBarType.Toastbar
    });
    this.searchQuery.updateLabelQuery(i);
    this._getFilteredMessages(i);
  }
  _isSearching() {
    return Boolean(this.searchQuery.query);
  }
  componentDidMount() {
    const {
      labelFilter: e,
      listeners: t,
      mode: n
    } = this.props;
    if (n === w.default.CommandPalette) {
      L.CommandCollection.reset();
      L.CommandCollection.initializeCommands();
    }
    if (e) {
      this._handleSearch("", {
        label: e
      });
    }
    this._enableMutiSelection();
    t.add(C.ChatCollection, "remove", e => {
      if (this.searchQuery.query) {
        const t = (0, i.default)(this.state.chats, e);
        if (this.state.chats && t.length !== this.state.chats.length) {
          this.debounceSetState({
            chats: t
          });
        }
      } else {
        this._throttledFilteredChats.cancel();
        this.debounceSetState({
          chats: this._getFilteredChats(undefined, this.searchQuery.filter)
        });
      }
    });
    t.add(V.ContactCollection, "remove", e => {
      if (this._isSearching()) {
        const t = (0, i.default)(this.state.contacts, e);
        if (this.state.contacts && t.length !== this.state.contacts.length) {
          this.debounceSetState({
            contacts: t
          });
        }
      } else {
        this._throttledFilteredContacts.cancel();
        this.debounceSetState({
          contacts: this.getFilteredContacts({
            searchText: undefined,
            filter: this.searchQuery.filter
          })
        });
      }
    });
    if ((0, y.canAssignChats)()) {
      t.add(_.ChatAssignmentCollection, "add remove", e => {
        if (this.searchQuery.filter.kind === D.SEARCH_FILTERS.ASSIGNED_TO_YOU) {
          if (this.searchQuery.query) {
            const t = (0, i.default)(this.state.chats, e);
            if (this.state.chats && t.length !== this.state.chats.length) {
              this.debounceSetState({
                chats: t
              });
            }
          } else {
            this._throttledFilteredChats.cancel();
            this.debounceSetState({
              chats: this._getFilteredChats(undefined, this.searchQuery.filter)
            });
          }
        }
      });
    }
    const a = this.props.throttle(e => {
      if (this._isSearching() || this.searchQuery.filter.kind !== D.SEARCH_FILTERS.UNREAD && (!(0, y.canAssignChats)() || this.searchQuery.filter.kind !== D.SEARCH_FILTERS.ASSIGNED_TO_YOU)) {
        return;
      }
      this._throttledFilteredChats.cancel();
      let t = this._getFilteredChats(undefined, this.searchQuery.filter, {
        includeActiveChat: true
      });
      if (e) {
        t = t.filter(t => t !== e);
      }
      this.debounceSetState({
        chats: t
      });
    }, tt);
    t.add(C.ChatCollection, "sort change:archive", () => {
      if (!this._isSearching()) {
        if (this.searchQuery.filter.kind !== D.SEARCH_FILTERS.UNREAD) {
          this._throttledFilteredChats.cancel();
          this.debounceSetState((0, o.default)({
            chats: this._getFilteredChats(undefined, this.searchQuery.filter)
          }, undefined));
        } else {
          a();
        }
      }
    });
    t.add(C.ChatCollection, "change:unreadCount change:isAssignedToMe", () => a());
    t.add(x.Cmd, "close_chat", e => {
      a(e);
    });
    t.add(x.Cmd, "offline_progress_update offline_delivery_end", () => this._setShouldShowOfflineToastbr());
    t.add(V.ContactCollection, "sort", () => {
      if (!this._isSearching()) {
        this._throttledFilteredContacts.cancel();
        this.debounceSetState({
          contacts: this.getFilteredContacts({
            filter: this.searchQuery.filter
          })
        });
      }
    });
    t.add(this.ftsMsgs, "bulk_remove reset", () => {
      if (!this._isSearching()) {
        this._throttledFilteredChats.cancel();
        this.debounceSetState({
          chats: this._getFilteredChats(undefined, this.searchQuery.filter)
        });
      }
    });
    t.add(x.Cmd, "focus_chat_search", this._handleFocusSearch);
    t.add(x.Cmd, "textsize_change", e => {
      this.debounceSetState({
        textsize: e
      });
    });
    t.add(Se.MsgCollection, W.default.NEW_MSG_SENT, () => {
      if (this._isSearching()) {
        this._handleStopSearch().then(() => this._scrollChatListToTop());
      } else {
        this._scrollChatListToTop();
      }
    });
    if (this.props.mode === w.default.Chatlist && (0, h.getABPropConfigValue)("inbox_filters_reset_timeout") > 0 && (0, fe.inboxFiltersEnabled)()) {
      t.add(X.DrawerManager, "open_drawer_left", () => this._handleChatlistDisplayUpdate(true));
      t.add(X.DrawerManager, "close_drawer_left", () => this._handleChatlistDisplayUpdate());
      t.add(Me.ModalManager, "open_modal open_media", () => this._handleChatlistDisplayUpdate(true));
      t.add(Me.ModalManager, "close_modal close_media", () => this._handleChatlistDisplayUpdate());
    }
  }
  getClientWidth() {
    var e;
    if ((e = this._refContainer.current) === null || e === undefined) {
      return undefined;
    } else {
      return e.clientWidth;
    }
  }
  isCommandPaletteOverflowing() {
    if (!this._refContainer.current) {
      return false;
    }
    const e = this._refContainer.current.clientHeight;
    const t = window.innerHeight;
    return e >= Math.floor(t * 0.8);
  }
  containsDOMNode(e) {
    return !!this._refContainer.current && this._refContainer.current.contains(e);
  }
  _showUnreadButton() {
    return false;
  }
  _removeUnreadButton() {
    if (this.state.unreadButton) {
      this._unreadChat = undefined;
      this.setState({
        unreadButton: false
      });
    }
  }
  componentWillUnmount() {
    this._cancelSearch();
    this._cancelThrottled();
    this._debounceSetState.cancel();
  }
  _isEmptyFilterQuery(e) {
    return !e || !(e.label || e.kind);
  }
  _showUnread() {}
  _showArchivedPanel() {
    var e;
    return Boolean((0, Ce.archiveV2Supported)() && this.props.mode === w.default.Chatlist && ((e = this.props.settings) === null || e === undefined ? undefined : e.showArchiveV2) && !this.state.showMultiSelectBar && this.searchQuery.isEmptyQuery() && !this.searchQuery.hasFilter() && this.state.chats && this.state.chats.length > 0 && C.ChatCollection.some(e => e.archive && e.shouldAppearInList));
  }
  logSearchEvent() {
    if ((0, g.smartFiltersEnabled)()) {
      (0, $.logSearchFilterEvent)(this._filterSession.sessionId, this.searchQuery.filter);
    }
  }
  _setShouldShowOfflineToastbr() {
    this.debounceSetState({
      showOfflineToastbar: Oe.OfflineMessageHandler.getResumeUIProgressBarType() === De.ResumeUIProgressBarType.Toastbar
    });
  }
  componentDidUpdate() {
    if (this.props.mode === w.default.CommandPalette) {
      const e = this.isCommandPaletteOverflowing();
      if (e !== this.state.isOverflowing) {
        this.setState({
          isOverflowing: e
        });
      }
    }
  }
  render() {
    var e;
    var t;
    var n;
    const {
      chats: a,
      contacts: r,
      commonGroups: o,
      actions: l,
      debugCommands: i,
      communities: u,
      settingsCommands: s,
      filterPreset: c,
      messages: d,
      isOverflowing: f
    } = this.state;
    const {
      mode: p
    } = this.props;
    const m = this.ftsMsgs.toArray();
    let h;
    let g = this.getEmptyChatlistState(m);
    const E = !!this._hasSearchText() || this.searchQuery.hasLabelFilter() || this.searchQuery.hasKindFilter() && ![D.SEARCH_FILTERS.UNREAD, D.SEARCH_FILTERS.ASSIGNED_TO_YOU].concat((0, fe.inboxFiltersEnabled)() ? [D.SEARCH_FILTERS.CONTACT, D.SEARCH_FILTERS.GROUP] : []).includes(this.searchQuery.filter.kind);
    if (g == null && (p === w.default.Chatlist || p === w.default.CommandPalette && this.searchQuery.query.length > 0)) {
      g = $e.default.createElement(b.default, {
        key: this.state.chatlistKeyId,
        ref: this._refChatlist,
        flatListController: this.flatListController,
        chats: a,
        contacts: r || [],
        messages: d || [],
        actions: l || [],
        debugCommands: i || [],
        communities: u || [],
        settings: s || [],
        filterPreset: c,
        commonGroups: o,
        isSearching: E,
        searchQuery: this.searchQuery,
        ftsResult: m,
        selection: this.selection,
        onFocusSearch: this._handleFocusSearch,
        onFocusFilters: this._handleFocusFilters,
        multiSelection: this._multiSelection,
        onStartMultiSelect: this._handleStartMultiSelect,
        selectableState: this.selectableState,
        onItemClick: this._handleItemClick,
        mode: p
      });
    }
    if (this.state.showOfflineToastbar === true) {
      h = $e.default.createElement(ke.WAWebOfflineResumeProgressToastbar, null);
    }
    if (h == null && g != null && p === w.default.Chatlist) {
      h = this._isSearching() ? $e.default.createElement(Q.WAWebDesktopUpsellSearchToastbar, null) : $e.default.createElement(K.WAWebDesktopUpsellChatlistToastbar, null);
    }
    const _ = {
      down: this._handleSearchNextControlFocus
    };
    const y = this.state.searching && this.props.labelFilter || this.state.searching && this.ftsMsgs.length ? $e.default.createElement("div", {
      key: "spinner",
      className: T.default.spinner
    }, $e.default.createElement(Ue.Spinner, {
      stroke: 6,
      size: 24
    })) : null;
    const C = (0, P.getTextsizeClassForScale)(this.state.textsize);
    const O = p === w.default.CommandPalette;
    const k = (0, R.classnamesConvertMeToStylexPlease)(T.default.chatListPanel, C, {
      [T.default.commandPaletteContainer]: O,
      [T.default.overflow]: O && f,
      [T.default.noOverflow]: O && !f
    });
    const I = this.ftsMsgs.hasMoreMsgs && m.length || this._showUnread() ? this._handleScroll : undefined;
    let N;
    let x;
    let L;
    let j;
    let B;
    let F = null;
    if (this.state.showMultiSelectBar || this.state.multiSelectEntryPoint === we.MultiSelectEntryPoint.ChatListHeaderDropdown) {
      N = $e.default.createElement(qe.UIE, {
        key: "multiSelectBar",
        displayName: "MultiSelect",
        escapable: true,
        dismissOnWindowResize: true,
        requestDismiss: this._handleCancelLabelSelection
      }, U.Conn.isSMB ? $e.default.createElement(be.default, {
        theme: "chatlist-panel",
        selectedModels: this._multiSelection,
        labelEditEnabled: this.state.multiSelectEntryPoint === we.MultiSelectEntryPoint.Label,
        multiSelectEntryPoint: this.state.multiSelectEntryPoint,
        onCancel: this._handleCancelLabelSelection
      }) : $e.default.createElement(H.default, {
        selectedModels: this._multiSelection,
        onCancel: this._handleCancelLabelSelection
      }));
    } else {
      x = $e.default.createElement(pe.HotKeys, {
        key: "ListSearchHotKey",
        handlers: _,
        onFocus: this.indicateFocus,
        ref: this._setRefInputHotkey,
        className: T.default.panelSearch
      }, $e.default.createElement(A.ListSearch, {
        ref: this.setRefSearch,
        onSearch: this._handleSearch,
        onEnter: this._handleOpenFirst,
        loading: this.state.searching,
        filterSession: this._filterSession,
        listFilterEnabled: p === w.default.Chatlist && !(0, fe.inboxFiltersEnabled)(),
        chatlistFilterEnabled: p === w.default.Chatlist && !(0, fe.inboxFiltersEnabled)(),
        inboxFiltersEnabled: p === w.default.Chatlist && (0, fe.inboxFiltersEnabled)(),
        inboxFilter: this.searchQuery.filter,
        focusOnMount: p === w.default.CommandPalette,
        mode: p,
        placeholder: Je.fbt._("Search or start new chat", null, {
          hk: "1S6b7U"
        })
      }));
      if (p === w.default.Chatlist && (0, fe.inboxFiltersEnabled)()) {
        L = $e.default.createElement(S.ChatListFilters, {
          ref: this._refFilters,
          filter: this.searchQuery.filter.kind,
          filterSession: this._filterSession,
          onFilter: e => {
            this._chatlistFiltersSetTime = e == null ? undefined : Date.now();
            this._handleSearch(this.searchQuery.query, {
              kind: e
            });
          },
          onPrevControl: this._handleFocusSearch,
          onNextControl: this._handleFocusChatList
        });
      }
    }
    if (!this.props.labelFilter) {
      const e = O || E ? null : $e.default.createElement(M.default, null);
      F = $e.default.createElement($e.default.Fragment, null, x, L, e, N, null);
    }
    if (this._showArchivedPanel()) {
      j = $e.default.createElement(v.default, null);
    }
    if (h == null && (this._hasSearchText() || this.searchQuery.hasLabelFilter())) {
      B = $e.default.createElement(de.HistorySyncSearchIncompletePlaceholder, null);
    }
    const G = (e = a == null ? undefined : a.length) !== null && e !== undefined ? e : 0;
    const W = (0, Ce.isPrivacyNarrativeV1Enabled)() && G > 0 ? $e.default.createElement(Ne.E2eMessageChatList, null) : null;
    return $e.default.createElement(_e.MaybeStrictMode, null, $e.default.createElement("div", {
      id: "side",
      className: k,
      ref: this._refContainer
    }, $e.default.createElement(J.ErrorBoundary, {
      name: "app-header"
    }, F), $e.default.createElement(J.ErrorBoundary, {
      name: "chat-list"
    }, $e.default.createElement(ne.default, {
      flatListControllers: [this.flatListController],
      ref: this._setRefPanel,
      className: (0, R.classnamesConvertMeToStylexPlease)(T.default.panelBody, {
        [T.default.commandPalette]: p === w.default.CommandPalette
      }),
      onScroll: I,
      id: "pane-side"
    }, !(0, Ve.topMenuRedesignEnabled)() && j, g, y, p === w.default.Chatlist && ((t = B) !== null && t !== undefined ? t : W))), je.ServerProps.pttOotPlayback && $e.default.createElement(J.ErrorBoundary, {
      name: "out-of-chat-player"
    }, $e.default.createElement(xe.OutOfChatPlayer, null)), $e.default.createElement(J.ErrorBoundary, {
      name: "chat-list-toastbar"
    }, (n = h) !== null && n !== undefined ? n : null)));
  }
}
rt.CONCERNS = {
  settings: ["showArchiveV2"]
};
rt.displayName = "ChatlistPanelImpl";
const ot = (0, Ye.default)((0, He.default)((0, ve.ListenerHOC)((0, We.default)(rt, rt.CONCERNS))));
exports.ChatlistPanel = class extends ot {
  getClientWidth() {
    return this.getComponent().getClientWidth();
  }
  containsDOMNode(e) {
    return this.getComponent().containsDOMNode(e);
  }
};