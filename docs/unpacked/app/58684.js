var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const t = (0, p.useContext)(l.default);
  const n = (0, p.useContext)(d.default);
  let r = p.default.createElement(a.default, e);
  if ((0, u.isDropLastNameEnabled)() && t) {
    r = p.default.createElement(c.default, (0, i.default)({}, e, {
      groupMetadata: t
    }));
  }
  if ((0, u.messageListA11yRedesignEnabled)() && n === s.DISPLAY_TYPE.CONVERSATION) {
    return p.default.createElement(o.Clickable, {
      as: "span",
      onClick: e.onClick
    }, r);
  }
  if (n === s.DISPLAY_TYPE.EDITING) {
    return p.default.createElement("span", {
      className: (0, f.default)(g)
    }, r);
  }
  return r;
};
var i = r(require("../vendor/967154.js"));
var a = r(require("./386481.js"));
var o = require("./950987.js");
var s = require("./356097.js");
var l = r(require("./462824.js"));
var u = require("./97858.js");
var c = r(require("./818524.js"));
var d = r(require("./328861.js"));
var p = function (e, t) {
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
var f = r(require("./156720.js"));
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
const g = {
  color: "o0rubyzf"
};