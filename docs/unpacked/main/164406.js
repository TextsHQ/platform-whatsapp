var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavigableFlatList = undefined;
var r = require("./512938.js");
var o = a(require("./964223.js"));
var l = a(require("./570834.js"));
var i = require("../app/81644.js");
var u = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = d(t);
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
var s = a(require("../app/156720.js"));
var c = a(require("../app/637660.js"));
function d(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (d = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const f = {
  zIndex: "thghmljt",
  display: "p357zi0d",
  flexDirection: "f8m0rgwh",
  flexGrow: "ggj6brxn",
  overflowY: "ag5g9lrv",
  backgroundColor: "ihvf49ua"
};
exports.NavigableFlatList = e => {
  const {
    selection: t,
    listData: n,
    flatListController: a,
    onRenderItem: d,
    ariaLabel: p,
    rotateList: m = false
  } = e;
  const h = (0, c.default)(() => new l.default());
  const g = (0, u.useRef)();
  const E = (0, u.useMemo)(() => (0, r.FlatListFactory)(), []);
  return u.default.createElement(o.default, {
    flatListControllers: [a != null ? a : h.current],
    className: (0, s.default)(f),
    id: "pane-side"
  }, u.default.createElement(i.HotKeys, {
    role: "list",
    handlers: {
      up: e => {
        if (!(e == null)) {
          e.preventDefault();
        }
        if (!(e == null)) {
          e.stopPropagation();
        }
        if (t.prev(m) > -1) {
          t.setPrev(true, m);
        }
      },
      down: e => {
        if (!(e == null)) {
          e.preventDefault();
        }
        if (!(e == null)) {
          e.stopPropagation();
        }
        const n = t.next(m);
        if (t.index !== n) {
          t.setNext(true, m);
        }
      }
    },
    onFocus: e => {
      if (e.target === g.current) {
        if (t.index < 0) {
          t.setFirst(true);
        } else {
          t.reset(true);
        }
      }
    },
    onBlur: e => {
      const n = e.relatedTarget;
      if (n instanceof HTMLElement && e.currentTarget instanceof HTMLElement && !e.currentTarget.contains(n)) {
        t.unset();
      }
    },
    ref: g,
    tabIndex: t.list.length !== 0 ? 0 : -1
  }, u.default.createElement(E, {
    flatListController: a != null ? a : h.current,
    direction: "vertical",
    data: n,
    renderItem: d,
    "aria-label": p
  })));
};