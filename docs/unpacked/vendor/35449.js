/**
 *
 *
 * @author Jerry Bendy <jerry@icewingcc.com>
 * @licence MIT
 *
 */
!function (e) {
  "use strict";

  var t;
  var n = e.URLSearchParams && e.URLSearchParams.prototype.get ? e.URLSearchParams : null;
  var r = n && new n({
    a: 1
  }).toString() === "a=1";
  var i = n && new n("s=%2B").get("s") === "+";
  var a = !n || ((t = new n()).append("s", " &"), t.toString() === "s=+%26");
  var o = c.prototype;
  var s = !(!e.Symbol || !e.Symbol.iterator);
  if (!(n && r && i && a)) {
    o.append = function (e, t) {
      m(this.__URLSearchParams__, e, t);
    };
    o.delete = function (e) {
      delete this.__URLSearchParams__[e];
    };
    o.get = function (e) {
      var t = this.__URLSearchParams__;
      if (e in t) {
        return t[e][0];
      } else {
        return null;
      }
    };
    o.getAll = function (e) {
      var t = this.__URLSearchParams__;
      if (e in t) {
        return t[e].slice(0);
      } else {
        return [];
      }
    };
    o.has = function (e) {
      return e in this.__URLSearchParams__;
    };
    o.set = function (e, t) {
      this.__URLSearchParams__[e] = ["" + t];
    };
    o.toString = function () {
      var e;
      var t;
      var n;
      var r;
      var i = this.__URLSearchParams__;
      var a = [];
      for (t in i) {
        n = f(t);
        e = 0;
        r = i[t];
        n = f(t);
        e = 0;
        r = i[t];
        for (; e < r.length; e++) {
          a.push(n + "=" + f(r[e]));
        }
      }
      return a.join("&");
    };
    var u = !!i && n && !r && e.Proxy;
    Object.defineProperty(e, "URLSearchParams", {
      value: u ? new Proxy(n, {
        construct: function (e, t) {
          return new e(new c(t[0]).toString());
        }
      }) : c
    });
    var l = e.URLSearchParams.prototype;
    l.polyfill = true;
    l.forEach = l.forEach || function (e, t) {
      var n = p(this.toString());
      Object.getOwnPropertyNames(n).forEach(function (r) {
        n[r].forEach(function (n) {
          e.call(t, n, r, this);
        }, this);
      }, this);
    };
    l.sort = l.sort || function () {
      var e;
      var t;
      var n;
      var r = p(this.toString());
      var i = [];
      for (e in r) {
        i.push(e);
      }
      i.sort();
      t = 0;
      for (; t < i.length; t++) {
        this.delete(i[t]);
      }
      for (t = 0; t < i.length; t++) {
        var a = i[t];
        var o = r[a];
        for (n = 0; n < o.length; n++) {
          this.append(a, o[n]);
        }
      }
    };
    l.keys = l.keys || function () {
      var e = [];
      this.forEach(function (t, n) {
        e.push(n);
      });
      return h(e);
    };
    l.values = l.values || function () {
      var e = [];
      this.forEach(function (t) {
        e.push(t);
      });
      return h(e);
    };
    l.entries = l.entries || function () {
      var e = [];
      this.forEach(function (t, n) {
        e.push([n, t]);
      });
      return h(e);
    };
    if (s) {
      l[e.Symbol.iterator] = l[e.Symbol.iterator] || l.entries;
    }
  }
  function c(e) {
    if ((e = e || "") instanceof URLSearchParams || e instanceof c) {
      e = e.toString();
    }
    this.__URLSearchParams__ = p(e);
  }
  function f(e) {
    var t = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0"
    };
    return encodeURIComponent(e).replace(/[!'\(\)~]|%20|%00/g, function (e) {
      return t[e];
    });
  }
  function d(e) {
    return decodeURIComponent(e.replace(/\+/g, " "));
  }
  function h(t) {
    var n = {
      next: function () {
        var e = t.shift();
        return {
          done: e === undefined,
          value: e
        };
      }
    };
    if (s) {
      n[e.Symbol.iterator] = function () {
        return n;
      };
    }
    return n;
  }
  function p(e) {
    var t = {};
    if (typeof e == "object") {
      for (var n in e) {
        if (e.hasOwnProperty(n)) {
          m(t, n, e[n]);
        }
      }
    } else {
      if (e.indexOf("?") === 0) {
        e = e.slice(1);
      }
      for (var r = e.split("&"), i = 0; i < r.length; i++) {
        var a = r[i];
        var o = a.indexOf("=");
        if (o > -1) {
          m(t, d(a.slice(0, o)), d(a.slice(o + 1)));
        } else if (a) {
          m(t, d(a), "");
        }
      }
    }
    return t;
  }
  function m(e, t, n) {
    var r = typeof n == "string" ? n : n != null && typeof n.toString == "function" ? n.toString() : JSON.stringify(n);
    if (t in e) {
      e[t].push(r);
    } else {
      e[t] = [r];
    }
  }
}(require.g !== undefined ? require.g : typeof window != "undefined" ? window : this);