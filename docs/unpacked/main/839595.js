var a = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.blobToArrayBuffer = function (e) {
  if ("arrayBuffer" in e && typeof e.arrayBuffer == "function") {
    return e.arrayBuffer();
  }
  return new Promise((t, n) => {
    const a = new FileReader();
    a.onload = function () {
      const {
        result: e
      } = a;
      if (e instanceof ArrayBuffer) {
        t(e);
      } else {
        n((0, i.default)("blobToArrayBuffer got error becaues result is not ArrayBuffer"));
      }
    };
    a.onerror = function () {
      var e;
      const t = ((e = a.error) === null || e === undefined ? undefined : e.name) || "unknown";
      n((0, i.default)(`blobToArrayBuffer got error got error ${t}`));
    };
    a.readAsArrayBuffer(e);
  });
};
exports.castToMediaKey = E;
exports.castToUploadToken = v;
exports.convertMediaDownloadableThumbnailToDownloadableThumbnail = _;
exports.createMediaKey = g;
exports.createUploadToken = function () {
  return g();
};
exports.decodeMediaEntryData = function (e) {
  const t = (0, p.decodeProtobuf)(c.MediaEntrySpec, e);
  const {
    serverMediaType: n,
    mediaKey: a,
    mediaKeyTimestamp: l,
    uploadToken: i,
    downloadableThumbnail: s
  } = t;
  const m = (0, r.default)(t, h);
  return (0, o.default)((0, o.default)({}, m), {}, {
    serverMediaType: n == null ? null : (0, d.castToServerMediaType)(n),
    mediaKey: a && a,
    mediaKeyTimestamp: l == null ? null : (0, f.castToUnixTime)((0, u.numberOrThrowIfTooLarge)(l)),
    uploadToken: i && i,
    downloadableThumbnail: s && _(s)
  });
};
exports.encodeMediaEntryDownloadableThumbnailWithUpdatedPath = function (e, t) {
  return (0, m.encodeProtobuf)(c.MediaEntrySpec, (0, o.default)((0, o.default)({}, e), {}, {
    downloadableThumbnail: (0, o.default)((0, o.default)({}, e.downloadableThumbnail), {}, {
      directPath: t
    })
  })).readByteArray();
};
exports.encodeMediaEntryForDownload = function (e) {
  return (0, m.encodeProtobuf)(c.MediaEntrySpec, e).readByteArray();
};
exports.encodeMediaEntryForUpload = function (e) {
  return (0, m.encodeProtobuf)(c.MediaEntrySpec, e).readByteArray();
};
exports.encodeMediaEntryWithUpdatedFbid = function (e, t) {
  const n = (0, o.default)((0, o.default)({}, e), {}, {
    fbid: t
  });
  return (0, m.encodeProtobuf)(c.MediaEntrySpec, n).readByteArray();
};
exports.encodeMediaEntryWithUpdatedObjectId = function (e, t) {
  const n = (0, o.default)((0, o.default)({}, e), {}, {
    objectId: t
  });
  return (0, m.encodeProtobuf)(c.MediaEntrySpec, n).readByteArray();
};
exports.encodeMediaEntryWithUpdatedPath = function (e, t) {
  return (0, m.encodeProtobuf)(c.MediaEntrySpec, (0, o.default)((0, o.default)({}, e), {}, {
    directPath: t
  })).readByteArray();
};
exports.getMimeTypeFromServerMediaType = function (e) {
  let t = "image/jpeg";
  switch (e) {
    case "image":
      t = "image/jpeg";
      break;
    case "ptt":
      t = "audio/wav";
      break;
    case "video":
      t = "video/mp4";
      break;
    case "gif":
      t = "image/gif";
      break;
    case "sticker":
      t = "image/webp";
      break;
    case "preview":
      t = "image/jpeg";
      break;
    case "document":
      t = "application/pdf";
      break;
    case "xma-image":
      t = "image/jpeg";
      break;
    default:
      throw (0, i.default)(`Unsupported server media type: ${e}`);
  }
  return t;
};
exports.mediaEntryDataToRawData = function (e, t) {
  const {
    fileSha256: n,
    mediaKey: a,
    fileEncSha256: r,
    directPath: o,
    mediaKeyTimestamp: l,
    sidecar: i,
    objectId: d,
    fbid: m,
    serverMediaType: h,
    downloadableThumbnail: g,
    filename: E
  } = (0, p.decodeProtobuf)(c.MediaEntrySpec, t);
  return {
    fileSha256: n,
    mediaKey: a,
    fileEncSha256: r,
    directPath: o,
    mediaKeyTimestamp: l == null ? null : (0, f.castToUnixTime)((0, u.numberOrThrowIfTooLarge)(l)),
    sidecar: i && (0, s.castToStreamingSidecar)(i),
    objectId: d,
    fbid: m,
    downloadableThumbnail: g && _(g),
    serverMediaType: h,
    filename: E
  };
};
exports.rawDataToMediaEntry = function (e, t, n, a, r, o, l, i, u, s) {
  return (0, m.encodeProtobuf)(c.MediaEntrySpec, {
    fileSha256: e,
    fileEncSha256: t,
    mediaKey: n,
    directPath: a,
    mediaKeyTimestamp: r,
    serverMediaType: o,
    objectId: l,
    fbid: i,
    downloadableThumbnail: u,
    filename: s
  }).readByteArray();
};
exports.stringToBackupEntFbid = function (e) {
  return e;
};
exports.stringToDeliveryObjectId = function (e) {
  return e;
};
exports.stringToPlaintextHash = function (e) {
  return e;
};
exports.toHashedPlaintextHash = function (e) {
  return e;
};
exports.toPlaintextHash = function (e) {
  return (0, l.encodeB64UrlSafe)(e);
};
var r = a(require("../vendor/222666.js"));
var o = a(require("../vendor/73982.js"));
var l = require("../app/417405.js");
var i = a(require("../app/415227.js"));
var u = require("../app/229079.js");
var s = require("./74793.js");
var c = require("./173496.js");
var d = require("../app/760518.js");
var f = require("../app/632157.js");
var p = require("../app/394629.js");
var m = require("../app/385914.js");
const h = ["serverMediaType", "mediaKey", "mediaKeyTimestamp", "uploadToken", "downloadableThumbnail"];
function g() {
  const e = new Uint8Array(32);
  self.crypto.getRandomValues(e);
  return e.buffer;
}
function E(e) {
  return e;
}
function v(e) {
  return e;
}
function _(e) {
  if (e == null) {
    return null;
  } else {
    return {
      directPath: e.directPath,
      fileEncSha256: e.fileEncSha256,
      fileSha256: e.fileSha256,
      mediaKey: e.mediaKey && e.mediaKey,
      mediaKeyTimestamp: e.mediaKeyTimestamp == null ? null : (0, f.castToUnixTime)((0, u.numberOrThrowIfTooLarge)(e.mediaKeyTimestamp))
    };
  }
}