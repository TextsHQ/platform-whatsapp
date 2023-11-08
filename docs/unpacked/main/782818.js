var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThemeCommandPalettePlugin = undefined;
var r = require("./58874.js");
var o = require("./854335.js");
var l = require("./55160.js");
var i = a(require("../app/614495.js"));
var u = require("../app/667738.js");
var s = require("./752104.js");
var c = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = d(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var a = {};
  var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e) {
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
      if (l && (l.get || l.set)) {
        Object.defineProperty(a, o, l);
      } else {
        a[o] = e[o];
      }
    }
  }
  a.default = e;
  if (n) {
    n.set(e, a);
  }
  return a;
}(require("../vendor/667294.js"));
function d(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (d = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const f = {
  plugin: {
    id: "ThemeCommandPalettePlugin",
    placeholder: "Choose a theme",
    shortName: c.default.createElement(l.SettingsThemeIcon, {
      width: 16,
      height: 16
    }),
    Component: function () {
      const e = (0, r.useCommandPalette)();
      const t = (0, c.useContext)(u.ThemeContext);
      const n = t.systemThemeMode ? "system" : t.theme;
      const a = n => {
        if (n === "system") {
          t.setSystemThemeMode(true);
          t.setTheme(i.default.getCurrentTheme());
        } else {
          t.setSystemThemeMode(false);
          t.setTheme(n);
        }
        e.closeModal();
      };
      const l = c.default.createElement(s.SelectMenuItem, {
        key: "dark",
        optionId: "dark",
        primary: "Dark",
        onSelect: () => a("dark")
      });
      const d = c.default.createElement(s.SelectMenuItem, {
        key: "light",
        optionId: "light",
        primary: "Light",
        onSelect: () => a("light")
      });
      const f = c.default.createElement(s.SelectMenuItem, {
        key: "system",
        optionId: "system",
        primary: "System",
        onSelect: () => a("system")
      });
      let p = [];
      p = t.theme === "light" ? [l, d, f] : [d, l, f];
      return c.default.createElement(o.LexicalWDSMenu, {
        forceSelection: true
      }, c.default.createElement(s.SelectMenuItemGroup, {
        initialSelection: n
      }, p.map(e => e)));
    }
  },
  trigger: "/theme",
  doc: {
    name: "App Theme",
    description: "Switch between the light and dark themes"
  }
};
exports.ThemeCommandPalettePlugin = f;