var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AttachMenuPopupItemPhotos = function (e) {
  let {
    chat: t,
    dismissMenu: n,
    onMediaPick: a,
    multiple: u
  } = e;
  const d = (0, c.useRef)();
  return c.default.createElement(o.AttachMenuPopupItem, {
    testid: "mi-attach-media",
    action: e => {
      e.preventDefault();
      return d.current == null || (d.current.open(), (0, s.prepareChatForMessageSending)(t), r.AttachmentMenuLogger.logAttachMenuClick(t, r.AttachmentMenuTarget.PHOTO_AND_VIDEO_LIBRARY), false);
    },
    icon: c.default.createElement("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, c.default.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M20 14V2C20 0.9 19.1 0 18 0H6C4.9 0 4 0.9 4 2V14C4 15.1 4.9 16 6 16H18C19.1 16 20 15.1 20 14ZM9.4 10.53L11.03 12.71L13.61 9.49C13.81 9.24 14.19 9.24 14.39 9.49L17.35 13.19C17.61 13.52 17.38 14 16.96 14H7C6.59 14 6.35 13.53 6.6 13.2L8.6 10.53C8.8 10.27 9.2 10.27 9.4 10.53ZM0 18V5C0 4.45 0.45 4 1 4C1.55 4 2 4.45 2 5V17C2 17.55 2.45 18 3 18H15C15.55 18 16 18.45 16 19C16 19.55 15.55 20 15 20H2C0.9 20 0 19.1 0 18Z",
      fill: "var(--attachment-type-photos-color)"
    })),
    text: (0, l.PhotosAndVideosText)()
  }, c.default.createElement(i.default, {
    ref: d,
    mimes: f,
    onChange: e => {
      var t;
      if (!e) {
        return void n();
      }
      e.stopPropagation();
      const r = Array.from((t = e.target.files) !== null && t !== undefined ? t : []);
      n();
      if (r.length) {
        a(r.map(e => ({
          file: e
        })));
      }
    },
    multiple: u
  }));
};
var r = require("./855637.js");
var o = require("./498236.js");
var l = require("./533388.js");
var i = a(require("./688988.js"));
var u = require("../app/937484.js");
var s = require("./179268.js");
var c = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = d(t);
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
function d(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (d = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const f = [u.IMAGE_MIMES, u.VIDEO_MIMES].join(",");