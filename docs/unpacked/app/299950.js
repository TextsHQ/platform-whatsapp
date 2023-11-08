var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabDirection = exports.FocusType = undefined;
exports.getNextTabbableElement = function (e) {
  let t;
  let n;
  let r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : l.FORWARD;
  let d = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : s.CUSTOM;
  let p = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : () => true;
  let f = arguments.length > 4 ? arguments[4] : undefined;
  if (d === s.TABBABLE) {
    t = (0, o.tabbable)(e);
    n = () => true;
  } else if (d === s.CUSTOM_SELECTOR && f != null) {
    t = Array.from(e.querySelectorAll(f));
    n = () => true;
  } else {
    t = (0, i.default)(Array.from(e.querySelectorAll("[data-tab]")), e => parseInt(e.getAttribute("data-tab"), 10) || 0);
    n = c;
  }
  const _ = r === l.FORWARD ? 1 : -1;
  let g = 0;
  const {
    activeElement: m
  } = document;
  if (m) {
    let e = t.findIndex(e => e.contains(m));
    if ((0, a.messageListA11yRedesignEnabled)()) {
      const n = t.findIndex(e => e === m);
      if (n > 0) {
        e = n;
      }
    }
    g = e === -1 ? 0 : u(e + _, t.length);
  }
  for (let e = 0; e < t.length; e++) {
    const r = u(g + e * _, t.length);
    const i = t[r];
    if (n(i) && p(i)) {
      return i;
    }
  }
  return null;
};
var i = r(require("../vendor/189734.js"));
var a = require("./97858.js");
var o = require("../vendor/388388.js");
const s = require("../vendor/76672.js").Mirrored(["CUSTOM", "CUSTOM_SELECTOR", "TABBABLE"]);
exports.FocusType = s;
const l = require("../vendor/76672.js").Mirrored(["FORWARD", "BACKWARD"]);
function u(e, t) {
  return (e + t) % t;
}
function c(e) {
  if (e.disabled) {
    return false;
  }
  const t = parseInt(e.dataset.tab, 10);
  return !(typeof t != "number" || t < 0) && !function (e) {
    if (getComputedStyle(e).visibility === "hidden") {
      return true;
    }
    let t = e;
    for (; t;) {
      if (getComputedStyle(t).display === "none") {
        return true;
      }
      t = t.parentElement;
    }
    return false;
  }(e);
}
exports.TabDirection = l;