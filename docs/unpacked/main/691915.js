var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommandPaletteInput = function () {
  var e;
  const t = (0, l.useCommandPalette)();
  const n = t.activePlugin;
  const a = (e = n == null ? undefined : n.placeholder) !== null && e !== undefined ? e : "Search chats, messages, settings, and more";
  const h = t.pluginStack.length ? f.default.createElement("div", {
    className: (0, p.default)([m.prefixes])
  }, t.pluginStack.filter(e => e.plugin.shortName).map(e => f.default.createElement("div", {
    className: (0, p.default)([m.prefix, d.uiMargin.start8]),
    key: e.plugin.id
  }, f.default.createElement("div", {
    className: (0, p.default)(m.prefixName)
  }, e.plugin.shortName), f.default.createElement("div", {
    className: (0, p.default)([m.prefixSeparator, d.uiPadding.start8])
  }, "/")))) : null;
  return f.default.createElement(i.FlexRow, {
    align: "center",
    padding: [8, 16],
    xstyle: m.container
  }, h == null ? f.default.createElement(c.SearchIcon, null) : h, f.default.createElement(i.FlexRow, {
    grow: 1,
    xstyle: m.relative,
    marginStart: 8
  }, f.default.createElement(o.PlainTextPlugin, {
    contentEditable: f.default.createElement(s.ContentEditable, {
      xstyle: [m.contentEditable, d.uiMargin.start4],
      focusOnMount: true
    }),
    ErrorBoundary: r.default,
    placeholder: f.default.createElement(s.Placeholder, {
      text: a
    })
  })), f.default.createElement(u.MultilinePlugin, {
    multiline: false
  }));
};
var r = a(require("../main-chunk/284014.js"));
var o = require("../main-chunk/728684.js");
var l = require("./58874.js");
var i = require("../app/690495.js");
var u = require("../main-chunk/71881.js");
var s = require("../main-chunk/654761.js");
var c = require("../main-chunk/447514.js");
var d = require("../app/676345.js");
var f = a(require("../vendor/667294.js"));
var p = a(require("../app/156720.js"));
const m = {
  container: {
    height: "m3o1wsh7",
    boxSizing: "cm280p3y"
  },
  relative: {
    position: "g0rxnol2"
  },
  contentEditable: {
    width: "ln8gz9je"
  },
  prefixes: {
    display: "p357zi0d",
    flexDirection: "sap93d0t",
    alignItems: "gndfcl4n"
  },
  prefix: {
    display: "p357zi0d",
    alignItems: "gndfcl4n",
    color: "erxeyybf"
  },
  prefixName: {
    maxWidth: "p6nsn9ca",
    textOverflow: "lhj4utae",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    whiteSpace: "le5p0ye3"
  },
  prefixSeparator: {
    display: "p357zi0d",
    fontWeight: "wvgvrgjz"
  }
};