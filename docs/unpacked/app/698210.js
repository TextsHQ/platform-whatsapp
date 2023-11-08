var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FILETYPE = undefined;
exports.blobToArrayBuffer = c;
exports.blobToText = function () {
  return f.apply(this, arguments);
};
exports.createFile = function (e, t, n) {
  const r = new Blob(e, n || {});
  r.name = t;
  return r;
};
exports.getAudioDuration = function (e) {
  let t;
  let n;
  return new Promise((r, i) => {
    t = document.createElement("audio");
    t.addEventListener("loadeddata", r);
    t.addEventListener("error", () => {
      i((0, s.default)("getAudioDuration: error loading audio"));
    });
    t.src = n = URL.createObjectURL(e);
  }).then(() => ~~t.seekable.end(0)).finally(() => {
    if (n) {
      URL.revokeObjectURL(n);
    }
  });
};
exports.getFileExtension = p;
exports.getMimeTypeForFilepath = function (e) {
  const t = p(e);
  const n = (0, a.isAllowedDocumentMimetype)(a.EXT_TO_MIME && t && a.EXT_TO_MIME[t], e, false);
  if (n) {
    return n;
  }
};
exports.removeTrailingDots = d;
exports.typeFromMimetype = function (e) {
  const t = e.split("/")[0];
  switch (t) {
    case l.IMAGE:
    case l.VIDEO:
    case l.AUDIO:
      return t;
    default:
      return l.DOCUMENT;
  }
};
exports.validateBlob = function (e) {
  return c(e.webkitSlice ? e.webkitSlice(0, 1) : e.slice(0, 1)).then(e => e.byteLength === 1).catch(() => false);
};
var i = r(require("../vendor/348926.js"));
var a = require("./937484.js");
var o = require("./288057.js");
var s = r(require("./556869.js"));
const l = Object.freeze({
  IMAGE: "image",
  VIDEO: "video",
  AUDIO: "audio",
  DOCUMENT: "document",
  STICKER: "sticker"
});
exports.FILETYPE = l;
const u = e => {
  var t;
  if ((t = e == null ? undefined : e.message) !== null && t !== undefined) {
    return t;
  } else {
    return "";
  }
};
function c(e) {
  let t;
  return new Promise((n, r) => {
    t = new FileReader();
    t.onload = n;
    t.onerror = () => {
      var e;
      r(((e = t.error) === null || e === undefined ? undefined : e.name) === "NotReadableError" ? new o.FileNotReadableError(`blobToArrayBuffer error: ${u(t.error)}`) : (0, s.default)(`blobToArrayBuffer error: ${u(t.error)}`));
    };
    t.onabort = () => {
      r((0, s.default)(`blobToArrayBuffer abort: ${u(t.error)}`));
    };
    t.readAsArrayBuffer(e);
  }).then(() => t.result);
}
function d(e) {
  return e.replace(/\.+$/, "");
}
function p(e) {
  const t = d(e.trimRight()).split(".");
  if (t.length > 1) {
    return t[t.length - 1].toLowerCase();
  } else {
    return null;
  }
}
function f() {
  return (f = (0, i.default)(function* (e) {
    if (typeof e.text == "function") {
      return e.text();
    }
    const t = new FileReader();
    yield new Promise((n, r) => {
      t.onload = n;
      t.onerror = e => {
        r((0, s.default)(`blobToText error: ${String(e)}`));
      };
      t.onabort = e => {
        r((0, s.default)(`blobToText abort: ${String(e)}`));
      };
      t.readAsText(e);
    });
    if (t.result instanceof ArrayBuffer) {
      throw new TypeError("blobToText error: Invalid result type: ArrayBuffer");
    }
    if (t.result == null) {
      throw new TypeError("blobToText: Invalid result type: null");
    }
    return t.result;
  })).apply(this, arguments);
}