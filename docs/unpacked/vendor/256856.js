var r = require("./445051.js");
var i = Uint8Array;
var a = Uint16Array;
var o = Uint32Array;
var s = new i([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]);
var u = new i([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]);
var l = new i([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
var c = function (e, t) {
  for (var n = new a(31), r = 0; r < 31; ++r) {
    n[r] = t += 1 << e[r - 1];
  }
  var i = new o(n[30]);
  for (r = 1; r < 30; ++r) {
    for (var s = n[r]; s < n[r + 1]; ++s) {
      i[s] = s - n[r] << 5 | r;
    }
  }
  return [n, i];
};
var f = c(s, 2);
var d = f[0];
var h = f[1];
d[28] = 258;
h[258] = 28;
for (var p = c(u, 0), m = p[0], v = p[1], g = new a(32768), y = 0; y < 32768; ++y) {
  var b = (y & 43690) >>> 1 | (y & 21845) << 1;
  b = ((b = (b & 52428) >>> 2 | (b & 13107) << 2) & 61680) >>> 4 | (b & 3855) << 4;
  g[y] = ((b & 65280) >>> 8 | (b & 255) << 8) >>> 1;
}
var w = function (e, t, n) {
  for (var r = e.length, i = 0, o = new a(t); i < r; ++i) {
    ++o[e[i] - 1];
  }
  var s;
  var u = new a(t);
  for (i = 0; i < t; ++i) {
    u[i] = u[i - 1] + o[i - 1] << 1;
  }
  if (n) {
    s = new a(1 << t);
    var l = 15 - t;
    for (i = 0; i < r; ++i) {
      if (e[i]) {
        for (var c = i << 4 | e[i], f = t - e[i], d = u[e[i] - 1]++ << f, h = d | (1 << f) - 1; d <= h; ++d) {
          s[g[d] >>> l] = c;
        }
      }
    }
  } else {
    s = new a(r);
    i = 0;
    s = new a(r);
    i = 0;
    for (; i < r; ++i) {
      if (e[i]) {
        s[i] = g[u[e[i] - 1]++] >>> 15 - e[i];
      }
    }
  }
  return s;
};
var _ = new i(288);
for (y = 0; y < 144; ++y) {
  _[y] = 8;
}
for (y = 144; y < 256; ++y) {
  _[y] = 9;
}
for (y = 256; y < 280; ++y) {
  _[y] = 7;
}
for (y = 280; y < 288; ++y) {
  _[y] = 8;
}
var x = new i(32);
for (y = 0; y < 32; ++y) {
  x[y] = 5;
}
var S = w(_, 9, 0);
var E = w(_, 9, 1);
var k = w(x, 5, 0);
var O = w(x, 5, 1);
var N = function (e) {
  for (var t = e[0], n = 1; n < e.length; ++n) {
    if (e[n] > t) {
      t = e[n];
    }
  }
  return t;
};
var T = function (e, t, n) {
  var r = t / 8 | 0;
  return (e[r] | e[r + 1] << 8) >> (t & 7) & n;
};
var M = function (e, t) {
  var n = t / 8 | 0;
  return (e[n] | e[n + 1] << 8 | e[n + 2] << 16) >> (t & 7);
};
var R = function (e) {
  return (e / 8 | 0) + (e & 7 && 1);
};
var A = function (e, t, n) {
  if (t == null || t < 0) {
    t = 0;
  }
  if (n == null || n > e.length) {
    n = e.length;
  }
  var r = new (e instanceof a ? a : e instanceof o ? o : i)(n - t);
  r.set(e.subarray(t, n));
  return r;
};
var P = function (e, t, n) {
  var r = e.length;
  if (!r || n && !n.l && r < 5) {
    return t || new i(0);
  }
  var a = !t || n;
  var o = !n || n.i;
  if (!n) {
    n = {};
  }
  if (!t) {
    t = new i(r * 3);
  }
  var c = function (e) {
    var n = t.length;
    if (e > n) {
      var r = new i(Math.max(n * 2, e));
      r.set(t);
      t = r;
    }
  };
  var f = n.f || 0;
  var h = n.p || 0;
  var p = n.b || 0;
  var v = n.l;
  var g = n.d;
  var y = n.m;
  var b = n.n;
  var _ = r * 8;
  do {
    if (!v) {
      n.f = f = T(e, h, 1);
      var x = T(e, h + 1, 3);
      h += 3;
      if (!x) {
        var S = e[(B = R(h) + 4) - 4] | e[B - 3] << 8;
        var k = B + S;
        if (k > r) {
          if (o) {
            throw "unexpected EOF";
          }
          break;
        }
        if (a) {
          c(p + S);
        }
        t.set(e.subarray(B, k), p);
        n.b = p += S;
        n.p = h = k * 8;
        continue;
      }
      if (x == 1) {
        v = E;
        g = O;
        y = 9;
        b = 5;
      } else {
        if (x != 2) {
          throw "invalid block type";
        }
        var P = T(e, h, 31) + 257;
        var C = T(e, h + 10, 15) + 4;
        var D = P + T(e, h + 5, 31) + 1;
        h += 14;
        for (var U = new i(D), I = new i(19), L = 0; L < C; ++L) {
          I[l[L]] = T(e, h + L * 3, 7);
        }
        h += C * 3;
        var j = N(I);
        var F = (1 << j) - 1;
        if (!o && h + D * (j + 7) > _) {
          break;
        }
        var z = w(I, j, 1);
        for (L = 0; L < D;) {
          var B;
          var V = z[T(e, h, F)];
          h += V & 15;
          if ((B = V >>> 4) < 16) {
            U[L++] = B;
          } else {
            var Y = 0;
            var H = 0;
            for (B == 16 ? (H = 3 + T(e, h, 3), h += 2, Y = U[L - 1]) : B == 17 ? (H = 3 + T(e, h, 7), h += 3) : B == 18 && (H = 11 + T(e, h, 127), h += 7); H--;) {
              U[L++] = Y;
            }
          }
        }
        var $ = U.subarray(0, P);
        var W = U.subarray(P);
        y = N($);
        b = N(W);
        v = w($, y, 1);
        g = w(W, b, 1);
      }
      if (h > _) {
        throw "unexpected EOF";
      }
    }
    if (a) {
      c(p + 131072);
    }
    for (var G = (1 << y) - 1, q = (1 << b) - 1, K = y + b + 18; o || h + K < _;) {
      var X = (Y = v[M(e, h) & G]) >>> 4;
      if ((h += Y & 15) > _) {
        throw "unexpected EOF";
      }
      if (!Y) {
        throw "invalid length/literal";
      }
      if (X < 256) {
        t[p++] = X;
      } else {
        if (X == 256) {
          v = null;
          break;
        }
        var Z = X - 254;
        if (X > 264) {
          var Q = s[L = X - 257];
          Z = T(e, h, (1 << Q) - 1) + d[L];
          h += Q;
        }
        var J = g[M(e, h) & q];
        var ee = J >>> 4;
        if (!J) {
          throw "invalid distance";
        }
        h += J & 15;
        W = m[ee];
        if (ee > 3) {
          Q = u[ee];
          W += M(e, h) & (1 << Q) - 1;
          h += Q;
        }
        if (h > _) {
          throw "unexpected EOF";
        }
        if (a) {
          c(p + 131072);
        }
        for (var te = p + Z; p < te; p += 4) {
          t[p] = t[p - W];
          t[p + 1] = t[p + 1 - W];
          t[p + 2] = t[p + 2 - W];
          t[p + 3] = t[p + 3 - W];
        }
        p = te;
      }
    }
    n.l = v;
    n.p = h;
    n.b = p;
    if (v) {
      f = 1;
      n.m = y;
      n.d = g;
      n.n = b;
    }
  } while (!f);
  if (p == t.length) {
    return t;
  } else {
    return A(t, 0, p);
  }
};
var C = function (e, t, n) {
  n <<= t & 7;
  var r = t / 8 | 0;
  e[r] |= n;
  e[r + 1] |= n >>> 8;
};
var D = function (e, t, n) {
  n <<= t & 7;
  var r = t / 8 | 0;
  e[r] |= n;
  e[r + 1] |= n >>> 8;
  e[r + 2] |= n >>> 16;
};
var U = function (e, t) {
  for (var n = [], r = 0; r < e.length; ++r) {
    if (e[r]) {
      n.push({
        s: r,
        f: e[r]
      });
    }
  }
  var o = n.length;
  var s = n.slice();
  if (!o) {
    return [V, 0];
  }
  if (o == 1) {
    var u = new i(n[0].s + 1);
    u[n[0].s] = 1;
    return [u, 1];
  }
  n.sort(function (e, t) {
    return e.f - t.f;
  });
  n.push({
    s: -1,
    f: 25001
  });
  var l = n[0];
  var c = n[1];
  var f = 0;
  var d = 1;
  var h = 2;
  for (n[0] = {
    s: -1,
    f: l.f + c.f,
    l,
    r: c
  }; d != o - 1;) {
    l = n[n[f].f < n[h].f ? f++ : h++];
    c = n[f != d && n[f].f < n[h].f ? f++ : h++];
    n[d++] = {
      s: -1,
      f: l.f + c.f,
      l,
      r: c
    };
  }
  var p = s[0].s;
  for (r = 1; r < o; ++r) {
    if (s[r].s > p) {
      p = s[r].s;
    }
  }
  var m = new a(p + 1);
  var v = I(n[d - 1], m, 0);
  if (v > t) {
    r = 0;
    var g = 0;
    var y = v - t;
    var b = 1 << y;
    for (s.sort(function (e, t) {
      return m[t.s] - m[e.s] || e.f - t.f;
    }); r < o; ++r) {
      var w = s[r].s;
      if (!(m[w] > t)) {
        break;
      }
      g += b - (1 << v - m[w]);
      m[w] = t;
    }
    for (g >>>= y; g > 0;) {
      var _ = s[r].s;
      if (m[_] < t) {
        g -= 1 << t - m[_]++ - 1;
      } else {
        ++r;
      }
    }
    for (; r >= 0 && g; --r) {
      var x = s[r].s;
      if (m[x] == t) {
        --m[x];
        ++g;
      }
    }
    v = t;
  }
  return [new i(m), v];
};
var I = function (e, t, n) {
  if (e.s == -1) {
    return Math.max(I(e.l, t, n + 1), I(e.r, t, n + 1));
  } else {
    return t[e.s] = n;
  }
};
var L = function (e) {
  for (var t = e.length; t && !e[--t];);
  for (var n = new a(++t), r = 0, i = e[0], o = 1, s = function (e) {
      n[r++] = e;
    }, u = 1; u <= t; ++u) {
    if (e[u] == i && u != t) {
      ++o;
    } else {
      if (!i && o > 2) {
        for (; o > 138; o -= 138) {
          s(32754);
        }
        if (o > 2) {
          s(o > 10 ? o - 11 << 5 | 28690 : o - 3 << 5 | 12305);
          o = 0;
        }
      } else if (o > 3) {
        s(i);
        --o;
        for (; o > 6; o -= 6) {
          s(8304);
        }
        if (o > 2) {
          s(o - 3 << 5 | 8208);
          o = 0;
        }
      }
      for (; o--;) {
        s(i);
      }
      o = 1;
      i = e[u];
    }
  }
  return [n.subarray(0, r), t];
};
var j = function (e, t) {
  for (var n = 0, r = 0; r < t.length; ++r) {
    n += e[r] * t[r];
  }
  return n;
};
var F = function (e, t, n) {
  var r = n.length;
  var i = R(t + 2);
  e[i] = r & 255;
  e[i + 1] = r >>> 8;
  e[i + 2] = e[i] ^ 255;
  e[i + 3] = e[i + 1] ^ 255;
  for (var a = 0; a < r; ++a) {
    e[i + a + 4] = n[a];
  }
  return (i + 4 + r) * 8;
};
var z = function (e, t, n, r, i, o, c, f, d, h, p) {
  C(t, p++, n);
  ++i[256];
  for (var m = U(i, 15), v = m[0], g = m[1], y = U(o, 15), b = y[0], E = y[1], O = L(v), N = O[0], T = O[1], M = L(b), R = M[0], A = M[1], P = new a(19), I = 0; I < N.length; ++I) {
    P[N[I] & 31]++;
  }
  for (I = 0; I < R.length; ++I) {
    P[R[I] & 31]++;
  }
  for (var z = U(P, 7), B = z[0], V = z[1], Y = 19; Y > 4 && !B[l[Y - 1]]; --Y);
  var H;
  var $;
  var W;
  var G;
  var q = h + 5 << 3;
  var K = j(i, _) + j(o, x) + c;
  var X = j(i, v) + j(o, b) + c + 14 + Y * 3 + j(P, B) + (P[16] * 2 + P[17] * 3 + P[18] * 7);
  if (q <= K && q <= X) {
    return F(t, p, e.subarray(d, d + h));
  }
  C(t, p, 1 + (X < K));
  p += 2;
  if (X < K) {
    H = w(v, g, 0);
    $ = v;
    W = w(b, E, 0);
    G = b;
    var Z = w(B, V, 0);
    C(t, p, T - 257);
    C(t, p + 5, A - 1);
    C(t, p + 10, Y - 4);
    p += 14;
    for (I = 0; I < Y; ++I) {
      C(t, p + I * 3, B[l[I]]);
    }
    p += Y * 3;
    for (var Q = [N, R], J = 0; J < 2; ++J) {
      var ee = Q[J];
      for (I = 0; I < ee.length; ++I) {
        var te = ee[I] & 31;
        C(t, p, Z[te]);
        p += B[te];
        if (te > 15) {
          C(t, p, ee[I] >>> 5 & 127);
          p += ee[I] >>> 12;
        }
      }
    }
  } else {
    H = S;
    $ = _;
    W = k;
    G = x;
  }
  for (I = 0; I < f; ++I) {
    if (r[I] > 255) {
      te = r[I] >>> 18 & 31;
      D(t, p, H[te + 257]);
      p += $[te + 257];
      if (te > 7) {
        C(t, p, r[I] >>> 23 & 31);
        p += s[te];
      }
      var ne = r[I] & 31;
      D(t, p, W[ne]);
      p += G[ne];
      if (ne > 3) {
        D(t, p, r[I] >>> 5 & 8191);
        p += u[ne];
      }
    } else {
      D(t, p, H[r[I]]);
      p += $[r[I]];
    }
  }
  D(t, p, H[256]);
  return p + $[256];
};
var B = new o([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]);
var V = new i(0);
var Y = function (e, t, n, r, l, c) {
  var f = e.length;
  var d = new i(r + f + (1 + Math.ceil(f / 7000)) * 5 + l);
  var p = d.subarray(r, d.length - l);
  var m = 0;
  if (!t || f < 8) {
    for (var g = 0; g <= f; g += 65535) {
      var y = g + 65535;
      if (y < f) {
        m = F(p, m, e.subarray(g, y));
      } else {
        p[g] = c;
        m = F(p, m, e.subarray(g, f));
      }
    }
  } else {
    for (var b = B[t - 1], w = b >>> 13, _ = b & 8191, x = (1 << n) - 1, S = new a(32768), E = new a(x + 1), k = Math.ceil(n / 3), O = k * 2, N = function (t) {
        return (e[t] ^ e[t + 1] << k ^ e[t + 2] << O) & x;
      }, T = new o(25000), M = new a(288), P = new a(32), C = 0, D = 0, U = (g = 0, 0), I = 0, L = 0; g < f; ++g) {
      var j = N(g);
      var Y = g & 32767;
      var H = E[j];
      S[Y] = H;
      E[j] = Y;
      if (I <= g) {
        var $ = f - g;
        if ((C > 7000 || U > 24576) && $ > 423) {
          m = z(e, p, 0, T, M, P, D, U, L, g - L, m);
          U = C = D = 0;
          L = g;
          for (var W = 0; W < 286; ++W) {
            M[W] = 0;
          }
          for (W = 0; W < 30; ++W) {
            P[W] = 0;
          }
        }
        var G = 2;
        var q = 0;
        var K = _;
        var X = Y - H & 32767;
        if ($ > 2 && j == N(g - X)) {
          for (var Z = Math.min(w, $) - 1, Q = Math.min(32767, g), J = Math.min(258, $); X <= Q && --K && Y != H;) {
            if (e[g + G] == e[g + G - X]) {
              for (var ee = 0; ee < J && e[g + ee] == e[g + ee - X]; ++ee);
              if (ee > G) {
                G = ee;
                q = X;
                if (ee > Z) {
                  break;
                }
                var te = Math.min(X, ee - 2);
                var ne = 0;
                for (W = 0; W < te; ++W) {
                  var re = g - X + W + 32768 & 32767;
                  var ie = re - S[re] + 32768 & 32767;
                  if (ie > ne) {
                    ne = ie;
                    H = re;
                  }
                }
              }
            }
            X += (Y = H) - (H = S[Y]) + 32768 & 32767;
          }
        }
        if (q) {
          T[U++] = h[G] << 18 | 268435456 | v[q];
          var ae = h[G] & 31;
          var oe = v[q] & 31;
          D += s[ae] + u[oe];
          ++M[257 + ae];
          ++P[oe];
          I = g + G;
          ++C;
        } else {
          T[U++] = e[g];
          ++M[e[g]];
        }
      }
    }
    m = z(e, p, c, T, M, P, D, U, L, g - L, m);
    if (!c && m & 7) {
      m = F(p, m + 1, V);
    }
  }
  return A(d, 0, r + R(m) + l);
};
var H = function () {
  for (var e = new o(256), t = 0; t < 256; ++t) {
    for (var n = t, r = 9; --r;) {
      n = (n & 1 && 3988292384) ^ n >>> 1;
    }
    e[t] = n;
  }
  return e;
}();
var $ = function () {
  var e = -1;
  return {
    p: function (t) {
      for (var n = e, r = 0; r < t.length; ++r) {
        n = H[n & 255 ^ t[r]] ^ n >>> 8;
      }
      e = n;
    },
    d: function () {
      return ~e;
    }
  };
};
var W = function () {
  var e = 1;
  var t = 0;
  return {
    p: function (n) {
      for (var r = e, i = t, a = n.length, o = 0; o != a;) {
        for (var s = Math.min(o + 2655, a); o < s; ++o) {
          i += r += n[o];
        }
        r = (r & 65535) + (r >> 16) * 15;
        i = (i & 65535) + (i >> 16) * 15;
      }
      e = r;
      t = i;
    },
    d: function () {
      return ((e %= 65521) >>> 8 << 16 | ((t %= 65521) & 255) << 8 | t >>> 8) + ((e & 255) << 23) * 2;
    }
  };
};
var G = function (e, t, n, r, i) {
  return Y(e, t.level == null ? 6 : t.level, t.mem == null ? Math.ceil(Math.max(8, Math.min(13, Math.log(e.length))) * 1.5) : 12 + t.mem, n, r, !i);
};
var q = function (e, t) {
  var n = {};
  for (var r in e) {
    n[r] = e[r];
  }
  for (var r in t) {
    n[r] = t[r];
  }
  return n;
};
var K = function (e, t, n) {
  for (var r = e(), i = e.toString(), a = i.slice(i.indexOf("[") + 1, i.lastIndexOf("]")).replace(/ /g, "").split(","), o = 0; o < r.length; ++o) {
    var s = r[o];
    var u = a[o];
    if (typeof s == "function") {
      t += ";" + u + "=";
      var l = s.toString();
      if (s.prototype) {
        if (l.indexOf("[native code]") != -1) {
          var c = l.indexOf(" ", 8) + 1;
          t += l.slice(c, l.indexOf("(", c));
        } else {
          t += l;
          for (var f in s.prototype) {
            t += ";" + u + ".prototype." + f + "=" + s.prototype[f].toString();
          }
        }
      } else {
        t += l;
      }
    } else {
      n[u] = s;
    }
  }
  return [t, n];
};
var X = [];
var Z = function (e, t, n, s) {
  var u;
  if (!X[n]) {
    for (var l = "", c = {}, f = e.length - 1, d = 0; d < f; ++d) {
      l = (u = K(e[d], l, c))[0];
      c = u[1];
    }
    X[n] = K(e[f], l, c);
  }
  var h = q({}, X[n][1]);
  return r.default(X[n][0] + ";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage=" + t.toString() + "}", n, h, function (e) {
    var t = [];
    for (var n in e) {
      if (e[n] instanceof i || e[n] instanceof a || e[n] instanceof o) {
        t.push((e[n] = new e[n].constructor(e[n])).buffer);
      }
    }
    return t;
  }(h), s);
};
var Q = function () {
  return [i, a, o, s, u, l, d, m, E, O, g, w, N, T, M, R, A, P, Ne, ie, ae];
};
var J = function () {
  return [i, a, o, s, u, l, h, v, S, _, k, x, g, B, V, w, C, D, U, I, L, j, F, z, R, A, Y, G, Se, ie];
};
var ee = function () {
  return [he, ve, de, $, H];
};
var te = function () {
  return [pe, me];
};
var ne = function () {
  return [ge, de, W];
};
var re = function () {
  return [ye];
};
var ie = function (e) {
  return postMessage(e, [e.buffer]);
};
var ae = function (e) {
  return e && e.size && new i(e.size);
};
var oe = function (e, t, n, r, i, a) {
  var o = Z(n, r, i, function (e, t) {
    o.terminate();
    a(e, t);
  });
  o.postMessage([e, t], t.consume ? [e.buffer] : []);
  return function () {
    o.terminate();
  };
};
var se = function (e) {
  e.ondata = function (e, t) {
    return postMessage([e, t], [e.buffer]);
  };
  return function (t) {
    return e.push(t.data[0], t.data[1]);
  };
};
var ue = function (e, t, n, r, i) {
  var a;
  var o = Z(e, r, i, function (e, n) {
    if (e) {
      o.terminate();
      t.ondata.call(t, e);
    } else {
      if (n[1]) {
        o.terminate();
      }
      t.ondata.call(t, e, n[0], n[1]);
    }
  });
  o.postMessage(n);
  t.push = function (e, n) {
    if (a) {
      throw "stream finished";
    }
    if (!t.ondata) {
      throw "no stream handler";
    }
    o.postMessage([e, a = n], [e.buffer]);
  };
  t.terminate = function () {
    o.terminate();
  };
};
var le = function (e, t) {
  return e[t] | e[t + 1] << 8;
};
var ce = function (e, t) {
  return (e[t] | e[t + 1] << 8 | e[t + 2] << 16) + (e[t + 3] << 23) * 2;
};
var fe = function (e, t) {
  return ce(e, t) | ce(e, t) * 4294967296;
};
var de = function (e, t, n) {
  for (; n; ++t) {
    e[t] = n;
    n >>>= 8;
  }
};
var he = function (e, t) {
  var n = t.filename;
  e[0] = 31;
  e[1] = 139;
  e[2] = 8;
  e[8] = t.level < 2 ? 4 : t.level == 9 ? 2 : 0;
  e[9] = 3;
  if (t.mtime != 0) {
    de(e, 4, Math.floor(new Date(t.mtime || Date.now()) / 1000));
  }
  if (n) {
    e[3] = 8;
    for (var r = 0; r <= n.length; ++r) {
      e[r + 10] = n.charCodeAt(r);
    }
  }
};
var pe = function (e) {
  if (e[0] != 31 || e[1] != 139 || e[2] != 8) {
    throw "invalid gzip data";
  }
  var t = e[3];
  var n = 10;
  if (t & 4) {
    n += e[10] | 2 + (e[11] << 8);
  }
  for (var r = (t >> 3 & 1) + (t >> 4 & 1); r > 0; r -= !e[n++]);
  return n + (t & 2);
};
var me = function (e) {
  var t = e.length;
  return (e[t - 4] | e[t - 3] << 8 | e[t - 2] << 16) + (e[t - 1] << 23) * 2;
};
var ve = function (e) {
  return 10 + (e.filename && e.filename.length + 1 || 0);
};
var ge = function (e, t) {
  var n = t.level;
  var r = n == 0 ? 0 : n < 6 ? 1 : n == 9 ? 3 : 2;
  e[0] = 120;
  e[1] = r << 6 | (r ? 32 - r * 2 : 1);
};
var ye = function (e) {
  if ((e[0] & 15) != 8 || e[0] >>> 4 > 7 || (e[0] << 8 | e[1]) % 31) {
    throw "invalid zlib data";
  }
  if (e[1] & 32) {
    throw "invalid zlib data: preset dictionaries not supported";
  }
};
function be(e, t) {
  if (!(t || typeof e != "function")) {
    t = e;
    e = {};
  }
  this.ondata = t;
  return e;
}
var we = function () {
  function e(e, t) {
    if (!(t || typeof e != "function")) {
      t = e;
      e = {};
    }
    this.ondata = t;
    this.o = e || {};
  }
  e.prototype.p = function (e, t) {
    this.ondata(G(e, this.o, 0, 0, !t), t);
  };
  e.prototype.push = function (e, t) {
    if (this.d) {
      throw "stream finished";
    }
    if (!this.ondata) {
      throw "no stream handler";
    }
    this.d = t;
    this.p(e, t || false);
  };
  return e;
}();
exports.Deflate = we;
var _e = function () {
  return function (e, t) {
    ue([J, function () {
      return [se, we];
    }], this, be.call(this, e, t), function (e) {
      var t = new we(e.data);
      onmessage = se(t);
    }, 6);
  };
}();
function xe(e, t, n) {
  if (!n) {
    n = t;
    t = {};
  }
  if (typeof n != "function") {
    throw "no callback";
  }
  return oe(e, t, [J], function (e) {
    return ie(Se(e.data[0], e.data[1]));
  }, 0, n);
}
function Se(e, t) {
  return G(e, t || {}, 0, 0);
}
exports.AsyncDeflate = _e;
exports.deflate = xe;
exports.deflateSync = Se;
var Ee = function () {
  function e(e) {
    this.s = {};
    this.p = new i(0);
    this.ondata = e;
  }
  e.prototype.e = function (e) {
    if (this.d) {
      throw "stream finished";
    }
    if (!this.ondata) {
      throw "no stream handler";
    }
    var t = this.p.length;
    var n = new i(t + e.length);
    n.set(this.p);
    n.set(e, t);
    this.p = n;
  };
  e.prototype.c = function (e) {
    this.d = this.s.i = e || false;
    var t = this.s.b;
    var n = P(this.p, this.o, this.s);
    this.ondata(A(n, t, this.s.b), this.d);
    this.o = A(n, this.s.b - 32768);
    this.s.b = this.o.length;
    this.p = A(this.p, this.s.p / 8 | 0);
    this.s.p &= 7;
  };
  e.prototype.push = function (e, t) {
    this.e(e);
    this.c(t);
  };
  return e;
}();
exports.Inflate = Ee;
var ke = function () {
  return function (e) {
    this.ondata = e;
    ue([Q, function () {
      return [se, Ee];
    }], this, 0, function () {
      var e = new Ee();
      onmessage = se(e);
    }, 7);
  };
}();
function Oe(e, t, n) {
  if (!n) {
    n = t;
    t = {};
  }
  if (typeof n != "function") {
    throw "no callback";
  }
  return oe(e, t, [Q], function (e) {
    return ie(Ne(e.data[0], ae(e.data[1])));
  }, 1, n);
}
function Ne(e, t) {
  return P(e, t);
}
exports.AsyncInflate = ke;
exports.inflate = Oe;
exports.inflateSync = Ne;
var Te = function () {
  function e(e, t) {
    this.c = $();
    this.l = 0;
    this.v = 1;
    we.call(this, e, t);
  }
  e.prototype.push = function (e, t) {
    we.prototype.push.call(this, e, t);
  };
  e.prototype.p = function (e, t) {
    this.c.p(e);
    this.l += e.length;
    var n = G(e, this.o, this.v && ve(this.o), t && 8, !t);
    if (this.v) {
      he(n, this.o);
      this.v = 0;
    }
    if (t) {
      de(n, n.length - 8, this.c.d());
      de(n, n.length - 4, this.l);
    }
    this.ondata(n, t);
  };
  return e;
}();
exports.Gzip = Te;
exports.Compress = Te;
var Me = function () {
  return function (e, t) {
    ue([J, ee, function () {
      return [se, we, Te];
    }], this, be.call(this, e, t), function (e) {
      var t = new Te(e.data);
      onmessage = se(t);
    }, 8);
  };
}();
function Re(e, t, n) {
  if (!n) {
    n = t;
    t = {};
  }
  if (typeof n != "function") {
    throw "no callback";
  }
  return oe(e, t, [J, ee, function () {
    return [Ae];
  }], function (e) {
    return ie(Ae(e.data[0], e.data[1]));
  }, 2, n);
}
function Ae(e, t) {
  if (!t) {
    t = {};
  }
  var n = $();
  var r = e.length;
  n.p(e);
  var i = G(e, t, ve(t), 8);
  var a = i.length;
  he(i, t);
  de(i, a - 8, n.d());
  de(i, a - 4, r);
  return i;
}
exports.AsyncGzip = Me;
exports.AsyncCompress = Me;
exports.gzip = Re;
exports.compress = Re;
exports.gzipSync = Ae;
exports.compressSync = Ae;
var Pe = function () {
  function e(e) {
    this.v = 1;
    Ee.call(this, e);
  }
  e.prototype.push = function (e, t) {
    Ee.prototype.e.call(this, e);
    if (this.v) {
      var n = this.p.length > 3 ? pe(this.p) : 4;
      if (n >= this.p.length && !t) {
        return;
      }
      this.p = this.p.subarray(n);
      this.v = 0;
    }
    if (t) {
      if (this.p.length < 8) {
        throw "invalid gzip stream";
      }
      this.p = this.p.subarray(0, -8);
    }
    Ee.prototype.c.call(this, t);
  };
  return e;
}();
exports.Gunzip = Pe;
var Ce = function () {
  return function (e) {
    this.ondata = e;
    ue([Q, te, function () {
      return [se, Ee, Pe];
    }], this, 0, function () {
      var e = new Pe();
      onmessage = se(e);
    }, 9);
  };
}();
function De(e, t, n) {
  if (!n) {
    n = t;
    t = {};
  }
  if (typeof n != "function") {
    throw "no callback";
  }
  return oe(e, t, [Q, te, function () {
    return [Ue];
  }], function (e) {
    return ie(Ue(e.data[0]));
  }, 3, n);
}
function Ue(e, t) {
  return P(e.subarray(pe(e), -8), t || new i(me(e)));
}
exports.AsyncGunzip = Ce;
exports.gunzip = De;
exports.gunzipSync = Ue;
var Ie = function () {
  function e(e, t) {
    this.c = W();
    this.v = 1;
    we.call(this, e, t);
  }
  e.prototype.push = function (e, t) {
    we.prototype.push.call(this, e, t);
  };
  e.prototype.p = function (e, t) {
    this.c.p(e);
    var n = G(e, this.o, this.v && 2, t && 4, !t);
    if (this.v) {
      ge(n, this.o);
      this.v = 0;
    }
    if (t) {
      de(n, n.length - 4, this.c.d());
    }
    this.ondata(n, t);
  };
  return e;
}();
exports.Zlib = Ie;
var Le = function () {
  return function (e, t) {
    ue([J, ne, function () {
      return [se, we, Ie];
    }], this, be.call(this, e, t), function (e) {
      var t = new Ie(e.data);
      onmessage = se(t);
    }, 10);
  };
}();
function je(e, t) {
  if (!t) {
    t = {};
  }
  var n = W();
  n.p(e);
  var r = G(e, t, 2, 4);
  ge(r, t);
  de(r, r.length - 4, n.d());
  return r;
}
exports.AsyncZlib = Le;
exports.zlib = function (e, t, n) {
  if (!n) {
    n = t;
    t = {};
  }
  if (typeof n != "function") {
    throw "no callback";
  }
  return oe(e, t, [J, ne, function () {
    return [je];
  }], function (e) {
    return ie(je(e.data[0], e.data[1]));
  }, 4, n);
};
exports.zlibSync = je;
var Fe = function () {
  function e(e) {
    this.v = 1;
    Ee.call(this, e);
  }
  e.prototype.push = function (e, t) {
    Ee.prototype.e.call(this, e);
    if (this.v) {
      if (this.p.length < 2 && !t) {
        return;
      }
      this.p = this.p.subarray(2);
      this.v = 0;
    }
    if (t) {
      if (this.p.length < 4) {
        throw "invalid zlib stream";
      }
      this.p = this.p.subarray(0, -4);
    }
    Ee.prototype.c.call(this, t);
  };
  return e;
}();
exports.Unzlib = Fe;
var ze = function () {
  return function (e) {
    this.ondata = e;
    ue([Q, re, function () {
      return [se, Ee, Fe];
    }], this, 0, function () {
      var e = new Fe();
      onmessage = se(e);
    }, 11);
  };
}();
function Be(e, t, n) {
  if (!n) {
    n = t;
    t = {};
  }
  if (typeof n != "function") {
    throw "no callback";
  }
  return oe(e, t, [Q, re, function () {
    return [Ve];
  }], function (e) {
    return ie(Ve(e.data[0], ae(e.data[1])));
  }, 5, n);
}
function Ve(e, t) {
  return P((ye(e), e.subarray(2, -4)), t);
}
exports.AsyncUnzlib = ze;
exports.unzlib = Be;
exports.unzlibSync = Ve;
var Ye = function () {
  function e(e) {
    this.G = Pe;
    this.I = Ee;
    this.Z = Fe;
    this.ondata = e;
  }
  e.prototype.push = function (e, t) {
    if (!this.ondata) {
      throw "no stream handler";
    }
    if (this.s) {
      this.s.push(e, t);
    } else {
      if (this.p && this.p.length) {
        var n = new i(this.p.length + e.length);
        n.set(this.p);
        n.set(e, this.p.length);
      } else {
        this.p = e;
      }
      if (this.p.length > 2) {
        var r = this;
        var a = function () {
          r.ondata.apply(r, arguments);
        };
        this.s = this.p[0] == 31 && this.p[1] == 139 && this.p[2] == 8 ? new this.G(a) : (this.p[0] & 15) != 8 || this.p[0] >> 4 > 7 || (this.p[0] << 8 | this.p[1]) % 31 ? new this.I(a) : new this.Z(a);
        this.s.push(this.p, t);
        this.p = null;
      }
    }
  };
  return e;
}();
exports.Decompress = Ye;
var He = function () {
  function e(e) {
    this.G = Ce;
    this.I = ke;
    this.Z = ze;
    this.ondata = e;
  }
  e.prototype.push = function (e, t) {
    Ye.prototype.push.call(this, e, t);
  };
  return e;
}();
exports.AsyncDecompress = He;
exports.decompress = function (e, t, n) {
  if (!n) {
    n = t;
    t = {};
  }
  if (typeof n != "function") {
    throw "no callback";
  }
  if (e[0] == 31 && e[1] == 139 && e[2] == 8) {
    return De(e, t, n);
  } else if ((e[0] & 15) != 8 || e[0] >> 4 > 7 || (e[0] << 8 | e[1]) % 31) {
    return Oe(e, t, n);
  } else {
    return Be(e, t, n);
  }
};
exports.decompressSync = function (e, t) {
  if (e[0] == 31 && e[1] == 139 && e[2] == 8) {
    return Ue(e, t);
  } else if ((e[0] & 15) != 8 || e[0] >> 4 > 7 || (e[0] << 8 | e[1]) % 31) {
    return Ne(e, t);
  } else {
    return Ve(e, t);
  }
};
var $e = function (e, t, n, r) {
  for (var a in e) {
    var o = e[a];
    var s = t + a;
    if (o instanceof i) {
      n[s] = [o, r];
    } else if (Array.isArray(o)) {
      n[s] = [o[0], q(r, o[1])];
    } else {
      $e(o, s + "/", n, r);
    }
  }
};
var We = typeof TextEncoder != "undefined" && new TextEncoder();
var Ge = typeof TextDecoder != "undefined" && new TextDecoder();
var qe = 0;
try {
  Ge.decode(V, {
    stream: true
  });
  qe = 1;
} catch (e) {}
var Ke = function (e) {
  for (var t = "", n = 0;;) {
    var r = e[n++];
    var i = (r > 127) + (r > 223) + (r > 239);
    if (n + i > e.length) {
      return [t, A(e, n - 1)];
    }
    if (i) {
      if (i == 3) {
        r = ((r & 15) << 18 | (e[n++] & 63) << 12 | (e[n++] & 63) << 6 | e[n++] & 63) - 65536;
        t += String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320);
      } else {
        t += i & 1 ? String.fromCharCode((r & 31) << 6 | e[n++] & 63) : String.fromCharCode((r & 15) << 12 | (e[n++] & 63) << 6 | e[n++] & 63);
      }
    } else {
      t += String.fromCharCode(r);
    }
  }
};
var Xe = function () {
  function e(e) {
    this.ondata = e;
    if (qe) {
      this.t = new TextDecoder();
    } else {
      this.p = V;
    }
  }
  e.prototype.push = function (e, t) {
    if (!this.ondata) {
      throw "no callback";
    }
    if (!t) {
      t = false;
    }
    if (this.t) {
      return this.ondata(this.t.decode(e, {
        stream: !t
      }), t);
    }
    var n = new i(this.p.length + e.length);
    n.set(this.p);
    n.set(e, this.p.length);
    var r = Ke(n);
    var a = r[0];
    var o = r[1];
    if (t && o.length) {
      throw "invalid utf-8 data";
    }
    this.p = o;
    this.ondata(a, t);
  };
  return e;
}();
exports.DecodeUTF8 = Xe;
var Ze = function () {
  function e(e) {
    this.ondata = e;
  }
  e.prototype.push = function (e, t) {
    if (!this.ondata) {
      throw "no callback";
    }
    this.ondata(Qe(e), t || false);
  };
  return e;
}();
function Qe(e, t) {
  if (t) {
    for (var n = new i(e.length), r = 0; r < e.length; ++r) {
      n[r] = e.charCodeAt(r);
    }
    return n;
  }
  if (We) {
    return We.encode(e);
  }
  var a = e.length;
  var o = new i(e.length + (e.length >> 1));
  var s = 0;
  var u = function (e) {
    o[s++] = e;
  };
  for (r = 0; r < a; ++r) {
    if (s + 5 > o.length) {
      var l = new i(s + 8 + (a - r << 1));
      l.set(o);
      o = l;
    }
    var c = e.charCodeAt(r);
    if (c < 128 || t) {
      u(c);
    } else if (c < 2048) {
      u(c >> 6 | 192);
      u(c & 63 | 128);
    } else if (c > 55295 && c < 57344) {
      u((c = 65536 + (c & 1047552) | e.charCodeAt(++r) & 1023) >> 18 | 240);
      u(c >> 12 & 63 | 128);
      u(c >> 6 & 63 | 128);
      u(c & 63 | 128);
    } else {
      u(c >> 12 | 224);
      u(c >> 6 & 63 | 128);
      u(c & 63 | 128);
    }
  }
  return A(o, 0, s);
}
function Je(e, t) {
  if (t) {
    for (var n = "", r = 0; r < e.length; r += 16384) {
      n += String.fromCharCode.apply(null, e.subarray(r, r + 16384));
    }
    return n;
  }
  if (Ge) {
    return Ge.decode(e);
  }
  var i = Ke(e);
  var a = i[0];
  if (i[1].length) {
    throw "invalid utf-8 data";
  }
  return a;
}
exports.EncodeUTF8 = Ze;
exports.strToU8 = Qe;
exports.strFromU8 = Je;
var et = function (e) {
  if (e == 1) {
    return 3;
  } else if (e < 6) {
    return 2;
  } else if (e == 9) {
    return 1;
  } else {
    return 0;
  }
};
var tt = function (e, t) {
  return t + 30 + le(e, t + 26) + le(e, t + 28);
};
var nt = function (e, t, n) {
  var r = le(e, t + 28);
  var i = Je(e.subarray(t + 46, t + 46 + r), !(le(e, t + 8) & 2048));
  var a = t + 46 + r;
  var o = ce(e, t + 20);
  var s = n && o == 4294967295 ? rt(e, a) : [o, ce(e, t + 24), ce(e, t + 42)];
  var u = s[0];
  var l = s[1];
  var c = s[2];
  return [le(e, t + 10), u, l, i, a + le(e, t + 30) + le(e, t + 32), c];
};
var rt = function (e, t) {
  for (; le(e, t) != 1; t += 4 + le(e, t + 2));
  return [fe(e, t + 12), fe(e, t + 4), fe(e, t + 20)];
};
var it = function (e) {
  var t = 0;
  if (e) {
    for (var n in e) {
      var r = e[n].length;
      if (r > 65535) {
        throw "extra field too long";
      }
      t += r + 4;
    }
  }
  return t;
};
var at = function (e, t, n, r, i, a, o, s) {
  var u = r.length;
  var l = n.extra;
  var c = s && s.length;
  var f = it(l);
  de(e, t, o != null ? 33639248 : 67324752);
  t += 4;
  if (o != null) {
    e[t++] = 20;
    e[t++] = n.os;
  }
  e[t] = 20;
  t += 2;
  e[t++] = n.flag << 1 | (a == null && 8);
  e[t++] = i && 8;
  e[t++] = n.compression & 255;
  e[t++] = n.compression >> 8;
  var d = new Date(n.mtime == null ? Date.now() : n.mtime);
  var h = d.getFullYear() - 1980;
  if (h < 0 || h > 119) {
    throw "date not in range 1980-2099";
  }
  de(e, t, (h << 24) * 2 | d.getMonth() + 1 << 21 | d.getDate() << 16 | d.getHours() << 11 | d.getMinutes() << 5 | d.getSeconds() >>> 1);
  t += 4;
  if (a != null) {
    de(e, t, n.crc);
    de(e, t + 4, a);
    de(e, t + 8, n.size);
  }
  de(e, t + 12, u);
  de(e, t + 14, f);
  t += 16;
  if (o != null) {
    de(e, t, c);
    de(e, t + 6, n.attrs);
    de(e, t + 10, o);
    t += 14;
  }
  e.set(r, t);
  t += u;
  if (f) {
    for (var p in l) {
      var m = l[p];
      var v = m.length;
      de(e, t, +p);
      de(e, t + 2, v);
      e.set(m, t + 4);
      t += 4 + v;
    }
  }
  if (c) {
    e.set(s, t);
    t += c;
  }
  return t;
};
var ot = function (e, t, n, r, i) {
  de(e, t, 101010256);
  de(e, t + 8, n);
  de(e, t + 10, n);
  de(e, t + 12, r);
  de(e, t + 16, i);
};
var st = function () {
  function e(e) {
    this.filename = e;
    this.c = $();
    this.size = 0;
    this.compression = 0;
  }
  e.prototype.process = function (e, t) {
    this.ondata(null, e, t);
  };
  e.prototype.push = function (e, t) {
    if (!this.ondata) {
      throw "no callback - add to ZIP archive before pushing";
    }
    this.c.p(e);
    this.size += e.length;
    if (t) {
      this.crc = this.c.d();
    }
    this.process(e, t || false);
  };
  return e;
}();
exports.ZipPassThrough = st;
var ut = function () {
  function e(e, t) {
    var n = this;
    if (!t) {
      t = {};
    }
    st.call(this, e);
    this.d = new we(t, function (e, t) {
      n.ondata(null, e, t);
    });
    this.compression = 8;
    this.flag = et(t.level);
  }
  e.prototype.process = function (e, t) {
    try {
      this.d.push(e, t);
    } catch (e) {
      this.ondata(e, null, t);
    }
  };
  e.prototype.push = function (e, t) {
    st.prototype.push.call(this, e, t);
  };
  return e;
}();
exports.ZipDeflate = ut;
var lt = function () {
  function e(e, t) {
    var n = this;
    if (!t) {
      t = {};
    }
    st.call(this, e);
    this.d = new _e(t, function (e, t, r) {
      n.ondata(e, t, r);
    });
    this.compression = 8;
    this.flag = et(t.level);
    this.terminate = this.d.terminate;
  }
  e.prototype.process = function (e, t) {
    this.d.push(e, t);
  };
  e.prototype.push = function (e, t) {
    st.prototype.push.call(this, e, t);
  };
  return e;
}();
exports.AsyncZipDeflate = lt;
var ct = function () {
  function e(e) {
    this.ondata = e;
    this.u = [];
    this.d = 1;
  }
  e.prototype.add = function (e) {
    var t = this;
    if (this.d & 2) {
      throw "stream finished";
    }
    var n = Qe(e.filename);
    var r = n.length;
    var a = e.comment;
    var o = a && Qe(a);
    var s = r != e.filename.length || o && a.length != o.length;
    var u = r + it(e.extra) + 30;
    if (r > 65535) {
      throw "filename too long";
    }
    var l = new i(u);
    at(l, 0, e, n, s);
    var c = [l];
    var f = function () {
      for (var e = 0, n = c; e < n.length; e++) {
        var r = n[e];
        t.ondata(null, r, false);
      }
      c = [];
    };
    var d = this.d;
    this.d = 0;
    var h = this.u.length;
    var p = q(e, {
      f: n,
      u: s,
      o,
      t: function () {
        if (e.terminate) {
          e.terminate();
        }
      },
      r: function () {
        f();
        if (d) {
          var e = t.u[h + 1];
          if (e) {
            e.r();
          } else {
            t.d = 1;
          }
        }
        d = 1;
      }
    });
    var m = 0;
    e.ondata = function (n, r, a) {
      if (n) {
        t.ondata(n, r, a);
        t.terminate();
      } else {
        m += r.length;
        c.push(r);
        if (a) {
          var o = new i(16);
          de(o, 0, 134695760);
          de(o, 4, e.crc);
          de(o, 8, m);
          de(o, 12, e.size);
          c.push(o);
          p.c = m;
          p.b = u + m + 16;
          p.crc = e.crc;
          p.size = e.size;
          if (d) {
            p.r();
          }
          d = 1;
        } else if (d) {
          f();
        }
      }
    };
    this.u.push(p);
  };
  e.prototype.end = function () {
    var e = this;
    if (this.d & 2) {
      if (this.d & 1) {
        throw "stream finishing";
      }
      throw "stream finished";
    }
    if (this.d) {
      this.e();
    } else {
      this.u.push({
        r: function () {
          if (e.d & 1) {
            e.u.splice(-1, 1);
            e.e();
          }
        },
        t: function () {}
      });
    }
    this.d = 3;
  };
  e.prototype.e = function () {
    for (var e = 0, t = 0, n = 0, r = 0, a = this.u; r < a.length; r++) {
      n += 46 + (l = a[r]).f.length + it(l.extra) + (l.o ? l.o.length : 0);
    }
    for (var o = new i(n + 22), s = 0, u = this.u; s < u.length; s++) {
      var l = u[s];
      at(o, e, l, l.f, l.u, l.c, t, l.o);
      e += 46 + l.f.length + it(l.extra) + (l.o ? l.o.length : 0);
      t += l.b;
    }
    ot(o, e, this.u.length, n, t);
    this.ondata(null, o, true);
    this.d = 2;
  };
  e.prototype.terminate = function () {
    for (var e = 0, t = this.u; e < t.length; e++) {
      t[e].t();
    }
    this.d = 2;
  };
  return e;
}();
exports.Zip = ct;
exports.zip = function (e, t, n) {
  if (!n) {
    n = t;
    t = {};
  }
  if (typeof n != "function") {
    throw "no callback";
  }
  var r = {};
  $e(e, "", r, t);
  var a = Object.keys(r);
  var o = a.length;
  var s = 0;
  var u = 0;
  var l = o;
  var c = new Array(o);
  var f = [];
  var d = function () {
    for (var e = 0; e < f.length; ++e) {
      f[e]();
    }
  };
  var h = function () {
    var e = new i(u + 22);
    var t = s;
    var r = u - s;
    u = 0;
    for (var a = 0; a < l; ++a) {
      var o = c[a];
      try {
        var f = o.c.length;
        at(e, u, o, o.f, o.u, f);
        var d = 30 + o.f.length + it(o.extra);
        var h = u + d;
        e.set(o.c, h);
        at(e, s, o, o.f, o.u, f, u, o.m);
        s += 16 + d + (o.m ? o.m.length : 0);
        u = h + f;
      } catch (e) {
        return n(e, null);
      }
    }
    ot(e, s, c.length, r, t);
    n(null, e);
  };
  if (!o) {
    h();
  }
  for (var p = function (e) {
      var t = a[e];
      var i = r[t];
      var l = i[0];
      var p = i[1];
      var m = $();
      var v = l.length;
      m.p(l);
      var g = Qe(t);
      var y = g.length;
      var b = p.comment;
      var w = b && Qe(b);
      var _ = w && w.length;
      var x = it(p.extra);
      var S = p.level == 0 ? 0 : 8;
      var E = function (r, i) {
        if (r) {
          d();
          n(r, null);
        } else {
          var a = i.length;
          c[e] = q(p, {
            size: v,
            crc: m.d(),
            c: i,
            f: g,
            m: w,
            u: y != t.length || w && b.length != _,
            compression: S
          });
          s += 30 + y + x + a;
          u += 76 + (y + x) * 2 + (_ || 0) + a;
          if (! --o) {
            h();
          }
        }
      };
      if (y > 65535) {
        E("filename too long", null);
      }
      if (S) {
        if (v < 160000) {
          try {
            E(null, Se(l, p));
          } catch (e) {
            E(e, null);
          }
        } else {
          f.push(xe(l, p, E));
        }
      } else {
        E(null, l);
      }
    }, m = 0; m < l; ++m) {
    p(m);
  }
  return d;
};
exports.zipSync = function (e, t) {
  if (!t) {
    t = {};
  }
  var n = {};
  var r = [];
  $e(e, "", n, t);
  var a = 0;
  var o = 0;
  for (var s in n) {
    var u = n[s];
    var l = u[0];
    var c = u[1];
    var f = c.level == 0 ? 0 : 8;
    var d = (E = Qe(s)).length;
    var h = c.comment;
    var p = h && Qe(h);
    var m = p && p.length;
    var v = it(c.extra);
    if (d > 65535) {
      throw "filename too long";
    }
    var g = f ? Se(l, c) : l;
    var y = g.length;
    var b = $();
    b.p(l);
    r.push(q(c, {
      size: l.length,
      crc: b.d(),
      c: g,
      f: E,
      m: p,
      u: d != s.length || p && h.length != m,
      o: a,
      compression: f
    }));
    a += 30 + d + v + y;
    o += 76 + (d + v) * 2 + (m || 0) + y;
  }
  for (var w = new i(o + 22), _ = a, x = o - a, S = 0; S < r.length; ++S) {
    var E = r[S];
    at(w, E.o, E, E.f, E.u, E.c.length);
    var k = 30 + E.f.length + it(E.extra);
    w.set(E.c, E.o + k);
    at(w, a, E, E.f, E.u, E.c.length, E.o, E.m);
    a += 16 + k + (E.m ? E.m.length : 0);
  }
  ot(w, a, r.length, x, _);
  return w;
};
var ft = function () {
  function e() {}
  e.prototype.push = function (e, t) {
    this.ondata(null, e, t);
  };
  e.compression = 0;
  return e;
}();
exports.UnzipPassThrough = ft;
var dt = function () {
  function e() {
    var e = this;
    this.i = new Ee(function (t, n) {
      e.ondata(null, t, n);
    });
  }
  e.prototype.push = function (e, t) {
    try {
      this.i.push(e, t);
    } catch (n) {
      this.ondata(n, e, t);
    }
  };
  e.compression = 8;
  return e;
}();
exports.UnzipInflate = dt;
var ht = function () {
  function e(e, t) {
    var n = this;
    if (t < 320000) {
      this.i = new Ee(function (e, t) {
        n.ondata(null, e, t);
      });
    } else {
      this.i = new ke(function (e, t, r) {
        n.ondata(e, t, r);
      });
      this.terminate = this.i.terminate;
    }
  }
  e.prototype.push = function (e, t) {
    if (this.i.terminate) {
      e = A(e, 0);
    }
    this.i.push(e, t);
  };
  e.compression = 8;
  return e;
}();
exports.AsyncUnzipInflate = ht;
var pt = function () {
  function e(e) {
    this.onfile = e;
    this.k = [];
    this.o = {
      0: ft
    };
    this.p = V;
  }
  e.prototype.push = function (e, t) {
    var n = this;
    if (!this.onfile) {
      throw "no callback";
    }
    if (this.c > 0) {
      var r = Math.min(this.c, e.length);
      var a = e.subarray(0, r);
      this.c -= r;
      if (this.d) {
        this.d.push(a, !this.c);
      } else {
        this.k[0].push(a);
      }
      if ((e = e.subarray(r)).length) {
        return this.push(e, t);
      }
    } else {
      var o = 0;
      var s = 0;
      var u = undefined;
      var l = undefined;
      if (this.p.length) {
        if (e.length) {
          (l = new i(this.p.length + e.length)).set(this.p);
          l.set(e, this.p.length);
        } else {
          l = this.p;
        }
      } else {
        l = e;
      }
      for (var c = l.length, f = this.c, d = f && this.d, h = function () {
          var e;
          var t = ce(l, s);
          if (t == 67324752) {
            o = 1;
            u = s;
            p.d = null;
            p.c = 0;
            var r = le(l, s + 6);
            var i = le(l, s + 8);
            var a = r & 2048;
            var d = r & 8;
            var h = le(l, s + 26);
            var m = le(l, s + 28);
            if (c > s + 30 + h + m) {
              var v = [];
              p.k.unshift(v);
              o = 2;
              var g = ce(l, s + 18);
              var y = ce(l, s + 22);
              var b = Je(l.subarray(s + 30, s += 30 + h), !a);
              if (g == 4294967295) {
                e = d ? [-2] : rt(l, s);
                g = e[0];
                y = e[1];
              } else if (d) {
                g = -1;
              }
              s += m;
              p.c = g;
              var w = {
                name: b,
                compression: i,
                start: function () {
                  if (!w.ondata) {
                    throw "no callback";
                  }
                  if (g) {
                    var e = n.o[i];
                    if (!e) {
                      throw "unknown compression type " + i;
                    }
                    var t = g < 0 ? new e(b) : new e(b, g, y);
                    t.ondata = function (e, t, n) {
                      w.ondata(e, t, n);
                    };
                    for (var r = 0, a = v; r < a.length; r++) {
                      var o = a[r];
                      t.push(o, false);
                    }
                    if (n.k[0] == v) {
                      n.d = t;
                    } else {
                      t.push(V, true);
                    }
                  } else {
                    w.ondata(null, V, true);
                  }
                },
                terminate: function () {
                  if (n.k[0] == v && n.d.terminate) {
                    n.d.terminate();
                  }
                }
              };
              if (g >= 0) {
                w.size = g;
                w.originalSize = y;
              }
              p.onfile(w);
            }
            return "break";
          }
          if (f) {
            if (t == 134695760) {
              u = s += 12 + (f == -2 && 8);
              o = 3;
              p.c = 0;
              return "break";
            }
            if (t == 33639248) {
              u = s -= 4;
              o = 3;
              p.c = 0;
              return "break";
            }
          }
        }, p = this; s < c - 4; ++s) {
        if (h() === "break") {
          break;
        }
      }
      this.p = V;
      if (f < 0) {
        var m = o ? l.subarray(0, u - 12 - (f == -2 && 8) - (ce(l, u - 16) == 134695760 && 4)) : l.subarray(0, s);
        if (d) {
          d.push(m, !!o);
        } else {
          this.k[+(o == 2)].push(m);
        }
      }
      if (o & 2) {
        return this.push(l.subarray(s), t);
      }
      this.p = l.subarray(s);
    }
    if (t && this.c) {
      throw "invalid zip file";
    }
  };
  e.prototype.register = function (e) {
    this.o[e.compression] = e;
  };
  return e;
}();
exports.Unzip = pt;
exports.unzip = function (e, t) {
  if (typeof t != "function") {
    throw "no callback";
  }
  for (var n = [], r = function () {
      for (var e = 0; e < n.length; ++e) {
        n[e]();
      }
    }, a = {}, o = e.length - 22; ce(e, o) != 101010256; --o) {
    if (!o || e.length - o > 65558) {
      return void t("invalid zip file", null);
    }
  }
  var s = le(e, o + 8);
  if (!s) {
    t(null, {});
  }
  var u = s;
  var l = ce(e, o + 16);
  var c = l == 4294967295;
  if (c) {
    o = ce(e, o - 12);
    if (ce(e, o) != 101075792) {
      return void t("invalid zip file", null);
    }
    u = s = ce(e, o + 32);
    l = ce(e, o + 48);
  }
  for (var f = function (o) {
      var u = nt(e, l, c);
      var f = u[0];
      var d = u[1];
      var h = u[2];
      var p = u[3];
      var m = u[4];
      var v = u[5];
      var g = tt(e, v);
      l = m;
      var y = function (e, n) {
        if (e) {
          r();
          t(e, null);
        } else {
          a[p] = n;
          if (! --s) {
            t(null, a);
          }
        }
      };
      if (f) {
        if (f == 8) {
          var b = e.subarray(g, g + d);
          if (d < 320000) {
            try {
              y(null, Ne(b, new i(h)));
            } catch (e) {
              y(e, null);
            }
          } else {
            n.push(Oe(b, {
              size: h
            }, y));
          }
        } else {
          y("unknown compression type " + f, null);
        }
      } else {
        y(null, A(e, g, g + d));
      }
    }, d = 0; d < u; ++d) {
    f();
  }
  return r;
};
exports.unzipSync = function (e) {
  for (var t = {}, n = e.length - 22; ce(e, n) != 101010256; --n) {
    if (!n || e.length - n > 65558) {
      throw "invalid zip file";
    }
  }
  var r = le(e, n + 8);
  if (!r) {
    return {};
  }
  var a = ce(e, n + 16);
  var o = a == 4294967295;
  if (o) {
    n = ce(e, n - 12);
    if (ce(e, n) != 101075792) {
      throw "invalid zip file";
    }
    r = ce(e, n + 32);
    a = ce(e, n + 48);
  }
  for (var s = 0; s < r; ++s) {
    var u = nt(e, a, o);
    var l = u[0];
    var c = u[1];
    var f = u[2];
    var d = u[3];
    var h = u[4];
    var p = u[5];
    var m = tt(e, p);
    a = h;
    if (l) {
      if (l != 8) {
        throw "unknown compression type " + l;
      }
      t[d] = Ne(e.subarray(m, m + c), new i(f));
    } else {
      t[d] = A(e, m, m + c);
    }
  }
  return t;
};