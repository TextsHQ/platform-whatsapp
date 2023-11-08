var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  if (e.collapsed) {
    return [];
  }
  if (e.startContainer === e.endContainer) {
    if ((0, i.default)(e.startContainer)) {
      return [e.startContainer];
    } else {
      return Array.prototype.slice.call(e.startContainer.childNodes, e.startOffset, e.endOffset);
    }
  }
  const t = e.commonAncestorContainer.childNodes;
  let n;
  let r;
  n = e.commonAncestorContainer === e.startContainer ? t[0] : o(e.commonAncestorContainer, e.startContainer);
  (0, a.default)(n, "range is invalid: start missing");
  r = e.commonAncestorContainer === e.endContainer ? t[t.length - 1] : o(e.commonAncestorContainer, e.endContainer);
  (0, a.default)(r, "range is invalid: end missing");
  const s = r;
  const l = e => e == null ? undefined : e.nextSibling;
  const u = [];
  let c = n;
  for (; c && c !== s;) {
    u.push(c);
    c = l(c) || l(c.parentNode);
  }
  u.push(s);
  return u;
};
var i = r(require("./554676.js"));
var a = r(require("../vendor/441143.js"));
function o(e, t) {
  let n = t;
  for (; n.parentNode !== e;) {
    if (!n.parentNode) {
      return null;
    }
    n = n.parentNode;
  }
  return n;
}