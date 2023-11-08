var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MentionSuggestions = function (e) {
  let {
    kind: t,
    editor: n,
    groupMetadata: a,
    elevatedPushNamesEnabled: u,
    botInvokeEnabled: s = false
  } = e;
  const A = function (e, t) {
    if (e == null && !t) {
      return false;
    }
    if ((e == null ? undefined : e.groupType) === c.GroupType.LINKED_ANNOUNCEMENT_GROUP) {
      return false;
    }
    return true;
  }(a, s);
  const D = k(a);
  const {
    query: I,
    replaceQuery: R,
    omitQuery: N
  } = (0, w.useQuery)(n, _.AT_SYMBOL, {
    enabled: A || D,
    maxQueryLength: P,
    boundary: true
  });
  const [x, L, j] = (0, T.default)(v.NUX.BOT_INVOKE_UPSELL);
  const B = e => {
    R(() => new r.TextNode((0, g.formatMention)(e)), {
      trailingSpace: true
    });
  };
  const F = e => {
    e.stopPropagation();
    j();
  };
  const G = (0, M.useMemo)(() => {
    const e = (0, y.receiveTextStatusForNewSurfacesEnabled)() ? 60 : 52;
    if (I == null) {
      return null;
    }
    if (a == null && !s) {
      return null;
    }
    if (n.getEditorState().read(() => {
      const e = (0, d.$getRangeSelection)();
      if (!e) {
        return false;
      }
      return e.anchor.getNode() instanceof p.MentionNode;
    })) {
      return null;
    }
    const t = [];
    const r = A && D;
    if (A) {
      const n = (0, h.getUserResults)(I, a, s && ((0, i.hasSeenInvokeTos)() || x));
      if (n.length !== 0) {
        if (r) {
          t.push({
            index: t.length,
            itemKey: "section-contacts",
            type: "contact_header",
            selectable: false,
            height: 42
          });
        }
        const a = n.map((n, a) => ({
          type: "contact",
          selectable: true,
          contact: n,
          id: n.id,
          height: e,
          itemKey: n.id.toString(),
          contentKey: I,
          index: a + t.length,
          query: I
        }));
        t.push(...a);
      }
    }
    if (D && a != null) {
      const n = (0, h.getSubgroupResults)(I, a);
      if (n.length !== 0) {
        if (r) {
          t.push({
            index: t.length,
            itemKey: "section-groups",
            type: "group_header",
            selectable: false,
            height: 42
          });
        }
        const a = n.map((n, a) => ({
          type: "group",
          selectable: true,
          groupMetadata: n,
          id: n.id,
          height: e,
          itemKey: n.id.toString(),
          contentKey: I,
          index: a + t.length,
          query: I
        }));
        t.push(...a);
      }
    }
    if (t.length) {
      return t;
    } else {
      return null;
    }
  }, [I, a, n, A, D, s, x]);
  return M.default.createElement(f.ListSuggestionsPanel, {
    kind: t,
    editor: n,
    items: G,
    renderItem: (e, t) => {
      switch (e.type) {
        case "contact":
          if (e.id.isBot() && !(0, i.hasSeenInvokeTos)() && x) {
            return M.default.createElement(o.default, {
              selected: t,
              onDismiss: F
            });
          } else {
            return M.default.createElement(m.UserResult, {
              key: e.contact.id.toString(),
              contact: e.contact,
              term: e.query,
              theme: null,
              selected: t,
              elevatedPushNamesEnabled: u
            });
          }
        case "group":
          return M.default.createElement(m.GroupResult, {
            key: e.groupMetadata.id.toString(),
            groupMetadata: e.groupMetadata,
            term: e.query,
            theme: null,
            selected: t
          });
        case "contact_header":
          return M.default.createElement("div", {
            className: (0, S.default)(O, C.uiPadding.start14)
          }, b.fbt._("CONTACTS", null, {
            hk: "25o7YE"
          }));
        case "group_header":
          return M.default.createElement("div", {
            className: (0, S.default)(O, C.uiPadding.start14)
          }, b.fbt._("GROUPS", null, {
            hk: "fW7yi"
          }));
      }
    },
    onSelect: e => {
      if (!(e.type !== "group" && e.type !== "contact")) {
        if (e.id.isBot() && !(0, i.hasSeenInvokeTos)() && x) {
          E.ModalManager.open(M.default.createElement(l.default, {
            fromInvoke: true,
            onOK: () => {
              B(e.id);
            }
          }));
        } else {
          B(e.id);
        }
      }
    },
    onDismiss: N
  });
};
exports.shouldEnableGroupMentions = k;
var r = require("../main-chunk/14544.js");
var o = a(require("./54442.js"));
var l = a(require("./581900.js"));
var i = require("../app/292167.js");
var u = require("../app/174834.js");
var s = a(require("../app/846870.js"));
var c = require("../app/862159.js");
var d = require("../main-chunk/251922.js");
var f = require("./939758.js");
var p = require("../main-chunk/331853.js");
var m = require("./375353.js");
var h = require("./827007.js");
var g = require("./325870.js");
var E = require("../app/114850.js");
var v = require("../app/95589.js");
var _ = require("../app/472685.js");
var y = require("../app/491805.js");
var C = require("../app/676345.js");
var b = require("../vendor/548360.js");
var M = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = A(t);
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
var S = a(require("../app/156720.js"));
var T = a(require("./157558.js"));
var w = require("./972934.js");
function A(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (A = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const P = s.default.MAX_PUSHNAME_LENGTH * 2;
const O = {
  color: "jq3rn4u7",
  fontSize: "f8jlpxt4",
  textAlign: "ljrqcn24",
  fontWeight: "m1e7cby3",
  height: "k0zj153f",
  display: "p357zi0d",
  alignItems: "gndfcl4n",
  WebkitFontSmoothing: "kh4n4d4z"
};
function k(e) {
  return !((e == null ? undefined : e.groupType) !== c.GroupType.LINKED_ANNOUNCEMENT_GROUP || !(e == null ? undefined : e.participants.iAmAdmin())) || ((e == null ? undefined : e.groupType) === c.GroupType.LINKED_SUBGROUP || (e == null ? undefined : e.groupType) === c.GroupType.LINKED_GENERAL_GROUP) && (0, u.groupMentionsInSubgroupsEnabled)();
}