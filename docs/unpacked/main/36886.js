var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    msg: t,
    mediaData: n
  } = e;
  const {
    mediaStage: a,
    size: f,
    streamable: p
  } = (0, d.useModelValues)(n, ["mediaStage", "size", "streamable"]);
  if (p && n.isStreamable()) {
    return null;
  }
  switch (a) {
    case o.MEDIA_DATA_STAGE.INIT:
    case o.MEDIA_DATA_STAGE.EXISTS:
    case o.MEDIA_DATA_STAGE.RESOLVED:
    case o.MEDIA_DATA_STAGE.ERROR_MISSING:
    case o.MEDIA_DATA_STAGE.NEED_UPLOAD:
    case o.MEDIA_DATA_STAGE.ERROR_TOO_LARGE:
    case o.MEDIA_DATA_STAGE.PROGRESSIVE_READY:
    case o.MEDIA_DATA_STAGE.REMOTE_NEED_UPLOAD:
    case o.MEDIA_DATA_STAGE.ERROR_FILE_NOT_READABLE:
      return null;
    case o.MEDIA_DATA_STAGE.NEED_POKE:
      return c.default.createElement(r.Download, {
        filesize: f,
        onClick: e => function (e, t) {
          e.stopPropagation();
          t.downloadMedia({
            downloadEvenIfExpensive: true,
            rmrReason: s.WEBC_RMR_REASON_CODE.MEDIA_VIEWER,
            isUserInitiated: true
          });
        }(e, t)
      });
    case o.MEDIA_DATA_STAGE.FETCHING:
    case o.MEDIA_DATA_STAGE.PREPARING:
    case o.MEDIA_DATA_STAGE.UPLOADING:
    case o.MEDIA_DATA_STAGE.REUPLOADING:
    case o.MEDIA_DATA_STAGE.REMOTE_UPLOADING:
    case o.MEDIA_DATA_STAGE.DECRYPTING:
    case o.MEDIA_DATA_STAGE.SENDING:
    case o.MEDIA_DATA_STAGE.FINALIZING:
      return c.default.createElement("div", {
        onClick: e => function (e, t) {
          e.stopPropagation();
          t.cancelDownload();
        }(e, t)
      }, c.default.createElement(r.Pending, {
        cancelable: true
      }));
    case o.MEDIA_DATA_STAGE.ERROR_UNSUPPORTED:
      return c.default.createElement(r.Download, {
        filesize: f,
        onClick: e => function (e, t) {
          e.stopPropagation();
          i.ModalManager.open(c.default.createElement(l.default, {
            msg: (0, u.unproxy)(t)
          }));
        }(e, t)
      });
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
  var n = f(t);
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
var l = a(require("./886914.js"));
var i = require("../app/114850.js");
var u = require("../app/163139.js");
var s = require("../app/885313.js");
var c = a(require("../vendor/667294.js"));
var d = require("../app/655241.js");
function f(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (f = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}