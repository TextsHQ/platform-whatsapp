var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("./443699.js");
var o = require("./3353.js");
var l = require("./325929.js");
var i = require("./178117.js");
var u = require("./855637.js");
var s = a(require("./192806.js"));
var c = require("./533388.js");
var d = require("./904915.js");
var f = require("./671916.js");
var p = require("./468860.js");
var m = require("./532702.js");
var h = require("./363490.js");
var g = require("./319144.js");
var E = require("./951664.js");
var v = a(require("./120162.js"));
var _ = require("../app/72696.js");
var y = require("../app/778945.js");
var C = require("../app/542358.js");
var b = require("../app/780549.js");
var M = require("../app/877171.js");
var S = require("./13017.js");
var T = require("./765025.js");
var w = require("../app/900316.js");
var A = require("../app/664149.js");
var P = require("../app/675085.js");
var O = a(require("./688988.js"));
var k = require("../app/698210.js");
var D = require("../app/75421.js");
var I = require("../app/937484.js");
var R = require("../app/114850.js");
var N = require("../app/373070.js");
var x = a(require("./630582.js"));
var L = a(require("./94530.js"));
var j = require("./873994.js");
var B = a(require("./207992.js"));
var F = require("./272493.js");
var G = require("../app/671598.js");
var U = a(require("./65162.js"));
var W = require("./179268.js");
var H = require("../app/77548.js");
var V = require("../app/242677.js");
var q = a(require("./444537.js"));
var Y = require("../app/258290.js");
var z = require("../app/459857.js");
var K = require("./887222.js");
var Q = require("../app/169467.js");
var X = require("./76195.js");
var Z = require("./767301.js");
var J = require("./216579.js");
var $ = require("./843274.js");
var ee = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = le(t);
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
a(require("../app/156720.js"));
var te = a(require("../app/969651.js"));
var ne = a(require("../app/637660.js"));
var ae = require("../app/808446.js");
var re = require("../app/655241.js");
var oe = a(require("../app/321201.js"));
function le(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (le = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const ie = {
  disabledBtn: {
    opacity: "n791o4v8"
  }
};
function ue(e) {
  const {
    ariaLabel: t,
    children: n,
    Icon: a,
    iconXstyle: r
  } = e;
  return ee.default.createElement("button", {
    "aria-label": t,
    className: s.default.iconsItem,
    "data-animate-menu-icons-item": true
  }, ee.default.createElement(a, {
    className: s.default.iconImage,
    xstyle: r
  }), n);
}
function se(e) {
  return ee.default.createElement(P.DropdownItem, {
    type: "icon",
    tooltip: (0, c.QuickRepliesText)(),
    tooltipPosition: e.tooltipPosition,
    testid: "mi-attach-quick-replies",
    action: e.onClick
  }, ee.default.createElement(ue, {
    ariaLabel: (0, c.QuickRepliesText)(),
    Icon: h.AttachQuickRepliesIcon
  }));
}
function ce(e) {
  return ee.default.createElement(P.DropdownItem, {
    type: "icon",
    tooltip: (0, c.CatalogText)(),
    tooltipPosition: e.tooltipPosition,
    testid: "mi-attach-product-catalog",
    action: e.onClick
  }, ee.default.createElement(ue, {
    ariaLabel: (0, c.CatalogText)(),
    Icon: p.AttachProductIcon
  }));
}
const de = (0, ee.forwardRef)((e, t) => ee.default.createElement(P.DropdownItem, {
  type: "icon",
  tooltip: (0, c.DocumentText)(),
  tooltipPosition: e.tooltipPosition,
  testid: "mi-attach-document",
  action: e.onClick
}, ee.default.createElement(ue, {
  ariaLabel: (0, c.DocumentText)(),
  Icon: l.AttachDocumentIcon
}, ee.default.createElement(O.default, {
  ref: t,
  mimes: I.DOC_MIMES,
  onChange: e.onDocumentPick
}))));
de.displayName = "AttachDocDropdownItem";
const fe = (0, ee.forwardRef)((e, t) => ee.default.createElement(P.DropdownItem, {
  type: "icon",
  tooltip: (0, c.StickerMakerText)(),
  tooltipPosition: e.tooltipPosition,
  testid: "mi-attach-sticker",
  action: e.onClick
}, ee.default.createElement(ue, {
  ariaLabel: (0, c.StickerMakerText)(),
  Icon: g.AttachStickerIcon
}, ee.default.createElement(O.default, {
  ref: t,
  mimes: I.IMAGE_MIMES,
  onChange: e.onStickerPick,
  multiple: false
}))));
function pe(e) {
  if (!e.sendOrder) {
    return null;
  }
  let t = e.onClick;
  const n = !(0, F.isOrderExpansionEnabled)() && (0, F.isSellerCountrySameAsBuyer)(e.chat) || (0, F.isContactCountrySupported)(e.chat);
  if (!n) {
    t = () => {
      R.ModalManager.open(ee.default.createElement(B.default, {
        chat: e.chat
      }));
    };
  }
  return ee.default.createElement(P.DropdownItem, {
    type: "icon",
    tooltip: (0, c.OrderText)(),
    tooltipPosition: e.tooltipPosition,
    testid: "mi-attach-order",
    action: t
  }, ee.default.createElement(ue, {
    ariaLabel: (0, c.OrderText)(),
    Icon: f.AttachOrderIcon,
    iconXstyle: n ? null : ie.disabledBtn
  }));
}
fe.displayName = "AttachStickerDropdownItem";
const me = (0, ee.forwardRef)((e, t) => {
  const n = Y.PopoverPosition.End;
  const a = (0, oe.default)();
  const l = (0, te.default)();
  const f = (0, ee.useRef)();
  const p = (0, ee.useRef)();
  const h = (0, ee.useRef)();
  const g = (0, ne.default)(() => new V.ProductCatalogSession());
  const {
    isNewsletter: B
  } = (0, re.useModelValues)(e.chat, ["isNewsletter"]);
  (0, ae.useListener)((0, ee.useMemo)(() => y.BusinessProfileCollection.get((0, z.getMaybeMeUser)()), []), "change:profileOptions", l);
  const F = () => {
    if (!(a == null)) {
      a.requestDismiss();
    }
  };
  const le = t => {
    var n;
    let {
      attachments: a,
      sendAsSticker: r = false,
      onSend: o,
      onCancel: l
    } = t;
    b.Cmd.attachMediaDrawer({
      chat: e.chat,
      attachments: a,
      fileOrigin: Q.MEDIA_PICKER_ORIGIN_TYPE.CHAT_PHOTO_LIBRARY,
      initCaption: (n = e.getComposeContents) === null || n === undefined ? undefined : n.call(e),
      onComplete: (t, n) => {
        var a;
        if (!((a = e.onMenuComplete) === null || a === undefined)) {
          a.call(e, t, n);
        }
      },
      onSend: o,
      onCancel: l,
      sendAsSticker: r
    });
  };
  const ie = (0, D.getSupportedMediaTypesForChat)(e.chat);
  return ee.default.createElement("div", {
    className: s.default.attachMenuContainer,
    ref: t
  }, ee.default.createElement(A.Dropdown, {
    type: A.MenuType.AttachMenu,
    key: "AttachMenuDropdown"
  }, ee.default.createElement(P.DropdownItem, {
    type: "icon",
    tooltip: (0, c.PhotosAndVideosText)(),
    tooltipPosition: n,
    testid: "mi-attach-media",
    action: t => {
      t.preventDefault();
      if (f.current != null) {
        f.current.open();
        (0, W.prepareChatForMessageSending)(e.chat);
        u.AttachmentMenuLogger.logAttachMenuClick(e.chat, u.AttachmentMenuTarget.PHOTO_AND_VIDEO_LIBRARY);
        return false;
      }
    }
  }, ee.default.createElement(ue, {
    ariaLabel: (0, c.PhotosAndVideosText)(),
    Icon: i.AttachImageIcon
  }, ee.default.createElement(O.default, {
    ref: f,
    mimes: [I.IMAGE_MIMES, I.VIDEO_MIMES].join(","),
    onChange: t => {
      var n;
      if (!t) {
        return void F();
      }
      t.stopPropagation();
      const a = Array.from((n = t.target.files) !== null && n !== undefined ? n : []);
      F();
      if (a.length) {
        le({
          attachments: a.map(e => ({
            file: e
          })),
          onSend: () => {
            u.AttachmentMenuLogger.logAttachmentSend(e.chat, u.AttachmentMenuTarget.PHOTO_AND_VIDEO_LIBRARY);
          },
          onCancel: () => {
            u.AttachmentMenuLogger.logAttachmentCancel(e.chat, u.AttachmentMenuTarget.PHOTO_AND_VIDEO_LIBRARY);
          }
        });
      }
    },
    multiple: (0, D.supportsMultipleUploads)(e.chat.id)
  }))), ee.default.createElement(pe, {
    tooltipPosition: n,
    sendOrder: (0, d.canSendOrder)(e.chat),
    onClick: () => {
      new j.OrderDetailsActionsSmbWamEvent({
        orderDetailsCreationAction: X.ORDER_DETAILS_CREATION_ACTION.CLICK_ORDER_FROM_ICON_MENU,
        actionCategory: String(L.default.ORDER_DETAILS_CREATION),
        orderDetailEntryPoint: String(v.default.MERCHANT_INITIATED),
        hasCatalog: (0, C.hasCatalog)(y.BusinessProfileCollection.get((0, z.getMaybeMeUser)()))
      }).commit();
      q.default.maybeShowOrderDataSharingDialog(e.chat, () => {
        w.DrawerManager.openDrawerRight(ee.default.createElement(x.default, {
          entryPoint: v.default.MERCHANT_INITIATED,
          chat: e.chat,
          onSend: () => {
            u.AttachmentMenuLogger.logAttachmentSend(e.chat, u.AttachmentMenuTarget.ORDER);
          },
          onCancel: () => {
            u.AttachmentMenuLogger.logAttachmentCancel(e.chat, u.AttachmentMenuTarget.ORDER);
          }
        }), {
          transition: "slide-left"
        });
        u.AttachmentMenuLogger.logAttachMenuClick(e.chat, u.AttachmentMenuTarget.ORDER);
      }, Z.SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT.NEW_ORDER);
    },
    chat: e.chat
  }), ie.has(N.MSG_TYPE.STICKER) ? ee.default.createElement(fe, {
    ref: p,
    tooltipPosition: n,
    onClick: t => {
      t.preventDefault();
      const n = p.current;
      if (n) {
        new $.WebcStickerMakerEventsWamEvent({
          stickerMakerEventName: J.WEBC_STICKER_MAKER_EVENT_NAME_TYPE.STICKER_MAKER_BUTTON_TAP
        }).commit();
        n.open();
        (0, W.prepareChatForMessageSending)(e.chat);
        u.AttachmentMenuLogger.logAttachMenuClick(e.chat, u.AttachmentMenuTarget.STICKER_MAKER);
        return false;
      }
    },
    onStickerPick: t => {
      if (!t) {
        return void F();
      }
      t.stopPropagation();
      const n = t.target.files == null ? [] : Array.from(t.target.files);
      F();
      if (n.length) {
        new $.WebcStickerMakerEventsWamEvent({
          stickerMakerEventName: J.WEBC_STICKER_MAKER_EVENT_NAME_TYPE.IMAGE_UPLOADED
        }).commit();
        le({
          attachments: n.map(e => ({
            file: e,
            stickerMaker: true
          })),
          sendAsSticker: true,
          onSend: () => {
            u.AttachmentMenuLogger.logAttachmentSend(e.chat, u.AttachmentMenuTarget.STICKER_MAKER);
          },
          onCancel: () => {
            u.AttachmentMenuLogger.logAttachmentCancel(e.chat, u.AttachmentMenuTarget.STICKER_MAKER);
          }
        });
      }
    }
  }) : null, ee.default.createElement(P.DropdownItem, {
    type: "icon",
    tooltip: (0, c.CameraText)(),
    tooltipPosition: n,
    testid: "mi-attach-camera",
    action: () => {
      e.onCaptureClick();
      u.AttachmentMenuLogger.logAttachMenuClick(e.chat, u.AttachmentMenuTarget.CAMERA);
    },
    disabled: !U.default
  }, ee.default.createElement(ue, {
    ariaLabel: (0, c.CameraText)(),
    Icon: r.AttachCameraIcon
  })), ie.has(N.MSG_TYPE.DOCUMENT) ? ee.default.createElement(de, {
    tooltipPosition: n,
    onClick: t => {
      t.preventDefault();
      if (h.current) {
        h.current.open();
        (0, W.prepareChatForMessageSending)(e.chat);
        u.AttachmentMenuLogger.logAttachMenuClick(e.chat, u.AttachmentMenuTarget.DOCUMENT);
        return false;
      }
    },
    onDocumentPick: t => {
      t.stopPropagation();
      const n = t.target.files == null ? [] : Array.from(t.target.files);
      F();
      if (!n.length) {
        return;
      }
      const a = n.map(e => ({
        file: e,
        type: k.FILETYPE.DOCUMENT
      }));
      le({
        attachments: a,
        onSend: () => {
          u.AttachmentMenuLogger.logAttachmentSend(e.chat, u.AttachmentMenuTarget.DOCUMENT);
        },
        onCancel: () => {
          u.AttachmentMenuLogger.logAttachmentCancel(e.chat, u.AttachmentMenuTarget.DOCUMENT);
        }
      });
    },
    ref: h
  }) : null, B ? null : ee.default.createElement(P.DropdownItem, {
    type: "icon",
    tooltipPosition: n,
    tooltip: (0, c.ContactText)(),
    testid: "mi-attach-contact",
    action: t => {
      t.preventDefault();
      R.ModalManager.open(ee.default.createElement(E.AttachVcardsFlowLoadable, {
        chat: e.chat,
        onCancel: () => {
          u.AttachmentMenuLogger.logAttachmentCancel(e.chat, u.AttachmentMenuTarget.CONTACT);
        },
        onContactsSent: () => {
          var t;
          if (!((t = e.onMenuComplete) === null || t === undefined)) {
            t.call(e, true, {
              initCaptionUsed: false
            });
          }
          u.AttachmentMenuLogger.logAttachmentSend(e.chat, u.AttachmentMenuTarget.CONTACT);
        }
      }));
      (0, W.prepareChatForMessageSending)(e.chat);
      u.AttachmentMenuLogger.logAttachMenuClick(e.chat, u.AttachmentMenuTarget.CONTACT);
    }
  }, ee.default.createElement(ue, {
    ariaLabel: (0, c.ContactText)(),
    Icon: o.AttachContactIcon
  })), (0, d.shouldShowCatalogOption)(e.chat) && ee.default.createElement(ce, {
    tooltipPosition: n,
    onClick: t => {
      t.preventDefault();
      const n = g.current.toString();
      if (n != null) {
        (0, H.logCatalogAttachmentButtonClick)(n);
        (0, K.qplStartCatalogView)("Attachment");
        R.ModalManager.open(ee.default.createElement(m.AttachProductModalLoadable, {
          chat: e.chat,
          sessionId: n,
          onSend: () => {
            u.AttachmentMenuLogger.logAttachmentSend(e.chat, u.AttachmentMenuTarget.CATALOG);
          },
          onCancel: () => {
            u.AttachmentMenuLogger.logAttachmentCancel(e.chat, u.AttachmentMenuTarget.CATALOG);
          }
        }));
        (0, W.prepareChatForMessageSending)(e.chat);
        u.AttachmentMenuLogger.logAttachMenuClick(e.chat, u.AttachmentMenuTarget.CATALOG);
      }
    }
  }), (0, _.canSendQuickReplyInChat)(e.chat) ? ee.default.createElement(se, {
    onClick: t => {
      t.preventDefault();
      M.ComposeBoxActions.toggleQuickReplies();
      u.AttachmentMenuLogger.logAttachMenuClick(e.chat, u.AttachmentMenuTarget.QUICK_REPLY);
    },
    tooltipPosition: n
  }) : null, e.chat.canSendPolls() ? ee.default.createElement(P.DropdownItem, {
    type: "icon",
    tooltip: (0, c.PollText)(),
    tooltipPosition: n,
    testid: "mi-attach-poll",
    action: t => {
      t.preventDefault();
      R.ModalManager.open(ee.default.createElement(T.CreatePollModalLoadable, {
        chat: e.chat,
        getComposeBoxEditorRef: e.getComposeBoxEditorRef
      }), {
        blockClose: (0, G.isPollsCancelationPromptEnabled)()
      });
      (0, W.prepareChatForMessageSending)(e.chat);
      u.AttachmentMenuLogger.logAttachMenuClick(e.chat, u.AttachmentMenuTarget.POLL);
    }
  }, ee.default.createElement(ue, {
    ariaLabel: (0, c.PollText)(),
    Icon: S.CreatePollIcon
  })) : undefined));
});
me.displayName = "AttachMenuDropdown";
var he = me;
exports.default = he;