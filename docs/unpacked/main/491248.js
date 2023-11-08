var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    chat: t,
    parentGroupChat: n,
    selection: a,
    isHovered: g,
    onClick: E,
    onMouseDown: v,
    size: _
  } = e;
  const [, y] = (0, s.default)(a, t.id.toString());
  let C;
  let b = 32;
  switch (_) {
    case 38:
      b = 26;
      C = m;
      break;
    case 40:
      b = 26;
      C = p;
      break;
    case 44:
      b = 28;
      C = f;
      break;
    case 49:
    default:
      b = 31;
      C = d;
  }
  return i.default.createElement(o.default, {
    testid: "subgroup-identity",
    title: l.fbt._("Other subgroups", null, {
      hk: "NsqHt"
    }),
    className: (0, u.default)(c.container, C.container),
    onClick: E,
    onMouseDown: v
  }, i.default.createElement(r.DetailImage, {
    shape: r.DetailImageShape.Squircle,
    id: n.id,
    size: b
  }), i.default.createElement("div", {
    className: (0, u.default)(c.subgroupImage, C.subgroupImage)
  }, i.default.createElement(r.DetailImage, {
    id: t.id,
    size: b,
    ephemeralIcon: "chat-list",
    xstyle: h(y, g === true)
  })));
};
var r = require("../app/23641.js");
var o = a(require("../app/625903.js"));
var l = require("../vendor/548360.js");
var i = a(require("../vendor/667294.js"));
var u = a(require("../app/156720.js"));
var s = a(require("../main-chunk/928361.js"));
const c = {
  container: {
    position: "g0rxnol2",
    display: "p357zi0d",
    flexDirection: "sap93d0t"
  },
  subgroupImage: {
    position: "lhggkp7q"
  },
  borderWhite: {
    borderTop: "i6gbimu6",
    borderEnd: "lx1gz5yq",
    borderBottom: "laqho14n",
    borderStart: "q9govbbe"
  },
  borderWhiteActive: {
    borderTop: "k78bbt0z",
    borderEnd: "l9rxpzli",
    borderBottom: "jnqm3iyx",
    borderStart: "big94rcb"
  },
  borderWhiteHover: {
    borderTop: "gbk59a99",
    borderEnd: "lmq3haay",
    borderBottom: "isa44iem",
    borderStart: "j6hc94cf"
  }
};
const d = {
  container: {
    width: "nfc7olq2",
    height: "brqbuz94"
  },
  subgroupImage: {
    start: "h34337f5",
    top: "a70a3vn1"
  }
};
const f = {
  container: {
    width: "hj839x6e",
    height: "rd228egi"
  },
  subgroupImage: {
    start: "sxdjimme",
    top: "pafdoqy9"
  }
};
const p = {
  container: {
    width: "qssinsw9",
    height: "lniyxyh2"
  },
  subgroupImage: {
    start: "sxdjimme",
    top: "pafdoqy9"
  }
};
const m = {
  container: {
    width: "kh81x8bz",
    height: "ov069gg1"
  },
  subgroupImage: {
    start: "sxdjimme",
    top: "pafdoqy9"
  }
};
function h(e, t) {
  if (e) {
    return c.borderWhiteActive;
  } else if (t) {
    return c.borderWhiteHover;
  } else {
    return c.borderWhite;
  }
}