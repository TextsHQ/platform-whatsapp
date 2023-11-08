var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    children: t,
    href: n,
    onClick: r,
    title: d,
    className: p,
    tabIndex: f,
    xstyle: _
  } = e;
  const g = function () {
    var e = (0, a.default)(function* (e) {
      if (!(n != null && (e.metaKey || e.altKey))) {
        e.preventDefault();
        yield r(e);
      }
    });
    return function () {
      return e.apply(this, arguments);
    };
  }();
  const [m, h] = (0, u.default)(r);
  return s.default.createElement("a", (0, i.default)({}, h, {
    ref: m,
    className: (0, o.classnamesConvertMeToStylexPlease)(p, (0, l.default)(c), (0, l.default)(_)),
    href: n != null ? n : undefined,
    onClick: g,
    role: "button",
    rel: "noreferrer noopener",
    target: "_blank",
    title: d,
    tabIndex: f != null ? f : undefined,
    "data-tab": e["data-tab"]
  }), t);
};
var i = r(require("../vendor/967154.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./396574.js");
var s = r(require("../vendor/667294.js"));
var l = r(require("./156720.js"));
var u = r(require("./83233.js"));
const c = {
  cursor: "ajgl1lbb"
};