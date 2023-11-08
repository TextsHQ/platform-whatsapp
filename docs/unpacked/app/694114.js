/*! modernizr 3.11.8 (Custom Build) | MIT *
 * https://modernizr.com/download/?-adownload-cssanimations-csstransitions-exiforientation-serviceworker-webp-domprefixes-hasevent-prefixed-prefixes-setclasses-testallprops-testprop !*/
!function (e, t, n, r) {
  function i(e, t) {
    return typeof e === t;
  }
  function a(e) {
    var t = v.className;
    var n = E._config.classPrefix || "";
    if (T) {
      t = t.baseVal;
    }
    if (E._config.enableJSClass) {
      var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
      t = t.replace(r, "$1" + n + "js$2");
    }
    if (E._config.enableClasses) {
      if (e.length > 0) {
        t += " " + n + e.join(" " + n);
      }
      if (T) {
        v.className.baseVal = t;
      } else {
        v.className = t;
      }
    }
  }
  function o() {
    if (typeof n.createElement != "function") {
      return n.createElement(arguments[0]);
    } else if (T) {
      return n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]);
    } else {
      return n.createElement.apply(n, arguments);
    }
  }
  function s(e, t) {
    return !!~("" + e).indexOf(t);
  }
  function l(e, t, r, i) {
    var a;
    var s;
    var l;
    var u;
    var c = "modernizr";
    var d = o("div");
    var p = function () {
      var e = n.body;
      if (!e) {
        (e = o(T ? "svg" : "body")).fake = true;
      }
      return e;
    }();
    if (parseInt(r, 10)) {
      for (; r--;) {
        (l = o("div")).id = i ? i[r] : c + (r + 1);
        d.appendChild(l);
      }
    }
    (a = o("style")).type = "text/css";
    a.id = "s" + c;
    (p.fake ? p : d).appendChild(a);
    p.appendChild(d);
    if (a.styleSheet) {
      a.styleSheet.cssText = e;
    } else {
      a.appendChild(n.createTextNode(e));
    }
    d.id = c;
    if (p.fake) {
      p.style.background = "";
      p.style.overflow = "hidden";
      u = v.style.overflow;
      v.style.overflow = "hidden";
      v.appendChild(p);
    }
    s = t(d, e);
    if (p.fake && p.parentNode) {
      p.parentNode.removeChild(p);
      v.style.overflow = u;
      v.offsetHeight;
    } else {
      d.parentNode.removeChild(d);
    }
    return !!s;
  }
  function u(e) {
    return e.replace(/([A-Z])/g, function (e, t) {
      return "-" + t.toLowerCase();
    }).replace(/^ms-/, "-ms-");
  }
  function c(e, n) {
    var i = e.length;
    if ("CSS" in t && "supports" in t.CSS) {
      for (; i--;) {
        if (t.CSS.supports(u(e[i]), n)) {
          return true;
        }
      }
      return false;
    }
    if ("CSSSupportsRule" in t) {
      for (var a = []; i--;) {
        a.push("(" + u(e[i]) + ":" + n + ")");
      }
      return l("@supports (" + (a = a.join(" or ")) + ") { #modernizr { position: absolute; } }", function (e) {
        return function (e, n, r) {
          var i;
          if ("getComputedStyle" in t) {
            i = getComputedStyle.call(t, e, n);
            var a = t.console;
            if (i !== null) {
              if (r) {
                i = i.getPropertyValue(r);
              }
            } else if (a) {
              a[a.error ? "error" : "log"].call(a, "getComputedStyle returning null, its possible modernizr test results are inaccurate");
            }
          } else {
            i = !n && e.currentStyle && e.currentStyle[r];
          }
          return i;
        }(e, null, "position") === "absolute";
      });
    }
    return r;
  }
  function d(e) {
    return e.replace(/([a-z])-([a-z])/g, function (e, t, n) {
      return t + n.toUpperCase();
    }).replace(/^-/, "");
  }
  function p(e, t, n, a) {
    function l() {
      if (p) {
        delete I.style;
        delete I.modElem;
      }
    }
    a = !i(a, "undefined") && a;
    if (!i(n, "undefined")) {
      var u = c(e, n);
      if (!i(u, "undefined")) {
        return u;
      }
    }
    for (var p, f, _, g, m, h = ["modernizr", "tspan", "samp"]; !I.style && h.length;) {
      p = true;
      I.modElem = o(h.shift());
      I.style = I.modElem.style;
    }
    _ = e.length;
    f = 0;
    for (; f < _; f++) {
      g = e[f];
      m = I.style[g];
      if (s(g, "-")) {
        g = d(g);
      }
      if (I.style[g] !== r) {
        if (a || i(n, "undefined")) {
          l();
          return t !== "pfx" || g;
        }
        try {
          I.style[g] = n;
        } catch (e) {}
        if (I.style[g] !== m) {
          l();
          return t !== "pfx" || g;
        }
      }
    }
    l();
    return false;
  }
  function f(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }
  function _(e, t, n, r, a) {
    var o = e.charAt(0).toUpperCase() + e.slice(1);
    var s = (e + " " + P.join(o + " ") + o).split(" ");
    if (i(t, "string") || i(t, "undefined")) {
      return p(s, t, r, a);
    } else {
      return function (e, t, n) {
        var r;
        for (var a in e) {
          if (e[a] in t) {
            if (n === false) {
              return e[a];
            } else if (i(r = t[e[a]], "function")) {
              return f(r, n || t);
            } else {
              return r;
            }
          }
        }
        return false;
      }(s = (e + " " + A.join(o + " ") + o).split(" "), t, n);
    }
  }
  function g(e, t, n) {
    return _(e, r, r, t, n);
  }
  function m(e, t) {
    if (typeof e == "object") {
      for (var n in e) {
        if (R(e, n)) {
          m(n, e[n]);
        }
      }
    } else {
      var r = (e = e.toLowerCase()).split(".");
      var i = E[r[0]];
      if (r.length === 2) {
        i = i[r[1]];
      }
      if (i !== undefined) {
        return E;
      }
      t = typeof t == "function" ? t() : t;
      if (r.length === 1) {
        E[r[0]] = t;
      } else {
        if (!(!E[r[0]] || E[r[0]] instanceof Boolean)) {
          E[r[0]] = new Boolean(E[r[0]]);
        }
        E[r[0]][r[1]] = t;
      }
      a([(t && t !== false ? "" : "no-") + r.join("-")]);
      E._trigger(e, t);
    }
    return E;
  }
  var h = [];
  var y = {
    _version: "3.11.8",
    _config: {
      classPrefix: "",
      enableClasses: true,
      enableJSClass: true,
      usePrefixes: true
    },
    _q: [],
    on: function (e, t) {
      var n = this;
      setTimeout(function () {
        t(n[e]);
      }, 0);
    },
    addTest: function (e, t, n) {
      h.push({
        name: e,
        fn: t,
        options: n
      });
    },
    addAsyncTest: function (e) {
      h.push({
        name: null,
        fn: e
      });
    }
  };
  var E = function () {};
  E.prototype = y;
  E = new E();
  var S = [];
  var v = n.documentElement;
  var T = v.nodeName.toLowerCase() === "svg";
  var M = "Moz O ms Webkit";
  var A = y._config.usePrefixes ? M.toLowerCase().split(" ") : [];
  y._domPrefixes = A;
  var b = y._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
  y._prefixes = b;
  var C = function () {
    var e = !("onblur" in v);
    return function (t, n) {
      var i;
      return !!t && (n && typeof n != "string" || (n = o(n || "div")), !(i = (t = "on" + t) in n) && e && (n.setAttribute || (n = o("div")), n.setAttribute(t, ""), i = typeof n[t] == "function", n[t] !== r && (n[t] = r), n.removeAttribute(t)), i);
    };
  }();
  y.hasEvent = C;
  var P = y._config.usePrefixes ? M.split(" ") : [];
  y._cssomPrefixes = P;
  var O = {
    elem: o("modernizr")
  };
  E._q.push(function () {
    delete O.elem;
  });
  var I = {
    style: O.elem.style
  };
  E._q.unshift(function () {
    delete I.style;
  });
  y.testAllProps = _;
  var R;
  var N = function (e) {
    var n;
    var i = b.length;
    var a = t.CSSRule;
    if (a === undefined) {
      return r;
    }
    if (!e) {
      return false;
    }
    if ((n = (e = e.replace(/^@/, "")).replace(/-/g, "_").toUpperCase() + "_RULE") in a) {
      return "@" + e;
    }
    for (var o = 0; o < i; o++) {
      var s = b[o];
      if (s.toUpperCase() + "_" + n in a) {
        return "@-" + s.toLowerCase() + "-" + e;
      }
    }
    return false;
  };
  y.atRule = N;
  y.prefixed = function (e, t, n) {
    if (e.indexOf("@") === 0) {
      return N(e);
    } else {
      if (e.indexOf("-") !== -1) {
        e = d(e);
      }
      if (t) {
        return _(e, t, n);
      } else {
        return _(e, "pfx");
      }
    }
  };
  y.testAllProps = g;
  y.testProp = function (e, t, n) {
    return p([e], r, t, n);
  };
  (function () {
    var e = {}.hasOwnProperty;
    R = i(e, "undefined") || i(e.call, "undefined") ? function (e, t) {
      return t in e && i(e.constructor.prototype[t], "undefined");
    } : function (t, n) {
      return e.call(t, n);
    };
  })();
  y._l = {};
  y.on = function (e, t) {
    if (!this._l[e]) {
      this._l[e] = [];
    }
    this._l[e].push(t);
    if (E.hasOwnProperty(e)) {
      setTimeout(function () {
        E._trigger(e, E[e]);
      }, 0);
    }
  };
  y._trigger = function (e, t) {
    if (this._l[e]) {
      var n = this._l[e];
      setTimeout(function () {
        var e;
        for (e = 0; e < n.length; e++) {
          (0, n[e])(t);
        }
      }, 0);
      delete this._l[e];
    }
  };
  E._q.push(function () {
    y.addTest = m;
  });
  E.addAsyncTest(function () {
    function e(e, t, n) {
      function r(t) {
        var r = !(!t || t.type !== "load") && i.width === 1;
        m(e, e === "webp" && r ? new Boolean(r) : r);
        if (n) {
          n(t);
        }
      }
      var i = new Image();
      i.onerror = r;
      i.onload = r;
      i.src = t;
    }
    var t = [{
      uri: "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",
      name: "webp"
    }, {
      uri: "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",
      name: "webp.alpha"
    }, {
      uri: "data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",
      name: "webp.animation"
    }, {
      uri: "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",
      name: "webp.lossless"
    }];
    var n = t.shift();
    e(n.name, n.uri, function (n) {
      if (n && n.type === "load") {
        for (var r = 0; r < t.length; r++) {
          e(t[r].name, t[r].uri);
        }
      }
    });
  });
  E.addTest("serviceworker", "serviceWorker" in navigator);
  E.addAsyncTest(function () {
    var e = new Image();
    e.onerror = function () {
      m("exiforientation", false);
    };
    e.onload = function () {
      m("exiforientation", e.width !== 2);
    };
    e.src = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QAiRXhpZgAASUkqAAgAAAABABIBAwABAAAABgASAAAAAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAABAAIDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+/iiiigD/2Q==";
  });
  E.addTest("adownload", !t.externalHost && "download" in o("a"));
  E.addTest("cssanimations", g("animationName", "a", true));
  E.addTest("csstransitions", g("transition", "all", true));
  (function () {
    var e;
    var t;
    var n;
    var r;
    var a;
    var o;
    for (var s in h) {
      if (h.hasOwnProperty(s)) {
        e = [];
        if ((t = h[s]).name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length)) {
          for (n = 0; n < t.options.aliases.length; n++) {
            e.push(t.options.aliases[n].toLowerCase());
          }
        }
        r = i(t.fn, "function") ? t.fn() : t.fn;
        a = 0;
        for (; a < e.length; a++) {
          if ((o = e[a].split(".")).length === 1) {
            E[o[0]] = r;
          } else {
            if (!(E[o[0]] && (!E[o[0]] || E[o[0]] instanceof Boolean))) {
              E[o[0]] = new Boolean(E[o[0]]);
            }
            E[o[0]][o[1]] = r;
          }
          S.push((r ? "" : "no-") + o.join("-"));
        }
      }
    }
  })();
  a(S);
  delete y.addTest;
  delete y.addAsyncTest;
  for (var D = 0; D < E._q.length; D++) {
    E._q[D]();
  }
  e.Modernizr = E;
}(window, window, document);