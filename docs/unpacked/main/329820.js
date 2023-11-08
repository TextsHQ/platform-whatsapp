var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    msg: t,
    displayAuthor: n,
    displayType: a,
    quotedMsg: g,
    trusted: E
  } = e;
  const [v, _, y, C, b, M, S, T, w, A, P, O, k, D, I, R, N] = (0, p.useMsgValues)(e.msg.id, [c.getAck, c.getCaption, l.getDir, c.getId, c.getIsFromTemplate, c.getIsFailed, c.getIsSentByMe, l.getRtl, l.getSenderObj, c.getIsGroupMsg, c.getBody, c.getSupportsMessageFooter, c.getFooter, l.getText, c.getFilename, c.getIsCaptionByUser, c.getInitialPageSize]);
  const [x, L, j, B, F] = (0, p.useMsgValues)(e.msg.id, [c.getSubtype, c.getType, c.getIsVcardOverMmsDocument, l.getMediaData, c.getIsDynamicReplyButtonsMsg]);
  const G = R ? d.default.createElement("div", {
    className: (0, f.default)(m.caption, (0, o.isWideDisplay)(a) && m.captionAnnouncement)
  }, d.default.createElement(u.default, {
    msg: t.unsafe(),
    trusted: E,
    spacer: !k,
    testId: "document-caption"
  })) : null;
  const U = d.default.createElement(s.default, {
    displayType: a,
    msg: t,
    quotedMsg: g,
    showAuthor: n,
    hideCaption: G != null || !(b || F),
    trusted: E
  }, d.default.createElement(r.default, {
    msg: t.unsafe(),
    wrapperClass: (0, f.default)(m.ctwaContext)
  }), d.default.createElement(i.default, {
    msg: t,
    displayType: a
  }), G);
  const W = Boolean((b || F) && _);
  return d.default.createElement("div", {
    className: (0, f.default)(m.bubble, !G && m.bubbleExtraPadding, W && m.templateBubble, h.get(a))
  }, U);
};
var r = a(require("./362842.js"));
var o = require("../app/356097.js");
var l = require("../app/163755.js");
var i = a(require("./916163.js"));
var u = a(require("./371878.js"));
var s = a(require("./32186.js"));
var c = require("../app/787742.js");
var d = a(require("../vendor/667294.js"));
var f = a(require("../app/156720.js"));
var p = require("./871210.js");
const m = {
  bubble: {
    boxSizing: "cm280p3y",
    width: "m3h9lho3",
    paddingTop: "lna84pfr",
    paddingEnd: "psacz3a6",
    paddingBottom: "f83pkj4x",
    paddingStart: "mmw11n2j"
  },
  isAnnouncement: {
    width: "shnl0xtb"
  },
  bubbleExtraPadding: {
    paddingBottom: "rku33uoa"
  },
  ctwaContext: {
    marginTop: "tt8xd2xn",
    marginEnd: "jnwc1y2a",
    marginBottom: "kzyzudjh",
    marginStart: "svoq16ka"
  },
  isGallery: {
    width: "gofbmt1g",
    "@media (max-width:880px)": {
      end: "ekmn1tbb",
      overflowX: "hys5s3z0",
      overflowY: "ktnphmnq",
      textOverflow: "hpb4froj",
      whiteSpace: "tf9oak2v"
    }
  },
  isPreview: {
    maxWidth: "laorhtua"
  },
  templateBubble: {
    position: "g0rxnol2"
  },
  caption: {
    boxSizing: "cm280p3y",
    maxWidth: "bkoknyjm",
    paddingTop: "n1yiu2zv",
    paddingEnd: "jfqm35v0",
    paddingBottom: "bxcbqipq",
    paddingStart: "mhcwslh8"
  },
  captionAnnouncement: {
    maxWidth: "qw08k5dd"
  }
};
const h = new Map([[o.DISPLAY_TYPE.MSG_INFO, m.isPreview], [o.DISPLAY_TYPE.STARRED_MSGS, m.isGallery], [o.DISPLAY_TYPE.GALLERY, m.isGallery], [o.DISPLAY_TYPE.ANNOUNCEMENT, m.isAnnouncement], [o.DISPLAY_TYPE.NEWSLETTER, m.isAnnouncement]]);