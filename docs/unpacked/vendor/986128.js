var r = Object.keys;
var i = Array.isArray;
var a = typeof self != "undefined" ? self : typeof window != "undefined" ? window : require.g;
function o(e, t) {
  if (!(typeof t != "object")) {
    r(t).forEach(function (n) {
      e[n] = t[n];
    });
  }
  return e;
}
var s = Object.getPrototypeOf;
var u = {}.hasOwnProperty;
function l(e, t) {
  return u.call(e, t);
}
function c(e, t) {
  if (typeof t == "function") {
    t = t(s(e));
  }
  r(t).forEach(function (n) {
    d(e, n, t[n]);
  });
}
var f = Object.defineProperty;
function d(e, t, n, r) {
  f(e, t, o(n && l(n, "get") && typeof n.get == "function" ? {
    get: n.get,
    set: n.set,
    configurable: true
  } : {
    value: n,
    configurable: true,
    writable: true
  }, r));
}
function h(e) {
  return {
    from: function (t) {
      e.prototype = Object.create(t.prototype);
      d(e.prototype, "constructor", e);
      return {
        extend: c.bind(null, e.prototype)
      };
    }
  };
}
var p = Object.getOwnPropertyDescriptor;
function m(e, t) {
  var n;
  return p(e, t) || (n = s(e)) && m(n, t);
}
var v = [].slice;
function g(e, t, n) {
  return v.call(e, t, n);
}
function y(e, t) {
  return t(e);
}
function b(e) {
  if (!e) {
    throw new Error("Assertion Failed");
  }
}
function w(e) {
  if (a.setImmediate) {
    setImmediate(e);
  } else {
    setTimeout(e, 0);
  }
}
function _(e, t) {
  return e.reduce(function (e, n, r) {
    var i = t(n, r);
    if (i) {
      e[i[0]] = i[1];
    }
    return e;
  }, {});
}
function x(e, t) {
  return function () {
    try {
      e.apply(this, arguments);
    } catch (e) {
      t(e);
    }
  };
}
function S(e, t, n) {
  try {
    e.apply(null, n);
  } catch (e) {
    if (t) {
      t(e);
    }
  }
}
function E(e, t) {
  if (l(e, t)) {
    return e[t];
  }
  if (!t) {
    return e;
  }
  if (typeof t != "string") {
    for (var n = [], r = 0, i = t.length; r < i; ++r) {
      var a = E(e, t[r]);
      n.push(a);
    }
    return n;
  }
  var o = t.indexOf(".");
  if (o !== -1) {
    var s = e[t.substr(0, o)];
    if (s === undefined) {
      return undefined;
    } else {
      return E(s, t.substr(o + 1));
    }
  }
}
function k(e, t, n) {
  if (e && t !== undefined && (!("isFrozen" in Object) || !Object.isFrozen(e))) {
    if (typeof t != "string" && "length" in t) {
      b(typeof n != "string" && "length" in n);
      for (var r = 0, i = t.length; r < i; ++r) {
        k(e, t[r], n[r]);
      }
    } else {
      var a = t.indexOf(".");
      if (a !== -1) {
        var o = t.substr(0, a);
        var s = t.substr(a + 1);
        if (s === "") {
          if (n === undefined) {
            delete e[o];
          } else {
            e[o] = n;
          }
        } else {
          var u = e[o];
          if (!u) {
            u = e[o] = {};
          }
          k(u, s, n);
        }
      } else if (n === undefined) {
        delete e[t];
      } else {
        e[t] = n;
      }
    }
  }
}
function O(e) {
  var t = {};
  for (var n in e) {
    if (l(e, n)) {
      t[n] = e[n];
    }
  }
  return t;
}
var N = [].concat;
function T(e) {
  return N.apply([], e);
}
var M = "Boolean,String,Date,RegExp,Blob,File,FileList,ArrayBuffer,DataView,Uint8ClampedArray,ImageData,Map,Set".split(",").concat(T([8, 16, 32, 64].map(function (e) {
  return ["Int", "Uint", "Float"].map(function (t) {
    return t + e + "Array";
  });
}))).filter(function (e) {
  return a[e];
}).map(function (e) {
  return a[e];
});
function R(e) {
  if (!e || typeof e != "object") {
    return e;
  }
  var t;
  if (i(e)) {
    t = [];
    for (var n = 0, r = e.length; n < r; ++n) {
      t.push(R(e[n]));
    }
  } else if (M.indexOf(e.constructor) >= 0) {
    t = e;
  } else {
    t = e.constructor ? Object.create(e.constructor.prototype) : {};
    for (var a in e) {
      if (l(e, a)) {
        t[a] = R(e[a]);
      }
    }
  }
  return t;
}
function A(e, t, n, i) {
  n = n || {};
  i = i || "";
  r(e).forEach(function (r) {
    if (l(t, r)) {
      var a = e[r];
      var o = t[r];
      if (typeof a == "object" && typeof o == "object" && a && o && "" + a.constructor == "" + o.constructor) {
        A(a, o, n, i + r + ".");
      } else if (a !== o) {
        n[i + r] = t[r];
      }
    } else {
      n[i + r] = undefined;
    }
  });
  r(t).forEach(function (r) {
    if (!l(e, r)) {
      n[i + r] = t[r];
    }
  });
  return n;
}
var P = typeof Symbol != "undefined" && Symbol.iterator;
var C = P ? function (e) {
  var t;
  return e != null && (t = e[P]) && t.apply(e);
} : function () {
  return null;
};
var D = {};
function U(e) {
  var t;
  var n;
  var r;
  var a;
  if (arguments.length === 1) {
    if (i(e)) {
      return e.slice();
    }
    if (this === D && typeof e == "string") {
      return [e];
    }
    if (a = C(e)) {
      for (n = []; !(r = a.next()).done;) {
        n.push(r.value);
      }
      return n;
    }
    if (e == null) {
      return [e];
    }
    if (typeof (t = e.length) == "number") {
      for (n = new Array(t); t--;) {
        n[t] = e[t];
      }
      return n;
    }
    return [e];
  }
  t = arguments.length;
  n = new Array(t);
  for (; t--;) {
    n[t] = arguments[t];
  }
  return n;
}
var I = typeof location != "undefined" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
function L(e, t) {
  I = e;
  j = t;
}
var j = function () {
  return true;
};
var F = !new Error("").stack;
function z() {
  if (F) {
    try {
      z.arguments;
      throw new Error();
    } catch (e) {
      return e;
    }
  }
  return new Error();
}
function B(e, t) {
  var n = e.stack;
  if (n) {
    t = t || 0;
    if (n.indexOf(e.name) === 0) {
      t += (e.name + e.message).split("\n").length;
    }
    return n.split("\n").slice(t).filter(j).map(function (e) {
      return "\n" + e;
    }).join("");
  } else {
    return "";
  }
}
var V = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"];
var Y = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(V);
var H = {
  VersionChanged: "Database version changed by other database connection",
  DatabaseClosed: "Database has been closed",
  Abort: "Transaction aborted",
  TransactionInactive: "Transaction has already completed or failed"
};
function $(e, t) {
  this._e = z();
  this.name = e;
  this.message = t;
}
function W(e, t, n, r) {
  this._e = z();
  this.failures = t;
  this.failedKeys = r;
  this.successCount = n;
}
function G(e, t) {
  this._e = z();
  this.name = "BulkError";
  this.failures = t;
  this.message = function (e, t) {
    return e + ". Errors: " + t.map(function (e) {
      return e.toString();
    }).filter(function (e, t, n) {
      return n.indexOf(e) === t;
    }).join("\n");
  }(e, t);
}
h($).from(Error).extend({
  stack: {
    get: function () {
      return this._stack || (this._stack = this.name + ": " + this.message + B(this._e, 2));
    }
  },
  toString: function () {
    return this.name + ": " + this.message;
  }
});
h(W).from($);
h(G).from($);
var q = Y.reduce(function (e, t) {
  e[t] = t + "Error";
  return e;
}, {});
var K = $;
var X = Y.reduce(function (e, t) {
  var n = t + "Error";
  function r(e, r) {
    this._e = z();
    this.name = n;
    if (e) {
      if (typeof e == "string") {
        this.message = e;
        this.inner = r || null;
      } else if (typeof e == "object") {
        this.message = e.name + " " + e.message;
        this.inner = e;
      }
    } else {
      this.message = H[t] || n;
      this.inner = null;
    }
  }
  h(r).from(K);
  e[t] = r;
  return e;
}, {});
X.Syntax = SyntaxError;
X.Type = TypeError;
X.Range = RangeError;
var Z = V.reduce(function (e, t) {
  e[t + "Error"] = X[t];
  return e;
}, {});
var Q = Y.reduce(function (e, t) {
  if (["Syntax", "Type", "Range"].indexOf(t) === -1) {
    e[t + "Error"] = X[t];
  }
  return e;
}, {});
function J() {}
function ee(e) {
  return e;
}
function te(e, t) {
  if (e == null || e === ee) {
    return t;
  } else {
    return function (n) {
      return t(e(n));
    };
  }
}
function ne(e, t) {
  return function () {
    e.apply(this, arguments);
    t.apply(this, arguments);
  };
}
function re(e, t) {
  if (e === J) {
    return t;
  } else {
    return function () {
      var n = e.apply(this, arguments);
      if (n !== undefined) {
        arguments[0] = n;
      }
      var r = this.onsuccess;
      var i = this.onerror;
      this.onsuccess = null;
      this.onerror = null;
      var a = t.apply(this, arguments);
      if (r) {
        this.onsuccess = this.onsuccess ? ne(r, this.onsuccess) : r;
      }
      if (i) {
        this.onerror = this.onerror ? ne(i, this.onerror) : i;
      }
      if (a !== undefined) {
        return a;
      } else {
        return n;
      }
    };
  }
}
function ie(e, t) {
  if (e === J) {
    return t;
  } else {
    return function () {
      e.apply(this, arguments);
      var n = this.onsuccess;
      var r = this.onerror;
      this.onsuccess = this.onerror = null;
      t.apply(this, arguments);
      if (n) {
        this.onsuccess = this.onsuccess ? ne(n, this.onsuccess) : n;
      }
      if (r) {
        this.onerror = this.onerror ? ne(r, this.onerror) : r;
      }
    };
  }
}
function ae(e, t) {
  if (e === J) {
    return t;
  } else {
    return function (n) {
      var r = e.apply(this, arguments);
      o(n, r);
      var i = this.onsuccess;
      var a = this.onerror;
      this.onsuccess = null;
      this.onerror = null;
      var s = t.apply(this, arguments);
      if (i) {
        this.onsuccess = this.onsuccess ? ne(i, this.onsuccess) : i;
      }
      if (a) {
        this.onerror = this.onerror ? ne(a, this.onerror) : a;
      }
      if (r === undefined) {
        if (s === undefined) {
          return undefined;
        } else {
          return s;
        }
      } else {
        return o(r, s);
      }
    };
  }
}
function oe(e, t) {
  if (e === J) {
    return t;
  } else {
    return function () {
      return t.apply(this, arguments) !== false && e.apply(this, arguments);
    };
  }
}
function se(e, t) {
  if (e === J) {
    return t;
  } else {
    return function () {
      var n = e.apply(this, arguments);
      if (n && typeof n.then == "function") {
        for (var r = this, i = arguments.length, a = new Array(i); i--;) {
          a[i] = arguments[i];
        }
        return n.then(function () {
          return t.apply(r, a);
        });
      }
      return t.apply(this, arguments);
    };
  }
}
Q.ModifyError = W;
Q.DexieError = $;
Q.BulkError = G;
var ue = {};
var le = function () {
  try {
    return [Ae.resolve(), Ae.prototype, Ae.resolve(), Function.constructor];
  } catch (t) {
    var e = a.Promise;
    if (e) {
      return [e.resolve(), e.prototype, e.resolve()];
    } else {
      return [];
    }
  }
}();
var ce = le[0];
var fe = le[1];
var de = le[2];
var he = fe && fe.then;
var pe = ce && ce.constructor;
var me = le[3];
var ve = !!de;
var ge = false;
var ye = de ? function () {
  de.then(Be);
} : a.setImmediate ? setImmediate.bind(null, Be) : a.MutationObserver ? function () {
  var e = document.createElement("div");
  new MutationObserver(function () {
    Be();
    e = null;
  }).observe(e, {
    attributes: true
  });
  e.setAttribute("i", "1");
} : function () {
  setTimeout(Be, 0);
};
var be = function (e, t) {
  Te.push([e, t]);
  if (_e) {
    ye();
    _e = false;
  }
};
var we = true;
var _e = true;
var xe = [];
var Se = [];
var Ee = null;
var ke = ee;
var Oe = {
  id: "global",
  global: true,
  ref: 0,
  unhandleds: [],
  onunhandled: ft,
  txRelaxedDurabilityEnabled: false,
  pgp: false,
  env: {},
  finalize: function () {
    this.unhandleds.forEach(function (e) {
      try {
        ft(e[0], e[1]);
      } catch (e) {}
    });
  }
};
var Ne = Oe;
var Te = [];
var Me = 0;
var Re = [];
function Ae(e) {
  if (typeof this != "object") {
    throw new TypeError("Promises must be constructed via new");
  }
  this._listeners = [];
  this.onuncatched = J;
  this._lib = false;
  var t = this._PSD = Ne;
  if (I) {
    this._stackHolder = z();
    this._prev = null;
    this._numPrev = 0;
  }
  if (typeof e != "function") {
    if (e !== ue) {
      throw new TypeError("Not a function");
    }
    this._state = arguments[1];
    this._value = arguments[2];
    return void (this._state === false && Ue(this, this._value));
  }
  this._state = null;
  this._value = null;
  ++t.ref;
  De(this, e);
}
var Pe = {
  get: function () {
    var e = Ne;
    var t = Ze;
    function n(n, r) {
      var i = this;
      var a = !e.global && (e !== Ne || t !== Ze);
      if (a) {
        tt();
      }
      var o = new Ae(function (t, o) {
        Le(i, new Ce(ut(n, e, a), ut(r, e, a), t, o, e));
      });
      if (I) {
        ze(o, this);
      }
      return o;
    }
    n.prototype = ue;
    return n;
  },
  set: function (e) {
    d(this, "then", e && e.prototype === ue ? Pe : {
      get: function () {
        return e;
      },
      set: Pe.set
    });
  }
};
function Ce(e, t, n, r, i) {
  this.onFulfilled = typeof e == "function" ? e : null;
  this.onRejected = typeof t == "function" ? t : null;
  this.resolve = n;
  this.reject = r;
  this.psd = i;
}
function De(e, t) {
  try {
    t(function (t) {
      if (e._state === null) {
        if (t === e) {
          throw new TypeError("A promise cannot be resolved with itself.");
        }
        var n = e._lib && Ve();
        if (t && typeof t.then == "function") {
          De(e, function (e, n) {
            if (t instanceof Ae) {
              t._then(e, n);
            } else {
              t.then(e, n);
            }
          });
        } else {
          e._state = true;
          e._value = t;
          Ie(e);
        }
        if (n) {
          Ye();
        }
      }
    }, Ue.bind(null, e));
  } catch (t) {
    Ue(e, t);
  }
}
function Ue(e, t) {
  Se.push(t);
  if (e._state === null) {
    var n = e._lib && Ve();
    t = ke(t);
    e._state = false;
    e._value = t;
    if (I && t !== null && typeof t == "object" && !t._promise) {
      S(function () {
        var n = m(t, "stack");
        t._promise = e;
        d(t, "stack", {
          get: function () {
            if (ge) {
              return n && (n.get ? n.get.apply(t) : n.value);
            } else {
              return e.stack;
            }
          }
        });
      });
    }
    (function (e) {
      if (!xe.some(function (t) {
        return t._value === e._value;
      })) {
        xe.push(e);
      }
    })(e);
    Ie(e);
    if (n) {
      Ye();
    }
  }
}
function Ie(e) {
  var t = e._listeners;
  e._listeners = [];
  for (var n = 0, r = t.length; n < r; ++n) {
    Le(e, t[n]);
  }
  var i = e._PSD;
  if (! --i.ref) {
    i.finalize();
  }
  if (Me === 0) {
    ++Me;
    be(function () {
      if (--Me == 0) {
        He();
      }
    }, []);
  }
}
function Le(e, t) {
  if (e._state !== null) {
    var n = e._state ? t.onFulfilled : t.onRejected;
    if (n === null) {
      return (e._state ? t.resolve : t.reject)(e._value);
    }
    ++t.psd.ref;
    ++Me;
    be(je, [n, e, t]);
  } else {
    e._listeners.push(t);
  }
}
function je(e, t, n) {
  try {
    Ee = t;
    var r;
    var i = t._value;
    if (t._state) {
      r = e(i);
    } else {
      if (Se.length) {
        Se = [];
      }
      r = e(i);
      if (Se.indexOf(i) === -1) {
        (function (e) {
          var t = xe.length;
          for (; t;) {
            if (xe[--t]._value === e._value) {
              return void xe.splice(t, 1);
            }
          }
        })(t);
      }
    }
    n.resolve(r);
  } catch (e) {
    n.reject(e);
  } finally {
    Ee = null;
    if (--Me == 0) {
      He();
    }
    if (! --n.psd.ref) {
      n.psd.finalize();
    }
  }
}
function Fe(e, t, n) {
  if (t.length === n) {
    return t;
  }
  var r = "";
  if (e._state === false) {
    var i;
    var a;
    var o = e._value;
    if (o != null) {
      i = o.name || "Error";
      a = o.message || o;
      r = B(o, 0);
    } else {
      i = o;
      a = "";
    }
    t.push(i + (a ? ": " + a : "") + r);
  }
  if (I) {
    if ((r = B(e._stackHolder, 2)) && t.indexOf(r) === -1) {
      t.push(r);
    }
    if (e._prev) {
      Fe(e._prev, t, n);
    }
  }
  return t;
}
function ze(e, t) {
  var n = t ? t._numPrev + 1 : 0;
  if (n < 100) {
    e._prev = t;
    e._numPrev = n;
  }
}
function Be() {
  if (Ve()) {
    Ye();
  }
}
function Ve() {
  var e = we;
  we = false;
  _e = false;
  return e;
}
function Ye() {
  var e;
  var t;
  var n;
  do {
    for (; Te.length > 0;) {
      e = Te;
      Te = [];
      n = e.length;
      t = 0;
      e = Te;
      Te = [];
      n = e.length;
      t = 0;
      for (; t < n; ++t) {
        var r = e[t];
        r[0].apply(null, r[1]);
      }
    }
  } while (Te.length > 0);
  we = true;
  _e = true;
}
function He() {
  var e = xe;
  xe = [];
  e.forEach(function (e) {
    e._PSD.onunhandled.call(null, e._value, e);
  });
  for (var t = Re.slice(0), n = t.length; n;) {
    t[--n]();
  }
}
function $e(e) {
  return new Ae(ue, false, e);
}
function We(e, t) {
  var n = Ne;
  return function () {
    var r = Ve();
    var i = Ne;
    try {
      at(n, true);
      return e.apply(this, arguments);
    } catch (e) {
      if (t) {
        t(e);
      }
    } finally {
      at(i, false);
      if (r) {
        Ye();
      }
    }
  };
}
c(Ae.prototype, {
  then: Pe,
  _then: function (e, t) {
    Le(this, new Ce(null, null, e, t, Ne));
  },
  catch: function (e) {
    if (arguments.length === 1) {
      return this.then(null, e);
    }
    var t = arguments[0];
    var n = arguments[1];
    if (typeof t == "function") {
      return this.then(null, function (e) {
        if (e instanceof t) {
          return n(e);
        } else {
          return $e(e);
        }
      });
    } else {
      return this.then(null, function (e) {
        if (e && e.name === t) {
          return n(e);
        } else {
          return $e(e);
        }
      });
    }
  },
  finally: function (e) {
    return this.then(function (t) {
      e();
      return t;
    }, function (t) {
      e();
      return $e(t);
    });
  },
  stack: {
    get: function () {
      if (this._stack) {
        return this._stack;
      }
      try {
        ge = true;
        var e = Fe(this, [], 20).join("\nFrom previous: ");
        if (this._state !== null) {
          this._stack = e;
        }
        return e;
      } finally {
        ge = false;
      }
    }
  },
  timeout: function (e, t) {
    var n = this;
    if (e < 1 / 0) {
      return new Ae(function (r, i) {
        var a = setTimeout(function () {
          return i(new X.Timeout(t));
        }, e);
        n.then(r, i).finally(clearTimeout.bind(null, a));
      });
    } else {
      return this;
    }
  }
});
if (typeof Symbol != "undefined" && Symbol.toStringTag) {
  d(Ae.prototype, Symbol.toStringTag, "Promise");
}
Oe.env = ot();
c(Ae, {
  all: function () {
    var e = U.apply(null, arguments).map(nt);
    return new Ae(function (t, n) {
      if (e.length === 0) {
        t([]);
      }
      var r = e.length;
      e.forEach(function (i, a) {
        return Ae.resolve(i).then(function (n) {
          e[a] = n;
          if (! --r) {
            t(e);
          }
        }, n);
      });
    });
  },
  resolve: function (e) {
    if (e instanceof Ae) {
      return e;
    }
    if (e && typeof e.then == "function") {
      return new Ae(function (t, n) {
        e.then(t, n);
      });
    }
    var t = new Ae(ue, true, e);
    ze(t, Ee);
    return t;
  },
  reject: $e,
  race: function () {
    var e = U.apply(null, arguments).map(nt);
    return new Ae(function (t, n) {
      e.map(function (e) {
        return Ae.resolve(e).then(t, n);
      });
    });
  },
  PSD: {
    get: function () {
      return Ne;
    },
    set: function (e) {
      return Ne = e;
    }
  },
  newPSD: Je,
  usePSD: st,
  scheduler: {
    get: function () {
      return be;
    },
    set: function (e) {
      be = e;
    }
  },
  rejectionMapper: {
    get: function () {
      return ke;
    },
    set: function (e) {
      ke = e;
    }
  },
  follow: function (e, t) {
    return new Ae(function (n, r) {
      return Je(function (t, n) {
        var r = Ne;
        r.unhandleds = [];
        r.onunhandled = n;
        r.finalize = ne(function () {
          var e = this;
          !function (e) {
            function t() {
              e();
              Re.splice(Re.indexOf(t), 1);
            }
            Re.push(t);
            ++Me;
            be(function () {
              if (--Me == 0) {
                He();
              }
            }, []);
          }(function () {
            if (e.unhandleds.length === 0) {
              t();
            } else {
              n(e.unhandleds[0]);
            }
          });
        }, r.finalize);
        e();
      }, t, n, r);
    });
  }
});
var Ge = {
  awaits: 0,
  echoes: 0,
  id: 0
};
var qe = 0;
var Ke = [];
var Xe = 0;
var Ze = 0;
var Qe = 0;
function Je(e, t, n, r) {
  var i = Ne;
  var a = Object.create(i);
  a.parent = i;
  a.ref = 0;
  a.global = false;
  a.id = ++Qe;
  var s = Oe.env;
  a.env = ve ? {
    Promise: Ae,
    PromiseProp: {
      value: Ae,
      configurable: true,
      writable: true
    },
    all: Ae.all,
    race: Ae.race,
    resolve: Ae.resolve,
    reject: Ae.reject,
    nthen: lt(s.nthen, a),
    gthen: lt(s.gthen, a)
  } : {};
  if (t) {
    o(a, t);
  }
  ++i.ref;
  a.finalize = function () {
    if (! --this.parent.ref) {
      this.parent.finalize();
    }
  };
  var u = st(a, e, n, r);
  if (a.ref === 0) {
    a.finalize();
  }
  return u;
}
function et() {
  if (!Ge.id) {
    Ge.id = ++qe;
  }
  ++Ge.awaits;
  Ge.echoes += 7;
  return Ge.id;
}
function tt(e) {
  if (!(!Ge.awaits || e && e !== Ge.id)) {
    if (--Ge.awaits == 0) {
      Ge.id = 0;
    }
    Ge.echoes = Ge.awaits * 7;
  }
}
function nt(e) {
  if (Ge.echoes && e && e.constructor === pe) {
    et();
    return e.then(function (e) {
      tt();
      return e;
    }, function (e) {
      tt();
      return dt(e);
    });
  } else {
    return e;
  }
}
function rt(e) {
  ++Ze;
  if (!(Ge.echoes && --Ge.echoes != 0)) {
    Ge.echoes = Ge.id = 0;
  }
  Ke.push(Ne);
  at(e, true);
}
function it() {
  var e = Ke[Ke.length - 1];
  Ke.pop();
  at(e, false);
}
function at(e, t) {
  var n;
  var r = Ne;
  if (!(t ? !Ge.echoes || Xe++ && e === Ne : !Xe || --Xe && e === Ne)) {
    n = t ? rt.bind(null, e) : it;
    he.call(ce, n);
  }
  if (e !== Ne && (Ne = e, r === Oe && (Oe.env = ot()), ve)) {
    var i = Oe.env.Promise;
    var o = e.env;
    fe.then = o.nthen;
    i.prototype.then = o.gthen;
    if (r.global || e.global) {
      Object.defineProperty(a, "Promise", o.PromiseProp);
      i.all = o.all;
      i.race = o.race;
      i.resolve = o.resolve;
      i.reject = o.reject;
    }
  }
}
function ot() {
  var e = a.Promise;
  if (ve) {
    return {
      Promise: e,
      PromiseProp: Object.getOwnPropertyDescriptor(a, "Promise"),
      all: e.all,
      race: e.race,
      resolve: e.resolve,
      reject: e.reject,
      nthen: fe.then,
      gthen: e.prototype.then
    };
  } else {
    return {};
  }
}
function st(e, t, n, r, i) {
  var a = Ne;
  try {
    at(e, true);
    return t(n, r, i);
  } finally {
    at(a, false);
  }
}
function ut(e, t, n) {
  if (typeof e != "function") {
    return e;
  } else {
    return function () {
      var r = Ne;
      if (n) {
        et();
      }
      at(t, true);
      try {
        return e.apply(this, arguments);
      } finally {
        at(r, false);
      }
    };
  }
}
function lt(e, t) {
  return function (n, r) {
    return e.call(this, ut(n, t, false), ut(r, t, false));
  };
}
var ct = "unhandledrejection";
function ft(e, t) {
  var n;
  try {
    n = t.onuncatched(e);
  } catch (e) {}
  if (n !== false) {
    try {
      var r;
      var i = {
        promise: t,
        reason: e
      };
      if (a.document && document.createEvent) {
        (r = document.createEvent("Event")).initEvent(ct, true, true);
        o(r, i);
      } else if (a.CustomEvent) {
        o(r = new CustomEvent(ct, {
          detail: i
        }), i);
      }
      if (r && a.dispatchEvent && (dispatchEvent(r), !a.PromiseRejectionEvent && a.onunhandledrejection)) {
        try {
          a.onunhandledrejection(r);
        } catch (e) {}
      }
      if (!r.defaultPrevented) {
        console.warn("Unhandled rejection: " + (e.stack || e));
      }
    } catch (e) {}
  }
}
var dt = Ae.reject;
function ht(e) {
  var t = {};
  var n = function (n, r) {
    if (r) {
      for (var i = arguments.length, a = new Array(i - 1); --i;) {
        a[i - 1] = arguments[i];
      }
      t[n].subscribe.apply(null, a);
      return e;
    }
    if (typeof n == "string") {
      return t[n];
    }
  };
  n.addEventType = s;
  for (var a = 1, o = arguments.length; a < o; ++a) {
    s(arguments[a]);
  }
  return n;
  function s(e, r, i) {
    if (typeof e == "object") {
      return u(e);
    }
    if (!r) {
      r = oe;
    }
    if (!i) {
      i = J;
    }
    var a = {
      subscribers: [],
      fire: i,
      subscribe: function (e) {
        if (a.subscribers.indexOf(e) === -1) {
          a.subscribers.push(e);
          a.fire = r(a.fire, e);
        }
      },
      unsubscribe: function (e) {
        a.subscribers = a.subscribers.filter(function (t) {
          return t !== e;
        });
        a.fire = a.subscribers.reduce(r, i);
      }
    };
    t[e] = n[e] = a;
    return a;
  }
  function u(e) {
    r(e).forEach(function (t) {
      var n = e[t];
      if (i(n)) {
        s(t, e[t][0], e[t][1]);
      } else {
        if (n !== "asap") {
          throw new X.InvalidArgument("Invalid event config");
        }
        var r = s(t, ee, function () {
          for (var e = arguments.length, t = new Array(e); e--;) {
            t[e] = arguments[e];
          }
          r.subscribers.forEach(function (e) {
            w(function () {
              e.apply(null, t);
            });
          });
        });
      }
    });
  }
}
var pt;
var mt = "{version}";
var vt = String.fromCharCode(65535);
var gt = function () {
  try {
    IDBKeyRange.only([[]]);
    return [[]];
  } catch (e) {
    return vt;
  }
}();
var yt = -1 / 0;
var bt = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.";
var wt = "String expected.";
var _t = [];
var xt = typeof navigator != "undefined" && /(MSIE|Trident|Edge)/.test(navigator.userAgent);
var St = xt;
var Et = xt;
var kt = function (e) {
  return !/(dexie\.js|dexie\.min\.js)/.test(e);
};
function Ot(e, t) {
  var n;
  var s;
  var u;
  var f;
  var h;
  var p = Ot.dependencies;
  var m = o({
    addons: Ot.addons,
    autoOpen: true,
    indexedDB: p.indexedDB,
    IDBKeyRange: p.IDBKeyRange
  }, t);
  var v = m.addons;
  var w = m.autoOpen;
  var N = m.indexedDB;
  var M = m.IDBKeyRange;
  var P = this._dbSchema = {};
  var C = [];
  var L = [];
  var j = {};
  var F = null;
  var V = null;
  var Y = false;
  var H = null;
  var $ = false;
  var q = "readonly";
  var K = "readwrite";
  var Z = this;
  var Q = new Ae(function (e) {
    n = e;
  });
  var ne = new Ae(function (e, t) {
    s = t;
  });
  var oe = true;
  var ue = !!jt(N);
  function le(e) {
    this._cfg = {
      version: e,
      storesSource: null,
      dbschema: {},
      tables: {},
      contentUpgrade: null
    };
    this.stores({});
  }
  function ce(e, t, n) {
    var i = Z._createTransaction(K, L, P);
    i.create(t);
    i._completion.catch(n);
    var a = i._reject.bind(i);
    Je(function () {
      Ne.trans = i;
      if (e === 0) {
        r(P).forEach(function (e) {
          fe(t, e, P[e].primKey, P[e].indexes);
        });
        Ae.follow(function () {
          return Z.on.populate.fire(i);
        }).catch(a);
      } else {
        (function (e, t, n) {
          var i = [];
          var a = C.filter(function (t) {
            return t._cfg.version === e;
          })[0];
          if (!a) {
            throw new X.Upgrade("Dexie specification of currently installed DB version is missing");
          }
          P = Z._dbSchema = a._cfg.dbschema;
          var o = false;
          function s() {
            if (i.length) {
              return Ae.resolve(i.shift()(t.idbtrans)).then(s);
            } else {
              return Ae.resolve();
            }
          }
          C.filter(function (t) {
            return t._cfg.version > e;
          }).forEach(function (e) {
            i.push(function () {
              var r = P;
              var i = e._cfg.dbschema;
              Ie(r, n);
              Ie(i, n);
              P = Z._dbSchema = i;
              var a = function (e, t) {
                var n = {
                  del: [],
                  add: [],
                  change: []
                };
                for (var r in e) {
                  if (!t[r]) {
                    n.del.push(r);
                  }
                }
                for (r in t) {
                  var i = e[r];
                  var a = t[r];
                  if (i) {
                    var o = {
                      name: r,
                      def: a,
                      recreate: false,
                      del: [],
                      add: [],
                      change: []
                    };
                    if (i.primKey.src !== a.primKey.src) {
                      o.recreate = true;
                      n.change.push(o);
                    } else {
                      var s = i.idxByName;
                      var u = a.idxByName;
                      for (var l in s) {
                        if (!u[l]) {
                          o.del.push(l);
                        }
                      }
                      for (l in u) {
                        var c = s[l];
                        var f = u[l];
                        if (c) {
                          if (c.src !== f.src) {
                            o.change.push(f);
                          }
                        } else {
                          o.add.push(f);
                        }
                      }
                      if (o.del.length > 0 || o.add.length > 0 || o.change.length > 0) {
                        n.change.push(o);
                      }
                    }
                  } else {
                    n.add.push([r, a]);
                  }
                }
                return n;
              }(r, i);
              a.add.forEach(function (e) {
                fe(n, e[0], e[1].primKey, e[1].indexes);
              });
              a.change.forEach(function (e) {
                if (e.recreate) {
                  throw new X.Upgrade("Not yet support for changing primary key");
                }
                var t = n.objectStore(e.name);
                e.add.forEach(function (e) {
                  de(t, e);
                });
                e.change.forEach(function (e) {
                  t.deleteIndex(e.name);
                  de(t, e);
                });
                e.del.forEach(function (e) {
                  t.deleteIndex(e);
                });
              });
              if (e._cfg.contentUpgrade) {
                o = true;
                return Ae.follow(function () {
                  e._cfg.contentUpgrade(t);
                });
              }
            });
            i.push(function (t) {
              if (!(o && St)) {
                (function (e, t) {
                  for (var n = 0; n < t.db.objectStoreNames.length; ++n) {
                    var r = t.db.objectStoreNames[n];
                    if (e[r] == null) {
                      t.db.deleteObjectStore(r);
                    }
                  }
                })(e._cfg.dbschema, t);
              }
            });
          });
          return s().then(function () {
            !function (e, t) {
              r(e).forEach(function (n) {
                if (!t.db.objectStoreNames.contains(n)) {
                  fe(t, n, e[n].primKey, e[n].indexes);
                }
              });
            }(P, n);
          });
        })(e, i, t).catch(a);
      }
    });
  }
  function fe(e, t, n, r) {
    var i = e.db.createObjectStore(t, n.keyPath ? {
      keyPath: n.keyPath,
      autoIncrement: n.auto
    } : {
      autoIncrement: n.auto
    });
    r.forEach(function (e) {
      de(i, e);
    });
    return i;
  }
  function de(e, t) {
    e.createIndex(t.name, t.keyPath, {
      unique: t.unique,
      multiEntry: t.multi
    });
  }
  function he(e, t, n) {
    if ($ || Ne.letThrough) {
      var r = Z._createTransaction(e, t, P);
      try {
        r.create();
      } catch (e) {
        return dt(e);
      }
      return r._promise(e, function (e, t) {
        return Je(function () {
          Ne.trans = r;
          return n(e, t, r);
        });
      }).then(function (e) {
        return r._completion.then(function () {
          return e;
        });
      });
    }
    if (!Y) {
      if (!w) {
        return dt(new X.DatabaseClosed());
      }
      Z.open().catch(J);
    }
    return Q.then(function () {
      return he(e, t, n);
    });
  }
  function ve(e, t, n) {
    var r = arguments.length;
    if (r < 2) {
      throw new X.InvalidArgument("Too few arguments");
    }
    for (var i = new Array(r - 1); --r;) {
      i[r - 1] = arguments[r];
    }
    n = i.pop();
    var a = T(i);
    return [e, a, n];
  }
  function ge(e, t, n) {
    this.name = e;
    this.schema = t;
    this._tx = n;
    this.hook = j[e] ? j[e].hook : ht(null, {
      creating: [re, J],
      reading: [te, ee],
      updating: [ae, J],
      deleting: [ie, J]
    });
  }
  function ye(e, t, n) {
    return (n ? Pt : Rt)(function (n) {
      e.push(n);
      if (t) {
        t();
      }
    });
  }
  function be(e, t, n, r, i) {
    return new Ae(function (a, o) {
      var s = n.length;
      var u = s - 1;
      if (s === 0) {
        return a();
      }
      if (r) {
        var l;
        var c = Pt(o);
        var f = Mt(null);
        S(function () {
          for (var r = 0; r < s; ++r) {
            l = {
              onsuccess: null,
              onerror: null
            };
            var o = n[r];
            i.call(l, o[0], o[1], t);
            var d = e.delete(o[0]);
            d._hookCtx = l;
            d.onerror = c;
            d.onsuccess = r === u ? Mt(a) : f;
          }
        }, function (e) {
          if (l.onerror) {
            l.onerror(e);
          }
          throw e;
        });
      } else {
        for (var d = 0; d < s; ++d) {
          var h = e.delete(n[d]);
          h.onerror = Rt(o);
          if (d === u) {
            h.onsuccess = We(function () {
              return a();
            });
          }
        }
      }
    });
  }
  function we(e, t, n, r) {
    var i = this;
    this.db = Z;
    this.mode = e;
    this.storeNames = t;
    this.idbtrans = null;
    this.on = ht(this, "complete", "error", "abort");
    this.parent = r || null;
    this.active = true;
    this._reculock = 0;
    this._blockedFuncs = [];
    this._resolve = null;
    this._reject = null;
    this._waitingFor = null;
    this._waitingQueue = null;
    this._spinCount = 0;
    this._completion = new Ae(function (e, t) {
      i._resolve = e;
      i._reject = t;
    });
    this._completion.then(function () {
      i.active = false;
      i.on.complete.fire();
    }, function (e) {
      var t = i.active;
      i.active = false;
      i.on.error.fire(e);
      if (i.parent) {
        i.parent._reject(e);
      } else if (t && i.idbtrans) {
        i.idbtrans.abort();
      }
      return dt(e);
    });
  }
  function _e(e, t, n) {
    this._ctx = {
      table: e,
      index: t === ":id" ? null : t,
      or: n
    };
  }
  function xe(e, t) {
    var n = null;
    var r = null;
    if (t) {
      try {
        n = t();
      } catch (e) {
        r = e;
      }
    }
    var i = e._ctx;
    var a = i.table;
    this._ctx = {
      table: a,
      index: i.index,
      isPrimKey: !i.index || a.schema.primKey.keyPath && i.index === a.schema.primKey.name,
      range: n,
      keysOnly: false,
      dir: "next",
      unique: "",
      algorithm: null,
      filter: null,
      replayFilter: null,
      justLimit: true,
      isMatch: null,
      offset: 0,
      limit: 1 / 0,
      error: r,
      or: i.or,
      valueMapper: a.hook.reading.fire
    };
  }
  function Se(e, t) {
    return !(e.filter || e.algorithm || e.or) && (t ? e.justLimit : !e.replayFilter);
  }
  function Ee(e, t) {
    return e._cfg.version - t._cfg.version;
  }
  function ke(e, t, n) {
    t.forEach(function (t) {
      var r = n[t];
      e.forEach(function (e) {
        if (!(t in e)) {
          if (e === we.prototype || e instanceof we) {
            d(e, t, {
              get: function () {
                return this.table(t);
              }
            });
          } else {
            e[t] = new ge(t, r);
          }
        }
      });
    });
  }
  function Oe(e, t, n, r, i, a) {
    var o = We(a ? function (e, t, r) {
      return n(a(e), t, r);
    } : n, i);
    if (!e.onerror) {
      e.onerror = Rt(i);
    }
    e.onsuccess = x(t ? function () {
      var n = e.result;
      if (n) {
        var a = function () {
          n.continue();
        };
        if (t(n, function (e) {
          a = e;
        }, r, i)) {
          o(n.value, n, function (e) {
            a = e;
          });
        }
        a();
      } else {
        r();
      }
    } : function () {
      var t = e.result;
      if (t) {
        var n = function () {
          t.continue();
        };
        o(t.value, t, function (e) {
          n = e;
        });
        n();
      } else {
        r();
      }
    }, i);
  }
  function Te(e, t) {
    return N.cmp(e, t);
  }
  function Me(e, t) {
    if (Te(e, t) > 0) {
      return e;
    } else {
      return t;
    }
  }
  function Re(e, t) {
    return N.cmp(e, t);
  }
  function Pe(e, t) {
    return N.cmp(t, e);
  }
  function Ce(e, t) {
    if (e < t) {
      return -1;
    } else if (e === t) {
      return 0;
    } else {
      return 1;
    }
  }
  function De(e, t) {
    if (e > t) {
      return -1;
    } else if (e === t) {
      return 0;
    } else {
      return 1;
    }
  }
  function Ue(e, t) {
    if (e) {
      if (t) {
        return function () {
          return e.apply(this, arguments) && t.apply(this, arguments);
        };
      } else {
        return e;
      }
    } else {
      return t;
    }
  }
  function Ie(e, t) {
    for (var n = t.db.objectStoreNames, r = 0; r < n.length; ++r) {
      var i = n[r];
      var o = t.objectStore(i);
      u = "getAll" in o;
      for (var s = 0; s < o.indexNames.length; ++s) {
        var l = o.indexNames[s];
        var c = o.index(l).keyPath;
        var f = typeof c == "string" ? c : "[" + g(c).join("+") + "]";
        if (e[i]) {
          var d = e[i].idxByName[f];
          if (d) {
            d.name = l;
          }
        }
      }
    }
    if (/Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && a.WorkerGlobalScope && a instanceof a.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) {
      u = false;
    }
  }
  function Le(e) {
    Z.on("blocked").fire(e);
    _t.filter(function (e) {
      return e.name === Z.name && e !== Z && !e._vcFired;
    }).map(function (t) {
      return t.on("versionchange").fire(e);
    });
  }
  this.version = function (e) {
    if (F || Y) {
      throw new X.Schema("Cannot add version when database is open");
    }
    this.verno = Math.max(this.verno, e);
    var t = C.filter(function (t) {
      return t._cfg.version === e;
    })[0];
    return t || (t = new le(e), C.push(t), C.sort(Ee), oe = false, t);
  };
  o(le.prototype, {
    stores: function (e) {
      this._cfg.storesSource = this._cfg.storesSource ? o(this._cfg.storesSource, e) : e;
      var t = {};
      C.forEach(function (e) {
        o(t, e._cfg.storesSource);
      });
      var n = this._cfg.dbschema = {};
      this._parseStoresSpec(t, n);
      P = Z._dbSchema = n;
      [j, Z, we.prototype].forEach(function (e) {
        for (var t in e) {
          if (e[t] instanceof ge) {
            delete e[t];
          }
        }
      });
      ke([j, Z, we.prototype, this._cfg.tables], r(n), n);
      L = r(n);
      return this;
    },
    upgrade: function (e) {
      this._cfg.contentUpgrade = e;
      return this;
    },
    _parseStoresSpec: function (e, t) {
      r(e).forEach(function (n) {
        if (e[n] !== null) {
          var r = {};
          var a = function (e) {
            var t = [];
            e.split(",").forEach(function (e) {
              var n = (e = e.trim()).replace(/([&*]|\+\+)/g, "");
              var r = /^\[/.test(n) ? n.match(/^\[(.*)\]$/)[1].split("+") : n;
              t.push(new Ut(n, r || null, /\&/.test(e), /\*/.test(e), /\+\+/.test(e), i(r), /\./.test(e)));
            });
            return t;
          }(e[n]);
          var o = a.shift();
          if (o.multi) {
            throw new X.Schema("Primary key cannot be multi-valued");
          }
          if (o.keyPath) {
            k(r, o.keyPath, o.auto ? 0 : o.keyPath);
          }
          a.forEach(function (e) {
            if (e.auto) {
              throw new X.Schema("Only primary key can be marked as autoIncrement (++)");
            }
            if (!e.keyPath) {
              throw new X.Schema("Index must have a name and cannot be an empty string");
            }
            k(r, e.keyPath, e.compound ? e.keyPath.map(function () {
              return "";
            }) : "");
          });
          t[n] = new It(n, o, a, r);
        }
      });
    }
  });
  this._allTables = j;
  this._createTransaction = function (e, t, n, r) {
    return new we(e, t, n, r);
  };
  this._whenReady = function (e) {
    if ($ || Ne.letThrough) {
      return e();
    } else {
      return new Ae(function (e, t) {
        if (!Y) {
          if (!w) {
            return void t(new X.DatabaseClosed());
          }
          Z.open().catch(J);
        }
        Q.then(e, t);
      }).then(e);
    }
  };
  this.verno = 0;
  this.open = function () {
    if (Y || F) {
      return Q.then(function () {
        if (V) {
          return dt(V);
        } else {
          return Z;
        }
      });
    }
    if (I) {
      ne._stackHolder = z();
    }
    Y = true;
    V = null;
    $ = false;
    var t = n;
    var i = null;
    return Ae.race([ne, new Ae(function (t, n) {
      if (!N) {
        throw new X.MissingAPI("indexedDB API not found. If using IE10+, make sure to run your code on a server URL (not locally). If using old Safari versions, make sure to include indexedDB polyfill.");
      }
      var a = oe ? N.open(e) : N.open(e, Math.round(Z.verno * 10));
      if (!a) {
        throw new X.MissingAPI("IndexedDB API not available");
      }
      a.onerror = Rt(n);
      a.onblocked = We(Le);
      a.onupgradeneeded = We(function (t) {
        i = a.transaction;
        if (oe && !Z._allowEmptyDB) {
          a.onerror = Ct;
          i.abort();
          a.result.close();
          var r = N.deleteDatabase(e);
          r.onsuccess = r.onerror = We(function () {
            n(new X.NoSuchDatabase("Database " + e + " doesnt exist"));
          });
        } else {
          i.onerror = Rt(n);
          ce((t.oldVersion > Math.pow(2, 62) ? 0 : t.oldVersion) / 10, i, n);
        }
      }, n);
      a.onsuccess = We(function () {
        i = null;
        F = a.result;
        _t.push(Z);
        if (oe) {
          !function () {
            Z.verno = F.version / 10;
            Z._dbSchema = P = {};
            if ((L = g(F.objectStoreNames, 0)).length === 0) {
              return;
            }
            const e = Ne.txRelaxedDurabilityEnabled ? {
              durability: "relaxed"
            } : {
              durability: "default"
            };
            var t = F.transaction(Lt(L), "readonly", e);
            L.forEach(function (e) {
              for (var n = t.objectStore(e), r = n.keyPath, i = r && typeof r == "string" && r.indexOf(".") !== -1, a = new Ut(r, r || "", false, false, !!n.autoIncrement, r && typeof r != "string", i), o = [], s = 0; s < n.indexNames.length; ++s) {
                var u = n.index(n.indexNames[s]);
                i = (r = u.keyPath) && typeof r == "string" && r.indexOf(".") !== -1;
                var l = new Ut(u.name, r, !!u.unique, !!u.multiEntry, false, r && typeof r != "string", i);
                o.push(l);
              }
              P[e] = new It(e, a, o, {});
            });
            ke([j], r(P), P);
          }();
        } else if (F.objectStoreNames.length > 0) {
          try {
            const e = Ne.txRelaxedDurabilityEnabled ? {
              durability: "relaxed"
            } : {
              durability: "default"
            };
            Ie(P, F.transaction(Lt(F.objectStoreNames), q, e));
          } catch (e) {}
        }
        F.onversionchange = We(function (e) {
          Z._vcFired = true;
          Z.on("versionchange").fire(e);
        });
        if (!(ue || e === "__dbnames")) {
          pt.dbnames.put({
            name: e
          }).catch(J);
        }
        t();
      }, n);
    })]).then(function () {
      H = [];
      return Ae.resolve(Ot.vip(Z.on.ready.fire)).then(function e() {
        if (H.length > 0) {
          var t = H.reduce(se, J);
          H = [];
          return Ae.resolve(Ot.vip(t)).then(e);
        }
      });
    }).finally(function () {
      H = null;
    }).then(function () {
      Y = false;
      return Z;
    }).catch(function (e) {
      try {
        if (i) {
          i.abort();
        }
      } catch (e) {}
      Y = false;
      Z.close();
      return dt(V = e);
    }).finally(function () {
      $ = true;
      t();
    });
  };
  this.close = function () {
    var e = _t.indexOf(Z);
    if (e >= 0) {
      _t.splice(e, 1);
    }
    if (F) {
      try {
        F.close();
      } catch (e) {}
      F = null;
    }
    w = false;
    V = new X.DatabaseClosed();
    if (Y) {
      s(V);
    }
    Q = new Ae(function (e) {
      n = e;
    });
    ne = new Ae(function (e, t) {
      s = t;
    });
  };
  this.delete = function () {
    var t = arguments.length > 0;
    return new Ae(function (n, r) {
      if (t) {
        throw new X.InvalidArgument("Arguments not allowed in db.delete()");
      }
      function i() {
        Z.close();
        var t = N.deleteDatabase(e);
        t.onsuccess = We(function () {
          if (!ue) {
            pt.dbnames.delete(e).catch(J);
          }
          n();
        });
        t.onerror = Rt(r);
        t.onblocked = Le;
      }
      if (Y) {
        Q.then(i);
      } else {
        i();
      }
    });
  };
  this.backendDB = function () {
    return F;
  };
  this.isOpen = function () {
    return F !== null;
  };
  this.hasBeenClosed = function () {
    return V && V instanceof X.DatabaseClosed;
  };
  this.hasFailed = function () {
    return V !== null;
  };
  this.dynamicallyOpened = function () {
    return oe;
  };
  this.name = e;
  c(this, {
    tables: {
      get: function () {
        return r(j).map(function (e) {
          return j[e];
        });
      }
    }
  });
  this.on = ht(this, "populate", "blocked", "versionchange", {
    ready: [se, J]
  });
  this.on.ready.subscribe = y(this.on.ready.subscribe, function (e) {
    return function (t, n) {
      Ot.vip(function () {
        if ($) {
          if (!V) {
            Ae.resolve().then(t);
          }
          if (n) {
            e(t);
          }
        } else if (H) {
          H.push(t);
          if (n) {
            e(t);
          }
        } else {
          e(t);
          if (!n) {
            e(function e() {
              Z.on.ready.unsubscribe(t);
              Z.on.ready.unsubscribe(e);
            });
          }
        }
      });
    };
  });
  this.transaction = function () {
    var e = ve.apply(this, arguments);
    return this._transaction.apply(this, e);
  };
  this._transaction = function (e, t, n) {
    var r = Ne.trans;
    if (!(r && r.db === Z && e.indexOf("!") === -1)) {
      r = null;
    }
    var i = e.indexOf("?") !== -1;
    e = e.replace("!", "").replace("?", "");
    try {
      var a = t.map(function (e) {
        var t = e instanceof ge ? e.name : e;
        if (typeof t != "string") {
          throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
        }
        return t;
      });
      if (e == "r" || e == q) {
        e = q;
      } else {
        if (e != "rw" && e != K) {
          throw new X.InvalidArgument("Invalid transaction mode: " + e);
        }
        e = K;
      }
      if (r) {
        if (r.mode === q && e === K) {
          if (!i) {
            throw new X.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
          }
          r = null;
        }
        if (r) {
          a.forEach(function (e) {
            if (r && r.storeNames.indexOf(e) === -1) {
              if (!i) {
                throw new X.SubTransaction("Table " + e + " not included in parent transaction.");
              }
              r = null;
            }
          });
        }
        if (i && r && !r.active) {
          r = null;
        }
      }
    } catch (e) {
      if (r) {
        return r._promise(null, function (t, n) {
          n(e);
        });
      } else {
        return dt(e);
      }
    }
    if (r) {
      return r._promise(e, o, "lock");
    } else if (Ne.trans) {
      return st(Ne.transless, function () {
        return Z._whenReady(o);
      });
    } else {
      return Z._whenReady(o);
    }
    function o() {
      return Ae.resolve().then(function () {
        var t;
        var i = Ne.transless || Ne;
        var o = Z._createTransaction(e, a, P, r);
        var s = {
          trans: o,
          transless: i
        };
        if (r) {
          o.idbtrans = r.idbtrans;
        } else {
          o.create();
        }
        if (n.constructor === me) {
          et();
        }
        var u = Ae.follow(function () {
          if (t = n.call(o, o)) {
            if (t.constructor === pe) {
              var e = tt.bind(null, null);
              t.then(e, e);
            } else if (typeof t.next == "function" && typeof t.throw == "function") {
              t = Dt(t);
            }
          }
        }, s);
        return (t && typeof t.then == "function" ? Ae.resolve(t).then(function (e) {
          if (o.active) {
            return e;
          } else {
            return dt(new X.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
          }
        }) : u.then(function () {
          return t;
        })).then(function (e) {
          if (r) {
            o._resolve();
          }
          return o._completion.then(function () {
            return e;
          });
        }).catch(function (e) {
          o._reject(e);
          return dt(e);
        });
      });
    }
  };
  this.table = function (e) {
    if (!l(j, e)) {
      throw new X.InvalidTable("Table " + e + " does not exist");
    }
    return j[e];
  };
  c(ge.prototype, {
    _trans: function (e, t, n) {
      var r = this._tx || Ne.trans;
      if (r && r.db === Z) {
        if (r === Ne.trans) {
          return r._promise(e, t, n);
        } else {
          return Je(function () {
            return r._promise(e, t, n);
          }, {
            trans: r,
            transless: Ne.transless || Ne
          });
        }
      } else {
        return he(e, [this.name], t);
      }
    },
    _idbstore: function (e, t, n) {
      var r = this.name;
      return this._trans(e, function (e, n, i) {
        if (i.storeNames.indexOf(r) === -1) {
          throw new X.NotFound("Table" + r + " not part of transaction");
        }
        return t(e, n, i.idbtrans.objectStore(r), i);
      }, n);
    },
    get: function (e, t) {
      if (e && e.constructor === Object) {
        return this.where(e).first(t);
      }
      var n = this;
      return this._idbstore(q, function (t, r, i) {
        var a = i.get(e);
        a.onerror = Rt(r);
        a.onsuccess = We(function () {
          t(n.hook.reading.fire(a.result));
        }, r);
      }).then(t);
    },
    where: function (e) {
      if (typeof e == "string") {
        return new _e(this, e);
      }
      if (i(e)) {
        return new _e(this, "[" + e.join("+") + "]");
      }
      var t = r(e);
      if (t.length === 1) {
        return this.where(t[0]).equals(e[t[0]]);
      }
      var n = this.schema.indexes.concat(this.schema.primKey).filter(function (e) {
        return e.compound && t.every(function (t) {
          return e.keyPath.indexOf(t) >= 0;
        }) && e.keyPath.every(function (e) {
          return t.indexOf(e) >= 0;
        });
      })[0];
      if (n && gt !== vt) {
        return this.where(n.name).equals(n.keyPath.map(function (t) {
          return e[t];
        }));
      }
      if (!n) {
        console.warn("The query " + JSON.stringify(e) + " on " + this.name + " would benefit of a compound index [" + t.join("+") + "]");
      }
      var a = this.schema.idxByName;
      var o = t.reduce(function (t, n) {
        return [t[0] || a[n], t[0] || !a[n] ? Ue(t[1], function (t) {
          return "" + E(t, n) == "" + e[n];
        }) : t[1]];
      }, [null, null]);
      var s = o[0];
      if (s) {
        return this.where(s.name).equals(e[s.keyPath]).filter(o[1]);
      } else if (n) {
        return this.filter(o[1]);
      } else {
        return this.where(t).equals("");
      }
    },
    count: function (e) {
      return this.toCollection().count(e);
    },
    offset: function (e) {
      return this.toCollection().offset(e);
    },
    limit: function (e) {
      return this.toCollection().limit(e);
    },
    reverse: function () {
      return this.toCollection().reverse();
    },
    filter: function (e) {
      return this.toCollection().and(e);
    },
    each: function (e) {
      return this.toCollection().each(e);
    },
    toArray: function (e) {
      return this.toCollection().toArray(e);
    },
    orderBy: function (e) {
      return new xe(new _e(this, i(e) ? "[" + e.join("+") + "]" : e));
    },
    toCollection: function () {
      return new xe(new _e(this));
    },
    mapToClass: function (e, t) {
      this.schema.mappedClass = e;
      var n = Object.create(e.prototype);
      if (t) {
        Tt(n, t);
      }
      this.schema.instanceTemplate = n;
      var r = function (t) {
        if (!t) {
          return t;
        }
        var n = Object.create(e.prototype);
        for (var r in t) {
          if (l(t, r)) {
            try {
              n[r] = t[r];
            } catch (e) {}
          }
        }
        return n;
      };
      if (this.schema.readHook) {
        this.hook.reading.unsubscribe(this.schema.readHook);
      }
      this.schema.readHook = r;
      this.hook("reading", r);
      return e;
    },
    defineClass: function (e) {
      return this.mapToClass(Ot.defineClass(e), e);
    },
    bulkDelete: function (e) {
      if (this.hook.deleting.fire === J) {
        return this._idbstore(K, function (t, n, r, i) {
          t(be(r, i, e, false, J));
        });
      } else {
        return this.where(":id").anyOf(e).delete().then(function () {});
      }
    },
    bulkPut: function (e, t) {
      var n = this;
      return this._idbstore(K, function (r, i, a) {
        if (!a.keyPath && !n.schema.primKey.auto && !t) {
          throw new X.InvalidArgument("bulkPut() with non-inbound keys requires keys array in second argument");
        }
        if (a.keyPath && t) {
          throw new X.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
        }
        if (t && t.length !== e.length) {
          throw new X.InvalidArgument("Arguments objects and keys must have the same length");
        }
        if (e.length === 0) {
          return r();
        }
        var o;
        var s;
        var u = function (e) {
          if (l.length === 0) {
            r(e);
          } else {
            i(new G(n.name + ".bulkPut(): " + l.length + " of " + c + " operations failed", l));
          }
        };
        var l = [];
        var c = e.length;
        var f = n;
        if (n.hook.creating.fire === J && n.hook.updating.fire === J) {
          s = ye(l);
          for (var d = 0, h = e.length; d < h; ++d) {
            (o = t ? a.put(e[d], t[d]) : a.put(e[d])).onerror = s;
          }
          o.onerror = ye(l, u);
          o.onsuccess = At(u);
        } else {
          var p = t || a.keyPath && e.map(function (e) {
            return E(e, a.keyPath);
          });
          var m = p && _(p, function (t, n) {
            return t != null && [t, e[n]];
          });
          (p ? f.where(":id").anyOf(p.filter(function (e) {
            return e != null;
          })).modify(function () {
            this.value = m[this.primKey];
            m[this.primKey] = null;
          }).catch(W, function (e) {
            l = e.failures;
          }).then(function () {
            for (var n = [], r = t && [], i = p.length - 1; i >= 0; --i) {
              var a = p[i];
              if (a == null || m[a]) {
                n.push(e[i]);
                if (t) {
                  r.push(a);
                }
                if (a != null) {
                  m[a] = null;
                }
              }
            }
            n.reverse();
            if (t) {
              r.reverse();
            }
            return f.bulkAdd(n, r);
          }).then(function (e) {
            var t = p[p.length - 1];
            if (t != null) {
              return t;
            } else {
              return e;
            }
          }) : f.bulkAdd(e)).then(u).catch(G, function (e) {
            l = l.concat(e.failures);
            u();
          }).catch(i);
        }
      }, "locked");
    },
    bulkAdd: function (e, t) {
      var n = this;
      var r = this.hook.creating.fire;
      return this._idbstore(K, function (i, a, o, s) {
        if (!o.keyPath && !n.schema.primKey.auto && !t) {
          throw new X.InvalidArgument("bulkAdd() with non-inbound keys requires keys array in second argument");
        }
        if (o.keyPath && t) {
          throw new X.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
        }
        if (t && t.length !== e.length) {
          throw new X.InvalidArgument("Arguments objects and keys must have the same length");
        }
        if (e.length === 0) {
          return i();
        }
        function u(e) {
          if (d.length === 0) {
            i(e);
          } else {
            a(new G(n.name + ".bulkAdd(): " + d.length + " of " + h + " operations failed", d));
          }
        }
        var l;
        var c;
        var f;
        var d = [];
        var h = e.length;
        if (r !== J) {
          var p;
          var m = o.keyPath;
          c = ye(d, null, true);
          f = Mt(null);
          S(function () {
            for (var n = 0, i = e.length; n < i; ++n) {
              p = {
                onerror: null,
                onsuccess: null
              };
              var a = t && t[n];
              var u = e[n];
              var d = t ? a : m ? E(u, m) : undefined;
              var h = r.call(p, d, u, s);
              if (d == null && h != null) {
                if (m) {
                  k(u = R(u), m, h);
                } else {
                  a = h;
                }
              }
              (l = a != null ? o.add(u, a) : o.add(u))._hookCtx = p;
              if (n < i - 1) {
                l.onerror = c;
                if (p.onsuccess) {
                  l.onsuccess = f;
                }
              }
            }
          }, function (e) {
            if (p.onerror) {
              p.onerror(e);
            }
            throw e;
          });
          l.onerror = ye(d, u, true);
          l.onsuccess = Mt(u);
        } else {
          c = ye(d);
          for (var v = 0, g = e.length; v < g; ++v) {
            (l = t ? o.add(e[v], t[v]) : o.add(e[v])).onerror = c;
          }
          l.onerror = ye(d, u);
          l.onsuccess = At(u);
        }
      });
    },
    add: function (e, t) {
      var n = this.hook.creating.fire;
      return this._idbstore(K, function (r, i, a, o) {
        var s = {
          onsuccess: null,
          onerror: null
        };
        if (n !== J) {
          var u = t != null ? t : a.keyPath ? E(e, a.keyPath) : undefined;
          var l = n.call(s, u, e, o);
          if (u == null && l != null) {
            if (a.keyPath) {
              k(e, a.keyPath, l);
            } else {
              t = l;
            }
          }
        }
        try {
          var c = t != null ? a.add(e, t) : a.add(e);
          c._hookCtx = s;
          c.onerror = Pt(i);
          c.onsuccess = Mt(function (t) {
            var n = a.keyPath;
            if (n) {
              k(e, n, t);
            }
            r(t);
          });
        } catch (e) {
          if (s.onerror) {
            s.onerror(e);
          }
          throw e;
        }
      });
    },
    put: function (e, t) {
      var n = this;
      var r = this.hook.creating.fire;
      var i = this.hook.updating.fire;
      if (r !== J || i !== J) {
        var a = this.schema.primKey.keyPath;
        var o = t !== undefined ? t : a && E(e, a);
        if (o == null) {
          return this.add(e);
        } else {
          e = R(e);
          return this._trans(K, function () {
            return n.where(":id").equals(o).modify(function () {
              this.value = e;
            }).then(function (r) {
              if (r === 0) {
                return n.add(e, t);
              } else {
                return o;
              }
            });
          }, "locked");
        }
      }
      return this._idbstore(K, function (n, r, i) {
        var a = t !== undefined ? i.put(e, t) : i.put(e);
        a.onerror = Rt(r);
        a.onsuccess = We(function (t) {
          var r = i.keyPath;
          if (r) {
            k(e, r, t.target.result);
          }
          n(a.result);
        });
      });
    },
    delete: function (e) {
      if (this.hook.deleting.subscribers.length) {
        return this.where(":id").equals(e).delete();
      } else {
        return this._idbstore(K, function (t, n, r) {
          var i = r.delete(e);
          i.onerror = Rt(n);
          i.onsuccess = We(function () {
            t(i.result);
          });
        });
      }
    },
    clear: function () {
      if (this.hook.deleting.subscribers.length) {
        return this.toCollection().delete();
      } else {
        return this._idbstore(K, function (e, t, n) {
          var r = n.clear();
          r.onerror = Rt(t);
          r.onsuccess = We(function () {
            e(r.result);
          });
        });
      }
    },
    update: function (e, t) {
      if (typeof t != "object" || i(t)) {
        throw new X.InvalidArgument("Modifications must be an object.");
      }
      if (typeof e != "object" || i(e)) {
        return this.where(":id").equals(e).modify(t);
      }
      r(t).forEach(function (n) {
        k(e, n, t[n]);
      });
      var n = E(e, this.schema.primKey.keyPath);
      if (n === undefined) {
        return dt(new X.InvalidArgument("Given object does not contain its primary key"));
      } else {
        return this.where(":id").equals(n).modify(t);
      }
    }
  });
  c(we.prototype, {
    _lock: function () {
      b(!Ne.global);
      ++this._reculock;
      if (!(this._reculock !== 1 || Ne.global)) {
        Ne.lockOwnerFor = this;
      }
      return this;
    },
    _unlock: function () {
      b(!Ne.global);
      if (--this._reculock == 0) {
        for (Ne.global || (Ne.lockOwnerFor = null); this._blockedFuncs.length > 0 && !this._locked();) {
          var e = this._blockedFuncs.shift();
          try {
            st(e[1], e[0]);
          } catch (e) {}
        }
      }
      return this;
    },
    _locked: function () {
      return this._reculock && Ne.lockOwnerFor !== this;
    },
    create: function (e) {
      var t = this;
      if (!this.mode) {
        return this;
      }
      b(!this.idbtrans);
      if (!e && !F) {
        switch (V && V.name) {
          case "DatabaseClosedError":
            throw new X.DatabaseClosed(V);
          case "MissingAPIError":
            throw new X.MissingAPI(V.message, V);
          default:
            throw new X.OpenFailed(V);
        }
      }
      if (!this.active) {
        throw new X.TransactionInactive();
      }
      b(this._completion._state === null);
      const n = Ne.txRelaxedDurabilityEnabled ? {
        durability: "relaxed"
      } : {
        durability: "default"
      };
      (e = this.idbtrans = e || F.transaction(Lt(this.storeNames), this.mode, n)).onerror = We(function (n) {
        Ct(n);
        t._reject(e.error);
      });
      e.onabort = We(function (n) {
        Ct(n);
        if (t.active) {
          t._reject(new X.Abort(e.error));
        }
        t.active = false;
        t.on("abort").fire(n);
      });
      e.oncomplete = We(function () {
        t.active = false;
        t._resolve();
      });
      return this;
    },
    _promise: function (e, t, n) {
      var r = this;
      if (e === K && this.mode !== K) {
        return dt(new X.ReadOnly("Transaction is readonly"));
      }
      if (!this.active) {
        return dt(new X.TransactionInactive());
      }
      if (this._locked()) {
        return new Ae(function (i, a) {
          r._blockedFuncs.push([function () {
            r._promise(e, t, n).then(i, a);
          }, Ne]);
        });
      }
      if (n) {
        return Je(function () {
          var e = new Ae(function (e, n) {
            r._lock();
            var i = t(e, n, r);
            if (i && i.then) {
              i.then(e, n);
            }
          });
          e.finally(function () {
            return r._unlock();
          });
          e._lib = true;
          return e;
        });
      }
      var i = new Ae(function (e, n) {
        var i = t(e, n, r);
        if (i && i.then) {
          i.then(e, n);
        }
      });
      i._lib = true;
      return i;
    },
    _root: function () {
      if (this.parent) {
        return this.parent._root();
      } else {
        return this;
      }
    },
    waitFor: function (e) {
      var t = this._root();
      e = Ae.resolve(e);
      if (t._waitingFor) {
        t._waitingFor = t._waitingFor.then(function () {
          return e;
        });
      } else {
        t._waitingFor = e;
        t._waitingQueue = [];
        var n = t.idbtrans.objectStore(t.storeNames[0]);
        !function e() {
          for (++t._spinCount; t._waitingQueue.length;) {
            t._waitingQueue.shift()();
          }
          if (t._waitingFor) {
            n.get(-1 / 0).onsuccess = e;
          }
        }();
      }
      var r = t._waitingFor;
      return new Ae(function (n, i) {
        e.then(function (e) {
          return t._waitingQueue.push(We(n.bind(null, e)));
        }, function (e) {
          return t._waitingQueue.push(We(i.bind(null, e)));
        }).finally(function () {
          if (t._waitingFor === r) {
            t._waitingFor = null;
          }
        });
      });
    },
    abort: function () {
      if (this.active) {
        this._reject(new X.Abort());
      }
      this.active = false;
    },
    tables: {
      get: (f = "Transaction.tables", h = function () {
        return j;
      }, function () {
        console.warn(f + " is deprecated. See https://github.com/dfahlander/Dexie.js/wiki/Deprecations. " + B(z(), 1));
        return h.apply(this, arguments);
      })
    },
    table: function (e) {
      return new ge(e, Z.table(e).schema, this);
    }
  });
  c(_e.prototype, function () {
    function e(e, t, n) {
      var r = e instanceof _e ? new xe(e) : e;
      r._ctx.error = n ? new n(t) : new TypeError(t);
      return r;
    }
    function t(e) {
      return new xe(e, function () {
        return M.only("");
      }).limit(0);
    }
    function n(e, t, n, r, i, a) {
      for (var o = Math.min(e.length, r.length), s = -1, u = 0; u < o; ++u) {
        var l = t[u];
        if (l !== r[u]) {
          if (i(e[u], n[u]) < 0) {
            return e.substr(0, u) + n[u] + n.substr(u + 1);
          } else if (i(e[u], r[u]) < 0) {
            return e.substr(0, u) + r[u] + n.substr(u + 1);
          } else if (s >= 0) {
            return e.substr(0, s) + t[s] + n.substr(s + 1);
          } else {
            return null;
          }
        }
        if (i(e[u], l) < 0) {
          s = u;
        }
      }
      if (o < r.length && a === "next") {
        return e + n.substr(e.length);
      } else if (o < e.length && a === "prev") {
        return e.substr(0, n.length);
      } else if (s < 0) {
        return null;
      } else {
        return e.substr(0, s) + r[s] + n.substr(s + 1);
      }
    }
    function r(t, r, i, a) {
      var o;
      var s;
      var u;
      var l;
      var c;
      var f;
      var d;
      var h = i.length;
      if (!i.every(function (e) {
        return typeof e == "string";
      })) {
        return e(t, wt);
      }
      function p(e) {
        o = function (e) {
          if (e === "next") {
            return function (e) {
              return e.toUpperCase();
            };
          } else {
            return function (e) {
              return e.toLowerCase();
            };
          }
        }(e);
        s = function (e) {
          if (e === "next") {
            return function (e) {
              return e.toLowerCase();
            };
          } else {
            return function (e) {
              return e.toUpperCase();
            };
          }
        }(e);
        u = e === "next" ? Ce : De;
        var t = i.map(function (e) {
          return {
            lower: s(e),
            upper: o(e)
          };
        }).sort(function (e, t) {
          return u(e.lower, t.lower);
        });
        l = t.map(function (e) {
          return e.upper;
        });
        c = t.map(function (e) {
          return e.lower;
        });
        f = e;
        d = e === "next" ? "" : a;
      }
      p("next");
      var m = new xe(t, function () {
        return M.bound(l[0], c[h - 1] + a);
      });
      m._ondirectionchange = function (e) {
        p(e);
      };
      var v = 0;
      m._addAlgorithm(function (e, t, i) {
        var a = e.key;
        if (typeof a != "string") {
          return false;
        }
        var o = s(a);
        if (r(o, c, v)) {
          return true;
        }
        for (var p = null, m = v; m < h; ++m) {
          var g = n(a, o, l[m], c[m], u, f);
          if (g === null && p === null) {
            v = m + 1;
          } else if (p === null || u(p, g) > 0) {
            p = g;
          }
        }
        t(p !== null ? function () {
          e.continue(p + d);
        } : i);
        return false;
      });
      return m;
    }
    return {
      between: function (n, r, i, a) {
        i = i !== false;
        a = a === true;
        try {
          if (Te(n, r) > 0 || Te(n, r) === 0 && (i || a) && (!i || !a)) {
            return t(this);
          } else {
            return new xe(this, function () {
              return M.bound(n, r, !i, !a);
            });
          }
        } catch (t) {
          return e(this, bt);
        }
      },
      equals: function (e) {
        return new xe(this, function () {
          return M.only(e);
        });
      },
      above: function (e) {
        return new xe(this, function () {
          return M.lowerBound(e, true);
        });
      },
      aboveOrEqual: function (e) {
        return new xe(this, function () {
          return M.lowerBound(e);
        });
      },
      below: function (e) {
        return new xe(this, function () {
          return M.upperBound(e, true);
        });
      },
      belowOrEqual: function (e) {
        return new xe(this, function () {
          return M.upperBound(e);
        });
      },
      startsWith: function (t) {
        if (typeof t != "string") {
          return e(this, wt);
        } else {
          return this.between(t, t + vt, true, true);
        }
      },
      startsWithIgnoreCase: function (e) {
        if (e === "") {
          return this.startsWith(e);
        } else {
          return r(this, function (e, t) {
            return e.indexOf(t[0]) === 0;
          }, [e], vt);
        }
      },
      equalsIgnoreCase: function (e) {
        return r(this, function (e, t) {
          return e === t[0];
        }, [e], "");
      },
      anyOfIgnoreCase: function () {
        var e = U.apply(D, arguments);
        if (e.length === 0) {
          return t(this);
        } else {
          return r(this, function (e, t) {
            return t.indexOf(e) !== -1;
          }, e, "");
        }
      },
      startsWithAnyOfIgnoreCase: function () {
        var e = U.apply(D, arguments);
        if (e.length === 0) {
          return t(this);
        } else {
          return r(this, function (e, t) {
            return t.some(function (t) {
              return e.indexOf(t) === 0;
            });
          }, e, vt);
        }
      },
      anyOf: function () {
        var n = U.apply(D, arguments);
        var r = Re;
        try {
          n.sort(r);
        } catch (t) {
          return e(this, bt);
        }
        if (n.length === 0) {
          return t(this);
        }
        var i = new xe(this, function () {
          return M.bound(n[0], n[n.length - 1]);
        });
        i._ondirectionchange = function (e) {
          r = e === "next" ? Re : Pe;
          n.sort(r);
        };
        var a = 0;
        i._addAlgorithm(function (e, t, i) {
          for (var o = e.key; r(o, n[a]) > 0;) {
            if (++a === n.length) {
              t(i);
              return false;
            }
          }
          return r(o, n[a]) === 0 || (t(function () {
            e.continue(n[a]);
          }), false);
        });
        return i;
      },
      notEqual: function (e) {
        return this.inAnyRange([[yt, e], [e, gt]], {
          includeLowers: false,
          includeUppers: false
        });
      },
      noneOf: function () {
        var t = U.apply(D, arguments);
        if (t.length === 0) {
          return new xe(this);
        }
        try {
          t.sort(Re);
        } catch (t) {
          return e(this, bt);
        }
        var n = t.reduce(function (e, t) {
          if (e) {
            return e.concat([[e[e.length - 1][1], t]]);
          } else {
            return [[yt, t]];
          }
        }, null);
        n.push([t[t.length - 1], gt]);
        return this.inAnyRange(n, {
          includeLowers: false,
          includeUppers: false
        });
      },
      inAnyRange: function (n, r) {
        if (n.length === 0) {
          return t(this);
        }
        if (!n.every(function (e) {
          return e[0] !== undefined && e[1] !== undefined && Re(e[0], e[1]) <= 0;
        })) {
          return e(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", X.InvalidArgument);
        }
        var i = !r || r.includeLowers !== false;
        var a = r && r.includeUppers === true;
        var o;
        var s = Re;
        function u(e, t) {
          return s(e[0], t[0]);
        }
        try {
          (o = n.reduce(function (e, t) {
            for (var n = 0, r = e.length; n < r; ++n) {
              var i = e[n];
              if (Te(t[0], i[1]) < 0 && Te(t[1], i[0]) > 0) {
                i[0] = Te(a = i[0], o = t[0]) < 0 ? a : o;
                i[1] = Me(i[1], t[1]);
                break;
              }
            }
            var a;
            var o;
            if (n === r) {
              e.push(t);
            }
            return e;
          }, [])).sort(u);
        } catch (t) {
          return e(this, bt);
        }
        var l = 0;
        var c = a ? function (e) {
          return Re(e, o[l][1]) > 0;
        } : function (e) {
          return Re(e, o[l][1]) >= 0;
        };
        var f = i ? function (e) {
          return Pe(e, o[l][0]) > 0;
        } : function (e) {
          return Pe(e, o[l][0]) >= 0;
        };
        var d = c;
        var h = new xe(this, function () {
          return M.bound(o[0][0], o[o.length - 1][1], !i, !a);
        });
        h._ondirectionchange = function (e) {
          if (e === "next") {
            d = c;
            s = Re;
          } else {
            d = f;
            s = Pe;
          }
          o.sort(u);
        };
        h._addAlgorithm(function (e, t, n) {
          for (var r = e.key; d(r);) {
            if (++l === o.length) {
              t(n);
              return false;
            }
          }
          return !!function (e) {
            return !c(e) && !f(e);
          }(r) || (Te(r, o[l][1]) === 0 || Te(r, o[l][0]) === 0 || t(function () {
            if (s === Re) {
              e.continue(o[l][0]);
            } else {
              e.continue(o[l][1]);
            }
          }), false);
        });
        return h;
      },
      startsWithAnyOf: function () {
        var n = U.apply(D, arguments);
        if (n.every(function (e) {
          return typeof e == "string";
        })) {
          if (n.length === 0) {
            return t(this);
          } else {
            return this.inAnyRange(n.map(function (e) {
              return [e, e + vt];
            }));
          }
        } else {
          return e(this, "startsWithAnyOf() only works with strings");
        }
      }
    };
  });
  c(xe.prototype, function () {
    function e(e, t) {
      e.filter = Ue(e.filter, t);
    }
    function t(e, t, n) {
      var r = e.replayFilter;
      e.replayFilter = r ? function () {
        return Ue(r(), t());
      } : t;
      e.justLimit = n && !r;
    }
    function n(e, t) {
      if (e.isPrimKey) {
        return t;
      }
      var n = e.table.schema.idxByName[e.index];
      if (!n) {
        throw new X.Schema("KeyPath " + e.index + " on object store " + t.name + " is not indexed");
      }
      return t.index(n.name);
    }
    function i(e, t) {
      var r = n(e, t);
      if (e.keysOnly && "openKeyCursor" in r) {
        return r.openKeyCursor(e.range || null, e.dir + e.unique);
      } else {
        return r.openCursor(e.range || null, e.dir + e.unique);
      }
    }
    function a(e, t, n, r, a) {
      var o = e.replayFilter ? Ue(e.filter, e.replayFilter()) : e.filter;
      if (e.or) {
        (function () {
          var s = {};
          var u = 0;
          function c() {
            if (++u == 2) {
              n();
            }
          }
          function f(e, n, i) {
            if (!o || o(n, i, c, r)) {
              var a = n.primaryKey;
              var u = "" + a;
              if (u === "[object ArrayBuffer]") {
                u = "" + new Uint8Array(a);
              }
              if (!l(s, u)) {
                s[u] = true;
                t(e, n, i);
              }
            }
          }
          e.or._iterate(f, c, r, a);
          Oe(i(e, a), e.algorithm, f, c, r, !e.keysOnly && e.valueMapper);
        })();
      } else {
        Oe(i(e, a), Ue(e.algorithm, o), t, n, r, !e.keysOnly && e.valueMapper);
      }
    }
    return {
      _read: function (e, t) {
        var n = this._ctx;
        if (n.error) {
          return n.table._trans(null, dt.bind(null, n.error));
        } else {
          return n.table._idbstore(q, e).then(t);
        }
      },
      _write: function (e) {
        var t = this._ctx;
        if (t.error) {
          return t.table._trans(null, dt.bind(null, t.error));
        } else {
          return t.table._idbstore(K, e, "locked");
        }
      },
      _addAlgorithm: function (e) {
        var t = this._ctx;
        t.algorithm = Ue(t.algorithm, e);
      },
      _iterate: function (e, t, n, r) {
        return a(this._ctx, e, t, n, r);
      },
      clone: function (e) {
        var t = Object.create(this.constructor.prototype);
        var n = Object.create(this._ctx);
        if (e) {
          o(n, e);
        }
        t._ctx = n;
        return t;
      },
      raw: function () {
        this._ctx.valueMapper = null;
        return this;
      },
      each: function (e) {
        var t = this._ctx;
        return this._read(function (n, r, i) {
          a(t, e, n, r, i);
        });
      },
      count: function (e) {
        var t = this._ctx;
        if (Se(t, true)) {
          return this._read(function (e, r, i) {
            var a = n(t, i);
            var o = t.range ? a.count(t.range) : a.count();
            o.onerror = Rt(r);
            o.onsuccess = function (n) {
              e(Math.min(n.target.result, t.limit));
            };
          }, e);
        }
        var r = 0;
        return this._read(function (e, n, i) {
          a(t, function () {
            ++r;
            return false;
          }, function () {
            e(r);
          }, n, i);
        }, e);
      },
      sortBy: function (e, t) {
        var n = e.split(".").reverse();
        var r = n[0];
        var i = n.length - 1;
        function a(e, t) {
          if (t) {
            return a(e[n[t]], t - 1);
          } else {
            return e[r];
          }
        }
        var o = this._ctx.dir === "next" ? 1 : -1;
        function s(e, t) {
          var n = a(e, i);
          var r = a(t, i);
          if (n < r) {
            return -o;
          } else if (n > r) {
            return o;
          } else {
            return 0;
          }
        }
        return this.toArray(function (e) {
          return e.sort(s);
        }).then(t);
      },
      toArray: function (e) {
        var t = this._ctx;
        return this._read(function (e, r, i) {
          if (u && t.dir === "next" && Se(t, true) && t.limit > 0) {
            var o = t.table.hook.reading.fire;
            var s = n(t, i);
            var l = t.limit < 1 / 0 ? s.getAll(t.range, t.limit) : s.getAll(t.range);
            l.onerror = Rt(r);
            l.onsuccess = At(o === ee ? e : function (t) {
              try {
                e(t.map(o));
              } catch (e) {
                r(e);
              }
            });
          } else {
            var c = [];
            a(t, function (e) {
              c.push(e);
            }, function () {
              e(c);
            }, r, i);
          }
        }, e);
      },
      offset: function (e) {
        var n = this._ctx;
        if (!(e <= 0)) {
          n.offset += e;
          if (Se(n)) {
            t(n, function () {
              var t = e;
              return function (e, n) {
                return t === 0 || (t === 1 ? (--t, false) : (n(function () {
                  e.advance(t);
                  t = 0;
                }), false));
              };
            });
          } else {
            t(n, function () {
              var t = e;
              return function () {
                return --t < 0;
              };
            });
          }
        }
        return this;
      },
      limit: function (e) {
        this._ctx.limit = Math.min(this._ctx.limit, e);
        t(this._ctx, function () {
          var t = e;
          return function (e, n, r) {
            if (--t <= 0) {
              n(r);
            }
            return t >= 0;
          };
        }, true);
        return this;
      },
      until: function (t, n) {
        e(this._ctx, function (e, r, i) {
          return !t(e.value) || (r(i), n);
        });
        return this;
      },
      first: function (e) {
        return this.limit(1).toArray(function (e) {
          return e[0];
        }).then(e);
      },
      last: function (e) {
        return this.reverse().first(e);
      },
      filter: function (t) {
        e(this._ctx, function (e) {
          return t(e.value);
        });
        (function (e, t) {
          e.isMatch = Ue(e.isMatch, t);
        })(this._ctx, t);
        return this;
      },
      and: function (e) {
        return this.filter(e);
      },
      or: function (e) {
        return new _e(this._ctx.table, e, this);
      },
      reverse: function () {
        this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev";
        if (this._ondirectionchange) {
          this._ondirectionchange(this._ctx.dir);
        }
        return this;
      },
      desc: function () {
        return this.reverse();
      },
      eachKey: function (e) {
        var t = this._ctx;
        t.keysOnly = !t.isMatch;
        return this.each(function (t, n) {
          e(n.key, n);
        });
      },
      eachUniqueKey: function (e) {
        this._ctx.unique = "unique";
        return this.eachKey(e);
      },
      eachPrimaryKey: function (e) {
        var t = this._ctx;
        t.keysOnly = !t.isMatch;
        return this.each(function (t, n) {
          e(n.primaryKey, n);
        });
      },
      keys: function (e) {
        var t = this._ctx;
        t.keysOnly = !t.isMatch;
        var n = [];
        return this.each(function (e, t) {
          n.push(t.key);
        }).then(function () {
          return n;
        }).then(e);
      },
      primaryKeys: function (e) {
        var t = this._ctx;
        if (u && t.dir === "next" && Se(t, true) && t.limit > 0) {
          return this._read(function (e, r, i) {
            var a = n(t, i);
            var o = t.limit < 1 / 0 ? a.getAllKeys(t.range, t.limit) : a.getAllKeys(t.range);
            o.onerror = Rt(r);
            o.onsuccess = At(e);
          }).then(e);
        }
        t.keysOnly = !t.isMatch;
        var r = [];
        return this.each(function (e, t) {
          r.push(t.primaryKey);
        }).then(function () {
          return r;
        }).then(e);
      },
      uniqueKeys: function (e) {
        this._ctx.unique = "unique";
        return this.keys(e);
      },
      firstKey: function (e) {
        return this.limit(1).keys(function (e) {
          return e[0];
        }).then(e);
      },
      lastKey: function (e) {
        return this.reverse().firstKey(e);
      },
      distinct: function () {
        var t = this._ctx;
        var n = t.index && t.table.schema.idxByName[t.index];
        if (!n || !n.multi) {
          return this;
        }
        var r = {};
        e(this._ctx, function (e) {
          var t = e.primaryKey.toString();
          var n = l(r, t);
          r[t] = true;
          return !n;
        });
        return this;
      },
      modify: function (e) {
        var t = this;
        var n = this._ctx.table.hook;
        var i = n.updating.fire;
        var a = n.deleting.fire;
        return this._write(function (n, s, u, c) {
          var f;
          if (typeof e == "function") {
            f = i === J && a === J ? e : function (t) {
              var n = R(t);
              if (e.call(this, t, this) === false) {
                return false;
              }
              if (l(this, "value")) {
                var o = A(n, this.value);
                var s = i.call(this, o, this.primKey, n, c);
                if (s) {
                  t = this.value;
                  r(s).forEach(function (e) {
                    k(t, e, s[e]);
                  });
                }
              } else {
                a.call(this, this.primKey, t, c);
              }
            };
          } else if (i === J) {
            var d = r(e);
            var h = d.length;
            f = function (t) {
              for (var n = false, r = 0; r < h; ++r) {
                var i = d[r];
                var a = e[i];
                if (E(t, i) !== a) {
                  k(t, i, a);
                  n = true;
                }
              }
              return n;
            };
          } else {
            var p = e;
            e = O(p);
            f = function (t) {
              var n = false;
              var a = i.call(this, e, this.primKey, R(t), c);
              if (a) {
                o(e, a);
              }
              r(e).forEach(function (r) {
                var i = e[r];
                if (E(t, r) !== i) {
                  k(t, r, i);
                  n = true;
                }
              });
              if (a) {
                e = O(p);
              }
              return n;
            };
          }
          var m = 0;
          var v = 0;
          var g = false;
          var y = [];
          var b = [];
          var w = null;
          function _(e) {
            if (e) {
              y.push(e);
              b.push(w);
            }
            return s(new W("Error modifying one or more objects", y, v, b));
          }
          function x() {
            if (g && v + y.length === m) {
              if (y.length > 0) {
                _();
              } else {
                n(v);
              }
            }
          }
          t.clone().raw()._iterate(function (e, t) {
            w = t.primaryKey;
            var n = {
              primKey: t.primaryKey,
              value: e,
              onsuccess: null,
              onerror: null
            };
            function r(e) {
              y.push(e);
              b.push(n.primKey);
              x();
              return true;
            }
            if (f.call(n, e, n) !== false) {
              var i = !l(n, "value");
              ++m;
              S(function () {
                var e = i ? t.delete() : t.update(n.value);
                e._hookCtx = n;
                e.onerror = Pt(r);
                e.onsuccess = Mt(function () {
                  ++v;
                  x();
                });
              }, r);
            } else if (n.onsuccess) {
              n.onsuccess(n.value);
            }
          }, function () {
            g = true;
            x();
          }, _, u);
        });
      },
      delete: function () {
        var e = this;
        var t = this._ctx;
        var n = t.range;
        var r = t.table.hook.deleting.fire;
        var i = r !== J;
        if (!i && Se(t) && (t.isPrimKey && !Et || !n)) {
          return this._write(function (e, t, r) {
            var i = Rt(t);
            var a = n ? r.count(n) : r.count();
            a.onerror = i;
            a.onsuccess = function () {
              var o = a.result;
              S(function () {
                var t = n ? r.delete(n) : r.clear();
                t.onerror = i;
                t.onsuccess = function () {
                  return e(o);
                };
              }, function (e) {
                return t(e);
              });
            };
          });
        }
        var a = i ? 2000 : 10000;
        return this._write(function (n, o, s, u) {
          var l = 0;
          var c = e.clone({
            keysOnly: !t.isMatch && !i
          }).distinct().limit(a).raw();
          var f = [];
          var d = function () {
            return c.each(i ? function (e, t) {
              f.push([t.primaryKey, t.value]);
            } : function (e, t) {
              f.push(t.primaryKey);
            }).then(function () {
              if (i) {
                f.sort(function (e, t) {
                  return Re(e[0], t[0]);
                });
              } else {
                f.sort(Re);
              }
              return be(s, u, f, i, r);
            }).then(function () {
              var e = f.length;
              l += e;
              f = [];
              if (e < a) {
                return l;
              } else {
                return d();
              }
            });
          };
          n(d());
        });
      }
    };
  });
  o(this, {
    Collection: xe,
    Table: ge,
    Transaction: we,
    Version: le,
    WhereClause: _e
  });
  Z.on("versionchange", function (e) {
    if (e.newVersion > 0) {
      console.warn("Another connection wants to upgrade database '" + Z.name + "'. Closing db now to resume the upgrade.");
    } else {
      console.warn("Another connection wants to delete database '" + Z.name + "'. Closing db now to resume the delete request.");
    }
    Z.close();
  });
  Z.on("blocked", function (e) {
    if (!e.newVersion || e.newVersion < e.oldVersion) {
      console.warn("Dexie.delete('" + Z.name + "') was blocked");
    } else {
      console.warn("Upgrade '" + Z.name + "' blocked by other connection holding version " + e.oldVersion / 10);
    }
  });
  v.forEach(function (e) {
    e(Z);
  });
}
function Nt(e) {
  if (typeof e == "function") {
    return new e();
  }
  if (i(e)) {
    return [Nt(e[0])];
  }
  if (e && typeof e == "object") {
    var t = {};
    Tt(t, e);
    return t;
  }
  return e;
}
function Tt(e, t) {
  r(t).forEach(function (n) {
    var r = Nt(t[n]);
    e[n] = r;
  });
  return e;
}
function Mt(e) {
  return We(function (t) {
    var n = t.target;
    var r = n._hookCtx;
    var i = r.value || n.result;
    var a = r && r.onsuccess;
    if (a) {
      a(i);
    }
    if (e) {
      e(i);
    }
  }, e);
}
function Rt(e) {
  return We(function (t) {
    Ct(t);
    e(t.target.error);
    return false;
  });
}
function At(e) {
  return We(function (t) {
    e(t.target.result);
  });
}
function Pt(e) {
  return We(function (t) {
    var n = t.target;
    var r = n.error;
    var i = n._hookCtx;
    var a = i && i.onerror;
    if (a) {
      a(r);
    }
    Ct(t);
    e(r);
    return false;
  });
}
function Ct(e) {
  if (e.stopPropagation) {
    e.stopPropagation();
  }
  if (e.preventDefault) {
    e.preventDefault();
  }
}
function Dt(e) {
  var t = function (t) {
    return e.next(t);
  };
  var n = a(t);
  var r = a(function (t) {
    return e.throw(t);
  });
  function a(e) {
    return function (t) {
      var a = e(t);
      var o = a.value;
      if (a.done) {
        return o;
      } else if (o && typeof o.then == "function") {
        return o.then(n, r);
      } else if (i(o)) {
        return Ae.all(o).then(n, r);
      } else {
        return n(o);
      }
    };
  }
  return a(t)();
}
function Ut(e, t, n, r, i, a, o) {
  this.name = e;
  this.keyPath = t;
  this.unique = n;
  this.multi = r;
  this.auto = i;
  this.compound = a;
  this.dotted = o;
  var s = typeof t == "string" ? t : t && "[" + [].join.call(t, "+") + "]";
  this.src = (n ? "&" : "") + (r ? "*" : "") + (i ? "++" : "") + s;
}
function It(e, t, n, r) {
  this.name = e;
  this.primKey = t || new Ut();
  this.indexes = n || [new Ut()];
  this.instanceTemplate = r;
  this.mappedClass = null;
  this.idxByName = _(n, function (e) {
    return [e.name, e];
  });
}
function Lt(e) {
  if (e.length === 1) {
    return e[0];
  } else {
    return e;
  }
}
function jt(e) {
  var t = e && (e.getDatabaseNames || e.webkitGetDatabaseNames);
  return t && t.bind(e);
}
L(I, kt);
c(Ot, Q);
c(Ot, {
  delete: function (e) {
    var t = new Ot(e);
    var n = t.delete();
    n.onblocked = function (e) {
      t.on("blocked", e);
      return this;
    };
    return n;
  },
  exists: function (e) {
    return new Ot(e).open().then(function (e) {
      e.close();
      return true;
    }).catch(Ot.NoSuchDatabaseError, function () {
      return false;
    });
  },
  getDatabaseNames: function (e) {
    var t = jt(Ot.dependencies.indexedDB);
    if (t) {
      return new Ae(function (e, n) {
        var r = t();
        r.onsuccess = function (t) {
          e(g(t.target.result, 0));
        };
        r.onerror = Rt(n);
      }).then(e);
    } else {
      return pt.dbnames.toCollection().primaryKeys(e);
    }
  },
  defineClass: function () {
    return function (e) {
      if (e) {
        o(this, e);
      }
    };
  },
  applyStructure: Tt,
  ignoreTransaction: function (e) {
    if (Ne.trans) {
      return st(Ne.transless, e);
    } else {
      return e();
    }
  },
  vip: function (e) {
    return Je(function () {
      Ne.letThrough = true;
      return e();
    });
  },
  async: function (e) {
    return function () {
      try {
        var t = Dt(e.apply(this, arguments));
        if (t && typeof t.then == "function") {
          return t;
        } else {
          return Ae.resolve(t);
        }
      } catch (e) {
        return dt(e);
      }
    };
  },
  spawn: function (e, t, n) {
    try {
      var r = Dt(e.apply(n, t || []));
      if (r && typeof r.then == "function") {
        return r;
      } else {
        return Ae.resolve(r);
      }
    } catch (e) {
      return dt(e);
    }
  },
  currentTransaction: {
    get: function () {
      return Ne.trans || null;
    }
  },
  waitFor: function (e, t) {
    var n = Ae.resolve(typeof e == "function" ? Ot.ignoreTransaction(e) : e).timeout(t || 60000);
    if (Ne.trans) {
      return Ne.trans.waitFor(n);
    } else {
      return n;
    }
  },
  Promise: Ae,
  debug: {
    get: function () {
      return I;
    },
    set: function (e) {
      L(e, e === "dexie" ? function () {
        return true;
      } : kt);
    }
  },
  derive: h,
  extend: o,
  props: c,
  override: y,
  Events: ht,
  getByKeyPath: E,
  setByKeyPath: k,
  delByKeyPath: function (e, t) {
    if (typeof t == "string") {
      k(e, t, undefined);
    } else if ("length" in t) {
      [].map.call(t, function (t) {
        k(e, t, undefined);
      });
    }
  },
  shallowClone: O,
  deepClone: R,
  getObjectDiff: A,
  asap: w,
  maxKey: gt,
  minKey: yt,
  addons: [],
  connections: _t,
  MultiModifyError: X.Modify,
  errnames: q,
  IndexSpec: Ut,
  TableSchema: It,
  dependencies: function () {
    try {
      return {
        indexedDB: a.indexedDB || a.mozIndexedDB || a.webkitIndexedDB || a.msIndexedDB,
        IDBKeyRange: a.IDBKeyRange || a.webkitIDBKeyRange
      };
    } catch (e) {
      return {
        indexedDB: null,
        IDBKeyRange: null
      };
    }
  }(),
  semVer: mt,
  version: mt.split(".").map(function (e) {
    return parseInt(e);
  }).reduce(function (e, t, n) {
    return e + t / Math.pow(10, n * 2);
  }),
  default: Ot,
  Dexie: Ot
});
Ae.rejectionMapper = function (e, t) {
  if (!e || e instanceof $ || e instanceof TypeError || e instanceof SyntaxError || !e.name || !Z[e.name]) {
    return e;
  }
  var n = new Z[e.name](t || e.message, e);
  if ("stack" in e) {
    d(n, "stack", {
      get: function () {
        return this.inner.stack;
      }
    });
  }
  return n;
};
(pt = new Ot("__dbnames")).version(1).stores({
  dbnames: "name"
});
(function () {
  var e = "Dexie.DatabaseNames";
  try {
    if (typeof localStorage !== undefined && a.document !== undefined) {
      JSON.parse(localStorage.getItem(e) || "[]").forEach(function (e) {
        return pt.dbnames.put({
          name: e
        }).catch(J);
      });
      localStorage.removeItem(e);
    }
  } catch (e) {}
})();
export default Ot;