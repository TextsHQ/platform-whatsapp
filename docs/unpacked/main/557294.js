var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("../app/354458.js");
var o = require("../app/169437.js");
var l = a(require("./579484.js"));
var i = require("./700071.js");
var u = require("../app/351053.js");
var s = require("./822652.js");
var c = require("../app/177938.js");
var d = require("../app/660666.js");
var f = a(require("../app/395767.js"));
var p = require("./512938.js");
var m = require("../app/81644.js");
var h = a(require("./772549.js"));
var g = a(require("../app/237889.js"));
var E = require("../main-chunk/931109.js");
var v = require("../app/129417.js");
var _ = require("../app/459857.js");
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
  var n = T(t);
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
var b = a(require("../app/156720.js"));
var M = a(require("../app/637660.js"));
var S = a(require("../app/17533.js"));
function T(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (T = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const w = {
  height: "ttegvvei",
  overflowX: "gfz4du6o",
  overflowY: "r7fjleex",
  backgroundColor: "ihvf49ua"
};
const A = (0, i.ChatFactory)();
const P = (0, s.ContactFactory)();
const O = (0, p.FlatListFactory)();
function k(e, t) {
  var n;
  const {
    contacts: a,
    frequentContacts: l,
    onFocusSearch: i,
    onClick: p,
    showPersonGroupDivisionHeader: h,
    separateContacts: b,
    usernameContacts: T,
    showMe: w = false,
    showBot: A = false,
    disabled: P
  } = e;
  const k = (0, C.useRef)(null);
  const D = (0, M.default)(() => new g.default([], e => e.id.toString()));
  const R = (0, _.getMeUser)();
  const N = c.ContactCollection.assertGet(R);
  const x = A && (0, r.isBotEnabled)() ? (n = o.BotProfileCollection.getDefaultBot()) === null || n === undefined ? undefined : n.contact : null;
  const L = () => {
    D.current.setFirst(true);
  };
  (0, C.useImperativeHandle)(t, () => ({
    focusFirst: L
  }));
  const j = (e, t) => {
    const {
      isFrequentContact: n,
      isUsernameContact: a
    } = t != null ? t : {};
    const r = (n === true ? s.FREQUENT_PREFIX : "") + e.id.toString();
    if ((0, d.getIsGroup)(e)) {
      const t = u.ChatCollection.get(e.id);
      if (t) {
        return {
          itemKey: r,
          data: t,
          type: 4,
          frequent: n
        };
      } else {
        return null;
      }
    }
    if (a === true) {
      return {
        itemKey: r,
        data: e,
        type: 6
      };
    } else {
      return {
        itemKey: r,
        data: e,
        type: 3,
        frequent: n
      };
    }
  };
  const B = (0, C.useMemo)(() => {
    const e = [];
    if (!(T == null)) {
      T.forEach(t => {
        const n = j(t, {
          isUsernameContact: true
        });
        if (n) {
          e.push(n);
        }
      });
    }
    return e;
  }, [T]);
  const F = (0, C.useMemo)(() => {
    const e = [];
    if (!(l == null)) {
      l.forEach(t => {
        const n = j(t, {
          isFrequentContact: true
        });
        if (n) {
          e.push(n);
        }
      });
    }
    return e;
  }, [l]);
  const G = (0, S.default)(e => {
    if (e.length === 0) {
      return [];
    }
    const t = (0, d.getIsGroup)(e[0]) ? "group" : "contact";
    const n = [];
    const a = e.length > 10;
    let r = "XXX";
    for (let o = 0; o < e.length; o++) {
      const l = e[o];
      const i = (0, d.getHeader)(l);
      if (a && i && i !== r) {
        const a = o < e.length - 1 && i !== (0, d.getHeader)(e[o + 1]);
        n.push({
          itemKey: `header-${t}-${i}`,
          data: i,
          separator: a,
          type: 1
        });
        r = i;
      }
      const u = j(l);
      if (u) {
        n.push(u);
      }
    }
    return n;
  });
  const U = (0, C.useMemo)(() => {
    const t = [];
    const n = (b == null ? undefined : b.contacts) || [];
    const r = [];
    const o = [];
    if (F.length) {
      t.push({
        itemKey: "frequent-contacts-header",
        type: 0
      });
      t.push(...F);
    }
    a.forEach(e => {
      if ((0, d.getIsGroup)(e)) {
        o.push(e);
      } else {
        r.push(e);
      }
    });
    const l = G(n);
    const i = G(r);
    const u = G(o);
    let s;
    if ((0, v.usernameContactlessChatEnabled)() && B.length > 0) {
      const e = (0, f.default)("Not in your contacts").toString();
      t.push({
        itemKey: `header-${e}`,
        data: e,
        separator: true,
        type: 1
      });
      t.push(...B);
    }
    if (b != null && l.length > 0) {
      t.push({
        itemKey: `header-${b.header.toString()}`,
        data: b.header.toString(),
        separator: true,
        type: 1
      });
      t.push(...l);
    }
    if (h && i.length > 0) {
      s = y.fbt._("Contacts on WhatsApp", null, {
        hk: "3YbGYw"
      });
      t.push({
        itemKey: `header-${s.toString()}`,
        data: s.toString(),
        separator: true,
        type: 1
      });
    }
    if (w || x != null) {
      if (w) {
        t.push({
          itemKey: N.id.toString(),
          data: N,
          type: 2
        });
      }
      if (x != null) {
        t.push({
          itemKey: x.id.toString(),
          data: x,
          type: 5
        });
      }
    }
    t.push(...i);
    if (h && u.length > 0) {
      let n;
      n = e.isCommunityCreation === true ? y.fbt._("Groups you're an admin of", null, {
        hk: "YrVyI"
      }).toString() : y.fbt._("Groups", null, {
        hk: "4bUoVs"
      }).toString();
      t.push({
        itemKey: `header-${n}`,
        data: n,
        separator: true,
        type: 1
      });
    }
    t.push(...u);
    return t;
  }, [b, F, B, a, G, h, w, x, N, e.isCommunityCreation]);
  D.current.init((() => {
    const e = (b == null ? undefined : b.contacts) || [];
    const t = [];
    const n = [];
    const r = [...(l || [])];
    a.forEach(e => {
      if ((0, d.getIsGroup)(e)) {
        const t = u.ChatCollection.get(e.id);
        if (t) {
          n.push(t);
        }
      } else {
        t.push(e);
      }
    });
    if (w) {
      r.push(N);
    }
    if (x != null) {
      r.push(x);
    }
    return r.concat(e, t, n);
  })());
  return C.default.createElement(m.HotKeys, {
    ref: k,
    handlers: {
      down: e => {
        e.preventDefault();
        e.stopPropagation();
        D.current.setNext(true);
      },
      up: e => {
        e.preventDefault();
        e.stopPropagation();
        const t = D.current;
        if (t.prev() > -1) {
          t.setPrev(true);
        } else if (i) {
          t.unset();
          i(e);
        }
      },
      "shift+tab": i
    },
    onFocus: e => {
      if (e.target !== k.current) {
        return;
      }
      const t = D.current;
      if (t.index < 0) {
        L();
      } else {
        t.reset(true);
      }
    },
    onBlur: e => {
      const t = e.relatedTarget;
      if (t instanceof HTMLElement && e.currentTarget instanceof HTMLElement && !e.currentTarget.contains(t)) {
        D.current.unset();
      }
    },
    "data-tab": E.TAB_ORDER.CHAT_CONTACT_LIST,
    tabIndex: 0
  }, C.default.createElement(O, {
    data: U,
    renderItem: e => C.default.createElement(I, {
      data: e,
      disabled: P,
      active: D.current,
      onClick: p,
      isSearchResult: !w
    }),
    flatListController: e.flatListController,
    direction: "vertical"
  }));
}
var D = (0, C.forwardRef)(k);
function I(e) {
  let {
    data: t,
    disabled: n,
    active: a,
    onClick: r,
    isSearchResult: o
  } = e;
  switch (t.type) {
    case 0:
      return C.default.createElement(h.default, {
        key: "frequent-contacts-header",
        header: y.fbt._("Frequently Contacted", null, {
          hk: "3WQKcd"
        })
      });
    case 4:
      {
        const {
          data: e,
          frequent: o
        } = t;
        if (n === true) {
          return C.default.createElement(A, {
            chat: e,
            mode: i.Mode.INFO,
            noContext: true,
            frequent: o,
            theme: "disabled"
          });
        } else {
          return C.default.createElement(A, {
            active: a,
            chat: e,
            mode: i.Mode.INFO,
            noContext: true,
            onClick: r,
            frequent: o
          });
        }
      }
    case 2:
      {
        const {
          data: e
        } = t;
        return C.default.createElement(C.default.Fragment, null, C.default.createElement(P, {
          active: a,
          contact: e,
          onClick: r,
          secondary: y.fbt._("Message yourself", null, {
            hk: "2oGAZo"
          }),
          waitIdle: true,
          showMessageYourselfName: true,
          isSearchResult: o
        }), C.default.createElement(l.default, null));
      }
    case 5:
      {
        const {
          data: e
        } = t;
        return C.default.createElement(C.default.Fragment, null, C.default.createElement(P, {
          active: a,
          contact: e,
          onClick: r,
          secondary: y.fbt._("Message your assistant", null, {
            hk: "3gBcP0"
          }),
          waitIdle: true,
          isSearchResult: o
        }), C.default.createElement(l.default, null));
      }
    case 3:
      {
        const {
          data: e,
          frequent: n
        } = t;
        return C.default.createElement(P, {
          active: a,
          contact: e,
          onClick: r,
          secondary: e.isContactBlocked ? y.fbt._("Contact is blocked", null, {
            hk: "284Coh"
          }) : undefined,
          hideStatus: (0, d.getIsMe)(e),
          frequent: n,
          waitIdle: true,
          showMessageYourselfName: (0, d.getIsMe)(e),
          isSearchResult: o,
          showNotifyName: true
        });
      }
    case 6:
      {
        const {
          data: e
        } = t;
        return C.default.createElement(P, {
          active: a,
          contact: e,
          onClick: r,
          secondary: e.isContactBlocked ? y.fbt._("Contact is blocked", null, {
            hk: "284Coh"
          }) : undefined,
          hideStatus: (0, d.getIsMe)(e),
          waitIdle: true,
          showMessageYourselfName: (0, d.getIsMe)(e),
          isSearchResult: o,
          chatOrigin: "username_contactless_search",
          showNotifyName: true
        });
      }
    case 1:
      {
        const {
          data: e,
          separator: n
        } = t;
        return C.default.createElement("div", {
          className: (0, b.default)(w)
        }, n ? C.default.createElement(l.default, {
          key: `separator-${e}`
        }) : null, C.default.createElement(h.default, {
          header: e
        }));
      }
    default:
      throw new p.UnknownDataError(t);
  }
}
exports.default = D;