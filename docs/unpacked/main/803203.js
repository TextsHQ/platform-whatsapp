var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("../app/724976.js");
var o = require("./700071.js");
var l = require("../app/351053.js");
var i = require("../app/374660.js");
var u = require("../app/79672.js");
var s = a(require("./937612.js"));
var c = require("./468926.js");
var d = a(require("./774838.js"));
var f = require("../app/177938.js");
var p = require("../app/660666.js");
var m = require("./811720.js");
var h = require("../app/753233.js");
var g = require("../app/258105.js");
var E = require("./512938.js");
var v = a(require("../app/667845.js"));
var _ = a(require("../app/932325.js"));
var y = a(require("../main-chunk/258146.js"));
var C = require("./608456.js");
var b = a(require("./772549.js"));
var M = require("../app/625786.js");
var S = require("../app/390737.js");
var T = require("../app/168661.js");
var w = require("../app/227834.js");
var A = require("../app/459857.js");
var P = require("../vendor/548360.js");
var O = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = R(t);
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
var k = require("../app/808446.js");
var D = a(require("../app/49710.js"));
var I = a(require("../app/17533.js"));
function R(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (R = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const N = "SEC_FREQUENT_CONTACTS";
const x = "SEC_CHATS";
const L = "SEC_CONTACTS";
const j = "ROW_FREQUENT_CONTACTS";
const B = "ROW_CHATS";
const F = "ROW_CONTACTS";
const G = (0, E.FlatListFactory)();
function U(e) {
  let {
    active: t,
    selections: n,
    hasFrequentlyForwarded: a,
    ephemeralIcon: l,
    onChatClick: i,
    data: f,
    isMaxChatsSelected: m,
    isMaxGroupsSelected: h,
    isDisabled: g,
    customSecondaryText: v,
    isSearchResult: _
  } = e;
  switch (f.type) {
    case N:
      return O.default.createElement(b.default, {
        header: P.fbt._("Frequently Contacted", null, {
          hk: "3WQKcd"
        })
      });
    case x:
      return O.default.createElement(b.default, {
        header: P.fbt._("Recent chats", null, {
          hk: "4Af5jb"
        })
      });
    case L:
      return O.default.createElement(b.default, {
        header: P.fbt._("Other contacts", null, {
          hk: "Wk5nF"
        })
      });
    case j:
    case B:
    case F:
      {
        const {
          data: e
        } = f;
        const E = n.isSelected(e);
        let C;
        let b;
        let M = m && !E;
        if (g) {
          C = g(e);
          M = C;
        }
        const S = () => {
          if (!C) {
            i(e);
          }
        };
        if (e instanceof u.Chat) {
          var y;
          let i;
          if ((0, r.isFunction)(v)) {
            i = v(e, M);
          }
          const u = !!((y = e.groupMetadata) === null || y === undefined ? undefined : y.noFrequentlyForwarded);
          if (a && u) {
            M = true;
            i = P.fbt._("Can't send messages that have been forwarded many times", null, {
              hk: "1lDDZg"
            });
          } else if (h && !n.isSelected(e)) {
            M = true;
          }
          let s = "chat-checkbox";
          if (M) {
            s = "chat-checkbox-disabled";
          }
          b = O.default.createElement(o.ChatOrContact, {
            theme: s,
            onClick: S,
            active: t,
            chat: e,
            mode: o.Mode.INFO,
            noContext: true,
            secondary: i,
            ephemeralIcon: l
          });
        } else {
          const n = e;
          b = O.default.createElement(s.default, {
            contact: n,
            onSelect: S,
            active: t,
            customSecondaryText: !_ && (0, p.getIsMe)(n) ? P.fbt._("Message yourself", null, {
              hk: "2oGAZo"
            }) : null,
            ephemeralIcon: l,
            disabled: M,
            theme: "multi-select-chat-list"
          });
        }
        return O.default.createElement(d.default, {
          wrapperTestid: `checkbox-selectable-wrapper-${e.id.toString()}`,
          key: e.id.toString(),
          model: e,
          selections: n,
          disabled: M,
          checkboxTheme: c.CheckboxTheme.OUTLINE
        }, b);
      }
    default:
      throw new E.UnknownDataError(f);
  }
}
function W(e) {
  let {
    searchText: t,
    isEmpty: n,
    flatList: a
  } = e;
  if (n) {
    if (t) {
      return O.default.createElement(m.Search, null);
    } else {
      return O.default.createElement(m.ListChats, null);
    }
  } else {
    return a;
  }
}
function H(e, t) {
  const {
    active: n,
    getInitialItems: a,
    selections: r,
    maxChats: o,
    onSelectionChanged: s,
    hasFrequentlyForwarded: c = false,
    hasForwarded: d = false,
    ephemeralIcon: m,
    searchText: E,
    msgType: b,
    excludeChat: R,
    excludeBroadcast: H,
    flatListController: V,
    isDisabled: q,
    customItemSecondaryText: Y,
    onChatsLoaded: z,
    excludeContacts: K = false,
    isCommunityExistingGroupsDrawer: Q = false
  } = e;
  const X = (0, D.default)(E);
  const Z = e => e.filter(e => !(0, w.shouldBlockByTos)(e) && !(0, T.shouldBlockByCountry)(e));
  const J = (0, I.default)(t => {
    const n = {};
    let a = [];
    if (!K) {
      a = Z((e => e ? [] : f.ContactCollection.frequentContacts(b, R))(t)).map(e => {
        if (H && (0, p.getIsBroadcast)(e)) {
          return null;
        }
        const t = (0, p.getIsGroup)(e) || (0, p.getIsBroadcast)(e) ? l.ChatCollection.get(e.id) : e;
        if (t) {
          n[t.id] = true;
        }
        return t;
      }).filter(Boolean);
    }
    const r = (e => {
      let t = e;
      if (t) {
        t = _.default.accentFold(t);
        const e = (0, C.numberSearch)(t);
        return l.ChatCollection.filter(function (n) {
          return n.canSend && n.shouldAppearInList && n.contact.searchMatch(t, e);
        });
      }
      return l.ChatCollection.filter(function (e) {
        return e.canSend && e.shouldAppearInList;
      });
    })(t).map(t => {
      if (H && t.isBroadcast) {
        return null;
      }
      if ((0, i.isSuspendedGroup)(t)) {
        return null;
      }
      if (e.chatFilter && !e.chatFilter(t)) {
        return null;
      }
      const a = t.isGroup || t.isBroadcast || K ? t : t.contact;
      if (n[a.id]) {
        return null;
      } else {
        n[a.id] = true;
        return a;
      }
    }).filter(Boolean);
    let o = [];
    if (!K) {
      o = Z((e => {
        let t = e;
        const n = f.ContactCollection.getFilteredContacts({
          showMe: true
        });
        if (!t) {
          return n;
        }
        t = _.default.accentFold(t);
        const a = (0, C.numberSearch)(t);
        return n.filter(function (e) {
          return e.searchMatch(t, a);
        });
      })(t)).map(e => n[e.id] ? null : e).filter(Boolean);
    }
    if (!t) {
      const e = (e, t) => (0, A.isMeAccount)(e.id) ? -1 : (0, A.isMeAccount)(t.id) ? 1 : 0;
      a.sort(e);
      r.sort(e);
      o.sort(e);
    }
    if (Q) {
      r.sort((e, t) => {
        if (q) {
          const n = v.default.get(e.id.toString());
          const a = (n == null ? undefined : n.isUnnamed) === true;
          if (q(e) && !a) {
            return 1;
          }
          if (q(t)) {
            return -1;
          }
        }
        return 1;
      });
    }
    return {
      frequentContacts: a,
      chats: r,
      contacts: o
    };
  });
  const [$, ee] = (0, O.useState)(() => J(E));
  const te = (0, O.useRef)(null);
  const ne = (0, O.useRef)(null);
  const ae = e => {
    const {
      frequentContacts: t,
      chats: n,
      contacts: a
    } = e;
    return t.concat(n, a);
  };
  (0, O.useEffect)(() => {
    const e = ae($);
    n.init(e);
    if (a) {
      a().forEach(e => r.setVal(e, true));
    }
    if (z) {
      z(e);
    }
  }, []);
  const [re, oe] = (0, O.useState)(false);
  const [le, ie] = (0, O.useState)(false);
  (0, k.useListener)(r, "all", () => {
    oe(r.getSelected().length === o);
    ie(d && r.getSelected().some(e => e instanceof u.Chat ? e.isGroup : (0, p.getIsGroup)(e)));
  });
  const ue = (e, t, a) => {
    if (t) {
      let n;
      let a;
      if (typeof o == "number" && r.getSelected().length >= o) {
        if (Q && s) {
          return void s(e, t);
        }
        if (c) {
          n = P.fbt._({
            "*": "Messages forwarded many times can only be shared with up to {count} chats at a time.",
            _1: "Messages forwarded many times can only be shared with up to 1 chat at a time."
          }, [P.fbt._plural(o, "count")], {
            hk: "3nuqz2"
          });
          a = {
            actionText: P.fbt._("Learn more", null, {
              hk: "3Tt4dc"
            }),
            onAction: () => (0, h.openExternalLink)((0, g.getFrequentlyForwardedFaqUrl)())
          };
        } else {
          n = P.fbt._({
            "*": "You can only share with up to {count} chats",
            _1: "You can only share with up to 1 chat"
          }, [P.fbt._plural(o, "count")], {
            hk: "4q8jud"
          });
        }
      } else if (le && (e instanceof u.Chat ? e.isGroup : (0, p.getIsGroup)(e))) {
        n = P.fbt._("Forwarded messages can only be sent to one group chat at a time.", null, {
          hk: "2ZxS0s"
        });
        a = {
          actionText: P.fbt._("Learn more", null, {
            hk: "176vVf"
          }),
          onAction: () => (0, h.openExternalLink)((0, g.getFrequentlyForwardedFaqUrl)())
        };
      }
      if (n != null) {
        return void S.ToastManager.open(O.default.createElement(M.Toast, {
          msg: n,
          action: a
        }), S.ToastPosition.CENTER);
      }
    }
    r.setVal(e, t, a);
    n.setVal(e, a);
    if (s) {
      s(e, t);
    }
  };
  const se = e => {
    const t = r.isSelected(e);
    ue(e, !t, false);
  };
  (0, O.useEffect)(() => {
    if (E !== X) {
      const e = J(E);
      ee(e);
      n.init(ae(e));
    }
  }, [n, J, X, E]);
  const ce = e => {
    const {
      frequentContacts: t,
      chats: n,
      contacts: a
    } = $;
    let o;
    if (t.length) {
      o = t[0];
    } else if (n.length) {
      o = n[0];
    } else {
      if (!a.length) {
        return;
      }
      o = a[0];
    }
    const l = !r.isSelected(o);
    ue(o, l, e);
  };
  (0, O.useImperativeHandle)(t, () => ({
    toggleFirst: ce
  }));
  return O.default.createElement(y.default, {
    active: e.active,
    onLeave: e.onLeaveList,
    ref: te,
    onIndexChange: e => {
      var t;
      if (!((t = ne.current) === null || t === undefined)) {
        t.scrollIntoViewIfNeeded(e);
      }
    }
  }, O.default.createElement(W, {
    flatList: O.default.createElement(G, {
      ref: ne,
      flatListController: V,
      direction: "vertical",
      forceConsistentRenderCount: false,
      data: (() => {
        const e = [];
        const {
          frequentContacts: t,
          chats: n,
          contacts: a
        } = $;
        if (t.length) {
          e.push({
            itemKey: N,
            type: N
          });
          e.push(...t.map(e => ({
            itemKey: e.id.toString(),
            type: j,
            data: e
          })));
        }
        if (n.length) {
          if (K !== true) {
            e.push({
              itemKey: x,
              type: x
            });
          }
          e.push(...n.map(e => ({
            itemKey: e.id.toString(),
            type: B,
            data: e
          })));
        }
        if (a.length) {
          e.push({
            itemKey: L,
            type: L
          });
          e.push(...a.map(e => ({
            itemKey: e.id.toString(),
            type: F,
            data: e
          })));
        }
        return e;
      })(),
      renderItem: e => O.default.createElement(U, {
        data: e,
        active: n,
        isSearchResult: !!E,
        selections: r,
        hasFrequentlyForwarded: c,
        ephemeralIcon: m,
        onChatClick: se,
        isMaxChatsSelected: re,
        isMaxGroupsSelected: le,
        isDisabled: q,
        customSecondaryText: Y
      })
    }),
    searchText: E,
    isEmpty: (() => {
      const {
        frequentContacts: e,
        chats: t,
        contacts: n
      } = $;
      return !e.length && !t.length && !n.length;
    })()
  }));
}
var V = (0, O.forwardRef)(H);
exports.default = V;