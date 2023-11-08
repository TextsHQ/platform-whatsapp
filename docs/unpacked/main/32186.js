var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    children: t,
    displayType: n,
    hideCaption: a = false,
    hideMeta: v = false,
    msg: _,
    quotedMsg: y,
    showAuthor: C = false,
    trusted: b
  } = e;
  const [M, S, T, w, A, P, O, k] = (0, g.useMsgValues)(_.id, [d.getCaption, l.getDir, d.getFooter, d.getIsFromTemplate, l.getRtl, l.getSenderObj, d.getSupportsMessageFooter, d.getType]);
  const D = C;
  const I = !a && Boolean(M);
  const R = (0, f.showForwarded)(_);
  return m.default.createElement(m.default.Fragment, null, D ? m.default.createElement("div", {
    className: (0, h.default)(E.author, p.uiPadding.horiz6, p.uiPadding.bottom5, R && p.uiPadding.bottom0)
  }, m.default.createElement(i.default, {
    msg: _,
    contact: P,
    displayType: n
  })) : null, R ? m.default.createElement(s.default, {
    msg: _.unsafe(),
    className: (0, h.default)(E.forwardedIndicator, p.uiPadding.end0, p.uiPadding.bottom3, p.uiPadding.start6, D && p.uiPadding.top0)
  }) : null, y != null ? m.default.createElement("div", {
    className: (0, h.default)(E.quote)
  }, y) : null, t, I ? m.default.createElement("div", {
    className: (0, h.default)(E.caption, p.uiPadding.top7, p.uiPadding.end4, p.uiPadding.bottom5, p.uiPadding.start6)
  }, m.default.createElement(u.default, {
    msg: _.unsafe(),
    trusted: b,
    spacer: !T
  })) : null, O ? m.default.createElement(r.default, {
    dir: S,
    footer: T,
    isShown: O,
    msg: _.unsafe(),
    rtl: A,
    type: k,
    trusted: b
  }) : null, !v && m.default.createElement("div", {
    className: (0, h.default)(E.meta, I && E.hasCaption)
  }, m.default.createElement(c.Meta, {
    msg: _,
    displayType: n,
    theme: n === o.DISPLAY_TYPE.GALLERY ? "date" : undefined
  })));
};
var r = a(require("./339435.js"));
var o = require("../app/356097.js");
var l = require("../app/163755.js");
var i = a(require("./599664.js"));
var u = a(require("./371878.js"));
var s = a(require("./428759.js"));
var c = require("./789955.js");
var d = require("../app/787742.js");
var f = require("./192071.js");
var p = require("../app/676345.js");
var m = a(require("../vendor/667294.js"));
var h = a(require("../app/156720.js"));
var g = require("./871210.js");
const E = {
  author: {
    paddingTop: "lna84pfr"
  },
  caption: {
    boxSizing: "cm280p3y",
    maxWidth: "bkoknyjm"
  },
  forwardedIndicator: {
    paddingTop: "lna84pfr"
  },
  meta: {
    position: "lhggkp7q",
    right: "ou6eaia9",
    bottom: "qw4steeu"
  },
  hasCaption: {
    right: "ou6eaia9",
    bottom: "lrw9n60e"
  },
  quote: {
    marginBottom: "ifxfi727"
  }
};