var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LongLink = function (e) {
  var t;
  let {
    xstyle: n,
    link: r,
    children: p = "",
    selectable: _
  } = e;
  const {
    statusItemViewEventRef: g
  } = (0, c.useContext)(l.StatusV3StatusContext);
  if ((t = r.suspiciousCharacters) === null || t === undefined ? undefined : t.size) {
    return c.default.createElement(u.default, {
      className: (0, d.default)(n),
      link: r,
      selectable: _
    }, p);
  }
  return c.default.createElement(a.SelectableLink, {
    onClick: e => {
      e.preventDefault();
      s.ModalManager.open(c.default.createElement(o.LongLinkPopup, {
        link: r,
        statusItemViewEventRef: g
      }));
      i.Cmd.openLongLinkModal();
    },
    selectable: _,
    className: (0, d.default)(f, n)
  }, p);
};
var i = require("./780549.js");
var a = require("./306703.js");
var o = require("./917936.js");
var s = require("./114850.js");
var l = require("./547821.js");
var u = r(require("./68420.js"));
var c = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = p(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var r = {};
  var i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e) {
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
      if (o && (o.get || o.set)) {
        Object.defineProperty(r, a, o);
      } else {
        r[a] = e[a];
      }
    }
  }
  r.default = e;
  if (n) {
    n.set(e, r);
  }
  return r;
}(require("../vendor/667294.js"));
var d = r(require("./156720.js"));
function p(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (p = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const f = {
  cursor: "ajgl1lbb"
};