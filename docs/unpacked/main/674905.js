var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("../app/306703.js");
var o = a(require("../app/83162.js"));
var l = a(require("../app/932325.js"));
var i = a(require("../app/395967.js"));
var u = a(require("../vendor/667294.js"));
var s = a(require("../app/156720.js"));
const c = {
  item: {
    lineHeight: "r5qsrrlp",
    minHeight: "g4oj0cdv",
    paddingTop: "gaujl5hk"
  },
  itemBody: {
    borderBottom: "daad4uqs",
    paddingBottom: "p9a4hubg",
    textAlign: "ml4r5409"
  },
  itemBodyRTL: {
    textAlign: "cb8ormfa"
  },
  lastItemBody: {
    borderBottom: "thn59n0e"
  },
  main: {
    flex: "a1m9qzja"
  },
  primary: {
    color: "tviruh8d",
    fontSize: "bze30y65"
  },
  row: {
    alignItems: "gndfcl4n",
    display: "p357zi0d"
  },
  secondary: {
    color: "jq3rn4u7",
    fontSize: "f8jlpxt4",
    fontWeight: "bcr6az0x",
    lineHeight: "g2xi8p6r"
  },
  secondaryPrivacy: {
    color: "g4ti3y4y"
  },
  side: {
    color: "svlsagor",
    flex: "kk3akd72"
  },
  isKeyboardUser: {
    ":focus": {
      backgroundColor: "d7xlm8yn"
    }
  }
};
var d = e => {
  let {
    title: t,
    icon: n,
    onClick: a,
    children: d,
    isLastItem: f,
    theme: p = "default",
    testid: m,
    tabIndex: h = 0
  } = e;
  const g = (0, s.default)(c.itemBody, l.default.isRTL() && c.itemBodyRTL, n != null && c.row, f && c.lastItemBody);
  const E = (0, s.default)(n != null && c.main);
  const v = (0, s.default)(n != null && c.side);
  const {
    isKeyboardUser: _
  } = (0, i.default)();
  return u.default.createElement("div", {
    tabIndex: a ? h : null,
    className: (0, s.default)(c.item, _ && c.isKeyboardUser),
    onClick: a,
    role: a ? "button" : "",
    onKeyDown: e => {
      if ((0, o.default)(e) && a) {
        a();
      }
    }
  }, u.default.createElement("div", {
    className: g
  }, u.default.createElement("div", {
    className: E,
    dir: "auto"
  }, u.default.createElement(r.SelectableDiv, {
    className: (0, s.default)(c.primary),
    selectable: true
  }, t), u.default.createElement("div", {
    className: (0, s.default)(c.secondary, p === "privacy" && c.secondaryPrivacy)
  }, d)), u.default.createElement("div", {
    className: v
  }, n)));
};
exports.default = d;