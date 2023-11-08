var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("./743840.js");
var o = require("./855268.js");
var l = require("./468878.js");
var i = require("../vendor/548360.js");
var u = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = c(t);
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
var s = a(require("./265817.js"));
function c(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (c = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function d(e, t) {
  const n = (0, s.default)(t);
  const a = {
    [r.SECTIONS.RECENT]: i.fbt._("Recent", null, {
      hk: "mC0w6"
    }),
    [r.SECTIONS.RECENT_REACTIONS]: i.fbt._("Recent Reactions", null, {
      hk: "gDOTW"
    }),
    [r.SECTIONS.SMILEYS_PEOPLE]: i.fbt._("Smileys & People", null, {
      hk: "15kkb2"
    }),
    [r.SECTIONS.ANIMALS_NATURE]: i.fbt._("Animals & Nature", null, {
      hk: "2YsDed"
    }),
    [r.SECTIONS.FOOD_DRINK]: i.fbt._("Food & Drink", null, {
      hk: "1Xtk7P"
    }),
    [r.SECTIONS.ACTIVITY]: i.fbt._("Activity", null, {
      hk: "242snN"
    }),
    [r.SECTIONS.TRAVEL_PLACES]: i.fbt._("Travel & Places", null, {
      hk: "1vozFD"
    }),
    [r.SECTIONS.OBJECTS]: i.fbt._("Objects", null, {
      hk: "2McHxt"
    }),
    [r.SECTIONS.SYMBOLS]: i.fbt._("Symbols", null, {
      hk: "1WHqbc"
    }),
    [r.SECTIONS.FLAGS]: i.fbt._("Flags", null, {
      hk: "15Xohs"
    })
  };
  const {
    sectionId: c
  } = e;
  const d = a[c];
  return u.default.createElement(l.MenuTab, {
    onClick: e.onClick,
    sectionId: c,
    selected: e.selected,
    showFocusIndicator: e.showFocusIndicator,
    theme: l.THEMES.MENU,
    title: d,
    onRef: n
  }, u.default.createElement(o.EmojiSectionIcon, {
    sectionId: c
  }));
}
var f = (0, u.forwardRef)(d);
exports.default = f;