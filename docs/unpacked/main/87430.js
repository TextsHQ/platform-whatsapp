var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MediaMsgPreview = function (e) {
  const t = (0, c.useModelValues)(e.mediaData, ["filehash", "fullPreviewData", "mediaStage", "preview", "type"]);
  if (!p(t.type)) {
    return u.default.createElement(h, {
      mediaData: t
    });
  }
  return u.default.createElement(l.default, {
    key: t.filehash,
    mediaData: t,
    placeholderRenderer: () => u.default.createElement(h, {
      mediaData: t
    }),
    renderProgressively: true
  }, e => u.default.createElement(m, {
    url: e,
    type: t.type
  }));
};
exports.isMediaTypeWithImage = p;
var r = a(require("../app/756680.js"));
var o = require("../app/172259.js");
var l = a(require("./674465.js"));
var i = require("../app/373070.js");
var u = a(require("../vendor/667294.js"));
var s = a(require("../app/156720.js"));
var c = require("../app/655241.js");
const d = {
  preview: {
    position: "lhggkp7q",
    width: "ln8gz9je",
    height: "ppled2lx",
    backgroundPosition: "t3g6t33p",
    backgroundSize: "qnwaluaf"
  },
  ptv: {
    borderTopStartRadius: "ig3kka7n",
    borderTopEndRadius: "a57u14ck",
    borderBottomEndRadius: "a4bg1r4i",
    borderBottomStartRadius: "h1a3x9ys"
  }
};
const f = new Set([i.MSG_TYPE.IMAGE, i.MSG_TYPE.PRODUCT]);
function p(e) {
  return f.has(e);
}
function m(e) {
  let {
    url: t,
    type: n
  } = e;
  return u.default.createElement("div", {
    className: (0, s.default)(d.preview, n === o.OUTWARD_TYPES.PTV && d.ptv),
    style: {
      backgroundImage: `url(${t})`
    }
  });
}
function h(e) {
  var t;
  let {
    mediaData: n
  } = e;
  return [[n.preview instanceof r.default ? n.preview.url() : null, "preview"], [(t = n.fullPreviewData) === null || t === undefined ? undefined : t.url(), "fullPreview"]].map(e => {
    let [t, a] = e;
    if (t != null) {
      return u.default.createElement(m, {
        url: t,
        key: a,
        type: n.type
      });
    } else {
      return null;
    }
  }).filter(Boolean);
}