var a = require("../app/530066.js").default;
var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var o = r(require("../vendor/348926.js"));
var l = require("../app/898817.js");
var i = r(require("./909097.js"));
var u = r(require("../app/229922.js"));
var s = require("../app/685639.js");
var c = require("../app/984330.js");
var d = require("../main-chunk/409623.js");
var f = require("../app/713105.js");
var p = r(require("./582642.js"));
var m = require("../app/780549.js");
var h = require("../app/877171.js");
var g = require("../app/660666.js");
var E = require("./990869.js");
var v = require("../app/792522.js");
var _ = r(require("./908081.js"));
var y = r(require("./324093.js"));
var C = require("./626194.js");
var b = require("../app/664149.js");
var M = require("./811720.js");
var S = require("./512938.js");
var T = r(require("./570834.js"));
var w = require("../app/690495.js");
var A = r(require("../app/988410.js"));
var P = r(require("../app/335540.js"));
var O = require("../app/914368.js");
var k = require("../app/163755.js");
var D = require("../app/969104.js");
var I = r(require("./720107.js"));
var R = require("./217714.js");
var N = require("../app/81644.js");
var x = require("../app/61113.js");
var L = require("./214134.js");
var j = require("./889309.js");
var B = r(require("../app/237889.js"));
var F = require("../app/956113.js");
var G = require("../app/392632.js");
var U = r(require("../app/37875.js"));
var W = require("../app/676345.js");
var H = require("../vendor/548360.js");
var V = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = J(t);
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
var q = r(require("../app/156720.js"));
var Y = r(require("../app/710629.js"));
var z = r(require("../app/969651.js"));
var K = r(require("../app/637660.js"));
var Q = require("../app/808446.js");
var X = r(require("../app/321201.js"));
var Z = r(require("../app/895851.js"));
function J(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (J = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const $ = {
  flexNone: {
    flexGrow: "tvf2evcx",
    flexShrink: "oq44ahr5",
    flexBasis: "lb5m6g5c"
  },
  panelSearch: {
    backgroundColor: "ronsgs3n"
  },
  panelBody: {
    zIndex: "jnl3jror",
    display: "p357zi0d",
    flexDirection: "f8m0rgwh",
    flexGrow: "ggj6brxn",
    overflowY: "ag5g9lrv",
    backgroundColor: "ihvf49ua"
  }
};
function ee(e) {
  let {
    chat: t,
    searchText: n,
    searching: a,
    resultsUnavailable: r
  } = e;
  const o = (n || "").trim();
  if ((0, i.default)(o)) {
    if (a) {
      return V.default.createElement(M.SearchingMessages, null);
    } else if (r) {
      return V.default.createElement(M.SearchMessagesUnavailable, null);
    } else {
      return V.default.createElement(M.SearchMessages, null);
    }
  } else {
    return (0, M.BeforeSearchMessages)(t.title(), t.isGroup, (0, g.getIsMe)(t.contact));
  }
}
function te(e, t) {
  const {
    chat: n
  } = e;
  const r = (0, z.default)();
  const g = (0, X.default)();
  const M = (0, Z.default)();
  const [J, te] = (0, V.useState)("");
  const [ne, ae] = (0, V.useState)(false);
  const [re, oe] = (0, V.useState)(false);
  const [le, ie] = (0, V.useState)(null);
  const ue = (0, K.default)(() => new T.default());
  const se = (0, K.default)(() => new I.default(n));
  const ce = (0, V.useRef)(null);
  const de = (0, K.default)(() => new B.default([], e => e.id.toString()));
  const fe = (0, V.useRef)(false);
  const pe = (0, V.useRef)({});
  const me = (0, V.useRef)(null);
  const he = (0, V.useRef)(null);
  const ge = (0, V.useRef)(null);
  const Ee = (0, V.useRef)(null);
  const ve = (0, K.default)(() => new s.ShiftTimer(() => {
    const e = pe.current;
    if (e.searchText !== undefined) {
      te(e.searchText);
    }
    if (e.searching !== undefined) {
      ae(e.searching);
    }
    if (e.resultsUnavailable !== undefined) {
      oe(e.resultsUnavailable);
    }
    pe.current = {};
  }));
  const _e = function (e) {
    let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 75;
    Object.assign(pe.current, e);
    if (e.searching === true) {
      ve.current.debounce(0);
    } else {
      ve.current.debounce(t);
    }
  };
  const ye = () => {
    A.default.shouldIndicateFocus();
    P.default.focus(ce.current);
  };
  const Ce = (0, Y.default)(() => {
    var e;
    fe.current = false;
    const t = (J || "").trim();
    if (!(0, i.default)(t)) {
      return;
    }
    if (!((e = Ee.current) === null || e === undefined)) {
      e.abort();
    }
    Ee.current = new a();
    const {
      signal: r
    } = Ee.current;
    const o = Promise.resolve().then(() => {
      if (!(() => {
        const e = pe.current;
        var t;
        if ("searching" in e) {
          return (t = e.searching) !== null && t !== undefined && t;
        } else {
          return ne;
        }
      })()) {
        _e({
          searching: true
        });
      }
    }).then(() => se.current.search({
      chat: n,
      count: Math.round(window.innerHeight / S.DEFAULT_ITEM_HEIGHT) + 1,
      searchTerm: t
    }));
    ge.current = (0, u.default)(o, r).then(e => {
      if (M.aborted) {
        throw new l.AbortError();
      }
      if (e && !e.canceled && t === J.trim()) {
        _e({
          searching: false,
          resultsUnavailable: false
        });
      }
    }).catch((0, l.catchAbort)(() => {})).finally(() => {
      ge.current = undefined;
      Ee.current = undefined;
    }).catch(e => {
      if (!fe.current) {
        _e({
          searching: false,
          resultsUnavailable: e instanceof c.E404
        });
      }
    });
  }, D.FTS_TYPING_DELAY);
  (0, V.useEffect)(() => () => {
    var e;
    Ce.cancel();
    se.current.delete(true);
    if (!((e = Ee.current) === null || e === undefined)) {
      e.abort();
    }
    ve.current.cancel();
  }, []);
  (0, Q.useListener)(se.current, ["bulk_remove"], r);
  const be = (0, v.useWAWebDesktopUpsellAbPropCheck)("search_results");
  const Me = (0, v.useWAWebDesktopUpsellPlatformCheck)();
  const Se = se.current.toArray();
  let Te = Se.length ? null : V.default.createElement(ee, {
    chat: n,
    searchText: J,
    searching: ne,
    resultsUnavailable: re
  });
  if (Te == null) {
    const e = J ? J.trim() : null;
    Te = V.default.createElement(p.default, {
      ref: me,
      flatListController: ue.current,
      isSearching: !!e,
      searchText: e,
      ftsResult: Se,
      selection: de.current,
      onFocusSearch: ye
    });
  }
  const we = ne && Se.length ? V.default.createElement(w.FlexRow, {
    justify: "center",
    xstyle: [$.flexNone, W.uiPadding.vert24]
  }, V.default.createElement(F.Spinner, {
    stroke: 6,
    size: 24
  })) : null;
  let Ae;
  const Pe = (J || "").trim();
  if ((be && Me) !== true && (0, i.default)(Pe)) {
    Ae = V.default.createElement(R.HistorySyncChatSearchIncompletePlaceholder, null);
  }
  const Oe = (0, j.searchByDateEnabled)();
  const ke = () => {
    ie(null);
  };
  const De = function () {
    var e = (0, o.default)(function* (e) {
      const t = yield (0, L.getClosestMessageFromDate)(n.id.toString(), e);
      ke();
      if (t) {
        const e = x.MsgCollection.get(t.toString());
        const a = (0, f.getSearchContext)(n, e || t);
        a.highlightMentionMsg = true;
        a.enableAnimation = false;
        if (a) {
          m.Cmd.openChatAt(n, a);
        }
      } else {
        m.Cmd.openChatBottom(n);
      }
    });
    return function () {
      return e.apply(this, arguments);
    };
  }();
  const Ie = le ? V.default.createElement(G.UIE, {
    displayName: "DatePicker",
    escapable: true,
    popable: true,
    dismissOnWindowResize: true,
    requestDismiss: ke
  }, V.default.createElement(U.default, {
    contextMenu: le
  })) : null;
  return V.default.createElement(_.default, {
    key: "search-modal",
    ref: t
  }, V.default.createElement(C.DrawerHeader, {
    title: H.fbt._("Search Messages", null, {
      hk: "1sG2n5"
    }),
    type: C.DRAWER_HEADER_TYPE.SMALL,
    rtlFixIfOnDarwin: true,
    onCancel: () => {
      if (!(g == null)) {
        g.requestDismiss();
      }
    }
  }), V.default.createElement(N.HotKeys, {
    handlers: {
      down: e => {
        var t;
        if (!e.repeat) {
          if (me.current) {
            if (!(ce.current && !ce.current.cursorIsAtEnd())) {
              e.preventDefault();
              e.stopPropagation();
              A.default.shouldIndicateFocus();
              if (!((t = me.current) === null || t === undefined)) {
                t.focusFirst();
              }
            }
          }
        }
      }
    },
    onFocus: () => {
      A.default.maybeIndicateFocus(he.current);
    },
    ref: he,
    className: (0, q.default)($.panelSearch, $.flexNone)
  }, V.default.createElement(d.ListSearch, {
    ref: ce,
    type: d.ListSearchType.CHAT_MSG_SEARCH,
    onSearch: e => {
      if (!e) {
        Ce.cancel();
        se.current.resetSearch();
        se.current.delete();
        if (!((t = Ee.current) === null || t === undefined)) {
          t.abort();
        }
        fe.current = false;
        te("");
        return void ae(false);
      }
      var t;
      if (e !== J) {
        (e => {
          const t = e.trim();
          var n;
          if ((0, i.default)(t)) {
            Ce();
            fe.current = true;
            if (!ne) {
              _e({
                searching: true
              });
            }
          } else {
            Ce.cancel();
            se.current.resetSearch();
            se.current.delete();
            if (!((n = Ee.current) === null || n === undefined)) {
              n.abort();
            }
            fe.current = false;
            if (ne) {
              _e({
                searching: false,
                resultsUnavailable: false
              });
            }
          }
        })(e);
        te(e);
        _e({
          searchText: e,
          resultsUnavailable: false
        });
      }
    },
    onEnter: e => {
      e.preventDefault();
      const t = se.current.head();
      if (!t) {
        return;
      }
      const n = (0, k.getChat)(t);
      const a = (0, f.getSearchContext)(n, t);
      h.ComposeBoxActions.focus(n);
      m.Cmd.openChatAt(n, a);
    },
    loading: ne,
    focusOnMount: true,
    showJumpToDateButton: Oe,
    onJumpToDateButtonClicked: () => {
      var e;
      const t = (e = ce.current) === null || e === undefined ? undefined : e.getCalendarElementRef();
      ie({
        dirY: b.DirY.TOP,
        dirX: b.DirX.CENTER,
        type: b.MenuType.DatePicker,
        menu: V.default.createElement(E.DatePickerContainer, {
          onDateSelected: e => {
            De(e);
          }
        }),
        flipOnRTL: true,
        anchor: t == null ? undefined : t.current
      });
    }
  })), Ie, V.default.createElement(y.default, {
    flatListControllers: [ue.current],
    className: (0, q.default)($.panelBody),
    onScroll: e => {
      var t;
      if ((t = e.currentTarget) != null && t.scrollTop + O.SCROLL_FUDGE > t.scrollHeight - t.clientHeight && se.current.hasMoreMsgs && !fe.current && !ne && !se.current.searchPromise && (0, i.default)((J || "").trim())) {
        Ce();
        fe.current = true;
      }
    },
    id: "pane-side"
  }, Te, we, Ae));
}
var ne = (0, V.forwardRef)(te);
exports.default = ne;