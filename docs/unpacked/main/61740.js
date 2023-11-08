var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectModal = exports.ListType = undefined;
var r = a(require("../vendor/967154.js"));
var o = a(require("./94917.js"));
var l = a(require("./974317.js"));
var i = require("../main-chunk/409623.js");
var u = a(require("../app/102130.js"));
var s = a(require("./908081.js"));
var c = a(require("./324093.js"));
var d = require("./626194.js");
var f = a(require("../app/395767.js"));
var p = require("../app/581354.js");
var m = a(require("./570834.js"));
var h = a(require("../app/988410.js"));
var g = a(require("../app/335540.js"));
var E = require("../app/118612.js");
var v = require("../app/114850.js");
var _ = a(require("./803203.js"));
var y = require("./42061.js");
var C = a(require("./930440.js"));
var b = a(require("./616643.js"));
var M = require("./792882.js");
var S = a(require("../main-chunk/604469.js"));
var T = a(require("../app/237889.js"));
var w = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = P(t);
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
a(require("../app/156720.js"));
var A = a(require("../app/637660.js"));
function P(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (P = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const O = require("../vendor/76672.js").Mirrored(["ChatSelectModal", "ContactSelectModal", "ParticipantManageModal", "ProductSelectModal"]);
exports.ListType = O;
const k = {
  footer: {
    boxShadow: "st4e8vvm"
  }
};
function D(e) {
  let {
    props: t,
    selectionsRef: n,
    activeRef: a,
    listRef: r,
    flatListControllerRef: l,
    searchText: i,
    handleLeaveList: u,
    handleSelectionChanged: s,
    onLoading: c
  } = e;
  switch (t.listType) {
    case O.ChatSelectModal:
      {
        const e = t.getInitialItems;
        return w.default.createElement(_.default, {
          ref: r,
          msgType: t.msgType,
          excludeChat: t.excludeChat,
          excludeBroadcast: t.excludeBroadcast,
          getInitialItems: e,
          searchText: i,
          active: a,
          selections: n,
          maxChats: t.maxItems,
          onLeaveList: u,
          onSelectionChanged: s,
          hasFrequentlyForwarded: t.hasFrequentlyForwarded,
          hasForwarded: t.hasForwarded,
          flatListController: l,
          isDisabled: t.isDisabled,
          ephemeralIcon: t.ephemeralIcon,
          customItemSecondaryText: t.customItemSecondaryText,
          onChatsLoaded: t.onDataLoaded,
          excludeContacts: t.excludeContacts
        });
      }
    case O.ParticipantManageModal:
    case O.ContactSelectModal:
      {
        const e = t.getInitialItems;
        return w.default.createElement(y.MultiSelectContactList, {
          ref: r,
          useAllContacts: t.useAllContacts,
          includeLidContacts: t.includeLidContacts,
          getInitialItems: e,
          searchText: i,
          active: a,
          selections: n,
          maxContacts: t.maxItems,
          maxContactsExceedErrorMsg: t.maxItemsExceedErrorMsg,
          onLeaveList: u,
          onSelectionChanged: s,
          isDisabled: t.isDisabled,
          isSelected: t.isSelected,
          customSecondaryText: t.customSecondaryText,
          filter: t.filter,
          allowBlockedContacts: t.allowBlockedContacts,
          flatListController: l,
          allowUnknownContactSearch: t.allowUnknownContactSearch,
          onLoading: c
        });
      }
    case O.ProductSelectModal:
      return w.default.createElement(o.default, {
        ref: r,
        flatListController: l,
        active: a,
        selections: n,
        onSelectionChanged: s,
        onProductsLoaded: t.onDataLoaded
      });
  }
}
const I = (0, w.forwardRef)((e, t) => {
  const {
    listType: n,
    useShortName: a,
    singleSelectionFooterType: o,
    multipleSelectionFooterType: _,
    onConfirm: P,
    onSelectionChanged: I,
    maxItems: R,
    hasForwarded: N,
    useAllContacts: x = false,
    includeLidContacts: L,
    filter: j,
    getSelectionSummary: B,
    shouldShowSelectionSummary: F,
    activeWithoutSelection: G,
    enableSelectAll: U,
    onCancel: W,
    disclaimer: H,
    testid: V,
    previewComponent: q,
    tsNavigationData: Y,
    hasDirtyAppendMsgComposeBox: z = false,
    allowUnknownContactSearch: K = false
  } = e;
  const Q = (0, w.useRef)(null);
  const X = (0, w.useRef)(null);
  const Z = (0, w.useRef)(null);
  const J = (0, A.default)(() => new T.default([], e => e.id.toString()));
  const $ = (0, A.default)(() => new C.default([], e => e.id.toString()));
  const ee = (0, A.default)(() => new m.default());
  const [te, ne] = (0, w.useState)("");
  const [ae, re] = (0, w.useState)(false);
  const oe = !!e.getInitialItems && e.getInitialItems().length !== 0;
  const le = e => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
  };
  (0, w.useImperativeHandle)(t, () => ({
    handleFocusList: le,
    getElement: () => Q.current
  }));
  const ie = n === O.ParticipantManageModal ? w.default.createElement(l.default, {
    selections: $.current,
    useShortName: a,
    onDelete: (e, t) => {
      $.current.setVal(t, false);
    },
    isDisabled: e.isDisabled
  }) : null;
  return w.default.createElement(E.Modal, {
    tsNavigationData: Y != null ? Y : undefined,
    ref: Q,
    type: E.ModalTheme.Tower,
    onOverlayClick: () => {
      if (!z) {
        v.ModalManager.close();
      }
    }
  }, w.default.createElement(s.default, {
    testid: V != null ? V : "chat-modal",
    key: "chat-modal"
  }, w.default.createElement(d.DrawerHeader, {
    menu: (() => {
      if (U !== true || n !== O.ContactSelectModal) {
        return false;
      }
      const {
        length: e
      } = (0, y.calculateContacts)({
        filter: j,
        useAllContacts: x,
        includeLidContacts: L
      });
      return R == null || e <= R;
    })() ? w.default.createElement(b.default, {
      onClick: () => {
        var e;
        if ((e = Z.current) === null || e === undefined ? undefined : e.selectAll) {
          Z.current.selectAll();
        }
      }
    }) : null,
    title: e.title,
    type: d.DRAWER_HEADER_TYPE.POPUP,
    onCancel: () => {
      if (W != null) {
        const e = $.current.getSelected();
        W(e);
      } else {
        v.ModalManager.close();
      }
    }
  }), w.default.createElement(S.default, (0, r.default)({
    ref: X,
    setSearchText: ne,
    onDown: () => {
      J.current.setFirst(true);
    },
    onEnter: () => {
      var e;
      if (!((e = Z.current) === null || e === undefined)) {
        e.toggleFirst(false);
      }
    },
    onFocus: () => {
      J.current.unset();
    },
    enabled: e.enableSearchBox,
    placeholder: K ? (0, f.default)("Search name or number") : (0, f.default)("Search..."),
    showPlaceholderUntilType: K,
    loading: ae
  }, N != null && {
    searchType: i.ListSearchType.FORWARD_MSG_SEARCH
  }, {
    focusOnMount: true
  })), e.customHeader, ie, w.default.createElement(c.default, {
    flatListControllers: [ee.current],
    onScroll: e => {
      var t;
      if ((t = Z.current) === null || t === undefined ? undefined : t.updateForScrollEvent) {
        Z.current.updateForScrollEvent(e);
      }
    }
  }, w.default.createElement(D, {
    props: e,
    selectionsRef: $.current,
    activeRef: J.current,
    listRef: Z,
    flatListControllerRef: ee.current,
    searchText: te,
    handleLeaveList: () => {
      h.default.shouldIndicateFocus();
      g.default.focus(X.current);
    },
    handleSelectionChanged: (e, t) => {
      var n;
      if (!((n = X.current) === null || n === undefined)) {
        n.select();
      }
      if (I != null) {
        const n = $.current.getSelected();
        I(e, t, n);
      }
    },
    onLoading: re
  })), q, w.default.createElement(M.SelectModalFooter, {
    singleSelectionType: o,
    multipleSelectionType: _,
    selections: $.current,
    onForward: () => {
      const e = $.current.getSelected();
      if (n === O.ContactSelectModal || n === O.ParticipantManageModal || n === O.ProductSelectModal) {
        P(e);
      } else {
        Promise.all(e.map(e => e instanceof u.default ? (0, p.findChat)(e.id, "forwardSelectedModals") : e)).then(e => {
          P(e, !!te);
        });
      }
    },
    startActive: oe,
    getSelectionSummary: B,
    shouldShowSelectionSummary: F,
    activeWithoutSelection: G,
    disclaimer: H,
    xstyle: q == null && k.footer
  })));
});
exports.SelectModal = I;
I.displayName = "SelectModal";