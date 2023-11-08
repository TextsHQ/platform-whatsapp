function t(e, t) {
  e.onload = function () {
    this.onerror = this.onload = null;
    t(null, e);
  };
  e.onerror = function () {
    this.onerror = this.onload = null;
    t(new Error("Failed to load " + this.src), e);
  };
}
function r(e, t) {
  e.onreadystatechange = function () {
    if (!(this.readyState != "complete" && this.readyState != "loaded")) {
      this.onreadystatechange = null;
      t(null, e);
    }
  };
}
module.exports = function (e, n, a) {
  var o = document.head || document.getElementsByTagName("head")[0];
  var i = document.createElement("script");
  if (typeof n == "function") {
    a = n;
    n = {};
  }
  n = n || {};
  a = a || function () {};
  i.type = n.type || "text/javascript";
  i.charset = n.charset || "utf8";
  i.async = !("async" in n) || !!n.async;
  i.src = e;
  if (n.attrs) {
    (function (e, t) {
      for (var r in t) {
        e.setAttribute(r, t[r]);
      }
    })(i, n.attrs);
  }
  if (n.text) {
    i.text = "" + n.text;
  }
  ("onload" in i ? t : r)(i, a);
  if (!i.onload) {
    t(i, a);
  }
  o.appendChild(i);
};