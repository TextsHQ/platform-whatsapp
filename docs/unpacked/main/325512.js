var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    options: t,
    explanation: n,
    onSelect: a
  } = e;
  const [d, p] = (0, s.useState)(e.initialValue);
  const m = t.map(e => {
    let {
      value: t,
      label: n,
      secondaryLabel: a
    } = e;
    return s.default.createElement("li", {
      key: `setting-${t}`
    }, s.default.createElement(l.RadioWithLabel, {
      tabIndex: "0",
      name: "settings",
      value: t,
      label: n,
      checked: t === d,
      onChange: () => (e => {
        p(e);
      })(t),
      secondaryLabel: a
    }));
  });
  return s.default.createElement(r.ConfirmPopup, {
    title: e.title,
    okText: u.fbt._("Confirm", null, {
      hk: "3tmGp3"
    }),
    onOK: () => {
      if (d != null) {
        a(d);
      }
    },
    onCancel: () => {
      o.ModalManager.close();
    },
    testid: "settings-popup"
  }, n != null ? s.default.createElement(i.TextDiv, {
    theme: "muted",
    className: (0, c.default)(f)
  }, n) : null, s.default.createElement("form", null, s.default.createElement("ol", null, m)));
};
var r = require("../app/103440.js");
var o = require("../app/114850.js");
var l = require("./695431.js");
var i = require("../app/180519.js");
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
var c = a(require("../app/156720.js"));
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
  marginBottom: "gdaqao4w"
};