var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const [t, n] = (0, g.useState)(null);
  const a = () => {
    d.ModalManager.close();
  };
  const i = e.msg.list;
  if (!i) {
    return null;
  }
  const s = () => {
    if (t) {
      (0, m.default)(e.msg, t);
      a();
    }
  };
  let E;
  if (t) {
    E = g.default.createElement("div", {
      className: u.default.controlsSummary
    }, t.title, g.default.createElement("div", {
      className: u.default.btnActive
    }, g.default.createElement(f.Round, {
      large: true,
      onClick: s
    }, g.default.createElement(p.SendIcon, {
      directional: true
    }))));
  }
  return g.default.createElement(c.Modal, {
    type: c.ModalTheme.Tower
  }, g.default.createElement(r.default, {
    theme: "products"
  }, g.default.createElement(l.DrawerHeader, {
    title: i.buttonText,
    type: l.DRAWER_HEADER_TYPE.POPUP,
    onCancel: a
  }), g.default.createElement(o.default, {
    theme: "padding"
  }, g.default.createElement(v, {
    list: i,
    onSelect: e => {
      n(e);
    },
    selected: t
  })), g.default.createElement(h.default, {
    transitionName: "slide-up-down-footer",
    className: u.default.container
  }, E)));
};
var r = a(require("./908081.js"));
var o = a(require("./324093.js"));
var l = require("./626194.js");
var i = a(require("./969358.js"));
var u = a(require("./938773.js"));
var s = a(require("./311506.js"));
var c = require("../app/118612.js");
var d = require("../app/114850.js");
var f = require("./435595.js");
var p = require("./848605.js");
var m = a(require("./331711.js"));
var h = a(require("../app/844453.js"));
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
function v(e) {
  let {
    list: t,
    onSelect: n,
    selected: a
  } = e;
  return t.sections.map((e, t) => g.default.createElement(i.default, {
    title: e.title,
    key: t,
    theme: "list-section",
    shadow: false
  }, e.rows.map((e, t) => g.default.createElement(s.default, {
    key: t,
    row: e,
    onSelect: n.bind(null, e),
    selected: e === a
  }))));
}