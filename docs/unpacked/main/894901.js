var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    mediaStage: t,
    isFailed: n,
    mediaDataFileSize: a,
    shouldPlay: i,
    onClick: u
  } = e;
  switch (t) {
    case o.MEDIA_DATA_STAGE.INIT:
    case o.MEDIA_DATA_STAGE.EXISTS:
      return null;
    case o.MEDIA_DATA_STAGE.RESOLVED:
      if (i) {
        return l.default.createElement(r.GifIcon, {
          onClick: u
        });
      } else {
        return null;
      }
    case o.MEDIA_DATA_STAGE.FETCHING:
    case o.MEDIA_DATA_STAGE.UPLOADING:
    case o.MEDIA_DATA_STAGE.REUPLOADING:
    case o.MEDIA_DATA_STAGE.DECRYPTING:
      return l.default.createElement(r.Pending, {
        cancelable: true
      });
    case o.MEDIA_DATA_STAGE.NEED_POKE:
      return l.default.createElement(r.Download, {
        filesize: a
      });
    case o.MEDIA_DATA_STAGE.NEED_UPLOAD:
    case o.MEDIA_DATA_STAGE.REMOTE_NEED_UPLOAD:
      return l.default.createElement(r.Upload, {
        filesize: a
      });
    case o.MEDIA_DATA_STAGE.SENDING:
      if (n) {
        return null;
      } else {
        return l.default.createElement(r.Pending, {
          cancelable: true
        });
      }
    default:
      return l.default.createElement(r.Pending, null);
  }
};
var r = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = i(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var a = {};
  var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e) {
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
      if (l && (l.get || l.set)) {
        Object.defineProperty(a, o, l);
      } else {
        a[o] = e[o];
      }
    }
  }
  a.default = e;
  if (n) {
    n.set(e, a);
  }
  return a;
}(require("./870338.js"));
var o = require("../app/172259.js");
var l = a(require("../vendor/667294.js"));
function i(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (i = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}