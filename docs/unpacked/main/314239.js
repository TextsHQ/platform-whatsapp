var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    msg: t
  } = e;
  if (t == null) {
    return null;
  }
  const n = t.safe();
  let a = null;
  const {
    thumbnailHQ: f = null,
    thumbnail: m = null
  } = n;
  if (n.type === i.MSG_TYPE.IMAGE) {
    a = c.default.createElement(l.ImageMessage, {
      msg: n,
      displayType: r.DISPLAY_TYPE.NEWSLETTER_PREVIEW,
      mediaData: n.mediaData,
      maxWidth: 56,
      displayAuthor: false,
      hideMeta: true
    });
  } else if (n.type === i.MSG_TYPE.VIDEO && n.isGif === true) {
    a = c.default.createElement(o.WrappedGif, {
      displayAuthor: false,
      displayType: r.DISPLAY_TYPE.NEWSLETTER_PREVIEW,
      maxWidth: 56,
      mediaData: n.mediaData,
      msg: n,
      hideMeta: true
    });
  } else if (n.type === i.MSG_TYPE.VIDEO) {
    a = c.default.createElement(s.default, {
      displayType: r.DISPLAY_TYPE.NEWSLETTER_PREVIEW,
      msg: n,
      mediaData: n.mediaData,
      maxWidth: 56
    });
  } else if (f != null && f !== "") {
    var h;
    a = c.default.createElement(p, {
      alt: (h = n.body) !== null && h !== undefined ? h : "",
      thumbnail: f
    });
  } else if (m != null && m !== "") {
    var g;
    a = c.default.createElement(p, {
      alt: (g = n.body) !== null && g !== undefined ? g : "",
      thumbnail: m
    });
  }
  if (a != null) {
    return c.default.createElement("div", {
      className: (0, d.default)(u.uiMargin.start15)
    }, a);
  } else {
    return null;
  }
};
var r = require("../app/356097.js");
var o = require("./597245.js");
var l = require("./654386.js");
var i = require("../app/373070.js");
var u = require("../app/676345.js");
var s = a(require("./955880.js"));
var c = a(require("../vendor/667294.js"));
var d = a(require("../app/156720.js"));
const f = {
  width: "lr504ev2",
  height: "q1n4p668",
  borderTopStartRadius: "l147y7tb",
  borderTopEndRadius: "mjscftrx",
  borderBottomEndRadius: "fqwk616h",
  borderBottomStartRadius: "pkud3j3x",
  objectFit: "jpthtbts"
};
function p(e) {
  let {
    alt: t,
    thumbnail: n
  } = e;
  return c.default.createElement("div", {
    className: (0, d.default)(u.uiPadding.all3)
  }, c.default.createElement("img", {
    alt: t,
    className: (0, d.default)(f),
    src: `data:image/jpeg;base64,${n}`
  }));
}