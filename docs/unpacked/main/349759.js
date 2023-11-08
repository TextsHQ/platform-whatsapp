var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    children: t,
    shouldAnimateBubble: n,
    onAnimationEnd: a
  } = e;
  return l.default.createElement(r.FlexRow, {
    className: (0, i.default)([Boolean(n) ? u.animateBubble : u.container, o.uiMargin.horiz2]),
    ref: e => {
      if (a) {
        if (!(e == null)) {
          e.addEventListener("animationend", a);
        }
      }
    },
    align: "center",
    justify: "center"
  }, t);
};
var r = require("../app/690495.js");
var o = require("../app/676345.js");
var l = a(require("../vendor/667294.js"));
var i = a(require("../app/156720.js"));
const u = {
  container: {
    height: "bmot90v7",
    paddingTop: "i5tg98hk",
    paddingEnd: "jfqm35v0",
    paddingBottom: "przvwfww",
    paddingStart: "bdbt56hn",
    borderTopStartRadius: "r18xjin9",
    borderTopEndRadius: "pz6oj2k2",
    borderBottomEndRadius: "sa2xs5zj",
    borderBottomStartRadius: "n58sa971",
    backgroundColor: "jht8oeb6",
    boxShadow: "fahkg6u0",
    borderTop: "hcpeg58q",
    borderEnd: "p6ubcsnv",
    borderBottom: "avd5zzxf",
    borderStart: "qqik71jn"
  },
  animateBubble: {
    height: "bmot90v7",
    paddingTop: "i5tg98hk",
    paddingEnd: "jfqm35v0",
    paddingBottom: "przvwfww",
    paddingStart: "bdbt56hn",
    minWidth: "akk8kuog",
    ":before": {
      position: "oxaw94s0",
      height: "o0bwohyy",
      width: "cvxgn1dw",
      paddingTop: "r4xl2n04",
      paddingEnd: "asu8qs9d",
      paddingBottom: "c0bbmqe2",
      paddingStart: "ajr0z13z",
      borderTopStartRadius: "sa9sd5it",
      borderTopEndRadius: "pts78uye",
      borderBottomEndRadius: "lvfi4jc9",
      borderBottomStartRadius: "aa3thtin",
      zIndex: "otswzj8x",
      backgroundColor: "s24c542q",
      boxShadow: "e9cl6z7p",
      borderTop: "hwm8yfef",
      borderEnd: "e1cue241",
      borderBottom: "edpn7icu",
      borderStart: "sx64hb76",
      content: "lij4d1x3",
      animationName: "dg973b83",
      animationDuration: "grpxnwfq",
      animationTimingFunction: "f0gwgpfb",
      animationFillMode: "r1v61bue",
      backfaceVisibility: "e10y1bxp",
      willChange: "tvgeahmr"
    }
  }
};