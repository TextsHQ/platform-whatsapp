var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateContacts = exports.MultiSelectContactList = undefined;
var r = a(require("./937612.js"));
var o = a(require("./774838.js"));
var l = require("../app/177938.js");
var i = require("./657866.js");
var u = require("./811720.js");
var s = a(require("../app/395767.js"));
var c = require("./512938.js");
var d = a(require("../app/335540.js"));
var f = a(require("../app/932325.js"));
var p = a(require("../main-chunk/258146.js"));
var m = require("./608456.js");
var h = a(require("./772549.js"));
var g = require("../app/625786.js");
var E = require("../app/390737.js");
var v = require("../vendor/548360.js");
var _ = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = C(t);
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
var y = a(require("./794305.js"));
function C(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (C = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const b = "SEC_CONTACTS";
const M = "SEC_UNKNOWN_CONTACTS";
const S = "ROW_CONTACTS";
const T = (0, c.FlatListFactory)();
const w = e => {
  let {
    filter: t,
    useAllContacts: n,
    includeLidContacts: a
  } = e;
  const r = n ? l.ContactCollection.toArray() : l.ContactCollection.getFilteredContacts({
    includeLidContacts: a
  });
  if (t) {
    return r.filter(t);
  } else {
    return r;
  }
};
exports.calculateContacts = w;
function A(e) {
  let {
    data: t,
    handleContactClick: n,
    selections: a,
    isSelected: l,
    isDisabled: i,
    customSecondaryText: u,
    active: d,
    allowBlockedContacts: f
  } = e;
  switch (t.type) {
    case b:
      return _.default.createElement(h.default, {
        header: v.fbt._("Contacts", null, {
          hk: "2jWpt9"
        })
      });
    case M:
      return _.default.createElement(h.default, {
        header: (0, s.default)("Not in your contacts")
      });
    case S:
      {
        const {
          data: e,
          isUnknownContact: s
        } = t;
        return _.default.createElement(o.default, {
          key: e.id.toString(),
          model: e,
          selections: a,
          checked: !!l && l(e),
          testid: `multi-select-contact-list-item-${e.id.toString()}`
        }, _.default.createElement(r.default, {
          contact: e,
          disabled: i == null ? undefined : i(e),
          onSelect: () => n(e, s),
          customSecondaryText: u == null ? undefined : u(e.id),
          active: d,
          allowBlockedContacts: f
        }));
      }
    default:
      throw new c.UnknownDataError(t);
  }
}
function P(e, t) {
  const {
    active: n,
    getInitialItems: a,
    selections: r,
    maxContacts: o,
    onSelectionChanged: s,
    maxContactsExceedErrorMsg: c,
    isDisabled: h,
    customSecondaryText: C,
    isSelected: P,
    allowBlockedContacts: O = false,
    filter: k,
    useAllContacts: D = false,
    includeLidContacts: I,
    searchText: R,
    flatListController: N,
    allowUnknownContactSearch: x = false,
    onLoading: L
  } = e;
  const j = (0, _.useRef)(null);
  const B = (0, _.useRef)();
  const F = (0, _.useRef)(new Set());
  const {
    contacts: G,
    selectedUnknownContacts: U
  } = (e => {
    let {
      filter: t,
      useAllContacts: n,
      includeLidContacts: a,
      searchText: r,
      selectedUnknownContacts: o
    } = e;
    const l = w({
      filter: t,
      useAllContacts: n,
      includeLidContacts: a
    });
    if (!r) {
      return {
        contacts: l,
        selectedUnknownContacts: o
      };
    }
    const i = f.default.accentFold(r);
    const u = (0, m.numberSearch)(i);
    const s = e => e.filter(e => e.searchMatch(i, u));
    return {
      contacts: s(l),
      selectedUnknownContacts: s(o)
    };
  })({
    filter: k,
    useAllContacts: D,
    includeLidContacts: I,
    searchText: R,
    selectedUnknownContacts: Array.from(F.current)
  });
  const W = G.length === 0 && U.length === 0 && x;
  const {
    unknownContactInfo: H,
    loading: V,
    error: q,
    onRetry: Y
  } = (0, y.default)({
    phoneNumber: R,
    shouldStartSearch: W,
    onLoading: L
  });
  let z;
  if (H) {
    var K;
    const {
      chat: e,
      wid: t
    } = H;
    z = (K = e == null ? undefined : e.contact) !== null && K !== undefined ? K : l.ContactCollection.gadd(t);
  }
  (0, _.useEffect)(() => {
    if (a) {
      a().forEach(e => r.setVal(e, true));
    }
  }, []);
  const Q = (e, t, a, l) => {
    if (t && typeof o == "number" && r.getSelected().length >= o) {
      E.ToastManager.open(_.default.createElement(g.Toast, {
        msg: c || v.fbt._({
          "*": "You can only send up to {count} contacts",
          _1: "You can only send up to 1 contact"
        }, [v.fbt._plural(o, "count")], {
          hk: "3ntjYN"
        })
      }));
    } else {
      r.setVal(e, t, a);
      n.setVal(e, a);
      if (s) {
        s(e, t);
      }
      if (l) {
        F.current.add(e);
      }
    }
  };
  const X = (e, t) => {
    if (h == null ? undefined : h(e)) {
      return;
    }
    const n = r.isSelected(e);
    Q(e, !n, false, t);
  };
  const Z = () => {
    if (j.current) {
      d.default.focus(j.current);
    }
  };
  const J = () => {
    n.unset();
  };
  const $ = () => {
    const e = w({
      filter: k,
      useAllContacts: D,
      includeLidContacts: I
    });
    if (r.getSelected().length === e.length) {
      r.unsetAll();
    } else {
      e.forEach(e => {
        r.setVal(e, true, false);
      });
    }
  };
  const ee = e => {
    let t;
    let n = false;
    if (G.length) {
      t = G[0];
    } else if (U.length) {
      t = U[0];
      n = true;
    } else if (z) {
      t = z;
      n = true;
    }
    if (t) {
      const a = !r.isSelected(t);
      Q(t, a, e, n);
    }
  };
  const te = () => {
    const e = [];
    if (G.length) {
      e.push({
        itemKey: b,
        type: b
      });
      e.push(...G.map(e => ({
        itemKey: e.id.toString(),
        type: S,
        data: e,
        isUnknownContact: false
      })));
    }
    if (U.length) {
      e.push({
        itemKey: M,
        type: M
      });
      e.push(...U.map(e => ({
        itemKey: e.id.toString(),
        type: S,
        data: e,
        isUnknownContact: true
      })));
    }
    if (H) {
      e.push({
        itemKey: M,
        type: M
      });
      e.push({
        itemKey: z.id.toString(),
        type: S,
        data: z,
        isUnknownContact: true
      });
    }
    return e;
  };
  let ne;
  ne = G.length || U.length || H ? _.default.createElement(T, {
    ref: B,
    flatListController: N,
    direction: "vertical",
    forceConsistentRenderCount: false,
    data: te(),
    renderItem: e => _.default.createElement(A, {
      data: e,
      active: n,
      handleContactClick: X,
      allowBlockedContacts: O,
      customSecondaryText: C,
      isDisabled: h,
      isSelected: P,
      selections: r
    })
  }) : R ? V ? (0, u.SearchingNonContact)() : q ? (0, u.SearchingNonContactError)((0, i.getErrorStr)(q), Y) : _.default.createElement(u.Search, null) : _.default.createElement(u.ListChats, null);
  (0, _.useEffect)(() => {
    n.init((() => {
      const e = G.concat(U);
      if (z) {
        e.push(z);
      }
      return e;
    })());
  }, [R]);
  (0, _.useImperativeHandle)(t, () => ({
    focus: Z,
    clearActive: J,
    selectAll: $,
    toggleFirst: ee
  }));
  return _.default.createElement(p.default, {
    active: e.active,
    onLeave: e.onLeaveList,
    ref: j,
    onIndexChange: e => {
      var t;
      if (!((t = B.current) === null || t === undefined)) {
        t.scrollIntoViewIfNeeded(e);
      }
    }
  }, ne);
}
const O = (0, _.forwardRef)(P);
exports.MultiSelectContactList = O;
O.displayName = "MultiSelectContactList";