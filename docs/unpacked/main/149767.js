var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    className: t,
    children: n,
    direction: a = "horizontal",
    outgoingMsg: i,
    position: u,
    xstyle: s
  } = e;
  return r.default.createElement("div", {
    className: (0, o.default)(l.wrapper, u === "bottom" && l.posBottom, u === "top" && l.posTop, !i && l.wrapperIn, i && l.wrapperOut, s)
  }, n);
};
var r = a(require("../vendor/667294.js"));
var o = a(require("../app/156720.js"));
const l = {
  posBottom: {
    borderTopStartRadius: "bi2mdrpt",
    borderTopEndRadius: "hsk1pqkj"
  },
  posTop: {
    borderBottomStartRadius: "a0vc5f8u",
    borderBottomEndRadius: "e3yfz9gx"
  },
  wrapper: {
    borderTopStartRadius: "l8fojup5",
    borderTopEndRadius: "paxyh2gw",
    borderBottomEndRadius: "sfeitywo",
    borderBottomStartRadius: "cqsf3vkf",
    cursor: "ajgl1lbb",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    textDecoration: "aja0x350",
    width: "ln8gz9je"
  },
  wrapperIn: {
    backgroundColor: "rrq4r3yd"
  },
  wrapperOut: {
    backgroundColor: "s0eflmyh"
  }
};