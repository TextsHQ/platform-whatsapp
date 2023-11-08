var a = require("../app/530066.js").default;
var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePlaybackSendViewCount = function (e, t) {
  const n = (0, h.default)();
  const [a, r] = (0, p.useMsgValues)(e, [u.getViewed, u.getIsNewsletterMsg]);
  const {
    duration: l
  } = (0, f.useModelValues)(t.mediaData, ["duration"]);
  const i = Math.min((0, o.getABPropConfigValue)("channel_playable_message_views_duration_milliseconds"), parseInt(l, 10) * 1000);
  const d = (0, c.useCallback)(t => {
    if (!a && t * 1000 >= i) {
      (0, s.sendViewReceipt)({
        id: e,
        signal: n
      });
    }
  }, [e, n, i, a]);
  if (r) {
    return d;
  } else {
    return g;
  }
};
exports.useSendViewCount = function (e, t) {
  const {
    displayType: n
  } = t;
  const [r, E, v] = (0, p.useMsgValues)(e, [u.getViewed, u.getIsNewsletterMsg, u.getCaption]);
  const _ = (0, f.useOptionalModelValues)(t == null ? undefined : t.mediaData, ["mediaStage", "type", "isGif"]);
  const {
    mediaStage: y,
    type: C,
    isGif: b
  } = _ != null ? _ : {};
  const M = Boolean(t == null ? undefined : t.isIntersecting);
  const [S, {
    isIntersecting: T
  }] = (0, d.default)({
    root: null,
    threshold: 0.99
  });
  const w = (0, h.default)();
  const [A, P] = (0, m.useTimeout)(() => {
    (0, s.sendViewReceipt)({
      id: e,
      signal: new a().signal
    });
  }, (0, o.getABPropConfigValue)("channel_views_duration_milliseconds"));
  (0, c.useEffect)(() => {
    if (E && n === l.DISPLAY_TYPE.NEWSLETTER) {
      if (!function (e) {
        let {
          isIntersecting: t,
          viewed: n,
          mediaStage: a,
          mediaType: r,
          caption: o,
          isGif: l
        } = e;
        if (!t || n) {
          return false;
        }
        if (r == null) {
          return true;
        }
        if (o != null) {
          return true;
        }
        if (r === i.OUTWARD_TYPES.IMAGE || r === i.OUTWARD_TYPES.STICKER || l === true) {
          return a === i.MEDIA_DATA_STAGE.RESOLVED;
        }
        return false;
      }({
        isIntersecting: T || M,
        viewed: r,
        caption: v,
        mediaStage: y,
        mediaType: C,
        isGif: b
      })) {
        P();
      } else {
        A();
      }
    }
  }, [T, M, A, P, r, v, y, b, C, E, n]);
  (0, c.useEffect)(() => {
    if (w.aborted) {
      P();
    }
  }, [w.aborted, P]);
  if (E && (t == null ? undefined : t.isIntersecting) == null && n === l.DISPLAY_TYPE.NEWSLETTER) {
    return S;
  } else {
    return g;
  }
};
var o = require("../app/287461.js");
var l = require("../app/356097.js");
var i = require("../app/172259.js");
var u = require("../app/787742.js");
var s = require("./300550.js");
var c = require("../vendor/667294.js");
var d = r(require("./105170.js"));
var f = require("../app/655241.js");
var p = require("./871210.js");
var m = require("../app/441673.js");
var h = r(require("../app/895851.js"));
function g() {}