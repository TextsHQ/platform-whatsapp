var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    msg: t,
    isGroupedSticker: n = false
  } = e;
  const [a] = (0, f.useMsgValues)(e.msg.id, [i.getIsNewMsg]);
  const p = (0, d.useMsgDownloadMedia)(t);
  const m = c.default.createElement(l.default, {
    mediaData: e.mediaData,
    msg: t
  }, c.default.createElement(s.default, {
    ref: e.forwardRef,
    mediaData: e.mediaData,
    theme: "conversation",
    isNewMsg: a,
    downloadMedia: p,
    animateOnView: e.animateOnView,
    onClick: n => {
      n.stopPropagation();
      r.Cmd.mediaViewerModal({
        msg: (0, u.unproxy)(t.unsafe()),
        getZoomNode: () => {
          var t;
          var n;
          if ((t = e.forwardRef) === null || t === undefined || (n = t.current) === null || n === undefined) {
            return undefined;
          } else {
            return n.getImgNode();
          }
        }
      });
    }
  }));
  return c.default.createElement(o.default, {
    displayAuthor: e.displayAuthor,
    mediaData: e.mediaData,
    msg: t,
    quotedMsg: e.quotedMsg,
    position: e.position,
    displayType: e.displayType,
    onDetailsPaneClosed: e.onDetailsPaneClosed,
    msgContent: m,
    ref: e.stickerLikeBubbleContainerRef,
    displayCtwaContext: true,
    isGroupedSticker: n
  });
};
var r = require("../app/780549.js");
var o = a(require("./83152.js"));
var l = a(require("./990587.js"));
var i = require("../app/787742.js");
var u = require("../app/163139.js");
var s = a(require("./799451.js"));
var c = a(require("../vendor/667294.js"));
var d = require("./476845.js");
var f = require("./871210.js");