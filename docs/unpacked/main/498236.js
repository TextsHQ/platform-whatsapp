var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AttachMenuPopupItem = function (e) {
  const {
    action: t,
    testid: n,
    icon: a,
    text: d,
    children: f,
    showcase: p = false
  } = e;
  return u.default.createElement("div", {
    className: (0, s.default)(i.uiMargin.horiz8)
  }, u.default.createElement(r.DropdownItem, {
    testid: n,
    action: t,
    type: "attach-menu-popup"
  }, u.default.createElement(o.FlexRow, {
    align: "center",
    xstyle: [c.container, i.uiMargin.start8, i.uiMargin.end32]
  }, u.default.createElement(o.FlexRow, {
    justify: "center",
    xstyle: [c.icon, i.uiMargin.end12]
  }, a), u.default.createElement("span", {
    className: (0, s.default)(c.text)
  }, d), f, p ? u.default.createElement("div", {
    className: (0, s.default)(i.uiMargin.start8)
  }, u.default.createElement(l.Tag, {
    theme: l.TagTheme.Pill
  }, u.default.createElement("span", null, "New"))) : undefined)));
};
var r = require("../app/675085.js");
var o = require("../app/690495.js");
var l = require("./533426.js");
var i = require("../app/676345.js");
var u = a(require("../vendor/667294.js"));
var s = a(require("../app/156720.js"));
const c = {
  container: {
    cursor: "ajgl1lbb",
    height: "lniyxyh2"
  },
  icon: {
    minWidth: "tw2komxm"
  },
  text: {
    lineHeight: "erpdyial",
    color: "tviruh8d",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    textOverflow: "lhj4utae",
    whiteSpace: "le5p0ye3"
  }
};