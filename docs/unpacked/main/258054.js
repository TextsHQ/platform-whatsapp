var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/81109.js"));
var l = a(require("../vendor/667294.js"));
var i = a(require("../app/156720.js"));
var u = a(require("../app/576191.js"));
var s = a(require("../app/38085.js"));
var c = a(require("../app/83233.js"));
const d = {
  clickable: {
    cursor: "ajgl1lbb"
  },
  main: {
    flex: "mx771qyo",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex"
  },
  mainEllipsify: {
    position: "g0rxnol2",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    textOverflow: "lhj4utae",
    whiteSpace: "le5p0ye3"
  },
  side: {
    flex: "kk3akd72",
    marginStart: "a3oefunm"
  },
  body: {
    display: "p357zi0d",
    alignItems: "gndfcl4n"
  },
  focused: {
    borderTopStartRadius: "dntxsmpk",
    borderTopEndRadius: "ixn6u0rb",
    borderBottomEndRadius: "s2vc4xk1",
    borderBottomStartRadius: "o0wkt7aw",
    boxShadow: "lgxs6e1q"
  }
};
var f = e => {
  let {
    children: t,
    side: n,
    xstyle: a,
    testid: f,
    ellipsify: p = false,
    onClick: m,
    "aria-label": h
  } = e;
  const [g, E] = (0, u.default)();
  const v = (0, i.default)(m && d.clickable, E && d.focused, a);
  const _ = (0, i.default)(d.main, p && d.mainEllipsify);
  const y = n != null ? l.default.createElement("div", {
    className: (0, i.default)(d.side)
  }, n) : null;
  let C = {};
  const [b, M] = (0, c.default)(m);
  const S = (0, s.default)(b, g);
  if (m != null) {
    C = (0, o.default)({
      ref: S
    }, M);
  }
  return l.default.createElement("div", (0, r.default)({
    className: v,
    "aria-label": h
  }, C), l.default.createElement("div", {
    className: (0, i.default)(d.body)
  }, l.default.createElement("div", {
    className: _
  }, t), y));
};
exports.default = f;