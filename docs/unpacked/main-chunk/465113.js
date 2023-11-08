var o = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scrollAt = function (e, t) {
  let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  const o = i(t || e.offsetParent);
  const r = n.pos || "center";
  const l = n.duration != null && n.duration !== 0 ? n.duration : 1000;
  const s = n.offset || 0;
  switch (r) {
    case "top":
      o.scrollTop = e.offsetTop + s;
      return Promise.resolve();
    case "bottom":
      o.scrollTop = e.offsetTop + e.clientHeight - o.clientHeight;
      return Promise.resolve();
    case "center":
      if (n.animate) {
        (0, a.default)(e, "stop");
        (0, a.default)(o, "stop");
        return (0, a.default)(e, "scroll", {
          duration: l,
          container: o,
          offset: (e.clientHeight - o.clientHeight) / 2,
          easing: n.easing
        });
      } else {
        o.scrollTop = e.offsetTop + e.clientHeight / 2 - o.clientHeight / 2;
        return Promise.resolve();
      }
    case "offset":
      if (n.animate) {
        (0, a.default)(e, "stop");
        (0, a.default)(o, "stop");
        return (0, a.default)(e, "scroll", {
          duration: l,
          container: o,
          offset: -s,
          easing: n.easing
        });
      } else {
        o.scrollTop = e.offsetTop - s;
        return Promise.resolve();
      }
  }
  return Promise.resolve();
};
exports.scrollIntoView = function (e) {
  let t = !(arguments.length > 1 && arguments[1] !== undefined) || arguments[1];
  let n = arguments.length > 2 ? arguments[2] : undefined;
  const o = i(n || e.parentNode);
  const r = window.getComputedStyle(o, null);
  const a = parseInt(r.getPropertyValue("border-top-width"), 10);
  const l = e.offsetTop - o.offsetTop < o.scrollTop;
  const s = e.offsetTop - o.offsetTop + e.clientHeight - a > o.scrollTop + o.clientHeight;
  if (t) {
    o.scrollTop = e.offsetTop - o.offsetTop - o.clientHeight / 2 - a + e.clientHeight / 2;
  } else {
    e.scrollIntoView(l && !s);
  }
  return !(l || s);
};
exports.scrollIntoViewIfNeeded = function (e) {
  let t = !(arguments.length > 1 && arguments[1] !== undefined) || arguments[1];
  let n = arguments.length > 2 ? arguments[2] : undefined;
  if (e.scrollIntoViewIfNeeded && (0, r.isFunction)(e.scrollIntoViewIfNeeded)) {
    return e.scrollIntoViewIfNeeded(t);
  }
  const o = i(n || e.parentNode);
  const a = window.getComputedStyle(o, null);
  const l = parseInt(a.getPropertyValue("border-top-width"), 10);
  const s = e.offsetTop - o.offsetTop < o.scrollTop;
  const u = e.offsetTop - o.offsetTop + e.clientHeight - l > o.scrollTop + o.clientHeight;
  if ((s || u) && t) {
    o.scrollTop = e.offsetTop - o.offsetTop - o.clientHeight / 2 - l + e.clientHeight / 2;
  }
  if (!(!s && !u || t)) {
    e.scrollIntoView(s && !u);
  }
  return !(s || u);
};
var r = require("../app/724976.js");
var a = o(require("../app/330619.js"));
var l = o(require("../app/556869.js"));
function i(e) {
  if (e && e instanceof HTMLElement) {
    return e;
  }
  throw (0, l.default)("utils:DOM parent not defined or is not a valid HTMLElement");
}