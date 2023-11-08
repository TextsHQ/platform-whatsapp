var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActionLabel = function (e) {
  const t = (0, E.useModelValues)(e.action, ["id", "name", "label"]);
  const {
    onClick: n,
    searchQuery: a
  } = e;
  const [_, C] = (0, g.default)(e.active, t.id);
  const b = e => {
    n(e, (0, f.unproxy)(t));
  };
  const M = (0, v.useSearchText)(a);
  const S = s.Search({
    terms: [M]
  });
  return h.default.createElement(c.HotKeys, {
    ref: _,
    onFocus: e => {
      e.stopPropagation();
      e.preventDefault();
    },
    handlers: {
      enter: b,
      space: b
    }
  }, h.default.createElement(m.default, {
    xstyle: [y.button, C && y.active, !C && y.hover, p.uiPadding.start30],
    onClick: b
  }, h.default.createElement(i.FlexRow, {
    ref: _,
    xstyle: [y.container, p.uiPadding.end30],
    align: "center",
    justify: "all"
  }, h.default.createElement(u.default, {
    xstyle: [y.label, p.uiPadding.end10]
  }, h.default.createElement(l.EmojiText, {
    multiline: true,
    text: t.label,
    formatters: S,
    xstyle: y.text
  })), h.default.createElement("div", null, h.default.createElement(d.KeyboardShortcut, {
    action: (0, r.default)(o.Action.cast(t.name), "Action.cast(action.name)"),
    addModifiers: true
  })))));
};
var r = a(require("../app/670983.js"));
var o = require("./861620.js");
var l = require("../app/305521.js");
var i = require("../app/690495.js");
var u = a(require("../app/469733.js"));
var s = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = _(t);
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
var c = require("../app/81644.js");
var d = require("./324077.js");
var f = require("../app/163139.js");
var p = require("../app/676345.js");
var m = a(require("../app/625903.js"));
var h = a(require("../vendor/667294.js"));
a(require("../app/156720.js"));
var g = a(require("../main-chunk/928361.js"));
var E = require("../app/655241.js");
var v = require("./388364.js");
function _(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (_ = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const y = {
  button: {
    width: "ln8gz9je",
    backgroundColor: "ihvf49ua"
  },
  hover: {
    ":hover": {
      backgroundColor: "os03hap6"
    }
  },
  active: {
    backgroundColor: "i16jpgpt"
  },
  container: {
    height: "m0jbzij3",
    marginTop: "tt8xd2xn",
    marginEnd: "jnwc1y2a",
    marginBottom: "mpdn4nr2",
    marginStart: "svoq16ka",
    borderTop: "swyb62mu"
  },
  text: {
    fontSize: "f8jlpxt4"
  },
  label: {
    textAlign: "ljrqcn24"
  }
};