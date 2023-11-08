var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListSuggestionsPanel = function (e) {
  let {
    kind: t,
    editor: n,
    items: a,
    renderItem: c,
    onSelect: p,
    onDismiss: g,
    onHide: y
  } = e;
  const C = (0, m.default)(() => new i.default());
  const b = (0, d.useRef)();
  const M = (0, m.default)(() => new u.default([], e => e.itemKey));
  (0, h.useLexicalCommandListener)(n, r.KEY_ARROW_UP_COMMAND, e => {
    if (v(e) || !(a == null ? undefined : a.length)) {
      return false;
    }
    let t = M.current.prev();
    for (; t >= 0;) {
      if (M.current.list[t].selectable !== false) {
        break;
      }
      t -= 1;
    }
    const n = M.current.list[t];
    var r;
    if (n != null) {
      M.current.setVal(n);
      if (!((r = b.current) === null || r === undefined)) {
        r.scrollIntoViewIfNeeded(n.index);
      }
    }
    return true;
  });
  (0, h.useLexicalCommandListener)(n, r.KEY_ARROW_DOWN_COMMAND, e => {
    if (v(e) || !(a == null ? undefined : a.length)) {
      return false;
    }
    let t = M.current.next();
    for (; t < M.current.list.length;) {
      if (M.current.list[t].selectable !== false) {
        break;
      }
      t += 1;
    }
    const n = M.current.list[t];
    var r;
    if (n != null) {
      M.current.setVal(n);
      if (!((r = b.current) === null || r === undefined)) {
        r.scrollIntoViewIfNeeded(n.index);
      }
    }
    return true;
  });
  const S = (0, d.useMemo)(() => (0, o.FlatListFactory)(), []);
  const T = e => {
    var t;
    if (v(e) || !(a == null ? undefined : a.length)) {
      return false;
    }
    const n = (t = M.current.getVal()) !== null && t !== undefined ? t : M.current.list.find(e => (e == null ? undefined : e.selectable) !== false);
    if (n) {
      p(n);
    }
    return true;
  };
  (0, d.useEffect)(() => {
    if (a == null ? undefined : a.length) {
      M.current.init(a);
      const e = a.find(e => e.selectable === true);
      if (e != null) {
        M.current.setVal(e);
      }
    }
  }, [a, M]);
  (0, h.useLexicalCommandListener)(n, r.KEY_ENTER_COMMAND, T);
  (0, h.useLexicalCommandListener)(n, r.KEY_TAB_COMMAND, T);
  let w = null;
  if (a == null ? undefined : a.length) {
    w = d.default.createElement(l.default, {
      className: (0, f.default)(E.container),
      flatListControllers: [C.current]
    }, d.default.createElement(S, {
      ref: b,
      data: a,
      flatListController: C.current,
      direction: "vertical",
      renderItem: e => d.default.createElement(_, {
        item: e,
        renderItem: c,
        onSelect: p,
        active: M.current
      })
    }));
  }
  return d.default.createElement(s.SuggestionsPanelContainer, {
    editor: n,
    onDismiss: g,
    onHide: y,
    kind: t
  }, w);
};
var r = require("../main-chunk/14544.js");
var o = require("./512938.js");
var l = a(require("./964223.js"));
var i = a(require("./570834.js"));
var u = a(require("../app/237889.js"));
var s = require("./204875.js");
var c = a(require("../app/625903.js"));
var d = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = g(t);
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
var f = a(require("../app/156720.js"));
var p = a(require("../main-chunk/928361.js"));
var m = a(require("../app/637660.js"));
var h = require("../main-chunk/16188.js");
function g(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (g = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const E = {
  container: {
    position: "g0rxnol2",
    maxHeight: "d10gensu",
    overflowX: "i44ccddp",
    overflowY: "ag5g9lrv"
  },
  itemWrapper: {
    width: "ln8gz9je"
  }
};
function v(e) {
  return Boolean(e && (e.metaKey || e.shiftKey || e.altKey || e.ctrlKey));
}
function _(e) {
  let {
    item: t,
    renderItem: n,
    onSelect: a,
    active: r
  } = e;
  const [o, l] = (0, p.default)(r, t.itemKey);
  if (t.selectable === false) {
    return d.default.createElement("div", {
      className: (0, f.default)(E.itemWrapper)
    }, n(t, false));
  } else {
    return d.default.createElement(c.default, {
      onClick: () => {
        a(t);
      },
      xstyle: E.itemWrapper,
      onMouseEnter: () => {
        r.setVal(r.list[t.index]);
      },
      onMouseDown: e => {
        e.preventDefault();
      }
    }, n(t, l));
  }
}