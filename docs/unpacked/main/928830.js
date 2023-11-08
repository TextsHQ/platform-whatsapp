var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildHelpCommand = function (e) {
  return {
    plugin: {
      id: "HelpCommandPalettePlugin",
      placeholder: "Search extra command palette functionality",
      shortName: "?",
      Component: () => {
        const t = (0, r.useCommandPalette)();
        return c.default.createElement(i.LexicalWDSMenu, null, e.map(e => e.doc != null ? c.default.createElement(s.ActionMenuItem, {
          key: e.plugin.id,
          optionId: e.plugin.id,
          detailRight: c.default.createElement(f, {
            trigger: e.trigger
          }),
          primary: e.doc.isDevOnly === true ? c.default.createElement(o.DevOnlyBadge, {
            label: e.doc.name
          }) : e.doc.name,
          secondary: e.doc.description,
          onSelect: () => t.replaceStack(e.plugin)
        }) : null).filter(Boolean));
      }
    },
    trigger: ["/?", "/help"],
    doc: {
      name: "Help",
      description: "Discover all of the things the Command Palette can do"
    }
  };
};
var r = require("./58874.js");
var o = require("./807078.js");
var l = require("../app/690495.js");
var i = require("./854335.js");
var u = require("./589332.js");
var s = require("./752104.js");
var c = a(require("../vendor/667294.js"));
a(require("../app/156720.js"));
const d = {
  trigger: {
    backgroundColor: "ovhn1urg",
    color: "tviruh8d",
    borderTopStartRadius: "bbr44loe",
    borderTopEndRadius: "ooj5yc5b",
    borderBottomEndRadius: "m8i16etx",
    borderBottomStartRadius: "cw0ivh8j"
  }
};
function f(e) {
  let {
    trigger: t
  } = e;
  const n = (0, u.toArray)(t);
  return c.default.createElement(l.FlexRow, {
    justify: "center",
    align: "center",
    padding: 8,
    xstyle: d.trigger
  }, n[0]);
}