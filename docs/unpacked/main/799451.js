var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("../app/898817.js");
var o = a(require("../app/670983.js"));
var l = a(require("../app/229922.js"));
var i = require("../app/287461.js");
var u = require("../app/396574.js");
var s = a(require("./965940.js"));
var c = require("../app/868607.js");
var d = a(require("./984878.js"));
var f = a(require("../app/756680.js"));
var p = a(require("./674465.js"));
var m = require("./115900.js");
var h = a(require("./406102.js"));
var g = a(require("./562433.js"));
var E = a(require("./738561.js"));
var v = require("./3778.js");
var _ = a(require("./529727.js"));
var y = require("../vendor/548360.js");
var C = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = T(t);
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
var b = a(require("../app/637660.js"));
var M = require("../app/655241.js");
var S = a(require("../app/895851.js"));
function T(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (T = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const w = (0, C.forwardRef)((e, t) => {
  let {
    className: n,
    loopAnimation: a,
    mediaData: r,
    startAnimation: o,
    renderPreview: l,
    downloadMedia: i,
    onClick: u,
    label: c
  } = e;
  if (r.animationDuration > 0 && !a) {
    return C.default.createElement(s.default, {
      className: n,
      mediaData: r,
      startAnimation: o,
      onClick: u,
      placeholderRenderer: l,
      downloadMedia: i,
      ref: t,
      label: c
    });
  } else {
    return C.default.createElement(p.default, {
      mediaData: r,
      placeholderRenderer: l,
      downloadMedia: i
    }, e => C.default.createElement("img", {
      className: n,
      draggable: "false",
      onClick: u,
      src: e,
      alt: c
    }));
  }
});
function A(e) {
  let {
    className: t,
    loopAnimation: n,
    mediaData: a,
    startAnimation: r,
    renderPreview: l,
    downloadMedia: i,
    onClick: u
  } = e;
  if (a.animationDuration > 0) {
    const e = n ? 1 / 0 : a.animationDuration / (0, o.default)(a.singleLoopDuration, "mediaData.singleLoopDuration");
    return C.default.createElement(d.default, {
      mediaData: a,
      render: a => C.default.createElement(E.default, {
        className: t,
        loopAnimation: n,
        maxLoops: e,
        blob: a,
        renderPreview: l,
        startAnimation: r,
        onClick: u
      }),
      renderPlaceholder: l,
      downloadMedia: i
    });
  }
  if (a.rgbaBuffer) {
    return C.default.createElement(h.default, {
      className: t,
      height: a.rgbaHeight,
      onClick: u,
      rgbaBuffer: a.rgbaBuffer,
      width: a.rgbaWidth
    });
  } else {
    return l();
  }
}
function P(e) {
  var t;
  let {
    mediaData: n,
    theme: a,
    className: r,
    isCreateButton: o,
    onClick: l
  } = e;
  const i = n.preview;
  const s = i instanceof f.default ? i.url() : null;
  const c = (t = n.emojis) === null || t === undefined ? undefined : t.join(" ");
  const d = c ? y.fbt._("Sticker with: {emojis}", [y.fbt._param("emojis", c)], {
    hk: "1sig9t"
  }) : y.fbt._("Sticker with no label", null, {
    hk: "1aw5TF"
  });
  if (s) {
    return C.default.createElement("img", {
      className: r,
      draggable: "false",
      onClick: l,
      src: s,
      alt: d
    });
  } else if (o) {
    return C.default.createElement(v.StickerCreateButton, {
      onClick: l,
      theme: a === "stickerExpressionsPanel" ? "stickerExpressionsPanel" : undefined
    });
  } else {
    return C.default.createElement(_.default, {
      className: (0, u.classnamesConvertMeToStylexPlease)(g.default.placeholder, r)
    });
  }
}
w.displayName = "StickerWithWebp";
const O = (e, t) => {
  const n = (0, M.useModelValues)(e.mediaData, ["animatedAsNewMsg", "animationDuration", "singleLoopDuration", "mediaBlob", "preview", "renderableUrl", "rgbaBuffer", "rgbaHeight", "rgbaWidth", "emojis", "mediaStage"]);
  const a = (0, b.default)(() => n.animatedAsNewMsg).current;
  const o = function () {
    const [e, t] = (0, C.useState)(c.getCachedWebpSupport);
    const n = (0, S.default)();
    (0, C.useEffect)(() => {
      if (e == null) {
        (0, l.default)((0, c.detectWebpSupport)(), n).then(t).catch(e => {
          if (e.name !== r.ABORT_ERROR) {
            throw e;
          }
        });
      }
    }, []);
    return e;
  }();
  const s = (0, C.useRef)();
  const d = (0, C.useRef)();
  (0, C.useImperativeHandle)(t, () => ({
    startAnimation() {
      var e;
      if (!((e = d.current) === null || e === undefined)) {
        e.startAnimation();
      }
    },
    getImgNode: () => s.current
  }));
  const f = (0, u.classnamesConvertMeToStylexPlease)({
    [g.default.conversation]: e.theme === "conversation",
    [g.default.quoted]: e.theme === "quoted",
    [g.default.composeBoxQuoted]: e.theme === "composeBoxQuoted",
    [g.default.composeBox]: e.theme === "composeBox",
    [g.default.stickerPanel]: e.theme === "stickerPanel",
    [g.default.stickerExpressionsPanel]: e.theme === "stickerExpressionsPanel",
    [g.default.bigger]: e.theme === "stickerExpressionsPanel" && (0, i.getABPropConfigValue)("web_expression_panels_show_less_stickers"),
    [g.default.stickerStore]: e.theme === "stickerStore",
    [g.default.stickerDetails]: e.theme === "stickerDetails",
    [g.default.clickable]: Boolean(e.onClick),
    [g.default.large]: e.theme !== "composeBox"
  });
  let p;
  if (o == null) {
    p = C.default.createElement(P, {
      isCreateButton: e.isCreateButton,
      mediaData: n,
      className: f,
      theme: e.theme,
      onClick: e.onClick
    });
  } else {
    var h;
    const t = (h = n.emojis) === null || h === undefined ? undefined : h.join(" ");
    const r = (0, m.getStickerCustomLabel)(t);
    const l = Boolean(e.animateOnView || e.isNewMsg && !a);
    const i = Boolean(e.loopAnimation);
    p = o ? C.default.createElement(w, {
      ref: d,
      className: f,
      mediaData: n,
      loopAnimation: i,
      startAnimation: l,
      renderPreview: () => C.default.createElement(P, {
        isCreateButton: e.isCreateButton,
        mediaData: n,
        className: f,
        theme: e.theme,
        onClick: e.onClick
      }),
      onClick: e.onClick,
      downloadMedia: e.downloadMedia,
      label: r
    }) : C.default.createElement(A, {
      className: f,
      mediaData: n,
      loopAnimation: i,
      startAnimation: l,
      renderPreview: () => C.default.createElement(P, {
        isCreateButton: e.isCreateButton,
        mediaData: n,
        className: f,
        onClick: e.onClick,
        theme: e.theme
      }),
      onClick: e.onClick,
      downloadMedia: e.downloadMedia,
      label: r
    });
  }
  return C.default.createElement("span", {
    ref: s,
    className: (0, u.classnamesConvertMeToStylexPlease)(g.default.large, g.default.container)
  }, p);
};
var k = (0, C.forwardRef)(O);
exports.default = k;