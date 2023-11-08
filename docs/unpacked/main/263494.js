var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AudioBubble = function (e) {
  const {
    msg: t
  } = e;
  const [n, a, b, M, S] = (0, C.useMsgValues)(t.id, [p.getId, p.getAck, p.getIsSentByMe, s.getAsPttLike, p.getHasOriginatedFromNewsletter]);
  const T = (0, s.getChat)(t.unsafe());
  const w = b && !S;
  const A = c.default.isRTL() ? !w : w;
  const P = (0, l.classnamesConvertMeToStylexPlease)({
    [h.default.bubbleRightAvatar]: !A,
    [h.default.bubbleLeftAvatar]: A,
    [h.default.hasAuthor]: e.author,
    [h.default.elevatedPushNames]: (0, u.elevatedPushNamesEnabled)(T),
    [h.default.hasQuote]: e.quotedMsg,
    [h.default.isGallery]: e.displayType === i.DISPLAY_TYPE.STARRED_MSGS || e.displayType === i.DISPLAY_TYPE.GALLERY,
    [h.default.isForwarded]: (0, m.showForwarded)(t),
    [h.default.bubbleAnnouncement]: (0, i.isWideDisplay)(e.displayType),
    [h.default.hasAuthorAnnouncement]: e.author != null && (0, i.isWideDisplay)(e.displayType),
    [h.default.bubble]: true
  });
  const O = e.status ? _.default.createElement("div", {
    className: h.default.status
  }, e.status) : null;
  const k = (0, l.classnamesConvertMeToStylexPlease)({
    [h.default.elevatedPushNames]: (0, u.elevatedPushNamesEnabled)(T),
    [h.default.authorAnnouncement]: (0, i.isWideDisplay)(e.displayType),
    [h.default.author]: true
  });
  const D = e.author != null ? _.default.createElement("div", {
    className: k
  }, e.author) : null;
  const I = (0, m.showForwarded)(t) ? _.default.createElement(d.default, {
    msg: t.unsafe(),
    className: h.default.forwardedIndicator
  }) : null;
  const R = e.quotedMsg ? _.default.createElement("div", {
    className: h.default.quote
  }, e.quotedMsg) : null;
  const {
    playbackRate: N,
    playbackControlMessageId: x
  } = (0, y.useModelValues)(E.PttPrefs, ["playbackRate", "playbackControlMessageId"]);
  const L = v.ServerProps.pttPlaybackSpeedEnabled && M != null;
  let j;
  let B = false;
  if (L) {
    B = x === n.toString();
    const e = (0, l.classnamesConvertMeToStylexPlease)({
      [h.default.playbackRateButtonContainerVisible]: B,
      [h.default.playbackRateButtonContainer]: true
    });
    j = _.default.createElement("div", {
      className: e
    }, _.default.createElement(g.PlaybackRateButton, {
      playbackRate: N,
      onClick: () => {
        E.PttPrefs.advancePlaybackRateFor(n);
      },
      isSentByMe: b,
      played: a === r.ACK.PLAYED,
      playbackRateButtonIsVisible: B
    }));
  }
  const F = (0, l.classnamesConvertMeToStylexPlease)({
    [h.default.avatarVisible]: !B,
    [h.default.avatar]: true
  });
  const G = (0, l.classnamesConvertMeToStylexPlease)({
    [h.default.elevatedPushNames]: (0, u.elevatedPushNamesEnabled)(T),
    [h.default.body]: true
  });
  return _.default.createElement("div", {
    className: P
  }, D, I, R, _.default.createElement(o.default, {
    msg: t.unsafe(),
    wrapperClass: h.default.ctwaContext
  }), _.default.createElement("div", {
    className: G
  }, _.default.createElement("div", {
    className: h.default.player
  }, e.player), _.default.createElement("div", {
    className: h.default.avatarContainer
  }, j, _.default.createElement("div", {
    className: F
  }, e.avatar, O))), _.default.createElement("div", {
    className: h.default.meta
  }, _.default.createElement(f.Meta, {
    msg: t
  })));
};
var r = require("../app/402994.js");
var o = a(require("./362842.js"));
var l = require("../app/396574.js");
var i = require("../app/356097.js");
var u = require("../app/235630.js");
var s = require("../app/163755.js");
var c = a(require("../app/932325.js"));
var d = a(require("./428759.js"));
var f = require("./789955.js");
var p = require("../app/787742.js");
var m = require("./192071.js");
var h = a(require("./623505.js"));
var g = require("./451565.js");
var E = require("./491320.js");
var v = require("../app/937001.js");
var _ = a(require("../vendor/667294.js"));
var y = require("../app/655241.js");
var C = require("./871210.js");