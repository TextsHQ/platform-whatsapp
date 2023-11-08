var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Setting = function (e) {
  const {
    onClick: t,
    searchQuery: n
  } = e;
  const a = (0, f.useModelValues)(e.setting, ["id", "label"]);
  const m = (0, p.useSearchText)(n);
  const g = i.Search({
    terms: [m]
  });
  return d.default.createElement(o.DrawerButton, {
    icon: d.default.createElement(s.SettingsStepIcon, {
      setting: (0, r.default)(u.SettingsSteps.cast(a.id), "SettingsSteps.cast(setting.id)")
    }),
    id: a.id,
    active: e.active,
    onClick: e => {
      t(e, (0, c.unproxy)(a));
    },
    theme: "chatlist"
  }, d.default.createElement(l.EmojiText, {
    text: a.label,
    formatters: g,
    xstyle: h.text
  }));
};
var r = a(require("../app/670983.js"));
var o = require("./36045.js");
var l = require("../app/305521.js");
var i = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = m(t);
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
}(require("../app/675886.js"));
var u = require("./73016.js");
var s = require("./845257.js");
var c = require("../app/163139.js");
var d = a(require("../vendor/667294.js"));
a(require("../app/156720.js"));
var f = require("../app/655241.js");
var p = require("./388364.js");
function m(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (m = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const h = {
  text: {
    fontSize: "f8jlpxt4"
  }
};