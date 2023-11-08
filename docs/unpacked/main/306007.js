var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    icon: t,
    title: n,
    secondaryTitle: a,
    side: h,
    xstyle: g,
    spaced: E = false
  } = e;
  let v = (0, o.default)(e, p);
  const _ = d.default.createElement(u.FlexRow, {
    xstyle: m.iconContainer,
    align: "center",
    justify: "center"
  }, t);
  let y = h != null ? h : "";
  if (y === "chevron") {
    y = d.default.createElement(i.ChevronRightAltIcon, {
      color: s.SvgColorProp.SECONDARY,
      directional: true
    });
  }
  return d.default.createElement(l.default, (0, r.default)({
    xstyle: g
  }, v, {
    multiline: true
  }), d.default.createElement("div", {
    className: (0, f.default)(E && c.uiMargin.horiz30)
  }, d.default.createElement(u.FlexRow, {
    align: "center",
    justify: "start"
  }, _, d.default.createElement("div", {
    className: (0, f.default)(m.content)
  }, n), d.default.createElement(u.FlexRow, {
    align: "center",
    justify: "end",
    xstyle: m.drawerSide
  }, y)), d.default.createElement("div", {
    className: (0, f.default)(m.secondaryTitleContainer)
  }, a)));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = a(require("./355858.js"));
var i = require("./755782.js");
var u = require("../app/690495.js");
var s = require("../app/220584.js");
var c = require("../app/676345.js");
var d = a(require("../vendor/667294.js"));
var f = a(require("../app/156720.js"));
const p = ["icon", "title", "secondaryTitle", "side", "xstyle", "spaced"];
const m = {
  iconContainer: {
    marginEnd: "bugiwsl0",
    width: "qssinsw9",
    height: "bmot90v7",
    flexGrow: "tvf2evcx",
    flexShrink: "oq44ahr5"
  },
  content: {
    flexGrow: "ggj6brxn",
    flexShrink: "m0h2a7mj",
    minWidth: "ktfrpxia",
    overflowWrap: "fd365im1",
    lineHeight: "tkq7s68q"
  },
  drawerSide: {
    flexGrow: "tvf2evcx",
    flexShrink: "oq44ahr5",
    width: "baeo9xnf"
  },
  secondaryTitleContainer: {
    marginStart: "oybqnh0n",
    marginEnd: "lfum0007"
  }
};