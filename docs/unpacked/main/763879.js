var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const t = (0, f.useIsDarkTheme)();
  const {
    quantity: n,
    quantityTitle: a = p.fbt._("Selected items", null, {
      hk: "2LH58q"
    }),
    isCollapsed: i = false,
    onAddOneClick: u,
    onRemoveOneClick: s,
    maxQuantity: c = r.CART_ITEM_MAX_QUANTITY
  } = e;
  const g = e => {
    (0, d.stopEvent)(e);
    if (n < c) {
      u();
    } else {
      (0, o.default)(c, true);
    }
  };
  let C = m.default.createElement(m.default.Fragment, null, m.default.createElement(_, {
    isDarkTheme: t,
    onClick: e => (e => {
      (0, d.stopEvent)(e);
      s();
    })(e)
  }), m.default.createElement("div", {
    className: (0, h.default)(E.quantityLabel),
    title: a
  }, l.default.n(n)), m.default.createElement(v, {
    isDarkTheme: t,
    onClick: e => g(e)
  }));
  if (i) {
    C = m.default.createElement(y, {
      quantity: n,
      quantityTitle: a
    });
  }
  if (n === 0) {
    C = m.default.createElement(v, {
      isDarkTheme: t,
      onClick: e => g(e)
    });
  }
  return m.default.createElement("div", {
    className: (0, h.default)(E.wrapper)
  }, C);
};
var r = require("../app/753958.js");
var o = a(require("./273179.js"));
var l = a(require("../app/932325.js"));
var i = require("./575144.js");
var u = require("./321896.js");
var s = require("./489792.js");
var c = require("./13338.js");
var d = require("./414493.js");
var f = require("../app/667738.js");
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
var h = a(require("../app/156720.js"));
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
  wrapper: {
    display: "i86elurf",
    justifyContent: "kcgo1i74"
  },
  quantityLabel: {
    fontSize: "enbbiyaj",
    color: "p5g9vl8k",
    width: "tknnhhou",
    height: "sai7fuui",
    display: "p357zi0d",
    alignItems: "gndfcl4n",
    justifyContent: "ac2vgrno"
  },
  quantityLabelHighlighted: {
    color: "k17s6i4e",
    backgroundColor: "s19nnkrm",
    borderTopStartRadius: "ho9ovbg7",
    borderTopEndRadius: "tcg15ap9",
    borderBottomEndRadius: "c5wy1lv0",
    borderBottomStartRadius: "bqysl6j9"
  },
  button: {
    cursor: "ajgl1lbb",
    boxSizing: "cm280p3y",
    width: "tknnhhou",
    height: "sai7fuui",
    borderTop: "l78o2i9s",
    borderEnd: "k59id2ex",
    borderBottom: "hoxr7m2v",
    borderStart: "f22u1y93",
    borderTopStartRadius: "ho9ovbg7",
    borderTopEndRadius: "tcg15ap9",
    borderBottomEndRadius: "c5wy1lv0",
    borderBottomStartRadius: "bqysl6j9",
    backgroundColor: "ihvf49ua",
    color: "i8b0kslj",
    ":hover": {
      borderTop: "qtthaaob",
      borderEnd: "lsy1kxda",
      borderBottom: "oswfv6e2",
      borderStart: "jkgllu2t",
      color: "tbi410a4"
    }
  },
  svg: {
    display: "p357zi0d",
    justifyContent: "ac2vgrno"
  }
};
const v = e => {
  const {
    isDarkTheme: t,
    onClick: n
  } = e;
  const a = t ? i.QuantityControlsAddItemBtnDarkIcon : u.QuantityControlsAddItemBtnIcon;
  return m.default.createElement("button", {
    className: (0, h.default)(E.button),
    title: p.fbt._("Add 1 item", null, {
      hk: "2TMNXJ"
    }),
    onClick: n
  }, m.default.createElement(a, {
    xstyle: E.svg,
    width: 14,
    height: 14
  }));
};
const _ = e => {
  const {
    isDarkTheme: t,
    onClick: n
  } = e;
  const a = t ? s.QuantityControlsRemoveItemBtnDarkIcon : c.QuantityControlsRemoveItemBtnIcon;
  return m.default.createElement("button", {
    className: (0, h.default)(E.button),
    title: p.fbt._("Remove 1 item", null, {
      hk: "1y5zpK"
    }),
    onClick: n
  }, m.default.createElement(a, {
    xstyle: E.svg,
    width: 14,
    height: 14
  }));
};
const y = e => (0, m.useMemo)(() => m.default.createElement("div", {
  className: (0, h.default)([E.quantityLabel, E.quantityLabelHighlighted]),
  title: e.quantityTitle
}, e.quantity), [e.quantity, e.quantityTitle]);