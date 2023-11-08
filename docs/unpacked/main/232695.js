var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canUseCustomCropping = g;
exports.getBubbleDimension = function (e, t, n, a, i, p, m, E) {
  if (n) {
    return s;
  }
  const v = m && a < 1 ? 1 : a;
  const _ = function (e, t, n, a) {
    let l;
    l = g(e, t, n) ? n === o.DISPLAY_TYPE.ANNOUNCEMENT || n === o.DISPLAY_TYPE.NEWSLETTER || n === o.DISPLAY_TYPE.CHANNEL_ALERTS_MSGS ? f : d : c;
    return (0, r.default)((0, r.default)({}, l), {}, {
      width: a != null && a <= l.width ? a : l.width
    });
  }(e, i, p, E);
  let y;
  let C;
  if (p === o.DISPLAY_TYPE.NEWSLETTER_PREVIEW) {
    return {
      bubbleWidth: E != null ? E : 56,
      bubbleHeight: E != null ? E : 56
    };
  }
  if (i === u.DisplayTheme.Album) {
    const e = p === o.DISPLAY_TYPE.ANNOUNCEMENT || p === o.DISPLAY_TYPE.NEWSLETTER ? l.ALBUM_ANNOUNCEMENT_MAX_HEIGHT : l.ALBUM_MAX_HEIGHT;
    y = e - l.ALBUM_PADDING;
    C = e;
  } else {
    y = v < 1 ? _.portraitWidth : _.width;
    C = function (e, t, n, a, r, l) {
      const i = 1.91;
      let u;
      if (a && t <= i) {
        u = h(i, e, n);
      }
      u = h(t, e, n);
      if (r === o.DISPLAY_TYPE.NEWSLETTER || r === o.DISPLAY_TYPE.ANNOUNCEMENT) {
        if (u > l) {
          return l;
        } else {
          return u;
        }
      }
      return u;
    }(_, v, e, t, p, y);
  }
  return {
    bubbleWidth: y,
    bubbleHeight: C
  };
};
exports.getImgStyle = function (e, t, n, a) {
  if (e == null || e === 0 || t == null || t === 0 || n == null || n === 0 || a == null || a === 0) {
    return {
      width: "100%",
      height: "100%"
    };
  }
  if (e / t > n / a) {
    return {
      height: "100%"
    };
  }
  return {
    width: "100%"
  };
};
var r = a(require("../vendor/81109.js"));
var o = require("../app/356097.js");
var l = require("./663940.js");
var i = require("../app/373070.js");
var u = require("./117182.js");
const s = {
  bubbleWidth: 330,
  bubbleHeight: 240
};
const c = {
  width: 330,
  portraitWidth: 330,
  minAspectRatio: 1,
  maxAspectRatio: 2.4
};
const d = (0, r.default)((0, r.default)({}, c), {}, {
  portraitWidth: 240,
  minAspectRatio: 0.71,
  maxAspectRatio: 4
});
const f = (0, r.default)((0, r.default)({}, d), {}, {
  width: 480,
  portraitWidth: 480
});
const p = new Set([i.MSG_TYPE.IMAGE, i.MSG_TYPE.VIDEO]);
const m = new Set([o.DISPLAY_TYPE.CONVERSATION, o.DISPLAY_TYPE.MSG_INFO, o.DISPLAY_TYPE.STARRED_MSGS, o.DISPLAY_TYPE.ANNOUNCEMENT, o.DISPLAY_TYPE.NEWSLETTER, o.DISPLAY_TYPE.CHANNEL_ALERTS_MSGS]);
function h(e, t, n) {
  if (e == null) {
    if (n === i.MSG_TYPE.VIDEO) {
      return 240;
    } else {
      return 330;
    }
  }
  let a;
  a = e < t.minAspectRatio ? t.portraitWidth / t.minAspectRatio : e < 1 ? t.portraitWidth / e : e <= t.maxAspectRatio ? t.width / e : t.width / t.maxAspectRatio;
  return a;
}
function g(e, t, n) {
  return p.has(e) && m.has(n) && t !== u.DisplayTheme.Album || e === i.MSG_TYPE.PRODUCT && n === o.DISPLAY_TYPE.ANNOUNCEMENT;
}