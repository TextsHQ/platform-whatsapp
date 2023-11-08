var n = "__lodash_hash_undefined__";
var a = "[object Function]";
var o = "[object GeneratorFunction]";
var i = /^\[object .+?Constructor\]$/;
var u = typeof require.g == "object" && require.g && require.g.Object === Object && require.g;
var c = typeof self == "object" && self && self.Object === Object && self;
var s = u || c || Function("return this")();
var l;
var f = Array.prototype;
var d = Function.prototype;
var p = Object.prototype;
var v = s["__core-js_shared__"];
var h = (l = /[^.]+$/.exec(v && v.keys && v.keys.IE_PROTO || "")) ? "Symbol(src)_1." + l : "";
var y = d.toString;
var g = p.hasOwnProperty;
var m = p.toString;
var _ = RegExp("^" + y.call(g).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
var b = f.splice;
var w = C(s, "Map");
var E = C(Object, "create");
function D(e) {
  var t = -1;
  var r = e ? e.length : 0;
  for (this.clear(); ++t < r;) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
function O(e) {
  var t = -1;
  var r = e ? e.length : 0;
  for (this.clear(); ++t < r;) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
function S(e) {
  var t = -1;
  var r = e ? e.length : 0;
  for (this.clear(); ++t < r;) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
function x(e, t) {
  for (var r, n, a = e.length; a--;) {
    if ((r = e[a][0]) === (n = t) || r != r && n != n) {
      return a;
    }
  }
  return -1;
}
function P(e) {
  return !(!T(e) || (t = e, h && h in t)) && (function (e) {
    var t = T(e) ? m.call(e) : "";
    return t == a || t == o;
  }(e) || function (e) {
    var t = false;
    if (e != null && typeof e.toString != "function") {
      try {
        t = !!(e + "");
      } catch (e) {}
    }
    return t;
  }(e) ? _ : i).test(function (e) {
    if (e != null) {
      try {
        return y.call(e);
      } catch (e) {}
      try {
        return e + "";
      } catch (e) {}
    }
    return "";
  }(e));
  var t;
}
function A(e, t) {
  var r;
  var n;
  var a = e.__data__;
  if ((n = typeof (r = t)) == "string" || n == "number" || n == "symbol" || n == "boolean" ? r !== "__proto__" : r === null) {
    return a[typeof t == "string" ? "string" : "hash"];
  } else {
    return a.map;
  }
}
function C(e, t) {
  var r = function (e, t) {
    if (e == null) {
      return undefined;
    } else {
      return e[t];
    }
  }(e, t);
  if (P(r)) {
    return r;
  } else {
    return undefined;
  }
}
function M(e, t) {
  if (typeof e != "function" || t && typeof t != "function") {
    throw new TypeError("Expected a function");
  }
  var r = function () {
    var n = arguments;
    var a = t ? t.apply(this, n) : n[0];
    var o = r.cache;
    if (o.has(a)) {
      return o.get(a);
    }
    var i = e.apply(this, n);
    r.cache = o.set(a, i);
    return i;
  };
  r.cache = new (M.Cache || S)();
  return r;
}
function T(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
D.prototype.clear = function () {
  this.__data__ = E ? E(null) : {};
};
D.prototype.delete = function (e) {
  return this.has(e) && delete this.__data__[e];
};
D.prototype.get = function (e) {
  var t = this.__data__;
  if (E) {
    var r = t[e];
    if (r === n) {
      return undefined;
    } else {
      return r;
    }
  }
  if (g.call(t, e)) {
    return t[e];
  } else {
    return undefined;
  }
};
D.prototype.has = function (e) {
  var t = this.__data__;
  if (E) {
    return t[e] !== undefined;
  } else {
    return g.call(t, e);
  }
};
D.prototype.set = function (e, t) {
  this.__data__[e] = E && t === undefined ? n : t;
  return this;
};
O.prototype.clear = function () {
  this.__data__ = [];
};
O.prototype.delete = function (e) {
  var t = this.__data__;
  var r = x(t, e);
  return !(r < 0) && (r == t.length - 1 ? t.pop() : b.call(t, r, 1), true);
};
O.prototype.get = function (e) {
  var t = this.__data__;
  var r = x(t, e);
  if (r < 0) {
    return undefined;
  } else {
    return t[r][1];
  }
};
O.prototype.has = function (e) {
  return x(this.__data__, e) > -1;
};
O.prototype.set = function (e, t) {
  var r = this.__data__;
  var n = x(r, e);
  if (n < 0) {
    r.push([e, t]);
  } else {
    r[n][1] = t;
  }
  return this;
};
S.prototype.clear = function () {
  this.__data__ = {
    hash: new D(),
    map: new (w || O)(),
    string: new D()
  };
};
S.prototype.delete = function (e) {
  return A(this, e).delete(e);
};
S.prototype.get = function (e) {
  return A(this, e).get(e);
};
S.prototype.has = function (e) {
  return A(this, e).has(e);
};
S.prototype.set = function (e, t) {
  A(this, e).set(e, t);
  return this;
};
M.Cache = S;
module.exports = M;