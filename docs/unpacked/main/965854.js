var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("../app/780549.js");
var o = require("../app/356097.js");
var l = require("../app/753233.js");
var i = require("../app/163755.js");
var u = require("../app/446303.js");
var s = require("../app/917936.js");
var c = a(require("../app/343087.js"));
var d = a(require("./428543.js"));
var f = require("../app/860888.js");
var p = require("../app/114850.js");
var m = require("../app/787742.js");
var h = require("../app/44118.js");
var g = require("../app/174084.js");
var E = require("../app/547821.js");
var v = a(require("../app/569984.js"));
var _ = a(require("../app/79291.js"));
var y = require("../app/913249.js");
var C = a(require("../vendors-main/803689.js"));
var b = function (e, t) {
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
var M = require("./871210.js");
var S = a(require("../app/49710.js"));
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
function w(e) {
  const {
    msg: t,
    displayType: n,
    isInvite: a,
    theme: T
  } = e;
  const {
    statusItemViewEventRef: w
  } = (0, b.useContext)(E.StatusV3StatusContext);
  const [A, P, O, k, D, I, R, N, x, L, j, B, F, G, U, W] = (0, M.useMsgValues)(t.id, [m.getT, m.getThumbnail, m.getThumbnailHQ, m.getThumbnailDirectPath, m.getThumbnailHeight, m.getThumbnailWidth, m.getTitle, m.getDescription, m.getCanonicalUrl, m.getMatchedText, m.getIsSentByMe, m.getStar, i.getAsUrl, m.getInviteGrpType, m.getIsKept, m.getMediaKey]);
  const H = (0, S.default)(k);
  (0, b.useEffect)(() => {
    const e = F;
    if (!(e == null || e.thumbnailHQ && H === k || (0, f.hqLinkPreviewExpired)(A))) {
      (0, c.default)({
        chat: (0, i.getMaybeChat)(t),
        msg: e,
        isPreload: false
      });
    }
  }, [F, W, A, t, k, H]);
  let V = null;
  if (!a) {
    V = _.default.hostname(x || L);
    try {
      V = C.default.toUnicode(V);
    } catch (e) {}
  }
  const q = (0, h.getSuspiciousLinks)(t).filter(e => {
    let {
      url: n
    } = e;
    return t.matchedText === n;
  });
  let Y;
  let z;
  let K;
  let Q;
  let X;
  let Z;
  let J;
  if (q.length) {
    J = () => {
      const e = q[0];
      p.ModalManager.open(b.default.createElement(v.default, {
        link: e
      }));
    };
  } else {
    J = () => {
      const t = L;
      const n = w == null ? undefined : w.current;
      if (n && n.urlStatusClicked === y.URL_STATUS_CLICKED.NO_CLICK) {
        n.urlStatusClicked = y.URL_STATUS_CLICKED.ONE_CLICK;
      }
      if (e.displayType === o.DISPLAY_TYPE.STATUS) {
        const e = (0, u.findLink)(t);
        if (e != null) {
          const [t, n] = (0, g.cleanUrl)(e);
          if ((0, g.redactUrl)(t, n) !== t + n) {
            p.ModalManager.open(b.default.createElement(s.LongLinkPopup, {
              link: e,
              statusItemViewEventRef: w
            }));
            return void r.Cmd.openLongLinkModal();
          }
        }
      }
      (0, l.openExternalLink)(t);
    };
    Y = N;
    z = P;
    if (!(0, f.hqLinkPreviewExpired)(A)) {
      K = O;
      Q = k;
      X = D;
      Z = I;
    }
  }
  return b.default.createElement(d.default, {
    canonicalUrl: V,
    description: Y,
    displayType: n,
    isInvite: a,
    inviteGrpType: a === true ? G : null,
    onClick: J,
    isSentByMe: j,
    thumbnailJpeg: z,
    thumbnailJpegHQ: K,
    thumbnailJpegDirectPath: Q,
    thumbnailJpegHeight: X,
    thumbnailJpegWidth: Z,
    title: R,
    star: B,
    kept: U,
    theme: T,
    matchedText: t.matchedText,
    botPluginReferenceIndex: t.botPluginReferenceIndex,
    isLoading: false
  });
}
var A = (0, b.memo)(w);
exports.default = A;