var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  (0, g.useEffect)(() => {
    (0, c.setIsCommandPaletteOpen)(true);
    return () => {
      (0, c.setIsCommandPaletteOpen)(false);
    };
  }, []);
  (0, E.useListener)(i.Cmd, "close_command_palette", () => m.ModalManager.close());
  return g.default.createElement(p.Modal, {
    type: p.ModalTheme.CommandPalette
  }, (0, r.getABPropConfigValue)("web_command_palette_plugins") ? g.default.createElement(_, null) : g.default.createElement(o.ChatlistPanel, {
    settings: h.default,
    mode: l.default.CommandPalette
  }));
};
var r = require("../app/287461.js");
var o = require("./793458.js");
var l = a(require("../main-chunk/638938.js"));
var i = require("../app/780549.js");
var u = require("./58874.js");
var s = require("./324688.js");
var c = require("./636149.js");
var d = require("./806828.js");
var f = require("./928830.js");
var p = require("../app/118612.js");
var m = require("../app/114850.js");
var h = a(require("../app/634152.js"));
var g = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = v(t);
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
var E = require("../app/808446.js");
function v(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (v = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function _() {
  const e = (0, s.getAvailablePlugins)();
  const t = (0, f.buildHelpCommand)(e);
  return g.default.createElement(u.CommandPalette, {
    defaultPlugin: d.DefaultCommandPalettePlugin,
    triggeredPlugins: [...e, t]
  });
}