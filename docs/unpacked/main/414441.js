var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PtvState = function (e) {
  let {
    mediaStage: t,
    mediaDataFileSize: n,
    isPlaying: a,
    onDownloadClick: u
  } = e;
  let s = null;
  switch (t) {
    case o.MEDIA_DATA_STAGE.INIT:
      s = i.default.createElement(r.Download, {
        filesize: n,
        onClick: u
      });
      break;
    case o.MEDIA_DATA_STAGE.EXISTS:
    case o.MEDIA_DATA_STAGE.FETCHING:
    case o.MEDIA_DATA_STAGE.UPLOADING:
    case o.MEDIA_DATA_STAGE.REUPLOADING:
    case o.MEDIA_DATA_STAGE.DECRYPTING:
      s = i.default.createElement(r.Pending, null);
      break;
    case o.MEDIA_DATA_STAGE.NEED_POKE:
      s = i.default.createElement(r.Download, {
        filesize: n,
        onClick: u
      });
      break;
    case o.MEDIA_DATA_STAGE.NEED_UPLOAD:
    case o.MEDIA_DATA_STAGE.REMOTE_NEED_UPLOAD:
      s = i.default.createElement(r.Upload, {
        filesize: n
      });
      break;
    case o.MEDIA_DATA_STAGE.RESOLVED:
      s = a ? null : i.default.createElement(r.Play, null);
      break;
    default:
      s = i.default.createElement(r.Pending, null);
  }
  return i.default.createElement(l.default, {
    transitionName: "fade-ease-out"
  }, s);
};
var r = require("./870338.js");
var o = require("../app/172259.js");
var l = a(require("../app/844453.js"));
var i = a(require("../vendor/667294.js"));