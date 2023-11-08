Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MediaEntrySpec = exports.MediaEntry$DownloadableThumbnailSpec = undefined;
var a = require("../app/751206.js");
const r = {};
exports.MediaEntrySpec = r;
const o = {};
exports.MediaEntry$DownloadableThumbnailSpec = o;
r.internalSpec = {
  fileSha256: [1, a.TYPES.BYTES],
  mediaKey: [2, a.TYPES.BYTES],
  fileEncSha256: [3, a.TYPES.BYTES],
  directPath: [4, a.TYPES.STRING],
  mediaKeyTimestamp: [5, a.TYPES.INT64],
  serverMediaType: [6, a.TYPES.STRING],
  uploadToken: [7, a.TYPES.BYTES],
  validatedTimestamp: [8, a.TYPES.BYTES],
  sidecar: [9, a.TYPES.BYTES],
  objectId: [10, a.TYPES.STRING],
  fbid: [11, a.TYPES.STRING],
  downloadableThumbnail: [12, a.TYPES.MESSAGE, o],
  handle: [13, a.TYPES.STRING],
  filename: [14, a.TYPES.STRING]
};
o.internalSpec = {
  fileSha256: [1, a.TYPES.BYTES],
  fileEncSha256: [2, a.TYPES.BYTES],
  directPath: [3, a.TYPES.STRING],
  mediaKey: [4, a.TYPES.BYTES],
  mediaKeyTimestamp: [5, a.TYPES.INT64]
};