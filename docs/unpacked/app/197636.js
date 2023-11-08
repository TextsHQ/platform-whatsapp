var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canPlayOgg = undefined;
exports.disposeVideo = T;
exports.image = function (e) {
  return S(e).then(e => {
    if (e && e.naturalWidth > 0) {
      return {
        img: e,
        fullWidth: e.naturalWidth,
        fullHeight: e.naturalHeight
      };
    }
    throw new c.MediaLoadError("image loaded with zero width");
  }).catch(() => {
    throw new c.MediaLoadError("unable to render image");
  });
};
exports.loadImage = S;
exports.loadVideo = v;
exports.transcode = function (e, t) {
  const n = t || e.type;
  if ((0, u.isOpus)(n) && !h) {
    if (e.size <= 300000) {
      return new l.default(e).generateBlob();
    }
    return Promise.reject(new c.TranscodeBlobTooLargeError());
  }
  return Promise.resolve(e);
};
exports.videoWidthHeightDuration = function (e) {
  return v(e).then(e => {
    let {
      video: t,
      fullWidth: n,
      fullHeight: r,
      duration: i
    } = e;
    T(t);
    return {
      width: n,
      height: r,
      duration: i
    };
  });
};
var i = require("./477689.js");
var a = require("./122583.js");
var o = require("./8304.js");
var s = require("./434517.js");
var l = r(require("./534793.js"));
var u = require("./937484.js");
var c = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = m(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var r = {};
  var i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e) {
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
      if (o && (o.get || o.set)) {
        Object.defineProperty(r, a, o);
      } else {
        r[a] = e[a];
      }
    }
  }
  r.default = e;
  if (n) {
    n.set(e, r);
  }
  return r;
}(require("./288057.js"));
var d = r(require("./841737.js"));
var p = require("./368170.js");
var f = require("./427219.js");
var _ = require("./329094.js");
var g = r(require("./556869.js"));
function m(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (m = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const h = new Audio().canPlayType("audio/ogg");
exports.canPlayOgg = h;
let y = 0;
let E = Promise.resolve();
function S(e) {
  let t;
  let n = !(arguments.length > 1 && arguments[1] !== undefined) || arguments[1];
  return new Promise(function (r, i) {
    t = new Image();
    const a = /^(?:data|blob):/.test(e);
    if (n && !a) {
      t.setAttribute("crossOrigin", "anonymous");
    }
    t.onload = r;
    t.onabort = () => {
      i((0, g.default)("loadImage onabort"));
    };
    t.onerror = () => {
      i(new c.InvalidImageFileType("Image tag load error"));
    };
    t.src = e;
  }).then(() => t);
}
function v(e) {
  const t = E.then(() => function (e) {
    const t = new _.WebcMediaLoadWamEvent();
    let n;
    let r;
    let l = null;
    const u = ++y;
    function g() {
      if (n && l) {
        if (document.body) {
          document.body.removeChild(l);
        }
        l = null;
      }
    }
    let m = true;
    const h = new Promise(function (t, i) {
      __LOG__(2)`MediaLoad:video called (#${u})`;
      let a = false;
      let o = false;
      n = document.createElement("video");
      n.setAttribute("crossOrigin", "anonymous");
      n.volume = 0;
      n.muted = true;
      n.playsinline = true;
      const s = () => {
        if (o && a) {
          t();
        }
      };
      n.onloadedmetadata = () => {
        __LOG__(2)`MediaLoad:video.onloadedmetadata #${u}. Video ready: ${o}. Video width: ${n.videoWidth}`;
        n.onloadedmetadata = null;
        a = true;
        s();
      };
      n.oncanplaythrough = () => {
        __LOG__(2)`MediaLoad:video.oncanplaythrough #${u}. Metadata loaded: ${a}. Video width: ${n.videoWidth}`;
        n.oncanplaythrough = null;
        n.onseeked = () => {
          o = true;
          n.onseeked = null;
          s();
        };
        n.currentTime = 0;
      };
      n.onerror = () => {
        const t = n.error ? n.error.message : "no error message";
        __LOG__(3)`MediaLoad:video.onerror #${u}: ${String(t)}\n Blob info -> size:${e.size}, type: ${e.type}`;
        const r = function (e) {
          if (!e || !e.error) {
            return null;
          }
          const t = e.error;
          let n = Object.keys(d.default).find(e => d.default[e] === t.code);
          n = n || `UNKNOWN CODE ${t.code}`;
          const r = t.message && ~t.message.indexOf(":") ? t.message.split(":")[0] : "";
          if (r) {
            return `${n}: ${r}`;
          } else {
            return n;
          }
        }(n);
        i(new c.UnableToPlayVideoError(r));
      };
      n.src = r = window.URL.createObjectURL(e);
      if (p.UA.isSafari) {
        l = document.createElement("div");
        const e = l;
        e.style = "opacity: 0.004";
        e.appendChild(n);
        if (document.body) {
          document.body.appendChild(e);
        }
      }
      n.load();
      n.currentTime = 1;
    }).finally(() => {
      m = false;
    });
    self.setTimeout(() => {
      g();
      if (m) {
        __LOG__(3)`unable to load video #${u} (${e.size} bytes)`;
        new _.WebcMediaLoadWamEvent({
          webcMediaLoadResult: f.WEBC_MEDIA_LOAD_RESULT_CODE.SILENCE
        }).commit();
      }
    }, 8000);
    const E = (0, s.promiseTimeout)(h, 20000).then(() => (0, o.delayMs)(10)).then(() => {
      t.markWebcMediaLoadT();
      __LOG__(2)`MediaLoad:video #${u} successful`;
      n.pause();
      if (n.videoWidth > 0) {
        t.webcMediaLoadResult = f.WEBC_MEDIA_LOAD_RESULT_CODE.SUCCESS;
        t.commit();
        return {
          video: n,
          fullWidth: n.videoWidth,
          fullHeight: n.videoHeight,
          duration: n.duration
        };
      }
      throw n.duration > 0 ? (__LOG__(3)`MediaLoad:video #${u} dimensions are not defined. Video readyState: ${n.readyState}. Video width: ${n.videoWidth}`, new c.MediaUnsupportedError("video loaded with duration but no dims")) : (t.webcMediaLoadResult = f.WEBC_MEDIA_LOAD_RESULT_CODE.ZEROWIDTH, t.commit(), new c.MediaLoadError("video loaded with zero width"));
    }).catch((0, a.filteredCatch)(i.TimeoutError, e => {
      __LOG__(4, undefined, new Error(), true)`MediaLoad:video load error, currentTime=${n.currentTime}. duration=${n.duration}`;
      SEND_LOGS("video-load-timeout", 0.001);
      throw e;
    })).finally(() => {
      g();
      if (n) {
        n.onloadedmetadata = null;
        n.onloadeddata = null;
        n.oncanplaythrough = null;
        n.ontimeupdate = null;
        n.onerror = null;
      }
      if (r) {
        window.URL.revokeObjectURL(r);
      }
    });
    E.catch(() => {
      T(n);
    });
    return E;
  }(e));
  E = (0, s.promiseTimeout)(t, 1000).then(() => {}, () => {});
  return t;
}
function T(e) {
  try {
    e.pause();
    e.src = "";
    e.load();
  } catch (e) {
    __LOG__(4, undefined, new Error(), true)`Error: ${String(e)}`;
    SEND_LOGS("dispose-video-error");
  }
}