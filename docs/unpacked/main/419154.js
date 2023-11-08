var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("../app/72696.js");
var o = a(require("../app/659177.js"));
var l = require("../app/396574.js");
var i = require("../app/356097.js");
var u = require("./908582.js");
var s = require("../app/163755.js");
var c = require("../app/943914.js");
var d = a(require("../app/753110.js"));
var f = a(require("../app/83162.js"));
var p = a(require("../app/932325.js"));
var m = require("../app/860888.js");
var h = a(require("./739208.js"));
var g = require("../app/787742.js");
var E = require("../app/44118.js");
var v = require("../app/435711.js");
var _ = require("./192071.js");
var y = require("../app/373070.js");
var C = require("./968698.js");
var b = require("../app/533494.js");
var M = require("../app/163139.js");
var S = require("../app/667738.js");
var T = require("../app/239870.js");
var w = require("../app/905225.js");
var A = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = O(t);
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
var P = require("./871210.js");
function O(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (O = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function k(e, t) {
  const {
    msg: n,
    isGroupedSticker: a,
    hasAuthor: O,
    onToggle: k,
    tabIndex: D,
    ariaLabel: I,
    role: R,
    contextOwnerIsKeyboardFocused: N = false
  } = e;
  const x = (0, A.useRef)(null);
  const L = (0, A.useRef)(null);
  const j = (0, A.useContext)(S.ThemeContext);
  const [B, F, G, U, W, H, V, q, Y, z, K, Q, X, Z, J, $, ee] = (0, P.useMsgValues)(e.msg.id, [g.getAck, g.getLinkPreview, g.getMatchedText, g.getCtwaContext, s.getDir, s.getRtl, g.getIsMedia, g.getIsSentByMe, g.getIsGroupMsg, g.getIsViewOnce, g.getInteractiveHeader, g.getType, g.getQuotedMsg, g.getBody, g.getQuotedRemoteJid, g.getRichPreviewType, g.getDoNotPlayInline]);
  const [te, ne, ae, re, oe, le, ie] = (0, P.useMsgValues)(e.msg.id, [g.getList, g.getNativeFlowName, g.getThumbnailDirectPath, g.getThumbnailHeight, g.getThumbnailWidth, s.getText, s.getIsTransparentMsg]);
  (0, A.useImperativeHandle)(t, () => ({
    getContext: () => L.current,
    getElement: () => x.current
  }));
  const ue = e => {
    e.stopPropagation();
    k(e.target);
  };
  const se = !!X;
  const ce = (0, _.showForwarded)(n);
  const de = (0, i.isWideDisplay)(e.displayType);
  const fe = Q === y.MSG_TYPE.DOCUMENT || (K == null ? undefined : K.mediaType) === c.InteractiveMessageHeaderMediaType.DOCUMENT;
  const pe = fe && !Z;
  const me = fe && Z;
  const he = Q === y.MSG_TYPE.LOCATION;
  const ge = F && (0, C.isParsableOnlineVideoURL)($, G, ee);
  const Ee = Q === y.MSG_TYPE.LIST && (te == null ? undefined : te.listType) === b.Message$ListMessage$ListType.PRODUCT_LIST;
  const ve = V || [c.InteractiveMessageHeaderMediaType.IMAGE, c.InteractiveMessageHeaderMediaType.VIDEO].includes(K == null ? undefined : K.mediaType);
  const _e = me || he || se || Ee || Q === y.MSG_TYPE.PAYMENT || ge || Q === y.MSG_TYPE.PRODUCT || [d.default.ORDER_DETAILS, d.default.ORDER_STATUS].includes(ne) || U || ve && !z && Q !== y.MSG_TYPE.AUDIO || z && !q && !(0, T.isViewed)(n.safe());
  const ye = (0, E.getSuspiciousLinks)(n).length > 0;
  const Ce = (0, r.isAdsAttributionEnabled)() && U != null;
  const be = Q === y.MSG_TYPE.CHAT && F && !ge && !O && !ce && !ye && (0, v.isTrusted)(n);
  const Me = (0, m.displayHighQualityLinkPreview)((0, M.unproxy)(n.unsafe()));
  const Se = _e && !Ce && !O && !ye && !ce || be && Me;
  const Te = (0, l.classnamesConvertMeToStylexPlease)(Se ? h.default.contextIconMedia : h.default.contextIcon);
  const we = Q === y.MSG_TYPE.PTT || Q === y.MSG_TYPE.AUDIO;
  const Ae = Q === y.MSG_TYPE.MULTI_VCARD && !se && !O && !ce;
  const Pe = Q === y.MSG_TYPE.GROUPS_V4_INVITE;
  const Oe = Q === y.MSG_TYPE.ORDER;
  const ke = Q === y.MSG_TYPE.CHAT && ie;
  const De = (be && !Me || pe || Pe || Oe) && !O && !ce && !se;
  const Ie = function (e) {
    let {
      msg: t,
      isGroupedSticker: n,
      isGroupMsg: a,
      isWide: r,
      isSentByMe: o,
      isTransparentMsg: l
    } = e;
    switch (t.type) {
      case y.MSG_TYPE.STICKER:
        return l && (n === true || !a || a && o && !r);
      case y.MSG_TYPE.CHAT:
        return l && (!a || a && o && !r);
      case y.MSG_TYPE.PTV:
        return !r;
    }
    return false;
  }({
    msg: n,
    isGroupedSticker: a,
    isGroupMsg: Y,
    isWide: de,
    isSentByMe: q,
    isTransparentMsg: ie
  });
  let Re;
  let Ne;
  if (Ie) {
    const e = o.default.get("defaultPreference");
    const t = e ? e.wallpaperColor : w.DEFAULT_CHAT_WALLPAPER;
    Ne = A.default.createElement("div", {
      className: h.default.badge,
      style: {
        backgroundColor: t,
        opacity: 0.9
      }
    });
    Re = (0, w.invertTransparentWallpaperColors)(j.theme, t);
  }
  const xe = !(Q !== y.MSG_TYPE.CHAT || se || O || ce || ge || m.displayHighQualityLinkPreview || !W || H === p.default.isRTL());
  const Le = (Q === y.MSG_TYPE.PTT || Q === y.MSG_TYPE.AUDIO) && p.default.isRTL() && !O;
  const je = (0, g.getIsNewsletterMsg)(n);
  let Be;
  if (!(N || se && J)) {
    Be = we && je ? h.default.contextIn : q ? h.default.contextOut : h.default.contextIn;
  }
  const Fe = (0, l.classnamesConvertMeToStylexPlease)(Be, Se ? p.default.isRTL() ? h.default.contextMediaRtl : h.default.contextMediaLtr : null, {
    [h.default.context]: !(Se || be) || De,
    [h.default.contextMedia]: Se,
    [h.default.contextPtt]: we,
    [h.default.contextPttFix]: we && !se && !O,
    [h.default.contextSpecial]: De,
    [h.default.contextDoc]: pe && !O && !ce && !se,
    [h.default.contextMediaDocument]: me,
    [h.default.contextMultiVcard]: Ae,
    [h.default.contextInverse]: xe || Le,
    [h.default.contextTransparentAuthor]: ie && !Ie,
    [h.default.contextTransparent]: Ie,
    [h.default.contextTransparentInverse]: Ie && Re,
    [h.default.contextAnimatedEmoji]: ke
  });
  return A.default.createElement("div", {
    ref: x,
    className: Fe
  }, A.default.createElement("div", {
    "data-js-context-icon": true,
    className: Te,
    ref: L,
    onMouseDown: e => {
      e.stopPropagation();
    },
    tabIndex: D,
    onKeyDown: e => {
      if ((0, f.default)(e)) {
        ue(e);
      }
    },
    "aria-label": I,
    role: R,
    onClick: ue
  }, A.default.createElement(u.DownContextIcon, null)), Ne);
}
const D = (0, A.forwardRef)(k);
D.displayName = "WrappedMenu";
var I = D;
exports.default = I;