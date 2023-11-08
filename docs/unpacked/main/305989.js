var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonType = undefined;
exports.ChevronButton = function (e) {
  let {
    type: t,
    onClick: n,
    onKeyDown: a,
    disabled: r,
    theme: o,
    overMedia: i,
    displayType: m
  } = e;
  const h = d[t];
  const g = f[t];
  return u.default.createElement(l.Round, {
    xstyle: [m === c.BotPluginCarousel ? p.btn : p.botPluginCarouselBtn, t === s.Prev && p.btnMediaPrev, t === s.Next && p.btnMediaNext, r === true ? p.disabledBtn : p.backgroundColorBtn, i === true && p.overMedia],
    onClick: r ? null : n,
    onKeyDown: a,
    label: h,
    theme: o,
    disabled: r
  }, u.default.createElement(g, {
    title: h,
    directional: true
  }));
};
exports.ChevronButtonDisplayType = undefined;
var r = require("./958548.js");
var o = require("./397454.js");
var l = require("./435595.js");
var i = require("../vendor/548360.js");
var u = a(require("../vendor/667294.js"));
a(require("../app/156720.js"));
const s = require("../vendor/76672.js").Mirrored(["Prev", "Next"]);
exports.ButtonType = s;
const c = require("../vendor/76672.js").Mirrored(["BotPluginCarousel"]);
exports.ChevronButtonDisplayType = c;
const d = {
  Prev: i.fbt._("Previous", null, {
    hk: "CWHWD"
  }),
  Next: i.fbt._("Next", null, {
    hk: "3T6xBX"
  })
};
const f = {
  Prev: r.ChevronLeftIcon,
  Next: o.ChevronRightIcon
};
const p = {
  btn: {
    position: "lhggkp7q",
    top: "sf5lfgas",
    zIndex: "thghmljt"
  },
  botPluginCarouselBtn: {
    position: "lhggkp7q",
    top: "ba95y10t"
  },
  overMedia: {
    backgroundColor: "helhczeo"
  },
  backgroundColorBtn: {
    backgroundColor: "f6e355lk"
  },
  btnMediaPrev: {
    start: "cheugonp"
  },
  btnMediaNext: {
    end: "citmgm7b"
  },
  disabledBtn: {
    opacity: "n791o4v8"
  }
};