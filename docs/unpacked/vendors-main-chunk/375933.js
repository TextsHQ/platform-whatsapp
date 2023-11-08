var r;
!function () {
  function i(e, t, n) {
    return e.call.apply(e.bind, arguments);
  }
  function o(e, t, n) {
    if (!e) {
      throw Error();
    }
    if (arguments.length > 2) {
      var r = Array.prototype.slice.call(arguments, 2);
      return function () {
        var n = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(n, r);
        return e.apply(t, n);
      };
    }
    return function () {
      return e.apply(t, arguments);
    };
  }
  function s(e, t, n) {
    return (s = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? i : o).apply(null, arguments);
  }
  var l = Date.now || function () {
    return +new Date();
  };
  function a(e, t) {
    this.a = e;
    this.o = t || e;
    this.c = this.o.document;
  }
  var u = !!window.FontFace;
  function c(e, t, n, r) {
    t = e.c.createElement(t);
    if (n) {
      for (var i in n) {
        if (n.hasOwnProperty(i)) {
          if (i == "style") {
            t.style.cssText = n[i];
          } else {
            t.setAttribute(i, n[i]);
          }
        }
      }
    }
    if (r) {
      t.appendChild(e.c.createTextNode(r));
    }
    return t;
  }
  function d(e, t, n) {
    if (!(e = e.c.getElementsByTagName(t)[0])) {
      e = document.documentElement;
    }
    e.insertBefore(n, e.lastChild);
  }
  function g(e) {
    if (e.parentNode) {
      e.parentNode.removeChild(e);
    }
  }
  function f(e, t, n) {
    t = t || [];
    n = n || [];
    for (var r = e.className.split(/\s+/), i = 0; i < t.length; i += 1) {
      for (var o = false, s = 0; s < r.length; s += 1) {
        if (t[i] === r[s]) {
          o = true;
          break;
        }
      }
      if (!o) {
        r.push(t[i]);
      }
    }
    t = [];
    i = 0;
    for (; i < r.length; i += 1) {
      o = false;
      s = 0;
      for (; s < n.length; s += 1) {
        if (r[i] === n[s]) {
          o = true;
          break;
        }
      }
      if (!o) {
        t.push(r[i]);
      }
    }
    e.className = t.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "");
  }
  function h(e, t) {
    for (var n = e.className.split(/\s+/), r = 0, i = n.length; r < i; r++) {
      if (n[r] == t) {
        return true;
      }
    }
    return false;
  }
  function p(e, t, n) {
    function r() {
      if (l && i && o) {
        l(s);
        l = null;
      }
    }
    t = c(e, "link", {
      rel: "stylesheet",
      href: t,
      media: "all"
    });
    var i = false;
    var o = true;
    var s = null;
    var l = n || null;
    if (u) {
      t.onload = function () {
        i = true;
        r();
      };
      t.onerror = function () {
        i = true;
        s = Error("Stylesheet failed to load");
        r();
      };
    } else {
      setTimeout(function () {
        i = true;
        r();
      }, 0);
    }
    d(e, "head", t);
  }
  function _(e, t, n, r) {
    var i = e.c.getElementsByTagName("head")[0];
    if (i) {
      var o = c(e, "script", {
        src: t
      });
      var s = false;
      o.onload = o.onreadystatechange = function () {
        if (!(s || this.readyState && this.readyState != "loaded" && this.readyState != "complete")) {
          s = true;
          if (n) {
            n(null);
          }
          o.onload = o.onreadystatechange = null;
          if (o.parentNode.tagName == "HEAD") {
            i.removeChild(o);
          }
        }
      };
      i.appendChild(o);
      setTimeout(function () {
        if (!s) {
          s = true;
          if (n) {
            n(Error("Script load timeout"));
          }
        }
      }, r || 5000);
      return o;
    }
    return null;
  }
  function m() {
    this.a = 0;
    this.c = null;
  }
  function y(e) {
    e.a++;
    return function () {
      e.a--;
      v(e);
    };
  }
  function N(e, t) {
    e.c = t;
    v(e);
  }
  function v(e) {
    if (e.a == 0 && e.c) {
      e.c();
      e.c = null;
    }
  }
  function T(e) {
    this.a = e || "-";
  }
  function E(e, t) {
    this.c = e;
    this.f = 4;
    this.a = "n";
    var n = (t || "n4").match(/^([nio])([1-9])$/i);
    if (n) {
      this.a = n[1];
      this.f = parseInt(n[2], 10);
    }
  }
  function C(e) {
    var t = [];
    e = e.split(/,\s*/);
    for (var n = 0; n < e.length; n++) {
      var r = e[n].replace(/['"]/g, "");
      if (r.indexOf(" ") != -1 || /^\d/.test(r)) {
        t.push("'" + r + "'");
      } else {
        t.push(r);
      }
    }
    return t.join(",");
  }
  function x(e) {
    return e.a + e.f;
  }
  function b(e) {
    var t = "normal";
    if (e.a === "o") {
      t = "oblique";
    } else if (e.a === "i") {
      t = "italic";
    }
    return t;
  }
  function S(e) {
    var t = 4;
    var n = "n";
    var r = null;
    if (e) {
      if ((r = e.match(/(normal|oblique|italic)/i)) && r[1]) {
        n = r[1].substr(0, 1).toLowerCase();
      }
      if ((r = e.match(/([1-9]00|normal|bold)/i)) && r[1]) {
        if (/bold/i.test(r[1])) {
          t = 7;
        } else if (/[1-9]00/.test(r[1])) {
          t = parseInt(r[1].substr(0, 1), 10);
        }
      }
    }
    return n + t;
  }
  function A(e, t) {
    this.c = e;
    this.f = e.o.document.documentElement;
    this.h = t;
    this.a = new T("-");
    this.j = t.events !== false;
    this.g = t.classes !== false;
  }
  function O(e) {
    if (e.g) {
      var t = h(e.f, e.a.c("wf", "active"));
      var n = [];
      var r = [e.a.c("wf", "loading")];
      if (!t) {
        n.push(e.a.c("wf", "inactive"));
      }
      f(e.f, n, r);
    }
    w(e, "inactive");
  }
  function w(e, t, n) {
    if (e.j && e.h[t]) {
      if (n) {
        e.h[t](n.c, x(n));
      } else {
        e.h[t]();
      }
    }
  }
  function k() {
    this.c = {};
  }
  function R(e, t) {
    this.c = e;
    this.f = t;
    this.a = c(this.c, "span", {
      "aria-hidden": "true"
    }, this.f);
  }
  function D(e) {
    d(e.c, "body", e.a);
  }
  function M(e) {
    return "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + C(e.c) + ";font-style:" + b(e) + ";font-weight:" + e.f + "00;";
  }
  function $(e, t, n, r, i, o) {
    this.g = e;
    this.j = t;
    this.a = r;
    this.c = n;
    this.f = i || 3000;
    this.h = o || undefined;
  }
  function I(e, t, n, r, i, o, s) {
    this.v = e;
    this.B = t;
    this.c = n;
    this.a = r;
    this.s = s || "BESbswy";
    this.f = {};
    this.w = i || 3000;
    this.u = o || null;
    this.m = this.j = this.h = this.g = null;
    this.g = new R(this.c, this.s);
    this.h = new R(this.c, this.s);
    this.j = new R(this.c, this.s);
    this.m = new R(this.c, this.s);
    e = M(e = new E(this.a.c + ",serif", x(this.a)));
    this.g.a.style.cssText = e;
    e = M(e = new E(this.a.c + ",sans-serif", x(this.a)));
    this.h.a.style.cssText = e;
    e = M(e = new E("serif", x(this.a)));
    this.j.a.style.cssText = e;
    e = M(e = new E("sans-serif", x(this.a)));
    this.m.a.style.cssText = e;
    D(this.g);
    D(this.h);
    D(this.j);
    D(this.m);
  }
  T.prototype.c = function (e) {
    for (var t = [], n = 0; n < arguments.length; n++) {
      t.push(arguments[n].replace(/[\W_]+/g, "").toLowerCase());
    }
    return t.join(this.a);
  };
  $.prototype.start = function () {
    var e = this.c.o.document;
    var t = this;
    var n = l();
    var r = new Promise(function (r, i) {
      !function o() {
        if (l() - n >= t.f) {
          i();
        } else {
          e.fonts.load(function (e) {
            return b(e) + " " + e.f + "00 300px " + C(e.c);
          }(t.a), t.h).then(function (e) {
            if (e.length >= 1) {
              r();
            } else {
              setTimeout(o, 25);
            }
          }, function () {
            i();
          });
        }
      }();
    });
    var i = null;
    var o = new Promise(function (e, n) {
      i = setTimeout(n, t.f);
    });
    Promise.race([o, r]).then(function () {
      if (i) {
        clearTimeout(i);
        i = null;
      }
      t.g(t.a);
    }, function () {
      t.j(t.a);
    });
  };
  var P = {
    D: "serif",
    C: "sans-serif"
  };
  var L = null;
  function F() {
    if (L === null) {
      var e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
      L = !!e && (parseInt(e[1], 10) < 536 || parseInt(e[1], 10) === 536 && parseInt(e[2], 10) <= 11);
    }
    return L;
  }
  function B(e, t, n) {
    for (var r in P) {
      if (P.hasOwnProperty(r) && t === e.f[P[r]] && n === e.f[P[r]]) {
        return true;
      }
    }
    return false;
  }
  function z(e) {
    var t;
    var n = e.g.a.offsetWidth;
    var r = e.h.a.offsetWidth;
    if (!(t = n === e.f.serif && r === e.f["sans-serif"])) {
      t = F() && B(e, n, r);
    }
    if (t) {
      if (l() - e.A >= e.w) {
        if (F() && B(e, n, r) && (e.u === null || e.u.hasOwnProperty(e.a.c))) {
          W(e, e.v);
        } else {
          W(e, e.B);
        }
      } else {
        (function (e) {
          setTimeout(s(function () {
            z(this);
          }, e), 50);
        })(e);
      }
    } else {
      W(e, e.v);
    }
  }
  function W(e, t) {
    setTimeout(s(function () {
      g(this.g.a);
      g(this.h.a);
      g(this.j.a);
      g(this.m.a);
      t(this.a);
    }, e), 0);
  }
  function K(e, t, n) {
    this.c = e;
    this.a = t;
    this.f = 0;
    this.m = this.j = false;
    this.s = n;
  }
  I.prototype.start = function () {
    this.f.serif = this.j.a.offsetWidth;
    this.f["sans-serif"] = this.m.a.offsetWidth;
    this.A = l();
    z(this);
  };
  var U = null;
  function Y(e) {
    if (--e.f == 0 && e.j) {
      if (e.m) {
        if ((e = e.a).g) {
          f(e.f, [e.a.c("wf", "active")], [e.a.c("wf", "loading"), e.a.c("wf", "inactive")]);
        }
        w(e, "active");
      } else {
        O(e.a);
      }
    }
  }
  function j(e) {
    this.j = e;
    this.a = new k();
    this.h = 0;
    this.f = this.g = true;
  }
  function H(e, t, n, r, i) {
    var o = --e.h == 0;
    if (e.f || e.g) {
      setTimeout(function () {
        var e = i || null;
        var l = r || {};
        if (n.length === 0 && o) {
          O(t.a);
        } else {
          t.f += n.length;
          if (o) {
            t.j = o;
          }
          var a;
          var u = [];
          for (a = 0; a < n.length; a++) {
            var c = n[a];
            var d = l[c.c];
            var g = t.a;
            var h = c;
            if (g.g) {
              f(g.f, [g.a.c("wf", h.c, x(h).toString(), "loading")]);
            }
            w(g, "fontloading", h);
            g = null;
            if (U === null) {
              if (window.FontFace) {
                h = /Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);
                var p = /OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent) && /Apple/.exec(window.navigator.vendor);
                U = h ? parseInt(h[1], 10) > 42 : !p;
              } else {
                U = false;
              }
            }
            g = U ? new $(s(t.g, t), s(t.h, t), t.c, c, t.s, d) : new I(s(t.g, t), s(t.h, t), t.c, c, t.s, e, d);
            u.push(g);
          }
          for (a = 0; a < u.length; a++) {
            u[a].start();
          }
        }
      }, 0);
    }
  }
  function G(e, t) {
    this.c = e;
    this.a = t;
  }
  function V(e, t) {
    this.c = e;
    this.a = t;
  }
  function J(e, t) {
    this.c = e || Z;
    this.a = [];
    this.f = [];
    this.g = t || "";
  }
  K.prototype.g = function (e) {
    var t = this.a;
    if (t.g) {
      f(t.f, [t.a.c("wf", e.c, x(e).toString(), "active")], [t.a.c("wf", e.c, x(e).toString(), "loading"), t.a.c("wf", e.c, x(e).toString(), "inactive")]);
    }
    w(t, "fontactive", e);
    this.m = true;
    Y(this);
  };
  K.prototype.h = function (e) {
    var t = this.a;
    if (t.g) {
      var n = h(t.f, t.a.c("wf", e.c, x(e).toString(), "active"));
      var r = [];
      var i = [t.a.c("wf", e.c, x(e).toString(), "loading")];
      if (!n) {
        r.push(t.a.c("wf", e.c, x(e).toString(), "inactive"));
      }
      f(t.f, r, i);
    }
    w(t, "fontinactive", e);
    Y(this);
  };
  j.prototype.load = function (e) {
    this.c = new a(this.j, e.context || this.j);
    this.g = e.events !== false;
    this.f = e.classes !== false;
    (function (e, t, n) {
      var r = [];
      var i = n.timeout;
      !function (e) {
        if (e.g) {
          f(e.f, [e.a.c("wf", "loading")]);
        }
        w(e, "loading");
      }(t);
      r = function (e, t, n) {
        var r;
        var i = [];
        for (r in t) {
          if (t.hasOwnProperty(r)) {
            var o = e.c[r];
            if (o) {
              i.push(o(t[r], n));
            }
          }
        }
        return i;
      }(e.a, n, e.c);
      var o = new K(e.c, t, i);
      e.h = r.length;
      t = 0;
      n = r.length;
      for (; t < n; t++) {
        r[t].load(function (t, n, r) {
          H(e, o, t, n, r);
        });
      }
    })(this, new A(this.c, e), e);
  };
  G.prototype.load = function (e) {
    function t() {
      if (o["__mti_fntLst" + r]) {
        var n;
        var i = o["__mti_fntLst" + r]();
        var s = [];
        if (i) {
          for (var l = 0; l < i.length; l++) {
            var a = i[l].fontfamily;
            if (i[l].fontStyle != null && i[l].fontWeight != null) {
              n = i[l].fontStyle + i[l].fontWeight;
              s.push(new E(a, n));
            } else {
              s.push(new E(a));
            }
          }
        }
        e(s);
      } else {
        setTimeout(function () {
          t();
        }, 50);
      }
    }
    var n = this;
    var r = n.a.projectId;
    var i = n.a.version;
    if (r) {
      var o = n.c.o;
      _(this.c, (n.a.api || "https://fast.fonts.net/jsapi") + "/" + r + ".js" + (i ? "?v=" + i : ""), function (i) {
        if (i) {
          e([]);
        } else {
          o["__MonotypeConfiguration__" + r] = function () {
            return n.a;
          };
          t();
        }
      }).id = "__MonotypeAPIScript__" + r;
    } else {
      e([]);
    }
  };
  V.prototype.load = function (e) {
    var t;
    var n;
    var r = this.a.urls || [];
    var i = this.a.families || [];
    var o = this.a.testStrings || {};
    var s = new m();
    t = 0;
    n = r.length;
    for (; t < n; t++) {
      p(this.c, r[t], y(s));
    }
    var l = [];
    t = 0;
    n = i.length;
    for (; t < n; t++) {
      if ((r = i[t].split(":"))[1]) {
        for (var a = r[1].split(","), u = 0; u < a.length; u += 1) {
          l.push(new E(r[0], a[u]));
        }
      } else {
        l.push(new E(r[0]));
      }
    }
    N(s, function () {
      e(l, o);
    });
  };
  var Z = "https://fonts.googleapis.com/css";
  function q(e) {
    this.f = e;
    this.a = [];
    this.c = {};
  }
  var X = {
    latin: "BESbswy",
    "latin-ext": "çöüğş",
    cyrillic: "йяЖ",
    greek: "αβΣ",
    khmer: "កខគ",
    Hanuman: "កខគ"
  };
  var Q = {
    thin: "1",
    extralight: "2",
    "extra-light": "2",
    ultralight: "2",
    "ultra-light": "2",
    light: "3",
    regular: "4",
    book: "4",
    medium: "5",
    "semi-bold": "6",
    semibold: "6",
    "demi-bold": "6",
    demibold: "6",
    bold: "7",
    "extra-bold": "8",
    extrabold: "8",
    "ultra-bold": "8",
    ultrabold: "8",
    black: "9",
    heavy: "9",
    l: "3",
    r: "4",
    b: "7"
  };
  var ee = {
    i: "i",
    italic: "i",
    n: "n",
    normal: "n"
  };
  var te = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
  function ne(e, t) {
    this.c = e;
    this.a = t;
  }
  var re = {
    Arimo: true,
    Cousine: true,
    Tinos: true
  };
  function ie(e, t) {
    this.c = e;
    this.a = t;
  }
  function oe(e, t) {
    this.c = e;
    this.f = t;
    this.a = [];
  }
  ne.prototype.load = function (e) {
    var t = new m();
    var n = this.c;
    var r = new J(this.a.api, this.a.text);
    var i = this.a.families;
    !function (e, t) {
      for (var n = t.length, r = 0; r < n; r++) {
        var i = t[r].split(":");
        if (i.length == 3) {
          e.f.push(i.pop());
        }
        var o = "";
        if (i.length == 2 && i[1] != "") {
          o = ":";
        }
        e.a.push(i.join(o));
      }
    }(r, i);
    var o = new q(i);
    !function (e) {
      for (var t = e.f.length, n = 0; n < t; n++) {
        var r = e.f[n].split(":");
        var i = r[0].replace(/\+/g, " ");
        var o = ["n4"];
        if (r.length >= 2) {
          var s;
          s = [];
          if (l = r[1]) {
            for (var l, a = (l = l.split(",")).length, u = 0; u < a; u++) {
              var c;
              if ((c = l[u]).match(/^[\w-]+$/)) {
                if ((d = te.exec(c.toLowerCase())) == null) {
                  c = "";
                } else {
                  c = (c = d[2]) == null || c == "" ? "n" : ee[c];
                  if ((d = d[1]) == null || d == "") {
                    d = "4";
                  } else {
                    var d = Q[d] || (isNaN(d) ? "4" : d.substr(0, 1));
                  }
                  c = [c, d].join("");
                }
              } else {
                c = "";
              }
              if (c) {
                s.push(c);
              }
            }
          }
          if (s.length > 0) {
            o = s;
          }
          if (r.length == 3) {
            s = [];
            if ((r = (r = r[2]) ? r.split(",") : s).length > 0 && (r = X[r[0]])) {
              e.c[i] = r;
            }
          }
        }
        if (!e.c[i]) {
          if (r = X[i]) {
            e.c[i] = r;
          }
        }
        r = 0;
        for (; r < o.length; r += 1) {
          e.a.push(new E(i, o[r]));
        }
      }
    }(o);
    p(n, function (e) {
      if (e.a.length == 0) {
        throw Error("No fonts to load!");
      }
      if (e.c.indexOf("kit=") != -1) {
        return e.c;
      }
      for (var t = e.a.length, n = [], r = 0; r < t; r++) {
        n.push(e.a[r].replace(/ /g, "+"));
      }
      t = e.c + "?family=" + n.join("%7C");
      if (e.f.length > 0) {
        t += "&subset=" + e.f.join(",");
      }
      if (e.g.length > 0) {
        t += "&text=" + encodeURIComponent(e.g);
      }
      return t;
    }(r), y(t));
    N(t, function () {
      e(o.a, o.c, re);
    });
  };
  ie.prototype.load = function (e) {
    var t = this.a.id;
    var n = this.c.o;
    if (t) {
      _(this.c, (this.a.api || "https://use.typekit.net") + "/" + t + ".js", function (t) {
        if (t) {
          e([]);
        } else if (n.Typekit && n.Typekit.config && n.Typekit.config.fn) {
          t = n.Typekit.config.fn;
          for (var r = [], i = 0; i < t.length; i += 2) {
            for (var o = t[i], s = t[i + 1], l = 0; l < s.length; l++) {
              r.push(new E(o, s[l]));
            }
          }
          try {
            n.Typekit.load({
              events: false,
              classes: false,
              async: true
            });
          } catch (e) {}
          e(r);
        }
      }, 2000);
    } else {
      e([]);
    }
  };
  oe.prototype.load = function (e) {
    var t = this.f.id;
    var n = this.c.o;
    var r = this;
    if (t) {
      if (!n.__webfontfontdeckmodule__) {
        n.__webfontfontdeckmodule__ = {};
      }
      n.__webfontfontdeckmodule__[t] = function (t, n) {
        for (var i = 0, o = n.fonts.length; i < o; ++i) {
          var s = n.fonts[i];
          r.a.push(new E(s.name, S("font-weight:" + s.weight + ";font-style:" + s.style)));
        }
        e(r.a);
      };
      _(this.c, (this.f.api || "https://f.fontdeck.com/s/css/js/") + function (e) {
        return e.o.location.hostname || e.a.location.hostname;
      }(this.c) + "/" + t + ".js", function (t) {
        if (t) {
          e([]);
        }
      });
    } else {
      e([]);
    }
  };
  var se = new j(window);
  se.a.c.custom = function (e, t) {
    return new V(t, e);
  };
  se.a.c.fontdeck = function (e, t) {
    return new oe(t, e);
  };
  se.a.c.monotype = function (e, t) {
    return new G(t, e);
  };
  se.a.c.typekit = function (e, t) {
    return new ie(t, e);
  };
  se.a.c.google = function (e, t) {
    return new ne(t, e);
  };
  var le = {
    load: s(se.load, se)
  };
  if (!((r = function () {
    return le;
  }.call(exports, require, exports, module)) === undefined)) {
    module.exports = r;
  }
}();