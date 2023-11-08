var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../vendors-main/974691.js"));
var o = require("./512938.js");
var l = a(require("./964223.js"));
var i = require("../app/81644.js");
var u = a(require("./908719.js"));
var s = function (e, t) {
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
var c = a(require("../app/156720.js"));
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
  width: "ln8gz9je",
  maxHeight: "iod7fm94",
  minHeight: "o404977b",
  overflowX: "i44ccddp",
  overflowY: "ag5g9lrv",
  paddingTop: "fbgy3m38"
};
const p = (0, o.FlatListFactory)();
function m(e, t) {
  const n = (0, s.useRef)(new Map());
  const a = (0, s.useRef)(null);
  const [o, d] = (0, s.useState)(0);
  const m = t => {
    const a = e.senders[t];
    if (a) {
      var r;
      const e = a.id.toString();
      const t = n.current.get(e);
      if (!(t == null || (r = t.current) === null || r === undefined)) {
        r.focus();
      }
    }
  };
  const h = t => (0, r.default)(t, 0, e.senders.length - 1);
  const g = () => {
    m(h(o));
  };
  const E = () => {
    var e;
    return ((e = a.current) === null || e === undefined ? undefined : e.contains(document.activeElement)) || false;
  };
  (0, s.useImperativeHandle)(t, () => ({
    focus: g,
    hasFocus: E
  }));
  (0, s.useEffect)(() => {
    d(0);
  }, [e.senders]);
  return s.default.createElement(l.default, {
    ref: a,
    className: (0, c.default)(f),
    flatListControllers: [e.flatListController]
  }, s.default.createElement(i.HotKeys, {
    role: "list",
    tabIndex: null,
    handlers: {
      up: e => {
        e.preventDefault();
        const t = h(o - 1);
        d(t);
        m(t);
      },
      down: e => {
        const t = h(o + 1);
        e.preventDefault();
        d(t);
        m(t);
      }
    }
  }, s.default.createElement(p, {
    flatListController: e.flatListController,
    direction: "vertical",
    defaultItemHeight: 53,
    data: e.senders.map(e => ({
      itemKey: e.id.toString(),
      sender: e
    })),
    renderItem: t => {
      const a = (0, s.createRef)();
      n.current.set(t.itemKey, a);
      return s.default.createElement(u.default, {
        ref: a,
        key: t.itemKey,
        reaction: t.sender,
        isAggregated: e.isAggregated,
        onCloseDetailsPane: e.onCloseDetailsPane
      });
    },
    forceConsistentRenderCount: false
  })));
}
var h = (0, s.forwardRef)(m);
exports.default = h;