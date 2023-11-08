Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t) {
  let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1 / 0;
  const r = [];
  for (let i = 0; i < t.length; ++i) {
    const [a, o] = t[i];
    const s = a.match(e, o, n);
    const l = [];
    const {
      length: u
    } = s;
    for (let e = 0, t = s[e]; e < u; t = s[++e]) {
      l[e] = [t[0], t[1], t[2], t[3], i, t[4]];
    }
    if (l.length) {
      r.push(l);
    }
  }
  for (let e = 0; e < r.length; e++) {
    const {
      conflictResolvers: n
    } = t[r[e][0][4]][0];
    if (n) {
      for (let i = 0; i < r.length; i++) {
        const a = t[r[i][0][4]][0];
        const o = n.get(a);
        if (!(o == null)) {
          o(r[e], r[i]);
        }
      }
    }
  }
  const i = [];
  for (let e = 0; e < r.length; ++e) {
    i[e] = r[e].length - 1;
  }
  const a = [];
  let o = 0;
  for (; r.length;) {
    for (let e = 0, t = -1; e < r.length; ++e) {
      if (r[e][i[e]][0] > t) {
        o = e;
        t = r[e][i[e]][0];
      }
    }
    a.push(r[o][i[o]]);
    if (--i[o] < 0) {
      r.splice(o, 1);
      i.splice(o, 1);
    }
  }
  return a;
};