var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrappedSharedVideoPlayer = exports.FULLSCREEN_CONTROLS_DISPLAY_TIMEOUT = undefined;
var r = a(require("../vendor/81109.js"));
var o = a(require("../vendor/618446.js"));
var l = require("../app/287461.js");
var i = require("../app/39523.js");
var u = require("../app/701173.js");
var s = a(require("./342812.js"));
var c = require("../app/753233.js");
var d = require("../app/690495.js");
var f = a(require("../app/756680.js"));
var p = a(require("./36886.js"));
var m = j(require("./870338.js"));
var h = require("../app/172259.js");
var g = require("./205196.js");
var E = a(require("./942492.js"));
var v = require("../app/728.js");
var _ = a(require("./733378.js"));
var y = a(require("./581202.js"));
var C = a(require("./305698.js"));
var b = a(require("./35171.js"));
var M = a(require("./763770.js"));
var S = require("./907119.js");
var T = require("../app/956113.js");
var w = require("../app/368170.js");
var A = a(require("../app/844453.js"));
var P = require("../vendor/548360.js");
var O = j(require("../vendor/667294.js"));
var k = a(require("../app/156720.js"));
var D = a(require("./505447.js"));
var I = a(require("../app/710629.js"));
var R = require("../app/808446.js");
var N = a(require("../app/49710.js"));
var x = a(require("../app/17533.js"));
function L(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (L = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function j(e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = L(t);
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
}
const B = {
  container: {
    backgroundColor: "thr4l2wc",
    height: "ppled2lx",
    start: "tkdu00h0",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    position: "lhggkp7q",
    top: "qq0sjtgm",
    width: "ln8gz9je"
  },
  errorLink: {
    color: "bw3xoias",
    display: "f804f6gw",
    marginTop: "qt60bha0",
    ":hover": {
      textDecoration: "edeob0r2"
    }
  },
  errorLinkChevron: {
    marginStart: "k6y3xtnu",
    marginTop: "g1eqewly"
  },
  fullScreenRedesign: {
    boxSizing: "cm280p3y",
    paddingBottom: "di8pw70h"
  },
  fullscreen: {
    cursor: "bx7g2weo"
  },
  mediaStageWrapper: {
    height: "ppled2lx",
    start: "tkdu00h0",
    position: "lhggkp7q",
    top: "qq0sjtgm",
    width: "ln8gz9je"
  },
  preview: {
    backgroundPosition: "t3g6t33p",
    backgroundSize: "qnwaluaf",
    filter: "fsmudgz7",
    position: "lhggkp7q",
    top: "qq0sjtgm",
    start: "tkdu00h0",
    end: "ebjesfe0",
    bottom: "jxacihee"
  },
  videoFloaterMedia: {
    height: "ppled2lx",
    objectFit: "sg3pxicu",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    position: "g0rxnol2",
    width: "ln8gz9je"
  },
  loadingOverlay: {
    position: "lhggkp7q",
    top: "qq0sjtgm",
    start: "tkdu00h0",
    end: "ebjesfe0",
    bottom: "jxacihee"
  },
  videoTag: {
    position: "lhggkp7q",
    height: "ppled2lx",
    width: "ln8gz9je"
  },
  img: {
    filter: "fsmudgz7",
    height: "ppled2lx",
    objectFit: "sg3pxicu",
    width: "ln8gz9je"
  }
};
function F(e) {
  let {
    ogVideoInfo: t,
    isFullscreenMode: n,
    setRefVideo: a,
    startTime: r,
    onEnded: o,
    onError: l,
    onLoadedMetadata: i,
    onPause: u,
    onPlaying: s,
    onProgress: c,
    onTimeUpdate: d,
    setIsLoading: f,
    onVolumeChange: p,
    autoPlay: m,
    onLoadedData: h
  } = e;
  if (!t) {
    return null;
  }
  const g = {
    backgroundImage: `url(${t.previewUrl})`
  };
  return O.default.createElement(O.default.Fragment, null, n ? null : O.default.createElement("div", {
    className: (0, k.default)(B.preview),
    style: g
  }), t.videoUrl !== "" ? O.default.createElement(M.default, {
    ref: a,
    key: "floating-media",
    url: t.videoUrl,
    startTime: r,
    onEnded: o,
    onError: l,
    onLoadedMetadata: i,
    onPause: u,
    onPlaying: s,
    onProgress: c,
    onTimeUpdate: d,
    onWaiting: f,
    onVolumeChange: p,
    autoPlay: m,
    onLoadedData: h
  }, P.fbt._("Your browser doesn't support video playback.", null, {
    hk: "2nHZKq"
  })) : null);
}
function G(e) {
  let {
    msgVideoInfo: t,
    isMediaRenderable: n,
    isFullscreenMode: a,
    isVideoError: r,
    setRefVideo: o,
    startTime: i,
    onEnded: u,
    onError: s,
    onLoadedMetadata: c,
    onPause: p,
    onPlaying: m,
    onProgress: h,
    onTimeUpdate: g,
    isLoading: E,
    setIsLoadingDebounced: v,
    setIsLoadedWithCancel: _,
    onVolumeChange: C,
    autoPlay: b,
    onLoadedData: M
  } = e;
  if (!t) {
    return null;
  }
  const {
    preview: S
  } = t.mediaData;
  if (n) {
    const e = S instanceof f.default ? {
      backgroundImage: `url(${S.url()})`
    } : undefined;
    return O.default.createElement(O.default.Fragment, null, a ? null : O.default.createElement("div", {
      className: (0, k.default)(B.preview),
      style: e
    }), r ? null : O.default.createElement(y.default, {
      ref: o,
      key: "floating-media",
      msg: t.msg,
      mediaData: t.mediaData,
      className: (0, k.default)(B.videoTag),
      startTime: i,
      onEnded: u,
      onError: s,
      onLoadedMetadata: c,
      onPause: p,
      onPlaying: m,
      onProgress: h,
      onTimeUpdate: g,
      onVolumeChange: C,
      autoPlay: b,
      onWaiting: v,
      onCanPlay: _,
      onLoadedData: M
    }, P.fbt._("Your browser doesn't support video playback.", null, {
      hk: "2nHZKq"
    })), E && (0, l.getABPropConfigValue)("video_stream_buffering_ui_enabled") ? O.default.createElement(d.FlexColumn, {
      justify: "center",
      align: "center",
      className: (0, k.default)(B.loadingOverlay)
    }, O.default.createElement(T.Spinner, {
      color: "white"
    })) : null);
  }
  if (S instanceof f.default) {
    return O.default.createElement("img", {
      key: "floating-media",
      className: (0, k.default)(B.img),
      alt: P.fbt._("Preview", null, {
        hk: "1wMxOr"
      }),
      src: S.url(),
      draggable: "false"
    });
  } else {
    return null;
  }
}
function U(e) {
  let {
    type: t,
    msgVideoInfo: n,
    ogVideoInfo: a,
    isMediaRenderable: r,
    isFullscreenMode: o,
    isVideoError: l,
    setRefVideo: i,
    startTime: u,
    onEnded: s,
    onError: c,
    onLoadedMetadata: d,
    onPause: f,
    onPlaying: p,
    onProgress: m,
    onTimeUpdate: h,
    isLoading: g,
    setIsLoading: E,
    setIsLoadingDebounced: _,
    setIsLoadedWithCancel: y,
    onVolumeChange: C,
    autoPlay: b,
    onLoadedData: M
  } = e;
  switch (t) {
    case v.PLAYER_TYPE.FLOATER:
    case v.PLAYER_TYPE.MEDIA_VIEWER:
      return O.default.createElement(G, {
        msgVideoInfo: n,
        isMediaRenderable: r,
        isFullscreenMode: o,
        isVideoError: l,
        setRefVideo: i,
        startTime: u,
        onError: c,
        onEnded: s,
        onLoadedMetadata: d,
        onPause: f,
        onPlaying: p,
        onProgress: m,
        onTimeUpdate: h,
        isLoading: g,
        setIsLoadingDebounced: _,
        setIsLoadedWithCancel: y,
        onVolumeChange: C,
        autoPlay: b,
        onLoadedData: M
      });
    case v.PLAYER_TYPE.OG_FLOATER:
      return O.default.createElement(F, {
        ogVideoInfo: a,
        isFullscreenMode: o,
        setRefVideo: i,
        startTime: u,
        onEnded: s,
        onError: c,
        onLoadedMetadata: d,
        onPause: f,
        onPlaying: p,
        onProgress: m,
        onTimeUpdate: h,
        setIsLoading: E,
        onVolumeChange: C,
        autoPlay: b,
        onLoadedData: M
      });
  }
  return null;
}
function W(e) {
  let {
    type: t,
    msgVideoInfo: n,
    ogVideoInfo: a
  } = e;
  switch (t) {
    case v.PLAYER_TYPE.FLOATER:
    case v.PLAYER_TYPE.MEDIA_VIEWER:
      if (n) {
        return O.default.createElement("div", {
          className: (0, k.default)(B.mediaStageWrapper)
        }, O.default.createElement(p.default, {
          msg: n.msg,
          mediaData: n.mediaData
        }));
      } else {
        return null;
      }
    case v.PLAYER_TYPE.OG_FLOATER:
      if (a && a.videoUrl === "") {
        return O.default.createElement("div", {
          className: (0, k.default)(B.mediaStageWrapper)
        }, O.default.createElement(m.Pending, null));
      } else {
        return null;
      }
  }
  return null;
}
function H(e) {
  let {
    children: t
  } = e;
  return O.default.createElement(C.default, null, O.default.createElement(i.AlertIcon, {
    directional: true,
    className: (0, k.default)(B.errorLinkChevron),
    displayInline: true
  }), " ", P.fbt._("The video can't be played.", null, {
    hk: "4Es7E8"
  }), t);
}
function V(e) {
  var t;
  var n;
  let {
    type: a,
    ogVideoInfo: r
  } = e;
  if (a !== v.PLAYER_TYPE.OG_FLOATER) {
    return null;
  }
  if (!r) {
    return null;
  }
  const o = (t = (n = r.videoMsg.ctwaContext) === null || n === undefined ? undefined : n.sourceUrl) !== null && t !== undefined ? t : r.videoMsg.matchedText;
  return O.default.createElement(c.ExternalLink, {
    className: (0, k.default)(B.errorLink),
    href: o
  }, O.default.createElement("span", null, P.fbt._("Open the link", null, {
    hk: "2xiq6A"
  })), O.default.createElement(u.ChevronRightTextIcon, {
    directional: true,
    displayInline: true,
    className: (0, k.default)(B.errorLinkChevron)
  }));
}
function q(e, t) {
  var n;
  const {
    onFullscreenToggle: a,
    onSetFullscreenToggleCallback: l,
    onRefSet: i,
    startTime: u,
    onAspectRatio: c,
    onLoadedMetadata: d,
    onVideoEnded: f,
    onError: p,
    onVideoMetadataChange: m,
    type: y,
    ogVideoInfo: C,
    autoPlay: M,
    msgVideoInfo: T,
    onClose: P,
    onLoadedData: L,
    noPip: j = false,
    disablePiPControls: F = false,
    onTimeUpdate: G
  } = e;
  const q = (0, O.useRef)(null);
  const Y = (0, O.useRef)(null);
  const z = (0, O.useRef)([]);
  const {
    value: K,
    setTrue: Q,
    setFalse: X
  } = (0, D.default)(true);
  const Z = (0, I.default)(Q, 250);
  const J = (0, x.default)(() => {
    Z.cancel();
    X();
  });
  const [$, ee] = (0, O.useState)(null);
  const [te, ne] = (0, O.useState)(false);
  const [ae, re] = (0, O.useState)(false);
  const [oe, le] = (0, O.useState)(false);
  const [ie, ue] = (0, O.useState)(false);
  const [se, ce] = (0, O.useState)(s.default.isFullscreenMode());
  const de = (0, N.default)($);
  const fe = (0, N.default)(te);
  const pe = (0, x.default)(e => {
    if (!(a == null)) {
      a(e);
    }
  });
  (0, O.useEffect)(() => {
    pe(se);
  }, [se, pe]);
  (0, R.useListener)(s.default, "fullscreen_change", () => {
    if (s.default.isFullscreenMode() && s.default.getFullscreenElement() === Y.current) {
      ce(true);
    } else if (!s.default.isFullscreenMode()) {
      ce(false);
    }
  });
  const me = (0, I.default)(() => {
    ue(false);
  }, 3000);
  const he = e => {
    if (se) {
      (e => {
        e.stopPropagation();
        s.default.exitFullscreen();
      })(e);
    } else {
      (e => {
        e.stopPropagation();
        s.default.requestFullscreen(Y.current);
      })(e);
    }
  };
  (0, O.useEffect)(() => {
    if (!(l == null)) {
      l(he);
    }
  }, []);
  const ge = (0, x.default)(e => {
    q.current = e;
    if (e != null) {
      if (!(i == null)) {
        i(e);
      }
    }
  });
  const Ee = (e, t) => {
    let n = 0;
    for (let a = 0; a < e.length; a++) {
      if (t >= e[a][0] && t < e[a][1]) {
        n = e[a][1];
        break;
      }
    }
    return n;
  };
  const ve = () => Y.current;
  (0, O.useEffect)(() => {
    if (!(fe === te && (0, o.default)(de, $) || m == null)) {
      m($, te);
    }
  }, [te, m, fe, de, $]);
  const _e = () => q.current ? q.current.getCurrentTime() : 0;
  const ye = () => {
    switch (y) {
      case v.PLAYER_TYPE.FLOATER:
      case v.PLAYER_TYPE.MEDIA_VIEWER:
        {
          if (!T) {
            return false;
          }
          const e = T.mediaData;
          return e.mediaStage === h.MEDIA_DATA_STAGE.RESOLVED || e.streamable && e.isStreamable();
        }
      case v.PLAYER_TYPE.OG_FLOATER:
        return true;
    }
    return true;
  };
  let Ce;
  let be;
  let Me;
  (0, O.useImperativeHandle)(t, () => ({
    getContainerElement: ve,
    getCurrentTimeFromVideo: _e
  }));
  const Se = ye();
  const Te = se;
  if (Se && !Te) {
    be = O.default.createElement(_.default, {
      isFullscreenMode: se,
      onClick: he
    });
  }
  const we = Te ? null : O.default.createElement(E.default, {
    isFullscreenMode: se,
    onClick: t => {
      t.stopPropagation();
      e.onClose();
    }
  });
  switch (e.type) {
    case v.PLAYER_TYPE.OG_FLOATER:
    case v.PLAYER_TYPE.FLOATER:
      Ce = [w.UA.isSafari ? null : be, we];
      break;
    case v.PLAYER_TYPE.MEDIA_VIEWER:
      {
        let t;
        t = se ? we : !j && Se ? O.default.createElement(g.PiPButton, {
          onClick: t => {
            t.stopPropagation();
            if (e.onClose) {
              e.onClose();
            }
            if (e.onOpenVideoFloater) {
              e.onOpenVideoFloater();
            }
          },
          theme: g.PIP_BUTTON_THEME.PLAYER
        }) : null;
        Ce = [be, t];
        Me = e => {
          e.stopPropagation();
          if (q.current) {
            if (te) {
              q.current.pause();
            } else {
              q.current.play();
            }
          }
        };
        break;
      }
  }
  let Ae;
  Ae = se ? [O.default.createElement(b.default, {
    key: "upper",
    theme: "upper"
  }), O.default.createElement(b.default, {
    key: "lower",
    theme: "lower"
  })] : e.type === v.PLAYER_TYPE.MEDIA_VIEWER ? O.default.createElement(b.default, {
    theme: "full-sharp"
  }) : O.default.createElement(b.default, {
    theme: "full-rounded"
  });
  const Pe = ae ? O.default.createElement(H, null, O.default.createElement(V, {
    type: y,
    ogVideoInfo: C
  })) : null;
  const Oe = ye() && $ != null ? O.default.createElement(S.VideoRefControls, {
    refVideo: q.current,
    videoMetadata: $,
    isFullscreenMode: se,
    isVideoPlaying: te,
    ctwaSourceUrl: C == null || (n = C.videoMsg.ctwaContext) === null || n === undefined ? undefined : n.sourceUrl,
    newPiPStyle: Te,
    onFullscreenToggle: Te ? he : undefined,
    onClose: Te ? P : undefined
  }) : null;
  return O.default.createElement("div", {
    ref: Y,
    key: "elementsWrapped",
    className: (0, k.default)(B.container, se && B.fullscreen),
    onMouseEnter: () => {
      le(true);
    },
    onMouseLeave: () => {
      le(false);
    },
    onMouseDown: e => {
      if (se) {
        e.stopPropagation();
      }
    },
    onMouseMove: () => {
      if (!oe) {
        le(true);
      }
      if (!ie) {
        ue(true);
      }
      me();
    },
    onClick: Me
  }, O.default.createElement("div", {
    className: (0, k.default)(B.videoFloaterMedia, Te && B.fullScreenRedesign)
  }, O.default.createElement(U, {
    type: y,
    ogVideoInfo: C,
    msgVideoInfo: T,
    isMediaRenderable: ye(),
    isFullscreenMode: se,
    isVideoError: ae,
    setRefVideo: ge,
    startTime: u,
    onError: e => {
      if (e !== 20) {
        re(true);
        if (p) {
          p();
        }
      } else {
        ne(false);
      }
    },
    onEnded: () => {
      if (f) {
        f();
      }
      ne(false);
    },
    onLoadedMetadata: (e, t) => {
      const n = u != null ? u : 0;
      if (!e.videoWidth) {
        re(true);
      }
      ee({
        duration: e.duration,
        currentTime: n,
        volume: e.volume,
        muted: e.muted,
        bufferedTime: 0
      });
      if (c && e.videoWidth && e.videoHeight) {
        c(e.videoWidth / e.videoHeight);
      }
      if (d) {
        d(t);
      }
    },
    onPause: () => {
      ne(false);
    },
    onPlaying: () => {
      ne(true);
    },
    onProgress: e => {
      z.current = e;
      if (!$) {
        return;
      }
      const t = $.currentTime;
      const n = Ee(e, t);
      const a = (0, r.default)((0, r.default)({}, $), {}, {
        bufferedTime: n
      });
      ee(a);
    },
    onTimeUpdate: e => {
      if (!(G == null)) {
        G(e);
      }
      let t = null;
      if ($) {
        const n = Ee(z.current, e);
        t = (0, r.default)((0, r.default)({}, $), {}, {
          currentTime: e,
          bufferedTime: n
        });
      }
      ee(t);
    },
    isLoading: K,
    setIsLoading: Q,
    setIsLoadingDebounced: Z,
    setIsLoadedWithCancel: J,
    onVolumeChange: e => {
      let t = null;
      if ($) {
        t = (0, r.default)((0, r.default)({}, $), {}, {
          volume: e.volume,
          muted: e.muted
        });
      }
      ee(t);
    },
    autoPlay: M,
    onLoadedData: L
  })), O.default.createElement(W, {
    type: y,
    msgVideoInfo: T,
    ogVideoInfo: C
  }), Pe, e.overlays, O.default.createElement(A.default, {
    transitionName: "fade-fast"
  }, oe && ie && (F && !se) !== true && !ae ? [Ae, Oe, Ce] : null));
}
exports.FULLSCREEN_CONTROLS_DISPLAY_TIMEOUT = 3000;
const Y = (0, O.forwardRef)(q);
exports.WrappedSharedVideoPlayer = Y;
Y.displayName = "WrappedSharedVideoPlayer";