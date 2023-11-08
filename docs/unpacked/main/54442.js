var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  var t;
  let {
    onMouseDown: n,
    onMouseUp: a,
    onMouseEnter: p,
    selected: m,
    onDismiss: h
  } = e;
  const g = r.BotProfileCollection.getDefaultBot();
  return c.default.createElement("div", {
    className: (0, d.default)(f.container, m === true && f.selected),
    onMouseDown: n,
    onMouseUp: a,
    onMouseEnter: p
  }, c.default.createElement("div", {
    className: (0, d.default)(f.item, f.icon)
  }, g != null ? c.default.createElement(l.DetailImage, {
    id: g.id,
    size: 32
  }) : c.default.createElement(o.DefaultUserColorIcon, {
    width: 32,
    height: 32
  })), c.default.createElement("div", {
    className: (0, d.default)(f.item, f.text, i.uiMargin.horiz10)
  }, (t = g == null ? undefined : g.name) !== null && t !== undefined ? t : s.fbt._("Meta AI", null, {
    hk: "1UOQCU"
  })), c.default.createElement("div", {
    className: (0, d.default)(f.item, f.subtext, i.uiMargin.horiz10)
  }, s.fbt._("You can mention the assistant to ask a question", null, {
    hk: "25TFni"
  })), c.default.createElement("div", {
    className: (0, d.default)(f.item, f.closeButton),
    onClick: h
  }, c.default.createElement(u.XViewerIcon, {
    iconXstyle: f.closeIcon,
    width: 16,
    height: 16
  })));
};
var r = require("../app/169437.js");
var o = require("../app/650613.js");
var l = require("../app/23641.js");
var i = require("../app/676345.js");
var u = require("./776770.js");
var s = require("../vendor/548360.js");
var c = a(require("../vendor/667294.js"));
var d = a(require("../app/156720.js"));
const f = {
  container: {
    display: "p357zi0d",
    justifyContent: "o4u7okr9",
    alignItems: "gndfcl4n",
    paddingTop: "emrlamx0",
    paddingEnd: "igb3k0ri",
    paddingBottom: "aiput80m",
    paddingStart: "nntdgyy8"
  },
  selected: {
    backgroundColor: "s2x71smj"
  },
  item: {
    flexShrink: "m0h2a7mj",
    flexBasis: "rjo8vgbg"
  },
  icon: {
    flexGrow: "tvf2evcx",
    flexBasis: "bdry0rae"
  },
  text: {
    flexGrow: "tvf2evcx",
    flexBasis: "bt7ly48i",
    display: "p357zi0d",
    alignItems: "r15c9g6i",
    fontSize: "ovllcyds"
  },
  subtext: {
    flexGrow: "ggj6brxn",
    display: "p357zi0d",
    alignItems: "r15c9g6i",
    color: "amgz1mtg",
    fontSize: "dsh4tgtl"
  },
  closeButton: {
    flexGrow: "tvf2evcx",
    flexBasis: "rjo8vgbg",
    cursor: "ajgl1lbb"
  },
  closeIcon: {
    color: "s4k44ver"
  }
};