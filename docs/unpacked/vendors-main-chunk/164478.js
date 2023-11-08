var r = require("./389408.js");
var i = require("./932998.js");
function o(e, t, n, s = null) {
  let l = s == null || t.isSelected(s);
  let a = i.$isElementNode(t) && t.excludeFromCopy("html");
  var u = t;
  if (s !== null) {
    u = r.$cloneWithProperties(t);
    u = i.$isTextNode(u) && s != null ? r.$sliceSelectedTextNodeContent(s, u) : u;
  }
  let c = i.$isElementNode(u) ? u.getChildren() : [];
  let {
    element: d,
    after: g
  } = u.exportDOM(e);
  if (!d) {
    return false;
  }
  let f = document.createDocumentFragment();
  for (let n = 0; n < c.length; n++) {
    let r = c[n];
    let a = o(e, r, f, s);
    if (!l && i.$isElementNode(t) && a && t.extractWithChild(r, s, "html")) {
      l = true;
    }
  }
  if (l && !a) {
    d.append(f);
    n.append(d);
    if (g && (e = g.call(u, d))) {
      d.replaceWith(e);
    }
  } else {
    n.append(f);
  }
  return l;
}
let s = new Set(["STYLE", "SCRIPT"]);
function l(e, t, n = new Map(), r) {
  let o = [];
  if (s.has(e.nodeName)) {
    return o;
  }
  let a = null;
  var u;
  var {
    nodeName: c
  } = e;
  var d = t._htmlConversions.get(c.toLowerCase());
  c = null;
  if (d !== undefined) {
    for (u of d) {
      if ((d = u(e)) !== null && (c === null || c.priority < d.priority)) {
        c = d;
      }
    }
  }
  c = (u = c !== null ? c.conversion : null) ? u(e) : null;
  u = null;
  if (c !== null) {
    u = c.after;
    d = c.node;
    a = Array.isArray(d) ? d[d.length - 1] : d;
    if (a !== null) {
      for (var [, g] of n) {
        a = g(a, r);
        if (!a) {
          break;
        }
      }
      if (a) {
        o.push(...(Array.isArray(d) ? d : [a]));
      }
    }
    if (c.forChild != null) {
      n.set(e.nodeName, c.forChild);
    }
  }
  e = e.childNodes;
  r = [];
  g = 0;
  for (; g < e.length; g++) {
    r.push(...l(e[g], t, new Map(n), a));
  }
  if (u != null) {
    r = u(r);
  }
  if (a == null) {
    o = o.concat(r);
  } else if (i.$isElementNode(a)) {
    a.append(...r);
  }
  return o;
}
exports.$generateHtmlFromNodes = function (e, t) {
  if (typeof document == "undefined" || typeof window == "undefined") {
    throw Error("To use $generateHtmlFromNodes in headless mode please initialize a headless browser implementation such as JSDom before calling this function.");
  }
  let n = document.createElement("div");
  let r = i.$getRoot().getChildren();
  for (let i = 0; i < r.length; i++) {
    o(e, r[i], n, t);
  }
  return n.innerHTML;
};
exports.$generateNodesFromDOM = function (e, t) {
  t = t.body ? t.body.childNodes : [];
  let n = [];
  for (let i = 0; i < t.length; i++) {
    var r = t[i];
    if (!s.has(r.nodeName)) {
      if ((r = l(r, e)) !== null) {
        n = n.concat(r);
      }
    }
  }
  return n;
};