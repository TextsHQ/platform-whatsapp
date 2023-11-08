var e = {};
var aa = {};
var l;
for (l in e) {
  if (e.hasOwnProperty(l)) {
    aa[l] = e[l];
  }
}
function ba(e) {
  eval.call(null, e);
}
e.read = function (e) {
  var t = new XMLHttpRequest();
  t.open("GET", e, false);
  t.send(null);
  return t.responseText;
};
if (typeof arguments != "undefined") {
  e.arguments = arguments;
}
if (typeof console != "undefined") {
  if (!e.print) {
    e.print = function (e) {
      console.log(e);
    };
  }
  if (!e.printErr) {
    e.printErr = function (e) {
      console.log(e);
    };
  }
} else if (!e.print) {
  e.print = function () {};
}
if (e.setWindowTitle === undefined) {
  e.setWindowTitle = function (e) {
    document.title = e;
  };
}
if (!e.load && e.read) {
  e.load = function (t) {
    ba(e.read(t));
  };
}
if (!e.print) {
  e.print = function () {};
}
if (!e.printErr) {
  e.printErr = e.print;
}
if (!e.arguments) {
  e.arguments = [];
}
if (!e.thisProgram) {
  e.thisProgram = "./this.program";
}
e.print = e.print;
e.S = e.printErr;
e.preRun = [];
e.postRun = [];
for (l in aa) {
  if (aa.hasOwnProperty(l)) {
    e[l] = aa[l];
  }
}
var n = {
  cb: function (e) {
    ca = e;
  },
  Ua: function () {
    return ca;
  },
  na: function () {
    return m;
  },
  X: function (e) {
    m = e;
  },
  Aa: function (e) {
    switch (e) {
      case "i1":
      case "i8":
        return 1;
      case "i16":
        return 2;
      case "i32":
        return 4;
      case "i64":
        return 8;
      case "float":
        return 4;
      case "double":
        return 8;
      default:
        if (e[e.length - 1] === "*") {
          return n.H;
        } else if (e[0] === "i") {
          assert((e = parseInt(e.substr(1))) % 8 == 0);
          return e / 8;
        } else {
          return 0;
        }
    }
  },
  Ta: function (e) {
    return Math.max(n.Aa(e), n.H);
  },
  dd: 16,
  Bd: function (e, t) {
    if (t === "double" || t === "i64") {
      if (e & 7) {
        assert((e & 7) == 4);
        e += 4;
      }
    } else {
      assert((e & 3) == 0);
    }
    return e;
  },
  od: function (e, t, r) {
    if (r || e != "i64" && e != "double") {
      if (e) {
        return Math.min(t || (e ? n.Ta(e) : 0), n.H);
      } else {
        return Math.min(t, 8);
      }
    } else {
      return 8;
    }
  },
  J: function (t, n, r) {
    if (r && r.length) {
      if (!r.splice) {
        r = Array.prototype.slice.call(r);
      }
      r.splice(0, 0, n);
      return e["dynCall_" + t].apply(null, r);
    } else {
      return e["dynCall_" + t].call(null, n);
    }
  },
  U: [],
  Ma: function (e) {
    for (var t = 0; t < n.U.length; t++) {
      if (!n.U[t]) {
        n.U[t] = e;
        return (1 + t) * 2;
      }
    }
    throw "Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS.";
  },
  $a: function (e) {
    n.U[(e - 2) / 2] = null;
  },
  M: function (t) {
    if (!n.M.ma) {
      n.M.ma = {};
    }
    if (!n.M.ma[t]) {
      n.M.ma[t] = 1;
      e.S(t);
    }
  },
  ha: {},
  rd: function (e, t) {
    assert(t);
    if (!n.ha[t]) {
      n.ha[t] = {};
    }
    var r = n.ha[t];
    if (!r[e]) {
      r[e] = function () {
        return n.J(t, e, arguments);
      };
    }
    return r[e];
  },
  pd: function () {
    throw "You must build with -s RETAIN_COMPILER_SETTINGS=1 for Runtime.getCompilerSetting or emscripten_get_compiler_setting to work";
  },
  W: function (e) {
    var t = m;
    m = (m = m + e | 0) + 15 & -16;
    return t;
  },
  Ia: function (e) {
    var t = p;
    p = (p = p + e | 0) + 15 & -16;
    return t;
  },
  P: function (e) {
    var t = v;
    if (e = (v = (v = v + e | 0) + 15 & -16) >= w) {
      z("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value " + w + ", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which adjusts the size at runtime but prevents some optimizations, (3) set Module.TOTAL_MEMORY to a higher value before the program runs, or if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ");
      e = true;
    }
    if (e) {
      v = t;
      return 0;
    } else {
      return t;
    }
  },
  ea: function (e, t) {
    return Math.ceil(e / (t || 16)) * (t || 16);
  },
  xd: function (e, t, n) {
    if (n) {
      return +(e >>> 0) + +(t >>> 0) * 4294967296;
    } else {
      return +(e >>> 0) + +(t | 0) * 4294967296;
    }
  },
  La: 8,
  H: 4,
  ed: 0
};
e.Runtime = n;
n.addFunction = n.Ma;
n.removeFunction = n.$a;
var A = false;
var da;
var fa;
var ca;
var ha;
var ia;
var buffer;
function assert(e, t) {
  if (!e) {
    z("Assertion failed: " + t);
  }
}
function ga(a) {
  var b = e["_" + a];
  if (!b) {
    try {
      b = eval("_" + a);
    } catch (e) {}
  }
  assert(b, "Cannot call unknown function " + a + " (perhaps LLVM optimizations or closure removed it?)");
  return b;
}
function ma(e, t, n) {
  if ((n = n || "i8").charAt(n.length - 1) === "*") {
    n = "i32";
  }
  switch (n) {
    case "i1":
    case "i8":
      D[e >> 0] = t;
      break;
    case "i16":
      E[e >> 1] = t;
      break;
    case "i32":
      F[e >> 2] = t;
      break;
    case "i64":
      fa = [t >>> 0, (da = t, +na(da) >= 1 ? da > 0 ? (oa(+pa(da / 4294967296), 4294967295) | 0) >>> 0 : ~~+qa((da - +(~~da >>> 0)) / 4294967296) >>> 0 : 0)];
      F[e >> 2] = fa[0];
      F[e + 4 >> 2] = fa[1];
      break;
    case "float":
      ra[e >> 2] = t;
      break;
    case "double":
      sa[e >> 3] = t;
      break;
    default:
      z("invalid type for setValue: " + n);
  }
}
function ta(e, t) {
  if ((t = t || "i8").charAt(t.length - 1) === "*") {
    t = "i32";
  }
  switch (t) {
    case "i1":
    case "i8":
      return D[e >> 0];
    case "i16":
      return E[e >> 1];
    case "i32":
    case "i64":
      return F[e >> 2];
    case "float":
      return ra[e >> 2];
    case "double":
      return sa[e >> 3];
    default:
      z("invalid type for setValue: " + t);
  }
  return null;
}
function G(e, t, r, i) {
  var a;
  var o;
  if (typeof e == "number") {
    a = true;
    o = e;
  } else {
    a = false;
    o = e.length;
  }
  var s;
  var l;
  var u = typeof t == "string" ? t : null;
  r = r == 4 ? i : [ua, n.W, n.Ia, n.P][r === undefined ? 2 : r](Math.max(o, u ? 1 : t.length));
  if (a) {
    i = r;
    assert((r & 3) == 0);
    e = r + (o & -4);
    for (; i < e; i += 4) {
      F[i >> 2] = 0;
    }
    for (e = r + o; i < e;) {
      D[i++ >> 0] = 0;
    }
    return r;
  }
  if (u === "i8") {
    if (e.subarray || e.slice) {
      H.set(e, r);
    } else {
      H.set(new Uint8Array(e), r);
    }
    return r;
  }
  for (i = 0; i < o;) {
    var c = e[i];
    if (typeof c == "function") {
      c = n.sd(c);
    }
    if ((a = u || t[i]) === 0) {
      i++;
    } else {
      if (a == "i64") {
        a = "i32";
      }
      ma(r + i, c, a);
      if (l !== a) {
        s = n.Aa(a);
        l = a;
      }
      i += s;
    }
  }
  return r;
}
function la(t, n) {
  if (n === 0 || !t) {
    return "";
  }
  for (var r, i = 0, a = 0; (i |= r = H[t + a >> 0], r != 0 || n) && (a++, !n || a != n););
  if (!n) {
    n = a;
  }
  r = "";
  if (i < 128) {
    for (; n > 0;) {
      i = String.fromCharCode.apply(String, H.subarray(t, t + Math.min(n, 1024)));
      r = r ? r + i : i;
      t += 1024;
      n -= 1024;
    }
    return r;
  }
  return e.UTF8ToString(t);
}
function za(e, t) {
  for (var n, r, i, a, o, s = "";;) {
    if (!(n = e[t++])) {
      return s;
    }
    if (n & 128) {
      r = e[t++] & 63;
      if ((n & 224) == 192) {
        s += String.fromCharCode((n & 31) << 6 | r);
      } else {
        i = e[t++] & 63;
        if ((n & 240) == 224) {
          n = (n & 15) << 12 | r << 6 | i;
        } else {
          a = e[t++] & 63;
          if ((n & 248) == 240) {
            n = (n & 7) << 18 | r << 12 | i << 6 | a;
          } else {
            o = e[t++] & 63;
            if ((n & 252) == 248) {
              n = (n & 3) << 24 | r << 18 | i << 12 | a << 6 | o;
            } else {
              n = (n & 1) << 30 | r << 24 | i << 18 | a << 12 | o << 6 | e[t++] & 63;
            }
          }
        }
        if (n < 65536) {
          s += String.fromCharCode(n);
        } else {
          n -= 65536;
          s += String.fromCharCode(n >> 10 | 55296, n & 1023 | 56320);
        }
      }
    } else {
      s += String.fromCharCode(n);
    }
  }
}
function Aa(e, t, n, r) {
  if (!(r > 0)) {
    return 0;
  }
  var i = n;
  r = n + r - 1;
  for (var a = 0; a < e.length; ++a) {
    var o = e.charCodeAt(a);
    if (o >= 55296 && o <= 57343) {
      o = 65536 + ((o & 1023) << 10) | e.charCodeAt(++a) & 1023;
    }
    if (o <= 127) {
      if (n >= r) {
        break;
      }
      t[n++] = o;
    } else {
      if (o <= 2047) {
        if (n + 1 >= r) {
          break;
        }
        t[n++] = o >> 6 | 192;
      } else {
        if (o <= 65535) {
          if (n + 2 >= r) {
            break;
          }
          t[n++] = o >> 12 | 224;
        } else {
          if (o <= 2097151) {
            if (n + 3 >= r) {
              break;
            }
            t[n++] = o >> 18 | 240;
          } else {
            if (o <= 67108863) {
              if (n + 4 >= r) {
                break;
              }
              t[n++] = o >> 24 | 248;
            } else {
              if (n + 5 >= r) {
                break;
              }
              t[n++] = o >> 30 | 252;
              t[n++] = o >> 24 & 63 | 128;
            }
            t[n++] = o >> 18 & 63 | 128;
          }
          t[n++] = o >> 12 & 63 | 128;
        }
        t[n++] = o >> 6 & 63 | 128;
      }
      t[n++] = o & 63 | 128;
    }
  }
  t[n] = 0;
  return n - i;
}
function Ba(e) {
  for (var t = 0, n = 0; n < e.length; ++n) {
    var r = e.charCodeAt(n);
    if (r >= 55296 && r <= 57343) {
      r = 65536 + ((r & 1023) << 10) | e.charCodeAt(++n) & 1023;
    }
    if (r <= 127) {
      ++t;
    } else {
      t = r <= 2047 ? t + 2 : r <= 65535 ? t + 3 : r <= 2097151 ? t + 4 : r <= 67108863 ? t + 5 : t + 6;
    }
  }
  return t;
}
function Ca(t) {
  var r = !!e.___cxa_demangle;
  if (r) {
    try {
      var i = ua(t.length);
      ka(t.substr(1), i);
      var a = ua(4);
      var o = e.___cxa_demangle(i, 0, 0, a);
      if (ta(a, "i32") === 0 && o) {
        return la(o);
      }
    } catch (e) {} finally {
      if (i) {
        Da(i);
      }
      if (a) {
        Da(a);
      }
      if (o) {
        Da(o);
      }
    }
  }
  var s = 3;
  var l = {
    v: "void",
    b: "bool",
    c: "char",
    s: "short",
    i: "int",
    l: "long",
    f: "float",
    d: "double",
    w: "wchar_t",
    a: "signed char",
    h: "unsigned char",
    t: "unsigned short",
    j: "unsigned int",
    m: "unsigned long",
    x: "long long",
    y: "unsigned long long",
    z: "..."
  };
  var u = [];
  var c = true;
  i = t;
  try {
    if (t == "Object._main" || t == "_main") {
      return "main()";
    }
    if (typeof t == "number") {
      t = la(t);
    }
    if (t[0] !== "_" || t[1] !== "_" || t[2] !== "Z") {
      return t;
    }
    switch (t[3]) {
      case "n":
        return "operator new()";
      case "d":
        return "operator delete()";
    }
    i = function e(n, r, i) {
      r = r || 1 / 0;
      var a;
      var o = "";
      var d = [];
      if (t[s] === "N") {
        s++;
        if (t[s] === "K") {
          s++;
        }
        a = [];
        for (; t[s] !== "E";) {
          if (t[s] === "S") {
            s++;
            var p = t.indexOf("_", s);
            a.push(u[t.substring(s, p) || 0] || "?");
            s = p + 1;
          } else if (t[s] === "C") {
            a.push(a[a.length - 1]);
            s += 2;
          } else {
            var f = (p = parseInt(t.substr(s))).toString().length;
            if (!p || !f) {
              s--;
              break;
            }
            var _ = t.substr(s + f, p);
            a.push(_);
            u.push(_);
            s += f + p;
          }
        }
        s++;
        a = a.join("::");
        if (--r == 0) {
          if (n) {
            return [a];
          } else {
            return a;
          }
        }
      } else {
        if (t[s] === "K" || c && t[s] === "L") {
          s++;
        }
        if (p = parseInt(t.substr(s))) {
          f = p.toString().length;
          a = t.substr(s + f, p);
          s += f + p;
        }
      }
      c = false;
      if (t[s] === "I") {
        s++;
        p = e(true);
        o += (f = e(true, 1, true))[0] + " " + a + "<" + p.join(", ") + ">";
      } else {
        o = a;
      }
      e: for (; s < t.length && r-- > 0;) {
        a = t[s++];
        if (a in l) {
          d.push(l[a]);
        } else {
          switch (a) {
            case "P":
              d.push(e(true, 1, true)[0] + "*");
              break;
            case "R":
              d.push(e(true, 1, true)[0] + "&");
              break;
            case "L":
              s++;
              p = t.indexOf("E", s) - s;
              d.push(t.substr(s, p));
              s += p + 2;
              break;
            case "A":
              p = parseInt(t.substr(s));
              s += p.toString().length;
              if (t[s] !== "_") {
                throw "?";
              }
              s++;
              d.push(e(true, 1, true)[0] + " [" + p + "]");
              break;
            case "E":
              break e;
            default:
              o += "?" + a;
              break e;
          }
        }
      }
      if (!(i || d.length !== 1 || d[0] !== "void")) {
        d = [];
      }
      if (n) {
        if (o) {
          d.push(o + "?");
        }
        return d;
      } else {
        return o + "(" + d.join(", ") + ")";
      }
    }();
  } catch (e) {
    i += "?";
  }
  if (i.indexOf("?") >= 0 && !r) {
    n.M("warning: a problem occurred in builtin C++ name demangling; build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling");
  }
  return i;
}
function Ea() {
  return Fa().replace(/__Z[\w\d_]+/g, function (e) {
    var t = Ca(e);
    if (e === t) {
      return e;
    } else {
      return e + " [" + t + "]";
    }
  });
}
function Fa() {
  var e = Error();
  if (!e.stack) {
    try {
      throw Error(0);
    } catch (t) {
      e = t;
    }
    if (!e.stack) {
      return "(no stack trace available)";
    }
  }
  return e.stack.toString();
}
function Ga() {
  var e = v;
  if (e % 4096 > 0) {
    e += 4096 - e % 4096;
  }
  return e;
}
(function () {
  function a(e) {
    return {
      arguments: (e = e.toString().match(d).slice(1))[0],
      body: e[1],
      returnValue: e[2]
    };
  }
  var b = {
    stackSave: function () {
      n.na();
    },
    stackRestore: function () {
      n.X();
    },
    arrayToC: function (e) {
      var t = n.W(e.length);
      ja(e, t);
      return t;
    },
    stringToC: function (e) {
      var t = 0;
      if (e != null && e !== 0) {
        ka(e, t = n.W(1 + (e.length << 2)));
      }
      return t;
    }
  };
  var c = {
    string: b.stringToC,
    array: b.arrayToC
  };
  ia = function (e, t, r, i, a) {
    e = ga(e);
    var o = [];
    var s = 0;
    if (i) {
      for (var l = 0; l < i.length; l++) {
        var u = c[r[l]];
        if (u) {
          if (s === 0) {
            s = n.na();
          }
          o[l] = u(i[l]);
        } else {
          o[l] = i[l];
        }
      }
    }
    r = e.apply(null, o);
    if (t === "string") {
      r = la(r);
    }
    if (s !== 0) {
      if (a && a.async) {
        return void EmterpreterAsync.hd.push(function () {
          n.X(s);
        });
      }
      n.X(s);
    }
    return r;
  };
  var d = /^function\s*\(([^)]*)\)\s*{\s*([^*]*?)[\s;]*(?:return\s*(.*?)[;\s]*)?}$/;
  var f = {};
  var h;
  for (h in b) {
    if (b.hasOwnProperty(h)) {
      f[h] = a(b[h]);
    }
  }
  ha = function (b, c, d) {
    d = d || [];
    var h = ga(b);
    b = d.every(function (e) {
      return e === "number";
    });
    var u = c !== "string";
    if (u && b) {
      return h;
    }
    var q = d.map(function (e, t) {
      return "$" + t;
    });
    c = "(function(" + q.join(",") + ") {";
    var y = d.length;
    if (!b) {
      c += "var stack = " + f.stackSave.body + ";";
      for (var B = 0; B < y; B++) {
        var J = q[B];
        var ea = d[B];
        if (ea !== "number") {
          ea = f[ea + "ToC"];
          c += "var " + ea.arguments + " = " + J + ";";
          c += ea.body + ";";
          c += J + "=" + ea.returnValue + ";";
        }
      }
    }
    d = a(function () {
      return h;
    }).returnValue;
    c += "var ret = " + d + "(" + q.join(",") + ");";
    if (!u) {
      d = a(function () {
        return la;
      }).returnValue;
      c += "ret = " + d + "(ret);";
    }
    if (!b) {
      c += f.stackRestore.body.replace("()", "(stack)") + ";";
    }
    return eval(c + "return ret})");
  };
})();
e.ccall = ia;
e.cwrap = ha;
e.setValue = ma;
e.getValue = ta;
e.ALLOC_NORMAL = 0;
e.ALLOC_STACK = 1;
e.ALLOC_STATIC = 2;
e.ALLOC_DYNAMIC = 3;
e.ALLOC_NONE = 4;
e.allocate = G;
e.getMemory = function (e) {
  if (va) {
    if (wa !== undefined && !wa.C || !xa) {
      return n.P(e);
    } else {
      return ua(e);
    }
  } else {
    return n.Ia(e);
  }
};
e.Pointer_stringify = la;
e.AsciiToString = function (e) {
  for (var t = "";;) {
    var n = D[e++ >> 0];
    if (!n) {
      return t;
    }
    t += String.fromCharCode(n);
  }
};
e.stringToAscii = function (e, t) {
  return ya(e, t, false);
};
e.UTF8ArrayToString = za;
e.UTF8ToString = function (e) {
  return za(H, e);
};
e.stringToUTF8Array = Aa;
e.stringToUTF8 = function (e, t, n) {
  return Aa(e, H, t, n);
};
e.lengthBytesUTF8 = Ba;
e.UTF16ToString = function (e) {
  for (var t = 0, n = "";;) {
    var r = E[e + t * 2 >> 1];
    if (r == 0) {
      return n;
    }
    ++t;
    n += String.fromCharCode(r);
  }
};
e.stringToUTF16 = function (e, t, n) {
  if (n === undefined) {
    n = 2147483647;
  }
  if (n < 2) {
    return 0;
  }
  var r = t;
  n = (n -= 2) < e.length * 2 ? n / 2 : e.length;
  for (var i = 0; i < n; ++i) {
    E[t >> 1] = e.charCodeAt(i);
    t += 2;
  }
  E[t >> 1] = 0;
  return t - r;
};
e.lengthBytesUTF16 = function (e) {
  return e.length * 2;
};
e.UTF32ToString = function (e) {
  for (var t = 0, n = "";;) {
    var r = F[e + t * 4 >> 2];
    if (r == 0) {
      return n;
    }
    ++t;
    if (r >= 65536) {
      r -= 65536;
      n += String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320);
    } else {
      n += String.fromCharCode(r);
    }
  }
};
e.stringToUTF32 = function (e, t, n) {
  if (n === undefined) {
    n = 2147483647;
  }
  if (n < 4) {
    return 0;
  }
  var r = t;
  n = r + n - 4;
  for (var i = 0; i < e.length; ++i) {
    if ((a = e.charCodeAt(i)) >= 55296 && a <= 57343) {
      var a = 65536 + ((a & 1023) << 10) | e.charCodeAt(++i) & 1023;
    }
    F[t >> 2] = a;
    if ((t += 4) + 4 > n) {
      break;
    }
  }
  F[t >> 2] = 0;
  return t - r;
};
e.lengthBytesUTF32 = function (e) {
  for (var t = 0, n = 0; n < e.length; ++n) {
    var r = e.charCodeAt(n);
    if (r >= 55296 && r <= 57343) {
      ++n;
    }
    t += 4;
  }
  return t;
};
e.stackTrace = function () {
  return Ea();
};
for (var D, H, E, Ha, F, Ia, ra, sa, Ja = 0, p = 0, va = false, Ka = 0, m = 0, La = 0, Ma = 0, v = 0, Na = e.TOTAL_STACK || 5242880, w = e.TOTAL_MEMORY || 16777216, I = 65536; I < w || I < Na * 2;) {
  I = I < 16777216 ? I * 2 : I + 16777216;
}
function Oa(e) {
  for (; e.length > 0;) {
    var t = e.shift();
    if (typeof t == "function") {
      t();
    } else {
      var r = t.Qa;
      if (typeof r == "number") {
        if (t.T === undefined) {
          n.J("v", r);
        } else {
          n.J("vi", r, [t.T]);
        }
      } else {
        r(t.T === undefined ? null : t.T);
      }
    }
  }
}
if (I !== w) {
  w = I;
}
assert(typeof Int32Array != "undefined" && typeof Float64Array != "undefined" && !!new Int32Array(1).subarray && !!new Int32Array(1).set, "JS engine does not provide full typed array support");
buffer = new ArrayBuffer(w);
D = new Int8Array(buffer);
E = new Int16Array(buffer);
F = new Int32Array(buffer);
H = new Uint8Array(buffer);
Ha = new Uint16Array(buffer);
Ia = new Uint32Array(buffer);
ra = new Float32Array(buffer);
sa = new Float64Array(buffer);
F[0] = 255;
assert(H[0] === 255 && H[3] === 0, "Typed arrays 2 must be run on a little-endian system");
e.HEAP = undefined;
e.buffer = buffer;
e.HEAP8 = D;
e.HEAP16 = E;
e.HEAP32 = F;
e.HEAPU8 = H;
e.HEAPU16 = Ha;
e.HEAPU32 = Ia;
e.HEAPF32 = ra;
e.HEAPF64 = sa;
var Pa = [];
var Qa = [];
var Ra = [];
var K = [];
var Sa = [];
var xa = false;
function Ta(e) {
  Pa.unshift(e);
}
function Ua(e) {
  Sa.unshift(e);
}
function Va(e, t, n) {
  e = Aa(e, n = Array(n > 0 ? n : Ba(e) + 1), 0, n.length);
  if (t) {
    n.length = e;
  }
  return n;
}
function ka(e, t, n) {
  e = Va(e, n);
  n = 0;
  for (; n < e.length;) {
    D[t + n >> 0] = e[n];
    n += 1;
  }
}
function ja(e, t) {
  for (var n = 0; n < e.length; n++) {
    D[t++ >> 0] = e[n];
  }
}
function ya(e, t, n) {
  for (var r = 0; r < e.length; ++r) {
    D[t++ >> 0] = e.charCodeAt(r);
  }
  if (!n) {
    D[t >> 0] = 0;
  }
}
e.addOnPreRun = Ta;
e.addOnInit = function (e) {
  Qa.unshift(e);
};
e.addOnPreMain = function (e) {
  Ra.unshift(e);
};
e.addOnExit = function (e) {
  K.unshift(e);
};
e.addOnPostRun = Ua;
e.intArrayFromString = Va;
e.intArrayToString = function (e) {
  for (var t = [], n = 0; n < e.length; n++) {
    var r = e[n];
    if (r > 255) {
      r &= 255;
    }
    t.push(String.fromCharCode(r));
  }
  return t.join("");
};
e.writeStringToMemory = ka;
e.writeArrayToMemory = ja;
e.writeAsciiToMemory = ya;
if (!(Math.imul && Math.imul(4294967295, 5) === -5)) {
  Math.imul = function (e, t) {
    var n = e & 65535;
    var r = t & 65535;
    return n * r + ((e >>> 16) * r + n * (t >>> 16) << 16) | 0;
  };
}
Math.td = Math.imul;
if (!Math.clz32) {
  Math.clz32 = function (e) {
    e >>>= 0;
    for (var t = 0; t < 32; t++) {
      if (e & 1 << 31 - t) {
        return t;
      }
    }
    return 32;
  };
}
Math.kd = Math.clz32;
var na = Math.abs;
var qa = Math.ceil;
var pa = Math.floor;
var oa = Math.min;
var L = 0;
var Wa = null;
var Xa = null;
function Ya() {
  L++;
  if (e.monitorRunDependencies) {
    e.monitorRunDependencies(L);
  }
}
function Za() {
  L--;
  if (e.monitorRunDependencies) {
    e.monitorRunDependencies(L);
  }
  if (L == 0 && (Wa !== null && (clearInterval(Wa), Wa = null), Xa)) {
    var t = Xa;
    Xa = null;
    t();
  }
}
e.addRunDependency = Ya;
e.removeRunDependency = Za;
e.preloadedImages = {};
e.preloadedAudios = {};
Ja = 8;
p = Ja + 1696;
Qa.push();
G([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 60, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 164, 2, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "i8", 4, n.La);
var $a = n.ea(G(12, "i8", 2), 8);
function eb(e, t) {
  K.push(function () {
    n.J("vi", e, [t]);
  });
  eb.level = K.length;
}
assert($a % 8 == 0);
e._bitshift64Ashr = ab;
e._i64Subtract = bb;
e._i64Add = cb;
e._memset = db;
e._bitshift64Lshr = fb;
e._bitshift64Shl = gb;
var M = {
  G: 1,
  B: 2,
  Qc: 3,
  Nb: 4,
  F: 5,
  sa: 6,
  gb: 7,
  kc: 8,
  Z: 9,
  ub: 10,
  oa: 11,
  $c: 11,
  Ka: 12,
  Y: 13,
  Gb: 14,
  wc: 15,
  $: 16,
  pa: 17,
  ad: 18,
  ba: 19,
  qa: 20,
  N: 21,
  u: 22,
  fc: 23,
  Ja: 24,
  O: 25,
  Xc: 26,
  Hb: 27,
  sc: 28,
  da: 29,
  Nc: 30,
  Zb: 31,
  Gc: 32,
  Db: 33,
  Kc: 34,
  oc: 42,
  Kb: 43,
  vb: 44,
  Qb: 45,
  Rb: 46,
  Sb: 47,
  Yb: 48,
  Yc: 49,
  ic: 50,
  Pb: 51,
  Ab: 35,
  lc: 37,
  mb: 52,
  pb: 53,
  bd: 54,
  gc: 55,
  qb: 56,
  rb: 57,
  Bb: 35,
  sb: 59,
  uc: 60,
  jc: 61,
  Uc: 62,
  tc: 63,
  pc: 64,
  qc: 65,
  Mc: 66,
  mc: 67,
  jb: 68,
  Rc: 69,
  wb: 70,
  Hc: 71,
  ac: 72,
  Eb: 73,
  ob: 74,
  Bc: 76,
  nb: 77,
  Lc: 78,
  Tb: 79,
  Ub: 80,
  Xb: 81,
  Wb: 82,
  Vb: 83,
  vc: 38,
  ra: 39,
  bc: 36,
  aa: 40,
  Cc: 95,
  Fc: 96,
  zb: 104,
  hc: 105,
  kb: 97,
  Jc: 91,
  zc: 88,
  rc: 92,
  Oc: 108,
  yb: 111,
  hb: 98,
  xb: 103,
  ec: 101,
  cc: 100,
  Vc: 110,
  Ib: 112,
  Jb: 113,
  Mb: 115,
  lb: 114,
  Cb: 89,
  $b: 90,
  Ic: 93,
  Pc: 94,
  ib: 99,
  dc: 102,
  Ob: 106,
  xc: 107,
  Wc: 109,
  Zc: 87,
  Fb: 122,
  Sc: 116,
  Ac: 95,
  nc: 123,
  Lb: 84,
  Dc: 75,
  tb: 125,
  yc: 131,
  Ec: 130,
  Tc: 86
};
var hb = {
  0: "Success",
  1: "Not super-user",
  2: "No such file or directory",
  3: "No such process",
  4: "Interrupted system call",
  5: "I/O error",
  6: "No such device or address",
  7: "Arg list too long",
  8: "Exec format error",
  9: "Bad file number",
  10: "No children",
  11: "No more processes",
  12: "Not enough core",
  13: "Permission denied",
  14: "Bad address",
  15: "Block device required",
  16: "Mount device busy",
  17: "File exists",
  18: "Cross-device link",
  19: "No such device",
  20: "Not a directory",
  21: "Is a directory",
  22: "Invalid argument",
  23: "Too many open files in system",
  24: "Too many open files",
  25: "Not a typewriter",
  26: "Text file busy",
  27: "File too large",
  28: "No space left on device",
  29: "Illegal seek",
  30: "Read only file system",
  31: "Too many links",
  32: "Broken pipe",
  33: "Math arg out of domain of func",
  34: "Math result not representable",
  35: "File locking deadlock error",
  36: "File or path name too long",
  37: "No record locks available",
  38: "Function not implemented",
  39: "Directory not empty",
  40: "Too many symbolic links",
  42: "No message of desired type",
  43: "Identifier removed",
  44: "Channel number out of range",
  45: "Level 2 not synchronized",
  46: "Level 3 halted",
  47: "Level 3 reset",
  48: "Link number out of range",
  49: "Protocol driver not attached",
  50: "No CSI structure available",
  51: "Level 2 halted",
  52: "Invalid exchange",
  53: "Invalid request descriptor",
  54: "Exchange full",
  55: "No anode",
  56: "Invalid request code",
  57: "Invalid slot",
  59: "Bad font file fmt",
  60: "Device not a stream",
  61: "No data (for no delay io)",
  62: "Timer expired",
  63: "Out of streams resources",
  64: "Machine is not on the network",
  65: "Package not installed",
  66: "The object is remote",
  67: "The link has been severed",
  68: "Advertise error",
  69: "Srmount error",
  70: "Communication error on send",
  71: "Protocol error",
  72: "Multihop attempted",
  73: "Cross mount point (not really error)",
  74: "Trying to read unreadable message",
  75: "Value too large for defined data type",
  76: "Given log. name not unique",
  77: "f.d. invalid for this operation",
  78: "Remote address changed",
  79: "Can   access a needed shared lib",
  80: "Accessing a corrupted shared lib",
  81: ".lib section in a.out corrupted",
  82: "Attempting to link in too many libs",
  83: "Attempting to exec a shared library",
  84: "Illegal byte sequence",
  86: "Streams pipe error",
  87: "Too many users",
  88: "Socket operation on non-socket",
  89: "Destination address required",
  90: "Message too long",
  91: "Protocol wrong type for socket",
  92: "Protocol not available",
  93: "Unknown protocol",
  94: "Socket type not supported",
  95: "Not supported",
  96: "Protocol family not supported",
  97: "Address family not supported by protocol family",
  98: "Address already in use",
  99: "Address not available",
  100: "Network interface is not configured",
  101: "Network is unreachable",
  102: "Connection reset by network",
  103: "Connection aborted",
  104: "Connection reset by peer",
  105: "No buffer space available",
  106: "Socket is already connected",
  107: "Socket is not connected",
  108: "Can't send after socket shutdown",
  109: "Too many references",
  110: "Connection timed out",
  111: "Connection refused",
  112: "Host is down",
  113: "Host is unreachable",
  114: "Socket already connected",
  115: "Connection already in progress",
  116: "Stale file handle",
  122: "Quota exceeded",
  123: "No medium (in tape drive)",
  125: "Operation canceled",
  130: "Previous owner died",
  131: "State not recoverable"
};
function ib(t) {
  if (e.___errno_location) {
    F[e.___errno_location() >> 2] = t;
  }
  return t;
}
function jb(e, t) {
  for (var n = 0, r = e.length - 1; r >= 0; r--) {
    var i = e[r];
    if (i === ".") {
      e.splice(r, 1);
    } else if (i === "..") {
      e.splice(r, 1);
      n++;
    } else if (n) {
      e.splice(r, 1);
      n--;
    }
  }
  if (t) {
    for (; n--; n) {
      e.unshift("..");
    }
  }
  return e;
}
function N(e) {
  var t = e.charAt(0) === "/";
  var n = e.substr(-1) === "/";
  if (!((e = jb(e.split("/").filter(function (e) {
    return !!e;
  }), !t).join("/")) || t)) {
    e = ".";
  }
  if (e && n) {
    e += "/";
  }
  return (t ? "/" : "") + e;
}
function kb(e) {
  var t = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(e).slice(1);
  e = t[0];
  t = t[1];
  if (e || t) {
    if (t) {
      t = t.substr(0, t.length - 1);
    }
    return e + t;
  } else {
    return ".";
  }
}
function lb(e) {
  if (e === "/") {
    return "/";
  }
  var t = e.lastIndexOf("/");
  if (t === -1) {
    return e;
  } else {
    return e.substr(t + 1);
  }
}
function mb() {
  for (var e = "", t = false, n = arguments.length - 1; n >= -1 && !t; n--) {
    if (typeof (t = n >= 0 ? arguments[n] : "/") != "string") {
      throw new TypeError("Arguments to path.resolve must be strings");
    }
    if (!t) {
      return "";
    }
    e = t + "/" + e;
    t = t.charAt(0) === "/";
  }
  return (t ? "/" : "") + (e = jb(e.split("/").filter(function (e) {
    return !!e;
  }), !t).join("/")) || ".";
}
var nb = [];
function ob(e, t) {
  nb[e] = {
    input: [],
    output: [],
    L: t
  };
  pb(e, qb);
}
var qb = {
  open: function (e) {
    var t = nb[e.g.rdev];
    if (!t) {
      throw new O(M.ba);
    }
    e.tty = t;
    e.seekable = false;
  },
  close: function (e) {
    e.tty.L.flush(e.tty);
  },
  flush: function (e) {
    e.tty.L.flush(e.tty);
  },
  read: function (e, t, n, r) {
    if (!e.tty || !e.tty.L.Ba) {
      throw new O(M.sa);
    }
    for (var i = 0, a = 0; a < r; a++) {
      var o;
      try {
        o = e.tty.L.Ba(e.tty);
      } catch (e) {
        throw new O(M.F);
      }
      if (o === undefined && i === 0) {
        throw new O(M.oa);
      }
      if (o == null) {
        break;
      }
      i++;
      t[n + a] = o;
    }
    if (i) {
      e.g.timestamp = Date.now();
    }
    return i;
  },
  write: function (e, t, n, r) {
    if (!e.tty || !e.tty.L.ja) {
      throw new O(M.sa);
    }
    for (var i = 0; i < r; i++) {
      try {
        e.tty.L.ja(e.tty, t[n + i]);
      } catch (e) {
        throw new O(M.F);
      }
    }
    if (r) {
      e.g.timestamp = Date.now();
    }
    return i;
  }
};
var rb = {
  Ba: function (e) {
    if (!e.input.length) {
      var t = null;
      if (typeof window != "undefined" && typeof window.prompt == "function") {
        if ((t = window.prompt("Input: ")) !== null) {
          t += "\n";
        }
      } else if (typeof readline == "function") {
        if ((t = readline()) !== null) {
          t += "\n";
        }
      }
      if (!t) {
        return null;
      }
      e.input = Va(t, true);
    }
    return e.input.shift();
  },
  ja: function (t, n) {
    if (n === null || n === 10) {
      e.print(za(t.output, 0));
      t.output = [];
    } else if (n != 0) {
      t.output.push(n);
    }
  },
  flush: function (t) {
    if (t.output && t.output.length > 0) {
      e.print(za(t.output, 0));
      t.output = [];
    }
  }
};
var sb = {
  ja: function (t, n) {
    if (n === null || n === 10) {
      e.printErr(za(t.output, 0));
      t.output = [];
    } else if (n != 0) {
      t.output.push(n);
    }
  },
  flush: function (t) {
    if (t.output && t.output.length > 0) {
      e.printErr(za(t.output, 0));
      t.output = [];
    }
  }
};
var P = {
  q: null,
  A: function () {
    return P.createNode(null, "/", 16895, 0);
  },
  createNode: function (e, t, n, r) {
    if ((n & 61440) == 24576 || (n & 61440) == 4096) {
      throw new O(M.G);
    }
    if (!P.q) {
      P.q = {
        dir: {
          g: {
            D: P.k.D,
            p: P.k.p,
            lookup: P.k.lookup,
            V: P.k.V,
            rename: P.k.rename,
            unlink: P.k.unlink,
            rmdir: P.k.rmdir,
            readdir: P.k.readdir,
            symlink: P.k.symlink
          },
          stream: {
            I: P.n.I
          }
        },
        file: {
          g: {
            D: P.k.D,
            p: P.k.p
          },
          stream: {
            I: P.n.I,
            read: P.n.read,
            write: P.n.write,
            ta: P.n.ta,
            Ea: P.n.Ea,
            Ga: P.n.Ga
          }
        },
        link: {
          g: {
            D: P.k.D,
            p: P.k.p,
            readlink: P.k.readlink
          },
          stream: {}
        },
        va: {
          g: {
            D: P.k.D,
            p: P.k.p
          },
          stream: tb
        }
      };
    }
    if (((n = ub(e, t, n, r)).mode & 61440) == 16384) {
      n.k = P.q.dir.g;
      n.n = P.q.dir.stream;
      n.e = {};
    } else if ((n.mode & 61440) == 32768) {
      n.k = P.q.file.g;
      n.n = P.q.file.stream;
      n.o = 0;
      n.e = null;
    } else if ((n.mode & 61440) == 40960) {
      n.k = P.q.link.g;
      n.n = P.q.link.stream;
    } else if ((n.mode & 61440) == 8192) {
      n.k = P.q.va.g;
      n.n = P.q.va.stream;
    }
    n.timestamp = Date.now();
    if (e) {
      e.e[t] = n;
    }
    return n;
  },
  Sa: function (e) {
    if (e.e && e.e.subarray) {
      for (var t = [], n = 0; n < e.o; ++n) {
        t.push(e.e[n]);
      }
      return t;
    }
    return e.e;
  },
  qd: function (e) {
    if (e.e) {
      if (e.e.subarray) {
        return e.e.subarray(0, e.o);
      } else {
        return new Uint8Array(e.e);
      }
    } else {
      return new Uint8Array();
    }
  },
  ya: function (e, t) {
    if (e.e && e.e.subarray && t > e.e.length) {
      e.e = P.Sa(e);
      e.o = e.e.length;
    }
    if (!e.e || e.e.subarray) {
      var n = e.e ? e.e.buffer.byteLength : 0;
      if (!(n >= t)) {
        t = Math.max(t, n * (n < 1048576 ? 2 : 1.125) | 0);
        if (n != 0) {
          t = Math.max(t, 256);
        }
        n = e.e;
        e.e = new Uint8Array(t);
        if (e.o > 0) {
          e.e.set(n.subarray(0, e.o), 0);
        }
      }
    } else {
      for (!e.e && t > 0 && (e.e = []); e.e.length < t;) {
        e.e.push(0);
      }
    }
  },
  ab: function (e, t) {
    if (e.o != t) {
      if (t == 0) {
        e.e = null;
        e.o = 0;
      } else {
        if (!e.e || e.e.subarray) {
          var n = e.e;
          e.e = new Uint8Array(new ArrayBuffer(t));
          if (n) {
            e.e.set(n.subarray(0, Math.min(t, e.o)));
          }
        } else {
          if (!e.e) {
            e.e = [];
          }
          if (e.e.length > t) {
            e.e.length = t;
          } else {
            for (; e.e.length < t;) {
              e.e.push(0);
            }
          }
        }
        e.o = t;
      }
    }
  },
  k: {
    D: function (e) {
      var t = {
        dev: (e.mode & 61440) == 8192 ? e.id : 1,
        ino: e.id,
        mode: e.mode,
        nlink: 1,
        uid: 0,
        gid: 0,
        rdev: e.rdev
      };
      if ((e.mode & 61440) == 16384) {
        t.size = 4096;
      } else if ((e.mode & 61440) == 32768) {
        t.size = e.o;
      } else if ((e.mode & 61440) == 40960) {
        t.size = e.link.length;
      } else {
        t.size = 0;
      }
      t.atime = new Date(e.timestamp);
      t.mtime = new Date(e.timestamp);
      t.ctime = new Date(e.timestamp);
      t.Pa = 4096;
      t.blocks = Math.ceil(t.size / t.Pa);
      return t;
    },
    p: function (e, t) {
      if (t.mode !== undefined) {
        e.mode = t.mode;
      }
      if (t.timestamp !== undefined) {
        e.timestamp = t.timestamp;
      }
      if (t.size !== undefined) {
        P.ab(e, t.size);
      }
    },
    lookup: function () {
      throw vb[M.B];
    },
    V: function (e, t, n, r) {
      return P.createNode(e, t, n, r);
    },
    rename: function (e, t, n) {
      if ((e.mode & 61440) == 16384) {
        var r;
        try {
          r = wb(t, n);
        } catch (e) {}
        if (r) {
          for (var i in r.e) {
            throw new O(M.ra);
          }
        }
      }
      delete e.parent.e[e.name];
      e.name = n;
      t.e[n] = e;
      e.parent = t;
    },
    unlink: function (e, t) {
      delete e.e[t];
    },
    rmdir: function (e, t) {
      var n;
      var r = wb(e, t);
      for (n in r.e) {
        throw new O(M.ra);
      }
      delete e.e[t];
    },
    readdir: function (e) {
      var t;
      var n = [".", ".."];
      for (t in e.e) {
        if (e.e.hasOwnProperty(t)) {
          n.push(t);
        }
      }
      return n;
    },
    symlink: function (e, t, n) {
      (e = P.createNode(e, t, 41471, 0)).link = n;
      return e;
    },
    readlink: function (e) {
      if ((e.mode & 61440) != 40960) {
        throw new O(M.u);
      }
      return e.link;
    }
  },
  n: {
    read: function (e, t, n, r, i) {
      var a = e.g.e;
      if (i >= e.g.o) {
        return 0;
      }
      assert((e = Math.min(e.g.o - i, r)) >= 0);
      if (e > 8 && a.subarray) {
        t.set(a.subarray(i, i + e), n);
      } else {
        for (r = 0; r < e; r++) {
          t[n + r] = a[i + r];
        }
      }
      return e;
    },
    write: function (e, t, n, r, i, a) {
      if (!r) {
        return 0;
      }
      (e = e.g).timestamp = Date.now();
      if (t.subarray && (!e.e || e.e.subarray)) {
        if (a) {
          e.e = t.subarray(n, n + r);
          return e.o = r;
        }
        if (e.o === 0 && i === 0) {
          e.e = new Uint8Array(t.subarray(n, n + r));
          return e.o = r;
        }
        if (i + r <= e.o) {
          e.e.set(t.subarray(n, n + r), i);
          return r;
        }
      }
      P.ya(e, i + r);
      if (e.e.subarray && t.subarray) {
        e.e.set(t.subarray(n, n + r), i);
      } else {
        for (a = 0; a < r; a++) {
          e.e[i + a] = t[n + a];
        }
      }
      e.o = Math.max(e.o, i + r);
      return r;
    },
    I: function (e, t, n) {
      if (n === 1) {
        t += e.position;
      } else if (n === 2 && (e.g.mode & 61440) == 32768) {
        t += e.g.o;
      }
      if (t < 0) {
        throw new O(M.u);
      }
      return t;
    },
    ta: function (e, t, n) {
      P.ya(e.g, t + n);
      e.g.o = Math.max(e.g.o, t + n);
    },
    Ea: function (e, t, n, r, i, a, o) {
      if ((e.g.mode & 61440) != 32768) {
        throw new O(M.ba);
      }
      n = e.g.e;
      if (o & 2 || n.buffer !== t && n.buffer !== t.buffer) {
        if (i > 0 || i + r < e.g.o) {
          n = n.subarray ? n.subarray(i, i + r) : Array.prototype.slice.call(n, i, i + r);
        }
        e = true;
        if (!(r = ua(r))) {
          throw new O(M.Ka);
        }
        t.set(n, r);
      } else {
        e = false;
        r = n.byteOffset;
      }
      return {
        Cd: r,
        gd: e
      };
    },
    Ga: function (e, t, n, r, i) {
      if ((e.g.mode & 61440) != 32768) {
        throw new O(M.ba);
      }
      if (!(i & 2)) {
        P.n.write(e, t, 0, r, n, false);
      }
      return 0;
    }
  }
};
G(1, "i32*", 2);
G(1, "i32*", 2);
G(1, "i32*", 2);
var xb = null;
var yb = [null];
var zb = [];
var Ab = 1;
var R = null;
var Cb = true;
var S = {};
var O = null;
var vb = {};
function T(e, t) {
  t = t || {};
  if (!(e = mb("/", e))) {
    return {
      path: "",
      g: null
    };
  }
  var n;
  var r = {
    za: true,
    ka: 0
  };
  for (n in r) {
    if (t[n] === undefined) {
      t[n] = r[n];
    }
  }
  if (t.ka > 8) {
    throw new O(M.aa);
  }
  r = jb(e.split("/").filter(function (e) {
    return !!e;
  }), false);
  var i = xb;
  n = "/";
  for (var a = 0; a < r.length; a++) {
    var o = a === r.length - 1;
    if (o && t.parent) {
      break;
    }
    i = wb(i, r[a]);
    n = N(n + "/" + r[a]);
    if (i.R && (!o || o && t.za)) {
      i = i.R.root;
    }
    if (!o || t.ga) {
      for (o = 0; (i.mode & 61440) == 40960;) {
        i = Db(n);
        i = T(n = mb(kb(n), i), {
          ka: t.ka
        }).g;
        if (o++ > 40) {
          throw new O(M.aa);
        }
      }
    }
  }
  return {
    path: n,
    g: i
  };
}
function U(e) {
  for (var t;;) {
    if (e === e.parent) {
      e = e.A.Fa;
      if (t) {
        if (e[e.length - 1] !== "/") {
          return e + "/" + t;
        } else {
          return e + t;
        }
      } else {
        return e;
      }
    }
    t = t ? e.name + "/" + t : e.name;
    e = e.parent;
  }
}
function Eb(e, t) {
  for (var n = 0, r = 0; r < t.length; r++) {
    n = (n << 5) - n + t.charCodeAt(r) | 0;
  }
  return (e + n >>> 0) % R.length;
}
function Fb(e) {
  var t = Eb(e.parent.id, e.name);
  e.K = R[t];
  R[t] = e;
}
function wb(e, t) {
  var n;
  if (n = (n = Gb(e, "x")) ? n : e.k.lookup ? 0 : M.Y) {
    throw new O(n, e);
  }
  for (n = R[Eb(e.id, t)]; n; n = n.K) {
    var r = n.name;
    if (n.parent.id === e.id && r === t) {
      return n;
    }
  }
  return e.k.lookup(e, t);
}
function ub(e, t, n, r) {
  if (!Hb) {
    (Hb = function (e, t, n, r) {
      if (!e) {
        e = this;
      }
      this.parent = e;
      this.A = e.A;
      this.R = null;
      this.id = Ab++;
      this.name = t;
      this.mode = n;
      this.k = {};
      this.n = {};
      this.rdev = r;
    }).prototype = {};
    Object.defineProperties(Hb.prototype, {
      read: {
        get: function () {
          return (this.mode & 365) == 365;
        },
        set: function (e) {
          if (e) {
            this.mode |= 365;
          } else {
            this.mode &= -366;
          }
        }
      },
      write: {
        get: function () {
          return (this.mode & 146) == 146;
        },
        set: function (e) {
          if (e) {
            this.mode |= 146;
          } else {
            this.mode &= -147;
          }
        }
      },
      Xa: {
        get: function () {
          return (this.mode & 61440) == 16384;
        }
      },
      Ca: {
        get: function () {
          return (this.mode & 61440) == 8192;
        }
      }
    });
  }
  Fb(e = new Hb(e, t, n, r));
  return e;
}
var Ib = {
  r: 0,
  rs: 1052672,
  "r+": 2,
  w: 577,
  wx: 705,
  xw: 705,
  "w+": 578,
  "wx+": 706,
  "xw+": 706,
  a: 1089,
  ax: 1217,
  xa: 1217,
  "a+": 1090,
  "ax+": 1218,
  "xa+": 1218
};
function Gb(e, t) {
  if (Cb || (t.indexOf("r") === -1 || e.mode & 292) && (t.indexOf("w") === -1 || e.mode & 146) && (t.indexOf("x") === -1 || e.mode & 73)) {
    return 0;
  } else {
    return M.Y;
  }
}
function Jb(e, t) {
  try {
    wb(e, t);
    return M.pa;
  } catch (e) {}
  return Gb(e, "wx");
}
function Kb() {
  for (var e = 0; e <= 4096; e++) {
    if (!zb[e]) {
      return e;
    }
  }
  throw new O(M.Ja);
}
function Lb(e) {
  if (!Mb) {
    (Mb = function () {}).prototype = {};
    Object.defineProperties(Mb.prototype, {
      object: {
        get: function () {
          return this.g;
        },
        set: function (e) {
          this.g = e;
        }
      },
      vd: {
        get: function () {
          return (this.flags & 2097155) != 1;
        }
      },
      wd: {
        get: function () {
          return (this.flags & 2097155) != 0;
        }
      },
      ud: {
        get: function () {
          return this.flags & 1024;
        }
      }
    });
  }
  var t;
  var n = new Mb();
  for (t in e) {
    n[t] = e[t];
  }
  e = n;
  n = Kb();
  e.fd = n;
  return zb[n] = e;
}
var tb = {
  open: function (e) {
    e.n = yb[e.g.rdev].n;
    if (e.n.open) {
      e.n.open(e);
    }
  },
  I: function () {
    throw new O(M.da);
  }
};
var Zb;
function pb(e, t) {
  yb[e] = {
    n: t
  };
}
function Nb(e, t) {
  var n;
  var r = t === "/";
  var i = !t;
  if (r && xb) {
    throw new O(M.$);
  }
  if (!r && !i) {
    t = (n = T(t, {
      za: false
    })).path;
    if ((n = n.g).R) {
      throw new O(M.$);
    }
    if ((n.mode & 61440) != 16384) {
      throw new O(M.qa);
    }
  }
  i = {
    type: e,
    Ad: {},
    Fa: t,
    Ya: []
  };
  var a = e.A(i);
  a.A = i;
  i.root = a;
  if (r) {
    xb = a;
  } else if (n) {
    n.R = i;
    if (n.A) {
      n.A.Ya.push(i);
    }
  }
}
function Ob(e, t, n) {
  var r = T(e, {
    parent: true
  }).g;
  if (!(e = lb(e)) || e === "." || e === "..") {
    throw new O(M.u);
  }
  var i = Jb(r, e);
  if (i) {
    throw new O(i);
  }
  if (!r.k.V) {
    throw new O(M.G);
  }
  return r.k.V(r, e, t, n);
}
function Pb(e, t) {
  t = (t !== undefined ? t : 438) & 4095;
  return Ob(e, t |= 32768, 0);
}
function V(e, t) {
  t = (t !== undefined ? t : 511) & 1023;
  return Ob(e, t |= 16384, 0);
}
function Qb(e, t, n) {
  if (n === undefined) {
    n = t;
    t = 438;
  }
  return Ob(e, t | 8192, n);
}
function Rb(e, t) {
  if (!mb(e)) {
    throw new O(M.B);
  }
  var n = T(t, {
    parent: true
  }).g;
  if (!n) {
    throw new O(M.B);
  }
  var r = lb(t);
  var i = Jb(n, r);
  if (i) {
    throw new O(i);
  }
  if (!n.k.symlink) {
    throw new O(M.G);
  }
  return n.k.symlink(n, r, e);
}
function Db(e) {
  if (!(e = T(e).g)) {
    throw new O(M.B);
  }
  if (!e.k.readlink) {
    throw new O(M.u);
  }
  return mb(U(e.parent), e.k.readlink(e));
}
function Sb(e, t) {
  var n;
  if (!(n = typeof e == "string" ? T(e, {
    ga: true
  }).g : e).k.p) {
    throw new O(M.G);
  }
  n.k.p(n, {
    mode: t & 4095 | n.mode & -4096,
    timestamp: Date.now()
  });
}
function Tb(t, n) {
  var r;
  var i;
  var a;
  if (t === "") {
    throw new O(M.B);
  }
  if (typeof n == "string") {
    if ((i = Ib[n]) === undefined) {
      throw Error("Unknown file open mode: " + n);
    }
  } else {
    i = n;
  }
  r = (n = i) & 64 ? (r === undefined ? 438 : r) & 4095 | 32768 : 0;
  if (typeof t == "object") {
    a = t;
  } else {
    t = N(t);
    try {
      a = T(t, {
        ga: !(n & 131072)
      }).g;
    } catch (e) {}
  }
  i = false;
  if (n & 64) {
    if (a) {
      if (n & 128) {
        throw new O(M.pa);
      }
    } else {
      a = Ob(t, r, 0);
      i = true;
    }
  }
  if (!a) {
    throw new O(M.B);
  }
  if ((a.mode & 61440) == 8192) {
    n &= -513;
  }
  if (n & 65536 && (a.mode & 61440) != 16384) {
    throw new O(M.qa);
  }
  if (!i && (a ? (a.mode & 61440) == 40960 ? r = M.aa : (a.mode & 61440) == 16384 && ((n & 2097155) != 0 || n & 512) ? r = M.N : (r = ["r", "w", "rw"][n & 3], n & 512 && (r += "w"), r = Gb(a, r)) : r = M.B, r)) {
    throw new O(r);
  }
  if (n & 512) {
    var o;
    if (!(o = typeof (r = a) == "string" ? T(r, {
      ga: true
    }).g : r).k.p) {
      throw new O(M.G);
    }
    if ((o.mode & 61440) == 16384) {
      throw new O(M.N);
    }
    if ((o.mode & 61440) != 32768) {
      throw new O(M.u);
    }
    if (r = Gb(o, "w")) {
      throw new O(r);
    }
    o.k.p(o, {
      size: 0,
      timestamp: Date.now()
    });
  }
  n &= -641;
  if ((a = Lb({
    g: a,
    path: U(a),
    flags: n,
    seekable: true,
    position: 0,
    n: a.n,
    eb: [],
    error: false
  })).n.open) {
    a.n.open(a);
  }
  if (!(!e.logReadFiles || n & 1)) {
    if (!Ub) {
      Ub = {};
    }
    if (!(t in Ub)) {
      Ub[t] = 1;
      e.printErr("read file: " + t);
    }
  }
  try {
    if (S.onOpenFile) {
      o = 0;
      if ((n & 2097155) != 1) {
        o |= 1;
      }
      if ((n & 2097155) != 0) {
        o |= 2;
      }
      S.onOpenFile(t, o);
    }
  } catch (e) {
    console.log("FS.trackingDelegate['onOpenFile']('" + t + "', flags) threw an exception: " + e.message);
  }
  return a;
}
function Vb(e) {
  if (e.ia) {
    e.ia = null;
  }
  try {
    if (e.n.close) {
      e.n.close(e);
    }
  } catch (e) {
    throw e;
  } finally {
    zb[e.fd] = null;
  }
}
function Wb(e, t, n) {
  if (!e.seekable || !e.n.I) {
    throw new O(M.da);
  }
  e.position = e.n.I(e, t, n);
  e.eb = [];
}
function Xb(e, t, n, r, i, a) {
  if (r < 0 || i < 0) {
    throw new O(M.u);
  }
  if ((e.flags & 2097155) == 0) {
    throw new O(M.Z);
  }
  if ((e.g.mode & 61440) == 16384) {
    throw new O(M.N);
  }
  if (!e.n.write) {
    throw new O(M.u);
  }
  if (e.flags & 1024) {
    Wb(e, 0, 2);
  }
  var o = true;
  if (i === undefined) {
    i = e.position;
    o = false;
  } else if (!e.seekable) {
    throw new O(M.da);
  }
  t = e.n.write(e, t, n, r, i, a);
  if (!o) {
    e.position += t;
  }
  try {
    if (e.path && S.onWriteToFile) {
      S.onWriteToFile(e.path);
    }
  } catch (e) {
    console.log("FS.trackingDelegate['onWriteToFile']('" + path + "') threw an exception: " + e.message);
  }
  return t;
}
function Yb() {
  if (!O) {
    (O = function (e, t) {
      this.g = t;
      this.bb = function (e) {
        this.Q = e;
        for (var t in M) {
          if (M[t] === e) {
            this.code = t;
            break;
          }
        }
      };
      this.bb(e);
      this.message = hb[e];
    }).prototype = Error();
    O.prototype.constructor = O;
    [M.B].forEach(function (e) {
      vb[e] = new O(e);
      vb[e].stack = "<generic error, no stack>";
    });
  }
}
function $b(e, t) {
  var n = 0;
  if (e) {
    n |= 365;
  }
  if (t) {
    n |= 146;
  }
  return n;
}
function ac(e, t, n, r) {
  return Pb(e = N((typeof e == "string" ? e : U(e)) + "/" + t), $b(n, r));
}
function bc(e, t, n, r, i, a) {
  i = Pb(e = t ? N((typeof e == "string" ? e : U(e)) + "/" + t) : e, r = $b(r, i));
  if (n) {
    if (typeof n == "string") {
      e = Array(n.length);
      t = 0;
      for (var o = n.length; t < o; ++t) {
        e[t] = n.charCodeAt(t);
      }
      n = e;
    }
    Sb(i, r | 146);
    Xb(e = Tb(i, "w"), n, 0, n.length, 0, a);
    Vb(e);
    Sb(i, r);
  }
  return i;
}
function W(e, t, n, r) {
  e = N((typeof e == "string" ? e : U(e)) + "/" + t);
  t = $b(!!n, !!r);
  if (!W.Da) {
    W.Da = 64;
  }
  var i = W.Da++ << 8 | 0;
  pb(i, {
    open: function (e) {
      e.seekable = false;
    },
    close: function () {
      if (r && r.buffer && r.buffer.length) {
        r(10);
      }
    },
    read: function (e, t, r, i) {
      for (var a = 0, o = 0; o < i; o++) {
        var s;
        try {
          s = n();
        } catch (e) {
          throw new O(M.F);
        }
        if (s === undefined && a === 0) {
          throw new O(M.oa);
        }
        if (s == null) {
          break;
        }
        a++;
        t[r + o] = s;
      }
      if (a) {
        e.g.timestamp = Date.now();
      }
      return a;
    },
    write: function (e, t, n, i) {
      for (var a = 0; a < i; a++) {
        try {
          r(t[n + a]);
        } catch (e) {
          throw new O(M.F);
        }
      }
      if (i) {
        e.g.timestamp = Date.now();
      }
      return a;
    }
  });
  return Qb(e, t, i);
}
function cc(t) {
  if (t.Ca || t.Xa || t.link || t.e) {
    return true;
  }
  var n = true;
  if (typeof XMLHttpRequest != "undefined") {
    throw Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
  }
  if (!e.read) {
    throw Error("Cannot load without read() or XMLHttpRequest.");
  }
  try {
    t.e = Va(e.read(t.url), true);
    t.o = t.e.length;
  } catch (e) {
    n = false;
  }
  if (!n) {
    ib(M.F);
  }
  return n;
}
var dc = {};
var Hb;
var Mb;
var Ub;
var ec = 0;
function X() {
  return F[(ec += 4) - 4 >> 2];
}
function fc() {
  var e;
  e = X();
  if (!(e = zb[e])) {
    throw new O(M.Z);
  }
  return e;
}
function wa(e) {
  if (!wa.C) {
    v = Ga();
    wa.C = true;
    assert(n.P);
    wa.Ra = n.P;
    n.P = function () {
      z("cannot dynamically allocate, sbrk now has control");
    };
  }
  var t = v;
  if (e == 0 || wa.Ra(e)) {
    return t;
  } else {
    return 4294967295;
  }
}
function hc(e, t) {
  ic = e;
  jc = t;
  if (!kc) {
    return 1;
  }
  if (e == 0) {
    Y = function () {
      setTimeout(lc, t);
    };
    mc = "timeout";
  } else if (e == 1) {
    Y = function () {
      nc(lc);
    };
    mc = "rAF";
  } else if (e == 2) {
    if (!window.setImmediate) {
      var n = [];
      window.addEventListener("message", function (e) {
        if (e.source === window && e.data === "__emcc") {
          e.stopPropagation();
          n.shift()();
        }
      }, true);
      window.setImmediate = function (e) {
        n.push(e);
        window.postMessage("__emcc", "*");
      };
    }
    Y = function () {
      window.setImmediate(lc);
    };
    mc = "immediate";
  }
  return 0;
}
function oc(t, r, i, a, o) {
  e.noExitRuntime = true;
  assert(!kc, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");
  kc = t;
  pc = a;
  var s = qc;
  lc = function () {
    if (!A) {
      if (rc.length > 0) {
        var r = Date.now();
        var i = rc.shift();
        i.Qa(i.T);
        if (sc) {
          var o = sc;
          var l = o % 1 == 0 ? o - 1 : Math.floor(o);
          sc = i.ld ? l : (o * 8 + (l + 0.5)) / 9;
        }
        console.log("main loop blocker \"" + i.name + "\" took " + (Date.now() - r) + " ms");
        tc();
        setTimeout(lc, 0);
      } else if (!(s < qc)) {
        uc = uc + 1 | 0;
        if (ic == 1 && jc > 1 && uc % jc != 0) {
          Y();
        } else {
          if (mc === "timeout" && e.fa) {
            e.S("Looks like you are rendering without using requestAnimationFrame for the main loop. You should use 0 for the frame rate in emscripten_set_main_loop in order to use requestAnimationFrame, as that can greatly improve your frame rates!");
            mc = "";
          }
          vc(function () {
            if (a !== undefined) {
              n.J("vi", t, [a]);
            } else {
              n.J("v", t);
            }
          });
          if (!(s < qc)) {
            if (typeof SDL == "object" && SDL.audio && SDL.audio.Za) {
              SDL.audio.Za();
            }
            Y();
          }
        }
      }
    }
  };
  if (!o) {
    if (r && r > 0) {
      hc(0, 1000 / r);
    } else {
      hc(1, 1);
    }
    Y();
  }
  if (i) {
    throw "SimulateInfiniteLoop";
  }
}
e._memcpy = gc;
var Y = null;
var mc = "";
var qc = 0;
var kc = null;
var pc = 0;
var ic = 0;
var jc = 0;
var uc = 0;
var rc = [];
function tc() {
  if (e.setStatus) {
    var t = e.statusMessage || "Please wait...";
    var n = sc;
    var r = wc.nd;
    if (n) {
      if (n < r) {
        e.setStatus(t + " (" + (r - n) + "/" + r + ")");
      } else {
        e.setStatus(t);
      }
    } else {
      e.setStatus("");
    }
  }
}
function vc(t) {
  if (!(A || e.preMainLoop && e.preMainLoop() === false)) {
    try {
      t();
    } catch (t) {
      if (t instanceof xc) {
        return;
      }
      if (t && typeof t == "object" && t.stack) {
        e.S("exception thrown: " + [t, t.stack]);
      }
      throw t;
    }
    if (e.postMainLoop) {
      e.postMainLoop();
    }
  }
}
var wc = {};
var lc;
var sc;
var yc = false;
var zc = false;
var Ac = [];
function Bc() {
  function t() {
    zc = document.pointerLockElement === r || document.mozPointerLockElement === r || document.webkitPointerLockElement === r || document.msPointerLockElement === r;
  }
  if (!e.preloadPlugins) {
    e.preloadPlugins = [];
  }
  if (!Cc) {
    Cc = true;
    try {
      Dc = true;
    } catch (e) {
      Dc = false;
      console.log("warning: no blob constructor, cannot create blobs with mimetypes");
    }
    Ec = typeof MozBlobBuilder != "undefined" ? MozBlobBuilder : typeof WebKitBlobBuilder != "undefined" ? WebKitBlobBuilder : Dc ? null : console.log("warning: no BlobBuilder");
    Fc = typeof window != "undefined" ? window.URL ? window.URL : window.webkitURL : undefined;
    if (!(e.Ha || Fc !== undefined)) {
      console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available.");
      e.Ha = true;
    }
    e.preloadPlugins.push({
      canHandle: function (t) {
        return !e.Ha && /\.(jpg|jpeg|png|bmp)$/i.test(t);
      },
      handle: function (t, r, i, a) {
        var o = null;
        if (Dc) {
          try {
            if ((o = new Blob([t], {
              type: Gc(r)
            })).size !== t.length) {
              o = new Blob([new Uint8Array(t).buffer], {
                type: Gc(r)
              });
            }
          } catch (e) {
            n.M("Blob constructor present but fails: " + e + "; falling back to blob builder");
          }
        }
        if (!o) {
          (o = new Ec()).append(new Uint8Array(t).buffer);
          o = o.getBlob();
        }
        var s = Fc.createObjectURL(o);
        var l = new Image();
        l.onload = function () {
          assert(l.complete, "Image " + r + " could not be decoded");
          var n = document.createElement("canvas");
          n.width = l.width;
          n.height = l.height;
          n.getContext("2d").drawImage(l, 0, 0);
          e.preloadedImages[r] = n;
          Fc.revokeObjectURL(s);
          if (i) {
            i(t);
          }
        };
        l.onerror = function () {
          console.log("Image " + s + " could not be decoded");
          if (a) {
            a();
          }
        };
        l.src = s;
      }
    });
    e.preloadPlugins.push({
      canHandle: function (t) {
        return !e.zd && t.substr(-4) in {
          ".ogg": 1,
          ".wav": 1,
          ".mp3": 1
        };
      },
      handle: function (t, n, r, i) {
        function a(i) {
          if (!s) {
            s = true;
            e.preloadedAudios[n] = i;
            if (r) {
              r(t);
            }
          }
        }
        function o() {
          if (!s) {
            s = true;
            e.preloadedAudios[n] = new Audio();
            if (i) {
              i();
            }
          }
        }
        var s = false;
        if (!Dc) {
          return o();
        }
        try {
          var l = new Blob([t], {
            type: Gc(n)
          });
        } catch (e) {
          return o();
        }
        l = Fc.createObjectURL(l);
        var u = new Audio();
        u.addEventListener("canplaythrough", function () {
          a(u);
        }, false);
        u.onerror = function () {
          if (!s) {
            console.log("warning: browser could not fully decode audio " + n + ", trying slower base64 approach");
            for (var e = "", r = 0, i = 0, o = 0; o < t.length; o++) {
              r = r << 8 | t[o];
              i += 8;
              r = r << 8 | t[o];
              i += 8;
              for (; i >= 6;) {
                var l = r >> i - 6 & 63;
                i = i - 6;
                e = e + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[l];
              }
            }
            if (i == 2) {
              e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(r & 3) << 4];
              e += "==";
            } else if (i == 4) {
              e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(r & 15) << 2];
              e += "=";
            }
            u.src = "data:audio/x-" + n.substr(-3) + ";base64," + e;
            a(u);
          }
        };
        u.src = l;
        Hc(function () {
          a(u);
        });
      }
    });
    var r = e.canvas;
    if (r) {
      r.la = r.requestPointerLock || r.mozRequestPointerLock || r.webkitRequestPointerLock || r.msRequestPointerLock || function () {};
      r.wa = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || function () {};
      r.wa = r.wa.bind(document);
      document.addEventListener("pointerlockchange", t, false);
      document.addEventListener("mozpointerlockchange", t, false);
      document.addEventListener("webkitpointerlockchange", t, false);
      document.addEventListener("mspointerlockchange", t, false);
      if (e.elementPointerLock) {
        r.addEventListener("click", function (e) {
          if (!zc && r.la) {
            r.la();
            e.preventDefault();
          }
        }, false);
      }
    }
  }
}
function Ic(t, n, r, i) {
  if (n && e.fa && t == e.canvas) {
    return e.fa;
  }
  var a;
  var o;
  if (n) {
    o = {
      antialias: false,
      alpha: false
    };
    if (i) {
      for (var s in i) {
        o[s] = i[s];
      }
    }
    if (o = GL.createContext(t, o)) {
      a = GL.getContext(o).cd;
    }
    t.style.backgroundColor = "black";
  } else {
    a = t.getContext("2d");
  }
  if (a) {
    if (r) {
      if (!n) {
        assert(typeof GLctx == "undefined", "cannot set in module if GLctx is used, but we are a non-GL context that would replace it");
      }
      e.fa = a;
      if (n) {
        GL.yd(o);
      }
      e.Dd = n;
      Ac.forEach(function (e) {
        e();
      });
      Bc();
    }
    return a;
  } else {
    return null;
  }
}
var Jc = false;
var Kc = undefined;
var Lc = undefined;
function Mc(t, n, r) {
  function i() {
    yc = false;
    var t = a.parentNode;
    if ((document.webkitFullScreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.mozFullscreenElement || document.fullScreenElement || document.fullscreenElement || document.msFullScreenElement || document.msFullscreenElement || document.webkitCurrentFullScreenElement) === t) {
      a.ua = document.cancelFullScreen || document.mozCancelFullScreen || document.webkitCancelFullScreen || document.msExitFullscreen || document.exitFullscreen || function () {};
      a.ua = a.ua.bind(document);
      if (Kc) {
        a.la();
      }
      yc = true;
      if (Lc) {
        Nc();
      }
    } else {
      t.parentNode.insertBefore(a, t);
      t.parentNode.removeChild(t);
      if (Lc) {
        Oc();
      }
    }
    if (e.onFullScreen) {
      e.onFullScreen(yc);
    }
    Pc(a);
  }
  if ((Kc = t) === undefined) {
    Kc = true;
  }
  if ((Lc = n) === undefined) {
    Lc = false;
  }
  if ((Qc = r) === undefined) {
    Qc = null;
  }
  var a = e.canvas;
  if (!Jc) {
    Jc = true;
    document.addEventListener("fullscreenchange", i, false);
    document.addEventListener("mozfullscreenchange", i, false);
    document.addEventListener("webkitfullscreenchange", i, false);
    document.addEventListener("MSFullscreenChange", i, false);
  }
  var o = document.createElement("div");
  a.parentNode.insertBefore(o, a);
  o.appendChild(a);
  o.C = o.requestFullScreen || o.mozRequestFullScreen || o.msRequestFullscreen || (o.webkitRequestFullScreen ? function () {
    o.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
  } : null);
  if (r) {
    o.C({
      Ed: r
    });
  } else {
    o.C();
  }
}
var Rc = 0;
function Sc(e) {
  var t = Date.now();
  if (Rc === 0) {
    Rc = t + 1000 / 60;
  } else {
    for (; t + 2 >= Rc;) {
      Rc += 1000 / 60;
    }
  }
  t = Math.max(Rc - t, 0);
  setTimeout(e, t);
}
function nc(e) {
  if (typeof window == "undefined") {
    Sc(e);
  } else {
    if (!window.requestAnimationFrame) {
      window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || Sc;
    }
    window.requestAnimationFrame(e);
  }
}
function Hc(t) {
  e.noExitRuntime = true;
  setTimeout(function () {
    if (!A) {
      t();
    }
  }, 10000);
}
function Gc(e) {
  return {
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    png: "image/png",
    bmp: "image/bmp",
    ogg: "audio/ogg",
    wav: "audio/wav",
    mp3: "audio/mpeg"
  }[e.substr(e.lastIndexOf(".") + 1)];
}
function Tc(e, t, n) {
  var r = new XMLHttpRequest();
  r.open("GET", e, true);
  r.responseType = "arraybuffer";
  r.onload = function () {
    if (r.status == 200 || r.status == 0 && r.response) {
      t(r.response);
    } else {
      n();
    }
  };
  r.onerror = n;
  r.send(null);
}
function Uc(e, t, n) {
  Tc(e, function (n) {
    assert(n, "Loading data file \"" + e + "\" failed (no arrayBuffer).");
    t(new Uint8Array(n));
    Za();
  }, function () {
    if (!n) {
      throw "Loading data file \"" + e + "\" failed.";
    }
    n();
  });
  Ya();
}
var Vc = [];
var Cc;
var Dc;
var Ec;
var Fc;
var Qc;
function Wc() {
  var t = e.canvas;
  Vc.forEach(function (e) {
    e(t.width, t.height);
  });
}
function Nc() {
  if (typeof SDL != "undefined") {
    var e = Ia[SDL.screen + n.H * 0 >> 2];
    F[SDL.screen + n.H * 0 >> 2] = e | 8388608;
  }
  Wc();
}
function Oc() {
  if (typeof SDL != "undefined") {
    var e = Ia[SDL.screen + n.H * 0 >> 2];
    F[SDL.screen + n.H * 0 >> 2] = e & -8388609;
  }
  Wc();
}
function Pc(t, n, r) {
  if (n && r) {
    t.fb = n;
    t.Va = r;
  } else {
    n = t.fb;
    r = t.Va;
  }
  var i = n;
  var a = r;
  if (e.forcedAspectRatio && e.forcedAspectRatio > 0) {
    if (i / a < e.forcedAspectRatio) {
      i = Math.round(a * e.forcedAspectRatio);
    } else {
      a = Math.round(i / e.forcedAspectRatio);
    }
  }
  if ((document.webkitFullScreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.mozFullscreenElement || document.fullScreenElement || document.fullscreenElement || document.msFullScreenElement || document.msFullscreenElement || document.webkitCurrentFullScreenElement) === t.parentNode && typeof screen != "undefined") {
    var o = Math.min(screen.width / i, screen.height / a);
    i = Math.round(i * o);
    a = Math.round(a * o);
  }
  if (Lc) {
    if (t.width != i) {
      t.width = i;
    }
    if (t.height != a) {
      t.height = a;
    }
    if (t.style !== undefined) {
      t.style.removeProperty("width");
      t.style.removeProperty("height");
    }
  } else {
    if (t.width != n) {
      t.width = n;
    }
    if (t.height != r) {
      t.height = r;
    }
    if (t.style !== undefined) {
      if (i != n || a != r) {
        t.style.setProperty("width", i + "px", "important");
        t.style.setProperty("height", a + "px", "important");
      } else {
        t.style.removeProperty("width");
        t.style.removeProperty("height");
      }
    }
  }
}
Yb();
R = Array(4096);
Nb(P, "/");
V("/tmp");
V("/home");
V("/home/web_user");
(function () {
  var e;
  V("/dev");
  pb(259, {
    read: function () {
      return 0;
    },
    write: function (e, t, n, r) {
      return r;
    }
  });
  Qb("/dev/null", 259);
  ob(1280, rb);
  ob(1536, sb);
  Qb("/dev/tty", 1280);
  Qb("/dev/tty1", 1536);
  if (typeof crypto != "undefined") {
    var t = new Uint8Array(1);
    e = function () {
      crypto.getRandomValues(t);
      return t[0];
    };
  } else {
    e = function () {
      return Math.random() * 256 | 0;
    };
  }
  W("/dev", "random", e);
  W("/dev", "urandom", e);
  V("/dev/shm");
  V("/dev/shm/tmp");
})();
V("/proc");
V("/proc/self");
V("/proc/self/fd");
Nb({
  A: function () {
    var e = ub("/proc/self", "fd", 16895, 73);
    e.k = {
      lookup: function (e, t) {
        var n = zb[+t];
        if (!n) {
          throw new O(M.Z);
        }
        var r = {
          parent: null,
          A: {
            Fa: "fake"
          },
          k: {
            readlink: function () {
              return n.path;
            }
          }
        };
        return r.parent = r;
      }
    };
    return e;
  }
}, "/proc/self/fd");
Qa.unshift(function () {
  if (!e.noFSInit && !Zb) {
    assert(!Zb, "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)");
    Zb = true;
    Yb();
    e.stdin = e.stdin;
    e.stdout = e.stdout;
    e.stderr = e.stderr;
    if (e.stdin) {
      W("/dev", "stdin", e.stdin);
    } else {
      Rb("/dev/tty", "/dev/stdin");
    }
    if (e.stdout) {
      W("/dev", "stdout", null, e.stdout);
    } else {
      Rb("/dev/tty", "/dev/stdout");
    }
    if (e.stderr) {
      W("/dev", "stderr", null, e.stderr);
    } else {
      Rb("/dev/tty1", "/dev/stderr");
    }
    var t = Tb("/dev/stdin", "r");
    assert(t.fd === 0, "invalid handle for stdin (" + t.fd + ")");
    assert((t = Tb("/dev/stdout", "w")).fd === 1, "invalid handle for stdout (" + t.fd + ")");
    assert((t = Tb("/dev/stderr", "w")).fd === 2, "invalid handle for stderr (" + t.fd + ")");
  }
});
Ra.push(function () {
  Cb = false;
});
K.push(function () {
  Zb = false;
  var t = e._fflush;
  if (t) {
    t(0);
  }
  t = 0;
  for (; t < zb.length; t++) {
    var n = zb[t];
    if (n) {
      Vb(n);
    }
  }
});
e.FS_createFolder = function (e, t, n, r) {
  return V(e = N((typeof e == "string" ? e : U(e)) + "/" + t), $b(n, r));
};
e.FS_createPath = function (e, t) {
  e = typeof e == "string" ? e : U(e);
  for (var n = t.split("/").reverse(); n.length;) {
    var r = n.pop();
    if (r) {
      var i = N(e + "/" + r);
      try {
        V(i);
      } catch (e) {}
      e = i;
    }
  }
  return i;
};
e.FS_createDataFile = bc;
e.FS_createPreloadedFile = function (t, n, r, i, a, o, s, l, u, c) {
  function d(r) {
    function d(e) {
      if (c) {
        c();
      }
      if (!l) {
        bc(t, n, e, i, a, u);
      }
      if (o) {
        o();
      }
      Za();
    }
    var f = false;
    e.preloadPlugins.forEach(function (e) {
      if (!f && e.canHandle(p)) {
        e.handle(r, p, d, function () {
          if (s) {
            s();
          }
          Za();
        });
        f = true;
      }
    });
    if (!f) {
      d(r);
    }
  }
  Bc();
  var p = n ? mb(N(t + "/" + n)) : t;
  Ya();
  if (typeof r == "string") {
    Uc(r, function (e) {
      d(e);
    }, s);
  } else {
    d(r);
  }
};
e.FS_createLazyFile = function (e, t, n, r, i) {
  if (typeof XMLHttpRequest != "undefined") {
    throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
  }
  n = {
    Ca: false,
    url: n
  };
  var a = ac(e, t, r, i);
  if (n.e) {
    a.e = n.e;
  } else if (n.url) {
    a.e = null;
    a.url = n.url;
  }
  Object.defineProperty(a, "usedBytes", {
    get: function () {
      return this.e.length;
    }
  });
  var o = {};
  Object.keys(a.n).forEach(function (e) {
    var t = a.n[e];
    o[e] = function () {
      if (!cc(a)) {
        throw new O(M.F);
      }
      return t.apply(null, arguments);
    };
  });
  o.read = function (e, t, n, r, i) {
    if (!cc(a)) {
      throw new O(M.F);
    }
    if (i >= (e = e.g.e).length) {
      return 0;
    }
    assert((r = Math.min(e.length - i, r)) >= 0);
    if (e.slice) {
      for (var o = 0; o < r; o++) {
        t[n + o] = e[i + o];
      }
    } else {
      for (o = 0; o < r; o++) {
        t[n + o] = e.get(i + o);
      }
    }
    return r;
  };
  a.n = o;
  return a;
};
e.FS_createLink = function (e, t, n) {
  return Rb(n, e = N((typeof e == "string" ? e : U(e)) + "/" + t));
};
e.FS_createDevice = W;
e.FS_unlink = function (e) {
  var t;
  var n = T(e, {
    parent: true
  }).g;
  var r = lb(e);
  var i = wb(n, r);
  e: {
    try {
      t = wb(n, r);
    } catch (e) {
      t = e.Q;
      break e;
    }
    var a = Gb(n, "wx");
    t = a || ((t.mode & 61440) == 16384 ? M.N : 0);
  }
  if (t) {
    if (t === M.N) {
      t = M.G;
    }
    throw new O(t);
  }
  if (!n.k.unlink) {
    throw new O(M.G);
  }
  if (i.R) {
    throw new O(M.$);
  }
  try {
    if (S.willDeletePath) {
      S.willDeletePath(e);
    }
  } catch (t) {
    console.log("FS.trackingDelegate['willDeletePath']('" + e + "') threw an exception: " + t.message);
  }
  n.k.unlink(n, r);
  n = Eb(i.parent.id, i.name);
  if (R[n] === i) {
    R[n] = i.K;
  } else {
    for (n = R[n]; n;) {
      if (n.K === i) {
        n.K = i.K;
        break;
      }
      n = n.K;
    }
  }
  try {
    if (S.onDeletePath) {
      S.onDeletePath(e);
    }
  } catch (t) {
    console.log("FS.trackingDelegate['onDeletePath']('" + e + "') threw an exception: " + t.message);
  }
};
Qa.unshift(function () {});
K.push(function () {});
e.requestFullScreen = function (e, t, n) {
  Mc(e, t, n);
};
e.requestAnimationFrame = function (e) {
  nc(e);
};
e.setCanvasSize = function (t, n, r) {
  Pc(e.canvas, t, n);
  if (!r) {
    Wc();
  }
};
e.pauseMainLoop = function () {
  Y = null;
  qc++;
};
e.resumeMainLoop = function () {
  qc++;
  var e = ic;
  var t = jc;
  var n = kc;
  kc = null;
  oc(n, 0, false, pc, true);
  hc(e, t);
  Y();
};
e.getUserMedia = function () {
  if (!window.C) {
    window.C = navigator.getUserMedia || navigator.mozGetUserMedia;
  }
  window.C(undefined);
};
e.createContext = function (e, t, n, r) {
  return Ic(e, t, n, r);
};
Ka = m = n.ea(p);
va = true;
La = Ka + Na;
Ma = v = n.ea(La);
assert(Ma < w, "TOTAL_MEMORY not big enough for stack");
var Xc = G([8, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 6, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 7, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 6, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0], "i8", 3);
e.Na = {
  Math,
  Int8Array,
  Int16Array,
  Int32Array,
  Uint8Array,
  Uint16Array,
  Uint32Array,
  Float32Array,
  Float64Array,
  NaN: NaN,
  Infinity: 1 / 0
};
e.Oa = {
  abort: z,
  assert,
  invoke_ii: function (t, n) {
    try {
      return e.dynCall_ii(t, n);
    } catch (e) {
      if (typeof e != "number" && e !== "longjmp") {
        throw e;
      }
      Z.setThrew(1, 0);
    }
  },
  invoke_iiii: function (t, n, r, i) {
    try {
      return e.dynCall_iiii(t, n, r, i);
    } catch (e) {
      if (typeof e != "number" && e !== "longjmp") {
        throw e;
      }
      Z.setThrew(1, 0);
    }
  },
  invoke_vi: function (t, n) {
    try {
      e.dynCall_vi(t, n);
    } catch (e) {
      if (typeof e != "number" && e !== "longjmp") {
        throw e;
      }
      Z.setThrew(1, 0);
    }
  },
  _pthread_cleanup_pop: function () {
    assert(eb.level == K.length, "cannot pop if something else added meanwhile!");
    K.pop();
    eb.level = K.length;
  },
  ___lock: function () {},
  _emscripten_set_main_loop: oc,
  _pthread_self: function () {
    return 0;
  },
  ___syscall6: function (e, t) {
    ec = t;
    try {
      Vb(fc());
      return 0;
    } catch (e) {
      if (!(dc !== undefined && e instanceof O)) {
        z(e);
      }
      return -e.Q;
    }
  },
  _emscripten_set_main_loop_timing: hc,
  _abort: function () {
    e.abort();
  },
  _sbrk: wa,
  _time: function (e) {
    var t = Date.now() / 1000 | 0;
    if (e) {
      F[e >> 2] = t;
    }
    return t;
  },
  ___setErrNo: ib,
  _emscripten_memcpy_big: function (e, t, n) {
    H.set(H.subarray(t, t + n), e);
    return e;
  },
  ___syscall54: function (e, t) {
    ec = t;
    try {
      var n = fc();
      var r = X();
      switch (r) {
        case 21505:
        case 21506:
          if (n.tty) {
            return 0;
          } else {
            return -M.O;
          }
        case 21519:
          if (!n.tty) {
            return -M.O;
          }
          var i = X();
          return F[i >> 2] = 0;
        case 21520:
          if (n.tty) {
            return -M.u;
          } else {
            return -M.O;
          }
        case 21531:
          i = X();
          if (!n.n.Wa) {
            throw new O(M.O);
          }
          return n.n.Wa(n, r, i);
        default:
          z("bad ioctl syscall " + r);
      }
    } catch (e) {
      if (!(dc !== undefined && e instanceof O)) {
        z(e);
      }
      return -e.Q;
    }
  },
  ___unlock: function () {},
  ___syscall140: function (e, t) {
    ec = t;
    try {
      var n = fc();
      var r = X();
      var i = X();
      var a = X();
      var o = X();
      assert(r === 0);
      Wb(n, i, o);
      F[a >> 2] = n.position;
      if (n.ia && i === 0 && o === 0) {
        n.ia = null;
      }
      return 0;
    } catch (e) {
      if (!(dc !== undefined && e instanceof O)) {
        z(e);
      }
      return -e.Q;
    }
  },
  _pthread_cleanup_push: eb,
  _sysconf: function (e) {
    switch (e) {
      case 30:
        return 4096;
      case 85:
        return I / 4096;
      case 132:
      case 133:
      case 12:
      case 137:
      case 138:
      case 15:
      case 235:
      case 16:
      case 17:
      case 18:
      case 19:
      case 20:
      case 149:
      case 13:
      case 10:
      case 236:
      case 153:
      case 9:
      case 21:
      case 22:
      case 159:
      case 154:
      case 14:
      case 77:
      case 78:
      case 139:
      case 80:
      case 81:
      case 82:
      case 68:
      case 67:
      case 164:
      case 11:
      case 29:
      case 47:
      case 48:
      case 95:
      case 52:
      case 51:
      case 46:
        return 200809;
      case 79:
        return 0;
      case 27:
      case 246:
      case 127:
      case 128:
      case 23:
      case 24:
      case 160:
      case 161:
      case 181:
      case 182:
      case 242:
      case 183:
      case 184:
      case 243:
      case 244:
      case 245:
      case 165:
      case 178:
      case 179:
      case 49:
      case 50:
      case 168:
      case 169:
      case 175:
      case 170:
      case 171:
      case 172:
      case 97:
      case 76:
      case 32:
      case 173:
      case 35:
        return -1;
      case 176:
      case 177:
      case 7:
      case 155:
      case 8:
      case 157:
      case 125:
      case 126:
      case 92:
      case 93:
      case 129:
      case 130:
      case 131:
      case 94:
      case 91:
        return 1;
      case 74:
      case 60:
      case 69:
      case 70:
      case 4:
        return 1024;
      case 31:
      case 42:
      case 72:
        return 32;
      case 87:
      case 26:
      case 33:
        return 2147483647;
      case 34:
      case 1:
        return 47839;
      case 38:
      case 36:
        return 99;
      case 43:
      case 37:
        return 2048;
      case 0:
        return 2097152;
      case 3:
        return 65536;
      case 28:
        return 32768;
      case 44:
        return 32767;
      case 75:
        return 16384;
      case 39:
        return 1000;
      case 89:
        return 700;
      case 71:
        return 256;
      case 40:
        return 255;
      case 2:
        return 100;
      case 180:
        return 64;
      case 25:
        return 20;
      case 5:
        return 16;
      case 6:
        return 6;
      case 73:
        return 4;
      case 84:
        return typeof navigator == "object" && navigator.hardwareConcurrency || 1;
    }
    ib(M.u);
    return -1;
  },
  ___syscall146: function (e, t) {
    ec = t;
    try {
      var n;
      var r = fc();
      var i = X();
      e: {
        for (var a = X(), o = 0, s = 0; s < a; s++) {
          var l = Xb(r, D, F[i + s * 8 >> 2], F[i + (s * 8 + 4) >> 2], undefined);
          if (l < 0) {
            n = -1;
            break e;
          }
          o += l;
        }
        n = o;
      }
      return n;
    } catch (e) {
      if (!(dc !== undefined && e instanceof O)) {
        z(e);
      }
      return -e.Q;
    }
  },
  STACKTOP: m,
  STACK_MAX: La,
  tempDoublePtr: $a,
  ABORT: A,
  cttz_i8: Xc
};
var Z = function (e, t, n) {
  var r = new e.Int8Array(n);
  new e.Int16Array(n);
  var i = new e.Int32Array(n);
  var a = new e.Uint8Array(n);
  new e.Uint16Array(n);
  new e.Uint32Array(n);
  new e.Float32Array(n);
  new e.Float64Array(n);
  var o = t.STACKTOP | 0;
  t.STACK_MAX;
  t.tempDoublePtr;
  t.ABORT;
  t.cttz_i8;
  var s = 0;
  e.NaN;
  e.Infinity;
  var l = 0;
  e.Math.floor;
  e.Math.abs;
  e.Math.sqrt;
  e.Math.pow;
  e.Math.cos;
  e.Math.sin;
  e.Math.tan;
  e.Math.acos;
  e.Math.asin;
  e.Math.atan;
  e.Math.atan2;
  e.Math.exp;
  e.Math.log;
  e.Math.ceil;
  var u = e.Math.imul;
  e.Math.min;
  e.Math.clz32;
  var c = t.abort;
  t.assert;
  t.invoke_ii;
  t.invoke_iiii;
  t.invoke_vi;
  var d = t._pthread_cleanup_pop;
  var p = t.___lock;
  t._emscripten_set_main_loop;
  var f = t._pthread_self;
  var _ = t.___syscall6;
  t._emscripten_set_main_loop_timing;
  var g = t._abort;
  var m = t._sbrk;
  var h = t._time;
  t.___setErrNo;
  var y = t._emscripten_memcpy_big;
  var E = t.___syscall54;
  var S = t.___unlock;
  var v = t.___syscall140;
  var T = t._pthread_cleanup_push;
  var M = t._sysconf;
  var A = t.___syscall146;
  function b(e, t, n) {
    e |= 0;
    var r;
    var a = 0;
    var s = 0;
    var u = 0;
    var c = 0;
    var d = 0;
    var p = 0;
    var f = 0;
    var _ = 0;
    var g = 0;
    var m = 0;
    var h = 0;
    r = o;
    o = o + 160 | 0;
    C(a = r, t |= 0, n |= 0);
    t = i[(n = a + 144 | 0) >> 2] | 0;
    s = i[n + 4 >> 2] | 0;
    c = i[(u = n = a + 64 | 0) >> 2] | 0;
    d = i[u + 4 >> 2] | 0;
    u = F(t | 0, s | 0, 18, 0) | 0;
    p = l;
    f = G(c | 0, d | 0, t | 0, s | 0) | 0;
    s = G(f | 0, l | 0, u | 0, p | 0) | 0;
    i[(p = n) >> 2] = s;
    i[p + 4 >> 2] = l;
    s = i[(p = a + 136 | 0) >> 2] | 0;
    n = i[p + 4 >> 2] | 0;
    f = i[(u = p = a + 56 | 0) >> 2] | 0;
    t = i[u + 4 >> 2] | 0;
    u = F(s | 0, n | 0, 18, 0) | 0;
    d = l;
    c = G(f | 0, t | 0, s | 0, n | 0) | 0;
    n = G(c | 0, l | 0, u | 0, d | 0) | 0;
    i[(d = p) >> 2] = n;
    i[d + 4 >> 2] = l;
    n = i[(d = a + 128 | 0) >> 2] | 0;
    p = i[d + 4 >> 2] | 0;
    c = i[(u = d = a + 48 | 0) >> 2] | 0;
    s = i[u + 4 >> 2] | 0;
    u = F(n | 0, p | 0, 18, 0) | 0;
    t = l;
    f = G(c | 0, s | 0, n | 0, p | 0) | 0;
    p = G(f | 0, l | 0, u | 0, t | 0) | 0;
    i[(t = d) >> 2] = p;
    i[t + 4 >> 2] = l;
    p = i[(t = a + 120 | 0) >> 2] | 0;
    d = i[t + 4 >> 2] | 0;
    f = i[(u = t = a + 40 | 0) >> 2] | 0;
    n = i[u + 4 >> 2] | 0;
    u = F(p | 0, d | 0, 18, 0) | 0;
    s = l;
    c = G(f | 0, n | 0, p | 0, d | 0) | 0;
    d = G(c | 0, l | 0, u | 0, s | 0) | 0;
    i[(s = t) >> 2] = d;
    i[s + 4 >> 2] = l;
    d = i[(s = a + 112 | 0) >> 2] | 0;
    t = i[s + 4 >> 2] | 0;
    c = i[(u = s = a + 32 | 0) >> 2] | 0;
    p = i[u + 4 >> 2] | 0;
    u = F(d | 0, t | 0, 18, 0) | 0;
    n = l;
    f = G(c | 0, p | 0, d | 0, t | 0) | 0;
    t = G(f | 0, l | 0, u | 0, n | 0) | 0;
    i[(n = s) >> 2] = t;
    i[n + 4 >> 2] = l;
    t = i[(n = a + 104 | 0) >> 2] | 0;
    s = i[n + 4 >> 2] | 0;
    f = i[(u = n = a + 24 | 0) >> 2] | 0;
    d = i[u + 4 >> 2] | 0;
    u = F(t | 0, s | 0, 18, 0) | 0;
    p = l;
    c = G(f | 0, d | 0, t | 0, s | 0) | 0;
    s = G(c | 0, l | 0, u | 0, p | 0) | 0;
    i[(p = n) >> 2] = s;
    i[p + 4 >> 2] = l;
    s = i[(p = a + 96 | 0) >> 2] | 0;
    n = i[p + 4 >> 2] | 0;
    c = i[(u = p = a + 16 | 0) >> 2] | 0;
    t = i[u + 4 >> 2] | 0;
    u = F(s | 0, n | 0, 18, 0) | 0;
    d = l;
    f = G(c | 0, t | 0, s | 0, n | 0) | 0;
    n = G(f | 0, l | 0, u | 0, d | 0) | 0;
    i[(d = p) >> 2] = n;
    i[d + 4 >> 2] = l;
    n = i[(d = a + 88 | 0) >> 2] | 0;
    p = i[d + 4 >> 2] | 0;
    f = i[(u = d = a + 8 | 0) >> 2] | 0;
    s = i[u + 4 >> 2] | 0;
    u = F(n | 0, p | 0, 18, 0) | 0;
    t = l;
    c = G(f | 0, s | 0, n | 0, p | 0) | 0;
    p = G(c | 0, l | 0, u | 0, t | 0) | 0;
    i[(t = d) >> 2] = p;
    i[t + 4 >> 2] = l;
    u = i[(p = t = a + 80 | 0) >> 2] | 0;
    c = i[p + 4 >> 2] | 0;
    n = i[(p = a) >> 2] | 0;
    s = i[p + 4 >> 2] | 0;
    p = F(u | 0, c | 0, 18, 0) | 0;
    f = l;
    _ = G(n | 0, s | 0, u | 0, c | 0) | 0;
    c = G(_ | 0, l | 0, p | 0, f | 0) | 0;
    f = l;
    i[(p = a) >> 2] = c;
    i[p + 4 >> 2] = f;
    i[(p = t) >> 2] = 0;
    i[p + 4 >> 2] = 0;
    p = f;
    f = c;
    c = 0;
    do {
      n = k(f | 0, p | 0, (s = B((u = L((_ = G(p >> 31 >>> 6 | 0, 0, f | 0, p | 0) | 0) | 0, l | 0, 26) | 0) | 0, (_ = l) | 0, 26) | 0) | 0, l | 0) | 0;
      i[(s = a + (c << 3) | 0) >> 2] = n;
      i[s + 4 >> 2] = l;
      h = k((g = G(u | 0, _ | 0, i[(n = s = a + ((c | 1) << 3) | 0) >> 2] | 0, i[n + 4 >> 2] | 0) | 0) | 0, (n = l) | 0, (m = B((u = L((_ = G(n >> 31 >>> 7 | 0, 0, g | 0, n | 0) | 0) | 0, l | 0, 25) | 0) | 0, (_ = l) | 0, 25) | 0) | 0, l | 0) | 0;
      i[(m = s) >> 2] = h;
      i[m + 4 >> 2] = l;
      f = G(u | 0, _ | 0, i[(h = m = a + ((c = c + 2 | 0) << 3) | 0) >> 2] | 0, i[h + 4 >> 2] | 0) | 0;
      p = l;
      i[(h = m) >> 2] = f;
      i[h + 4 >> 2] = p;
    } while (c >>> 0 < 10);
    p = i[(c = t) >> 2] | 0;
    f = i[c + 4 >> 2] | 0;
    h = i[(c = a) >> 2] | 0;
    m = i[c + 4 >> 2] | 0;
    c = F(p | 0, f | 0, 18, 0) | 0;
    _ = l;
    u = G(h | 0, m | 0, p | 0, f | 0) | 0;
    f = G(u | 0, l | 0, c | 0, _ | 0) | 0;
    _ = l;
    i[(c = t) >> 2] = 0;
    i[c + 4 >> 2] = 0;
    p = k(f | 0, _ | 0, (u = B((t = L((c = G(_ >> 31 >>> 6 | 0, 0, f | 0, _ | 0) | 0) | 0, l | 0, 26) | 0) | 0, (c = l) | 0, 26) | 0) | 0, l | 0) | 0;
    i[(u = a) >> 2] = p;
    i[u + 4 >> 2] = l;
    p = G(t | 0, c | 0, i[(u = d) >> 2] | 0, i[u + 4 >> 2] | 0) | 0;
    i[(u = d) >> 2] = p;
    i[u + 4 >> 2] = l;
    u = e;
    e = a;
    a = u + 80 | 0;
    do {
      i[u >> 2] = i[e >> 2];
      u = u + 4 | 0;
      e = e + 4 | 0;
    } while ((u | 0) < (a | 0));
    o = r;
  }
  function C(e, t, n) {
    e |= 0;
    n |= 0;
    var r = 0;
    var a = 0;
    var o = 0;
    var s = 0;
    var u = 0;
    var c = 0;
    var d = 0;
    var p = 0;
    var f = 0;
    var _ = 0;
    var g = 0;
    var m = 0;
    var h = 0;
    var y = 0;
    var E = 0;
    var S = 0;
    var v = 0;
    var T = 0;
    var M = 0;
    var A = 0;
    var b = 0;
    var C = 0;
    var P = 0;
    r = L(0, i[(t |= 0) >> 2] | 0, 32) | 0;
    a = l;
    s = F((o = L(0, i[n >> 2] | 0, 32) | 0) | 0, l | 0, r | 0, a | 0) | 0;
    i[(a = e) >> 2] = s;
    i[a + 4 >> 2] = l;
    a = L(0, i[t >> 2] | 0, 32) | 0;
    s = l;
    u = F((o = L(0, i[(r = n + 8 | 0) >> 2] | 0, 32) | 0) | 0, l | 0, a | 0, s | 0) | 0;
    s = l;
    o = L(0, i[(a = t + 8 | 0) >> 2] | 0, 32) | 0;
    c = l;
    c = G((p = F((d = L(0, i[n >> 2] | 0, 32) | 0) | 0, l | 0, o | 0, c | 0) | 0) | 0, l | 0, u | 0, s | 0) | 0;
    i[(s = e + 8 | 0) >> 2] = c;
    i[s + 4 >> 2] = l;
    s = L(0, i[a >> 2] | 0, 31) | 0;
    c = l;
    p = F((u = L(0, i[r >> 2] | 0, 32) | 0) | 0, l | 0, s | 0, c | 0) | 0;
    c = l;
    s = L(0, i[t >> 2] | 0, 32) | 0;
    u = l;
    u = G((f = F((d = L(0, i[(o = n + 16 | 0) >> 2] | 0, 32) | 0) | 0, l | 0, s | 0, u | 0) | 0) | 0, l | 0, p | 0, c | 0) | 0;
    c = l;
    f = L(0, i[(p = t + 16 | 0) >> 2] | 0, 32) | 0;
    s = l;
    s = G(u | 0, c | 0, (_ = F((d = L(0, i[n >> 2] | 0, 32) | 0) | 0, l | 0, f | 0, s | 0) | 0) | 0, l | 0) | 0;
    i[(_ = e + 16 | 0) >> 2] = s;
    i[_ + 4 >> 2] = l;
    _ = L(0, i[a >> 2] | 0, 32) | 0;
    s = l;
    u = F((c = L(0, i[o >> 2] | 0, 32) | 0) | 0, l | 0, _ | 0, s | 0) | 0;
    s = l;
    _ = L(0, i[p >> 2] | 0, 32) | 0;
    c = l;
    c = G((d = F((f = L(0, i[r >> 2] | 0, 32) | 0) | 0, l | 0, _ | 0, c | 0) | 0) | 0, l | 0, u | 0, s | 0) | 0;
    s = l;
    u = L(0, i[t >> 2] | 0, 32) | 0;
    d = l;
    d = G(c | 0, s | 0, (g = F((f = L(0, i[(_ = n + 24 | 0) >> 2] | 0, 32) | 0) | 0, l | 0, u | 0, d | 0) | 0) | 0, l | 0) | 0;
    g = l;
    c = L(0, i[(s = t + 24 | 0) >> 2] | 0, 32) | 0;
    u = l;
    u = G(d | 0, g | 0, (m = F((f = L(0, i[n >> 2] | 0, 32) | 0) | 0, l | 0, c | 0, u | 0) | 0) | 0, l | 0) | 0;
    i[(m = e + 24 | 0) >> 2] = u;
    i[m + 4 >> 2] = l;
    m = L(0, i[p >> 2] | 0, 32) | 0;
    u = l;
    d = F((g = L(0, i[o >> 2] | 0, 32) | 0) | 0, l | 0, m | 0, u | 0) | 0;
    u = l;
    m = L(0, i[a >> 2] | 0, 32) | 0;
    g = l;
    f = F((c = L(0, i[_ >> 2] | 0, 32) | 0) | 0, l | 0, m | 0, g | 0) | 0;
    g = l;
    m = L(0, i[s >> 2] | 0, 32) | 0;
    c = l;
    c = G((y = F((h = L(0, i[r >> 2] | 0, 32) | 0) | 0, l | 0, m | 0, c | 0) | 0) | 0, l | 0, f | 0, g | 0) | 0;
    c = G((g = B(c | 0, l | 0, 1) | 0) | 0, l | 0, d | 0, u | 0) | 0;
    u = l;
    d = L(0, i[t >> 2] | 0, 32) | 0;
    g = l;
    g = G(c | 0, u | 0, (m = F((y = L(0, i[(f = n + 32 | 0) >> 2] | 0, 32) | 0) | 0, l | 0, d | 0, g | 0) | 0) | 0, l | 0) | 0;
    m = l;
    c = L(0, i[(u = t + 32 | 0) >> 2] | 0, 32) | 0;
    d = l;
    d = G(g | 0, m | 0, (h = F((y = L(0, i[n >> 2] | 0, 32) | 0) | 0, l | 0, c | 0, d | 0) | 0) | 0, l | 0) | 0;
    i[(h = e + 32 | 0) >> 2] = d;
    i[h + 4 >> 2] = l;
    h = L(0, i[p >> 2] | 0, 32) | 0;
    d = l;
    g = F((m = L(0, i[_ >> 2] | 0, 32) | 0) | 0, l | 0, h | 0, d | 0) | 0;
    d = l;
    h = L(0, i[s >> 2] | 0, 32) | 0;
    m = l;
    m = G((y = F((c = L(0, i[o >> 2] | 0, 32) | 0) | 0, l | 0, h | 0, m | 0) | 0) | 0, l | 0, g | 0, d | 0) | 0;
    d = l;
    g = L(0, i[a >> 2] | 0, 32) | 0;
    y = l;
    y = G(m | 0, d | 0, (c = F((h = L(0, i[f >> 2] | 0, 32) | 0) | 0, l | 0, g | 0, y | 0) | 0) | 0, l | 0) | 0;
    c = l;
    d = L(0, i[u >> 2] | 0, 32) | 0;
    m = l;
    m = G(y | 0, c | 0, (h = F((g = L(0, i[r >> 2] | 0, 32) | 0) | 0, l | 0, d | 0, m | 0) | 0) | 0, l | 0) | 0;
    h = l;
    c = L(0, i[t >> 2] | 0, 32) | 0;
    y = l;
    y = G(m | 0, h | 0, (E = F((g = L(0, i[(d = n + 40 | 0) >> 2] | 0, 32) | 0) | 0, l | 0, c | 0, y | 0) | 0) | 0, l | 0) | 0;
    E = l;
    m = L(0, i[(h = t + 40 | 0) >> 2] | 0, 32) | 0;
    c = l;
    c = G(y | 0, E | 0, (S = F((g = L(0, i[n >> 2] | 0, 32) | 0) | 0, l | 0, m | 0, c | 0) | 0) | 0, l | 0) | 0;
    i[(S = e + 40 | 0) >> 2] = c;
    i[S + 4 >> 2] = l;
    S = L(0, i[s >> 2] | 0, 32) | 0;
    c = l;
    y = F((E = L(0, i[_ >> 2] | 0, 32) | 0) | 0, l | 0, S | 0, c | 0) | 0;
    c = l;
    S = L(0, i[a >> 2] | 0, 32) | 0;
    E = l;
    E = G((g = F((m = L(0, i[d >> 2] | 0, 32) | 0) | 0, l | 0, S | 0, E | 0) | 0) | 0, l | 0, y | 0, c | 0) | 0;
    c = l;
    y = L(0, i[h >> 2] | 0, 32) | 0;
    g = l;
    m = B((g = G(E | 0, c | 0, (m = F((S = L(0, i[r >> 2] | 0, 32) | 0) | 0, l | 0, y | 0, g | 0) | 0) | 0, l | 0) | 0) | 0, l | 0, 1) | 0;
    g = l;
    c = L(0, i[p >> 2] | 0, 32) | 0;
    E = l;
    E = G(m | 0, g | 0, (S = F((y = L(0, i[f >> 2] | 0, 32) | 0) | 0, l | 0, c | 0, E | 0) | 0) | 0, l | 0) | 0;
    S = l;
    g = L(0, i[u >> 2] | 0, 32) | 0;
    m = l;
    m = G(E | 0, S | 0, (y = F((c = L(0, i[o >> 2] | 0, 32) | 0) | 0, l | 0, g | 0, m | 0) | 0) | 0, l | 0) | 0;
    y = l;
    S = L(0, i[t >> 2] | 0, 32) | 0;
    E = l;
    E = G(m | 0, y | 0, (v = F((c = L(0, i[(g = n + 48 | 0) >> 2] | 0, 32) | 0) | 0, l | 0, S | 0, E | 0) | 0) | 0, l | 0) | 0;
    v = l;
    m = L(0, i[(y = t + 48 | 0) >> 2] | 0, 32) | 0;
    S = l;
    S = G(E | 0, v | 0, (T = F((c = L(0, i[n >> 2] | 0, 32) | 0) | 0, l | 0, m | 0, S | 0) | 0) | 0, l | 0) | 0;
    i[(T = e + 48 | 0) >> 2] = S;
    i[T + 4 >> 2] = l;
    T = L(0, i[s >> 2] | 0, 32) | 0;
    S = l;
    E = F((v = L(0, i[f >> 2] | 0, 32) | 0) | 0, l | 0, T | 0, S | 0) | 0;
    S = l;
    T = L(0, i[u >> 2] | 0, 32) | 0;
    v = l;
    v = G((c = F((m = L(0, i[_ >> 2] | 0, 32) | 0) | 0, l | 0, T | 0, v | 0) | 0) | 0, l | 0, E | 0, S | 0) | 0;
    S = l;
    E = L(0, i[p >> 2] | 0, 32) | 0;
    c = l;
    c = G(v | 0, S | 0, (m = F((T = L(0, i[d >> 2] | 0, 32) | 0) | 0, l | 0, E | 0, c | 0) | 0) | 0, l | 0) | 0;
    m = l;
    S = L(0, i[h >> 2] | 0, 32) | 0;
    v = l;
    v = G(c | 0, m | 0, (T = F((E = L(0, i[o >> 2] | 0, 32) | 0) | 0, l | 0, S | 0, v | 0) | 0) | 0, l | 0) | 0;
    T = l;
    m = L(0, i[a >> 2] | 0, 32) | 0;
    c = l;
    c = G(v | 0, T | 0, (E = F((S = L(0, i[g >> 2] | 0, 32) | 0) | 0, l | 0, m | 0, c | 0) | 0) | 0, l | 0) | 0;
    E = l;
    T = L(0, i[y >> 2] | 0, 32) | 0;
    v = l;
    v = G(c | 0, E | 0, (S = F((m = L(0, i[r >> 2] | 0, 32) | 0) | 0, l | 0, T | 0, v | 0) | 0) | 0, l | 0) | 0;
    S = l;
    E = L(0, i[t >> 2] | 0, 32) | 0;
    c = l;
    c = G(v | 0, S | 0, (M = F((m = L(0, i[(T = n + 56 | 0) >> 2] | 0, 32) | 0) | 0, l | 0, E | 0, c | 0) | 0) | 0, l | 0) | 0;
    M = l;
    v = L(0, i[(S = t + 56 | 0) >> 2] | 0, 32) | 0;
    E = l;
    E = G(c | 0, M | 0, (A = F((m = L(0, i[n >> 2] | 0, 32) | 0) | 0, l | 0, v | 0, E | 0) | 0) | 0, l | 0) | 0;
    i[(A = e + 56 | 0) >> 2] = E;
    i[A + 4 >> 2] = l;
    A = L(0, i[u >> 2] | 0, 32) | 0;
    E = l;
    c = F((M = L(0, i[f >> 2] | 0, 32) | 0) | 0, l | 0, A | 0, E | 0) | 0;
    E = l;
    A = L(0, i[s >> 2] | 0, 32) | 0;
    M = l;
    m = F((v = L(0, i[d >> 2] | 0, 32) | 0) | 0, l | 0, A | 0, M | 0) | 0;
    M = l;
    A = L(0, i[h >> 2] | 0, 32) | 0;
    v = l;
    v = G((C = F((b = L(0, i[_ >> 2] | 0, 32) | 0) | 0, l | 0, A | 0, v | 0) | 0) | 0, l | 0, m | 0, M | 0) | 0;
    M = l;
    m = L(0, i[a >> 2] | 0, 32) | 0;
    C = l;
    C = G(v | 0, M | 0, (b = F((A = L(0, i[T >> 2] | 0, 32) | 0) | 0, l | 0, m | 0, C | 0) | 0) | 0, l | 0) | 0;
    b = l;
    M = L(0, i[S >> 2] | 0, 32) | 0;
    v = l;
    v = G(C | 0, b | 0, (A = F((m = L(0, i[r >> 2] | 0, 32) | 0) | 0, l | 0, M | 0, v | 0) | 0) | 0, l | 0) | 0;
    v = G((A = B(v | 0, l | 0, 1) | 0) | 0, l | 0, c | 0, E | 0) | 0;
    E = l;
    c = L(0, i[p >> 2] | 0, 32) | 0;
    A = l;
    A = G(v | 0, E | 0, (C = F((b = L(0, i[g >> 2] | 0, 32) | 0) | 0, l | 0, c | 0, A | 0) | 0) | 0, l | 0) | 0;
    C = l;
    E = L(0, i[y >> 2] | 0, 32) | 0;
    v = l;
    v = G(A | 0, C | 0, (b = F((c = L(0, i[o >> 2] | 0, 32) | 0) | 0, l | 0, E | 0, v | 0) | 0) | 0, l | 0) | 0;
    b = l;
    C = L(0, i[t >> 2] | 0, 32) | 0;
    A = l;
    A = G(v | 0, b | 0, (M = F((c = L(0, i[(E = n + 64 | 0) >> 2] | 0, 32) | 0) | 0, l | 0, C | 0, A | 0) | 0) | 0, l | 0) | 0;
    M = l;
    v = L(0, i[(b = t + 64 | 0) >> 2] | 0, 32) | 0;
    C = l;
    C = G(A | 0, M | 0, (m = F((c = L(0, i[n >> 2] | 0, 32) | 0) | 0, l | 0, v | 0, C | 0) | 0) | 0, l | 0) | 0;
    i[(m = e + 64 | 0) >> 2] = C;
    i[m + 4 >> 2] = l;
    m = L(0, i[u >> 2] | 0, 32) | 0;
    C = l;
    A = F((M = L(0, i[d >> 2] | 0, 32) | 0) | 0, l | 0, m | 0, C | 0) | 0;
    C = l;
    m = L(0, i[h >> 2] | 0, 32) | 0;
    M = l;
    M = G((c = F((v = L(0, i[f >> 2] | 0, 32) | 0) | 0, l | 0, m | 0, M | 0) | 0) | 0, l | 0, A | 0, C | 0) | 0;
    C = l;
    A = L(0, i[s >> 2] | 0, 32) | 0;
    c = l;
    c = G(M | 0, C | 0, (v = F((m = L(0, i[g >> 2] | 0, 32) | 0) | 0, l | 0, A | 0, c | 0) | 0) | 0, l | 0) | 0;
    v = l;
    C = L(0, i[y >> 2] | 0, 32) | 0;
    M = l;
    M = G(c | 0, v | 0, (m = F((A = L(0, i[_ >> 2] | 0, 32) | 0) | 0, l | 0, C | 0, M | 0) | 0) | 0, l | 0) | 0;
    m = l;
    v = L(0, i[p >> 2] | 0, 32) | 0;
    c = l;
    c = G(M | 0, m | 0, (A = F((C = L(0, i[T >> 2] | 0, 32) | 0) | 0, l | 0, v | 0, c | 0) | 0) | 0, l | 0) | 0;
    A = l;
    m = L(0, i[S >> 2] | 0, 32) | 0;
    M = l;
    M = G(c | 0, A | 0, (C = F((v = L(0, i[o >> 2] | 0, 32) | 0) | 0, l | 0, m | 0, M | 0) | 0) | 0, l | 0) | 0;
    C = l;
    A = L(0, i[a >> 2] | 0, 32) | 0;
    c = l;
    c = G(M | 0, C | 0, (v = F((m = L(0, i[E >> 2] | 0, 32) | 0) | 0, l | 0, A | 0, c | 0) | 0) | 0, l | 0) | 0;
    v = l;
    C = L(0, i[b >> 2] | 0, 32) | 0;
    M = l;
    M = G(c | 0, v | 0, (m = F((A = L(0, i[r >> 2] | 0, 32) | 0) | 0, l | 0, C | 0, M | 0) | 0) | 0, l | 0) | 0;
    m = l;
    v = L(0, i[t >> 2] | 0, 32) | 0;
    c = l;
    c = G(M | 0, m | 0, (P = F((A = L(0, i[(C = n + 72 | 0) >> 2] | 0, 32) | 0) | 0, l | 0, v | 0, c | 0) | 0) | 0, l | 0) | 0;
    P = l;
    t = L(0, i[(m = t + 72 | 0) >> 2] | 0, 32) | 0;
    M = l;
    M = G(c | 0, P | 0, (n = F((v = L(0, i[n >> 2] | 0, 32) | 0) | 0, l | 0, t | 0, M | 0) | 0) | 0, l | 0) | 0;
    i[(n = e + 72 | 0) >> 2] = M;
    i[n + 4 >> 2] = l;
    n = L(0, i[h >> 2] | 0, 32) | 0;
    M = l;
    c = F((P = L(0, i[d >> 2] | 0, 32) | 0) | 0, l | 0, n | 0, M | 0) | 0;
    M = l;
    n = L(0, i[s >> 2] | 0, 32) | 0;
    P = l;
    P = G((v = F((t = L(0, i[T >> 2] | 0, 32) | 0) | 0, l | 0, n | 0, P | 0) | 0) | 0, l | 0, c | 0, M | 0) | 0;
    M = l;
    c = L(0, i[S >> 2] | 0, 32) | 0;
    v = l;
    v = G(P | 0, M | 0, (t = F((n = L(0, i[_ >> 2] | 0, 32) | 0) | 0, l | 0, c | 0, v | 0) | 0) | 0, l | 0) | 0;
    t = l;
    M = L(0, i[a >> 2] | 0, 32) | 0;
    a = l;
    a = G(v | 0, t | 0, (c = F((P = L(0, i[C >> 2] | 0, 32) | 0) | 0, l | 0, M | 0, a | 0) | 0) | 0, l | 0) | 0;
    c = l;
    t = L(0, i[m >> 2] | 0, 32) | 0;
    v = l;
    r = B((v = G(a | 0, c | 0, (r = F((M = L(0, i[r >> 2] | 0, 32) | 0) | 0, l | 0, t | 0, v | 0) | 0) | 0, l | 0) | 0) | 0, l | 0, 1) | 0;
    v = l;
    c = L(0, i[u >> 2] | 0, 32) | 0;
    a = l;
    a = G(r | 0, v | 0, (M = F((t = L(0, i[g >> 2] | 0, 32) | 0) | 0, l | 0, c | 0, a | 0) | 0) | 0, l | 0) | 0;
    M = l;
    v = L(0, i[y >> 2] | 0, 32) | 0;
    r = l;
    r = G(a | 0, M | 0, (t = F((c = L(0, i[f >> 2] | 0, 32) | 0) | 0, l | 0, v | 0, r | 0) | 0) | 0, l | 0) | 0;
    t = l;
    M = L(0, i[p >> 2] | 0, 32) | 0;
    a = l;
    a = G(r | 0, t | 0, (c = F((v = L(0, i[E >> 2] | 0, 32) | 0) | 0, l | 0, M | 0, a | 0) | 0) | 0, l | 0) | 0;
    c = l;
    t = L(0, i[b >> 2] | 0, 32) | 0;
    r = l;
    r = G(a | 0, c | 0, (v = F((M = L(0, i[o >> 2] | 0, 32) | 0) | 0, l | 0, t | 0, r | 0) | 0) | 0, l | 0) | 0;
    i[(v = e + 80 | 0) >> 2] = r;
    i[v + 4 >> 2] = l;
    v = L(0, i[h >> 2] | 0, 32) | 0;
    r = l;
    a = F((c = L(0, i[g >> 2] | 0, 32) | 0) | 0, l | 0, v | 0, r | 0) | 0;
    r = l;
    v = L(0, i[y >> 2] | 0, 32) | 0;
    c = l;
    c = G((M = F((t = L(0, i[d >> 2] | 0, 32) | 0) | 0, l | 0, v | 0, c | 0) | 0) | 0, l | 0, a | 0, r | 0) | 0;
    r = l;
    a = L(0, i[u >> 2] | 0, 32) | 0;
    M = l;
    M = G(c | 0, r | 0, (t = F((v = L(0, i[T >> 2] | 0, 32) | 0) | 0, l | 0, a | 0, M | 0) | 0) | 0, l | 0) | 0;
    t = l;
    r = L(0, i[S >> 2] | 0, 32) | 0;
    c = l;
    c = G(M | 0, t | 0, (v = F((a = L(0, i[f >> 2] | 0, 32) | 0) | 0, l | 0, r | 0, c | 0) | 0) | 0, l | 0) | 0;
    v = l;
    t = L(0, i[s >> 2] | 0, 32) | 0;
    M = l;
    M = G(c | 0, v | 0, (a = F((r = L(0, i[E >> 2] | 0, 32) | 0) | 0, l | 0, t | 0, M | 0) | 0) | 0, l | 0) | 0;
    a = l;
    v = L(0, i[b >> 2] | 0, 32) | 0;
    c = l;
    c = G(M | 0, a | 0, (r = F((t = L(0, i[_ >> 2] | 0, 32) | 0) | 0, l | 0, v | 0, c | 0) | 0) | 0, l | 0) | 0;
    r = l;
    a = L(0, i[p >> 2] | 0, 32) | 0;
    p = l;
    p = G(c | 0, r | 0, (v = F((M = L(0, i[C >> 2] | 0, 32) | 0) | 0, l | 0, a | 0, p | 0) | 0) | 0, l | 0) | 0;
    v = l;
    r = L(0, i[m >> 2] | 0, 32) | 0;
    c = l;
    c = G(p | 0, v | 0, (o = F((a = L(0, i[o >> 2] | 0, 32) | 0) | 0, l | 0, r | 0, c | 0) | 0) | 0, l | 0) | 0;
    i[(o = e + 88 | 0) >> 2] = c;
    i[o + 4 >> 2] = l;
    o = L(0, i[y >> 2] | 0, 32) | 0;
    c = l;
    p = F((v = L(0, i[g >> 2] | 0, 32) | 0) | 0, l | 0, o | 0, c | 0) | 0;
    c = l;
    o = L(0, i[h >> 2] | 0, 32) | 0;
    v = l;
    a = F((r = L(0, i[T >> 2] | 0, 32) | 0) | 0, l | 0, o | 0, v | 0) | 0;
    v = l;
    o = L(0, i[S >> 2] | 0, 32) | 0;
    r = l;
    r = G((t = F((M = L(0, i[d >> 2] | 0, 32) | 0) | 0, l | 0, o | 0, r | 0) | 0) | 0, l | 0, a | 0, v | 0) | 0;
    v = l;
    a = L(0, i[s >> 2] | 0, 32) | 0;
    s = l;
    s = G(r | 0, v | 0, (o = F((t = L(0, i[C >> 2] | 0, 32) | 0) | 0, l | 0, a | 0, s | 0) | 0) | 0, l | 0) | 0;
    o = l;
    v = L(0, i[m >> 2] | 0, 32) | 0;
    r = l;
    r = G(s | 0, o | 0, (_ = F((a = L(0, i[_ >> 2] | 0, 32) | 0) | 0, l | 0, v | 0, r | 0) | 0) | 0, l | 0) | 0;
    r = G((_ = B(r | 0, l | 0, 1) | 0) | 0, l | 0, p | 0, c | 0) | 0;
    c = l;
    p = L(0, i[u >> 2] | 0, 32) | 0;
    _ = l;
    _ = G(r | 0, c | 0, (s = F((o = L(0, i[E >> 2] | 0, 32) | 0) | 0, l | 0, p | 0, _ | 0) | 0) | 0, l | 0) | 0;
    s = l;
    c = L(0, i[b >> 2] | 0, 32) | 0;
    r = l;
    r = G(_ | 0, s | 0, (o = F((p = L(0, i[f >> 2] | 0, 32) | 0) | 0, l | 0, c | 0, r | 0) | 0) | 0, l | 0) | 0;
    i[(o = e + 96 | 0) >> 2] = r;
    i[o + 4 >> 2] = l;
    o = L(0, i[y >> 2] | 0, 32) | 0;
    r = l;
    _ = F((s = L(0, i[T >> 2] | 0, 32) | 0) | 0, l | 0, o | 0, r | 0) | 0;
    r = l;
    o = L(0, i[S >> 2] | 0, 32) | 0;
    s = l;
    s = G((p = F((c = L(0, i[g >> 2] | 0, 32) | 0) | 0, l | 0, o | 0, s | 0) | 0) | 0, l | 0, _ | 0, r | 0) | 0;
    r = l;
    _ = L(0, i[h >> 2] | 0, 32) | 0;
    p = l;
    p = G(s | 0, r | 0, (c = F((o = L(0, i[E >> 2] | 0, 32) | 0) | 0, l | 0, _ | 0, p | 0) | 0) | 0, l | 0) | 0;
    c = l;
    r = L(0, i[b >> 2] | 0, 32) | 0;
    s = l;
    s = G(p | 0, c | 0, (o = F((_ = L(0, i[d >> 2] | 0, 32) | 0) | 0, l | 0, r | 0, s | 0) | 0) | 0, l | 0) | 0;
    o = l;
    c = L(0, i[u >> 2] | 0, 32) | 0;
    u = l;
    u = G(s | 0, o | 0, (r = F((p = L(0, i[C >> 2] | 0, 32) | 0) | 0, l | 0, c | 0, u | 0) | 0) | 0, l | 0) | 0;
    r = l;
    o = L(0, i[m >> 2] | 0, 32) | 0;
    s = l;
    s = G(u | 0, r | 0, (f = F((c = L(0, i[f >> 2] | 0, 32) | 0) | 0, l | 0, o | 0, s | 0) | 0) | 0, l | 0) | 0;
    i[(f = e + 104 | 0) >> 2] = s;
    i[f + 4 >> 2] = l;
    f = L(0, i[S >> 2] | 0, 32) | 0;
    s = l;
    u = F((r = L(0, i[T >> 2] | 0, 32) | 0) | 0, l | 0, f | 0, s | 0) | 0;
    s = l;
    f = L(0, i[h >> 2] | 0, 32) | 0;
    h = l;
    h = G((o = F((r = L(0, i[C >> 2] | 0, 32) | 0) | 0, l | 0, f | 0, h | 0) | 0) | 0, l | 0, u | 0, s | 0) | 0;
    s = l;
    u = L(0, i[m >> 2] | 0, 32) | 0;
    o = l;
    d = B((o = G(h | 0, s | 0, (d = F((f = L(0, i[d >> 2] | 0, 32) | 0) | 0, l | 0, u | 0, o | 0) | 0) | 0, l | 0) | 0) | 0, l | 0, 1) | 0;
    o = l;
    s = L(0, i[y >> 2] | 0, 32) | 0;
    h = l;
    h = G(d | 0, o | 0, (f = F((u = L(0, i[E >> 2] | 0, 32) | 0) | 0, l | 0, s | 0, h | 0) | 0) | 0, l | 0) | 0;
    f = l;
    o = L(0, i[b >> 2] | 0, 32) | 0;
    d = l;
    d = G(h | 0, f | 0, (u = F((s = L(0, i[g >> 2] | 0, 32) | 0) | 0, l | 0, o | 0, d | 0) | 0) | 0, l | 0) | 0;
    i[(u = e + 112 | 0) >> 2] = d;
    i[u + 4 >> 2] = l;
    u = L(0, i[S >> 2] | 0, 32) | 0;
    d = l;
    h = F((f = L(0, i[E >> 2] | 0, 32) | 0) | 0, l | 0, u | 0, d | 0) | 0;
    d = l;
    u = L(0, i[b >> 2] | 0, 32) | 0;
    f = l;
    f = G((s = F((o = L(0, i[T >> 2] | 0, 32) | 0) | 0, l | 0, u | 0, f | 0) | 0) | 0, l | 0, h | 0, d | 0) | 0;
    d = l;
    h = L(0, i[y >> 2] | 0, 32) | 0;
    y = l;
    y = G(f | 0, d | 0, (u = F((s = L(0, i[C >> 2] | 0, 32) | 0) | 0, l | 0, h | 0, y | 0) | 0) | 0, l | 0) | 0;
    u = l;
    d = L(0, i[m >> 2] | 0, 32) | 0;
    f = l;
    f = G(y | 0, u | 0, (g = F((h = L(0, i[g >> 2] | 0, 32) | 0) | 0, l | 0, d | 0, f | 0) | 0) | 0, l | 0) | 0;
    i[(g = e + 120 | 0) >> 2] = f;
    i[g + 4 >> 2] = l;
    g = L(0, i[b >> 2] | 0, 32) | 0;
    f = l;
    y = F((u = L(0, i[E >> 2] | 0, 32) | 0) | 0, l | 0, g | 0, f | 0) | 0;
    f = l;
    g = L(0, i[S >> 2] | 0, 32) | 0;
    S = l;
    d = F((u = L(0, i[C >> 2] | 0, 32) | 0) | 0, l | 0, g | 0, S | 0) | 0;
    S = l;
    g = L(0, i[m >> 2] | 0, 32) | 0;
    u = l;
    u = G((T = F((h = L(0, i[T >> 2] | 0, 32) | 0) | 0, l | 0, g | 0, u | 0) | 0) | 0, l | 0, d | 0, S | 0) | 0;
    u = G((S = B(u | 0, l | 0, 1) | 0) | 0, l | 0, y | 0, f | 0) | 0;
    i[(f = e + 128 | 0) >> 2] = u;
    i[f + 4 >> 2] = l;
    f = L(0, i[b >> 2] | 0, 32) | 0;
    b = l;
    y = F((u = L(0, i[C >> 2] | 0, 32) | 0) | 0, l | 0, f | 0, b | 0) | 0;
    b = l;
    f = L(0, i[m >> 2] | 0, 32) | 0;
    u = l;
    u = G((E = F((S = L(0, i[E >> 2] | 0, 32) | 0) | 0, l | 0, f | 0, u | 0) | 0) | 0, l | 0, y | 0, b | 0) | 0;
    i[(b = e + 136 | 0) >> 2] = u;
    i[b + 4 >> 2] = l;
    b = L(0, i[m >> 2] | 0, 31) | 0;
    m = l;
    C = F((u = L(0, i[C >> 2] | 0, 32) | 0) | 0, l | 0, b | 0, m | 0) | 0;
    i[(m = e + 144 | 0) >> 2] = C;
    i[m + 4 >> 2] = l;
  }
  function P(e, t) {
    e |= 0;
    var n;
    var r;
    var a;
    var s = 0;
    var u = 0;
    var c = 0;
    var d = 0;
    var p = 0;
    var f = 0;
    var _ = 0;
    var g = 0;
    var m = 0;
    var h = 0;
    var y = 0;
    var E = 0;
    var S = 0;
    var v = 0;
    var T = 0;
    var M = 0;
    var A = 0;
    var b = 0;
    var C = 0;
    var P = 0;
    var O = 0;
    var I = 0;
    var R = 0;
    var N = 0;
    var D = 0;
    var w = 0;
    var U = 0;
    var x = 0;
    var j = 0;
    var Y = 0;
    var K = 0;
    var W = 0;
    var V = 0;
    var H = 0;
    var $ = 0;
    var z = 0;
    var q = 0;
    n = o;
    o = o + 160 | 0;
    s = n;
    d = F((r = L(0, (u = i[(t |= 0) >> 2] | 0) | 0, 32) | 0) | 0, (c = l) | 0, r | 0, c | 0) | 0;
    i[(p = s) >> 2] = d;
    i[p + 4 >> 2] = l;
    p = L(0, u | 0, 31) | 0;
    u = l;
    m = F((_ = L(0, (f = i[(d = t + 8 | 0) >> 2] | 0) | 0, 32) | 0) | 0, (g = l) | 0, p | 0, u | 0) | 0;
    i[(h = a = s + 8 | 0) >> 2] = m;
    i[h + 4 >> 2] = l;
    h = F(_ | 0, g | 0, _ | 0, g | 0) | 0;
    m = l;
    m = B((T = G((v = F((E = L(0, i[(y = t + 16 | 0) >> 2] | 0, 32) | 0) | 0, (S = l) | 0, r | 0, c | 0) | 0) | 0, l | 0, h | 0, m | 0) | 0) | 0, l | 0, 1) | 0;
    i[(h = T = s + 16 | 0) >> 2] = m;
    i[h + 4 >> 2] = l;
    h = F(E | 0, S | 0, _ | 0, g | 0) | 0;
    m = l;
    m = B((C = G((b = F((M = L(0, i[(v = t + 24 | 0) >> 2] | 0, 32) | 0) | 0, (A = l) | 0, r | 0, c | 0) | 0) | 0, l | 0, h | 0, m | 0) | 0) | 0, l | 0, 1) | 0;
    i[(h = C = s + 24 | 0) >> 2] = m;
    i[h + 4 >> 2] = l;
    h = F(E | 0, S | 0, E | 0, S | 0) | 0;
    m = l;
    b = G((P = F(M | 0, A | 0, (b = L(0, f | 0, 30) | 0) | 0, l | 0) | 0) | 0, l | 0, h | 0, m | 0) | 0;
    u = G(b | 0, (m = l) | 0, (I = F((P = L(0, i[(h = t + 32 | 0) >> 2] | 0, 32) | 0) | 0, (O = l) | 0, p | 0, u | 0) | 0) | 0, l | 0) | 0;
    i[(m = I = s + 32 | 0) >> 2] = u;
    i[m + 4 >> 2] = l;
    m = F(M | 0, A | 0, E | 0, S | 0) | 0;
    u = l;
    p = G((b = F(P | 0, O | 0, _ | 0, g | 0) | 0) | 0, l | 0, m | 0, u | 0) | 0;
    N = B((D = G(p | 0, (u = l) | 0, (N = F((b = L(0, i[(m = t + 40 | 0) >> 2] | 0, 32) | 0) | 0, (R = l) | 0, r | 0, c | 0) | 0) | 0, l | 0) | 0) | 0, l | 0, 1) | 0;
    i[(u = D = s + 40 | 0) >> 2] = N;
    i[u + 4 >> 2] = l;
    u = F(M | 0, A | 0, M | 0, A | 0) | 0;
    N = l;
    w = G((p = F(P | 0, O | 0, E | 0, S | 0) | 0) | 0, l | 0, u | 0, N | 0) | 0;
    j = G(w | 0, (N = l) | 0, (x = F((p = L(0, i[(u = t + 48 | 0) >> 2] | 0, 32) | 0) | 0, (U = l) | 0, r | 0, c | 0) | 0) | 0, l | 0) | 0;
    f = B((N = G(j | 0, (x = l) | 0, (f = F(b | 0, R | 0, (N = L(0, f | 0, 31) | 0) | 0, l | 0) | 0) | 0, l | 0) | 0) | 0, l | 0, 1) | 0;
    i[(x = N = s + 48 | 0) >> 2] = f;
    i[x + 4 >> 2] = l;
    x = F(P | 0, O | 0, M | 0, A | 0) | 0;
    f = l;
    w = G((j = F(b | 0, R | 0, E | 0, S | 0) | 0) | 0, l | 0, x | 0, f | 0) | 0;
    j = G(w | 0, (f = l) | 0, (x = F(p | 0, U | 0, _ | 0, g | 0) | 0) | 0, l | 0) | 0;
    K = B((W = G(j | 0, (x = l) | 0, (K = F((w = L(0, i[(f = t + 56 | 0) >> 2] | 0, 32) | 0) | 0, (Y = l) | 0, r | 0, c | 0) | 0) | 0, l | 0) | 0) | 0, l | 0, 1) | 0;
    i[(x = W = s + 56 | 0) >> 2] = K;
    i[x + 4 >> 2] = l;
    x = F(P | 0, O | 0, P | 0, O | 0) | 0;
    K = l;
    j = F(p | 0, U | 0, E | 0, S | 0) | 0;
    V = l;
    c = G((q = F(($ = L(0, i[(H = t + 64 | 0) >> 2] | 0, 32) | 0) | 0, (z = l) | 0, r | 0, c | 0) | 0) | 0, l | 0, j | 0, V | 0) | 0;
    V = l;
    j = F(w | 0, Y | 0, _ | 0, g | 0) | 0;
    g = l;
    q = G((_ = F(b | 0, R | 0, M | 0, A | 0) | 0) | 0, l | 0, j | 0, g | 0) | 0;
    q = G(c | 0, V | 0, (g = B(q | 0, l | 0, 1) | 0) | 0, l | 0) | 0;
    q = G((g = B(q | 0, l | 0, 1) | 0) | 0, l | 0, x | 0, K | 0) | 0;
    i[(x = K = s + 64 | 0) >> 2] = q;
    i[x + 4 >> 2] = l;
    x = F(b | 0, R | 0, P | 0, O | 0) | 0;
    q = l;
    A = G((g = F(p | 0, U | 0, M | 0, A | 0) | 0) | 0, l | 0, x | 0, q | 0) | 0;
    S = G(A | 0, (q = l) | 0, (x = F(w | 0, Y | 0, E | 0, S | 0) | 0) | 0, l | 0) | 0;
    E = G(S | 0, (x = l) | 0, (A = F($ | 0, z | 0, (q = L(0, i[d >> 2] | 0, 32) | 0) | 0, (d = l) | 0) | 0) | 0, l | 0) | 0;
    A = l;
    x = L(0, i[t >> 2] | 0, 32) | 0;
    S = l;
    V = B((S = G(E | 0, A | 0, (V = F((t = L(0, (g = i[t + 72 >> 2] | 0) | 0, 32) | 0) | 0, (M = l) | 0, x | 0, S | 0) | 0) | 0, l | 0) | 0) | 0, l | 0, 1) | 0;
    i[(S = s + 72 | 0) >> 2] = V;
    i[S + 4 >> 2] = l;
    S = F(b | 0, R | 0, b | 0, R | 0) | 0;
    V = l;
    O = G((A = F(p | 0, U | 0, P | 0, O | 0) | 0) | 0, l | 0, S | 0, V | 0) | 0;
    P = G(O | 0, (V = l) | 0, (A = F($ | 0, z | 0, (S = L(0, i[y >> 2] | 0, 32) | 0) | 0, (y = l) | 0) | 0) | 0, l | 0) | 0;
    A = l;
    O = F(w | 0, Y | 0, (V = L(0, i[v >> 2] | 0, 32) | 0) | 0, (v = l) | 0) | 0;
    E = l;
    E = B((d = G((x = F(t | 0, M | 0, q | 0, d | 0) | 0) | 0, l | 0, O | 0, E | 0) | 0) | 0, l | 0, 1) | 0;
    E = B((d = G(P | 0, A | 0, E | 0, l | 0) | 0) | 0, l | 0, 1) | 0;
    i[(A = d = s + 80 | 0) >> 2] = E;
    i[A + 4 >> 2] = l;
    A = F(p | 0, U | 0, b | 0, R | 0) | 0;
    R = l;
    P = G((E = F(w | 0, Y | 0, (b = L(0, i[h >> 2] | 0, 32) | 0) | 0, (h = l) | 0) | 0) | 0, l | 0, A | 0, R | 0) | 0;
    E = G(P | 0, (R = l) | 0, (A = F($ | 0, z | 0, V | 0, v | 0) | 0) | 0, l | 0) | 0;
    A = B((y = G(E | 0, (A = l) | 0, (R = F(t | 0, M | 0, S | 0, y | 0) | 0) | 0, l | 0) | 0) | 0, (R = l) | 0, 1) | 0;
    E = l;
    i[(S = s + 88 | 0) >> 2] = A;
    i[S + 4 >> 2] = E;
    S = F(p | 0, U | 0, p | 0, U | 0) | 0;
    U = l;
    p = F($ | 0, z | 0, b | 0, h | 0) | 0;
    P = l;
    q = F(w | 0, Y | 0, (m = L(0, (O = i[m >> 2] | 0) | 0, 32) | 0) | 0, (x = l) | 0) | 0;
    c = l;
    v = G((j = F(t | 0, M | 0, V | 0, v | 0) | 0) | 0, l | 0, q | 0, c | 0) | 0;
    v = G((c = B(v | 0, l | 0, 1) | 0) | 0, l | 0, p | 0, P | 0) | 0;
    v = G((P = B(v | 0, l | 0, 1) | 0) | 0, l | 0, S | 0, U | 0) | 0;
    U = l;
    i[(S = s + 96 | 0) >> 2] = v;
    i[S + 4 >> 2] = U;
    P = F(w | 0, Y | 0, (S = L(0, i[u >> 2] | 0, 32) | 0) | 0, (u = l) | 0) | 0;
    Y = l;
    x = G((w = F($ | 0, z | 0, m | 0, x | 0) | 0) | 0, l | 0, P | 0, Y | 0) | 0;
    Y = B((h = G(x | 0, (Y = l) | 0, (P = F(t | 0, M | 0, b | 0, h | 0) | 0) | 0, l | 0) | 0) | 0, (P = l) | 0, 1) | 0;
    x = l;
    i[(b = s + 104 | 0) >> 2] = Y;
    i[b + 4 >> 2] = x;
    m = F((f = L(0, (b = i[f >> 2] | 0) | 0, 32) | 0) | 0, (w = l) | 0, f | 0, w | 0) | 0;
    p = l;
    z = G((c = F($ | 0, z | 0, S | 0, u | 0) | 0) | 0, l | 0, m | 0, p | 0) | 0;
    p = B((m = G(z | 0, (p = l) | 0, (O = F(t | 0, M | 0, (m = L(0, O | 0, 31) | 0) | 0, l | 0) | 0) | 0, l | 0) | 0) | 0, (O = l) | 0, 1) | 0;
    z = l;
    i[(c = s + 112 | 0) >> 2] = p;
    i[c + 4 >> 2] = z;
    q = F((H = L(0, (c = i[H >> 2] | 0) | 0, 32) | 0) | 0, ($ = l) | 0, f | 0, w | 0) | 0;
    w = l;
    q = B((u = G((f = F(t | 0, M | 0, S | 0, u | 0) | 0) | 0, l | 0, q | 0, w | 0) | 0) | 0, (w = l) | 0, 1) | 0;
    f = l;
    i[(S = s + 120 | 0) >> 2] = q;
    i[S + 4 >> 2] = f;
    S = F(H | 0, $ | 0, H | 0, $ | 0) | 0;
    $ = l;
    H = G((b = F(t | 0, M | 0, (H = L(0, b | 0, 30) | 0) | 0, l | 0) | 0) | 0, l | 0, S | 0, $ | 0) | 0;
    $ = l;
    i[(S = s + 128 | 0) >> 2] = H;
    i[S + 4 >> 2] = $;
    c = F(t | 0, M | 0, (S = L(0, c | 0, 31) | 0) | 0, l | 0) | 0;
    S = l;
    i[(b = s + 136 | 0) >> 2] = c;
    i[b + 4 >> 2] = S;
    g = F((b = L(0, g | 0, 31) | 0) | 0, l | 0, t | 0, M | 0) | 0;
    M = l;
    i[(t = s + 144 | 0) >> 2] = g;
    i[t + 4 >> 2] = M;
    b = i[(t = K) >> 2] | 0;
    j = i[t + 4 >> 2] | 0;
    t = F(g | 0, M | 0, 18, 0) | 0;
    V = l;
    _ = G(g | 0, M | 0, b | 0, j | 0) | 0;
    j = G(_ | 0, l | 0, t | 0, V | 0) | 0;
    i[(V = K) >> 2] = j;
    i[V + 4 >> 2] = l;
    j = i[(V = W) >> 2] | 0;
    K = i[V + 4 >> 2] | 0;
    V = F(c | 0, S | 0, 18, 0) | 0;
    t = l;
    _ = G(j | 0, K | 0, c | 0, S | 0) | 0;
    S = G(_ | 0, l | 0, V | 0, t | 0) | 0;
    i[(t = W) >> 2] = S;
    i[t + 4 >> 2] = l;
    S = i[(t = N) >> 2] | 0;
    W = i[t + 4 >> 2] | 0;
    t = F(H | 0, $ | 0, 18, 0) | 0;
    V = l;
    _ = G(S | 0, W | 0, H | 0, $ | 0) | 0;
    $ = G(_ | 0, l | 0, t | 0, V | 0) | 0;
    i[(V = N) >> 2] = $;
    i[V + 4 >> 2] = l;
    $ = i[(V = D) >> 2] | 0;
    N = i[V + 4 >> 2] | 0;
    V = F(u | 0, w | 0, 36, 0) | 0;
    w = l;
    u = G($ | 0, N | 0, q | 0, f | 0) | 0;
    f = G(u | 0, l | 0, V | 0, w | 0) | 0;
    i[(w = D) >> 2] = f;
    i[w + 4 >> 2] = l;
    f = i[(w = I) >> 2] | 0;
    D = i[w + 4 >> 2] | 0;
    w = F(m | 0, O | 0, 36, 0) | 0;
    O = l;
    m = G(f | 0, D | 0, p | 0, z | 0) | 0;
    z = G(m | 0, l | 0, w | 0, O | 0) | 0;
    i[(O = I) >> 2] = z;
    i[O + 4 >> 2] = l;
    z = i[(O = C) >> 2] | 0;
    I = i[O + 4 >> 2] | 0;
    O = F(h | 0, P | 0, 36, 0) | 0;
    P = l;
    h = G(z | 0, I | 0, Y | 0, x | 0) | 0;
    x = G(h | 0, l | 0, O | 0, P | 0) | 0;
    i[(P = C) >> 2] = x;
    i[P + 4 >> 2] = l;
    x = i[(P = T) >> 2] | 0;
    C = i[P + 4 >> 2] | 0;
    P = F(v | 0, U | 0, 18, 0) | 0;
    O = l;
    h = G(x | 0, C | 0, v | 0, U | 0) | 0;
    U = G(h | 0, l | 0, P | 0, O | 0) | 0;
    i[(O = T) >> 2] = U;
    i[O + 4 >> 2] = l;
    U = i[(O = a) >> 2] | 0;
    T = i[O + 4 >> 2] | 0;
    O = F(y | 0, R | 0, 36, 0) | 0;
    R = l;
    y = G(U | 0, T | 0, A | 0, E | 0) | 0;
    E = G(y | 0, l | 0, O | 0, R | 0) | 0;
    i[(R = a) >> 2] = E;
    i[R + 4 >> 2] = l;
    E = i[(R = d) >> 2] | 0;
    O = i[R + 4 >> 2] | 0;
    y = i[(R = s) >> 2] | 0;
    A = i[R + 4 >> 2] | 0;
    R = F(E | 0, O | 0, 18, 0) | 0;
    T = l;
    U = G(y | 0, A | 0, E | 0, O | 0) | 0;
    O = G(U | 0, l | 0, R | 0, T | 0) | 0;
    T = l;
    i[(R = s) >> 2] = O;
    i[R + 4 >> 2] = T;
    i[(R = d) >> 2] = 0;
    i[R + 4 >> 2] = 0;
    R = T;
    T = O;
    O = 0;
    do {
      y = k(T | 0, R | 0, (A = B((E = L((U = G(R >> 31 >>> 6 | 0, 0, T | 0, R | 0) | 0) | 0, l | 0, 26) | 0) | 0, (U = l) | 0, 26) | 0) | 0, l | 0) | 0;
      i[(A = s + (O << 3) | 0) >> 2] = y;
      i[A + 4 >> 2] = l;
      v = k((P = G(E | 0, U | 0, i[(y = A = s + ((O | 1) << 3) | 0) >> 2] | 0, i[y + 4 >> 2] | 0) | 0) | 0, (y = l) | 0, (h = B((E = L((U = G(y >> 31 >>> 7 | 0, 0, P | 0, y | 0) | 0) | 0, l | 0, 25) | 0) | 0, (U = l) | 0, 25) | 0) | 0, l | 0) | 0;
      i[(h = A) >> 2] = v;
      i[h + 4 >> 2] = l;
      T = G(E | 0, U | 0, i[(v = h = s + ((O = O + 2 | 0) << 3) | 0) >> 2] | 0, i[v + 4 >> 2] | 0) | 0;
      R = l;
      i[(v = h) >> 2] = T;
      i[v + 4 >> 2] = R;
    } while (O >>> 0 < 10);
    R = i[(O = d) >> 2] | 0;
    T = i[O + 4 >> 2] | 0;
    v = i[(O = s) >> 2] | 0;
    h = i[O + 4 >> 2] | 0;
    O = F(R | 0, T | 0, 18, 0) | 0;
    U = l;
    E = G(v | 0, h | 0, R | 0, T | 0) | 0;
    T = G(E | 0, l | 0, O | 0, U | 0) | 0;
    U = l;
    i[(O = d) >> 2] = 0;
    i[O + 4 >> 2] = 0;
    R = k(T | 0, U | 0, (E = B((d = L((O = G(U >> 31 >>> 6 | 0, 0, T | 0, U | 0) | 0) | 0, l | 0, 26) | 0) | 0, (O = l) | 0, 26) | 0) | 0, l | 0) | 0;
    i[(E = s) >> 2] = R;
    i[E + 4 >> 2] = l;
    R = G(d | 0, O | 0, i[(E = a) >> 2] | 0, i[E + 4 >> 2] | 0) | 0;
    i[(E = a) >> 2] = R;
    i[E + 4 >> 2] = l;
    E = e;
    e = s;
    s = E + 80 | 0;
    do {
      i[E >> 2] = i[e >> 2];
      E = E + 4 | 0;
      e = e + 4 | 0;
    } while ((E | 0) < (s | 0));
    o = n;
  }
  function O() {
    return (i[2] | 0 ? i[60 + (f() | 0) >> 2] | 0 : 56) | 0;
  }
  function I(e) {
    var t = 0;
    if ((e |= 0) >>> 0 > 4294963200) {
      i[(O() | 0) >> 2] = 0 - e;
      t = -1;
    } else {
      t = e;
    }
    return t | 0;
  }
  function R(e) {
    0;
    return 0;
  }
  function N(e) {
    0;
  }
  function D(e, t, n) {
    t |= 0;
    n |= 0;
    var r;
    var a;
    var s;
    var l;
    var u;
    var c = 0;
    var p = 0;
    var f = 0;
    var _ = 0;
    var g = 0;
    var m = 0;
    var h = 0;
    var y = 0;
    var E = 0;
    var S = 0;
    var v = 0;
    var M = 0;
    var b = 0;
    var C = 0;
    var P = 0;
    var O = 0;
    r = o;
    o = o + 48 | 0;
    a = r + 16 | 0;
    s = r;
    c = r + 32 | 0;
    p = i[(l = (e |= 0) + 28 | 0) >> 2] | 0;
    i[c >> 2] = p;
    f = (i[(u = e + 20 | 0) >> 2] | 0) - p | 0;
    i[c + 4 >> 2] = f;
    i[c + 8 >> 2] = t;
    i[c + 12 >> 2] = n;
    t = e + 60 | 0;
    p = e + 44 | 0;
    _ = c;
    c = 2;
    g = f + n | 0;
    for (;;) {
      if (i[2] | 0) {
        T(1, e | 0);
        i[s >> 2] = i[t >> 2];
        i[s + 4 >> 2] = _;
        i[s + 8 >> 2] = c;
        f = I(A(146, s | 0) | 0) | 0;
        d(0);
        m = f;
      } else {
        i[a >> 2] = i[t >> 2];
        i[a + 4 >> 2] = _;
        i[a + 8 >> 2] = c;
        m = I(A(146, a | 0) | 0) | 0;
      }
      if ((g | 0) == (m | 0)) {
        h = 6;
        break;
      }
      if ((m | 0) < 0) {
        y = _;
        E = c;
        h = 8;
        break;
      }
      f = g - m | 0;
      if (m >>> 0 <= (S = i[_ + 4 >> 2] | 0) >>> 0) {
        if ((c | 0) == 2) {
          i[l >> 2] = (i[l >> 2] | 0) + m;
          v = S;
          M = m;
          b = _;
          C = 2;
        } else {
          v = S;
          M = m;
          b = _;
          C = c;
        }
      } else {
        P = i[p >> 2] | 0;
        i[l >> 2] = P;
        i[u >> 2] = P;
        v = i[_ + 12 >> 2] | 0;
        M = m - S | 0;
        b = _ + 8 | 0;
        C = c + -1 | 0;
      }
      i[b >> 2] = (i[b >> 2] | 0) + M;
      i[b + 4 >> 2] = v - M;
      _ = b;
      c = C;
      g = f;
    }
    if ((h | 0) == 6) {
      g = i[p >> 2] | 0;
      i[e + 16 >> 2] = g + (i[e + 48 >> 2] | 0);
      p = g;
      i[l >> 2] = p;
      i[u >> 2] = p;
      O = n;
    } else if ((h | 0) == 8) {
      i[e + 16 >> 2] = 0;
      i[l >> 2] = 0;
      i[u >> 2] = 0;
      i[e >> 2] = i[e >> 2] | 32;
      O = (E | 0) == 2 ? 0 : n - (i[y + 4 >> 2] | 0) | 0;
    }
    o = r;
    return O | 0;
  }
  function w(e) {
    var t;
    var n;
    var r = 0;
    var a = 0;
    var o = 0;
    var s = 0;
    var l = 0;
    n = (e |= 0) + 28 | 0;
    if ((i[(t = e + 20 | 0) >> 2] | 0) >>> 0 > (i[n >> 2] | 0) >>> 0 && (Y[i[e + 36 >> 2] & 3](e, 0, 0), (i[t >> 2] | 0) == 0)) {
      r = -1;
    } else {
      if ((o = i[(a = e + 4 | 0) >> 2] | 0) >>> 0 < (l = i[(s = e + 8 | 0) >> 2] | 0) >>> 0) {
        Y[i[e + 40 >> 2] & 3](e, o - l | 0, 1);
      }
      i[e + 16 >> 2] = 0;
      i[n >> 2] = 0;
      i[t >> 2] = 0;
      i[s >> 2] = 0;
      i[a >> 2] = 0;
      r = 0;
    }
    return r | 0;
  }
  function L(e, t, n) {
    e |= 0;
    t |= 0;
    if (((n |= 0) | 0) < 32) {
      l = t >> n;
      return e >>> n | (t & (1 << n) - 1) << 32 - n;
    } else {
      l = (t | 0) < 0 ? -1 : 0;
      return t >> n - 32 | 0;
    }
  }
  function k(e, t, n, r) {
    (t |= 0) - (r |= 0) >>> 0;
    return (l = t - r - ((n |= 0) >>> 0 > (e |= 0) >>> 0 | 0) >>> 0, e - n >>> 0 | 0) | 0;
  }
  function G(e, t, n, r) {
    var i;
    return (l = (t |= 0) + (r |= 0) + ((i = (e |= 0) + (n |= 0) >>> 0) >>> 0 < e >>> 0 | 0) >>> 0, i | 0) | 0;
  }
  function U(e, t, n) {
    t |= 0;
    var a;
    var o = 0;
    var s = 0;
    var l = 0;
    a = (e |= 0) + (n |= 0) | 0;
    if ((n | 0) >= 20) {
      s = (t &= 255) | t << 8 | t << 16 | t << 24;
      l = a & -4;
      if (o = e & 3) {
        for (o = e + 4 - o | 0; (e | 0) < (o | 0);) {
          r[e >> 0] = t;
          e = e + 1 | 0;
        }
      }
      for (; (e | 0) < (l | 0);) {
        i[e >> 2] = s;
        e = e + 4 | 0;
      }
    }
    for (; (e | 0) < (a | 0);) {
      r[e >> 0] = t;
      e = e + 1 | 0;
    }
    return e - n | 0;
  }
  function x(e, t, n) {
    e |= 0;
    t |= 0;
    if (((n |= 0) | 0) < 32) {
      l = t >>> n;
      return e >>> n | (t & (1 << n) - 1) << 32 - n;
    } else {
      l = 0;
      return t >>> n - 32 | 0;
    }
  }
  function B(e, t, n) {
    e |= 0;
    t |= 0;
    if (((n |= 0) | 0) < 32) {
      l = t << n | (e & (1 << n) - 1 << 32 - n) >>> 32 - n;
      return e << n;
    } else {
      l = e << n - 32;
      return 0;
    }
  }
  function F(e, t, n, r) {
    t |= 0;
    r |= 0;
    var i;
    var a;
    n = function (e, t) {
      var n;
      var r;
      var i;
      var a = 0;
      e = ((r = u(a = (t |= 0) & 65535, n = (e |= 0) & 65535) | 0) >>> 16) + (u(a, i = e >>> 16) | 0) | 0;
      t = u(a = t >>> 16, n) | 0;
      return (l = (e >>> 16) + (u(a, i) | 0) + (((e & 65535) + t | 0) >>> 16) | 0, e + t << 16 | r & 65535 | 0) | 0;
    }(i = e |= 0, e = n |= 0) | 0;
    a = l;
    return (l = (u(t, e) | 0) + (u(r, i) | 0) + a | a & 0, n | 0) | 0;
  }
  var j = [function (e) {
    0;
    c(0);
    return 0;
  }, function (e) {
    var t;
    var n;
    e |= 0;
    t = o;
    o = o + 16 | 0;
    i[(n = t) >> 2] = i[e + 60 >> 2];
    e = I(_(6, n | 0) | 0) | 0;
    o = t;
    return e | 0;
  }];
  var Y = [function (e, t, n) {
    0;
    0;
    0;
    c(1);
    return 0;
  }, function (e, t, n) {
    t |= 0;
    n |= 0;
    var a;
    var s = 0;
    a = o;
    o = o + 80 | 0;
    s = a;
    i[(e |= 0) + 36 >> 2] = 3;
    if ((i[e >> 2] & 64 | 0) == 0 && (i[s >> 2] = i[e + 60 >> 2], i[s + 4 >> 2] = 21505, i[s + 8 >> 2] = a + 12, (E(54, s | 0) | 0) != 0)) {
      r[e + 75 >> 0] = -1;
    }
    s = D(e, t, n) | 0;
    o = a;
    return s | 0;
  }, function (e, t, n) {
    e |= 0;
    t |= 0;
    n |= 0;
    var r;
    var a;
    var s;
    var l = 0;
    r = o;
    o = o + 32 | 0;
    s = r + 20 | 0;
    i[(a = r) >> 2] = i[e + 60 >> 2];
    i[a + 4 >> 2] = 0;
    i[a + 8 >> 2] = t;
    i[a + 12 >> 2] = s;
    i[a + 16 >> 2] = n;
    if ((I(v(140, a | 0) | 0) | 0) < 0) {
      i[s >> 2] = -1;
      l = -1;
    } else {
      l = i[s >> 2] | 0;
    }
    o = r;
    return l | 0;
  }, D];
  var K = [function (e) {
    c(2);
  }, function (e) {
    if (!(i[(e |= 0) + 68 >> 2] | 0)) {
      N();
    }
  }];
  return {
    _curve25519_donna: function (e, t, n) {
      e |= 0;
      n |= 0;
      var s;
      var c;
      var d;
      var p;
      var f;
      var _;
      var g;
      var m;
      var h;
      var y;
      var E;
      var S;
      var v;
      var T;
      var M;
      var A;
      var O;
      var I;
      var R;
      var N;
      var D;
      var w;
      var j;
      var Y;
      var K;
      var W;
      var V;
      var H;
      var $;
      var z;
      var q;
      var J;
      var Q;
      var X;
      var Z;
      var ee;
      var te;
      var ne;
      var re;
      var ie;
      var ae;
      var oe;
      var se;
      var le;
      var ue;
      var ce;
      var de;
      var pe;
      var fe;
      var _e;
      var ge;
      var me;
      var he;
      var ye;
      var Ee;
      var Se;
      var ve;
      var Te;
      var Me;
      var Ae = 0;
      var be = 0;
      var Ce = 0;
      var Pe = 0;
      var Oe = 0;
      var Ie = 0;
      var Re = 0;
      var Ne = 0;
      var De = 0;
      var we = 0;
      var Le = 0;
      var ke = 0;
      var Ge = 0;
      var Ue = 0;
      var xe = 0;
      var Be = 0;
      var Fe = 0;
      var je = 0;
      var Ye = 0;
      var Ke = 0;
      var We = 0;
      var Ve = 0;
      var He = 0;
      var $e = 0;
      var ze = 0;
      var qe = 0;
      var Je = 0;
      var Qe = 0;
      var Xe = 0;
      var Ze = 0;
      var et = 0;
      var tt = 0;
      var nt = 0;
      var rt = 0;
      var it = 0;
      var at = 0;
      var ot = 0;
      var st = 0;
      var lt = 0;
      var ut = 0;
      var ct = 0;
      var dt = 0;
      var pt = 0;
      var ft = 0;
      var _t = 0;
      var gt = 0;
      var mt = 0;
      var ht = 0;
      var yt = 0;
      var Et = 0;
      var St = 0;
      var vt = 0;
      var Tt = 0;
      var Mt = 0;
      var At = 0;
      var bt = 0;
      var Ct = 0;
      var Pt = 0;
      var Ot = 0;
      var It = 0;
      var Rt = 0;
      var Nt = 0;
      var Dt = 0;
      var wt = 0;
      var Lt = 0;
      var kt = 0;
      var Gt = 0;
      var Ut = 0;
      var xt = 0;
      var Bt = 0;
      var Ft = 0;
      var jt = 0;
      var Yt = 0;
      var Kt = 0;
      var Wt = 0;
      var Vt = 0;
      var Ht = 0;
      var $t = 0;
      var zt = 0;
      var qt = 0;
      var Jt = 0;
      var Qt = 0;
      var Xt = 0;
      var Zt = 0;
      var en = 0;
      var tn = 0;
      var nn = 0;
      var rn = 0;
      var an = 0;
      var on = 0;
      var sn = 0;
      var ln = 0;
      var un = 0;
      var cn = 0;
      var dn = 0;
      var pn = 0;
      var fn = 0;
      var _n = 0;
      var gn = 0;
      var mn = 0;
      var hn = 0;
      var yn = 0;
      var En = 0;
      var Sn = 0;
      var vn = 0;
      var Tn = 0;
      var Mn = 0;
      var An = 0;
      var bn = 0;
      var Cn = 0;
      var Pn = 0;
      var On = 0;
      var In = 0;
      var Rn = 0;
      var Nn = 0;
      var Dn = 0;
      var wn = 0;
      var Ln = 0;
      s = o;
      o = o + 2640 | 0;
      Ae = s + 2456 | 0;
      be = s + 2304 | 0;
      Ce = s + 2152 | 0;
      Pe = s + 2000 | 0;
      Oe = s + 1848 | 0;
      Ie = s + 1696 | 0;
      Re = s + 1544 | 0;
      Ne = s + 1392 | 0;
      De = s + 1240 | 0;
      we = s + 1088 | 0;
      Le = s + 936 | 0;
      ke = s + 784 | 0;
      Ge = s + 632 | 0;
      Ue = s + 480 | 0;
      xe = s + 328 | 0;
      c = s + 248 | 0;
      Be = s + 168 | 0;
      Fe = s + 80 | 0;
      je = s;
      Ke = t |= 0;
      t = (Ye = d = s + 2608 | 0) + 32 | 0;
      do {
        r[Ye >> 0] = r[Ke >> 0] | 0;
        Ye = Ye + 1 | 0;
        Ke = Ke + 1 | 0;
      } while ((Ye | 0) < (t | 0));
      r[d >> 0] = (a[d >> 0] | 0) & 248;
      r[(We = d + 31 | 0) >> 0] = (a[We >> 0] | 0) & 63 | 64;
      We = a[n >> 0] | 0;
      Ve = B(a[n + 1 >> 0] | 0, 0, 8) | 0;
      He = l;
      $e = B(a[n + 2 >> 0] | 0, 0, 16) | 0;
      ze = He | l;
      qe = B((He = a[n + 3 >> 0] | 0) | 0, 0, 24) | 0;
      i[(Je = c) >> 2] = Ve | We | $e | qe & 50331648;
      i[Je + 4 >> 2] = ze;
      ze = B(a[n + 4 >> 0] | 0, 0, 8) | 0;
      Je = l;
      qe = B(a[n + 5 >> 0] | 0, 0, 16) | 0;
      $e = Je | l;
      Ve = x(ze | He | qe | (We = B((Je = a[n + 6 >> 0] | 0) | 0, 0, 24) | 0) | 0, $e | l | 0, 2) | 0;
      i[($e = c + 8 | 0) >> 2] = Ve & 33554431;
      i[$e + 4 >> 2] = 0;
      $e = B(a[n + 7 >> 0] | 0, 0, 8) | 0;
      Ve = l;
      We = B(a[n + 8 >> 0] | 0, 0, 16) | 0;
      qe = Ve | l;
      ze = x($e | Je | We | (He = B((Ve = a[n + 9 >> 0] | 0) | 0, 0, 24) | 0) | 0, qe | l | 0, 3) | 0;
      i[(qe = c + 16 | 0) >> 2] = ze & 67108863;
      i[qe + 4 >> 2] = 0;
      qe = B(a[n + 10 >> 0] | 0, 0, 8) | 0;
      ze = l;
      He = B(a[n + 11 >> 0] | 0, 0, 16) | 0;
      We = ze | l;
      $e = x(qe | Ve | He | (Je = B((ze = a[n + 12 >> 0] | 0) | 0, 0, 24) | 0) | 0, We | l | 0, 5) | 0;
      i[(We = c + 24 | 0) >> 2] = $e & 33554431;
      i[We + 4 >> 2] = 0;
      We = B(a[n + 13 >> 0] | 0, 0, 8) | 0;
      $e = l;
      Je = B(a[n + 14 >> 0] | 0, 0, 16) | 0;
      He = $e | l;
      Ve = x(We | ze | Je | ($e = B(a[n + 15 >> 0] | 0, 0, 24) | 0) | 0, He | l | 0, 6) | 0;
      i[(He = c + 32 | 0) >> 2] = Ve & 67108863;
      i[He + 4 >> 2] = 0;
      He = a[n + 16 >> 0] | 0;
      Ve = B(a[n + 17 >> 0] | 0, 0, 8) | 0;
      $e = l;
      Je = B(a[n + 18 >> 0] | 0, 0, 16) | 0;
      ze = $e | l;
      We = B(($e = a[n + 19 >> 0] | 0) | 0, 0, 24) | 0;
      i[(qe = c + 40 | 0) >> 2] = Ve | He | Je | We & 16777216;
      i[qe + 4 >> 2] = ze;
      ze = B(a[n + 20 >> 0] | 0, 0, 8) | 0;
      qe = l;
      We = B(a[n + 21 >> 0] | 0, 0, 16) | 0;
      Je = qe | l;
      Ve = x(ze | $e | We | (He = B((qe = a[n + 22 >> 0] | 0) | 0, 0, 24) | 0) | 0, Je | l | 0, 1) | 0;
      i[(Je = c + 48 | 0) >> 2] = Ve & 67108863;
      i[Je + 4 >> 2] = 0;
      Je = B(a[n + 23 >> 0] | 0, 0, 8) | 0;
      Ve = l;
      He = B(a[n + 24 >> 0] | 0, 0, 16) | 0;
      We = Ve | l;
      ze = x(Je | qe | He | ($e = B((Ve = a[n + 25 >> 0] | 0) | 0, 0, 24) | 0) | 0, We | l | 0, 3) | 0;
      i[(We = c + 56 | 0) >> 2] = ze & 33554431;
      i[We + 4 >> 2] = 0;
      We = B(a[n + 26 >> 0] | 0, 0, 8) | 0;
      ze = l;
      $e = B(a[n + 27 >> 0] | 0, 0, 16) | 0;
      He = ze | l;
      Je = x(We | Ve | $e | (qe = B((ze = a[n + 28 >> 0] | 0) | 0, 0, 24) | 0) | 0, He | l | 0, 4) | 0;
      i[(He = c + 64 | 0) >> 2] = Je & 67108863;
      i[He + 4 >> 2] = 0;
      He = B(a[n + 29 >> 0] | 0, 0, 8) | 0;
      Je = l;
      qe = B(a[n + 30 >> 0] | 0, 0, 16) | 0;
      $e = Je | l;
      n = x(He | ze | qe | (Je = B(a[n + 31 >> 0] | 0, 0, 24) | 0) | 0, $e | l | 0, 6) | 0;
      i[($e = c + 72 | 0) >> 2] = n & 33554431;
      i[$e + 4 >> 2] = 0;
      U(De | 0, 0, 152);
      i[($e = De) >> 2] = 1;
      i[$e + 4 >> 2] = 0;
      U(we | 0, 0, 152);
      i[($e = we) >> 2] = 1;
      i[$e + 4 >> 2] = 0;
      U(Le | 0, 0, 152);
      U(ke | 0, 0, 152);
      U(Ge | 0, 0, 152);
      i[($e = Ge) >> 2] = 1;
      i[$e + 4 >> 2] = 0;
      U(Ue | 0, 0, 152);
      U(xe | 0, 0, 152);
      i[($e = xe) >> 2] = 1;
      i[$e + 4 >> 2] = 0;
      t = (Ye = Ne + 80 | 0) + 72 | 0;
      do {
        i[Ye >> 2] = 0;
        Ye = Ye + 4 | 0;
      } while ((Ye | 0) < (t | 0));
      Ke = c;
      t = (Ye = Ne) + 80 | 0;
      do {
        i[Ye >> 2] = i[Ke >> 2];
        Ye = Ye + 4 | 0;
        Ke = Ke + 4 | 0;
      } while ((Ye | 0) < (t | 0));
      $e = Pe + 144 | 0;
      n = Pe + 64 | 0;
      Je = Pe + 136 | 0;
      qe = Pe + 56 | 0;
      ze = Pe + 128 | 0;
      He = Pe + 48 | 0;
      Ve = Pe + 120 | 0;
      We = Pe + 40 | 0;
      p = Pe + 112 | 0;
      f = Pe + 32 | 0;
      _ = Pe + 104 | 0;
      g = Pe + 24 | 0;
      m = Pe + 96 | 0;
      h = Pe + 16 | 0;
      y = Pe + 88 | 0;
      E = Pe + 8 | 0;
      S = Pe + 80 | 0;
      v = Oe + 144 | 0;
      T = Oe + 64 | 0;
      M = Oe + 136 | 0;
      A = Oe + 56 | 0;
      O = Oe + 128 | 0;
      I = Oe + 48 | 0;
      R = Oe + 120 | 0;
      N = Oe + 40 | 0;
      D = Oe + 112 | 0;
      w = Oe + 32 | 0;
      j = Oe + 104 | 0;
      Y = Oe + 24 | 0;
      K = Oe + 96 | 0;
      W = Oe + 16 | 0;
      V = Oe + 88 | 0;
      H = Oe + 8 | 0;
      $ = Oe + 80 | 0;
      z = Pe + 72 | 0;
      q = Oe + 72 | 0;
      J = be + 8 | 0;
      Q = Ce + 8 | 0;
      X = be + 16 | 0;
      Z = Ce + 16 | 0;
      ee = be + 24 | 0;
      te = Ce + 24 | 0;
      ne = be + 32 | 0;
      re = Ce + 32 | 0;
      ie = be + 40 | 0;
      ae = Ce + 40 | 0;
      oe = be + 48 | 0;
      se = Ce + 48 | 0;
      le = be + 56 | 0;
      ue = Ce + 56 | 0;
      ce = be + 64 | 0;
      de = Ce + 64 | 0;
      pe = be + 72 | 0;
      fe = Ce + 72 | 0;
      _e = Ae + 80 | 0;
      ge = Ae + 8 | 0;
      me = Ae + 16 | 0;
      he = Ae + 24 | 0;
      ye = Ae + 32 | 0;
      Ee = Ae + 40 | 0;
      Se = Ae + 48 | 0;
      ve = Ae + 56 | 0;
      Te = Ae + 64 | 0;
      Me = Ae + 72 | 0;
      Qe = 0;
      Xe = Ne;
      Ze = ke;
      ke = De;
      et = Ge;
      Ge = we;
      tt = Ue;
      Ue = Le;
      Le = xe;
      for (;;) {
        xe = r[d + (31 - Qe) >> 0] | 0;
        nt = 0;
        rt = Xe;
        it = Ze;
        at = ke;
        ot = et;
        st = Ge;
        lt = tt;
        ut = Ue;
        ct = Le;
        for (;;) {
          pt = k(0, 0, (dt = xe & 255) >>> 7 | 0, 0) | 0;
          ft = l;
          _t = 0;
          do {
            ht = i[(mt = gt = st + (_t << 3) | 0) >> 2] | 0;
            yt = i[mt + 4 >> 2] | 0;
            St = i[(Et = mt = rt + (_t << 3) | 0) >> 2] | 0;
            Tt = ((vt = i[Et + 4 >> 2] | 0) ^ yt) & ft;
            yt = L(0, (Et = (St ^ ht) & pt) ^ ht | 0, 32) | 0;
            i[(ht = gt) >> 2] = yt;
            i[ht + 4 >> 2] = l;
            ht = L(0, Et ^ St | 0, 32) | 0;
            i[(St = mt) >> 2] = ht;
            i[St + 4 >> 2] = l;
            _t = _t + 1 | 0;
          } while ((_t | 0) != 10);
          Mt = 0;
          do {
            ht = i[(St = _t = ut + (Mt << 3) | 0) >> 2] | 0;
            mt = i[St + 4 >> 2] | 0;
            yt = i[(Et = St = at + (Mt << 3) | 0) >> 2] | 0;
            vt = ((gt = i[Et + 4 >> 2] | 0) ^ mt) & ft;
            mt = L(0, (Et = (yt ^ ht) & pt) ^ ht | 0, 32) | 0;
            i[(ht = _t) >> 2] = mt;
            i[ht + 4 >> 2] = l;
            ht = L(0, Et ^ yt | 0, 32) | 0;
            i[(yt = St) >> 2] = ht;
            i[yt + 4 >> 2] = l;
            Mt = Mt + 1 | 0;
          } while ((Mt | 0) != 10);
          ht = i[(yt = st) >> 2] | 0;
          St = i[yt + 4 >> 2] | 0;
          mt = i[(Et = yt = st + 8 | 0) >> 2] | 0;
          _t = i[Et + 4 >> 2] | 0;
          vt = i[(gt = Et = st + 16 | 0) >> 2] | 0;
          Tt = i[gt + 4 >> 2] | 0;
          bt = i[(At = gt = st + 24 | 0) >> 2] | 0;
          Ct = i[At + 4 >> 2] | 0;
          Ot = i[(Pt = At = st + 32 | 0) >> 2] | 0;
          It = i[Pt + 4 >> 2] | 0;
          Nt = i[(Rt = Pt = st + 40 | 0) >> 2] | 0;
          Dt = i[Rt + 4 >> 2] | 0;
          Lt = i[(wt = Rt = st + 48 | 0) >> 2] | 0;
          kt = i[wt + 4 >> 2] | 0;
          Ut = i[(Gt = wt = st + 56 | 0) >> 2] | 0;
          xt = i[Gt + 4 >> 2] | 0;
          Ft = i[(Bt = Gt = st + 64 | 0) >> 2] | 0;
          jt = i[Bt + 4 >> 2] | 0;
          Kt = i[(Yt = Bt = st + 72 | 0) >> 2] | 0;
          Wt = i[Yt + 4 >> 2] | 0;
          Yt = G((Vt = i[(Yt = ut) >> 2] | 0) | 0, (Ht = i[Yt + 4 >> 2] | 0) | 0, ht | 0, St | 0) | 0;
          i[($t = st) >> 2] = Yt;
          i[$t + 4 >> 2] = l;
          Yt = G((zt = i[(Yt = $t = ut + 8 | 0) >> 2] | 0) | 0, (qt = i[Yt + 4 >> 2] | 0) | 0, mt | 0, _t | 0) | 0;
          i[(Jt = yt) >> 2] = Yt;
          i[Jt + 4 >> 2] = l;
          Yt = G((yt = i[(Yt = Jt = ut + 16 | 0) >> 2] | 0) | 0, (Qt = i[Yt + 4 >> 2] | 0) | 0, vt | 0, Tt | 0) | 0;
          i[(Xt = Et) >> 2] = Yt;
          i[Xt + 4 >> 2] = l;
          Yt = G((Et = i[(Yt = Xt = ut + 24 | 0) >> 2] | 0) | 0, (Zt = i[Yt + 4 >> 2] | 0) | 0, bt | 0, Ct | 0) | 0;
          i[(en = gt) >> 2] = Yt;
          i[en + 4 >> 2] = l;
          Yt = G((gt = i[(Yt = en = ut + 32 | 0) >> 2] | 0) | 0, (tn = i[Yt + 4 >> 2] | 0) | 0, Ot | 0, It | 0) | 0;
          i[(nn = At) >> 2] = Yt;
          i[nn + 4 >> 2] = l;
          Yt = G((At = i[(Yt = nn = ut + 40 | 0) >> 2] | 0) | 0, (rn = i[Yt + 4 >> 2] | 0) | 0, Nt | 0, Dt | 0) | 0;
          i[(an = Pt) >> 2] = Yt;
          i[an + 4 >> 2] = l;
          Yt = G((Pt = i[(Yt = an = ut + 48 | 0) >> 2] | 0) | 0, (on = i[Yt + 4 >> 2] | 0) | 0, Lt | 0, kt | 0) | 0;
          i[(sn = Rt) >> 2] = Yt;
          i[sn + 4 >> 2] = l;
          Yt = G((Rt = i[(Yt = sn = ut + 56 | 0) >> 2] | 0) | 0, (ln = i[Yt + 4 >> 2] | 0) | 0, Ut | 0, xt | 0) | 0;
          i[(un = wt) >> 2] = Yt;
          i[un + 4 >> 2] = l;
          Yt = G((wt = i[(Yt = un = ut + 64 | 0) >> 2] | 0) | 0, (cn = i[Yt + 4 >> 2] | 0) | 0, Ft | 0, jt | 0) | 0;
          i[(dn = Gt) >> 2] = Yt;
          i[dn + 4 >> 2] = l;
          Yt = G((Gt = i[(Yt = dn = ut + 72 | 0) >> 2] | 0) | 0, (pn = i[Yt + 4 >> 2] | 0) | 0, Kt | 0, Wt | 0) | 0;
          i[(fn = Bt) >> 2] = Yt;
          i[fn + 4 >> 2] = l;
          fn = k(ht | 0, St | 0, Vt | 0, Ht | 0) | 0;
          i[(Ht = ut) >> 2] = fn;
          i[Ht + 4 >> 2] = l;
          Ht = k(mt | 0, _t | 0, zt | 0, qt | 0) | 0;
          i[(qt = $t) >> 2] = Ht;
          i[qt + 4 >> 2] = l;
          qt = k(vt | 0, Tt | 0, yt | 0, Qt | 0) | 0;
          i[(Qt = Jt) >> 2] = qt;
          i[Qt + 4 >> 2] = l;
          Qt = k(bt | 0, Ct | 0, Et | 0, Zt | 0) | 0;
          i[(Zt = Xt) >> 2] = Qt;
          i[Zt + 4 >> 2] = l;
          Zt = k(Ot | 0, It | 0, gt | 0, tn | 0) | 0;
          i[(tn = en) >> 2] = Zt;
          i[tn + 4 >> 2] = l;
          tn = k(Nt | 0, Dt | 0, At | 0, rn | 0) | 0;
          i[(rn = nn) >> 2] = tn;
          i[rn + 4 >> 2] = l;
          rn = k(Lt | 0, kt | 0, Pt | 0, on | 0) | 0;
          i[(on = an) >> 2] = rn;
          i[on + 4 >> 2] = l;
          on = k(Ut | 0, xt | 0, Rt | 0, ln | 0) | 0;
          i[(ln = sn) >> 2] = on;
          i[ln + 4 >> 2] = l;
          ln = k(Ft | 0, jt | 0, wt | 0, cn | 0) | 0;
          i[(cn = un) >> 2] = ln;
          i[cn + 4 >> 2] = l;
          cn = k(Kt | 0, Wt | 0, Gt | 0, pn | 0) | 0;
          i[(pn = dn) >> 2] = cn;
          i[pn + 4 >> 2] = l;
          cn = i[(pn = rt) >> 2] | 0;
          dn = i[pn + 4 >> 2] | 0;
          Wt = i[(Gt = pn = rt + 8 | 0) >> 2] | 0;
          Kt = i[Gt + 4 >> 2] | 0;
          un = i[(ln = Gt = rt + 16 | 0) >> 2] | 0;
          wt = i[ln + 4 >> 2] | 0;
          Ft = i[(jt = ln = rt + 24 | 0) >> 2] | 0;
          on = i[jt + 4 >> 2] | 0;
          Rt = i[(sn = jt = rt + 32 | 0) >> 2] | 0;
          xt = i[sn + 4 >> 2] | 0;
          rn = i[(Ut = sn = rt + 40 | 0) >> 2] | 0;
          an = i[Ut + 4 >> 2] | 0;
          kt = i[(Pt = Ut = rt + 48 | 0) >> 2] | 0;
          Lt = i[Pt + 4 >> 2] | 0;
          nn = i[(tn = Pt = rt + 56 | 0) >> 2] | 0;
          At = i[tn + 4 >> 2] | 0;
          Nt = i[(Dt = tn = rt + 64 | 0) >> 2] | 0;
          Zt = i[Dt + 4 >> 2] | 0;
          gt = i[(en = Dt = rt + 72 | 0) >> 2] | 0;
          It = i[en + 4 >> 2] | 0;
          en = G((Ot = i[(en = at) >> 2] | 0) | 0, (Qt = i[en + 4 >> 2] | 0) | 0, cn | 0, dn | 0) | 0;
          i[(Xt = rt) >> 2] = en;
          i[Xt + 4 >> 2] = l;
          en = G((Et = i[(en = Xt = at + 8 | 0) >> 2] | 0) | 0, (Ct = i[en + 4 >> 2] | 0) | 0, Wt | 0, Kt | 0) | 0;
          i[(bt = pn) >> 2] = en;
          i[bt + 4 >> 2] = l;
          en = G((pn = i[(en = bt = at + 16 | 0) >> 2] | 0) | 0, (qt = i[en + 4 >> 2] | 0) | 0, un | 0, wt | 0) | 0;
          i[(Jt = Gt) >> 2] = en;
          i[Jt + 4 >> 2] = l;
          en = G((Gt = i[(en = Jt = at + 24 | 0) >> 2] | 0) | 0, (yt = i[en + 4 >> 2] | 0) | 0, Ft | 0, on | 0) | 0;
          i[(Tt = ln) >> 2] = en;
          i[Tt + 4 >> 2] = l;
          en = G((ln = i[(en = Tt = at + 32 | 0) >> 2] | 0) | 0, (vt = i[en + 4 >> 2] | 0) | 0, Rt | 0, xt | 0) | 0;
          i[(Ht = jt) >> 2] = en;
          i[Ht + 4 >> 2] = l;
          en = G((jt = i[(en = Ht = at + 40 | 0) >> 2] | 0) | 0, ($t = i[en + 4 >> 2] | 0) | 0, rn | 0, an | 0) | 0;
          i[(zt = sn) >> 2] = en;
          i[zt + 4 >> 2] = l;
          en = G((sn = i[(en = zt = at + 48 | 0) >> 2] | 0) | 0, (_t = i[en + 4 >> 2] | 0) | 0, kt | 0, Lt | 0) | 0;
          i[(mt = Ut) >> 2] = en;
          i[mt + 4 >> 2] = l;
          en = G((Ut = i[(en = mt = at + 56 | 0) >> 2] | 0) | 0, (fn = i[en + 4 >> 2] | 0) | 0, nn | 0, At | 0) | 0;
          i[(Vt = Pt) >> 2] = en;
          i[Vt + 4 >> 2] = l;
          en = G((Pt = i[(en = Vt = at + 64 | 0) >> 2] | 0) | 0, (St = i[en + 4 >> 2] | 0) | 0, Nt | 0, Zt | 0) | 0;
          i[(ht = tn) >> 2] = en;
          i[ht + 4 >> 2] = l;
          en = G((tn = i[(en = ht = at + 72 | 0) >> 2] | 0) | 0, (Yt = i[en + 4 >> 2] | 0) | 0, gt | 0, It | 0) | 0;
          i[(Bt = Dt) >> 2] = en;
          i[Bt + 4 >> 2] = l;
          Bt = k(cn | 0, dn | 0, Ot | 0, Qt | 0) | 0;
          i[(Qt = at) >> 2] = Bt;
          i[Qt + 4 >> 2] = l;
          Qt = k(Wt | 0, Kt | 0, Et | 0, Ct | 0) | 0;
          i[(Ct = Xt) >> 2] = Qt;
          i[Ct + 4 >> 2] = l;
          Ct = k(un | 0, wt | 0, pn | 0, qt | 0) | 0;
          i[(qt = bt) >> 2] = Ct;
          i[qt + 4 >> 2] = l;
          qt = k(Ft | 0, on | 0, Gt | 0, yt | 0) | 0;
          i[(yt = Jt) >> 2] = qt;
          i[yt + 4 >> 2] = l;
          yt = k(Rt | 0, xt | 0, ln | 0, vt | 0) | 0;
          i[(vt = Tt) >> 2] = yt;
          i[vt + 4 >> 2] = l;
          vt = k(rn | 0, an | 0, jt | 0, $t | 0) | 0;
          i[($t = Ht) >> 2] = vt;
          i[$t + 4 >> 2] = l;
          $t = k(kt | 0, Lt | 0, sn | 0, _t | 0) | 0;
          i[(_t = zt) >> 2] = $t;
          i[_t + 4 >> 2] = l;
          _t = k(nn | 0, At | 0, Ut | 0, fn | 0) | 0;
          i[(fn = mt) >> 2] = _t;
          i[fn + 4 >> 2] = l;
          fn = k(Nt | 0, Zt | 0, Pt | 0, St | 0) | 0;
          i[(St = Vt) >> 2] = fn;
          i[St + 4 >> 2] = l;
          St = k(gt | 0, It | 0, tn | 0, Yt | 0) | 0;
          i[(Yt = ht) >> 2] = St;
          i[Yt + 4 >> 2] = l;
          C(Pe, rt, ut);
          C(Oe, st, at);
          St = i[(Yt = $e) >> 2] | 0;
          ht = i[Yt + 4 >> 2] | 0;
          tn = i[(Yt = n) >> 2] | 0;
          It = i[Yt + 4 >> 2] | 0;
          Yt = F(St | 0, ht | 0, 18, 0) | 0;
          gt = l;
          fn = G(tn | 0, It | 0, St | 0, ht | 0) | 0;
          ht = G(fn | 0, l | 0, Yt | 0, gt | 0) | 0;
          i[(gt = n) >> 2] = ht;
          i[gt + 4 >> 2] = l;
          ht = i[(gt = Je) >> 2] | 0;
          Yt = i[gt + 4 >> 2] | 0;
          fn = i[(gt = qe) >> 2] | 0;
          St = i[gt + 4 >> 2] | 0;
          gt = F(ht | 0, Yt | 0, 18, 0) | 0;
          It = l;
          tn = G(fn | 0, St | 0, ht | 0, Yt | 0) | 0;
          Yt = G(tn | 0, l | 0, gt | 0, It | 0) | 0;
          i[(It = qe) >> 2] = Yt;
          i[It + 4 >> 2] = l;
          Yt = i[(It = ze) >> 2] | 0;
          gt = i[It + 4 >> 2] | 0;
          tn = i[(It = He) >> 2] | 0;
          ht = i[It + 4 >> 2] | 0;
          It = F(Yt | 0, gt | 0, 18, 0) | 0;
          St = l;
          fn = G(tn | 0, ht | 0, Yt | 0, gt | 0) | 0;
          gt = G(fn | 0, l | 0, It | 0, St | 0) | 0;
          i[(St = He) >> 2] = gt;
          i[St + 4 >> 2] = l;
          gt = i[(St = Ve) >> 2] | 0;
          It = i[St + 4 >> 2] | 0;
          fn = i[(St = We) >> 2] | 0;
          Yt = i[St + 4 >> 2] | 0;
          St = F(gt | 0, It | 0, 18, 0) | 0;
          ht = l;
          tn = G(fn | 0, Yt | 0, gt | 0, It | 0) | 0;
          It = G(tn | 0, l | 0, St | 0, ht | 0) | 0;
          i[(ht = We) >> 2] = It;
          i[ht + 4 >> 2] = l;
          It = i[(ht = p) >> 2] | 0;
          St = i[ht + 4 >> 2] | 0;
          tn = i[(ht = f) >> 2] | 0;
          gt = i[ht + 4 >> 2] | 0;
          ht = F(It | 0, St | 0, 18, 0) | 0;
          Yt = l;
          fn = G(tn | 0, gt | 0, It | 0, St | 0) | 0;
          St = G(fn | 0, l | 0, ht | 0, Yt | 0) | 0;
          i[(Yt = f) >> 2] = St;
          i[Yt + 4 >> 2] = l;
          St = i[(Yt = _) >> 2] | 0;
          ht = i[Yt + 4 >> 2] | 0;
          fn = i[(Yt = g) >> 2] | 0;
          It = i[Yt + 4 >> 2] | 0;
          Yt = F(St | 0, ht | 0, 18, 0) | 0;
          gt = l;
          tn = G(fn | 0, It | 0, St | 0, ht | 0) | 0;
          ht = G(tn | 0, l | 0, Yt | 0, gt | 0) | 0;
          i[(gt = g) >> 2] = ht;
          i[gt + 4 >> 2] = l;
          ht = i[(gt = m) >> 2] | 0;
          Yt = i[gt + 4 >> 2] | 0;
          tn = i[(gt = h) >> 2] | 0;
          St = i[gt + 4 >> 2] | 0;
          gt = F(ht | 0, Yt | 0, 18, 0) | 0;
          It = l;
          fn = G(tn | 0, St | 0, ht | 0, Yt | 0) | 0;
          Yt = G(fn | 0, l | 0, gt | 0, It | 0) | 0;
          i[(It = h) >> 2] = Yt;
          i[It + 4 >> 2] = l;
          Yt = i[(It = y) >> 2] | 0;
          gt = i[It + 4 >> 2] | 0;
          fn = i[(It = E) >> 2] | 0;
          ht = i[It + 4 >> 2] | 0;
          It = F(Yt | 0, gt | 0, 18, 0) | 0;
          St = l;
          tn = G(fn | 0, ht | 0, Yt | 0, gt | 0) | 0;
          gt = G(tn | 0, l | 0, It | 0, St | 0) | 0;
          i[(St = E) >> 2] = gt;
          i[St + 4 >> 2] = l;
          gt = i[(St = S) >> 2] | 0;
          It = i[St + 4 >> 2] | 0;
          tn = i[(St = Pe) >> 2] | 0;
          Yt = i[St + 4 >> 2] | 0;
          St = F(gt | 0, It | 0, 18, 0) | 0;
          ht = l;
          fn = G(tn | 0, Yt | 0, gt | 0, It | 0) | 0;
          It = G(fn | 0, l | 0, St | 0, ht | 0) | 0;
          ht = l;
          i[(St = Pe) >> 2] = It;
          i[St + 4 >> 2] = ht;
          i[(St = S) >> 2] = 0;
          i[St + 4 >> 2] = 0;
          St = ht;
          ht = It;
          It = 0;
          do {
            tn = k(ht | 0, St | 0, (Yt = B((gt = L((fn = G(St >> 31 >>> 6 | 0, 0, ht | 0, St | 0) | 0) | 0, l | 0, 26) | 0) | 0, (fn = l) | 0, 26) | 0) | 0, l | 0) | 0;
            i[(Yt = Pe + (It << 3) | 0) >> 2] = tn;
            i[Yt + 4 >> 2] = l;
            Zt = k((Vt = G(gt | 0, fn | 0, i[(tn = Yt = Pe + ((It | 1) << 3) | 0) >> 2] | 0, i[tn + 4 >> 2] | 0) | 0) | 0, (tn = l) | 0, (Pt = B((gt = L((fn = G(tn >> 31 >>> 7 | 0, 0, Vt | 0, tn | 0) | 0) | 0, l | 0, 25) | 0) | 0, (fn = l) | 0, 25) | 0) | 0, l | 0) | 0;
            i[(Pt = Yt) >> 2] = Zt;
            i[Pt + 4 >> 2] = l;
            ht = G(gt | 0, fn | 0, i[(Zt = Pt = Pe + ((It = It + 2 | 0) << 3) | 0) >> 2] | 0, i[Zt + 4 >> 2] | 0) | 0;
            St = l;
            i[(Zt = Pt) >> 2] = ht;
            i[Zt + 4 >> 2] = St;
          } while (It >>> 0 < 10);
          St = i[(It = S) >> 2] | 0;
          ht = i[It + 4 >> 2] | 0;
          Zt = i[(It = Pe) >> 2] | 0;
          Pt = i[It + 4 >> 2] | 0;
          It = F(St | 0, ht | 0, 18, 0) | 0;
          fn = l;
          gt = G(Zt | 0, Pt | 0, St | 0, ht | 0) | 0;
          ht = G(gt | 0, l | 0, It | 0, fn | 0) | 0;
          fn = l;
          i[(It = S) >> 2] = 0;
          i[It + 4 >> 2] = 0;
          Pt = k(ht | 0, fn | 0, (St = B((gt = L((It = G(fn >> 31 >>> 6 | 0, 0, ht | 0, fn | 0) | 0) | 0, l | 0, 26) | 0) | 0, (It = l) | 0, 26) | 0) | 0, l | 0) | 0;
          St = l;
          i[(fn = Pe) >> 2] = Pt;
          i[fn + 4 >> 2] = St;
          ht = G(gt | 0, It | 0, i[(fn = E) >> 2] | 0, i[fn + 4 >> 2] | 0) | 0;
          fn = l;
          i[(It = E) >> 2] = ht;
          i[It + 4 >> 2] = fn;
          gt = i[(It = v) >> 2] | 0;
          Zt = i[It + 4 >> 2] | 0;
          Yt = i[(It = T) >> 2] | 0;
          tn = i[It + 4 >> 2] | 0;
          It = F(gt | 0, Zt | 0, 18, 0) | 0;
          Vt = l;
          Nt = G(Yt | 0, tn | 0, gt | 0, Zt | 0) | 0;
          Zt = G(Nt | 0, l | 0, It | 0, Vt | 0) | 0;
          i[(Vt = T) >> 2] = Zt;
          i[Vt + 4 >> 2] = l;
          Zt = i[(Vt = M) >> 2] | 0;
          It = i[Vt + 4 >> 2] | 0;
          Nt = i[(Vt = A) >> 2] | 0;
          gt = i[Vt + 4 >> 2] | 0;
          Vt = F(Zt | 0, It | 0, 18, 0) | 0;
          tn = l;
          Yt = G(Nt | 0, gt | 0, Zt | 0, It | 0) | 0;
          It = G(Yt | 0, l | 0, Vt | 0, tn | 0) | 0;
          i[(tn = A) >> 2] = It;
          i[tn + 4 >> 2] = l;
          It = i[(tn = O) >> 2] | 0;
          Vt = i[tn + 4 >> 2] | 0;
          Yt = i[(tn = I) >> 2] | 0;
          Zt = i[tn + 4 >> 2] | 0;
          tn = F(It | 0, Vt | 0, 18, 0) | 0;
          gt = l;
          Nt = G(Yt | 0, Zt | 0, It | 0, Vt | 0) | 0;
          Vt = G(Nt | 0, l | 0, tn | 0, gt | 0) | 0;
          i[(gt = I) >> 2] = Vt;
          i[gt + 4 >> 2] = l;
          Vt = i[(gt = R) >> 2] | 0;
          tn = i[gt + 4 >> 2] | 0;
          Nt = i[(gt = N) >> 2] | 0;
          It = i[gt + 4 >> 2] | 0;
          gt = F(Vt | 0, tn | 0, 18, 0) | 0;
          Zt = l;
          Yt = G(Nt | 0, It | 0, Vt | 0, tn | 0) | 0;
          tn = G(Yt | 0, l | 0, gt | 0, Zt | 0) | 0;
          i[(Zt = N) >> 2] = tn;
          i[Zt + 4 >> 2] = l;
          tn = i[(Zt = D) >> 2] | 0;
          gt = i[Zt + 4 >> 2] | 0;
          Yt = i[(Zt = w) >> 2] | 0;
          Vt = i[Zt + 4 >> 2] | 0;
          Zt = F(tn | 0, gt | 0, 18, 0) | 0;
          It = l;
          Nt = G(Yt | 0, Vt | 0, tn | 0, gt | 0) | 0;
          gt = G(Nt | 0, l | 0, Zt | 0, It | 0) | 0;
          i[(It = w) >> 2] = gt;
          i[It + 4 >> 2] = l;
          gt = i[(It = j) >> 2] | 0;
          Zt = i[It + 4 >> 2] | 0;
          Nt = i[(It = Y) >> 2] | 0;
          tn = i[It + 4 >> 2] | 0;
          It = F(gt | 0, Zt | 0, 18, 0) | 0;
          Vt = l;
          Yt = G(Nt | 0, tn | 0, gt | 0, Zt | 0) | 0;
          Zt = G(Yt | 0, l | 0, It | 0, Vt | 0) | 0;
          i[(Vt = Y) >> 2] = Zt;
          i[Vt + 4 >> 2] = l;
          Zt = i[(Vt = K) >> 2] | 0;
          It = i[Vt + 4 >> 2] | 0;
          Yt = i[(Vt = W) >> 2] | 0;
          gt = i[Vt + 4 >> 2] | 0;
          Vt = F(Zt | 0, It | 0, 18, 0) | 0;
          tn = l;
          Nt = G(Yt | 0, gt | 0, Zt | 0, It | 0) | 0;
          It = G(Nt | 0, l | 0, Vt | 0, tn | 0) | 0;
          i[(tn = W) >> 2] = It;
          i[tn + 4 >> 2] = l;
          It = i[(tn = V) >> 2] | 0;
          Vt = i[tn + 4 >> 2] | 0;
          Nt = i[(tn = H) >> 2] | 0;
          Zt = i[tn + 4 >> 2] | 0;
          tn = F(It | 0, Vt | 0, 18, 0) | 0;
          gt = l;
          Yt = G(Nt | 0, Zt | 0, It | 0, Vt | 0) | 0;
          Vt = G(Yt | 0, l | 0, tn | 0, gt | 0) | 0;
          i[(gt = H) >> 2] = Vt;
          i[gt + 4 >> 2] = l;
          Vt = i[(gt = $) >> 2] | 0;
          tn = i[gt + 4 >> 2] | 0;
          Yt = i[(gt = Oe) >> 2] | 0;
          It = i[gt + 4 >> 2] | 0;
          gt = F(Vt | 0, tn | 0, 18, 0) | 0;
          Zt = l;
          Nt = G(Yt | 0, It | 0, Vt | 0, tn | 0) | 0;
          tn = G(Nt | 0, l | 0, gt | 0, Zt | 0) | 0;
          Zt = l;
          i[(gt = Oe) >> 2] = tn;
          i[gt + 4 >> 2] = Zt;
          i[(gt = $) >> 2] = 0;
          i[gt + 4 >> 2] = 0;
          gt = Zt;
          Zt = tn;
          tn = 0;
          do {
            Yt = k(Zt | 0, gt | 0, (It = B((Vt = L((Nt = G(gt >> 31 >>> 6 | 0, 0, Zt | 0, gt | 0) | 0) | 0, l | 0, 26) | 0) | 0, (Nt = l) | 0, 26) | 0) | 0, l | 0) | 0;
            i[(It = Oe + (tn << 3) | 0) >> 2] = Yt;
            i[It + 4 >> 2] = l;
            Ut = k((_t = G(Vt | 0, Nt | 0, i[(Yt = It = Oe + ((tn | 1) << 3) | 0) >> 2] | 0, i[Yt + 4 >> 2] | 0) | 0) | 0, (Yt = l) | 0, (mt = B((Vt = L((Nt = G(Yt >> 31 >>> 7 | 0, 0, _t | 0, Yt | 0) | 0) | 0, l | 0, 25) | 0) | 0, (Nt = l) | 0, 25) | 0) | 0, l | 0) | 0;
            i[(mt = It) >> 2] = Ut;
            i[mt + 4 >> 2] = l;
            Zt = G(Vt | 0, Nt | 0, i[(Ut = mt = Oe + ((tn = tn + 2 | 0) << 3) | 0) >> 2] | 0, i[Ut + 4 >> 2] | 0) | 0;
            gt = l;
            i[(Ut = mt) >> 2] = Zt;
            i[Ut + 4 >> 2] = gt;
          } while (tn >>> 0 < 10);
          gt = i[(tn = $) >> 2] | 0;
          Zt = i[tn + 4 >> 2] | 0;
          Ut = i[(tn = Oe) >> 2] | 0;
          mt = i[tn + 4 >> 2] | 0;
          tn = F(gt | 0, Zt | 0, 18, 0) | 0;
          Nt = l;
          Vt = G(Ut | 0, mt | 0, gt | 0, Zt | 0) | 0;
          Zt = G(Vt | 0, l | 0, tn | 0, Nt | 0) | 0;
          Nt = l;
          i[(tn = $) >> 2] = 0;
          i[tn + 4 >> 2] = 0;
          mt = k(Zt | 0, Nt | 0, (gt = B((Vt = L((tn = G(Nt >> 31 >>> 6 | 0, 0, Zt | 0, Nt | 0) | 0) | 0, l | 0, 26) | 0) | 0, (tn = l) | 0, 26) | 0) | 0, l | 0) | 0;
          gt = l;
          Zt = G(Vt | 0, tn | 0, i[(Nt = H) >> 2] | 0, i[Nt + 4 >> 2] | 0) | 0;
          Nt = l;
          Vt = i[(tn = h) >> 2] | 0;
          Ut = i[tn + 4 >> 2] | 0;
          It = i[(tn = g) >> 2] | 0;
          Yt = i[tn + 4 >> 2] | 0;
          _t = i[(tn = f) >> 2] | 0;
          At = i[tn + 4 >> 2] | 0;
          nn = i[(tn = We) >> 2] | 0;
          $t = i[tn + 4 >> 2] | 0;
          zt = i[(tn = He) >> 2] | 0;
          sn = i[tn + 4 >> 2] | 0;
          Lt = i[(tn = qe) >> 2] | 0;
          kt = i[tn + 4 >> 2] | 0;
          vt = i[(tn = n) >> 2] | 0;
          Ht = i[tn + 4 >> 2] | 0;
          jt = i[(tn = z) >> 2] | 0;
          an = i[tn + 4 >> 2] | 0;
          tn = G(mt | 0, gt | 0, Pt | 0, St | 0) | 0;
          i[(rn = Pe) >> 2] = tn;
          i[rn + 4 >> 2] = l;
          rn = G(Zt | 0, Nt | 0, ht | 0, fn | 0) | 0;
          i[(tn = E) >> 2] = rn;
          i[tn + 4 >> 2] = l;
          tn = G((rn = i[(tn = W) >> 2] | 0) | 0, (yt = i[tn + 4 >> 2] | 0) | 0, Vt | 0, Ut | 0) | 0;
          i[(Tt = h) >> 2] = tn;
          i[Tt + 4 >> 2] = l;
          Tt = G((tn = i[(Tt = Y) >> 2] | 0) | 0, (ln = i[Tt + 4 >> 2] | 0) | 0, It | 0, Yt | 0) | 0;
          i[(xt = g) >> 2] = Tt;
          i[xt + 4 >> 2] = l;
          xt = G((Tt = i[(xt = w) >> 2] | 0) | 0, (Rt = i[xt + 4 >> 2] | 0) | 0, _t | 0, At | 0) | 0;
          i[(qt = f) >> 2] = xt;
          i[qt + 4 >> 2] = l;
          qt = G((xt = i[(qt = N) >> 2] | 0) | 0, (Jt = i[qt + 4 >> 2] | 0) | 0, nn | 0, $t | 0) | 0;
          i[(Gt = We) >> 2] = qt;
          i[Gt + 4 >> 2] = l;
          Gt = G((qt = i[(Gt = I) >> 2] | 0) | 0, (on = i[Gt + 4 >> 2] | 0) | 0, zt | 0, sn | 0) | 0;
          i[(Ft = He) >> 2] = Gt;
          i[Ft + 4 >> 2] = l;
          Ft = G((Gt = i[(Ft = A) >> 2] | 0) | 0, (Ct = i[Ft + 4 >> 2] | 0) | 0, Lt | 0, kt | 0) | 0;
          i[(bt = qe) >> 2] = Ft;
          i[bt + 4 >> 2] = l;
          bt = G((Ft = i[(bt = T) >> 2] | 0) | 0, (pn = i[bt + 4 >> 2] | 0) | 0, vt | 0, Ht | 0) | 0;
          i[(wt = n) >> 2] = bt;
          i[wt + 4 >> 2] = l;
          wt = G((bt = i[(wt = q) >> 2] | 0) | 0, (un = i[wt + 4 >> 2] | 0) | 0, jt | 0, an | 0) | 0;
          i[(Qt = z) >> 2] = wt;
          i[Qt + 4 >> 2] = l;
          Qt = k(Pt | 0, St | 0, mt | 0, gt | 0) | 0;
          i[(gt = Oe) >> 2] = Qt;
          i[gt + 4 >> 2] = l;
          gt = k(ht | 0, fn | 0, Zt | 0, Nt | 0) | 0;
          i[(Nt = H) >> 2] = gt;
          i[Nt + 4 >> 2] = l;
          Nt = k(Vt | 0, Ut | 0, rn | 0, yt | 0) | 0;
          i[(yt = W) >> 2] = Nt;
          i[yt + 4 >> 2] = l;
          yt = k(It | 0, Yt | 0, tn | 0, ln | 0) | 0;
          i[(ln = Y) >> 2] = yt;
          i[ln + 4 >> 2] = l;
          ln = k(_t | 0, At | 0, Tt | 0, Rt | 0) | 0;
          i[(Rt = w) >> 2] = ln;
          i[Rt + 4 >> 2] = l;
          Rt = k(nn | 0, $t | 0, xt | 0, Jt | 0) | 0;
          i[(Jt = N) >> 2] = Rt;
          i[Jt + 4 >> 2] = l;
          Jt = k(zt | 0, sn | 0, qt | 0, on | 0) | 0;
          i[(on = I) >> 2] = Jt;
          i[on + 4 >> 2] = l;
          on = k(Lt | 0, kt | 0, Gt | 0, Ct | 0) | 0;
          i[(Ct = A) >> 2] = on;
          i[Ct + 4 >> 2] = l;
          Ct = k(vt | 0, Ht | 0, Ft | 0, pn | 0) | 0;
          i[(pn = T) >> 2] = Ct;
          i[pn + 4 >> 2] = l;
          pn = k(jt | 0, an | 0, bt | 0, un | 0) | 0;
          i[(un = q) >> 2] = pn;
          i[un + 4 >> 2] = l;
          P(Re, Pe);
          P(Ie, Oe);
          C(Oe, Ie, c);
          pn = i[(un = v) >> 2] | 0;
          bt = i[un + 4 >> 2] | 0;
          an = i[(un = T) >> 2] | 0;
          jt = i[un + 4 >> 2] | 0;
          un = F(pn | 0, bt | 0, 18, 0) | 0;
          Ct = l;
          Ft = G(an | 0, jt | 0, pn | 0, bt | 0) | 0;
          bt = G(Ft | 0, l | 0, un | 0, Ct | 0) | 0;
          i[(Ct = T) >> 2] = bt;
          i[Ct + 4 >> 2] = l;
          bt = i[(Ct = M) >> 2] | 0;
          un = i[Ct + 4 >> 2] | 0;
          Ft = i[(Ct = A) >> 2] | 0;
          pn = i[Ct + 4 >> 2] | 0;
          Ct = F(bt | 0, un | 0, 18, 0) | 0;
          jt = l;
          an = G(Ft | 0, pn | 0, bt | 0, un | 0) | 0;
          un = G(an | 0, l | 0, Ct | 0, jt | 0) | 0;
          i[(jt = A) >> 2] = un;
          i[jt + 4 >> 2] = l;
          un = i[(jt = O) >> 2] | 0;
          Ct = i[jt + 4 >> 2] | 0;
          an = i[(jt = I) >> 2] | 0;
          bt = i[jt + 4 >> 2] | 0;
          jt = F(un | 0, Ct | 0, 18, 0) | 0;
          pn = l;
          Ft = G(an | 0, bt | 0, un | 0, Ct | 0) | 0;
          Ct = G(Ft | 0, l | 0, jt | 0, pn | 0) | 0;
          i[(pn = I) >> 2] = Ct;
          i[pn + 4 >> 2] = l;
          Ct = i[(pn = R) >> 2] | 0;
          jt = i[pn + 4 >> 2] | 0;
          Ft = i[(pn = N) >> 2] | 0;
          un = i[pn + 4 >> 2] | 0;
          pn = F(Ct | 0, jt | 0, 18, 0) | 0;
          bt = l;
          an = G(Ft | 0, un | 0, Ct | 0, jt | 0) | 0;
          jt = G(an | 0, l | 0, pn | 0, bt | 0) | 0;
          i[(bt = N) >> 2] = jt;
          i[bt + 4 >> 2] = l;
          jt = i[(bt = D) >> 2] | 0;
          pn = i[bt + 4 >> 2] | 0;
          an = i[(bt = w) >> 2] | 0;
          Ct = i[bt + 4 >> 2] | 0;
          bt = F(jt | 0, pn | 0, 18, 0) | 0;
          un = l;
          Ft = G(an | 0, Ct | 0, jt | 0, pn | 0) | 0;
          pn = G(Ft | 0, l | 0, bt | 0, un | 0) | 0;
          i[(un = w) >> 2] = pn;
          i[un + 4 >> 2] = l;
          pn = i[(un = j) >> 2] | 0;
          bt = i[un + 4 >> 2] | 0;
          Ft = i[(un = Y) >> 2] | 0;
          jt = i[un + 4 >> 2] | 0;
          un = F(pn | 0, bt | 0, 18, 0) | 0;
          Ct = l;
          an = G(Ft | 0, jt | 0, pn | 0, bt | 0) | 0;
          bt = G(an | 0, l | 0, un | 0, Ct | 0) | 0;
          i[(Ct = Y) >> 2] = bt;
          i[Ct + 4 >> 2] = l;
          bt = i[(Ct = K) >> 2] | 0;
          un = i[Ct + 4 >> 2] | 0;
          an = i[(Ct = W) >> 2] | 0;
          pn = i[Ct + 4 >> 2] | 0;
          Ct = F(bt | 0, un | 0, 18, 0) | 0;
          jt = l;
          Ft = G(an | 0, pn | 0, bt | 0, un | 0) | 0;
          un = G(Ft | 0, l | 0, Ct | 0, jt | 0) | 0;
          i[(jt = W) >> 2] = un;
          i[jt + 4 >> 2] = l;
          un = i[(jt = V) >> 2] | 0;
          Ct = i[jt + 4 >> 2] | 0;
          Ft = i[(jt = H) >> 2] | 0;
          bt = i[jt + 4 >> 2] | 0;
          jt = F(un | 0, Ct | 0, 18, 0) | 0;
          pn = l;
          an = G(Ft | 0, bt | 0, un | 0, Ct | 0) | 0;
          Ct = G(an | 0, l | 0, jt | 0, pn | 0) | 0;
          i[(pn = H) >> 2] = Ct;
          i[pn + 4 >> 2] = l;
          Ct = i[(pn = $) >> 2] | 0;
          jt = i[pn + 4 >> 2] | 0;
          an = i[(pn = Oe) >> 2] | 0;
          un = i[pn + 4 >> 2] | 0;
          pn = F(Ct | 0, jt | 0, 18, 0) | 0;
          bt = l;
          Ft = G(an | 0, un | 0, Ct | 0, jt | 0) | 0;
          jt = G(Ft | 0, l | 0, pn | 0, bt | 0) | 0;
          bt = l;
          i[(pn = Oe) >> 2] = jt;
          i[pn + 4 >> 2] = bt;
          i[(pn = $) >> 2] = 0;
          i[pn + 4 >> 2] = 0;
          pn = bt;
          bt = jt;
          jt = 0;
          do {
            an = k(bt | 0, pn | 0, (un = B((Ct = L((Ft = G(pn >> 31 >>> 6 | 0, 0, bt | 0, pn | 0) | 0) | 0, l | 0, 26) | 0) | 0, (Ft = l) | 0, 26) | 0) | 0, l | 0) | 0;
            i[(un = Oe + (jt << 3) | 0) >> 2] = an;
            i[un + 4 >> 2] = l;
            on = k((Ht = G(Ct | 0, Ft | 0, i[(an = un = Oe + ((jt | 1) << 3) | 0) >> 2] | 0, i[an + 4 >> 2] | 0) | 0) | 0, (an = l) | 0, (vt = B((Ct = L((Ft = G(an >> 31 >>> 7 | 0, 0, Ht | 0, an | 0) | 0) | 0, l | 0, 25) | 0) | 0, (Ft = l) | 0, 25) | 0) | 0, l | 0) | 0;
            i[(vt = un) >> 2] = on;
            i[vt + 4 >> 2] = l;
            bt = G(Ct | 0, Ft | 0, i[(on = vt = Oe + ((jt = jt + 2 | 0) << 3) | 0) >> 2] | 0, i[on + 4 >> 2] | 0) | 0;
            pn = l;
            i[(on = vt) >> 2] = bt;
            i[on + 4 >> 2] = pn;
          } while (jt >>> 0 < 10);
          pn = i[(jt = $) >> 2] | 0;
          bt = i[jt + 4 >> 2] | 0;
          fn = i[(jt = Oe) >> 2] | 0;
          ht = i[jt + 4 >> 2] | 0;
          jt = F(pn | 0, bt | 0, 18, 0) | 0;
          St = l;
          Pt = G(fn | 0, ht | 0, pn | 0, bt | 0) | 0;
          bt = G(Pt | 0, l | 0, jt | 0, St | 0) | 0;
          St = l;
          i[(jt = $) >> 2] = 0;
          i[jt + 4 >> 2] = 0;
          ht = k(bt | 0, St | 0, (pn = B((Pt = L((jt = G(St >> 31 >>> 6 | 0, 0, bt | 0, St | 0) | 0) | 0, l | 0, 26) | 0) | 0, (jt = l) | 0, 26) | 0) | 0, l | 0) | 0;
          i[(pn = Oe) >> 2] = ht;
          i[pn + 4 >> 2] = l;
          ht = G(Pt | 0, jt | 0, i[(pn = H) >> 2] | 0, i[pn + 4 >> 2] | 0) | 0;
          i[(pn = H) >> 2] = ht;
          i[pn + 4 >> 2] = l;
          Ke = Re;
          t = (Ye = it) + 80 | 0;
          do {
            i[Ye >> 2] = i[Ke >> 2];
            Ye = Ye + 4 | 0;
            Ke = Ke + 4 | 0;
          } while ((Ye | 0) < (t | 0));
          Ke = Oe;
          t = (Ye = ot) + 80 | 0;
          do {
            i[Ye >> 2] = i[Ke >> 2];
            Ye = Ye + 4 | 0;
            Ke = Ke + 4 | 0;
          } while ((Ye | 0) < (t | 0));
          P(be, st);
          P(Ce, ut);
          C(lt, be, Ce);
          ht = i[(pn = lt + 144 | 0) >> 2] | 0;
          jt = i[pn + 4 >> 2] | 0;
          St = i[(Pt = pn = lt + 64 | 0) >> 2] | 0;
          bt = i[Pt + 4 >> 2] | 0;
          Pt = F(ht | 0, jt | 0, 18, 0) | 0;
          fn = l;
          on = G(St | 0, bt | 0, ht | 0, jt | 0) | 0;
          jt = G(on | 0, l | 0, Pt | 0, fn | 0) | 0;
          i[(fn = pn) >> 2] = jt;
          i[fn + 4 >> 2] = l;
          jt = i[(fn = lt + 136 | 0) >> 2] | 0;
          pn = i[fn + 4 >> 2] | 0;
          on = i[(Pt = fn = lt + 56 | 0) >> 2] | 0;
          ht = i[Pt + 4 >> 2] | 0;
          Pt = F(jt | 0, pn | 0, 18, 0) | 0;
          bt = l;
          St = G(on | 0, ht | 0, jt | 0, pn | 0) | 0;
          pn = G(St | 0, l | 0, Pt | 0, bt | 0) | 0;
          i[(bt = fn) >> 2] = pn;
          i[bt + 4 >> 2] = l;
          pn = i[(bt = lt + 128 | 0) >> 2] | 0;
          fn = i[bt + 4 >> 2] | 0;
          St = i[(Pt = bt = lt + 48 | 0) >> 2] | 0;
          jt = i[Pt + 4 >> 2] | 0;
          Pt = F(pn | 0, fn | 0, 18, 0) | 0;
          ht = l;
          on = G(St | 0, jt | 0, pn | 0, fn | 0) | 0;
          fn = G(on | 0, l | 0, Pt | 0, ht | 0) | 0;
          i[(ht = bt) >> 2] = fn;
          i[ht + 4 >> 2] = l;
          fn = i[(ht = lt + 120 | 0) >> 2] | 0;
          bt = i[ht + 4 >> 2] | 0;
          on = i[(Pt = ht = lt + 40 | 0) >> 2] | 0;
          pn = i[Pt + 4 >> 2] | 0;
          Pt = F(fn | 0, bt | 0, 18, 0) | 0;
          jt = l;
          St = G(on | 0, pn | 0, fn | 0, bt | 0) | 0;
          bt = G(St | 0, l | 0, Pt | 0, jt | 0) | 0;
          i[(jt = ht) >> 2] = bt;
          i[jt + 4 >> 2] = l;
          bt = i[(jt = lt + 112 | 0) >> 2] | 0;
          ht = i[jt + 4 >> 2] | 0;
          St = i[(Pt = jt = lt + 32 | 0) >> 2] | 0;
          fn = i[Pt + 4 >> 2] | 0;
          Pt = F(bt | 0, ht | 0, 18, 0) | 0;
          pn = l;
          on = G(St | 0, fn | 0, bt | 0, ht | 0) | 0;
          ht = G(on | 0, l | 0, Pt | 0, pn | 0) | 0;
          i[(pn = jt) >> 2] = ht;
          i[pn + 4 >> 2] = l;
          ht = i[(pn = lt + 104 | 0) >> 2] | 0;
          jt = i[pn + 4 >> 2] | 0;
          on = i[(Pt = pn = lt + 24 | 0) >> 2] | 0;
          bt = i[Pt + 4 >> 2] | 0;
          Pt = F(ht | 0, jt | 0, 18, 0) | 0;
          fn = l;
          St = G(on | 0, bt | 0, ht | 0, jt | 0) | 0;
          jt = G(St | 0, l | 0, Pt | 0, fn | 0) | 0;
          i[(fn = pn) >> 2] = jt;
          i[fn + 4 >> 2] = l;
          jt = i[(fn = lt + 96 | 0) >> 2] | 0;
          pn = i[fn + 4 >> 2] | 0;
          St = i[(Pt = fn = lt + 16 | 0) >> 2] | 0;
          ht = i[Pt + 4 >> 2] | 0;
          Pt = F(jt | 0, pn | 0, 18, 0) | 0;
          bt = l;
          on = G(St | 0, ht | 0, jt | 0, pn | 0) | 0;
          pn = G(on | 0, l | 0, Pt | 0, bt | 0) | 0;
          i[(bt = fn) >> 2] = pn;
          i[bt + 4 >> 2] = l;
          pn = i[(bt = lt + 88 | 0) >> 2] | 0;
          fn = i[bt + 4 >> 2] | 0;
          on = i[(Pt = bt = lt + 8 | 0) >> 2] | 0;
          jt = i[Pt + 4 >> 2] | 0;
          Pt = F(pn | 0, fn | 0, 18, 0) | 0;
          ht = l;
          St = G(on | 0, jt | 0, pn | 0, fn | 0) | 0;
          fn = G(St | 0, l | 0, Pt | 0, ht | 0) | 0;
          i[(ht = bt) >> 2] = fn;
          i[ht + 4 >> 2] = l;
          Pt = i[(fn = ht = lt + 80 | 0) >> 2] | 0;
          St = i[fn + 4 >> 2] | 0;
          pn = i[(fn = lt) >> 2] | 0;
          jt = i[fn + 4 >> 2] | 0;
          fn = F(Pt | 0, St | 0, 18, 0) | 0;
          on = l;
          vt = G(pn | 0, jt | 0, Pt | 0, St | 0) | 0;
          St = G(vt | 0, l | 0, fn | 0, on | 0) | 0;
          on = l;
          i[(fn = lt) >> 2] = St;
          i[fn + 4 >> 2] = on;
          i[(fn = ht) >> 2] = 0;
          i[fn + 4 >> 2] = 0;
          fn = on;
          on = St;
          St = 0;
          do {
            pn = k(on | 0, fn | 0, (jt = B((Pt = L((vt = G(fn >> 31 >>> 6 | 0, 0, on | 0, fn | 0) | 0) | 0, l | 0, 26) | 0) | 0, (vt = l) | 0, 26) | 0) | 0, l | 0) | 0;
            i[(jt = lt + (St << 3) | 0) >> 2] = pn;
            i[jt + 4 >> 2] = l;
            un = k((Ft = G(Pt | 0, vt | 0, i[(pn = jt = lt + ((St | 1) << 3) | 0) >> 2] | 0, i[pn + 4 >> 2] | 0) | 0) | 0, (pn = l) | 0, (Ct = B((Pt = L((vt = G(pn >> 31 >>> 7 | 0, 0, Ft | 0, pn | 0) | 0) | 0, l | 0, 25) | 0) | 0, (vt = l) | 0, 25) | 0) | 0, l | 0) | 0;
            i[(Ct = jt) >> 2] = un;
            i[Ct + 4 >> 2] = l;
            on = G(Pt | 0, vt | 0, i[(un = Ct = lt + ((St = St + 2 | 0) << 3) | 0) >> 2] | 0, i[un + 4 >> 2] | 0) | 0;
            fn = l;
            i[(un = Ct) >> 2] = on;
            i[un + 4 >> 2] = fn;
          } while (St >>> 0 < 10);
          fn = i[(St = ht) >> 2] | 0;
          on = i[St + 4 >> 2] | 0;
          un = i[(St = lt) >> 2] | 0;
          Ct = i[St + 4 >> 2] | 0;
          St = F(fn | 0, on | 0, 18, 0) | 0;
          vt = l;
          Pt = G(un | 0, Ct | 0, fn | 0, on | 0) | 0;
          on = G(Pt | 0, l | 0, St | 0, vt | 0) | 0;
          vt = l;
          i[(St = ht) >> 2] = 0;
          i[St + 4 >> 2] = 0;
          Ct = k(on | 0, vt | 0, (fn = B((Pt = L((St = G(vt >> 31 >>> 6 | 0, 0, on | 0, vt | 0) | 0) | 0, l | 0, 26) | 0) | 0, (St = l) | 0, 26) | 0) | 0, l | 0) | 0;
          i[(fn = lt) >> 2] = Ct;
          i[fn + 4 >> 2] = l;
          Ct = G(Pt | 0, St | 0, i[(fn = bt) >> 2] | 0, i[fn + 4 >> 2] | 0) | 0;
          i[(fn = bt) >> 2] = Ct;
          i[fn + 4 >> 2] = l;
          Pt = k((Ct = i[(fn = be) >> 2] | 0) | 0, (St = i[fn + 4 >> 2] | 0) | 0, i[(fn = Ce) >> 2] | 0, i[fn + 4 >> 2] | 0) | 0;
          fn = l;
          i[(vt = Ce) >> 2] = Pt;
          i[vt + 4 >> 2] = fn;
          jt = k((on = i[(vt = J) >> 2] | 0) | 0, (un = i[vt + 4 >> 2] | 0) | 0, i[(vt = Q) >> 2] | 0, i[vt + 4 >> 2] | 0) | 0;
          vt = l;
          i[(pn = Q) >> 2] = jt;
          i[pn + 4 >> 2] = vt;
          Ht = k((Ft = i[(pn = X) >> 2] | 0) | 0, (an = i[pn + 4 >> 2] | 0) | 0, i[(pn = Z) >> 2] | 0, i[pn + 4 >> 2] | 0) | 0;
          pn = l;
          i[(Gt = Z) >> 2] = Ht;
          i[Gt + 4 >> 2] = pn;
          Jt = k((kt = i[(Gt = ee) >> 2] | 0) | 0, (Lt = i[Gt + 4 >> 2] | 0) | 0, i[(Gt = te) >> 2] | 0, i[Gt + 4 >> 2] | 0) | 0;
          Gt = l;
          i[(qt = te) >> 2] = Jt;
          i[qt + 4 >> 2] = Gt;
          Rt = k((sn = i[(qt = ne) >> 2] | 0) | 0, (zt = i[qt + 4 >> 2] | 0) | 0, i[(qt = re) >> 2] | 0, i[qt + 4 >> 2] | 0) | 0;
          qt = l;
          i[(xt = re) >> 2] = Rt;
          i[xt + 4 >> 2] = qt;
          ln = k(($t = i[(xt = ie) >> 2] | 0) | 0, (nn = i[xt + 4 >> 2] | 0) | 0, i[(xt = ae) >> 2] | 0, i[xt + 4 >> 2] | 0) | 0;
          xt = l;
          i[(Tt = ae) >> 2] = ln;
          i[Tt + 4 >> 2] = xt;
          yt = k((At = i[(Tt = oe) >> 2] | 0) | 0, (_t = i[Tt + 4 >> 2] | 0) | 0, i[(Tt = se) >> 2] | 0, i[Tt + 4 >> 2] | 0) | 0;
          Tt = l;
          i[(tn = se) >> 2] = yt;
          i[tn + 4 >> 2] = Tt;
          Nt = k((Yt = i[(tn = le) >> 2] | 0) | 0, (It = i[tn + 4 >> 2] | 0) | 0, i[(tn = ue) >> 2] | 0, i[tn + 4 >> 2] | 0) | 0;
          tn = l;
          i[(rn = ue) >> 2] = Nt;
          i[rn + 4 >> 2] = tn;
          gt = k((Ut = i[(rn = ce) >> 2] | 0) | 0, (Vt = i[rn + 4 >> 2] | 0) | 0, i[(rn = de) >> 2] | 0, i[rn + 4 >> 2] | 0) | 0;
          rn = l;
          i[(Zt = de) >> 2] = gt;
          i[Zt + 4 >> 2] = rn;
          wt = k((Qt = i[(Zt = pe) >> 2] | 0) | 0, (mt = i[Zt + 4 >> 2] | 0) | 0, i[(Zt = fe) >> 2] | 0, i[Zt + 4 >> 2] | 0) | 0;
          Zt = l;
          i[(Xt = fe) >> 2] = wt;
          i[Xt + 4 >> 2] = Zt;
          t = (Ye = _e) + 72 | 0;
          do {
            i[Ye >> 2] = 0;
            Ye = Ye + 4 | 0;
          } while ((Ye | 0) < (t | 0));
          bt = F(Pt | 0, fn | 0, 121665, 0) | 0;
          ht = l;
          i[(Xt = Ae) >> 2] = bt;
          i[Xt + 4 >> 2] = ht;
          Xt = F(jt | 0, vt | 0, 121665, 0) | 0;
          i[(Et = ge) >> 2] = Xt;
          i[Et + 4 >> 2] = l;
          Et = F(Ht | 0, pn | 0, 121665, 0) | 0;
          i[(Xt = me) >> 2] = Et;
          i[Xt + 4 >> 2] = l;
          Xt = F(Jt | 0, Gt | 0, 121665, 0) | 0;
          i[(Et = he) >> 2] = Xt;
          i[Et + 4 >> 2] = l;
          Et = F(Rt | 0, qt | 0, 121665, 0) | 0;
          i[(Xt = ye) >> 2] = Et;
          i[Xt + 4 >> 2] = l;
          Xt = F(ln | 0, xt | 0, 121665, 0) | 0;
          i[(Et = Ee) >> 2] = Xt;
          i[Et + 4 >> 2] = l;
          Et = F(yt | 0, Tt | 0, 121665, 0) | 0;
          i[(Xt = Se) >> 2] = Et;
          i[Xt + 4 >> 2] = l;
          Xt = F(Nt | 0, tn | 0, 121665, 0) | 0;
          i[(Et = ve) >> 2] = Xt;
          i[Et + 4 >> 2] = l;
          Et = F(gt | 0, rn | 0, 121665, 0) | 0;
          i[(Xt = Te) >> 2] = Et;
          i[Xt + 4 >> 2] = l;
          Xt = F(wt | 0, Zt | 0, 121665, 0) | 0;
          i[(Et = Me) >> 2] = Xt;
          i[Et + 4 >> 2] = l;
          i[(Et = _e) >> 2] = 0;
          i[Et + 4 >> 2] = 0;
          Et = ht;
          ht = bt;
          bt = 0;
          do {
            Bt = k(ht | 0, Et | 0, (Wt = B((Kt = L((Xt = G(Et >> 31 >>> 6 | 0, 0, ht | 0, Et | 0) | 0) | 0, l | 0, 26) | 0) | 0, (Xt = l) | 0, 26) | 0) | 0, l | 0) | 0;
            i[(Wt = Ae + (bt << 3) | 0) >> 2] = Bt;
            i[Wt + 4 >> 2] = l;
            cn = k((Ot = G(Kt | 0, Xt | 0, i[(Bt = Wt = Ae + ((bt | 1) << 3) | 0) >> 2] | 0, i[Bt + 4 >> 2] | 0) | 0) | 0, (Bt = l) | 0, (dn = B((Kt = L((Xt = G(Bt >> 31 >>> 7 | 0, 0, Ot | 0, Bt | 0) | 0) | 0, l | 0, 25) | 0) | 0, (Xt = l) | 0, 25) | 0) | 0, l | 0) | 0;
            i[(dn = Wt) >> 2] = cn;
            i[dn + 4 >> 2] = l;
            ht = G(Kt | 0, Xt | 0, i[(cn = dn = Ae + ((bt = bt + 2 | 0) << 3) | 0) >> 2] | 0, i[cn + 4 >> 2] | 0) | 0;
            Et = l;
            i[(cn = dn) >> 2] = ht;
            i[cn + 4 >> 2] = Et;
          } while (bt >>> 0 < 10);
          Et = i[(bt = _e) >> 2] | 0;
          ht = i[bt + 4 >> 2] | 0;
          Zt = i[(bt = Ae) >> 2] | 0;
          wt = i[bt + 4 >> 2] | 0;
          bt = F(Et | 0, ht | 0, 18, 0) | 0;
          rn = l;
          gt = G(Zt | 0, wt | 0, Et | 0, ht | 0) | 0;
          ht = G(gt | 0, l | 0, bt | 0, rn | 0) | 0;
          rn = l;
          i[(bt = _e) >> 2] = 0;
          i[bt + 4 >> 2] = 0;
          Et = B((gt = L((bt = G(rn >> 31 >>> 6 | 0, 0, ht | 0, rn | 0) | 0) | 0, l | 0, 26) | 0) | 0, (bt = l) | 0, 26) | 0;
          wt = l;
          tn = i[(Zt = ge) >> 2] | 0;
          Nt = i[Zt + 4 >> 2] | 0;
          rn = k((Zt = G(ht | 0, rn | 0, Ct | 0, St | 0) | 0) | 0, l | 0, Et | 0, wt | 0) | 0;
          i[(wt = Ae) >> 2] = rn;
          i[wt + 4 >> 2] = l;
          wt = G(tn | 0, Nt | 0, on | 0, un | 0) | 0;
          Nt = G(wt | 0, l | 0, gt | 0, bt | 0) | 0;
          i[(bt = ge) >> 2] = Nt;
          i[bt + 4 >> 2] = l;
          Nt = G(i[(bt = me) >> 2] | 0, i[bt + 4 >> 2] | 0, Ft | 0, an | 0) | 0;
          i[(bt = me) >> 2] = Nt;
          i[bt + 4 >> 2] = l;
          Nt = G(i[(bt = he) >> 2] | 0, i[bt + 4 >> 2] | 0, kt | 0, Lt | 0) | 0;
          i[(bt = he) >> 2] = Nt;
          i[bt + 4 >> 2] = l;
          Nt = G(i[(bt = ye) >> 2] | 0, i[bt + 4 >> 2] | 0, sn | 0, zt | 0) | 0;
          i[(bt = ye) >> 2] = Nt;
          i[bt + 4 >> 2] = l;
          Nt = G(i[(bt = Ee) >> 2] | 0, i[bt + 4 >> 2] | 0, $t | 0, nn | 0) | 0;
          i[(bt = Ee) >> 2] = Nt;
          i[bt + 4 >> 2] = l;
          Nt = G(i[(bt = Se) >> 2] | 0, i[bt + 4 >> 2] | 0, At | 0, _t | 0) | 0;
          i[(bt = Se) >> 2] = Nt;
          i[bt + 4 >> 2] = l;
          Nt = G(i[(bt = ve) >> 2] | 0, i[bt + 4 >> 2] | 0, Yt | 0, It | 0) | 0;
          i[(bt = ve) >> 2] = Nt;
          i[bt + 4 >> 2] = l;
          Nt = G(i[(bt = Te) >> 2] | 0, i[bt + 4 >> 2] | 0, Ut | 0, Vt | 0) | 0;
          i[(bt = Te) >> 2] = Nt;
          i[bt + 4 >> 2] = l;
          Nt = G(i[(bt = Me) >> 2] | 0, i[bt + 4 >> 2] | 0, Qt | 0, mt | 0) | 0;
          i[(bt = Me) >> 2] = Nt;
          i[bt + 4 >> 2] = l;
          C(ct, Ce, Ae);
          Nt = i[(bt = ct + 144 | 0) >> 2] | 0;
          gt = i[bt + 4 >> 2] | 0;
          tn = i[(wt = bt = ct + 64 | 0) >> 2] | 0;
          rn = i[wt + 4 >> 2] | 0;
          wt = F(Nt | 0, gt | 0, 18, 0) | 0;
          Et = l;
          Zt = G(tn | 0, rn | 0, Nt | 0, gt | 0) | 0;
          gt = G(Zt | 0, l | 0, wt | 0, Et | 0) | 0;
          i[(Et = bt) >> 2] = gt;
          i[Et + 4 >> 2] = l;
          gt = i[(Et = ct + 136 | 0) >> 2] | 0;
          bt = i[Et + 4 >> 2] | 0;
          Zt = i[(wt = Et = ct + 56 | 0) >> 2] | 0;
          Nt = i[wt + 4 >> 2] | 0;
          wt = F(gt | 0, bt | 0, 18, 0) | 0;
          rn = l;
          tn = G(Zt | 0, Nt | 0, gt | 0, bt | 0) | 0;
          bt = G(tn | 0, l | 0, wt | 0, rn | 0) | 0;
          i[(rn = Et) >> 2] = bt;
          i[rn + 4 >> 2] = l;
          bt = i[(rn = ct + 128 | 0) >> 2] | 0;
          Et = i[rn + 4 >> 2] | 0;
          tn = i[(wt = rn = ct + 48 | 0) >> 2] | 0;
          gt = i[wt + 4 >> 2] | 0;
          wt = F(bt | 0, Et | 0, 18, 0) | 0;
          Nt = l;
          Zt = G(tn | 0, gt | 0, bt | 0, Et | 0) | 0;
          Et = G(Zt | 0, l | 0, wt | 0, Nt | 0) | 0;
          i[(Nt = rn) >> 2] = Et;
          i[Nt + 4 >> 2] = l;
          Et = i[(Nt = ct + 120 | 0) >> 2] | 0;
          rn = i[Nt + 4 >> 2] | 0;
          Zt = i[(wt = Nt = ct + 40 | 0) >> 2] | 0;
          bt = i[wt + 4 >> 2] | 0;
          wt = F(Et | 0, rn | 0, 18, 0) | 0;
          gt = l;
          tn = G(Zt | 0, bt | 0, Et | 0, rn | 0) | 0;
          rn = G(tn | 0, l | 0, wt | 0, gt | 0) | 0;
          i[(gt = Nt) >> 2] = rn;
          i[gt + 4 >> 2] = l;
          rn = i[(gt = ct + 112 | 0) >> 2] | 0;
          Nt = i[gt + 4 >> 2] | 0;
          tn = i[(wt = gt = ct + 32 | 0) >> 2] | 0;
          Et = i[wt + 4 >> 2] | 0;
          wt = F(rn | 0, Nt | 0, 18, 0) | 0;
          bt = l;
          Zt = G(tn | 0, Et | 0, rn | 0, Nt | 0) | 0;
          Nt = G(Zt | 0, l | 0, wt | 0, bt | 0) | 0;
          i[(bt = gt) >> 2] = Nt;
          i[bt + 4 >> 2] = l;
          Nt = i[(bt = ct + 104 | 0) >> 2] | 0;
          gt = i[bt + 4 >> 2] | 0;
          Zt = i[(wt = bt = ct + 24 | 0) >> 2] | 0;
          rn = i[wt + 4 >> 2] | 0;
          wt = F(Nt | 0, gt | 0, 18, 0) | 0;
          Et = l;
          tn = G(Zt | 0, rn | 0, Nt | 0, gt | 0) | 0;
          gt = G(tn | 0, l | 0, wt | 0, Et | 0) | 0;
          i[(Et = bt) >> 2] = gt;
          i[Et + 4 >> 2] = l;
          gt = i[(Et = ct + 96 | 0) >> 2] | 0;
          bt = i[Et + 4 >> 2] | 0;
          tn = i[(wt = Et = ct + 16 | 0) >> 2] | 0;
          Nt = i[wt + 4 >> 2] | 0;
          wt = F(gt | 0, bt | 0, 18, 0) | 0;
          rn = l;
          Zt = G(tn | 0, Nt | 0, gt | 0, bt | 0) | 0;
          bt = G(Zt | 0, l | 0, wt | 0, rn | 0) | 0;
          i[(rn = Et) >> 2] = bt;
          i[rn + 4 >> 2] = l;
          bt = i[(rn = ct + 88 | 0) >> 2] | 0;
          Et = i[rn + 4 >> 2] | 0;
          Zt = i[(wt = rn = ct + 8 | 0) >> 2] | 0;
          gt = i[wt + 4 >> 2] | 0;
          wt = F(bt | 0, Et | 0, 18, 0) | 0;
          Nt = l;
          tn = G(Zt | 0, gt | 0, bt | 0, Et | 0) | 0;
          Et = G(tn | 0, l | 0, wt | 0, Nt | 0) | 0;
          i[(Nt = rn) >> 2] = Et;
          i[Nt + 4 >> 2] = l;
          wt = i[(Et = Nt = ct + 80 | 0) >> 2] | 0;
          tn = i[Et + 4 >> 2] | 0;
          bt = i[(Et = ct) >> 2] | 0;
          gt = i[Et + 4 >> 2] | 0;
          Et = F(wt | 0, tn | 0, 18, 0) | 0;
          Zt = l;
          ht = G(bt | 0, gt | 0, wt | 0, tn | 0) | 0;
          tn = G(ht | 0, l | 0, Et | 0, Zt | 0) | 0;
          Zt = l;
          i[(Et = ct) >> 2] = tn;
          i[Et + 4 >> 2] = Zt;
          i[(Et = Nt) >> 2] = 0;
          i[Et + 4 >> 2] = 0;
          Et = Zt;
          Zt = tn;
          tn = 0;
          do {
            bt = k(Zt | 0, Et | 0, (gt = B((wt = L((ht = G(Et >> 31 >>> 6 | 0, 0, Zt | 0, Et | 0) | 0) | 0, l | 0, 26) | 0) | 0, (ht = l) | 0, 26) | 0) | 0, l | 0) | 0;
            i[(gt = ct + (tn << 3) | 0) >> 2] = bt;
            i[gt + 4 >> 2] = l;
            xt = k((Tt = G(wt | 0, ht | 0, i[(bt = gt = ct + ((tn | 1) << 3) | 0) >> 2] | 0, i[bt + 4 >> 2] | 0) | 0) | 0, (bt = l) | 0, (yt = B((wt = L((ht = G(bt >> 31 >>> 7 | 0, 0, Tt | 0, bt | 0) | 0) | 0, l | 0, 25) | 0) | 0, (ht = l) | 0, 25) | 0) | 0, l | 0) | 0;
            i[(yt = gt) >> 2] = xt;
            i[yt + 4 >> 2] = l;
            Zt = G(wt | 0, ht | 0, i[(xt = yt = ct + ((tn = tn + 2 | 0) << 3) | 0) >> 2] | 0, i[xt + 4 >> 2] | 0) | 0;
            Et = l;
            i[(xt = yt) >> 2] = Zt;
            i[xt + 4 >> 2] = Et;
          } while (tn >>> 0 < 10);
          Et = i[(tn = Nt) >> 2] | 0;
          Zt = i[tn + 4 >> 2] | 0;
          mt = i[(tn = ct) >> 2] | 0;
          Qt = i[tn + 4 >> 2] | 0;
          tn = F(Et | 0, Zt | 0, 18, 0) | 0;
          Vt = l;
          Ut = G(mt | 0, Qt | 0, Et | 0, Zt | 0) | 0;
          Zt = G(Ut | 0, l | 0, tn | 0, Vt | 0) | 0;
          Vt = l;
          i[(tn = Nt) >> 2] = 0;
          i[tn + 4 >> 2] = 0;
          Qt = k(Zt | 0, Vt | 0, (Et = B((Ut = L((tn = G(Vt >> 31 >>> 6 | 0, 0, Zt | 0, Vt | 0) | 0) | 0, l | 0, 26) | 0) | 0, (tn = l) | 0, 26) | 0) | 0, l | 0) | 0;
          i[(Et = ct) >> 2] = Qt;
          i[Et + 4 >> 2] = l;
          Qt = G(Ut | 0, tn | 0, i[(Et = rn) >> 2] | 0, i[Et + 4 >> 2] | 0) | 0;
          i[(Et = rn) >> 2] = Qt;
          i[Et + 4 >> 2] = l;
          Et = 0;
          do {
            Ut = i[(tn = Qt = lt + (Et << 3) | 0) >> 2] | 0;
            Vt = i[tn + 4 >> 2] | 0;
            mt = i[(Zt = tn = it + (Et << 3) | 0) >> 2] | 0;
            Yt = ((It = i[Zt + 4 >> 2] | 0) ^ Vt) & ft;
            Vt = L(0, (Zt = (mt ^ Ut) & pt) ^ Ut | 0, 32) | 0;
            i[(Ut = Qt) >> 2] = Vt;
            i[Ut + 4 >> 2] = l;
            Ut = L(0, Zt ^ mt | 0, 32) | 0;
            i[(mt = tn) >> 2] = Ut;
            i[mt + 4 >> 2] = l;
            Et = Et + 1 | 0;
          } while ((Et | 0) != 10);
          _n = 0;
          do {
            Nt = i[(rn = Et = ct + (_n << 3) | 0) >> 2] | 0;
            mt = i[rn + 4 >> 2] | 0;
            tn = i[(Ut = rn = ot + (_n << 3) | 0) >> 2] | 0;
            Vt = ((Zt = i[Ut + 4 >> 2] | 0) ^ mt) & ft;
            mt = L(0, (Ut = (tn ^ Nt) & pt) ^ Nt | 0, 32) | 0;
            i[(Nt = Et) >> 2] = mt;
            i[Nt + 4 >> 2] = l;
            Nt = L(0, Ut ^ tn | 0, 32) | 0;
            i[(tn = rn) >> 2] = Nt;
            i[tn + 4 >> 2] = l;
            _n = _n + 1 | 0;
          } while ((_n | 0) != 10);
          if (((nt = nt + 1 | 0) | 0) == 8) {
            gn = rt;
            mn = it;
            hn = at;
            yn = ot;
            En = st;
            Sn = lt;
            vn = ut;
            Tn = ct;
            break;
          }
          ft = ct;
          pt = lt;
          tn = ot;
          Nt = it;
          xe = dt << 1 & 255;
          ct = ut;
          ut = ft;
          lt = st;
          st = pt;
          ot = at;
          at = tn;
          it = rt;
          rt = Nt;
        }
        if (((rt = Qe + 1 | 0) | 0) == 32) {
          Mn = Sn;
          An = Tn;
          break;
        }
        Qe = rt;
        Xe = mn;
        Ze = gn;
        ke = yn;
        et = hn;
        Ge = Sn;
        tt = En;
        Ue = Tn;
        Le = vn;
      }
      Ke = Mn;
      t = (Ye = Be) + 80 | 0;
      do {
        i[Ye >> 2] = i[Ke >> 2];
        Ye = Ye + 4 | 0;
        Ke = Ke + 4 | 0;
      } while ((Ye | 0) < (t | 0));
      Ke = An;
      t = (Ye = Fe) + 80 | 0;
      do {
        i[Ye >> 2] = i[Ke >> 2];
        Ye = Ye + 4 | 0;
        Ke = Ke + 4 | 0;
      } while ((Ye | 0) < (t | 0));
      P(Ae, Fe);
      P(we, Ae);
      P(De, we);
      b(be, De, Fe);
      b(Ce, be, Ae);
      P(De, Ce);
      b(Pe, De, be);
      P(De, Pe);
      P(we, De);
      P(De, we);
      P(we, De);
      P(De, we);
      b(Oe, De, Pe);
      P(De, Oe);
      P(we, De);
      P(De, we);
      P(we, De);
      P(De, we);
      P(we, De);
      P(De, we);
      P(we, De);
      P(De, we);
      P(we, De);
      b(Ie, we, Oe);
      P(De, Ie);
      P(we, De);
      P(De, we);
      P(we, De);
      P(De, we);
      P(we, De);
      P(De, we);
      P(we, De);
      P(De, we);
      P(we, De);
      P(De, we);
      P(we, De);
      P(De, we);
      P(we, De);
      P(De, we);
      P(we, De);
      P(De, we);
      P(we, De);
      P(De, we);
      P(we, De);
      b(De, we, Ie);
      P(we, De);
      P(De, we);
      P(we, De);
      P(De, we);
      P(we, De);
      P(De, we);
      P(we, De);
      P(De, we);
      P(we, De);
      P(De, we);
      b(Re, De, Oe);
      P(De, Re);
      P(we, De);
      Oe = 2;
      do {
        P(De, we);
        P(we, De);
        Oe = Oe + 2 | 0;
      } while ((Oe | 0) < 50);
      b(Ne, we, Re);
      P(we, Ne);
      P(De, we);
      Oe = 2;
      do {
        P(we, De);
        P(De, we);
        Oe = Oe + 2 | 0;
      } while ((Oe | 0) < 100);
      b(we, De, Ne);
      P(De, we);
      P(we, De);
      Ne = 2;
      do {
        P(De, we);
        P(we, De);
        Ne = Ne + 2 | 0;
      } while ((Ne | 0) < 50);
      b(De, we, Re);
      P(we, De);
      P(De, we);
      P(we, De);
      P(De, we);
      P(we, De);
      b(je, we, Ce);
      b(Fe, Be, je);
      je = i[Fe >> 2] | 0;
      i[Ae >> 2] = je;
      i[(Be = Ae + 4 | 0) >> 2] = i[Fe + 8 >> 2];
      i[(Ce = Ae + 8 | 0) >> 2] = i[Fe + 16 >> 2];
      i[(we = Ae + 12 | 0) >> 2] = i[Fe + 24 >> 2];
      i[(De = Ae + 16 | 0) >> 2] = i[Fe + 32 >> 2];
      i[(Re = Ae + 20 | 0) >> 2] = i[Fe + 40 >> 2];
      i[(Ne = Ae + 24 | 0) >> 2] = i[Fe + 48 >> 2];
      i[(Oe = Ae + 28 | 0) >> 2] = i[Fe + 56 >> 2];
      i[(Ie = Ae + 32 | 0) >> 2] = i[Fe + 64 >> 2];
      i[(Pe = Ae + 36 | 0) >> 2] = i[Fe + 72 >> 2];
      Fe = je;
      je = 0;
      for (; be = Ae + (je << 2) | 0, Ke = Fe >> 31 & Fe, je & 1 ? (t = Ke >> 25, i[be >> 2] = (u(t, -33554432) | 0) + Fe, Mn = (i[(Ke = Ae + ((be = je + 1 | 0) << 2) | 0) >> 2] | 0) + t | 0, i[Ke >> 2] = Mn, bn = Mn, Cn = be) : (Ye = Ke >> 26, i[be >> 2] = (u(Ye, -67108864) | 0) + Fe, Mn = (i[(An = Ae + ((t = je + 1 | 0) << 2) | 0) >> 2] | 0) + Ye | 0, i[An >> 2] = Mn, bn = Mn, Cn = t), (Cn | 0) != 9;) {
        Fe = bn;
        je = Cn;
      }
      je = ((Cn = i[Pe >> 2] | 0) >> 31 & Cn) >> 25;
      i[Pe >> 2] = (u(je, -33554432) | 0) + Cn;
      Cn = (je * 19 | 0) + (i[Ae >> 2] | 0) | 0;
      i[Ae >> 2] = Cn;
      je = Cn;
      Cn = 0;
      for (; bn = Ae + (Cn << 2) | 0, Fe = je >> 31 & je, Cn & 1 ? (t = Fe >> 25, i[bn >> 2] = (u(t, -33554432) | 0) + je, Mn = (i[(Fe = Ae + ((bn = Cn + 1 | 0) << 2) | 0) >> 2] | 0) + t | 0, i[Fe >> 2] = Mn, Pn = bn, On = Mn) : (be = Fe >> 26, i[bn >> 2] = (u(be, -67108864) | 0) + je, t = (i[(Ke = Ae + ((Mn = Cn + 1 | 0) << 2) | 0) >> 2] | 0) + be | 0, i[Ke >> 2] = t, Pn = Mn, On = t), (Pn | 0) != 9;) {
        je = On;
        Cn = Pn;
      }
      Cn = ((Pn = i[Pe >> 2] | 0) >> 31 & Pn) >> 25;
      i[Pe >> 2] = (u(Cn, -33554432) | 0) + Pn;
      Pn = (Cn * 19 | 0) + (i[Ae >> 2] | 0) | 0;
      On = (u(Cn = (Pn >> 31 & Pn) >> 26, -67108864) | 0) + Pn | 0;
      i[Ae >> 2] = On;
      i[Be >> 2] = Cn + (i[Be >> 2] | 0);
      Cn = On;
      On = 0;
      for (; Pn = Ae + (On << 2) | 0, On & 1 ? (i[Pn >> 2] = Cn & 33554431, je = (i[(bn = Ae + ((Pn = On + 1 | 0) << 2) | 0) >> 2] | 0) + (Cn >> 25) | 0, i[bn >> 2] = je, In = Pn, Rn = je) : (i[Pn >> 2] = Cn & 67108863, bn = (i[(Mn = Ae + ((je = On + 1 | 0) << 2) | 0) >> 2] | 0) + (Cn >> 26) | 0, i[Mn >> 2] = bn, In = je, Rn = bn), (In | 0) != 9;) {
        Cn = Rn;
        On = In;
      }
      In = i[Pe >> 2] | 0;
      i[Pe >> 2] = In & 33554431;
      On = ((In >> 25) * 19 | 0) + (i[Ae >> 2] | 0) | 0;
      i[Ae >> 2] = On;
      In = On;
      On = 0;
      for (; Rn = Ae + (On << 2) | 0, On & 1 ? (i[Rn >> 2] = In & 33554431, Cn = (i[(Pn = Ae + ((Rn = On + 1 | 0) << 2) | 0) >> 2] | 0) + (In >> 25) | 0, i[Pn >> 2] = Cn, Nn = Rn, Dn = Cn) : (i[Rn >> 2] = In & 67108863, Pn = (i[(je = Ae + ((Cn = On + 1 | 0) << 2) | 0) >> 2] | 0) + (In >> 26) | 0, i[je >> 2] = Pn, Nn = Cn, Dn = Pn), (Nn | 0) != 9;) {
        In = Dn;
        On = Nn;
      }
      On = (Nn = i[Pe >> 2] | 0) & 33554431;
      i[Pe >> 2] = On;
      Dn = ((Nn >> 25) * 19 | 0) + (i[Ae >> 2] | 0) | 0;
      i[Ae >> 2] = Dn;
      Nn = 1;
      In = ~(Dn + -67108845 >> 31);
      for (;;) {
        Cn = i[Ae + (Nn << 2) >> 2] | 0;
        wn = Nn & 1 ? (Cn = (Pn = (Cn = (Pn = Cn << 16 & (Cn ^ -33554432)) << 8 & Pn) << 4 & Cn) << 2 & Pn) << 1 & Cn : (Pn = (Rn = (Pn = (Rn = Cn << 16 & (Cn ^ -67108864)) << 8 & Rn) << 4 & Pn) << 2 & Rn) << 1 & Pn;
        Cn = wn >> 31 & In;
        if (((Nn = Nn + 1 | 0) | 0) == 10) {
          Ln = Cn;
          break;
        }
        In = Cn;
      }
      In = Dn - (Ln & 67108845) | 0;
      i[Ae >> 2] = In;
      Ae = Ln & 67108863;
      Dn = Ln & 33554431;
      wn = (Nn = (i[Be >> 2] | 0) - Dn | 0) << 2;
      Pn = (Cn = (i[Ce >> 2] | 0) - Ae | 0) << 3;
      je = (Rn = (i[we >> 2] | 0) - Dn | 0) << 5;
      Ln = (bn = (i[De >> 2] | 0) - Ln | 0) << 6;
      Mn = (i[Re >> 2] | 0) - Dn | 0;
      i[Re >> 2] = Mn;
      Fe = (Re = (i[Ne >> 2] | 0) - Ae | 0) << 1;
      Ke = (t = (i[Oe >> 2] | 0) - Dn | 0) << 3;
      be = (i[Ie >> 2] | 0) - Ae << 4;
      i[Be >> 2] = wn;
      i[Ce >> 2] = Pn;
      i[we >> 2] = je;
      i[De >> 2] = Ln;
      i[Ne >> 2] = Fe;
      i[Oe >> 2] = Ke;
      i[Ie >> 2] = be;
      i[Pe >> 2] = On - Dn << 6;
      r[e >> 0] = In;
      r[e + 1 >> 0] = In >>> 8;
      r[e + 2 >> 0] = In >>> 16;
      r[e + 3 >> 0] = wn | In >>> 24;
      r[e + 4 >> 0] = Nn >>> 6;
      r[e + 5 >> 0] = Nn >>> 14;
      r[e + 6 >> 0] = Pn | Nn >>> 22;
      r[e + 7 >> 0] = Cn >>> 5;
      r[e + 8 >> 0] = Cn >>> 13;
      r[e + 9 >> 0] = je | Cn >>> 21;
      r[e + 10 >> 0] = Rn >>> 3;
      r[e + 11 >> 0] = Rn >>> 11;
      r[e + 12 >> 0] = Ln | Rn >>> 19;
      r[e + 13 >> 0] = bn >>> 2;
      r[e + 14 >> 0] = bn >>> 10;
      r[e + 15 >> 0] = bn >>> 18;
      r[e + 16 >> 0] = Mn;
      r[e + 17 >> 0] = Mn >>> 8;
      r[e + 18 >> 0] = Mn >>> 16;
      r[e + 19 >> 0] = Mn >>> 24 | Fe;
      r[e + 20 >> 0] = Re >>> 7;
      r[e + 21 >> 0] = Re >>> 15;
      r[e + 22 >> 0] = Re >>> 23 | Ke;
      r[e + 23 >> 0] = t >>> 5;
      r[e + 24 >> 0] = t >>> 13;
      Ke = i[Ie >> 2] | 0;
      r[e + 25 >> 0] = t >>> 21 | Ke;
      r[e + 26 >> 0] = Ke >>> 8;
      r[e + 27 >> 0] = Ke >>> 16;
      t = i[Pe >> 2] | 0;
      r[e + 28 >> 0] = Ke >>> 24 | t;
      r[e + 29 >> 0] = t >>> 8;
      r[e + 30 >> 0] = t >>> 16;
      r[e + 31 >> 0] = t >>> 24;
      o = s;
      return 0;
    },
    _free: function (e) {
      var t;
      var n;
      var r = 0;
      var a = 0;
      var o = 0;
      var s = 0;
      var l = 0;
      var u = 0;
      var c = 0;
      var d = 0;
      var p = 0;
      var f = 0;
      var _ = 0;
      var m = 0;
      var h = 0;
      var y = 0;
      var E = 0;
      var S = 0;
      var v = 0;
      var T = 0;
      var M = 0;
      var A = 0;
      var b = 0;
      var C = 0;
      var P = 0;
      var O = 0;
      var I = 0;
      var R = 0;
      var N = 0;
      var D = 0;
      var w = 0;
      var L = 0;
      var k = 0;
      var G = 0;
      var U = 0;
      var x = 0;
      if (e |= 0) {
        if ((r = e + -8 | 0) >>> 0 < (a = i[47] | 0) >>> 0) {
          g();
        }
        if (((e = (t = i[e + -4 >> 2] | 0) & 3) | 0) == 1) {
          g();
        }
        n = r + (o = t & -8) | 0;
        do {
          if (t & 1) {
            p = r;
            f = o;
          } else {
            s = i[r >> 2] | 0;
            if (!e) {
              return;
            }
            u = s + o | 0;
            if ((l = r + (0 - s) | 0) >>> 0 < a >>> 0) {
              g();
            }
            if ((l | 0) == (i[48] | 0)) {
              if (((d = i[(c = n + 4 | 0) >> 2] | 0) & 3 | 0) != 3) {
                p = l;
                f = u;
                break;
              }
              i[45] = u;
              i[c >> 2] = d & -2;
              i[l + 4 >> 2] = u | 1;
              return void (i[l + u >> 2] = u);
            }
            d = s >>> 3;
            if (s >>> 0 < 256) {
              s = i[l + 8 >> 2] | 0;
              c = i[l + 12 >> 2] | 0;
              if ((s | 0) != ((_ = 212 + (d << 1 << 2) | 0) | 0)) {
                if (s >>> 0 < a >>> 0) {
                  g();
                }
                if ((i[s + 12 >> 2] | 0) != (l | 0)) {
                  g();
                }
              }
              if ((c | 0) == (s | 0)) {
                i[43] = i[43] & ~(1 << d);
                p = l;
                f = u;
                break;
              }
              if ((c | 0) != (_ | 0)) {
                if (c >>> 0 < a >>> 0) {
                  g();
                }
                if ((i[(_ = c + 8 | 0) >> 2] | 0) == (l | 0)) {
                  m = _;
                } else {
                  g();
                }
              } else {
                m = c + 8 | 0;
              }
              i[s + 12 >> 2] = c;
              i[m >> 2] = s;
              p = l;
              f = u;
              break;
            }
            s = i[l + 24 >> 2] | 0;
            c = i[l + 12 >> 2] | 0;
            do {
              if ((c | 0) == (l | 0)) {
                if (h = i[(d = (_ = l + 16 | 0) + 4 | 0) >> 2] | 0) {
                  S = h;
                  v = d;
                } else {
                  if (!(y = i[_ >> 2] | 0)) {
                    E = 0;
                    break;
                  }
                  S = y;
                  v = _;
                }
                for (;;) {
                  if (h = i[(d = S + 20 | 0) >> 2] | 0) {
                    S = h;
                    v = d;
                  } else {
                    if (!(h = i[(d = S + 16 | 0) >> 2] | 0)) {
                      T = S;
                      M = v;
                      break;
                    }
                    S = h;
                    v = d;
                  }
                }
                if (!(M >>> 0 < a >>> 0)) {
                  i[M >> 2] = 0;
                  E = T;
                  break;
                }
                g();
              } else {
                if ((d = i[l + 8 >> 2] | 0) >>> 0 < a >>> 0) {
                  g();
                }
                if ((i[(h = d + 12 | 0) >> 2] | 0) != (l | 0)) {
                  g();
                }
                if ((i[(_ = c + 8 | 0) >> 2] | 0) == (l | 0)) {
                  i[h >> 2] = c;
                  i[_ >> 2] = d;
                  E = c;
                  break;
                }
                g();
              }
            } while (0);
            if (s) {
              c = i[l + 28 >> 2] | 0;
              if ((l | 0) == (i[(d = 476 + (c << 2) | 0) >> 2] | 0)) {
                i[d >> 2] = E;
                if (!E) {
                  i[44] = i[44] & ~(1 << c);
                  p = l;
                  f = u;
                  break;
                }
              } else {
                if (s >>> 0 < (i[47] | 0) >>> 0) {
                  g();
                }
                if ((i[(c = s + 16 | 0) >> 2] | 0) == (l | 0)) {
                  i[c >> 2] = E;
                } else {
                  i[s + 20 >> 2] = E;
                }
                if (!E) {
                  p = l;
                  f = u;
                  break;
                }
              }
              if (E >>> 0 < (c = i[47] | 0) >>> 0) {
                g();
              }
              i[E + 24 >> 2] = s;
              _ = i[(d = l + 16 | 0) >> 2] | 0;
              do {
                if (_) {
                  if (!(_ >>> 0 < c >>> 0)) {
                    i[E + 16 >> 2] = _;
                    i[_ + 24 >> 2] = E;
                    break;
                  }
                  g();
                }
              } while (0);
              if (_ = i[d + 4 >> 2] | 0) {
                if (!(_ >>> 0 < (i[47] | 0) >>> 0)) {
                  i[E + 20 >> 2] = _;
                  i[_ + 24 >> 2] = E;
                  p = l;
                  f = u;
                  break;
                }
                g();
              } else {
                p = l;
                f = u;
              }
            } else {
              p = l;
              f = u;
            }
          }
        } while (0);
        if (p >>> 0 >= n >>> 0) {
          g();
        }
        if (!((r = i[(o = n + 4 | 0) >> 2] | 0) & 1)) {
          g();
        }
        if (r & 2) {
          i[o >> 2] = r & -2;
          i[p + 4 >> 2] = f | 1;
          i[p + f >> 2] = f;
          R = f;
        } else {
          if ((n | 0) == (i[49] | 0)) {
            E = (i[46] | 0) + f | 0;
            i[46] = E;
            i[49] = p;
            i[p + 4 >> 2] = E | 1;
            if ((p | 0) != (i[48] | 0)) {
              return;
            }
            i[48] = 0;
            return void (i[45] = 0);
          }
          if ((n | 0) == (i[48] | 0)) {
            E = (i[45] | 0) + f | 0;
            i[45] = E;
            i[48] = p;
            i[p + 4 >> 2] = E | 1;
            return void (i[p + E >> 2] = E);
          }
          E = (r & -8) + f | 0;
          a = r >>> 3;
          do {
            if (r >>> 0 >= 256) {
              T = i[n + 24 >> 2] | 0;
              M = i[n + 12 >> 2] | 0;
              do {
                if ((M | 0) == (n | 0)) {
                  if (m = i[(S = (v = n + 16 | 0) + 4 | 0) >> 2] | 0) {
                    b = m;
                    C = S;
                  } else {
                    if (!(e = i[v >> 2] | 0)) {
                      A = 0;
                      break;
                    }
                    b = e;
                    C = v;
                  }
                  for (;;) {
                    if (m = i[(S = b + 20 | 0) >> 2] | 0) {
                      b = m;
                      C = S;
                    } else {
                      if (!(m = i[(S = b + 16 | 0) >> 2] | 0)) {
                        P = b;
                        O = C;
                        break;
                      }
                      b = m;
                      C = S;
                    }
                  }
                  if (!(O >>> 0 < (i[47] | 0) >>> 0)) {
                    i[O >> 2] = 0;
                    A = P;
                    break;
                  }
                  g();
                } else {
                  if ((S = i[n + 8 >> 2] | 0) >>> 0 < (i[47] | 0) >>> 0) {
                    g();
                  }
                  if ((i[(m = S + 12 | 0) >> 2] | 0) != (n | 0)) {
                    g();
                  }
                  if ((i[(v = M + 8 | 0) >> 2] | 0) == (n | 0)) {
                    i[m >> 2] = M;
                    i[v >> 2] = S;
                    A = M;
                    break;
                  }
                  g();
                }
              } while (0);
              if (T) {
                M = i[n + 28 >> 2] | 0;
                if ((n | 0) == (i[(u = 476 + (M << 2) | 0) >> 2] | 0)) {
                  i[u >> 2] = A;
                  if (!A) {
                    i[44] = i[44] & ~(1 << M);
                    break;
                  }
                } else {
                  if (T >>> 0 < (i[47] | 0) >>> 0) {
                    g();
                  }
                  if ((i[(M = T + 16 | 0) >> 2] | 0) == (n | 0)) {
                    i[M >> 2] = A;
                  } else {
                    i[T + 20 >> 2] = A;
                  }
                  if (!A) {
                    break;
                  }
                }
                if (A >>> 0 < (M = i[47] | 0) >>> 0) {
                  g();
                }
                i[A + 24 >> 2] = T;
                l = i[(u = n + 16 | 0) >> 2] | 0;
                do {
                  if (l) {
                    if (!(l >>> 0 < M >>> 0)) {
                      i[A + 16 >> 2] = l;
                      i[l + 24 >> 2] = A;
                      break;
                    }
                    g();
                  }
                } while (0);
                if (l = i[u + 4 >> 2] | 0) {
                  if (!(l >>> 0 < (i[47] | 0) >>> 0)) {
                    i[A + 20 >> 2] = l;
                    i[l + 24 >> 2] = A;
                    break;
                  }
                  g();
                }
              }
            } else {
              l = i[n + 8 >> 2] | 0;
              M = i[n + 12 >> 2] | 0;
              if ((l | 0) != ((T = 212 + (a << 1 << 2) | 0) | 0)) {
                if (l >>> 0 < (i[47] | 0) >>> 0) {
                  g();
                }
                if ((i[l + 12 >> 2] | 0) != (n | 0)) {
                  g();
                }
              }
              if ((M | 0) == (l | 0)) {
                i[43] = i[43] & ~(1 << a);
                break;
              }
              if ((M | 0) != (T | 0)) {
                if (M >>> 0 < (i[47] | 0) >>> 0) {
                  g();
                }
                if ((i[(T = M + 8 | 0) >> 2] | 0) == (n | 0)) {
                  I = T;
                } else {
                  g();
                }
              } else {
                I = M + 8 | 0;
              }
              i[l + 12 >> 2] = M;
              i[I >> 2] = l;
            }
          } while (0);
          i[p + 4 >> 2] = E | 1;
          i[p + E >> 2] = E;
          if ((p | 0) == (i[48] | 0)) {
            return void (i[45] = E);
          }
          R = E;
        }
        f = R >>> 3;
        if (R >>> 0 < 256) {
          r = 212 + (f << 1 << 2) | 0;
          if ((o = i[43] | 0) & (E = 1 << f)) {
            if ((I = i[(f = r + 8 | 0) >> 2] | 0) >>> 0 < (i[47] | 0) >>> 0) {
              g();
            } else {
              N = f;
              D = I;
            }
          } else {
            i[43] = o | E;
            N = r + 8 | 0;
            D = r;
          }
          i[N >> 2] = p;
          i[D + 12 >> 2] = p;
          i[p + 8 >> 2] = D;
          return void (i[p + 12 >> 2] = r);
        }
        w = (r = R >>> 8) ? R >>> 0 > 16777215 ? 31 : R >>> ((o = 14 - ((r = ((N = r << (D = (r + 1048320 | 0) >>> 16 & 8)) + 520192 | 0) >>> 16 & 4) | D | (N = ((E = N << r) + 245760 | 0) >>> 16 & 2)) + (E << N >>> 15) | 0) + 7 | 0) & 1 | o << 1 : 0;
        o = 476 + (w << 2) | 0;
        i[p + 28 >> 2] = w;
        i[p + 20 >> 2] = 0;
        i[p + 16 >> 2] = 0;
        N = i[44] | 0;
        E = 1 << w;
        do {
          if (N & E) {
            D = R << ((w | 0) == 31 ? 0 : 25 - (w >>> 1) | 0);
            r = i[o >> 2] | 0;
            for (;;) {
              if ((i[r + 4 >> 2] & -8 | 0) == (R | 0)) {
                L = r;
                k = 130;
                break;
              }
              if (!(f = i[(I = r + 16 + (D >>> 31 << 2) | 0) >> 2] | 0)) {
                G = I;
                U = r;
                k = 127;
                break;
              }
              D <<= 1;
              r = f;
            }
            if ((k | 0) == 127) {
              if (!(G >>> 0 < (i[47] | 0) >>> 0)) {
                i[G >> 2] = p;
                i[p + 24 >> 2] = U;
                i[p + 12 >> 2] = p;
                i[p + 8 >> 2] = p;
                break;
              }
              g();
            } else if ((k | 0) == 130) {
              if ((D = i[(r = L + 8 | 0) >> 2] | 0) >>> 0 >= (u = i[47] | 0) >>> 0 & L >>> 0 >= u >>> 0) {
                i[D + 12 >> 2] = p;
                i[r >> 2] = p;
                i[p + 8 >> 2] = D;
                i[p + 12 >> 2] = L;
                i[p + 24 >> 2] = 0;
                break;
              }
              g();
            }
          } else {
            i[44] = N | E;
            i[o >> 2] = p;
            i[p + 24 >> 2] = o;
            i[p + 12 >> 2] = p;
            i[p + 8 >> 2] = p;
          }
        } while (0);
        p = (i[51] | 0) - 1 | 0;
        i[51] = p;
        if (!p) {
          for (x = 628; p = i[x >> 2] | 0;) {
            x = p + 8 | 0;
          }
          i[51] = -1;
        }
      }
    },
    _i64Add: G,
    _bitshift64Ashr: L,
    _i64Subtract: k,
    _memset: U,
    _malloc: function (e) {
      e |= 0;
      var t = 0;
      var n = 0;
      var r = 0;
      var a = 0;
      var o = 0;
      var s = 0;
      var l = 0;
      var u = 0;
      var c = 0;
      var d = 0;
      var p = 0;
      var f = 0;
      var _ = 0;
      var y = 0;
      var E = 0;
      var S = 0;
      var v = 0;
      var T = 0;
      var A = 0;
      var b = 0;
      var C = 0;
      var P = 0;
      var I = 0;
      var R = 0;
      var N = 0;
      var D = 0;
      var w = 0;
      var L = 0;
      var k = 0;
      var G = 0;
      var U = 0;
      var x = 0;
      var B = 0;
      var F = 0;
      var j = 0;
      var Y = 0;
      var K = 0;
      var W = 0;
      var V = 0;
      var H = 0;
      var $ = 0;
      var z = 0;
      var q = 0;
      var J = 0;
      var Q = 0;
      var X = 0;
      var Z = 0;
      var ee = 0;
      var te = 0;
      var ne = 0;
      var re = 0;
      var ie = 0;
      var ae = 0;
      var oe = 0;
      var se = 0;
      var le = 0;
      var ue = 0;
      var ce = 0;
      var de = 0;
      var pe = 0;
      var fe = 0;
      var _e = 0;
      var ge = 0;
      var me = 0;
      var he = 0;
      var ye = 0;
      var Ee = 0;
      var Se = 0;
      var ve = 0;
      var Te = 0;
      var Me = 0;
      var Ae = 0;
      var be = 0;
      var Ce = 0;
      var Pe = 0;
      var Oe = 0;
      var Ie = 0;
      var Re = 0;
      var Ne = 0;
      var De = 0;
      var we = 0;
      var Le = 0;
      var ke = 0;
      var Ge = 0;
      var Ue = 0;
      var xe = 0;
      var Be = 0;
      var Fe = 0;
      var je = 0;
      var Ye = 0;
      do {
        if (e >>> 0 < 245) {
          n = (t = e >>> 0 < 11 ? 16 : e + 11 & -8) >>> 3;
          if ((a = (r = i[43] | 0) >>> n) & 3) {
            u = i[(l = (s = 212 + ((o = (a & 1 ^ 1) + n | 0) << 1 << 2) | 0) + 8 | 0) >> 2] | 0;
            d = i[(c = u + 8 | 0) >> 2] | 0;
            do {
              if ((s | 0) != (d | 0)) {
                if (d >>> 0 < (i[47] | 0) >>> 0) {
                  g();
                }
                if ((i[(p = d + 12 | 0) >> 2] | 0) == (u | 0)) {
                  i[p >> 2] = s;
                  i[l >> 2] = d;
                  break;
                }
                g();
              } else {
                i[43] = r & ~(1 << o);
              }
            } while (0);
            d = o << 3;
            i[u + 4 >> 2] = d | 3;
            i[(l = u + d + 4 | 0) >> 2] = i[l >> 2] | 1;
            return c | 0;
          }
          if (t >>> 0 > (l = i[45] | 0) >>> 0) {
            if (a) {
              f = i[(y = (_ = 212 + ((E = ((d = (p = (d = ((s = a << n & ((d = 2 << n) | 0 - d)) & 0 - s) - 1 | 0) >>> (s = d >>> 12 & 16)) >>> 5 & 8) | s | (p = (f = p >>> d) >>> 2 & 4) | (f = (_ = f >>> p) >>> 1 & 2) | (_ = (y = _ >>> f) >>> 1 & 1)) + (y >>> _) | 0) << 1 << 2) | 0) + 8 | 0) >> 2] | 0;
              s = i[(p = f + 8 | 0) >> 2] | 0;
              do {
                if ((_ | 0) != (s | 0)) {
                  if (s >>> 0 < (i[47] | 0) >>> 0) {
                    g();
                  }
                  if ((i[(d = s + 12 | 0) >> 2] | 0) == (f | 0)) {
                    i[d >> 2] = _;
                    i[y >> 2] = s;
                    S = i[45] | 0;
                    break;
                  }
                  g();
                } else {
                  i[43] = r & ~(1 << E);
                  S = l;
                }
              } while (0);
              l = (E << 3) - t | 0;
              i[f + 4 >> 2] = t | 3;
              i[(r = f + t | 0) + 4 >> 2] = l | 1;
              i[r + l >> 2] = l;
              if (S) {
                s = i[48] | 0;
                _ = 212 + ((y = S >>> 3) << 1 << 2) | 0;
                if ((n = i[43] | 0) & (a = 1 << y)) {
                  if ((c = i[(y = _ + 8 | 0) >> 2] | 0) >>> 0 < (i[47] | 0) >>> 0) {
                    g();
                  } else {
                    v = y;
                    T = c;
                  }
                } else {
                  i[43] = n | a;
                  v = _ + 8 | 0;
                  T = _;
                }
                i[v >> 2] = s;
                i[T + 12 >> 2] = s;
                i[s + 8 >> 2] = T;
                i[s + 12 >> 2] = _;
              }
              i[45] = l;
              i[48] = r;
              return p | 0;
            }
            if (r = i[44] | 0) {
              c = i[476 + (((l = (_ = (l = (r & 0 - r) - 1 | 0) >>> (r = l >>> 12 & 16)) >>> 5 & 8) | r | (_ = (s = _ >>> l) >>> 2 & 4) | (s = (a = s >>> _) >>> 1 & 2) | (a = (n = a >>> s) >>> 1 & 1)) + (n >>> a) << 2) >> 2] | 0;
              a = (i[c + 4 >> 2] & -8) - t | 0;
              n = c;
              s = c;
              for (;;) {
                if (c = i[n + 16 >> 2] | 0) {
                  C = c;
                } else {
                  if (!(_ = i[n + 20 >> 2] | 0)) {
                    A = a;
                    b = s;
                    break;
                  }
                  C = _;
                }
                a = (_ = (c = (i[C + 4 >> 2] & -8) - t | 0) >>> 0 < a >>> 0) ? c : a;
                n = C;
                s = _ ? C : s;
              }
              if (b >>> 0 < (s = i[47] | 0) >>> 0) {
                g();
              }
              if (b >>> 0 >= (n = b + t | 0) >>> 0) {
                g();
              }
              a = i[b + 24 >> 2] | 0;
              p = i[b + 12 >> 2] | 0;
              do {
                if ((p | 0) == (b | 0)) {
                  if (E = i[(f = b + 20 | 0) >> 2] | 0) {
                    I = E;
                    R = f;
                  } else {
                    if (!(c = i[(_ = b + 16 | 0) >> 2] | 0)) {
                      P = 0;
                      break;
                    }
                    I = c;
                    R = _;
                  }
                  for (;;) {
                    if (E = i[(f = I + 20 | 0) >> 2] | 0) {
                      I = E;
                      R = f;
                    } else {
                      if (!(E = i[(f = I + 16 | 0) >> 2] | 0)) {
                        N = I;
                        D = R;
                        break;
                      }
                      I = E;
                      R = f;
                    }
                  }
                  if (!(D >>> 0 < s >>> 0)) {
                    i[D >> 2] = 0;
                    P = N;
                    break;
                  }
                  g();
                } else {
                  if ((f = i[b + 8 >> 2] | 0) >>> 0 < s >>> 0) {
                    g();
                  }
                  if ((i[(E = f + 12 | 0) >> 2] | 0) != (b | 0)) {
                    g();
                  }
                  if ((i[(_ = p + 8 | 0) >> 2] | 0) == (b | 0)) {
                    i[E >> 2] = p;
                    i[_ >> 2] = f;
                    P = p;
                    break;
                  }
                  g();
                }
              } while (0);
              do {
                if (a) {
                  p = i[b + 28 >> 2] | 0;
                  if ((b | 0) == (i[(s = 476 + (p << 2) | 0) >> 2] | 0)) {
                    i[s >> 2] = P;
                    if (!P) {
                      i[44] = i[44] & ~(1 << p);
                      break;
                    }
                  } else {
                    if (a >>> 0 < (i[47] | 0) >>> 0) {
                      g();
                    }
                    if ((i[(p = a + 16 | 0) >> 2] | 0) == (b | 0)) {
                      i[p >> 2] = P;
                    } else {
                      i[a + 20 >> 2] = P;
                    }
                    if (!P) {
                      break;
                    }
                  }
                  if (P >>> 0 < (p = i[47] | 0) >>> 0) {
                    g();
                  }
                  i[P + 24 >> 2] = a;
                  s = i[b + 16 >> 2] | 0;
                  do {
                    if (s) {
                      if (!(s >>> 0 < p >>> 0)) {
                        i[P + 16 >> 2] = s;
                        i[s + 24 >> 2] = P;
                        break;
                      }
                      g();
                    }
                  } while (0);
                  if (s = i[b + 20 >> 2] | 0) {
                    if (!(s >>> 0 < (i[47] | 0) >>> 0)) {
                      i[P + 20 >> 2] = s;
                      i[s + 24 >> 2] = P;
                      break;
                    }
                    g();
                  }
                }
              } while (0);
              if (A >>> 0 < 16) {
                a = A + t | 0;
                i[b + 4 >> 2] = a | 3;
                i[(s = b + a + 4 | 0) >> 2] = i[s >> 2] | 1;
              } else {
                i[b + 4 >> 2] = t | 3;
                i[n + 4 >> 2] = A | 1;
                i[n + A >> 2] = A;
                if (s = i[45] | 0) {
                  a = i[48] | 0;
                  s = 212 + ((p = s >>> 3) << 1 << 2) | 0;
                  if ((f = i[43] | 0) & (_ = 1 << p)) {
                    if ((E = i[(p = s + 8 | 0) >> 2] | 0) >>> 0 < (i[47] | 0) >>> 0) {
                      g();
                    } else {
                      w = p;
                      L = E;
                    }
                  } else {
                    i[43] = f | _;
                    w = s + 8 | 0;
                    L = s;
                  }
                  i[w >> 2] = a;
                  i[L + 12 >> 2] = a;
                  i[a + 8 >> 2] = L;
                  i[a + 12 >> 2] = s;
                }
                i[45] = A;
                i[48] = n;
              }
              return b + 8 | 0 | 0;
            }
            k = t;
          } else {
            k = t;
          }
        } else if (e >>> 0 <= 4294967231) {
          a = (s = e + 11 | 0) & -8;
          if (_ = i[44] | 0) {
            f = 0 - a | 0;
            G = (E = s >>> 8) ? a >>> 0 > 16777215 ? 31 : a >>> ((r = 14 - ((E = ((p = E << (s = (E + 1048320 | 0) >>> 16 & 8)) + 520192 | 0) >>> 16 & 4) | s | (p = ((c = p << E) + 245760 | 0) >>> 16 & 2)) + (c << p >>> 15) | 0) + 7 | 0) & 1 | r << 1 : 0;
            r = i[476 + (G << 2) >> 2] | 0;
            e: do {
              if (r) {
                p = f;
                c = 0;
                s = a << ((G | 0) == 31 ? 0 : 25 - (G >>> 1) | 0);
                E = r;
                l = 0;
                p = f;
                c = 0;
                s = a << ((G | 0) == 31 ? 0 : 25 - (G >>> 1) | 0);
                E = r;
                l = 0;
                for (;;) {
                  if ((u = (y = i[E + 4 >> 2] & -8) - a | 0) >>> 0 < p >>> 0) {
                    if ((y | 0) == (a | 0)) {
                      j = u;
                      Y = E;
                      K = E;
                      F = 90;
                      break e;
                    }
                    W = u;
                    V = E;
                  } else {
                    W = p;
                    V = l;
                  }
                  y = ((u = i[E + 20 >> 2] | 0) | 0) == 0 | (u | 0) == ((E = i[E + 16 + (s >>> 31 << 2) >> 2] | 0) | 0) ? c : u;
                  if (u = (E | 0) == 0) {
                    U = W;
                    x = y;
                    B = V;
                    F = 86;
                    break;
                  }
                  p = W;
                  c = y;
                  s <<= u & 1 ^ 1;
                  l = V;
                }
              } else {
                U = f;
                x = 0;
                B = 0;
                F = 86;
              }
            } while (0);
            if ((F | 0) == 86) {
              if ((x | 0) == 0 & (B | 0) == 0) {
                if (!(f = _ & ((r = 2 << G) | 0 - r))) {
                  k = a;
                  break;
                }
                H = i[476 + (((r = (t = (r = (f & 0 - f) - 1 | 0) >>> (f = r >>> 12 & 16)) >>> 5 & 8) | f | (t = (n = t >>> r) >>> 2 & 4) | (n = (l = n >>> t) >>> 1 & 2) | (l = (s = l >>> n) >>> 1 & 1)) + (s >>> l) << 2) >> 2] | 0;
              } else {
                H = x;
              }
              if (H) {
                j = U;
                Y = H;
                K = B;
                F = 90;
              } else {
                $ = U;
                z = B;
              }
            }
            if ((F | 0) == 90) {
              for (;;) {
                F = 0;
                n = (s = (l = (i[Y + 4 >> 2] & -8) - a | 0) >>> 0 < j >>> 0) ? l : j;
                l = s ? Y : K;
                if (s = i[Y + 16 >> 2] | 0) {
                  j = n;
                  Y = s;
                  K = l;
                  F = 90;
                } else {
                  if (!(Y = i[Y + 20 >> 2] | 0)) {
                    $ = n;
                    z = l;
                    break;
                  }
                  j = n;
                  K = l;
                  F = 90;
                }
              }
            }
            if ((z | 0) != 0 && $ >>> 0 < ((i[45] | 0) - a | 0) >>> 0) {
              if (z >>> 0 < (_ = i[47] | 0) >>> 0) {
                g();
              }
              if (z >>> 0 >= (l = z + a | 0) >>> 0) {
                g();
              }
              n = i[z + 24 >> 2] | 0;
              s = i[z + 12 >> 2] | 0;
              do {
                if ((s | 0) == (z | 0)) {
                  if (f = i[(t = z + 20 | 0) >> 2] | 0) {
                    J = f;
                    Q = t;
                  } else {
                    if (!(c = i[(r = z + 16 | 0) >> 2] | 0)) {
                      q = 0;
                      break;
                    }
                    J = c;
                    Q = r;
                  }
                  for (;;) {
                    if (f = i[(t = J + 20 | 0) >> 2] | 0) {
                      J = f;
                      Q = t;
                    } else {
                      if (!(f = i[(t = J + 16 | 0) >> 2] | 0)) {
                        X = J;
                        Z = Q;
                        break;
                      }
                      J = f;
                      Q = t;
                    }
                  }
                  if (!(Z >>> 0 < _ >>> 0)) {
                    i[Z >> 2] = 0;
                    q = X;
                    break;
                  }
                  g();
                } else {
                  if ((t = i[z + 8 >> 2] | 0) >>> 0 < _ >>> 0) {
                    g();
                  }
                  if ((i[(f = t + 12 | 0) >> 2] | 0) != (z | 0)) {
                    g();
                  }
                  if ((i[(r = s + 8 | 0) >> 2] | 0) == (z | 0)) {
                    i[f >> 2] = s;
                    i[r >> 2] = t;
                    q = s;
                    break;
                  }
                  g();
                }
              } while (0);
              do {
                if (n) {
                  s = i[z + 28 >> 2] | 0;
                  if ((z | 0) == (i[(_ = 476 + (s << 2) | 0) >> 2] | 0)) {
                    i[_ >> 2] = q;
                    if (!q) {
                      i[44] = i[44] & ~(1 << s);
                      break;
                    }
                  } else {
                    if (n >>> 0 < (i[47] | 0) >>> 0) {
                      g();
                    }
                    if ((i[(s = n + 16 | 0) >> 2] | 0) == (z | 0)) {
                      i[s >> 2] = q;
                    } else {
                      i[n + 20 >> 2] = q;
                    }
                    if (!q) {
                      break;
                    }
                  }
                  if (q >>> 0 < (s = i[47] | 0) >>> 0) {
                    g();
                  }
                  i[q + 24 >> 2] = n;
                  _ = i[z + 16 >> 2] | 0;
                  do {
                    if (_) {
                      if (!(_ >>> 0 < s >>> 0)) {
                        i[q + 16 >> 2] = _;
                        i[_ + 24 >> 2] = q;
                        break;
                      }
                      g();
                    }
                  } while (0);
                  if (_ = i[z + 20 >> 2] | 0) {
                    if (!(_ >>> 0 < (i[47] | 0) >>> 0)) {
                      i[q + 20 >> 2] = _;
                      i[_ + 24 >> 2] = q;
                      break;
                    }
                    g();
                  }
                }
              } while (0);
              do {
                if ($ >>> 0 >= 16) {
                  i[z + 4 >> 2] = a | 3;
                  i[l + 4 >> 2] = $ | 1;
                  i[l + $ >> 2] = $;
                  n = $ >>> 3;
                  if ($ >>> 0 < 256) {
                    _ = 212 + (n << 1 << 2) | 0;
                    if ((s = i[43] | 0) & (t = 1 << n)) {
                      if ((r = i[(n = _ + 8 | 0) >> 2] | 0) >>> 0 < (i[47] | 0) >>> 0) {
                        g();
                      } else {
                        ee = n;
                        te = r;
                      }
                    } else {
                      i[43] = s | t;
                      ee = _ + 8 | 0;
                      te = _;
                    }
                    i[ee >> 2] = l;
                    i[te + 12 >> 2] = l;
                    i[l + 8 >> 2] = te;
                    i[l + 12 >> 2] = _;
                    break;
                  }
                  ne = (_ = $ >>> 8) ? $ >>> 0 > 16777215 ? 31 : $ >>> ((n = 14 - ((_ = ((s = _ << (t = (_ + 1048320 | 0) >>> 16 & 8)) + 520192 | 0) >>> 16 & 4) | t | (s = ((r = s << _) + 245760 | 0) >>> 16 & 2)) + (r << s >>> 15) | 0) + 7 | 0) & 1 | n << 1 : 0;
                  n = 476 + (ne << 2) | 0;
                  i[l + 28 >> 2] = ne;
                  i[(s = l + 16 | 0) + 4 >> 2] = 0;
                  i[s >> 2] = 0;
                  if (!((s = i[44] | 0) & (r = 1 << ne))) {
                    i[44] = s | r;
                    i[n >> 2] = l;
                    i[l + 24 >> 2] = n;
                    i[l + 12 >> 2] = l;
                    i[l + 8 >> 2] = l;
                    break;
                  }
                  r = $ << ((ne | 0) == 31 ? 0 : 25 - (ne >>> 1) | 0);
                  s = i[n >> 2] | 0;
                  for (;;) {
                    if ((i[s + 4 >> 2] & -8 | 0) == ($ | 0)) {
                      re = s;
                      F = 148;
                      break;
                    }
                    if (!(t = i[(n = s + 16 + (r >>> 31 << 2) | 0) >> 2] | 0)) {
                      ie = n;
                      ae = s;
                      F = 145;
                      break;
                    }
                    r <<= 1;
                    s = t;
                  }
                  if ((F | 0) == 145) {
                    if (!(ie >>> 0 < (i[47] | 0) >>> 0)) {
                      i[ie >> 2] = l;
                      i[l + 24 >> 2] = ae;
                      i[l + 12 >> 2] = l;
                      i[l + 8 >> 2] = l;
                      break;
                    }
                    g();
                  } else if ((F | 0) == 148) {
                    if ((r = i[(s = re + 8 | 0) >> 2] | 0) >>> 0 >= (t = i[47] | 0) >>> 0 & re >>> 0 >= t >>> 0) {
                      i[r + 12 >> 2] = l;
                      i[s >> 2] = l;
                      i[l + 8 >> 2] = r;
                      i[l + 12 >> 2] = re;
                      i[l + 24 >> 2] = 0;
                      break;
                    }
                    g();
                  }
                } else {
                  r = $ + a | 0;
                  i[z + 4 >> 2] = r | 3;
                  i[(s = z + r + 4 | 0) >> 2] = i[s >> 2] | 1;
                }
              } while (0);
              return z + 8 | 0 | 0;
            }
            k = a;
          } else {
            k = a;
          }
        } else {
          k = -1;
        }
      } while (0);
      if ((z = i[45] | 0) >>> 0 >= k >>> 0) {
        $ = z - k | 0;
        re = i[48] | 0;
        if ($ >>> 0 > 15) {
          ae = re + k | 0;
          i[48] = ae;
          i[45] = $;
          i[ae + 4 >> 2] = $ | 1;
          i[ae + $ >> 2] = $;
          i[re + 4 >> 2] = k | 3;
        } else {
          i[45] = 0;
          i[48] = 0;
          i[re + 4 >> 2] = z | 3;
          i[($ = re + z + 4 | 0) >> 2] = i[$ >> 2] | 1;
        }
        return re + 8 | 0 | 0;
      }
      if ((re = i[46] | 0) >>> 0 > k >>> 0) {
        $ = re - k | 0;
        i[46] = $;
        z = (re = i[49] | 0) + k | 0;
        i[49] = z;
        i[z + 4 >> 2] = $ | 1;
        i[re + 4 >> 2] = k | 3;
        return re + 8 | 0 | 0;
      }
      do {
        if (!(i[161] | 0)) {
          if (!((re = M(30) | 0) + -1 & re)) {
            i[163] = re;
            i[162] = re;
            i[164] = -1;
            i[165] = -1;
            i[166] = 0;
            i[154] = 0;
            i[161] = (h(0) | 0) & -16 ^ 1431655768;
            break;
          }
          g();
        }
      } while (0);
      re = k + 48 | 0;
      if (($ = (ae = ($ = i[163] | 0) + (z = k + 47 | 0) | 0) & (ie = 0 - $ | 0)) >>> 0 <= k >>> 0) {
        return 0 | 0;
      }
      if (((ne = i[153] | 0) | 0) != 0 && (ee = (te = i[151] | 0) + $ | 0) >>> 0 <= te >>> 0 | ee >>> 0 > ne >>> 0) {
        return 0 | 0;
      }
      e: do {
        if (i[154] & 4) {
          F = 190;
        } else {
          ne = i[49] | 0;
          t: do {
            if (ne) {
              for (ee = 620;;) {
                if ((te = i[ee >> 2] | 0) >>> 0 <= ne >>> 0 && (te + (i[(q = ee + 4 | 0) >> 2] | 0) | 0) >>> 0 > ne >>> 0) {
                  oe = ee;
                  se = q;
                  break;
                }
                if (!(ee = i[ee + 8 >> 2] | 0)) {
                  F = 173;
                  break t;
                }
              }
              if ((ee = ae - (i[46] | 0) & ie) >>> 0 < 2147483647) {
                if (((q = m(ee | 0) | 0) | 0) == ((i[oe >> 2] | 0) + (i[se >> 2] | 0) | 0)) {
                  if ((q | 0) != -1) {
                    le = q;
                    ue = ee;
                    F = 193;
                    break e;
                  }
                } else {
                  ce = q;
                  de = ee;
                  F = 183;
                }
              }
            } else {
              F = 173;
            }
          } while (0);
          do {
            if ((F | 0) == 173 && ((ne = m(0) | 0) | 0) != -1 && (a = ne, pe = (q = (ee = i[162] | 0) + -1 | 0) & a ? $ - a + (q + a & 0 - ee) | 0 : $, a = (ee = i[151] | 0) + pe | 0, pe >>> 0 > k >>> 0 & pe >>> 0 < 2147483647)) {
              if (((q = i[153] | 0) | 0) != 0 && a >>> 0 <= ee >>> 0 | a >>> 0 > q >>> 0) {
                break;
              }
              if (((q = m(pe | 0) | 0) | 0) == (ne | 0)) {
                le = ne;
                ue = pe;
                F = 193;
                break e;
              }
              ce = q;
              de = pe;
              F = 183;
            }
          } while (0);
          t: do {
            if ((F | 0) == 183) {
              q = 0 - de | 0;
              do {
                if (re >>> 0 > de >>> 0 & de >>> 0 < 2147483647 & (ce | 0) != -1 && (a = z - de + (ne = i[163] | 0) & 0 - ne) >>> 0 < 2147483647) {
                  if ((m(a | 0) | 0) == -1) {
                    m(q | 0);
                    break t;
                  }
                  fe = a + de | 0;
                  break;
                }
                fe = de;
              } while (0);
              if ((ce | 0) != -1) {
                le = ce;
                ue = fe;
                F = 193;
                break e;
              }
            }
          } while (0);
          i[154] = i[154] | 4;
          F = 190;
        }
      } while (0);
      if ((F | 0) == 190 && $ >>> 0 < 2147483647 && (fe = m($ | 0) | 0) >>> 0 < ($ = m(0) | 0) >>> 0 & (fe | 0) != -1 & ($ | 0) != -1 && (ce = $ - fe | 0) >>> 0 > (k + 40 | 0) >>> 0) {
        le = fe;
        ue = ce;
        F = 193;
      }
      if ((F | 0) == 193) {
        ce = (i[151] | 0) + ue | 0;
        i[151] = ce;
        if (ce >>> 0 > (i[152] | 0) >>> 0) {
          i[152] = ce;
        }
        ce = i[49] | 0;
        do {
          if (ce) {
            fe = 620;
            do {
              if ((le | 0) == (($ = i[fe >> 2] | 0) + (z = i[(de = fe + 4 | 0) >> 2] | 0) | 0)) {
                _e = $;
                ge = de;
                me = z;
                he = fe;
                F = 203;
                break;
              }
              fe = i[fe + 8 >> 2] | 0;
            } while ((fe | 0) != 0);
            if ((F | 0) == 203 && (i[he + 12 >> 2] & 8 | 0) == 0 && ce >>> 0 < le >>> 0 & ce >>> 0 >= _e >>> 0) {
              i[ge >> 2] = me + ue;
              fe = ce + (z = ((fe = ce + 8 | 0) & 7 | 0) == 0 ? 0 : 0 - fe & 7) | 0;
              de = ue - z + (i[46] | 0) | 0;
              i[49] = fe;
              i[46] = de;
              i[fe + 4 >> 2] = de | 1;
              i[fe + de + 4 >> 2] = 40;
              i[50] = i[165];
              break;
            }
            if (le >>> 0 < (de = i[47] | 0) >>> 0) {
              i[47] = le;
              ye = le;
            } else {
              ye = de;
            }
            de = le + ue | 0;
            fe = 620;
            for (;;) {
              if ((i[fe >> 2] | 0) == (de | 0)) {
                Ee = fe;
                Se = fe;
                F = 211;
                break;
              }
              if (!(fe = i[fe + 8 >> 2] | 0)) {
                ve = 620;
                break;
              }
            }
            if ((F | 0) == 211) {
              if (!(i[Se + 12 >> 2] & 8)) {
                i[Ee >> 2] = le;
                i[(fe = Se + 4 | 0) >> 2] = (i[fe >> 2] | 0) + ue;
                z = le + (((fe = le + 8 | 0) & 7 | 0) == 0 ? 0 : 0 - fe & 7) | 0;
                $ = de + (((fe = de + 8 | 0) & 7 | 0) == 0 ? 0 : 0 - fe & 7) | 0;
                fe = z + k | 0;
                re = $ - z - k | 0;
                i[z + 4 >> 2] = k | 3;
                do {
                  if (($ | 0) != (ce | 0)) {
                    if (($ | 0) == (i[48] | 0)) {
                      pe = (i[45] | 0) + re | 0;
                      i[45] = pe;
                      i[48] = fe;
                      i[fe + 4 >> 2] = pe | 1;
                      i[fe + pe >> 2] = pe;
                      break;
                    }
                    if (((pe = i[$ + 4 >> 2] | 0) & 3 | 0) == 1) {
                      se = pe & -8;
                      oe = pe >>> 3;
                      e: do {
                        if (pe >>> 0 >= 256) {
                          ie = i[$ + 24 >> 2] | 0;
                          ae = i[$ + 12 >> 2] | 0;
                          do {
                            if ((ae | 0) == ($ | 0)) {
                              if (ne = i[(a = (q = $ + 16 | 0) + 4 | 0) >> 2] | 0) {
                                Me = ne;
                                Ae = a;
                              } else {
                                if (!(ee = i[q >> 2] | 0)) {
                                  Te = 0;
                                  break;
                                }
                                Me = ee;
                                Ae = q;
                              }
                              for (;;) {
                                if (ne = i[(a = Me + 20 | 0) >> 2] | 0) {
                                  Me = ne;
                                  Ae = a;
                                } else {
                                  if (!(ne = i[(a = Me + 16 | 0) >> 2] | 0)) {
                                    be = Me;
                                    Ce = Ae;
                                    break;
                                  }
                                  Me = ne;
                                  Ae = a;
                                }
                              }
                              if (!(Ce >>> 0 < ye >>> 0)) {
                                i[Ce >> 2] = 0;
                                Te = be;
                                break;
                              }
                              g();
                            } else {
                              if ((a = i[$ + 8 >> 2] | 0) >>> 0 < ye >>> 0) {
                                g();
                              }
                              if ((i[(ne = a + 12 | 0) >> 2] | 0) != ($ | 0)) {
                                g();
                              }
                              if ((i[(q = ae + 8 | 0) >> 2] | 0) == ($ | 0)) {
                                i[ne >> 2] = ae;
                                i[q >> 2] = a;
                                Te = ae;
                                break;
                              }
                              g();
                            }
                          } while (0);
                          if (!ie) {
                            break;
                          }
                          a = 476 + ((ae = i[$ + 28 >> 2] | 0) << 2) | 0;
                          do {
                            if (($ | 0) == (i[a >> 2] | 0)) {
                              i[a >> 2] = Te;
                              if (Te) {
                                break;
                              }
                              i[44] = i[44] & ~(1 << ae);
                              break e;
                            }
                            if (ie >>> 0 < (i[47] | 0) >>> 0) {
                              g();
                            }
                            if ((i[(q = ie + 16 | 0) >> 2] | 0) == ($ | 0)) {
                              i[q >> 2] = Te;
                            } else {
                              i[ie + 20 >> 2] = Te;
                            }
                            if (!Te) {
                              break e;
                            }
                          } while (0);
                          if (Te >>> 0 < (ae = i[47] | 0) >>> 0) {
                            g();
                          }
                          i[Te + 24 >> 2] = ie;
                          q = i[(a = $ + 16 | 0) >> 2] | 0;
                          do {
                            if (q) {
                              if (!(q >>> 0 < ae >>> 0)) {
                                i[Te + 16 >> 2] = q;
                                i[q + 24 >> 2] = Te;
                                break;
                              }
                              g();
                            }
                          } while (0);
                          if (!(q = i[a + 4 >> 2] | 0)) {
                            break;
                          }
                          if (!(q >>> 0 < (i[47] | 0) >>> 0)) {
                            i[Te + 20 >> 2] = q;
                            i[q + 24 >> 2] = Te;
                            break;
                          }
                          g();
                        } else {
                          q = i[$ + 8 >> 2] | 0;
                          ae = i[$ + 12 >> 2] | 0;
                          ie = 212 + (oe << 1 << 2) | 0;
                          do {
                            if ((q | 0) != (ie | 0)) {
                              if (q >>> 0 < ye >>> 0) {
                                g();
                              }
                              if ((i[q + 12 >> 2] | 0) == ($ | 0)) {
                                break;
                              }
                              g();
                            }
                          } while (0);
                          if ((ae | 0) == (q | 0)) {
                            i[43] = i[43] & ~(1 << oe);
                            break;
                          }
                          do {
                            if ((ae | 0) == (ie | 0)) {
                              Pe = ae + 8 | 0;
                            } else {
                              if (ae >>> 0 < ye >>> 0) {
                                g();
                              }
                              if ((i[(a = ae + 8 | 0) >> 2] | 0) == ($ | 0)) {
                                Pe = a;
                                break;
                              }
                              g();
                            }
                          } while (0);
                          i[q + 12 >> 2] = ae;
                          i[Pe >> 2] = q;
                        }
                      } while (0);
                      Oe = $ + se | 0;
                      Ie = se + re | 0;
                    } else {
                      Oe = $;
                      Ie = re;
                    }
                    i[(oe = Oe + 4 | 0) >> 2] = i[oe >> 2] & -2;
                    i[fe + 4 >> 2] = Ie | 1;
                    i[fe + Ie >> 2] = Ie;
                    oe = Ie >>> 3;
                    if (Ie >>> 0 < 256) {
                      pe = 212 + (oe << 1 << 2) | 0;
                      ie = i[43] | 0;
                      a = 1 << oe;
                      do {
                        if (ie & a) {
                          if ((ne = i[(oe = pe + 8 | 0) >> 2] | 0) >>> 0 >= (i[47] | 0) >>> 0) {
                            Re = oe;
                            Ne = ne;
                            break;
                          }
                          g();
                        } else {
                          i[43] = ie | a;
                          Re = pe + 8 | 0;
                          Ne = pe;
                        }
                      } while (0);
                      i[Re >> 2] = fe;
                      i[Ne + 12 >> 2] = fe;
                      i[fe + 8 >> 2] = Ne;
                      i[fe + 12 >> 2] = pe;
                      break;
                    }
                    a = Ie >>> 8;
                    do {
                      if (a) {
                        if (Ie >>> 0 > 16777215) {
                          De = 31;
                          break;
                        }
                        De = Ie >>> ((ee = 14 - ((ne = ((se = a << (ie = (a + 1048320 | 0) >>> 16 & 8)) + 520192 | 0) >>> 16 & 4) | ie | (se = ((oe = se << ne) + 245760 | 0) >>> 16 & 2)) + (oe << se >>> 15) | 0) + 7 | 0) & 1 | ee << 1;
                      } else {
                        De = 0;
                      }
                    } while (0);
                    a = 476 + (De << 2) | 0;
                    i[fe + 28 >> 2] = De;
                    i[(pe = fe + 16 | 0) + 4 >> 2] = 0;
                    i[pe >> 2] = 0;
                    if (!((pe = i[44] | 0) & (ee = 1 << De))) {
                      i[44] = pe | ee;
                      i[a >> 2] = fe;
                      i[fe + 24 >> 2] = a;
                      i[fe + 12 >> 2] = fe;
                      i[fe + 8 >> 2] = fe;
                      break;
                    }
                    ee = Ie << ((De | 0) == 31 ? 0 : 25 - (De >>> 1) | 0);
                    pe = i[a >> 2] | 0;
                    for (;;) {
                      if ((i[pe + 4 >> 2] & -8 | 0) == (Ie | 0)) {
                        we = pe;
                        F = 281;
                        break;
                      }
                      if (!(se = i[(a = pe + 16 + (ee >>> 31 << 2) | 0) >> 2] | 0)) {
                        Le = a;
                        ke = pe;
                        F = 278;
                        break;
                      }
                      ee <<= 1;
                      pe = se;
                    }
                    if ((F | 0) == 278) {
                      if (!(Le >>> 0 < (i[47] | 0) >>> 0)) {
                        i[Le >> 2] = fe;
                        i[fe + 24 >> 2] = ke;
                        i[fe + 12 >> 2] = fe;
                        i[fe + 8 >> 2] = fe;
                        break;
                      }
                      g();
                    } else if ((F | 0) == 281) {
                      if ((ee = i[(pe = we + 8 | 0) >> 2] | 0) >>> 0 >= (se = i[47] | 0) >>> 0 & we >>> 0 >= se >>> 0) {
                        i[ee + 12 >> 2] = fe;
                        i[pe >> 2] = fe;
                        i[fe + 8 >> 2] = ee;
                        i[fe + 12 >> 2] = we;
                        i[fe + 24 >> 2] = 0;
                        break;
                      }
                      g();
                    }
                  } else {
                    ee = (i[46] | 0) + re | 0;
                    i[46] = ee;
                    i[49] = fe;
                    i[fe + 4 >> 2] = ee | 1;
                  }
                } while (0);
                return z + 8 | 0 | 0;
              }
              ve = 620;
            }
            for (;;) {
              if ((fe = i[ve >> 2] | 0) >>> 0 <= ce >>> 0 && (re = fe + (i[ve + 4 >> 2] | 0) | 0) >>> 0 > ce >>> 0) {
                Ge = re;
                break;
              }
              ve = i[ve + 8 >> 2] | 0;
            }
            fe = (z = (fe = (z = Ge + -47 | 0) + (((re = z + 8 | 0) & 7 | 0) == 0 ? 0 : 0 - re & 7) | 0) >>> 0 < (re = ce + 16 | 0) >>> 0 ? ce : fe) + 8 | 0;
            $ = le + (de = (($ = le + 8 | 0) & 7 | 0) == 0 ? 0 : 0 - $ & 7) | 0;
            ee = ue + -40 - de | 0;
            i[49] = $;
            i[46] = ee;
            i[$ + 4 >> 2] = ee | 1;
            i[$ + ee + 4 >> 2] = 40;
            i[50] = i[165];
            i[(ee = z + 4 | 0) >> 2] = 27;
            i[fe >> 2] = i[155];
            i[fe + 4 >> 2] = i[156];
            i[fe + 8 >> 2] = i[157];
            i[fe + 12 >> 2] = i[158];
            i[155] = le;
            i[156] = ue;
            i[158] = 0;
            i[157] = fe;
            fe = z + 24 | 0;
            do {
              i[(fe = fe + 4 | 0) >> 2] = 7;
            } while ((fe + 4 | 0) >>> 0 < Ge >>> 0);
            if ((z | 0) != (ce | 0)) {
              fe = z - ce | 0;
              i[ee >> 2] = i[ee >> 2] & -2;
              i[ce + 4 >> 2] = fe | 1;
              i[z >> 2] = fe;
              $ = fe >>> 3;
              if (fe >>> 0 < 256) {
                de = 212 + ($ << 1 << 2) | 0;
                if ((pe = i[43] | 0) & (se = 1 << $)) {
                  if ((a = i[($ = de + 8 | 0) >> 2] | 0) >>> 0 < (i[47] | 0) >>> 0) {
                    g();
                  } else {
                    Ue = $;
                    xe = a;
                  }
                } else {
                  i[43] = pe | se;
                  Ue = de + 8 | 0;
                  xe = de;
                }
                i[Ue >> 2] = ce;
                i[xe + 12 >> 2] = ce;
                i[ce + 8 >> 2] = xe;
                i[ce + 12 >> 2] = de;
                break;
              }
              Be = (de = fe >>> 8) ? fe >>> 0 > 16777215 ? 31 : fe >>> (($ = 14 - ((de = ((pe = de << (se = (de + 1048320 | 0) >>> 16 & 8)) + 520192 | 0) >>> 16 & 4) | se | (pe = ((a = pe << de) + 245760 | 0) >>> 16 & 2)) + (a << pe >>> 15) | 0) + 7 | 0) & 1 | $ << 1 : 0;
              $ = 476 + (Be << 2) | 0;
              i[ce + 28 >> 2] = Be;
              i[ce + 20 >> 2] = 0;
              i[re >> 2] = 0;
              if (!((pe = i[44] | 0) & (a = 1 << Be))) {
                i[44] = pe | a;
                i[$ >> 2] = ce;
                i[ce + 24 >> 2] = $;
                i[ce + 12 >> 2] = ce;
                i[ce + 8 >> 2] = ce;
                break;
              }
              a = fe << ((Be | 0) == 31 ? 0 : 25 - (Be >>> 1) | 0);
              pe = i[$ >> 2] | 0;
              for (;;) {
                if ((i[pe + 4 >> 2] & -8 | 0) == (fe | 0)) {
                  Fe = pe;
                  F = 307;
                  break;
                }
                if (!(se = i[($ = pe + 16 + (a >>> 31 << 2) | 0) >> 2] | 0)) {
                  je = $;
                  Ye = pe;
                  F = 304;
                  break;
                }
                a <<= 1;
                pe = se;
              }
              if ((F | 0) == 304) {
                if (!(je >>> 0 < (i[47] | 0) >>> 0)) {
                  i[je >> 2] = ce;
                  i[ce + 24 >> 2] = Ye;
                  i[ce + 12 >> 2] = ce;
                  i[ce + 8 >> 2] = ce;
                  break;
                }
                g();
              } else if ((F | 0) == 307) {
                if ((a = i[(pe = Fe + 8 | 0) >> 2] | 0) >>> 0 >= (fe = i[47] | 0) >>> 0 & Fe >>> 0 >= fe >>> 0) {
                  i[a + 12 >> 2] = ce;
                  i[pe >> 2] = ce;
                  i[ce + 8 >> 2] = a;
                  i[ce + 12 >> 2] = Fe;
                  i[ce + 24 >> 2] = 0;
                  break;
                }
                g();
              }
            }
          } else {
            if (((a = i[47] | 0) | 0) == 0 | le >>> 0 < a >>> 0) {
              i[47] = le;
            }
            i[155] = le;
            i[156] = ue;
            i[158] = 0;
            i[52] = i[161];
            i[51] = -1;
            a = 0;
            do {
              i[(pe = 212 + (a << 1 << 2) | 0) + 12 >> 2] = pe;
              i[pe + 8 >> 2] = pe;
              a = a + 1 | 0;
            } while ((a | 0) != 32);
            a = le + (pe = ((a = le + 8 | 0) & 7 | 0) == 0 ? 0 : 0 - a & 7) | 0;
            fe = ue + -40 - pe | 0;
            i[49] = a;
            i[46] = fe;
            i[a + 4 >> 2] = fe | 1;
            i[a + fe + 4 >> 2] = 40;
            i[50] = i[165];
          }
        } while (0);
        if ((ue = i[46] | 0) >>> 0 > k >>> 0) {
          le = ue - k | 0;
          i[46] = le;
          ce = (ue = i[49] | 0) + k | 0;
          i[49] = ce;
          i[ce + 4 >> 2] = le | 1;
          i[ue + 4 >> 2] = k | 3;
          return ue + 8 | 0 | 0;
        }
      }
      i[(O() | 0) >> 2] = 12;
      return 0 | 0;
    },
    _memcpy: function (e, t, n) {
      var a;
      e |= 0;
      t |= 0;
      if (((n |= 0) | 0) >= 4096) {
        return y(e | 0, t | 0, n | 0) | 0;
      }
      a = e | 0;
      if ((e & 3) == (t & 3)) {
        for (; e & 3;) {
          if (!n) {
            return a | 0;
          }
          r[e >> 0] = r[t >> 0] | 0;
          e = e + 1 | 0;
          t = t + 1 | 0;
          n = n - 1 | 0;
        }
        for (; (n | 0) >= 4;) {
          i[e >> 2] = i[t >> 2];
          e = e + 4 | 0;
          t = t + 4 | 0;
          n = n - 4 | 0;
        }
      }
      for (; (n | 0) > 0;) {
        r[e >> 0] = r[t >> 0] | 0;
        e = e + 1 | 0;
        t = t + 1 | 0;
        n = n - 1 | 0;
      }
      return a | 0;
    },
    _bitshift64Lshr: x,
    _fflush: function e(t) {
      t |= 0;
      var n = 0;
      var r = 0;
      var a = 0;
      var o = 0;
      var s = 0;
      var l = 0;
      var u = 0;
      do {
        if (t) {
          if ((i[t + 76 >> 2] | 0) <= -1) {
            n = w(t) | 0;
            break;
          }
          r = (R() | 0) == 0;
          a = w(t) | 0;
          if (!r) {
            N();
          }
          n = a;
        } else {
          o = i[13] | 0 ? e(i[13] | 0) | 0 : 0;
          p(36);
          if (a = i[8] | 0) {
            r = a;
            a = o;
            r = a;
            a = o;
            for (;;) {
              l = (i[r + 76 >> 2] | 0) > -1 ? R() | 0 : 0;
              u = (i[r + 20 >> 2] | 0) >>> 0 > (i[r + 28 >> 2] | 0) >>> 0 ? w(r) | 0 | a : a;
              if (l) {
                N();
              }
              if (!(r = i[r + 56 >> 2] | 0)) {
                s = u;
                break;
              }
              a = u;
            }
          } else {
            s = o;
          }
          S(36);
          n = s;
        }
      } while (0);
      return n | 0;
    },
    ___errno_location: O,
    _bitshift64Shl: B,
    runPostSets: function () {},
    stackAlloc: function (e) {
      var t;
      t = o;
      o = (o = o + (e |= 0) | 0) + 15 & -16;
      return t | 0;
    },
    stackSave: function () {
      return o | 0;
    },
    stackRestore: function (e) {
      o = e |= 0;
    },
    establishStackSpace: function (e, t) {
      o = e |= 0;
      t |= 0;
    },
    setThrew: function (e, t) {
      e |= 0;
      t |= 0;
      if (!s) {
        s = e;
        t;
      }
    },
    setTempRet0: function (e) {
      l = e |= 0;
    },
    getTempRet0: function () {
      return l | 0;
    },
    dynCall_ii: function (e, t) {
      t |= 0;
      return j[(e |= 0) & 1](t | 0) | 0;
    },
    dynCall_iiii: function (e, t, n, r) {
      t |= 0;
      n |= 0;
      r |= 0;
      return Y[(e |= 0) & 3](t | 0, n | 0, r | 0) | 0;
    },
    dynCall_vi: function (e, t) {
      t |= 0;
      K[(e |= 0) & 1](t | 0);
    }
  };
}(e.Na, e.Oa, buffer);
e._curve25519_donna = Z._curve25519_donna;
var Da = e._free = Z._free;
e.runPostSets = Z.runPostSets;
var cb = e._i64Add = Z._i64Add;
var ab = e._bitshift64Ashr = Z._bitshift64Ashr;
var bb = e._i64Subtract = Z._i64Subtract;
var db = e._memset = Z._memset;
var ua = e._malloc = Z._malloc;
var gc = e._memcpy = Z._memcpy;
var fb = e._bitshift64Lshr = Z._bitshift64Lshr;
e._fflush = Z._fflush;
e.___errno_location = Z.___errno_location;
var gb = e._bitshift64Shl = Z._bitshift64Shl;
function xc(e) {
  this.name = "ExitStatus";
  this.message = "Program terminated with exit(" + e + ")";
  this.status = e;
}
e.dynCall_ii = Z.dynCall_ii;
e.dynCall_iiii = Z.dynCall_iiii;
e.dynCall_vi = Z.dynCall_vi;
n.W = Z.stackAlloc;
n.na = Z.stackSave;
n.X = Z.stackRestore;
n.md = Z.establishStackSpace;
n.cb = Z.setTempRet0;
n.Ua = Z.getTempRet0;
xc.prototype = Error();
xc.prototype.constructor = xc;
var Yc = null;
var Xa = function t() {
  if (!e.calledRun) {
    $c();
  }
  if (!e.calledRun) {
    Xa = t;
  }
};
function $c(t) {
  function n() {
    if (!e.calledRun && (e.calledRun = true, !A)) {
      if (!xa) {
        xa = true;
        Oa(Qa);
      }
      Oa(Ra);
      if (e.onRuntimeInitialized) {
        e.onRuntimeInitialized();
      }
      if (e._main && bd) {
        e.callMain(t);
      }
      if (e.postRun) {
        for (typeof e.postRun == "function" && (e.postRun = [e.postRun]); e.postRun.length;) {
          Ua(e.postRun.shift());
        }
      }
      Oa(Sa);
    }
  }
  t = t || e.arguments;
  if (Yc === null) {
    Yc = Date.now();
  }
  if (!(L > 0)) {
    if (e.preRun) {
      for (typeof e.preRun == "function" && (e.preRun = [e.preRun]); e.preRun.length;) {
        Ta(e.preRun.shift());
      }
    }
    Oa(Pa);
    if (!(L > 0 || e.calledRun)) {
      if (e.setStatus) {
        e.setStatus("Running...");
        setTimeout(function () {
          setTimeout(function () {
            e.setStatus("");
          }, 1);
          n();
        }, 1);
      } else {
        n();
      }
    }
  }
}
function ad(t, n) {
  if (!n || !e.noExitRuntime) {
    if (!e.noExitRuntime && (A = true, m = undefined, Oa(K), e.onExit)) {
      e.onExit(t);
    }
    throw new xc(t);
  }
}
e.callMain = e.jd = function (t) {
  function n() {
    for (var e = 0; e < 3; e++) {
      i.push(0);
    }
  }
  assert(L == 0, "cannot call main when async dependencies remain! (listen on __ATMAIN__)");
  assert(Pa.length == 0, "cannot call main when preRun functions remain to be called");
  t = t || [];
  if (!xa) {
    xa = true;
    Oa(Qa);
  }
  var r = t.length + 1;
  var i = [G(Va(e.thisProgram), "i8", 0)];
  n();
  for (var a = 0; a < r - 1; a += 1) {
    i.push(G(Va(t[a]), "i8", 0));
    n();
  }
  i.push(0);
  i = G(i, "i32", 0);
  try {
    ad(e._main(r, i, 0), true);
  } catch (t) {
    if (!(t instanceof xc)) {
      if (t != "SimulateInfiniteLoop") {
        if (t && typeof t == "object" && t.stack) {
          e.S("exception thrown: " + [t, t.stack]);
        }
        throw t;
      }
      e.noExitRuntime = true;
    }
  }
};
e.run = e.run = $c;
e.exit = e.exit = ad;
var cd = [];
function z(t) {
  if (t !== undefined) {
    e.print(t);
    e.S(t);
    t = JSON.stringify(t);
  } else {
    t = "";
  }
  A = true;
  var n = "abort(" + t + ") at " + Ea() + "\nIf this abort() is unexpected, build with -s ASSERTIONS=1 which can give more information.";
  if (cd) {
    cd.forEach(function (e) {
      n = e(n, t);
    });
  }
  throw n;
}
e.abort = e.abort = z;
if (e.preInit) {
  for (typeof e.preInit == "function" && (e.preInit = [e.preInit]); e.preInit.length > 0;) {
    e.preInit.pop()();
  }
}
var bd = true;
if (e.noInitialRun) {
  bd = false;
}
$c();
module.exports = e;