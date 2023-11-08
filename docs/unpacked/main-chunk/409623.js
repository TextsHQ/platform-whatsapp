var o = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListSearchType = exports.ListSearch = undefined;
var r = o(require("../app/953268.js"));
var a = o(require("../app/670983.js"));
var l = require("./238608.js");
var i = require("../app/72696.js");
var s = require("./731728.js");
var u = require("./628671.js");
var d = o(require("./638938.js"));
var c = o(require("./151084.js"));
var f = require("../app/2754.js");
var m = require("../app/396574.js");
var p = require("../app/445729.js");
var h = o(require("../app/846870.js"));
var E = require("./341445.js");
var g = require("../app/675085.js");
var C = o(require("../app/395767.js"));
var _ = require("./926644.js");
var T = require("./206563.js");
var S = require("../app/690495.js");
var N = o(require("../app/988410.js"));
var v = require("./154157.js");
var b = require("../app/856311.js");
var y = require("../app/129363.js");
var M = require("./165433.js");
var O = require("../app/61113.js");
var A = require("./731590.js");
var x = require("./150610.js");
var R = require("./447514.js");
var P = require("./556492.js");
var L = require("../app/956113.js");
var w = o(require("../app/397778.js"));
var I = require("../app/220584.js");
var D = require("./931109.js");
var k = require("../app/238669.js");
var j = require("../app/392632.js");
var F = o(require("../app/37875.js"));
var B = require("../app/676345.js");
var H = o(require("./806077.js"));
var Y = o(require("../app/395967.js"));
var $ = o(require("../app/844453.js"));
var U = require("../app/813133.js");
var W = require("../vendor/548360.js");
var z = function (e, t) {
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
  var o = {};
  var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e) {
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var l = r ? Object.getOwnPropertyDescriptor(e, a) : null;
      if (l && (l.get || l.set)) {
        Object.defineProperty(o, a, l);
      } else {
        o[a] = e[a];
      }
    }
  }
  o.default = e;
  if (n) {
    n.set(e, o);
  }
  return o;
}(require("../vendor/667294.js"));
var G = o(require("../app/156720.js"));
var K = require("../app/808446.js");
var q = o(require("../app/558532.js"));
var V = o(require("../app/17533.js"));
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
const Q = {
  icon: {
    width: "i94gqilv",
    fill: "cfhfab5z"
  }
};
const J = require("../vendor/76672.js")({
  CHAT_MSG_SEARCH: "CHAT_MSG_SEARCH",
  NEW_CHAT_CONTACT_SEARCH: "NEW_CHAT_CONTACT_SEARCH",
  FORWARD_MSG_SEARCH: "FORWARD_MSG_SEARCH",
  SELECT_DROPDOWN_SEARCH: "SELECT_DROPDOWN_SEARCH"
});
exports.ListSearchType = J;
const Z = () => {};
function ee(e) {
  let {
    kind: t,
    icon: n,
    label: o,
    onClick: r,
    iconContainerClass: a
  } = e;
  return z.default.createElement(g.DropdownItem, {
    testid: `chat_filter_${t || ""}`,
    action: r
  }, z.default.createElement("div", {
    className: c.default.kind
  }, z.default.createElement("div", {
    className: a
  }, n), z.default.createElement("div", {
    className: c.default.kindName
  }, o)));
}
function te(e) {
  let {
    updateSearchFilter: t
  } = e;
  const n = [];
  n.push(z.default.createElement(ee, {
    key: "unread",
    kind: f.SEARCH_FILTERS.UNREAD,
    icon: z.default.createElement(P.SearchUnreadIcon, {
      iconXstyle: Q.icon
    }),
    label: W.fbt._("Unread chats", null, {
      hk: "4w3TsP"
    }),
    onClick: () => t({
      kind: f.SEARCH_FILTERS.UNREAD
    })
  }));
  if ((0, H.default)("MD_EXTENSION")) {
    n.push(z.default.createElement(ee, {
      key: "assigned-to-you",
      kind: f.SEARCH_FILTERS.ASSIGNED_TO_YOU,
      icon: z.default.createElement(u.ChatAssignmentWithContainerIcon, {
        iconXstyle: Q.icon
      }),
      iconContainerClass: c.default.iconAdjustCenterLeft,
      label: W.fbt._("Assigned to you", null, {
        hk: "3IdGL4"
      }),
      onClick: () => t({
        kind: f.SEARCH_FILTERS.ASSIGNED_TO_YOU
      })
    }));
  }
  if ((0, i.smartFiltersEnabled)()) {
    n.push(z.default.createElement(ee, {
      key: "contact",
      kind: f.SEARCH_FILTERS.CONTACT,
      icon: z.default.createElement(E.ContactsIcon, {
        iconXstyle: Q.icon
      }),
      label: W.fbt._("Contacts", null, {
        hk: "wlOV2"
      }),
      onClick: () => t({
        kind: f.SEARCH_FILTERS.CONTACT
      })
    }), z.default.createElement(ee, {
      key: "non_contact",
      kind: f.SEARCH_FILTERS.NON_CONTACT,
      icon: z.default.createElement(A.NonContactsIcon, {
        iconXstyle: Q.icon
      }),
      label: W.fbt._("Non-contacts", null, {
        hk: "1SVQl1"
      }),
      onClick: () => t({
        kind: f.SEARCH_FILTERS.NON_CONTACT
      })
    }));
  }
  n.push(z.default.createElement(ee, {
    key: "group",
    kind: f.SEARCH_FILTERS.GROUP,
    icon: z.default.createElement(v.GroupIcon, {
      iconXstyle: Q.icon
    }),
    label: W.fbt._("Groups", null, {
      hk: "1PuW3R"
    }),
    onClick: () => t({
      kind: f.SEARCH_FILTERS.GROUP
    })
  }));
  return [z.default.createElement("div", {
    className: c.default.filterTitle,
    key: "chat_filter_kind_header"
  }, W.fbt._("Chats", null, {
    hk: "46DIdr"
  })), ...n];
}
function ne(e) {
  let {
    updateSearchFilter: t
  } = e;
  const n = b.LabelCollection.toArray().reduce((e, n) => n.name && n.count && n.count !== 0 ? [...e, z.default.createElement(g.DropdownItem, {
    testid: `label_item_${n.name}`,
    key: `label_item_${n.id}`,
    action: () => t({
      label: n.id
    })
  }, z.default.createElement("button", {
    className: c.default.labels
  }, z.default.createElement(y.Labels, {
    labels: [n.id],
    showName: true,
    theme: "label-filter"
  })))] : e, []);
  if (n.length > 0) {
    return [z.default.createElement("div", {
      className: c.default.filterTitle,
      key: "chat_filter_label_header"
    }, W.fbt._("Labels", null, {
      hk: "3ONS1h"
    })), ...n];
  }
  return [];
}
const oe = {
  button: {
    marginTop: "tt8xd2xn",
    marginEnd: "bugiwsl0",
    marginBottom: "mpdn4nr2",
    marginStart: "fooq7fky"
  },
  iconWrapper: {
    width: "ekdr8vow",
    height: "dhq51u3o",
    color: "s4k44ver",
    borderTopStartRadius: "g9p5wyxn",
    borderTopEndRadius: "i0tg5vk9",
    borderBottomEndRadius: "aoogvgrq",
    borderBottomStartRadius: "o2zu3hjb"
  },
  iconWrapperActive: {
    color: "p7idzaix",
    backgroundColor: "evq4wxsl"
  }
};
function re(e) {
  const t = p.Conn.isSMB ? W.fbt._("Chat filters menu", null, {
    hk: "40MsRV"
  }) : W.fbt._("Unread chats filter", null, {
    hk: "3E4fOC"
  });
  return z.default.createElement("button", {
    onClick: e.onClick,
    "data-tab": D.TAB_ORDER.CHAT_LIST_FILTER,
    "aria-label": t,
    "aria-pressed": e.active,
    title: t,
    className: (0, G.default)(oe.button)
  }, z.default.createElement(S.FlexRow, {
    justify: "center",
    align: "center",
    className: (0, G.default)(oe.iconWrapper, e.active && oe.iconWrapperActive)
  }, z.default.createElement(_.FilterIcon, {
    width: 20,
    height: 20
  })));
}
function ae(e, t) {
  const {
    loading: n,
    placeholder: o = (0, C.default)("Search..."),
    spellCheck: i,
    listFilterEnabled: u = false,
    onSearch: E,
    type: g,
    showPlaceholderUntilType: S = false,
    filterSession: v,
    chatlistFilterEnabled: y = false,
    mode: A = d.default.Chatlist,
    actionElem: P,
    backIcon: H,
    borderBottom: G = true,
    focusOnMount: X = false,
    inboxFiltersEnabled: Q = false,
    inboxFilter: ee,
    showJumpToDateButton: oe,
    onJumpToDateButtonClicked: ae,
    onBackButton: le,
    onSearchInputFocus: ie
  } = e;
  const se = (0, z.useRef)(null);
  const ue = (0, z.useRef)(null);
  const de = (0, z.useRef)(null);
  const [ce, fe] = (0, z.useState)("");
  const [me, pe] = (0, z.useState)(null);
  const [he, Ee] = (0, z.useState)(null);
  const [ge, Ce] = (0, z.useState)(false);
  const [_e, Te] = (0, z.useState)(null);
  const {
    isKeyboardUser: Se
  } = (0, Y.default)();
  const Ne = Q ? ee == null ? undefined : ee.kind : he;
  const ve = Boolean(Ne || me);
  const be = ge || ce || ve && !y && !Q;
  const ye = () => {
    const e = se.current;
    if (e && !_e) {
      e.reset();
      fe("");
    }
  };
  const Me = (0, V.default)(() => {
    var e;
    ye();
    if (A === d.default.Chatlist) {
      if (!((e = se.current) === null || e === undefined)) {
        e.blur();
      }
      Ce(false);
    }
    if (y || Q) {
      E("", {
        kind: Ne,
        label: me
      });
    } else {
      pe(null);
      Ee(null);
      E("");
    }
  });
  (0, K.useListener)(O.MsgCollection, h.default.NEW_MSG_SENT, () => {
    if (ve) {
      Me();
    }
  });
  (0, z.useEffect)(() => {
    if (!ge || ce || ve) {
      return;
    }
    const e = ue.current;
    if (!(e && e.contains(document.activeElement))) {
      Me();
    }
  }, [ce, ve, ge, Me]);
  (0, q.default)(() => {
    Me();
  });
  let Oe = null;
  const Ae = e => {
    var t;
    if (_e) {
      Te(null);
    }
    pe(e.label);
    Ee((t = e.kind) !== null && t !== undefined ? t : null);
    if (v) {
      (0, T.logSelectFilterEvent)(v.sessionId, e);
    }
    E(ce, e);
  };
  const xe = () => {
    (0, a.default)(se.current, "inputRef.current").focus();
    Ce(true);
  };
  const Re = e => {
    if (v) {
      (0, T.logOpenFilterEvent)(v.newSessionId());
    }
    e.stopPropagation();
    Te({
      menu: z.default.createElement(z.default.Fragment, null, g !== J.CHAT_MSG_SEARCH ? z.default.createElement(te, {
        updateSearchFilter: Ae
      }) : null, z.default.createElement(ne, {
        updateSearchFilter: Ae
      })),
      anchor: e.target
    });
  };
  const Pe = () => {
    Te(null);
  };
  const Le = () => (0, a.default)(se.current, "inputRef.current").isCursorAtEnd();
  const we = () => {
    (0, a.default)(se.current, "inputRef.current").selectAll();
  };
  const Ie = () => {
    Ae({
      kind: null,
      label: null
    });
  };
  const De = () => de;
  (0, z.useImperativeHandle)(t, () => ({
    cursorIsAtEnd: Le,
    select: we,
    focus: xe,
    clearSearch: ye,
    clearFilter: Ie,
    getCalendarElementRef: De
  }));
  if (be) {
    const e = () => {
      Me();
      xe();
    };
    const t = Boolean(ce) || ve && !y && !Q;
    if (n) {
      Oe = z.default.createElement("div", {
        className: c.default.iconSpinner,
        key: "icon-clear-search",
        onClick: e
      }, z.default.createElement(L.Spinner, {
        size: 20,
        stroke: 5,
        color: "highlight"
      }));
    } else if (t) {
      Oe = z.default.createElement("button", {
        "aria-label": W.fbt._("Cancel search", null, {
          hk: "16SlG4"
        }),
        className: c.default.iconCloseSearch,
        key: "icon-clear-search",
        onClick: e
      }, z.default.createElement(U.XAltIcon, null));
    } else if (!(!u || y || Q)) {
      Oe = z.default.createElement("button", {
        className: c.default.iconLabelSelect,
        key: "icon-select-label",
        "aria-label": W.fbt._("Filters menu", null, {
          hk: "LNvK6"
        }),
        onClick: Re
      }, z.default.createElement(_.FilterIcon, null));
    }
  }
  let ke;
  if (ge) {
    ke = z.default.createElement(j.UIE, {
      displayName: "ListSearch",
      escapable: true,
      requestDismiss: Me,
      requestFocus: xe,
      requestRecentFocusOnUnmount: false,
      uimState: k.UIMState.PASSIVE
    });
  }
  const je = (0, m.classnamesConvertMeToStylexPlease)({
    [c.default.active]: be && g !== J.SELECT_DROPDOWN_SEARCH,
    [c.default.chatlistFilterEnabled]: y,
    [c.default.inboxFiltersEnabled]: Q,
    [c.default.listSearch]: true,
    [c.default.borderBottom]: G && !Q,
    [c.default.selectDropdownType]: g === J.SELECT_DROPDOWN_SEARCH
  });
  let Fe;
  if (_e) {
    Fe = z.default.createElement(j.UIE, {
      displayName: "ChatContextMenu",
      escapable: true,
      popable: true,
      dismissOnWindowResize: true,
      requestDismiss: Pe,
      requestRecentFocusOnUnmount: false
    }, z.default.createElement(F.default, {
      contextMenu: _e
    }));
  }
  const Be = !ce && (S || !ge || ve || A === d.default.CommandPalette);
  let He = null;
  if (Be) {
    He = o;
    if (A === d.default.CommandPalette) {
      He = W.fbt._("Search chats, contacts and settings", null, {
        hk: "2A6gx7"
      });
    } else if (me) {
      He = W.fbt._("Search in {labelName}...", [W.fbt._param("labelName", b.LabelCollection.assertGet(me).name)], {
        hk: "JMLBG"
      });
    } else if (Ne === f.SEARCH_FILTERS.GROUP) {
      He = Q ? W.fbt._("Search group chats", null, {
        hk: "20387e"
      }) : W.fbt._("Search in groups", null, {
        hk: "2sVbeS"
      });
    } else if (Ne === f.SEARCH_FILTERS.UNREAD) {
      He = W.fbt._("Search unread chats", null, {
        hk: "2lClKl"
      });
    } else if (Ne === f.SEARCH_FILTERS.BROADCAST) {
      He = W.fbt._("Search in Broadcast lists", null, {
        hk: "4EwaXm"
      });
    } else if (Ne === f.SEARCH_FILTERS.CONTACT) {
      He = Q ? W.fbt._("Search chats with contacts", null, {
        hk: "16A6YD"
      }) : W.fbt._("Search in chats with contacts", null, {
        hk: "1DAA9Y"
      });
    } else if (Ne === f.SEARCH_FILTERS.NON_CONTACT) {
      He = W.fbt._("Search in chats with non contacts", null, {
        hk: "1eIAdx"
      });
    } else if (Ne === f.SEARCH_FILTERS.ASSIGNED_TO_YOU) {
      He = W.fbt._("Search chats assigned to you", null, {
        hk: "4En5KS"
      });
    }
  }
  const Ye = ge ? W.fbt._("Chat list", null, {
    hk: "iikD9"
  }) : W.fbt._("Search or start new chat", null, {
    hk: "TdYzC"
  });
  const $e = W.fbt._("Search input textbox", null, {
    hk: "56hij"
  });
  const Ue = z.default.createElement("div", {
    className: (0, m.classnamesConvertMeToStylexPlease)(c.default.iconMorph, c.default.iconMorphSearch)
  }, z.default.createElement(R.SearchIcon, null));
  const We = H != null ? H : A === d.default.Chatlist;
  return z.default.createElement("div", {
    ref: ue,
    className: je
  }, z.default.createElement("div", {
    ref: de
  }, oe === true && z.default.createElement(w.default, {
    Icon: s.CalendarEmptyIcon,
    xstyle: B.uiMargin.end10,
    onClick: ae != null ? ae : Z,
    color: I.SvgColorProp.SECONDARY,
    height: 20,
    "aria-label": W.fbt._("Jump to date", null, {
      hk: "37gYRE"
    })
  })), z.default.createElement("div", {
    className: c.default.inputContainer
  }, We ? z.default.createElement("button", {
    className: (0, m.classnamesConvertMeToStylexPlease)(c.default.iconSearchMorph, c.default.iconSearch),
    onMouseDown: e => {
      if (ce || ge) {
        Me();
        if (!(le == null)) {
          le();
        }
      } else {
        e.preventDefault();
        e.stopPropagation();
        xe();
      }
    },
    "aria-label": Ye,
    tabIndex: "-1"
  }, z.default.createElement("div", {
    className: (0, m.classnamesConvertMeToStylexPlease)(c.default.iconMorph, c.default.iconMorphBack)
  }, z.default.createElement(l.BackIcon, null)), Ue) : z.default.createElement("div", {
    className: c.default.iconSearch
  }, Ue), z.default.createElement($.default, {
    transitionName: "pop"
  }, Oe, Fe), z.default.createElement("div", {
    className: (0, m.classnamesConvertMeToStylexPlease)({
      [c.default.inputPlaceholderHidden]: !Be,
      [c.default.inputPlaceholder]: true
    })
  }, He), z.default.createElement("div", {
    className: (0, m.classnamesConvertMeToStylexPlease)({
      [c.default.commandPalette]: A === d.default.CommandPalette,
      [c.default.inputWrapper]: true
    })
  }, z.default.createElement(x.RichTextInput, {
    testid: "chat-list-search",
    lineWrap: false,
    title: $e,
    ref: e => {
      var t;
      se.current = e;
      const n = (t = e == null ? undefined : e.isFocused()) !== null && t !== undefined && t;
      if (n && !ge) {
        Ce(true);
      } else if (!n && ge) {
        Ce(false);
      }
    },
    tabOrder: D.TAB_ORDER.CHAT_LIST_SEARCH,
    spellCheck: i,
    focusOnMount: X,
    onBlur: () => {
      Ce(false);
    },
    onFocus: ge ? Z : () => {
      if (A === d.default.Chatlist || g === J.FORWARD_MSG_SEARCH) {
        M.UiMessageYourselfSearchAction.startSession();
        M.UiMessageYourselfSearchAction.searchBarPressed();
      } else if (g === J.NEW_CHAT_CONTACT_SEARCH) {
        M.UiMessageYourselfNewChatAction.searchBarPressed();
      }
      xe();
      if (!(ie == null)) {
        ie();
      }
      if (Se) {
        self.setTimeout(() => N.default.indicateFocus(ue.current), 0);
      }
    },
    onChange: ge ? e => {
      let {
        text: t
      } = e;
      fe(t);
      E(t, {
        label: me,
        kind: Ne
      });
    } : Z,
    onKeyDown: e => e.keyCode === r.default.ESC && (Me(), true),
    onEnter: e.onEnter
  }))), y && z.default.createElement(re, {
    active: ve,
    onClick: e => {
      if (ve) {
        Ae({
          kind: null,
          label: null
        });
      } else if (p.Conn.isSMB) {
        Re(e);
      } else {
        Ae({
          kind: f.SEARCH_FILTERS.UNREAD
        });
      }
    }
  }), P, ke);
}
const le = (0, z.forwardRef)(ae);
exports.ListSearch = le;
le.displayName = "ListSearch";