var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const t = (0, s.showForwarded)(e.msg);
  const n = e.displayAuthor ? c.default.createElement("div", {
    className: (0, d.default)(f.author)
  }, c.default.createElement(o.default, {
    msg: e.msg,
    contact: e.msg.senderObj
  })) : null;
  const a = e.displayType === r.DISPLAY_TYPE.GALLERY || e.hideMeta ? null : c.default.createElement("div", {
    className: (0, d.default)(f.meta)
  }, c.default.createElement(i.Meta, {
    msg: e.msg
  }));
  const p = t ? c.default.createElement(l.default, {
    msg: e.msg.unsafe(),
    xstyle: f.forwardedIndicator
  }) : null;
  const m = e.quotedMsg ? c.default.createElement("div", {
    className: (0, d.default)(f.quote)
  }, e.quotedMsg) : null;
  const h = (0, d.default)(f.bubble, t && f.forwarded, e.displayAuthor && f.hasAuthor, e.hasCaption === true && f.bubbleWithCaption, (0, u.getIsPSA)(e.msg) && f.isPSA);
  return c.default.createElement("div", {
    className: h
  }, n, p, m, e.children, a);
};
var r = require("../app/356097.js");
var o = a(require("./599664.js"));
var l = a(require("./428759.js"));
var i = require("./789955.js");
var u = require("../app/787742.js");
var s = require("./192071.js");
var c = a(require("../vendor/667294.js"));
var d = a(require("../app/156720.js"));
const f = {
  bubble: {
    position: "g0rxnol2",
    boxSizing: "cm280p3y",
    width: "jeo84yz3",
    paddingTop: "gsc9792w",
    paddingEnd: "qf85nsmm",
    paddingBottom: "p45gu9p9",
    paddingStart: "ekvw3o37"
  },
  bubbleWithCaption: {
    paddingBottom: "p45gu9p9"
  },
  meta: {
    position: "lhggkp7q",
    end: "fz4q5utg",
    bottom: "lrw9n60e"
  },
  isPSA: {
    paddingBottom: "l5xxxszt"
  },
  author: {
    paddingTop: "gsc9792w",
    paddingEnd: "f9ovudaz",
    paddingBottom: "bxcbqipq",
    paddingStart: "mhcwslh8"
  },
  forwarded: {
    paddingBottom: "przvwfww"
  },
  forwardedIndicator: {
    paddingTop: "gsc9792w",
    paddingEnd: "f9ovudaz",
    paddingBottom: "aa0kojfi",
    paddingStart: "mhcwslh8"
  },
  hasAuthor: {
    paddingTop: "i5tg98hk"
  },
  quote: {
    marginBottom: "monsh5ao"
  }
};