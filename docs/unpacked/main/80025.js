var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    onSelect: t,
    vcard: n
  } = e;
  const a = (0, g.useMemo)(() => {
    const a = e => {
      t(e);
    };
    return (0, r.default)(n.TEL, e => e.properties.waid).map(t => {
      const n = (0, p.createUserWid)(t.properties.waid[0]);
      let r = e.icon;
      if (r) {
        r = g.default.createElement(c.default, {
          onClick: e => {
            ((e, t) => {
              e.stopPropagation();
              a(t);
            })(e, n);
          }
        }, r);
      }
      return g.default.createElement("div", {
        className: f.default.container,
        key: `vCard-${t.value}`
      }, g.default.createElement(u.default, {
        title: (0, m.widToFormattedUser)(n),
        onClick: () => a(n),
        isLastItem: true,
        icon: r
      }, (0, d.vcardGetType)(t)));
    });
  }, [n.TEL, t, e.icon]);
  return g.default.createElement(s.Modal, {
    type: s.ModalTheme.Box
  }, g.default.createElement(o.default, null, g.default.createElement(i.DrawerHeader, {
    onCancel: e.onCancel,
    type: i.DRAWER_HEADER_TYPE.POPUP,
    title: h.fbt._("Choose a phone number", null, {
      hk: "2Mbr64"
    })
  }), g.default.createElement(l.default, null, a)));
};
var r = a(require("../vendor/763105.js"));
var o = a(require("./908081.js"));
var l = a(require("./324093.js"));
var i = require("./626194.js");
var u = a(require("./674905.js"));
var s = require("../app/118612.js");
var c = a(require("../app/625903.js"));
var d = require("../app/105284.js");
var f = a(require("./261594.js"));
var p = require("../app/669050.js");
var m = require("../app/931019.js");
var h = require("../vendor/548360.js");
var g = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = E(t);
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
function E(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (E = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}