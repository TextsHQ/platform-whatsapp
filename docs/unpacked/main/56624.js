var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.E2EStatusV2Icon = function (e) {
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
  let m = 19;
  let h = 20;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "e2e-status-v2"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 20 19",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    fill: "none"
  }, u.default.createElement("path", {
    d: "M18.3356 9.58203C18.4879 13.1649 16.317 16.5818 12.7624 17.8508C12.3682 17.9914 11.9707 18.101 11.5723 18.1803",
    stroke: "#00A884",
    strokeWidth: 1.4,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), u.default.createElement("path", {
    d: "M3.61426 4.3993C4.52735 3.35472 5.71219 2.52242 7.11157 2.02259C9.63427 1.12218 12.3025 1.50037 14.408 2.82143",
    stroke: "#00A884",
    strokeWidth: 1.4,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), u.default.createElement("path", {
    d: "M8.30363 18.1821C5.50086 17.624 3.05315 15.6498 2.02262 12.7625C1.35894 10.9029 1.3898 8.96457 1.98122 7.23047",
    stroke: "#00A884",
    strokeWidth: 1.4,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), u.default.createElement("path", {
    d: "M15.2773 9.93722C15.2773 12.8863 12.8865 15.2768 9.93747 15.2768C6.98841 15.2768 4.59766 12.8863 4.59766 9.93722C4.59766 6.98816 6.98841 4.59766 9.93747 4.59766C10.9759 4.59766 11.9451 4.89405 12.7651 5.40687",
    stroke: "#00A884",
    strokeWidth: 1.4,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];