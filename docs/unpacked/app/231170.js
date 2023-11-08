var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fileToPdf = function (e) {
  const t = URL.createObjectURL(e);
  return (0, s.promiseLoop)(function (e, t, r) {
    const i = (0, o.delayMs)((0, a.expBackoff)(r, 120000, 0, 0));
    return require.e(2974).then(require.t.bind(require, 299299, 23)).then(t => {
      t.GlobalWorkerOptions.workerSrc = (0, f.getWorkerSrc)();
      e({
        GlobalWorkerOptions: t.GlobalWorkerOptions,
        getDocument: t.getDocument
      });
    }).catch(() => i);
  }).then(e => e.getDocument(t).promise);
};
exports.pdfToImg = function (e, t) {
  const n = document.createElement("canvas");
  return e.getPage(t).then(e => {
    const t = e.getViewport({
      scale: 1
    });
    const r = n.getContext("2d");
    n.height = t.height;
    n.width = t.width;
    return e.render({
      canvasContext: r,
      viewport: t
    }).promise;
  }).then(() => (0, l.promiseProps)({
    blob: (0, u.canvasToBlob)(n),
    thumbnail: d.rotateAndResize(n, c.default.DOC_THUMB_MAX_EDGE, d.DATA_URL | d.CANVAS | d.BLOB),
    microThumbnail: (0, u.generateMicroThumb)(n, 1300, {
      mimetype: "image/jpeg",
      maxAttempts: 10
    })
  })).then(e => e).then(function () {
    var t = (0, i.default)(function* (t) {
      let {
        blob: n,
        thumbnail: r,
        microThumbnail: i
      } = t;
      return {
        url: URL.createObjectURL(n),
        thumbUrl: r.images.dataUrl,
        width: r.images.canvas.width,
        height: r.images.canvas.height,
        fullPreviewData: yield p.default.createFromData(r.images.blob, "image/jpeg"),
        fullPreviewSize: {
          width: r.images.canvas.width,
          height: r.images.canvas.height
        },
        pdfPages: e.numPages,
        microThumbnail: i
      };
    });
    return function () {
      return t.apply(this, arguments);
    };
  }());
};
exports.releasePdf = function (e) {
  return e.destroy();
};
var i = r(require("../vendor/348926.js"));
var a = require("./250655.js");
var o = require("./8304.js");
var s = require("./904086.js");
var l = require("./423660.js");
var u = require("./588750.js");
var c = r(require("./846870.js"));
var d = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = _(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var r = {};
  var i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e) {
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
      if (o && (o.get || o.set)) {
        Object.defineProperty(r, a, o);
      } else {
        r[a] = e[a];
      }
    }
  }
  r.default = e;
  if (n) {
    n.set(e, r);
  }
  return r;
}(require("./428363.js"));
var p = r(require("./756680.js"));
var f = require("./141275.js");
function _(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (_ = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}