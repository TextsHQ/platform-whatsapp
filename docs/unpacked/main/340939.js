function n(e, t) {
  return window.getComputedStyle(e).getPropertyValue(t);
}
function a(e) {
  let t = n(e, "line-height");
  let a = parseFloat(t);
  if (t === a + "") {
    const r = e.style.lineHeight;
    e.style.lineHeight = t + "em";
    t = n(e, "line-height");
    a = parseFloat(t);
    if (r) {
      e.style.lineHeight = r;
    } else {
      delete e.style.lineHeight;
    }
  }
  if (t.includes("pt")) {
    a *= 4 / 3;
  } else if (t.includes("mm")) {
    a *= 96;
    a /= 25.4;
  } else if (t.includes("cm")) {
    a *= 96;
    a /= 2.54;
  } else if (t.includes("in")) {
    a *= 96;
  } else if (t.includes("pc")) {
    a *= 16;
  }
  a = Math.round(a);
  if (t === "normal") {
    const t = e.nodeName;
    const r = document.createElement(t);
    r.innerHTML = "&nbsp;";
    if (t.toUpperCase() === "TEXTAREA") {
      r.setAttribute("rows", "1");
    }
    const o = n(e, "font-size");
    r.style.fontSize = o;
    r.style.padding = "0px";
    r.style.border = "0px";
    const l = document.body;
    if (l != null) {
      l.appendChild(r);
      a = r.offsetHeight;
      l.removeChild(r);
    }
  }
  return a;
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLineHeight = a;
exports.getNumberOfLines = function (e, t) {
  const n = e.getBoundingClientRect();
  const r = parseInt(n.bottom - n.top, 10);
  const o = t != null ? t : a(e);
  return Math.round(r / o);
};