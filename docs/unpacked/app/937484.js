var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VIDEO_MIMES = exports.MSCFB_MIME = exports.MSCFB_HEADER = exports.MIMETYPE_DETERMINING_LENGTH = exports.MIMETYPES = exports.IMAGE_MIMES = exports.EXT_TO_MIME = exports.DOC_MIMES = exports.DOCUMENT_MIMETYPES = undefined;
exports.getExtension = function (e) {
  const t = d[e];
  if (!t) {
    return "";
  }
  return "." + (t.ext || e.split("/")[1]).toLowerCase();
};
exports.getMediaMimeType = function (e, t) {
  const n = t.subarray(0, 262);
  const r = (0, l.default)(n);
  if (r) {
    return r.mime;
  }
  if (e === "image") {
    return "image/jpeg";
  }
  throw new s.MediaEncryptionError("unknown mime decrypt error for type:" + e);
};
exports.isAllowedDocumentMimetype = function (e, t) {
  let n = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
  for (const r in g) {
    const i = d[r];
    if (i == null) {
      continue;
    }
    const {
      signatureMimetype: a,
      ext: o
    } = i;
    if ((n ? a : r) === e && o && (t == null ? undefined : t.toLowerCase().endsWith(o.toLowerCase()))) {
      return r;
    }
  }
  if (n) {
    return e;
  }
  if (e != null) {
    return e;
  } else {
    return "application/octet-stream";
  }
};
exports.isMsCompoundFileBinaryFormat = function (e) {
  return (0, a.default)(e, c);
};
exports.isOpus = function (e) {
  if (!e) {
    return false;
  }
  return e.includes("audio/ogg");
};
exports.previewType = function (e) {
  const t = d[e];
  if (t == null) {
    return undefined;
  } else {
    return t.previewType;
  }
};
var i = r(require("../vendor/535937.js"));
var a = r(require("./735821.js"));
var o = r(require("./118702.js"));
var s = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = u(t);
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
}(require("./288057.js"));
var l = r(require("../vendor/397769.js"));
function u(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (u = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
exports.MIMETYPE_DETERMINING_LENGTH = 262;
const c = new Uint8Array([208, 207, 17, 224, 161, 177, 26, 225]);
exports.MSCFB_HEADER = c;
exports.MSCFB_MIME = "application/x-cfb";
const d = {
  "text/plain": {
    ext: "TXT",
    msgType: "document",
    icon: "icon-doc-txt",
    canSend: true
  },
  "text/rtf": {
    ext: "RTF",
    msgType: "document",
    icon: "icon-doc-doc",
    canSend: true,
    signatureMimetype: "application/rtf"
  },
  "text/vcard": {
    ext: "VCF",
    msgType: "vcard"
  },
  "application/zip": {
    ext: "ZIP",
    icon: "icon-doc-generic",
    msgType: "document"
  },
  "application/pdf": {
    ext: "PDF",
    msgType: "document",
    icon: "icon-doc-pdf",
    canSend: true,
    signatureMimetype: "application/pdf",
    previewType: "pdf"
  },
  "application/msword": {
    ext: "DOC",
    msgType: "document",
    icon: "icon-doc-doc",
    canSend: true,
    signatureMimetype: "application/x-msi",
    previewType: "msoffice"
  },
  "application/vnd.ms-excel": {
    ext: "XLS",
    msgType: "document",
    icon: "icon-doc-xls",
    canSend: true,
    signatureMimetype: "application/x-msi",
    previewType: "msoffice"
  },
  "application/vnd.ms-powerpoint": {
    ext: "PPT",
    msgType: "document",
    icon: "icon-doc-ppt",
    canSend: true,
    signatureMimetype: "application/x-msi",
    previewType: "msoffice"
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": {
    ext: "DOCX",
    msgType: "document",
    icon: "icon-doc-doc",
    canSend: true,
    signatureMimetype: "application/zip",
    previewType: "msoffice"
  },
  "application/vnd.openxmlformats-officedocument.presentationml.presentation": {
    ext: "PPTX",
    msgType: "document",
    icon: "icon-doc-ppt",
    canSend: true,
    signatureMimetype: "application/zip",
    previewType: "msoffice"
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": {
    ext: "XLSX",
    msgType: "document",
    icon: "icon-doc-xls",
    canSend: true,
    signatureMimetype: "application/zip",
    previewType: "msoffice"
  },
  "audio/aac": {
    msgType: "audio",
    ext: "AAC"
  },
  "audio/mp4": {
    msgType: "audio"
  },
  "audio/amr": {
    msgType: "audio"
  },
  "audio/mpeg": {
    msgType: "audio"
  },
  "audio/ogg; codecs=opus": {
    msgType: "audio",
    ext: "OGG"
  },
  "audio/wav": {
    msgType: "audio",
    ext: "wav"
  },
  "video/mp4": {
    msgType: "video",
    ext: "MP4"
  },
  "video/3gpp": {
    msgType: "video"
  },
  "image/jpeg": {
    msgType: "image"
  },
  "image/png": {
    msgType: "image"
  }
};
const p = d;
exports.MIMETYPES = p;
const f = (0, i.default)(p, e => (e == null ? undefined : e.msgType) === "document");
exports.DOCUMENT_MIMETYPES = f;
exports.DOC_MIMES = "*";
exports.IMAGE_MIMES = "image/*";
exports.VIDEO_MIMES = "video/mp4,video/3gpp,video/quicktime";
const _ = (0, o.default)();
exports.EXT_TO_MIME = _;
const g = (0, i.default)(d, e => (e == null ? undefined : e.msgType) === "document" && e.canSend === true && e.ext != null);