var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addEmojisToTouchBar = function () {};
exports.editLastMessage = function (e, t) {
  const n = (0, l.getLastSentMsg)(e);
  if (n && (0, m.canEnterEditingFlow)(n)) {
    p.ModalManager.open(b.default.createElement(d.default, {
      msg: n
    }));
    (0, E.stopEvent)(t);
  } else {
    _.ToastManager.open(b.default.createElement(v.Toast, {
      msg: C.fbt._("Message cannot be edited", null, {
        hk: "MlINv"
      })
    }));
  }
};
exports.fetchGif = function (e, t, n) {
  return (0, h.default)(e, {
    headers: {
      Accept: "video/mp4"
    }
  }).then(e => {
    if (!e.ok) {
      __LOG__(3)`failed loading gif (status: ${e.status})`;
      throw new f.MediaFileFailedLoad();
    }
    return e.blob();
  }).then(function () {
    var e = (0, r.default)(function* (e) {
      const {
        thumbs: [a],
        duration: r
      } = yield c.generateVideoThumbsAndDuration({
        file: e,
        maxDimensions: [u.default.IMG_THUMB_MAX_EDGE],
        debugHint: "handleGif"
      });
      return {
        file: e,
        filename: t,
        mimetype: e.type,
        isGif: true,
        gifAttribution: n,
        fullPreview: window.URL.createObjectURL(e),
        fullPreviewSize: {
          width: a.fullWidth,
          height: a.fullHeight
        },
        preview: y.default.parseDataURL(a.url).data,
        duration: r
      };
    });
    return function () {
      return e.apply(this, arguments);
    };
  }());
};
exports.getCachedPreview = function (e) {
  const t = {
    mediaKey: e.data.mediaKey,
    mediaKeyTimestamp: e.data.mediaKeyTimestamp,
    thumbnailDirectPath: e.data.thumbnailDirectPath,
    thumbnailSha256: e.data.thumbnailSha256,
    thumbnailEncSha256: e.data.thumbnailEncSha256
  };
  return (0, o.default)((0, o.default)({}, e), {}, {
    data: (0, o.default)((0, o.default)({}, e.data), t)
  });
};
exports.getComposeBoxPlaceholderText = function (e) {
  if (e.isNewsletter) {
    return C.fbt._("Type an update", null, {
      hk: "1o4BPR"
    });
  }
  if ((0, g.isStatusPostingEnabled)() && e.id.isStatusV3()) {
    return C.fbt._("Add a caption", null, {
      hk: "1FY39R"
    });
  }
  return C.fbt._("Type a message", null, {
    hk: "U3f0O"
  });
};
exports.handleMaxPasteExceeded = function () {
  p.ModalManager.open(b.default.createElement(i.ConfirmPopup, {
    title: C.fbt._("Message Too Long", null, {
      hk: "4mrqQm"
    }),
    onOK: () => {
      p.ModalManager.close();
    },
    okText: (0, s.default)("OK")
  }, C.fbt._("The message you're pasting is too long. Try shortening it or sending it in multiple parts.", null, {
    hk: "1q0GHt"
  })));
};
exports.removeEmojisFromTouchBar = function () {};
var r = a(require("../vendor/348926.js"));
var o = a(require("../vendor/81109.js"));
var l = require("../app/534422.js");
var i = require("../app/103440.js");
var u = a(require("../app/846870.js"));
require("../app/70354.js");
require("../app/152285.js");
var s = a(require("../app/395767.js"));
var c = S(require("../app/428363.js"));
var d = a(require("./632011.js"));
var f = S(require("../app/288057.js"));
var p = require("../app/114850.js");
var m = require("../app/939716.js");
var h = a(require("../app/219368.js"));
require("../app/326425.js");
var g = require("../app/115927.js");
var E = require("./414493.js");
var v = require("../app/625786.js");
var _ = require("../app/390737.js");
var y = a(require("../app/79291.js"));
var C = require("../vendor/548360.js");
var b = a(require("../vendor/667294.js"));
function M(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (M = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function S(e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = M(t);
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
}