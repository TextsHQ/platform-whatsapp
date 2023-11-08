var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AttachMenuPopupItemStickers = function (e) {
  let {
    chat: t,
    dismissMenu: n,
    onMediaPick: a
  } = e;
  const p = (0, f.useRef)();
  return f.default.createElement(o.AttachMenuPopupItem, {
    testid: "mi-attach-sticker",
    action: e => {
      e.preventDefault();
      const n = p.current;
      return !!n && (new d.WebcStickerMakerEventsWamEvent({
        stickerMakerEventName: c.WEBC_STICKER_MAKER_EVENT_NAME_TYPE.STICKER_MAKER_BUTTON_TAP
      }).commit(), n.open(), (0, s.prepareChatForMessageSending)(t), r.AttachmentMenuLogger.logAttachMenuClick(t, r.AttachmentMenuTarget.STICKER_MAKER), false);
    },
    icon: f.default.createElement("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, f.default.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M18 23C20.7614 23 23 20.7614 23 18C23 15.2386 20.7614 13 18 13C15.2386 13 13 15.2386 13 18C13 20.7614 15.2386 23 18 23ZM17.25 15.75C17.25 15.3358 17.5858 15 18 15C18.4142 15 18.75 15.3358 18.75 15.75V17.25H20.25C20.6642 17.25 21 17.5858 21 18C21 18.4142 20.6642 18.75 20.25 18.75H18.75V20.25C18.75 20.6642 18.4142 21 18 21C17.5858 21 17.25 20.6642 17.25 20.25V18.75H15.75C15.3358 18.75 15 18.4142 15 18C15 17.5858 15.3358 17.25 15.75 17.25H17.25V15.75Z",
      fill: "var(--attachment-type-stickers-color)"
    }), f.default.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M2 7C2 4.23858 4.23858 2 7 2H17C19.7614 2 22 4.23858 22 7V12.2547C20.8662 11.4638 19.4872 11 18 11C14.134 11 11 14.134 11 18C11 19.4872 11.4638 20.8662 12.2547 22H7C4.23858 22 2 19.7614 2 17V7ZM14 9.5L14.7812 7.78125L16.5 7L14.7812 6.21875L14 4.5L13.2188 6.21875L11.5 7L13.2188 7.78125L14 9.5ZM8 8.5L9.25 11.25L12 12.5L9.25 13.75L8 16.5L6.75 13.75L4 12.5L6.75 11.25L8 8.5Z",
      fill: "var(--attachment-type-stickers-color)"
    })),
    text: (0, l.StickerMakerText)()
  }, f.default.createElement(i.default, {
    ref: p,
    mimes: u.IMAGE_MIMES,
    onChange: e => {
      if (!e) {
        return void n();
      }
      e.stopPropagation();
      const t = e.target.files == null ? [] : Array.from(e.target.files);
      n();
      if (t.length) {
        new d.WebcStickerMakerEventsWamEvent({
          stickerMakerEventName: c.WEBC_STICKER_MAKER_EVENT_NAME_TYPE.IMAGE_UPLOADED
        }).commit();
        a(t.map(e => ({
          file: e,
          stickerMaker: true
        })));
      }
    },
    multiple: false
  }));
};
var r = require("./855637.js");
var o = require("./498236.js");
var l = require("./533388.js");
var i = a(require("./688988.js"));
var u = require("../app/937484.js");
var s = require("./179268.js");
var c = require("./216579.js");
var d = require("./843274.js");
var f = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = p(t);
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
function p(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (p = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}