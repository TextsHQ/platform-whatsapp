var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../vendor/967154.js"));
var o = require("../app/724976.js");
var l = require("./822652.js");
var i = require("./949359.js");
var u = require("../app/177938.js");
var s = require("../app/660666.js");
var c = require("./811720.js");
var d = a(require("../app/395767.js"));
var f = require("./512938.js");
var p = a(require("../app/932325.js"));
var m = require("./963950.js");
var h = require("./417696.js");
var g = require("./663149.js");
var E = require("./608456.js");
var v = a(require("./772549.js"));
var _ = a(require("../app/237889.js"));
var y = require("../vendor/548360.js");
var C = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = w(t);
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
var b = a(require("./261716.js"));
var M = a(require("../app/969651.js"));
var S = a(require("../app/637660.js"));
var T = require("../app/808446.js");
function w(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (w = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const A = "HEADER";
const P = "ROW";
const O = "BUTTON";
const k = "in-your-contacts-header-key";
const D = (0, l.ContactFactory)();
const I = (0, h.ListModalFactory)();
function R(e) {
  var t;
  let {
    data: n,
    contextMenu: a,
    onContext: l,
    openContextOnClick: i,
    filter: u,
    contextEnabled: c,
    onSelect: d,
    showNotifyName: p,
    elevatedPushNamesEnabled: h,
    listenForAdminChange: E,
    participantCollection: _,
    active: y,
    showStatusRingAroundProfilePhoto: b,
    loadOnlyContactPictures: M = false,
    newsletterRoles: S
  } = e;
  switch (n.type) {
    case A:
      return C.default.createElement(v.default, {
        header: (t = n.header) !== null && t !== undefined ? t : "",
        uppercase: n.itemKey !== k
      });
    case P:
      {
        const e = (0, o.isString)(u(n.contact));
        const t = e ? "group-modal" : null;
        const f = e ? u(n.contact) : null;
        const m = S && (0, s.getIsMe)(n.contact) ? C.default.createElement(g.YouArentVisibleToYourFollowersLabel, null) : f;
        const v = l && a && c ? {
          contextEnabled: () => c(n.contact.id),
          contextMenu: a(n.contact.id),
          onContext: l
        } : {};
        let T = true;
        if (M) {
          T = (0, s.getIsMyContact)(n.contact);
        }
        return C.default.createElement(D, (0, r.default)({
          contact: n.contact,
          active: y,
          theme: t,
          secondary: m,
          newsletterMembershipType: S == null ? undefined : S.get(n.contact.id),
          onClick: i && l ? l : e ? undefined : d ? () => {
            d(n.contact);
          } : () => {},
          waitIdle: true,
          showNotifyName: p,
          elevatedPushNamesEnabled: h,
          listenForAdminChange: E,
          participantCollection: _
        }, v, {
          showStatusRingAroundProfilePhoto: b,
          loadPicture: T
        }));
      }
    case O:
      return C.default.createElement(m.ListButton, {
        active: y,
        id: n.itemKey,
        onClick: n.onClick
      }, n.text);
    default:
      throw new f.UnknownDataError(n);
  }
}
function N(e, t) {
  const {
    title: n,
    onCancel: a,
    onBack: r,
    contacts: o,
    newsletterRoles: l,
    filter: f = e => u.ContactCollection.isFilteredContact(e),
    onSelect: h,
    onContext: v,
    contextEnabled: w,
    contextMenu: D,
    openContextOnClick: N,
    showNotifyName: x,
    elevatedPushNamesEnabled: L,
    participantCollection: j,
    listenForAdminChange: B,
    isNewsletter: F = false,
    button: G,
    isParentGroup: U,
    lastRow: W,
    firstRows: H,
    searchPlaceholder: V,
    showStatusRingAroundProfilePhoto: q,
    spinnerInHeader: Y = false,
    loadOnlyContactPictures: z = false
  } = e;
  const K = (0, S.default)(() => new _.default([], e => String(e.id)));
  const [Q, X] = (0, b.default)();
  const Z = (0, M.default)();
  (0, T.useListener)(u.ContactCollection, ["add", "remove", "change:name"], () => {
    if (!o) {
      Z();
    }
  });
  const J = F && o != null && o.length >= 5001 ? C.default.createElement(g.NewsletterSubListLastRow, {
    text: Q != null && Q !== "" ? (0, i.getFirstFiveThousandChannelFollowersSearchingText)() : (0, i.getFirstFiveThousandChannelFollowersText)(),
    textAlign: "center"
  }) : W;
  const $ = (0, C.useMemo)(() => {
    const e = p.default.accentFold(Q);
    const t = (0, E.numberSearch)(e);
    const n = (o || u.ContactCollection).filter(n => f(n) && (!e || e && n.searchMatch(e, t)));
    const a = n.filter(e => f(e) === true);
    if (G) {
      a.push({
        id: "button"
      });
    }
    K.current.init(a);
    const r = [];
    if (!n.length) {
      return r;
    }
    let i;
    let c;
    const h = n.length > 10 && U !== true && !F;
    for (let e = 0; e < n.length; e++) {
      i = n[e];
      if (h && (0, s.getHeader)(i) !== c) {
        r.push({
          type: A,
          header: (0, s.getHeader)(i),
          itemKey: `${(0, s.getHeader)(i) || ""}_${e}`
        });
      }
      if (e === 1 && F && Q.trim() === "") {
        r.push({
          type: A,
          header: (0, d.default)("In Your Contacts").toString(),
          itemKey: k
        });
      }
      r.push({
        type: P,
        contact: i,
        itemKey: `${i.id.toString()}_${e}`,
        role: l == null ? undefined : l.get(i.id)
      });
      c = (0, s.getHeader)(i);
    }
    if (G) {
      const {
        text: e,
        onClick: t
      } = G;
      r.push({
        type: O,
        text: e,
        onClick: t,
        itemKey: "button",
        height: m.LIST_BUTTON_HEIGHT
      });
    }
    return r;
  }, [G, U, o, f, Q, K, F, l]);
  const ee = y.fbt._("Search contacts", null, {
    hk: "CcHKz"
  });
  return C.default.createElement(I, {
    testid: "contacts-modal",
    ref: t,
    title: n,
    data: $,
    renderItem: e => C.default.createElement(R, {
      data: e,
      contextMenu: D,
      onContext: v,
      openContextOnClick: N,
      filter: f,
      contextEnabled: w,
      onSelect: h,
      showNotifyName: x,
      elevatedPushNamesEnabled: L,
      listenForAdminChange: B,
      participantCollection: j,
      active: K.current,
      showStatusRingAroundProfilePhoto: q,
      loadOnlyContactPictures: z,
      newsletterRoles: l
    }),
    emptyState: C.default.createElement(c.SearchContacts, null),
    selection: K.current,
    onSearch: X,
    searchPlaceholder: V != null ? V : ee,
    onSelect: (e, t) => {
      if (t.type !== P) {
        return;
      }
      const n = t.contact;
      if (f(n) === true) {
        if (!(h == null)) {
          h(n);
        }
      }
    },
    onBack: r,
    onCancel: a,
    firstRows: H,
    isNewsletter: F,
    lastRow: J,
    spinnerInHeader: Y
  });
}
var x = (0, C.forwardRef)(N);
exports.default = x;