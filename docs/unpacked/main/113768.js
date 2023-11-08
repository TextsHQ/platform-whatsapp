var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t, n, a, c, d) {
  let {
    msg: f,
    date: p,
    unread: m,
    album: h,
    botPluginCarousel: g
  } = e;
  const E = [];
  let v;
  let _ = 0;
  for (_ = 0; !v && _ < t.length; _++) {
    v = t[_];
  }
  _--;
  let y = false;
  let C = false;
  let b = v ? (0, i.default)(v) : 0;
  let M = 0;
  let S = _;
  for (; v;) {
    const e = v;
    let w;
    if (!C) {
      E.push(p(e, M++));
    }
    if (e === a && m) {
      E.push(m(c));
    }
    let A;
    let P;
    let O;
    let k = _ + 1;
    for (; !w && k < t.length; k++) {
      w = t[k];
    }
    const D = [];
    const I = [];
    let R;
    let N = false;
    let x = false;
    let L = false;
    let j = null;
    const B = (0, r.getAsGroupedSticker)(e.unsafe());
    if (B && !u(e, d)) {
      D.push(B);
      L = e === n;
      j = 0;
      S = _ + 1;
      const l = t[S];
      const i = l != null ? (0, r.getAsGroupedSticker)(l.unsafe()) : null;
      if (i && (0, o.canBeGroupedAsAlbum)(e, l) && l !== a && !u(l, d)) {
        D.push(i);
        w = t[S + 1];
        x = true;
        R = true;
        if (l === n) {
          L = true;
          j = 1;
        }
      }
    }
    const F = (0, r.getAsBotPluginCarouselMsg)(e.unsafe());
    if (F) {
      I.push(F);
      let e;
      let n = v;
      for (S = _; S < t.length - 1 && I.length < 10; S++) {
        n = t[S];
        e = t[S + 1];
        if (!(e != null ? (0, r.getAsBotPluginCarouselMsg)(e.unsafe()) : null) || !(0, l.canBeGroupedAsBotCarousel)(n, e)) {
          break;
        }
        I.push(e);
      }
      if (I.length >= 1) {
        N = true;
        w = t[S + 1];
      }
    }
    if (N) {
      var T;
      E.push(g(I, (T = I[0].id) === null || T === undefined ? undefined : T.id));
      _ = S + 1;
      v = t[_];
      y = false;
      continue;
    }
    const G = (0, r.getAsAlbumAsset)(e.unsafe());
    if (G && !u(e, d)) {
      D.push(G);
      let e;
      let l = v;
      L = v === n;
      S = _;
      for (; S < t.length - 1 && D.length < o.ALBUM_MAX_SIZE; S++) {
        l = t[S];
        e = t[S + 1];
        const i = e != null ? (0, r.getAsAlbumAsset)(e.unsafe()) : null;
        if (!i || !(0, o.canBeGroupedAsAlbum)(l, e) || e === a || u(e, d)) {
          break;
        }
        D.push(i);
        if (e === n) {
          L = true;
        }
      }
      if (D.length >= o.ALBUM_MIN_SIZE) {
        x = true;
        R = false;
        w = t[S + 1];
      }
    }
    if (w) {
      const t = w;
      O = (0, i.default)(w);
      P = O === b;
      A = P && (0, o.canBeGroupedWithNext)(e, t) && w !== a;
    } else {
      A = false;
      P = false;
      O = 0;
    }
    if (x) {
      let e;
      e = R ? D.reduce((e, t) => `${e}-${t.id.toString()}`, "grouped-sticker-") : s(D);
      E.push(h(D, e, y, A, L, j));
      _ = S + 1;
      v = t[_];
      y = A;
      C = P;
      b = O;
    } else {
      E.push(f(e, e === n, y, A));
      _++;
      y = A;
      C = P;
      b = O;
      v = w;
    }
  }
  return E;
};
var r = require("../app/163755.js");
var o = require("./663940.js");
var l = require("./723169.js");
var i = a(require("./162534.js"));
function u(e, t) {
  return t == null || e.t > t.t;
}
function s(e) {
  const t = e.length;
  return `album-${e[0] ? e[0].id.toString() : ""}-${e[t - 1] ? e[t - 1].id.toString() : ""}-${t}`;
}