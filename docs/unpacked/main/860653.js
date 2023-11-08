var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AudioMediaState = undefined;
var r = require("../app/402994.js");
var o = require("./839872.js");
var l = require("./318983.js");
var i = require("./503998.js");
var u = a(require("./59036.js"));
var s = require("../app/172259.js");
var c = require("../app/114850.js");
var d = require("../app/787742.js");
var f = require("./451262.js");
var p = require("../app/163139.js");
var m = require("../vendor/548360.js");
var h = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = v(t);
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
}(require("../vendor/667294.js"));
var g = require("../app/655241.js");
var E = require("./871210.js");
function v(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (v = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const _ = (0, h.forwardRef)((e, t) => {
  const {
    msg: n
  } = e;
  const [a, v, _] = (0, E.useMsgValues)(e.msg.id, [d.getAck, d.getIsSentByMe, d.getType]);
  const y = (0, g.useModelValues)(e.mediaData, ["mediaStage", "size"]);
  const C = (0, h.useRef)(null);
  const b = () => {
    e.msg.forceDownloadMediaEvenIfExpensive();
  };
  const M = () => {
    e.msg.resumeUpload();
  };
  const S = () => {
    e.msg.resumeRemoteUpload();
  };
  const T = () => {
    c.ModalManager.open(h.default.createElement(u.default, {
      msg: e.msg.unsafe()
    }));
  };
  const w = () => {
    e.msg.cancelUpload();
  };
  (0, h.useImperativeHandle)(t, () => ({
    handleKeyActivation: e => {
      var t;
      if (!((t = C.current) === null || t === undefined)) {
        t.handleKeyActivation(e);
      }
    }
  }));
  switch (y.mediaStage) {
    case s.MEDIA_DATA_STAGE.RESOLVED:
      return h.default.createElement(f.WrappedAudioPlayer, {
        ref: C,
        mediaData: (0, p.unproxy)(e.mediaData),
        outgoingMsg: v,
        played: n.type !== "ptt" || a === r.ACK.PLAYED,
        displayType: e.displayType,
        getSequentialMsg: e.getSequentialMsg,
        msg: (0, p.unproxy)(n)
      });
    case s.MEDIA_DATA_STAGE.NEED_POKE:
      return h.default.createElement(f.AudioPlayerFrame, {
        icon: h.default.createElement(o.AudioDownloadIcon, null),
        ariaLabel: m.fbt._("Download voice message", null, {
          hk: "1IMhGA"
        }),
        outgoingMsg: v,
        action: b,
        msg: n.type === "ptt" ? (0, p.unproxy)(n) : undefined
      });
    case s.MEDIA_DATA_STAGE.NEED_UPLOAD:
      return h.default.createElement(f.AudioPlayerFrame, {
        icon: h.default.createElement(i.AudioUploadIcon, null),
        ariaLabel: m.fbt._("Upload voice message", null, {
          hk: "GMghs"
        }),
        outgoingMsg: v,
        action: M,
        msg: n.type === "ptt" ? (0, p.unproxy)(n) : undefined
      });
    case s.MEDIA_DATA_STAGE.REMOTE_NEED_UPLOAD:
      return h.default.createElement(f.AudioPlayerFrame, {
        icon: h.default.createElement(i.AudioUploadIcon, null),
        ariaLabel: m.fbt._("Upload voice message", null, {
          hk: "GMghs"
        }),
        outgoingMsg: v,
        action: S,
        msg: n.type === "ptt" ? (0, p.unproxy)(n) : undefined
      });
    case s.MEDIA_DATA_STAGE.ERROR_MISSING:
      return h.default.createElement(f.AudioPlayerFrame, {
        icon: h.default.createElement(l.AudioPlayIcon, {
          directional: true
        }),
        ariaLabel: m.fbt._("Play voice message", null, {
          hk: "1IoAqS"
        }),
        outgoingMsg: v,
        action: T,
        msg: n.type === "ptt" ? (0, p.unproxy)(n) : undefined
      });
    case s.MEDIA_DATA_STAGE.UPLOADING:
    case s.MEDIA_DATA_STAGE.SENDING:
      {
        const e = y.mediaStage === s.MEDIA_DATA_STAGE.UPLOADING;
        return h.default.createElement(f.AudioPlayerFrame, {
          action: e ? w : undefined,
          canCancel: e,
          fileSize: y.size,
          outgoingMsg: v,
          spinner: true,
          msg: n.type === "ptt" ? (0, p.unproxy)(n) : undefined
        });
      }
    default:
      return h.default.createElement(f.AudioPlayerFrame, {
        spinner: true,
        outgoingMsg: v,
        msg: n.type === "ptt" ? (0, p.unproxy)(n) : undefined
      });
  }
});
exports.AudioMediaState = _;
_.displayName = "AudioMediaState";