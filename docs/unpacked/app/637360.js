var t;
!function () {
  function e(e) {
    this.mode = r.MODE_8BIT_BYTE;
    this.data = e;
    this.parsedData = [];
    if (e instanceof ArrayBuffer) {
      this.parsedData = new Int8Array(e);
    } else {
      for (var t = 0, n = this.data.length; t < n; t++) {
        var i = [];
        var a = this.data.charCodeAt(t);
        if (a > 65536) {
          i[0] = (a & 1835008) >>> 18 | 240;
          i[1] = (a & 258048) >>> 12 | 128;
          i[2] = (a & 4032) >>> 6 | 128;
          i[3] = a & 63 | 128;
        } else if (a > 2048) {
          i[0] = (a & 61440) >>> 12 | 224;
          i[1] = (a & 4032) >>> 6 | 128;
          i[2] = a & 63 | 128;
        } else if (a > 128) {
          i[0] = (a & 1984) >>> 6 | 192;
          i[1] = a & 63 | 128;
        } else {
          i[0] = a;
        }
        this.parsedData.push(i);
      }
      this.parsedData = Array.prototype.concat.apply([], this.parsedData);
      if (this.parsedData.length != this.data.length) {
        this.parsedData.unshift(191);
        this.parsedData.unshift(187);
        this.parsedData.unshift(239);
      }
    }
  }
  function n(e, t) {
    this.typeNumber = e;
    this.errorCorrectLevel = t;
    this.modules = null;
    this.moduleCount = 0;
    this.dataCache = null;
    this.dataList = [];
  }
  e.prototype = {
    getLength: function (e) {
      return this.parsedData.length;
    },
    write: function (e) {
      for (var t = 0, n = this.parsedData.length; t < n; t++) {
        e.put(this.parsedData[t], 8);
      }
    }
  };
  n.prototype = {
    addData: function (t) {
      var n = new e(t);
      this.dataList.push(n);
      this.dataCache = null;
    },
    isDark: function (e, t) {
      if (e < 0 || this.moduleCount <= e || t < 0 || this.moduleCount <= t) {
        throw new Error(e + "," + t);
      }
      return this.modules[e][t];
    },
    getModuleCount: function () {
      return this.moduleCount;
    },
    make: function () {
      this.makeImpl(false, this.getBestMaskPattern());
    },
    makeImpl: function (e, t) {
      this.moduleCount = this.typeNumber * 4 + 17;
      this.modules = new Array(this.moduleCount);
      for (var r = 0; r < this.moduleCount; r++) {
        this.modules[r] = new Array(this.moduleCount);
        for (var i = 0; i < this.moduleCount; i++) {
          this.modules[r][i] = null;
        }
      }
      this.setupPositionProbePattern(0, 0);
      this.setupPositionProbePattern(this.moduleCount - 7, 0);
      this.setupPositionProbePattern(0, this.moduleCount - 7);
      this.setupPositionAdjustPattern();
      this.setupTimingPattern();
      this.setupTypeInfo(e, t);
      if (this.typeNumber >= 7) {
        this.setupTypeNumber(e);
      }
      if (this.dataCache == null) {
        this.dataCache = n.createData(this.typeNumber, this.errorCorrectLevel, this.dataList);
      }
      this.mapData(this.dataCache, t);
    },
    setupPositionProbePattern: function (e, t) {
      for (var n = -1; n <= 7; n++) {
        if (!(e + n <= -1 || this.moduleCount <= e + n)) {
          for (var r = -1; r <= 7; r++) {
            if (!(t + r <= -1 || this.moduleCount <= t + r)) {
              this.modules[e + n][t + r] = n >= 0 && n <= 6 && (r == 0 || r == 6) || r >= 0 && r <= 6 && (n == 0 || n == 6) || n >= 2 && n <= 4 && r >= 2 && r <= 4;
            }
          }
        }
      }
    },
    getBestMaskPattern: function () {
      for (var e = 0, t = 0, n = 0; n < 8; n++) {
        this.makeImpl(true, n);
        var r = f.getLostPoint(this);
        if (n == 0 || e > r) {
          e = r;
          t = n;
        }
      }
      return t;
    },
    createMovieClip: function (e, t, n) {
      var r = e.createEmptyMovieClip(t, n);
      this.make();
      for (var i = 0; i < this.modules.length; i++) {
        for (var a = i * 1, o = 0; o < this.modules[i].length; o++) {
          var s = o * 1;
          if (this.modules[i][o]) {
            r.beginFill(0, 100);
            r.moveTo(s, a);
            r.lineTo(s + 1, a);
            r.lineTo(s + 1, a + 1);
            r.lineTo(s, a + 1);
            r.endFill();
          }
        }
      }
      return r;
    },
    setupTimingPattern: function () {
      for (var e = 8; e < this.moduleCount - 8; e++) {
        if (this.modules[e][6] == null) {
          this.modules[e][6] = e % 2 == 0;
        }
      }
      for (var t = 8; t < this.moduleCount - 8; t++) {
        if (this.modules[6][t] == null) {
          this.modules[6][t] = t % 2 == 0;
        }
      }
    },
    setupPositionAdjustPattern: function () {
      for (var e = f.getPatternPosition(this.typeNumber), t = 0; t < e.length; t++) {
        for (var n = 0; n < e.length; n++) {
          var r = e[t];
          var i = e[n];
          if (this.modules[r][i] == null) {
            for (var a = -2; a <= 2; a++) {
              for (var o = -2; o <= 2; o++) {
                this.modules[r + a][i + o] = a == -2 || a == 2 || o == -2 || o == 2 || a == 0 && o == 0;
              }
            }
          }
        }
      }
    },
    setupTypeNumber: function (e) {
      for (var t = f.getBCHTypeNumber(this.typeNumber), n = 0; n < 18; n++) {
        var r = !e && (t >> n & 1) == 1;
        this.modules[Math.floor(n / 3)][n % 3 + this.moduleCount - 8 - 3] = r;
      }
      for (n = 0; n < 18; n++) {
        r = !e && (t >> n & 1) == 1;
        this.modules[n % 3 + this.moduleCount - 8 - 3][Math.floor(n / 3)] = r;
      }
    },
    setupTypeInfo: function (e, t) {
      for (var n = this.errorCorrectLevel << 3 | t, r = f.getBCHTypeInfo(n), i = 0; i < 15; i++) {
        var a = !e && (r >> i & 1) == 1;
        if (i < 6) {
          this.modules[i][8] = a;
        } else if (i < 8) {
          this.modules[i + 1][8] = a;
        } else {
          this.modules[this.moduleCount - 15 + i][8] = a;
        }
      }
      for (i = 0; i < 15; i++) {
        a = !e && (r >> i & 1) == 1;
        if (i < 8) {
          this.modules[8][this.moduleCount - i - 1] = a;
        } else if (i < 9) {
          this.modules[8][15 - i - 1 + 1] = a;
        } else {
          this.modules[8][15 - i - 1] = a;
        }
      }
      this.modules[this.moduleCount - 8][8] = !e;
    },
    mapData: function (e, t) {
      for (var n = -1, r = this.moduleCount - 1, i = 7, a = 0, o = this.moduleCount - 1; o > 0; o -= 2) {
        for (o == 6 && o--;;) {
          for (var s = 0; s < 2; s++) {
            if (this.modules[r][o - s] == null) {
              var l = false;
              if (a < e.length) {
                l = (e[a] >>> i & 1) == 1;
              }
              if (f.getMask(t, r, o - s)) {
                l = !l;
              }
              this.modules[r][o - s] = l;
              if (--i == -1) {
                a++;
                i = 7;
              }
            }
          }
          if ((r += n) < 0 || this.moduleCount <= r) {
            r -= n;
            n = -n;
            break;
          }
        }
      }
    }
  };
  n.PAD0 = 236;
  n.PAD1 = 17;
  n.createData = function (e, t, r) {
    for (var i = h.getRSBlocks(e, t), a = new y(), o = 0; o < r.length; o++) {
      var s = r[o];
      a.put(s.mode, 4);
      a.put(s.getLength(), f.getLengthInBits(s.mode, e));
      s.write(a);
    }
    var l = 0;
    for (o = 0; o < i.length; o++) {
      l += i[o].dataCount;
    }
    if (a.getLengthInBits() > l * 8) {
      throw new Error("code length overflow. (" + a.getLengthInBits() + ">" + l * 8 + ")");
    }
    for (a.getLengthInBits() + 4 <= l * 8 && a.put(0, 4); a.getLengthInBits() % 8 != 0;) {
      a.putBit(false);
    }
    for (; !(a.getLengthInBits() >= l * 8 || (a.put(n.PAD0, 8), a.getLengthInBits() >= l * 8));) {
      a.put(n.PAD1, 8);
    }
    return n.createBytes(a, i);
  };
  n.createBytes = function (e, t) {
    for (var n = 0, r = 0, i = 0, a = new Array(t.length), o = new Array(t.length), s = 0; s < t.length; s++) {
      var l = t[s].dataCount;
      var u = t[s].totalCount - l;
      r = Math.max(r, l);
      i = Math.max(i, u);
      a[s] = new Array(l);
      for (var c = 0; c < a[s].length; c++) {
        a[s][c] = e.buffer[c + n] & 255;
      }
      n += l;
      var d = f.getErrorCorrectPolynomial(u);
      var p = new m(a[s], d.getLength() - 1).mod(d);
      o[s] = new Array(d.getLength() - 1);
      for (c = 0; c < o[s].length; c++) {
        var _ = c + p.getLength() - o[s].length;
        o[s][c] = _ >= 0 ? p.get(_) : 0;
      }
    }
    var g = 0;
    for (c = 0; c < t.length; c++) {
      g += t[c].totalCount;
    }
    var h = new Array(g);
    var y = 0;
    for (c = 0; c < r; c++) {
      for (s = 0; s < t.length; s++) {
        if (c < a[s].length) {
          h[y++] = a[s][c];
        }
      }
    }
    for (c = 0; c < i; c++) {
      for (s = 0; s < t.length; s++) {
        if (c < o[s].length) {
          h[y++] = o[s][c];
        }
      }
    }
    return h;
  };
  for (var r = {
      MODE_NUMBER: 1,
      MODE_ALPHA_NUM: 2,
      MODE_8BIT_BYTE: 4,
      MODE_KANJI: 8
    }, i = {
      L: 1,
      M: 0,
      Q: 3,
      H: 2
    }, a = 0, o = 1, s = 2, l = 3, u = 4, c = 5, d = 6, p = 7, f = {
      PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
      G15: 1335,
      G18: 7973,
      G15_MASK: 21522,
      getBCHTypeInfo: function (e) {
        for (var t = e << 10; f.getBCHDigit(t) - f.getBCHDigit(f.G15) >= 0;) {
          t ^= f.G15 << f.getBCHDigit(t) - f.getBCHDigit(f.G15);
        }
        return (e << 10 | t) ^ f.G15_MASK;
      },
      getBCHTypeNumber: function (e) {
        for (var t = e << 12; f.getBCHDigit(t) - f.getBCHDigit(f.G18) >= 0;) {
          t ^= f.G18 << f.getBCHDigit(t) - f.getBCHDigit(f.G18);
        }
        return e << 12 | t;
      },
      getBCHDigit: function (e) {
        for (var t = 0; e != 0;) {
          t++;
          e >>>= 1;
        }
        return t;
      },
      getPatternPosition: function (e) {
        return f.PATTERN_POSITION_TABLE[e - 1];
      },
      getMask: function (e, t, n) {
        switch (e) {
          case a:
            return (t + n) % 2 == 0;
          case o:
            return t % 2 == 0;
          case s:
            return n % 3 == 0;
          case l:
            return (t + n) % 3 == 0;
          case u:
            return (Math.floor(t / 2) + Math.floor(n / 3)) % 2 == 0;
          case c:
            return t * n % 2 + t * n % 3 == 0;
          case d:
            return (t * n % 2 + t * n % 3) % 2 == 0;
          case p:
            return (t * n % 3 + (t + n) % 2) % 2 == 0;
          default:
            throw new Error("bad maskPattern:" + e);
        }
      },
      getErrorCorrectPolynomial: function (e) {
        for (var t = new m([1], 0), n = 0; n < e; n++) {
          t = t.multiply(new m([1, _.gexp(n)], 0));
        }
        return t;
      },
      getLengthInBits: function (e, t) {
        if (t >= 1 && t < 10) {
          switch (e) {
            case r.MODE_NUMBER:
              return 10;
            case r.MODE_ALPHA_NUM:
              return 9;
            case r.MODE_8BIT_BYTE:
            case r.MODE_KANJI:
              return 8;
            default:
              throw new Error("mode:" + e);
          }
        } else if (t < 27) {
          switch (e) {
            case r.MODE_NUMBER:
              return 12;
            case r.MODE_ALPHA_NUM:
              return 11;
            case r.MODE_8BIT_BYTE:
              return 16;
            case r.MODE_KANJI:
              return 10;
            default:
              throw new Error("mode:" + e);
          }
        } else {
          if (!(t < 41)) {
            throw new Error("type:" + t);
          }
          switch (e) {
            case r.MODE_NUMBER:
              return 14;
            case r.MODE_ALPHA_NUM:
              return 13;
            case r.MODE_8BIT_BYTE:
              return 16;
            case r.MODE_KANJI:
              return 12;
            default:
              throw new Error("mode:" + e);
          }
        }
      },
      getLostPoint: function (e) {
        for (var t = e.getModuleCount(), n = 0, r = 0; r < t; r++) {
          for (var i = 0; i < t; i++) {
            for (var a = 0, o = e.isDark(r, i), s = -1; s <= 1; s++) {
              if (!(r + s < 0 || t <= r + s)) {
                for (var l = -1; l <= 1; l++) {
                  if (!(i + l < 0 || t <= i + l || s == 0 && l == 0)) {
                    if (o == e.isDark(r + s, i + l)) {
                      a++;
                    }
                  }
                }
              }
            }
            if (a > 5) {
              n += 3 + a - 5;
            }
          }
        }
        for (r = 0; r < t - 1; r++) {
          for (i = 0; i < t - 1; i++) {
            var u = 0;
            if (e.isDark(r, i)) {
              u++;
            }
            if (e.isDark(r + 1, i)) {
              u++;
            }
            if (e.isDark(r, i + 1)) {
              u++;
            }
            if (e.isDark(r + 1, i + 1)) {
              u++;
            }
            if (!(u != 0 && u != 4)) {
              n += 3;
            }
          }
        }
        for (r = 0; r < t; r++) {
          for (i = 0; i < t - 6; i++) {
            if (e.isDark(r, i) && !e.isDark(r, i + 1) && e.isDark(r, i + 2) && e.isDark(r, i + 3) && e.isDark(r, i + 4) && !e.isDark(r, i + 5) && e.isDark(r, i + 6)) {
              n += 40;
            }
          }
        }
        for (i = 0; i < t; i++) {
          for (r = 0; r < t - 6; r++) {
            if (e.isDark(r, i) && !e.isDark(r + 1, i) && e.isDark(r + 2, i) && e.isDark(r + 3, i) && e.isDark(r + 4, i) && !e.isDark(r + 5, i) && e.isDark(r + 6, i)) {
              n += 40;
            }
          }
        }
        var c = 0;
        for (i = 0; i < t; i++) {
          for (r = 0; r < t; r++) {
            if (e.isDark(r, i)) {
              c++;
            }
          }
        }
        return n += Math.abs(c * 100 / t / t - 50) / 5 * 10;
      }
    }, _ = {
      glog: function (e) {
        if (e < 1) {
          throw new Error("glog(" + e + ")");
        }
        return _.LOG_TABLE[e];
      },
      gexp: function (e) {
        for (; e < 0;) {
          e += 255;
        }
        for (; e >= 256;) {
          e -= 255;
        }
        return _.EXP_TABLE[e];
      },
      EXP_TABLE: new Array(256),
      LOG_TABLE: new Array(256)
    }, g = 0; g < 8; g++) {
    _.EXP_TABLE[g] = 1 << g;
  }
  for (g = 8; g < 256; g++) {
    _.EXP_TABLE[g] = _.EXP_TABLE[g - 4] ^ _.EXP_TABLE[g - 5] ^ _.EXP_TABLE[g - 6] ^ _.EXP_TABLE[g - 8];
  }
  for (g = 0; g < 255; g++) {
    _.LOG_TABLE[_.EXP_TABLE[g]] = g;
  }
  function m(e, t) {
    if (e.length == null) {
      throw new Error(e.length + "/" + t);
    }
    for (var n = 0; n < e.length && e[n] == 0;) {
      n++;
    }
    this.num = new Array(e.length - n + t);
    for (var r = 0; r < e.length - n; r++) {
      this.num[r] = e[r + n];
    }
  }
  function h(e, t) {
    this.totalCount = e;
    this.dataCount = t;
  }
  function y() {
    this.buffer = [];
    this.length = 0;
  }
  m.prototype = {
    get: function (e) {
      return this.num[e];
    },
    getLength: function () {
      return this.num.length;
    },
    multiply: function (e) {
      for (var t = new Array(this.getLength() + e.getLength() - 1), n = 0; n < this.getLength(); n++) {
        for (var r = 0; r < e.getLength(); r++) {
          t[n + r] ^= _.gexp(_.glog(this.get(n)) + _.glog(e.get(r)));
        }
      }
      return new m(t, 0);
    },
    mod: function (e) {
      if (this.getLength() - e.getLength() < 0) {
        return this;
      }
      for (var t = _.glog(this.get(0)) - _.glog(e.get(0)), n = new Array(this.getLength()), r = 0; r < this.getLength(); r++) {
        n[r] = this.get(r);
      }
      for (r = 0; r < e.getLength(); r++) {
        n[r] ^= _.gexp(_.glog(e.get(r)) + t);
      }
      return new m(n, 0).mod(e);
    }
  };
  h.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]];
  h.getRSBlocks = function (e, t) {
    var n = h.getRsBlockTable(e, t);
    if (n == null) {
      throw new Error("bad rs block @ typeNumber:" + e + "/errorCorrectLevel:" + t);
    }
    for (var r = n.length / 3, i = [], a = 0; a < r; a++) {
      for (var o = n[a * 3 + 0], s = n[a * 3 + 1], l = n[a * 3 + 2], u = 0; u < o; u++) {
        i.push(new h(s, l));
      }
    }
    return i;
  };
  h.getRsBlockTable = function (e, t) {
    switch (t) {
      case i.L:
        return h.RS_BLOCK_TABLE[(e - 1) * 4 + 0];
      case i.M:
        return h.RS_BLOCK_TABLE[(e - 1) * 4 + 1];
      case i.Q:
        return h.RS_BLOCK_TABLE[(e - 1) * 4 + 2];
      case i.H:
        return h.RS_BLOCK_TABLE[(e - 1) * 4 + 3];
      default:
        return;
    }
  };
  y.prototype = {
    get: function (e) {
      var t = Math.floor(e / 8);
      return (this.buffer[t] >>> 7 - e % 8 & 1) == 1;
    },
    put: function (e, t) {
      for (var n = 0; n < t; n++) {
        this.putBit((e >>> t - n - 1 & 1) == 1);
      }
    },
    getLengthInBits: function () {
      return this.length;
    },
    putBit: function (e) {
      var t = Math.floor(this.length / 8);
      if (this.buffer.length <= t) {
        this.buffer.push(0);
      }
      if (e) {
        this.buffer[t] |= 128 >>> this.length % 8;
      }
      this.length++;
    }
  };
  var E = [[17, 14, 11, 7], [32, 26, 20, 14], [53, 42, 32, 24], [78, 62, 46, 34], [106, 84, 60, 44], [134, 106, 74, 58], [154, 122, 86, 64], [192, 152, 108, 84], [230, 180, 130, 98], [271, 213, 151, 119], [321, 251, 177, 137], [367, 287, 203, 155], [425, 331, 241, 177], [458, 362, 258, 194], [520, 412, 292, 220], [586, 450, 322, 250], [644, 504, 364, 280], [718, 560, 394, 310], [792, 624, 442, 338], [858, 666, 482, 382], [929, 711, 509, 403], [1003, 779, 565, 439], [1091, 857, 611, 461], [1171, 911, 661, 511], [1273, 997, 715, 535], [1367, 1059, 751, 593], [1465, 1125, 805, 625], [1528, 1190, 868, 658], [1628, 1264, 908, 698], [1732, 1370, 982, 742], [1840, 1452, 1030, 790], [1952, 1538, 1112, 842], [2068, 1628, 1168, 898], [2188, 1722, 1228, 958], [2303, 1809, 1283, 983], [2431, 1911, 1351, 1051], [2563, 1989, 1423, 1093], [2699, 2099, 1499, 1139], [2809, 2213, 1579, 1219], [2953, 2331, 1663, 1273]];
  var S = function (e, t) {
    this._bIsPainted = false;
    this._htOption = t;
    this._elCanvas = document.createElement("canvas");
    this._elCanvas.width = t.width;
    this._elCanvas.height = t.height;
    this._elCanvas.setAttribute("aria-label", "Scan me!");
    this._elCanvas.setAttribute("role", "img");
    e.appendChild(this._elCanvas);
    this._el = e;
    this._oContext = this._elCanvas.getContext("2d");
    this._bIsPainted = false;
    this._bSupportDataURI = null;
  };
  function v(e, t) {
    for (var n = 1, r = e instanceof ArrayBuffer ? e.byteLength : function (e) {
        var t = encodeURI(e).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
        return t.length + (t.length != e.length ? 3 : 0);
      }(e), a = 0, o = E.length; a <= o; a++) {
      var s = 0;
      switch (t) {
        case i.L:
          s = E[a][0];
          break;
        case i.M:
          s = E[a][1];
          break;
        case i.Q:
          s = E[a][2];
          break;
        case i.H:
          s = E[a][3];
      }
      if (r <= s) {
        break;
      }
      n++;
    }
    if (n > E.length) {
      throw new Error("Too long data");
    }
    return n;
  }
  S.prototype.draw = function (e) {
    var t = this._oContext;
    var n = this._htOption;
    var r = e.getModuleCount();
    var i = n.width / r;
    var a = n.height / r;
    var o = Math.round(i);
    var s = Math.round(a);
    this.clear();
    for (var l = 0; l < r; l++) {
      for (var u = 0; u < r; u++) {
        var c = e.isDark(l, u);
        var d = u * i;
        var p = l * a;
        t.strokeStyle = c ? n.colorDark : n.colorLight;
        t.lineWidth = 1;
        t.fillStyle = c ? n.colorDark : n.colorLight;
        t.fillRect(d, p, i, a);
        t.strokeRect(Math.floor(d) + 0.5, Math.floor(p) + 0.5, o, s);
        t.strokeRect(Math.ceil(d) - 0.5, Math.ceil(p) - 0.5, o, s);
      }
    }
    this._bIsPainted = true;
  };
  S.prototype.isPainted = function () {
    return this._bIsPainted;
  };
  S.prototype.clear = function () {
    this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height);
    this._bIsPainted = false;
  };
  S.prototype.round = function (e) {
    if (e) {
      return Math.floor(e * 1000) / 1000;
    } else {
      return e;
    }
  };
  (t = function (e, t) {
    this._htOption = {
      width: 256,
      height: 256,
      typeNumber: 4,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: i.H
    };
    if (typeof t == "string") {
      t = {
        text: t
      };
    }
    if (t) {
      for (var n in t) {
        this._htOption[n] = t[n];
      }
    }
    if (typeof e == "string") {
      e = document.getElementById(e);
    }
    this._el = e;
    this._oQRCode = null;
    this._oDrawing = new S(this._el, this._htOption);
    if (this._htOption.text) {
      this.makeCode(this._htOption.text);
    }
  }).prototype.makeCode = function (e) {
    this._oQRCode = new n(v(e, this._htOption.correctLevel), this._htOption.correctLevel);
    this._oQRCode.addData(e);
    this._oQRCode.make();
    this._el.title = e;
    this._oDrawing.draw(this._oQRCode);
  };
  t.prototype.clear = function () {
    this._oDrawing.clear();
  };
  t.CorrectLevel = i;
}();
module.exports = t;