var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AttachMenuPopup = undefined;
var r = require("./855637.js");
var o = require("./99607.js");
var l = require("./877259.js");
var i = require("./164173.js");
var u = require("./297328.js");
var s = require("./276080.js");
var c = require("./658803.js");
var d = require("./898092.js");
var f = require("./578674.js");
var p = require("./818727.js");
var m = require("./904915.js");
var h = require("../app/72696.js");
var g = require("../app/780549.js");
var E = require("../app/664149.js");
var v = require("../app/75421.js");
var _ = require("../app/373070.js");
var y = require("../app/676345.js");
var C = require("../app/169467.js");
var b = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = w(t);
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
var M = a(require("../app/156720.js"));
var S = require("../app/655241.js");
var T = a(require("../app/321201.js"));
function w(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (w = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const A = (0, b.forwardRef)((e, t) => {
  const {
    chat: n,
    onCaptureClick: a,
    getComposeBoxEditorRef: w,
    getComposeContents: A,
    onMenuComplete: P
  } = e;
  const {
    isNewsletter: k
  } = (0, S.useModelValues)(e.chat, ["isNewsletter"]);
  const D = (0, T.default)();
  const I = () => {
    if (!(D == null)) {
      D.requestDismiss();
    }
  };
  const R = e => {
    let {
      attachments: t,
      sendAsSticker: a = false,
      onSend: r,
      onCancel: o
    } = e;
    g.Cmd.attachMediaDrawer({
      chat: n,
      attachments: t,
      fileOrigin: C.MEDIA_PICKER_ORIGIN_TYPE.CHAT_PHOTO_LIBRARY,
      initCaption: A == null ? undefined : A(),
      onComplete: (e, t) => {
        P(e, t);
      },
      onSend: r,
      onCancel: o,
      sendAsSticker: a
    });
  };
  const N = (0, m.shouldShowCatalogOption)(n);
  const x = (0, h.canSendQuickReplyInChat)(n);
  const L = (0, m.canSendOrder)(n);
  const j = (0, v.getSupportedMediaTypesForChat)(n);
  return b.default.createElement(E.Dropdown, {
    ref: t,
    type: E.MenuType.AttachMenuPopup,
    flipOnRTL: true,
    dirX: E.DirX.RIGHT,
    dirY: E.DirY.TOP,
    testid: "attach-menu-popup"
  }, b.default.createElement("div", {
    className: (0, M.default)(y.uiPadding.vert3)
  }, j.has(_.MSG_TYPE.DOCUMENT) && b.default.createElement(u.AttachMenuPopupItemDocuments, {
    chat: n,
    dismissMenu: I,
    onDocumentPick: e => {
      R({
        attachments: e,
        onSend: () => {
          r.AttachmentMenuLogger.logAttachmentSend(n, r.AttachmentMenuTarget.DOCUMENT);
        },
        onCancel: () => {
          r.AttachmentMenuLogger.logAttachmentCancel(n, r.AttachmentMenuTarget.DOCUMENT);
        }
      });
    }
  }), b.default.createElement(c.AttachMenuPopupItemPhotos, {
    chat: n,
    dismissMenu: I,
    multiple: (0, v.supportsMultipleUploads)(n.id),
    onMediaPick: e => {
      R({
        attachments: e,
        onSend: () => {
          r.AttachmentMenuLogger.logAttachmentSend(n, r.AttachmentMenuTarget.PHOTO_AND_VIDEO_LIBRARY);
        },
        onCancel: () => {
          r.AttachmentMenuLogger.logAttachmentCancel(n, r.AttachmentMenuTarget.PHOTO_AND_VIDEO_LIBRARY);
        }
      });
    }
  }), b.default.createElement(o.AttachMenuPopupItemCamera, {
    chat: n,
    onCaptureClick: a
  }), !k && b.default.createElement(i.AttachMenuPopupItemContacts, {
    chat: n,
    onMenuComplete: P
  }), n.canSendPolls() && b.default.createElement(d.AttachMenuPopupItemPolls, {
    chat: n,
    getComposeBoxEditorRef: w
  }), j.has(_.MSG_TYPE.STICKER) && b.default.createElement(p.AttachMenuPopupItemStickers, {
    chat: n,
    dismissMenu: I,
    onMediaPick: e => {
      R({
        attachments: e,
        sendAsSticker: true,
        onSend: () => {
          r.AttachmentMenuLogger.logAttachmentSend(n, r.AttachmentMenuTarget.STICKER_MAKER);
        },
        onCancel: () => {
          r.AttachmentMenuLogger.logAttachmentCancel(n, r.AttachmentMenuTarget.STICKER_MAKER);
        }
      });
    }
  }), (N || x || L) && b.default.createElement(O, null), N && b.default.createElement(l.AttachMenuPopupItemCatalog, {
    chat: n
  }), x && b.default.createElement(f.AttachMenuPopupItemQuickReplies, {
    chat: n
  }), L && b.default.createElement(s.AttachMenuPopupItemOrders, {
    chat: n
  })));
});
exports.AttachMenuPopup = A;
A.displayName = "AttachMenuPopup";
const P = {
  divider: {
    height: "kanlod6e",
    backgroundColor: "no3z30ja"
  }
};
function O() {
  return b.default.createElement("div", {
    className: (0, M.default)([P.divider, y.uiMargin.top3, y.uiMargin.bottom4])
  });
}