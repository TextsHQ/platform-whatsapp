var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WDSPerformantMenu = function (e) {
  let {
    data: t,
    renderItem: n,
    colorScheme: a,
    menuControllerRef: c,
    material: f
  } = e;
  const p = new Map();
  const m = (0, i.useRegister)({
    onRegister: e => {
      e.forEach((e, t) => {
        p.set(t, e);
      });
    },
    onChange: e => {
      e.forEach((e, t) => {
        p.set(t, e);
      });
    }
  });
  const h = (0, u.useMemo)(() => new l.default(), []);
  const g = (0, u.useMemo)(() => (0, r.FlatListFactory)(), []);
  t.forEach(e => {
    if (e.static === true) {
      return;
    }
    const t = p.get(e.itemKey);
    p.set(e.itemKey, t != null ? t : {
      current: null
    });
  });
  return u.default.createElement(i.Register, {
    registerRef: m
  }, u.default.createElement(i.WDSMenuController, {
    data: p,
    colorScheme: a,
    menuControllerRef: c,
    material: f
  }, u.default.createElement(o.default, {
    flatListControllers: [h],
    className: (0, s.default)(d)
  }, u.default.createElement(g, {
    data: t,
    renderItem: n,
    direction: "vertical",
    flatListController: h,
    defaultItemHeight: 56,
    disablePointerEventsOnScroll: false,
    recycleKeys: false
  }))));
};
var r = require("./512938.js");
var o = a(require("./964223.js"));
var l = a(require("./570834.js"));
var i = require("./268541.js");
var u = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = c(t);
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
function c(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (c = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const d = {
  overflowY: "rpvcun8f",
  overflowX: "ora14ekb"
};