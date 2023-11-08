var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../main-chunk/170206.js"));
var o = require("../app/23641.js");
var l = require("../app/305521.js");
var i = require("./811720.js");
var u = require("../app/862159.js");
var s = require("../app/81644.js");
var c = a(require("../app/932325.js"));
var d = require("./417696.js");
var f = a(require("../app/237889.js"));
var p = require("../vendor/548360.js");
var m = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = v(t);
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
var h = a(require("../main-chunk/928361.js"));
var g = a(require("./261716.js"));
var E = a(require("../app/637660.js"));
function v(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (v = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const _ = (0, d.ListModalFactory)();
function y(e) {
  let {
    unjoinedGroup: t,
    active: n,
    onClick: a,
    type: i
  } = e;
  const {
    id: c,
    subject: d,
    groupType: f
  } = t;
  const [p, g] = (0, h.default)(n, t.id.toString());
  const E = e => {
    e.preventDefault();
    e.stopPropagation();
    a(t, i);
  };
  const v = f === u.GroupType.LINKED_ANNOUNCEMENT_GROUP ? m.default.createElement(o.DetailImage, {
    size: 49,
    id: c,
    shape: o.DetailImageShape.Squircle
  }) : m.default.createElement(o.DetailImage, {
    size: 49,
    id: c
  });
  return m.default.createElement(s.HotKeys, {
    ref: p,
    handlers: {
      enter: E,
      space: E
    },
    role: "button"
  }, m.default.createElement(r.default, {
    active: g,
    theme: "no-border",
    primary: m.default.createElement(l.EmojiText, {
      text: d,
      ellipsify: true
    }),
    image: v,
    onClick: E
  }));
}
function C(e, t) {
  const {
    unjoinedGroups: n,
    onCancel: a,
    onClickGroup: r,
    title: o = p.fbt._("Groups", null, {
      hk: "3mTb9E"
    }),
    type: l
  } = e;
  const u = (0, E.default)(() => new f.default([], e => e.itemKey));
  const [s, d] = (0, g.default)();
  const h = m.default.createElement(i.SearchGroups, null);
  const v = (0, m.useMemo)(() => {
    const e = c.default.accentFold(s);
    const t = n.filter(t => {
      const n = c.default.accentFold(t.subject);
      return !e || e && n.includes(e);
    }).map(e => ({
      unjoinedGroup: e,
      itemKey: e.id.toString()
    }));
    u.current.init(t);
    return t;
  }, [s, n]);
  return m.default.createElement(_, {
    title: o,
    data: v,
    renderItem: e => {
      let {
        unjoinedGroup: t
      } = e;
      return m.default.createElement(y, {
        unjoinedGroup: t,
        onClick: r,
        active: u.current,
        type: l
      });
    },
    emptyState: h,
    onSelect: (t, n) => {
      t.preventDefault();
      t.stopPropagation();
      r(n.unjoinedGroup, e.type);
    },
    onCancel: a,
    ref: t,
    onSearch: d,
    selection: u.current
  });
}
var b = (0, m.forwardRef)(C);
exports.default = b;