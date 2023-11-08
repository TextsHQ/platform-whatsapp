var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BubbleActions = function (e) {
  const {
    theme: t,
    direction: n
  } = e;
  let a;
  a = e.placeholder === true ? d.default.createElement("div", {
    className: (0, f.default)(g.actionsBtn)
  }, "​") : e.items.map((t, n) => d.default.createElement(E, (0, r.default)({}, e, {
    index: n,
    key: n
  })));
  const o = t === h.POLL_RECEIVER || t === h.POLL_SENDER;
  return d.default.createElement(l.FlexContainer, {
    direction: e.direction || "horizontal",
    xstyle: [g.container, s.uiMargin.top10, o && g.pollActionsContainer, t === h.NO_DIVIDER && n !== "vertical" && g.noDividerContainer, o && g.containerPolls],
    align: "center",
    justify: "evenly"
  }, a);
};
exports.BubbleActionsTheme = undefined;
var r = a(require("../vendor/967154.js"));
var o = require("../app/396574.js");
var l = require("../app/690495.js");
var i = require("./776078.js");
var u = require("../app/97858.js");
var s = require("../app/676345.js");
var c = a(require("../app/395967.js"));
var d = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = m(t);
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
var p = a(require("../app/83233.js"));
function m(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (m = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const h = require("../vendor/76672.js").Mirrored(["NO_DIVIDER", "POLL_SENDER", "POLL_RECEIVER"]);
exports.BubbleActionsTheme = h;
const g = {
  noDividerContainer: {
    borderTop: "q4zabkcz"
  },
  noDividerItem: {
    marginTop: "tt8xd2xn"
  },
  icon: {
    marginTop: "tt8xd2xn",
    marginEnd: "q471nw87",
    marginBottom: "mpdn4nr2",
    marginStart: "p3lsiedt"
  },
  container: {
    borderTop: "ei53l81b",
    marginStart: "i41p64jd",
    marginEnd: "nt1f3pa5"
  },
  containerPolls: {
    marginStart: "pndj8kcp",
    marginEnd: "jx0ais7t"
  },
  actionsBtn: {
    display: "p357zi0d",
    flexGrow: "ggj6brxn",
    alignItems: "gndfcl4n",
    justifyContent: "ac2vgrno",
    paddingTop: "n1yiu2zv",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    fontSize: "f8jlpxt4",
    lineHeight: "r5qsrrlp",
    color: "o0rubyzf",
    textAlign: "qfejxiq4",
    textOverflow: "lhj4utae",
    whiteSpace: "le5p0ye3",
    width: "ln8gz9je",
    paddingBottom: "s8gyl5p1"
  },
  isKeyboardFocused: {
    borderTopStartRadius: "dntxsmpk",
    borderTopEndRadius: "ixn6u0rb",
    borderBottomEndRadius: "s2vc4xk1",
    borderBottomStartRadius: "o0wkt7aw",
    boxShadow: "lgxs6e1q"
  },
  disabledActionsBtn: {
    color: "hp667wtd",
    cursor: "bx7g2weo"
  },
  pollDisabledActionsBtnReceiver: {
    color: "qispqosg"
  },
  pollDisabledActionsBtnSender: {
    color: "eq83pvwj"
  },
  notLastActionBtn: {
    paddingBottom: "aiput80m"
  },
  pollActionsContainer: {
    marginTop: "dj1c3cmq"
  },
  pollActionsItem: {
    paddingTop: "n1yiu2zv",
    paddingBottom: "eb4rp10x"
  }
};
function E(e) {
  var t;
  const {
    direction: n,
    index: a,
    items: m,
    theme: E
  } = e;
  const _ = m[a];
  const {
    isKeyboardUser: y
  } = (0, c.default)();
  const [C, b] = (0, d.useState)(false);
  const [M, S] = (0, p.default)(_.disabled === true ? undefined : _.onClick, {
    disabled: _.disabled
  });
  let T = "";
  if (!(_.disabled === true || (0, u.messageListA11yRedesignEnabled)())) {
    T = i.LIST_FOCUSABLE_ITEM_CLASS_NAME;
  }
  const w = E === h.POLL_RECEIVER || E === h.POLL_SENDER;
  const A = _.Icon;
  return d.default.createElement("div", (0, r.default)({
    ref: M,
    className: (0, o.classnamesConvertMeToStylexPlease)((0, f.default)(g.actionsBtn, w && g.pollActionsItem, _.disabled === true && v(E), n === "vertical" && a < m.length - 1 && g.notLastActionBtn, E === h.NO_DIVIDER && (a === 0 || n !== "vertical") && g.noDividerItem), T),
    key: a,
    "aria-disabled": _.disabled
  }, S, {
    role: "button",
    onFocus: () => {
      b(true);
    },
    onBlur: () => {
      b(false);
    },
    title: (t = _.title) !== null && t !== undefined ? t : _.label
  }), d.default.createElement(l.FlexRow, {
    xstyle: [s.uiPadding.all4, C && y && g.isKeyboardFocused],
    align: "center"
  }, A ? d.default.createElement(A, {
    className: (0, f.default)(g.icon)
  }) : null, _.label));
}
function v(e) {
  if (!e) {
    return g.disabledActionsBtn;
  }
  switch (e) {
    case h.POLL_RECEIVER:
      return g.pollDisabledActionsBtnReceiver;
    case h.POLL_SENDER:
      return g.pollDisabledActionsBtnSender;
    default:
      return g.disabledActionsBtn;
  }
}