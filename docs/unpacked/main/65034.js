var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SettingsSecurityIcon = function (e) {
  var t;
  const {
    iconXstyle: n,
    height: a,
    width: c,
    viewBox: d
  } = e;
  const f = (0, o.default)(e, s);
  let p;
  if (d) {
    const {
      x: e = 0,
      y: t = 0,
      width: n = 0,
      height: a = 0
    } = d;
    p = [e, t, n, a].join(" ");
  }
  let m = 24;
  let h = 24;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "settings-security"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 24 24",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    version: "1.1"
  }, u.default.createElement("path", {
    d: "M12.027027,2 L4,5.56756757 L4,10.9189189 C4,15.8689189 7.42486486,20.4978378 12.027027,21.6216216 C16.6291892,20.4978378 20.0540541,15.8689189 20.0540541,10.9189189 L20.0540541,5.56756757 L12.027027,2 Z M12.027027,11.8018919 L18.2702703,11.8018919 C17.7975676,15.4764865 15.3448649,18.7497297 12.027027,19.7754054 L12.027027,11.8108108 L5.78378378,11.8108108 L5.78378378,6.72702703 L12.027027,3.95324324 L12.027027,11.8018919 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];