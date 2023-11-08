var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    initialSelection: t,
    model: n,
    multiSelection: a,
    selectableState: s,
    theme: d,
    children: f,
    onSelect: p
  } = e;
  const [m, h] = (0, o.useState)(() => {
    switch (t) {
      case 0:
        return false;
      case 1:
      case 2:
        return true;
      default:
        return a.isSelected(n);
    }
  });
  const [g, E] = (0, o.useState)(() => t === 2);
  const v = n.id.toString();
  const [_, y] = (0, o.useState)(v);
  if (_ !== v) {
    y(v);
    h(a.isSelected(n));
  }
  const C = e => {
    if (e == null ? undefined : e.isDefaultPrevented()) {
      return;
    }
    let t;
    if (e) {
      e.stopPropagation();
    }
    if (m) {
      h(false);
      E(false);
      t = false;
    } else {
      t = true;
    }
    if (!(p == null)) {
      p(n, t, false);
    }
  };
  (0, u.useListener)(a, _, e => {
    h(e);
  });
  const b = (0, i.default)(s, "all", () => s.isSelectable);
  const M = {};
  if (b && d) {
    Object.assign(M, {
      theme: d
    });
  }
  if (b) {
    Object.assign(M, {
      noContext: true
    });
  }
  if (f == null) {
    return null;
  }
  const S = o.Children.toArray(f)[0];
  const T = d === "label-selection" ? C : null;
  return o.default.createElement("div", {
    className: (0, l.default)(c.checkboxChatWrapper),
    onClick: T
  }, b && o.default.createElement("div", {
    className: (0, l.default)(c.checkboxChatControl, d === "label-selection" && c.labelSelection),
    onClick: C
  }, o.default.createElement(r.CheckBox, {
    onChange: C,
    checked: m,
    theme: m && g ? r.CheckboxTheme.PARTIAL : undefined
  })), (0, o.cloneElement)(S, M));
};
var r = require("./468926.js");
var o = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = s(t);
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
var l = a(require("../app/156720.js"));
var i = a(require("../app/524578.js"));
var u = require("../app/808446.js");
function s(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (s = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const c = {
  checkboxChatWrapper: {
    position: "g0rxnol2"
  },
  checkboxChatControl: {
    position: "lhggkp7q",
    start: "edqan5gp",
    zIndex: "cv1ohgtz",
    display: "p357zi0d",
    alignItems: "gndfcl4n",
    width: "b6qzmhfs",
    height: "ppled2lx"
  },
  labelSelection: {
    end: "druapeav",
    start: "rkwf9n1l",
    width: "gofbmt1g"
  }
};