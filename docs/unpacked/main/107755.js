var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconSectionTheme = exports.IconSection = undefined;
var r = require("../app/690495.js");
var o = require("./334672.js");
var l = require("../app/572946.js");
var i = a(require("../app/397778.js"));
var u = require("../app/676345.js");
var s = require("../vendor/548360.js");
var c = a(require("../vendor/667294.js"));
a(require("../app/156720.js"));
const d = {
  editPencil: {
    color: "cs9t9or5"
  },
  sectionPrimaryIcon: {
    flexShrink: "oq44ahr5",
    width: "i94gqilv",
    color: "s4k44ver"
  },
  sectionPrimaryIconSvg: {
    width: "i94gqilv",
    height: "bmot90v7"
  },
  sectionMain: {
    flexGrow: "ggj6brxn",
    flexBasis: "rjo8vgbg",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    lineHeight: "jgi8eev7"
  },
  sectionEmptyText: {
    fontSize: "fe5nidar",
    color: "t35qvd06"
  },
  fontSmoothing: {
    "-webkit-font-smoothing": "kh4n4d4z",
    "-moz-osx-font-smoothing": "tt14wmjx"
  },
  disabled: {
    color: "b40j3n3c"
  }
};
const f = require("../vendor/76672.js")({
  SmallMargin: "small-margin",
  NoMargin: "no-margin",
  NoMarginSmallGutter: "no-margin-small-gutter"
});
exports.IconSectionTheme = f;
exports.IconSection = e => {
  let {
    Icon: t,
    xstyle: n,
    svgXstyle: a,
    content: p,
    onEdit: m,
    type: h = "field",
    emptyText: g,
    theme: E,
    fieldName: v,
    disabled: _
  } = e;
  const y = m ? c.default.createElement("div", null, c.default.createElement(i.default, {
    Icon: o.PencilIcon,
    xstyle: d.editPencil,
    directional: true,
    onClick: m,
    "aria-label": s.fbt._("Click to edit {fieldName}", [s.fbt._param("fieldName", v)], {
      hk: "Wjo4r"
    })
  })) : undefined;
  const C = Boolean(g && !p);
  const b = C ? g : p;
  const M = t ? c.default.createElement(t, {
    iconXstyle: [d.sectionPrimaryIconSvg, a]
  }) : null;
  return c.default.createElement(r.FlexRow, {
    xstyle: [u.uiMargin.top32, E === f.SmallMargin && u.uiMargin.top16, (E === f.NoMargin || E === f.NoMarginSmallGutter) && u.uiMargin.top0]
  }, c.default.createElement(r.FlexItem, {
    xstyle: [d.sectionPrimaryIcon, u.uiMargin.end28, h === "field" && u.uiMargin.top6, E === f.NoMarginSmallGutter && u.uiMargin.end7, n]
  }, M), c.default.createElement(r.FlexItem, {
    xstyle: [d.sectionMain, u.uiPadding.end2, h === "container" && u.uiMargin.top4, C && d.sectionEmptyText, C && l.isOSMac && d.fontSmoothing, _ === true && d.disabled]
  }, b), y);
};