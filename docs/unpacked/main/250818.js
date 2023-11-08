var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Message = function (e) {
  const {
    msg: t,
    author: n,
    onClick: a
  } = e;
  const [_, y, C, b, M, S, T] = (0, v.useMsgValues)(e.msg.id, [m.getId, m.getIsSentByMe, f.getSenderObj, f.getRtl, f.getDir, m.getType, m.getT]);
  const w = (0, f.getChat)(t);
  const A = (0, g.useRef)(null);
  const P = (0, g.useRef)(null);
  const [O, k] = (0, g.useState)(() => !!e.active && e.active.value === t);
  (0, E.useListener)(e.active, _.toString(), (e, t) => {
    if (e === "focus") {
      const e = P.current;
      d.default.focus(e);
      if (t && e) {
        (0, s.scrollIntoViewIfNeeded)(e);
      }
    }
    k(!!e);
  });
  const D = e => {
    if ((0, r.isFunction)(a)) {
      const n = (0, i.getSearchContext)(w, (0, h.unproxy)(t));
      n.msg = t;
      a(e, w, n);
    }
  };
  const I = g.default.createElement(u.default, {
    msg: t
  });
  const R = g.default.createElement(l.default, {
    msg: t.safe(),
    msgType: "Search",
    author: n,
    searchQuery: e.searchText ? [e.searchText] : []
  });
  return g.default.createElement(p.HotKeys, {
    handlers: {
      enter: e => {
        e.preventDefault();
        e.stopPropagation();
        c.default.shouldIndicateFocus();
        D(e);
      }
    },
    onFocus: () => {
      var e;
      if (!((e = A.current) === null || e === undefined)) {
        e.indicateFocus();
      }
    },
    ref: P
  }, g.default.createElement(o.default, {
    ref: A,
    contextEnabled: () => false,
    theme: "chat-search",
    active: !!O,
    primaryDetail: I,
    secondary: R,
    primary: undefined,
    onClick: D
  }));
};
var r = require("../app/724976.js");
var o = a(require("./991370.js"));
var l = a(require("./333072.js"));
var i = require("../app/713105.js");
var u = a(require("./829087.js"));
var s = require("../main-chunk/465113.js");
var c = a(require("../app/988410.js"));
var d = a(require("../app/335540.js"));
var f = require("../app/163755.js");
var p = require("../app/81644.js");
var m = require("../app/787742.js");
var h = require("../app/163139.js");
var g = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = _(t);
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
var E = require("../app/808446.js");
var v = require("./871210.js");
function _(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (_ = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}