var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    msg: t
  } = e;
  const n = (0, p.useModelValues)(e.mediaData, ["mediaStage", "size"]);
  const a = () => {
    s.ModalManager.open(d.default.createElement(o.default, {
      msg: t.unsafe()
    }));
  };
  const m = () => {
    t.forceDownloadMediaEvenIfExpensive();
  };
  const g = () => {
    t.cancelDownload();
  };
  const E = () => {
    t.cancelUpload();
  };
  const v = () => {
    t.resumeUpload();
  };
  const _ = () => {
    t.resumeRemoteUpload();
  };
  let y;
  let C;
  const {
    mediaStage: b
  } = n;
  switch (b) {
    case i.MEDIA_DATA_STAGE.RESOLVED:
      y = null;
      C = null;
      break;
    case i.MEDIA_DATA_STAGE.FETCHING:
      y = g;
      C = d.default.createElement(l.Pending, {
        cancelable: true
      });
      break;
    case i.MEDIA_DATA_STAGE.NEED_POKE:
      y = m;
      C = d.default.createElement(l.Download, {
        filesize: n.size
      });
      break;
    case i.MEDIA_DATA_STAGE.FINALIZING:
    case i.MEDIA_DATA_STAGE.UPLOADING:
      y = E;
      C = d.default.createElement(l.Pending, {
        cancelable: true
      });
      break;
    case i.MEDIA_DATA_STAGE.NEED_UPLOAD:
      y = v;
      C = d.default.createElement(l.Upload, {
        filesize: n.size
      });
      break;
    case i.MEDIA_DATA_STAGE.REMOTE_NEED_UPLOAD:
      y = _;
      C = d.default.createElement(l.Upload, {
        filesize: n.size
      });
      break;
    case i.MEDIA_DATA_STAGE.ERROR_MISSING:
      y = a;
      C = d.default.createElement(l.Upload, {
        filesize: n.size
      });
      break;
    case i.MEDIA_DATA_STAGE.ERROR_UNSUPPORTED:
      y = a;
      C = d.default.createElement(l.Download, {
        filesize: n.size
      });
      break;
    case i.MEDIA_DATA_STAGE.SENDING:
    case i.MEDIA_DATA_STAGE.DECRYPTING:
    case i.MEDIA_DATA_STAGE.ERROR_TOO_LARGE:
    case i.MEDIA_DATA_STAGE.INIT:
    case i.MEDIA_DATA_STAGE.PREPARING:
    case i.MEDIA_DATA_STAGE.REMOTE_UPLOADING:
    case i.MEDIA_DATA_STAGE.REUPLOADING:
    case i.MEDIA_DATA_STAGE.EXISTS:
      C = d.default.createElement(l.Pending, null);
      break;
    case i.MEDIA_DATA_STAGE.ERROR_FILE_NOT_READABLE:
    case i.MEDIA_DATA_STAGE.PROGRESSIVE_READY:
      throw (0, c.default)(`invalid value for sticker mediaStage '${b}'`);
  }
  return d.default.createElement("div", {
    className: (0, r.classnamesConvertMeToStylexPlease)((0, f.default)(h), u.default.container),
    onClick: y
  }, C, e.children);
};
var r = require("../app/396574.js");
var o = a(require("./59036.js"));
var l = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = m(t);
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
var i = require("../app/172259.js");
var u = a(require("./597437.js"));
var s = require("../app/114850.js");
var c = a(require("../app/556869.js"));
var d = a(require("../vendor/667294.js"));
var f = a(require("../app/156720.js"));
var p = require("../app/655241.js");
function m(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (m = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const h = {
  alignItems: "gndfcl4n",
  borderTopStartRadius: "l8fojup5",
  borderTopEndRadius: "paxyh2gw",
  borderBottomEndRadius: "sfeitywo",
  borderBottomStartRadius: "cqsf3vkf",
  cursor: "ajgl1lbb",
  display: "p357zi0d",
  justifyContent: "ac2vgrno",
  maxWidth: "laorhtua",
  overflowX: "gfz4du6o",
  overflowY: "r7fjleex",
  position: "g0rxnol2"
};