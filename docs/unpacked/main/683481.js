var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DebugCommandLabel = function (e) {
  const t = (0, m.useModelValues)(e.debugCommand, ["id", "name", "doc"]);
  const {
    onClick: n
  } = e;
  const [a, g] = (0, p.default)(e.active, t.id);
  const E = e => {
    n(e, (0, s.unproxy)(t));
  };
  return f.default.createElement(u.HotKeys, {
    ref: a,
    onFocus: e => {
      e.stopPropagation();
      e.preventDefault();
    },
    handlers: {
      enter: E,
      space: E
    }
  }, f.default.createElement(d.default, {
    xstyle: [h.button, c.uiPadding.start30, g && h.active, !g && h.inactive],
    testid: `li-${t.id}`,
    onClick: E
  }, f.default.createElement(o.FlexColumn, {
    justify: "center",
    align: "stretch",
    xstyle: [h.container, c.uiPadding.end30]
  }, f.default.createElement(l.default, null, f.default.createElement(i.HighlightedText, {
    text: t.name,
    xstyle: [h.name, c.uiPadding.bottom5],
    searchQuery: e.searchQuery
  })), f.default.createElement(l.default, null, f.default.createElement(r.EmojiText, {
    xstyle: h.doc,
    text: t.doc,
    ellipsify: true
  })))));
};
var r = require("../app/305521.js");
var o = require("../app/690495.js");
var l = a(require("../app/469733.js"));
var i = require("./180996.js");
var u = require("../app/81644.js");
var s = require("../app/163139.js");
var c = require("../app/676345.js");
var d = a(require("../app/625903.js"));
var f = a(require("../vendor/667294.js"));
a(require("../app/156720.js"));
var p = a(require("../main-chunk/928361.js"));
var m = require("../app/655241.js");
const h = {
  button: {
    width: "ln8gz9je",
    backgroundColor: "ihvf49ua"
  },
  container: {
    height: "m0jbzij3",
    fontSize: "enbbiyaj",
    marginTop: "tt8xd2xn",
    marginEnd: "jnwc1y2a",
    marginBottom: "mpdn4nr2",
    marginStart: "svoq16ka",
    borderTop: "swyb62mu",
    textAlign: "ljrqcn24",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex"
  },
  inactive: {
    ":hover": {
      backgroundColor: "os03hap6"
    }
  },
  active: {
    backgroundColor: "i16jpgpt"
  },
  name: {
    fontSize: "enbbiyaj"
  },
  doc: {
    fontSize: "f8jlpxt4",
    lineHeight: "r5qsrrlp",
    color: "gro5s87f",
    display: "f804f6gw"
  }
};