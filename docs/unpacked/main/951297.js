var a = require("../app/530066.js").default;
var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GifSearch = undefined;
exports.getGifDimensions = J;
exports.giphyResultsToGifs = $;
var o = r(require("../vendor/348926.js"));
var l = require("../app/898817.js");
var i = r(require("../app/8490.js"));
var u = require("../app/904086.js");
var s = require("../app/685639.js");
var c = require("./811720.js");
var d = r(require("../app/799132.js"));
var f = r(require("../app/335540.js"));
var p = require("./990197.js");
var m = require("./554779.js");
var h = require("./355497.js");
var g = require("./939253.js");
var E = require("./355186.js");
var v = require("./256887.js");
var _ = require("./598239.js");
var y = require("./870621.js");
var C = require("./349486.js");
var b = require("./117830.js");
var M = require("../app/81644.js");
var S = r(require("../app/932325.js"));
var T = r(require("../app/99398.js"));
var w = require("./833654.js");
var A = r(require("../app/219368.js"));
var P = require("../app/533494.js");
var O = r(require("../app/359599.js"));
var k = r(require("../app/79291.js"));
var D = require("./340406.js");
var I = r(require("../app/556869.js"));
var R = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = F(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var a = {};
  var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e) {
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
      if (l && (l.get || l.set)) {
        Object.defineProperty(a, o, l);
      } else {
        a[o] = e[o];
      }
    }
  }
  a.default = e;
  if (n) {
    n.set(e, a);
  }
  return a;
}(require("../vendor/667294.js"));
var N = r(require("../app/156720.js"));
var x = r(require("../app/969651.js"));
var L = r(require("../app/637660.js"));
var j = r(require("../app/17533.js"));
var B = r(require("../app/895851.js"));
function F(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (F = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const G = "3o85xmWDYKgihhIKSA";
const U = "DLAQBEYLJJIM";
const W = {
  giphy: D.GIF_SEARCH_PROVIDER.GIPHY,
  tenor: D.GIF_SEARCH_PROVIDER.TENOR
};
const H = {
  giphy: P.Message$VideoMessage$Attribution.GIPHY,
  tenor: P.Message$VideoMessage$Attribution.TENOR
};
const V = new i.default(function (e) {
  switch ((0, h.getGifProvider)()) {
    case "giphy":
      return function () {
        return Z.apply(this, arguments);
      }(e);
    case "tenor":
      return function () {
        return ee.apply(this, arguments);
      }(e);
    default:
      throw (0, I.default)(`Unrecognized provider ${(0, h.getGifProvider)()}`);
  }
}, {
  maxCached: 6,
  maxAge: 360000,
  shouldCache: e => !!(e == null ? undefined : e.length)
});
const q = "UP";
const Y = "DOWN";
const z = "LEFT";
const K = "RIGHT";
function Q(e, t) {
  const {
    onGif: n,
    searchText: r,
    selectedSectionId: i,
    setIsFetching: S,
    scrollGifIntoViewIfNeeded: A
  } = e;
  const P = (0, B.default)();
  const k = (0, x.default)();
  const [D, I] = (0, R.useState)([]);
  const F = (0, R.useRef)(0);
  const G = (0, R.useRef)(null);
  const U = (0, R.useRef)(null);
  const Q = (0, R.useRef)(false);
  const X = (0, R.useRef)(null);
  const Z = (0, R.useRef)(false);
  const J = (0, R.useRef)({});
  const $ = (0, j.default)(() => {
    const e = W[(0, h.getGifProvider)()];
    const t = r || i || E.SECTIONS.TRENDING;
    let n = V.getOrRun(t);
    n = n.then();
    X.current = n;
    S(true);
    n.then(t => {
      var a;
      if (P.aborted) {
        return;
      }
      if (t && t.length === 0) {
        new _.GifSearchNoResultsWamEvent({
          gifSearchProvider: e
        }).commit();
      }
      if (n !== X.current) {
        return;
      }
      X.current = null;
      S(false);
      if (!t) {
        return;
      }
      let r = ((a = U.current) === null || a === undefined ? undefined : a.clientWidth) || 0;
      r -= m.GAP_SIZE * 2;
      Z.current = true;
      I(function (e, t) {
        const n = [];
        const a = t * 0.9;
        let r = e;
        let o = null;
        for (let e = 0.05; e < 1 && r.length; e += 0.05) {
          r.sort((e, t) => {
            const n = e.rank - t.rank;
            if (Math.abs(n) > 8) {
              return n;
            } else {
              return t.width - e.width;
            }
          });
          const l = (1 + e) * t;
          const i = [];
          const u = [];
          for (const e of r) {
            let t = false;
            const n = Math.min(l - e.width, a);
            for (let a = 0; !t && a < i.length; a++) {
              if (i[a] < n) {
                i[a] += e.width + m.GAP_SIZE;
                u[a].push(e);
                t = true;
              }
            }
            if (!t) {
              i.push(e.width);
              u.push([e]);
            }
          }
          if (u.length === 1) {
            r = [];
            const e = t - i[0] - m.GAP_SIZE;
            o = {
              gifs: u[0],
              blankStr: e > 0 ? `${e}px` : undefined
            };
          } else {
            r = [];
            for (let e = 0; e < u.length; e++) {
              if (i[e] > a) {
                n.push(u[e]);
              } else {
                r.push.apply(r, u[e]);
              }
            }
          }
        }
        n.forEach(e => e.sort((e, t) => e.rank - t.rank));
        n.sort((e, t) => e[0].rank - t[0].rank);
        const l = n.map(e => ({
          gifs: e,
          blankStr: undefined
        }));
        if (o) {
          l.push(o);
        }
        return l;
      }(t, r));
      k();
      ae.current.debounce(0);
    }).catch((0, l.catchAbort)(() => {}));
  });
  const ee = (e, t) => {
    const n = J.current[String(e)];
    if (!(n == null)) {
      n.setShouldAnimate(t);
    }
  };
  const te = (0, j.default)(() => {
    const t = G.current;
    const n = F.current + m.GAP_SIZE;
    const a = Math.round(n / (m.TARGET_GIF_HEIGHT + m.GAP_SIZE));
    const r = D[a];
    if ((r == null ? undefined : r.gifs.length) && r !== t) {
      G.current = r;
      if (t) {
        for (const {
          gifId: e
        } of t.gifs) {
          ee(e, false);
        }
      }
      for (const {
        gifId: e
      } of r.gifs) {
        ee(e, true);
      }
    }
    const [o, l] = e.displayLocation === w.DisplayLocation.ExpressionsPanel ? [a - 3, a + 3] : [a - 1, a + 1];
    for (let e = o; e <= l; e++) {
      if (e === a) {
        continue;
      }
      const t = D[e];
      if (t != null) {
        for (const {
          gifId: e
        } of t.gifs) {
          ee(e, false);
        }
      }
    }
  });
  const ne = (0, L.default)(() => new s.ShiftTimer($));
  const ae = (0, L.default)(() => new s.ShiftTimer(te));
  const re = (0, R.useRef)([]);
  const oe = (0, R.useRef)({});
  const le = (e, t) => {
    const [n, a] = e;
    if (t) {
      J.current[n] = t;
      oe.current[a] = t;
    } else {
      delete J.current[n];
      delete oe.current[a];
    }
  };
  const ie = (0, L.default)(() => new O.default(le));
  const ue = e => {
    const t = W[e.attribution];
    new p.GifFromProviderSentWamEvent({
      gifSearchProvider: t
    }).commit();
    if (!(e.trending || typeof e.rank != "number")) {
      new y.GifSearchResultTappedWamEvent({
        gifSearchProvider: t,
        rank: e.rank
      }).commit();
    }
    Q.current = true;
    n(e.url, H[e.attribution]);
  };
  const se = () => {
    const e = re.current.join("_");
    const t = oe.current[e];
    if (t) {
      const e = t.getElement();
      if (e) {
        f.default.focus(e);
        A(e);
      }
    }
  };
  const ce = function () {
    re.current = [0, 0];
    se();
  };
  const de = e => {
    const t = re.current;
    const [n, a, r, o, l] = [t[0], t[1], D[Math.min(t[0], D.length - 1)].gifs.length - 1, D[Math.min(t[0] + 1, D.length - 1)].gifs.length - 1, D[Math.max(t[0] - 1, 0)].gifs.length - 1];
    const i = a / r;
    switch (e) {
      case q:
        {
          const e = Math.floor(l * i);
          return [Math.max(n - 1, 0), e];
        }
      case Y:
        return [n + 1, Math.floor(o * i)];
    }
    return [0, 0];
  };
  const fe = e => {
    var t;
    var n;
    return (t = (n = U.current) === null || n === undefined ? undefined : n.contains(e)) !== null && t !== undefined && t;
  };
  const pe = e => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
  };
  const me = (e, t) => [Math.max(0, e), Math.max(0, t)];
  const he = (e, t) => {
    const [n, a] = [re.current[0], re.current[1]];
    switch (t) {
      case q:
        if (n === 0) {
          return;
        }
        re.current = de(q);
        break;
      case Y:
        if (n === D.length - 1) {
          return;
        }
        re.current = de(Y);
        break;
      case z:
        if (a === 0 && n === 0) {
          return;
        }
        re.current = a === 0 ? me(n - 1, D[n - 1].gifs.length - 1) : me(n, a - 1);
        break;
      case K:
        if (D[n]) {
          if (D[n].gifs.length === a + 1) {
            re.current = me(n + 1, 0);
          } else {
            re.current = me(n, a + 1);
          }
        } else {
          re.current = [0, 0];
        }
    }
    pe(e);
    se();
  };
  const ge = (0, j.default)(() => {
    ne.current.debounceAndCap(200, 2000);
  });
  const Ee = e => {
    F.current = e.scrollTop;
    ae.current.debounce(200);
  };
  (0, R.useEffect)(() => {
    const e = new a();
    const {
      signal: t
    } = e;
    (0, u.promiseLoop)((0, o.default)(function* () {
      if (P.aborted) {
        throw new l.AbortError();
      }
      yield (0, d.default)(T.default, "change:online", () => T.default.online, t);
      ge();
    })).catch((0, l.catchAbort)(() => {}));
    $();
    new C.GifSearchSessionStartedWamEvent({
      gifSearchProvider: W[(0, h.getGifProvider)()]
    }).commit();
    return () => {
      ae.current.cancel();
      ne.current.cancel();
      e.abort();
      if (!Q.current) {
        new v.GifSearchCancelledWamEvent({
          gifSearchProvider: W[(0, h.getGifProvider)()]
        }).commit();
      }
    };
  }, []);
  (0, R.useEffect)(() => {
    ge();
  }, [ge, r]);
  (0, R.useImperativeHandle)(t, () => ({
    contains: fe,
    initSelection: ce,
    animateOnScroll: Ee
  }));
  const ve = D.map((e, t) => {
    const n = e.gifs.map((e, n) => R.default.createElement(g.GifPreview, {
      key: e.gifId,
      ref: ie.current.getRefSetter([`${e.gifId}`, `${t}_${n}`]),
      gif: e,
      onSend: ue
    }));
    let a = null;
    if (e.blankStr) {
      a = R.default.createElement("div", {
        className: (0, N.default)(b.gifSearchStyles.blank),
        style: {
          flexBasis: e.blankStr
        }
      });
    }
    return R.default.createElement("div", {
      key: t,
      className: (0, N.default)(b.gifSearchStyles.row, t === D.length - 1 && b.gifSearchStyles.lastRow)
    }, n, a);
  });
  const _e = e.selectedSectionId !== E.SECTIONS.FAVORITES && (ve.length === 0 ? R.default.createElement("div", {
    className: b.gifSearchStyles.noResults
  }, e.searchText ? R.default.createElement(c.SearchWithoutKeyword, null) : R.default.createElement(c.Loading, null)) : R.default.createElement(M.HotKeys, {
    className: (0, N.default)(b.gifSearchStyles.section),
    handlers: {
      up: e => {
        he(e, q);
      },
      down: e => {
        he(e, Y);
      },
      left: e => {
        he(e, z);
      },
      right: e => {
        he(e, K);
      },
      enter: e => {
        pe(e);
        const t = re.current;
        const [n, a] = [t[0], t[1], t[2]];
        ue(D[n].gifs[a]);
      }
    }
  }, ve));
  return R.default.createElement("div", {
    className: (0, N.default)(b.gifSearchStyles.searchContainer),
    ref: e => {
      U.current = e;
      if (e != null && e && Z.current) {
        e.scrollTop = 0;
      }
    }
  }, _e);
}
const X = (0, R.memo)((0, R.forwardRef)(Q), (e, t) => {
  let {
    onGif: n,
    selectedSectionId: a,
    searchText: r
  } = t;
  return !(e.onGif !== n || e.selectedSectionId !== a || e.searchText !== r);
});
function Z() {
  return (Z = (0, o.default)(function* (e) {
    const t = e === E.SECTIONS.TRENDING;
    let n;
    if (t) {
      n = k.default.build("https://api.giphy.com/v1/gifs/trending", {
        api_key: G,
        limit: 100,
        rating: "pg-13"
      });
    } else {
      const t = S.default.getLocale();
      let a = t;
      switch (t) {
        case "zh-HK":
          a = "zh-TW";
          break;
        case "pt-BR":
          a = "pt";
      }
      let r = "";
      if (h.GIPHY_LOCALES.includes(a)) {
        r = a;
      }
      n = k.default.build("https://api.giphy.com/v1/gifs/search", {
        q: e,
        api_key: G,
        limit: 100,
        rating: "pg-13",
        lang: r
      });
    }
    try {
      const e = yield (0, A.default)(n);
      if (!e.ok) {
        throw (0, I.default)(e.statusText);
      }
      return $(yield e.json(), t);
    } catch (e) {
      __LOG__(4, undefined, new Error())`gif_search:searchGiphy fetch failed with an error : ${e}`;
      return null;
    }
  })).apply(this, arguments);
}
function J(e, t) {
  if (e) {
    const t = parseInt(e.width, 10);
    const n = parseInt(e.height, 10);
    if (t && n) {
      return {
        width: t,
        height: n
      };
    }
    __LOG__(4, undefined, new Error(), true)`gif_search:getGifDimensions fullContent does not have valid dimensions'`;
    SEND_LOGS("gif_search:getGifDimensions fullContent does not have valid dimensions");
  }
  if (t) {
    const e = parseInt(t.width, 10);
    const n = parseInt(t.height, 10);
    if (e && n) {
      return {
        width: m.TARGET_GIF_HEIGHT * e / n,
        height: m.TARGET_GIF_HEIGHT
      };
    }
    __LOG__(4, undefined, new Error(), true)`gif_search:getGifDimensions original does not have valid dimensions`;
    SEND_LOGS("gif_search:getGifDimensions original does not have valid dimensions");
  }
  return {
    width: m.TARGET_GIF_HEIGHT,
    height: m.TARGET_GIF_HEIGHT
  };
}
function $(e, t) {
  if (!e || !Array.isArray(e.data)) {
    return [];
  }
  if (!e.data.length && t) {
    return [];
  }
  const n = e.data;
  const a = [];
  for (let e = 0; e < n.length; e++) {
    const r = n[e].images;
    if (!r) {
      continue;
    }
    const {
      original: o,
      preview: l,
      downsized_small: i,
      preview_webp: u,
      preview_gif: s
    } = r;
    if (!i) {
      continue;
    }
    const c = i.mp4;
    if (!c) {
      continue;
    }
    const {
      width: d,
      height: f
    } = J(i, o);
    a.push(new h.GifInfo(a.length, c, parseInt(i.mp4_size, 10), (l == null ? undefined : l.mp4) || undefined, (u == null ? undefined : u.url) || (s == null ? undefined : s.url) || undefined, Math.round(d * m.TARGET_GIF_HEIGHT / f), m.GIPHY, t));
  }
  if (a.length === 0 && n.length > 0) {
    __LOG__(4, undefined, new Error(), true)`gif_search: All the gifs were skipped, check if there is a change in giphys response`;
    SEND_LOGS("gif_search: All the gifs were skipped, check if there is a change in giphys response");
  }
  return a;
}
function ee() {
  return (ee = (0, o.default)(function* (e) {
    const t = e === E.SECTIONS.TRENDING;
    const n = S.default.getLocale().replace("-", "_");
    let a;
    a = t ? k.default.build("https://wa.tenor.co/v1/trending", {
      key: U,
      limit: 50,
      contentfilter: "high",
      locale: n
    }) : k.default.build("https://wa.tenor.co/v1/search", {
      q: e,
      key: U,
      limit: 50,
      contentfilter: "high",
      locale: n
    });
    try {
      const e = yield (0, A.default)(a);
      if (!e.ok) {
        throw (0, I.default)(e.statusText);
      }
      return te(yield e.json());
    } catch (e) {
      __LOG__(4, undefined, new Error())`gif_search:searchTenor fetch failed with an error : ${e}`;
      return null;
    }
  })).apply(this, arguments);
}
function te(e) {
  let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
  if (!e || !Array.isArray(e.results)) {
    return [];
  }
  const n = e.results;
  const a = [];
  for (const e of n) {
    if (!e || !e.media || !e.media[0]) {
      continue;
    }
    const {
      tinymp4: n,
      previewmp4: r,
      previewgif: o
    } = e.media[0];
    if (!n) {
      continue;
    }
    const [l, i] = n.dims;
    a.push(new h.GifInfo(a.length, n.url, n.size, (r == null ? undefined : r.url) || undefined, (o == null ? undefined : o.url) || undefined, Math.round(l * m.TARGET_GIF_HEIGHT / i), m.TENOR, t));
  }
  return a;
}
exports.GifSearch = X;
X.displayName = "GifSearch";