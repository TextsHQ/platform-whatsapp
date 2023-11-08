var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QuickReplySuggestions = undefined;
var r = require("../main-chunk/14544.js");
var o = require("../app/724976.js");
var l = require("../app/778945.js");
var i = require("../app/351053.js");
var u = require("../app/177938.js");
var s = require("../app/714574.js");
var c = require("./939758.js");
var d = require("./425158.js");
var f = a(require("./847941.js"));
var p = require("../app/193991.js");
var m = require("../app/174619.js");
var h = a(require("./27752.js"));
var g = a(require("./517188.js"));
var E = require("../app/498703.js");
var v = require("../app/459857.js");
var _ = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = S(t);
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
var y = a(require("../app/969651.js"));
var C = require("../main-chunk/16188.js");
var b = require("../app/808446.js");
var M = require("./972934.js");
function S(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (S = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const T = (0, _.forwardRef)((e, t) => {
  let {
    editor: n,
    kind: a,
    onSelect: S,
    onHide: T
  } = e;
  const {
    query: w,
    clearQuery: A,
    replaceQuery: P,
    omitQuery: O,
    setQuery: k
  } = (0, M.useQuery)(n, "/", {
    boundary: true,
    maxQueryLength: 25
  });
  const D = (0, y.default)();
  const I = (0, _.useRef)(false);
  const R = (0, _.useRef)();
  const N = (0, _.useRef)(false);
  (0, b.useListener)(p.QuickReplyCollection, "add remove change:shortcut", D);
  (0, _.useEffect)(() => {
    p.QuickReplyCollection.addSmartDefaultsIfNeeded();
  }, []);
  const x = (0, _.useMemo)(() => {
    if (w == null) {
      return null;
    }
    const e = function (e, t) {
      const n = p.QuickReplyCollection.filterShortcuts(e);
      if (n.length) {
        (0, d.logFilterEvent)(n.length, t);
      }
      return n;
    }(w, I.current);
    if (e.length === 0) {
      return null;
    } else {
      return e.map((e, t) => ({
        height: 52,
        itemKey: e.id,
        contentKey: w,
        index: t,
        quickReply: e,
        query: w,
        selectable: true
      }));
    }
  }, [w]);
  (0, C.useLexicalKeydownEvent)(n, "Backspace", () => {
    const e = R.current;
    if (e) {
      n.getEditorState().read(() => {
        const t = (0, r.$getSelection)();
        if (t && e === t.getTextContent()) {
          (0, d.logCancelEvent)(N.current);
        }
      });
    }
  }, true);
  (0, _.useImperativeHandle)(t, () => ({
    togglePanel() {
      if (w == null) {
        k("");
        I.current = true;
      } else {
        A();
        I.current = false;
      }
    }
  }));
  return _.default.createElement(c.ListSuggestionsPanel, {
    kind: a,
    editor: n,
    items: x,
    renderItem: (e, t) => _.default.createElement(f.default, {
      key: e.quickReply.id.toString(),
      quickReply: e.quickReply,
      query: e.query,
      selected: t
    }),
    onSelect: e => {
      let {
        quickReply: t
      } = e;
      R.current = t.message;
      switch (t.type) {
        case m.QuickReplyTypes.PROFILE_SMART_DEFAULT:
          A();
          (function (e) {
            const t = i.ChatCollection.getActive();
            const n = u.ContactCollection.get((0, v.getMaybeMeUser)());
            if (!t || !n) {
              return;
            }
            (0, h.default)([n], t);
            e.useOnce();
          })(t);
          break;
        case m.QuickReplyTypes.ADDRESS_SMART_DEFAULT:
          A();
          (function (e) {
            const t = i.ChatCollection.getActive();
            const n = (0, v.getMaybeMeUser)();
            const a = l.BusinessProfileCollection.get(n);
            const r = u.ContactCollection.get(n);
            if (!t || !a) {
              return;
            }
            const {
              latitude: c,
              longitude: d,
              address: f
            } = a;
            if ((0, o.isNumber)(c) && (0, o.isNumber)(d) && r) {
              let n = (0, s.getDisplayName)(r);
              if (a.address) {
                n += `\n${a.address}`;
              }
              (0, g.default)(t, c, d, n);
              e.useOnce();
            } else if (f) {
              (0, E.sendTextMsgToChat)(t, f);
              e.useOnce();
            }
          })(t);
          break;
        case m.QuickReplyTypes.HOURS_SMART_DEFAULT:
          A();
          (function (e) {
            const t = i.ChatCollection.getActive();
            if (!t) {
              return;
            }
            (0, E.sendTextMsgToChat)(t, e.message);
            e.useOnce();
          })(t);
          break;
        default:
          P(t.message, {
            select: true
          });
          t.useOnce();
      }
      if (t.isSmartDefault()) {
        (0, d.logSmartDefaultSelectEvent)(I.current);
      } else {
        (0, d.logSelectEvent)(I.current);
      }
      N.current = I.current;
      I.current = false;
      if (!(S == null)) {
        S();
      }
    },
    onDismiss: () => {
      O();
      I.current = false;
    },
    onHide: T
  });
});
exports.QuickReplySuggestions = T;
T.displayName = "QuickReplySuggestions";