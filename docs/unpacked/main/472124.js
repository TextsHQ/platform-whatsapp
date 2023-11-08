var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("./355186.js");
var o = require("./86581.js");
var l = require("./833654.js");
var i = require("./468878.js");
var u = require("../vendor/548360.js");
var s = function (e, t) {
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
var c = a(require("./265817.js"));
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
function f(e, t) {
  const n = (0, c.default)(t);
  const a = {
    [r.SECTIONS.FAVORITES]: u.fbt._("Favorites", null, {
      hk: "1DfDuo"
    }),
    [r.SECTIONS.TRENDING]: u.fbt._("Trending", null, {
      hk: "1wdavV"
    }),
    [r.SECTIONS.HAHA]: u.fbt._("Haha", null, {
      hk: "4B9bsP"
    }),
    [r.SECTIONS.SAD]: u.fbt._("Sad", null, {
      hk: "FWLcO"
    }),
    [r.SECTIONS.LOVE]: u.fbt._("Love", null, {
      hk: "2FLkDv"
    }),
    [r.SECTIONS.REACTIONS]: u.fbt._("Reactions", null, {
      hk: "pMe2Q"
    }),
    [r.SECTIONS.SPORTS]: u.fbt._("Sports", null, {
      hk: "4vNqmf"
    }),
    [r.SECTIONS.TV]: u.fbt._("TV", null, {
      hk: "Sinst"
    })
  };
  const {
    sectionId: d
  } = e;
  const f = a[d];
  return s.default.createElement(i.MenuTab, {
    onClick: e.onClick,
    sectionId: d,
    selected: e.selected,
    showFocusIndicator: e.showFocusIndicator,
    title: f,
    theme: i.THEMES.MENU,
    onRef: n
  }, s.default.createElement(o.GifSectionIcon, {
    sectionId: d,
    sectionTitle: f,
    theme: e.displayLocation === l.DisplayLocation.ExpressionsPanel ? o.GifPanelMenuSectionIconTheme.EXPRESSION_PANELS : undefined
  }));
}
var p = (0, s.forwardRef)(f);
exports.default = p;