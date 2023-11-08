var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    msg: t,
    theme: n
  } = e;
  const [a, s] = (0, _.useMsgValues)(t.id, [u.getType, u.getProductListHeaderImage]);
  if (t.isViewOnce) {
    return null;
  }
  let L;
  switch (a) {
    case C:
    case b:
    case M:
    case T:
    case P:
      {
        const e = (0, l.isMediaTypeWithImage)(a);
        const {
          preview: n,
          fullPreviewData: r
        } = t.mediaData;
        if (e || n != null || r != null) {
          L = v.default.createElement(l.MediaMsgPreview, {
            mediaData: t.mediaData
          });
        }
        break;
      }
    case R:
      if (t.headerType === m.Message$ButtonsMessage$HeaderType.IMAGE) {
        const {
          mediaData: e
        } = t;
        if (!(e.preview == null && e.fullPreviewData == null)) {
          L = v.default.createElement(l.MediaMsgPreview, {
            mediaData: e
          });
        }
      }
      break;
    case S:
      if (t.body != null) {
        L = v.default.createElement(x, {
          source: t.body
        });
      }
      break;
    case y:
      if (t.thumbnail) {
        L = v.default.createElement(x, {
          source: t.thumbnail
        });
      }
      break;
    case I:
      {
        const {
          mediaType: e,
          thumbnail: n
        } = t.interactiveHeader || {};
        if (e != null) {
          const {
            mediaData: e
          } = t;
          if (!(e.preview == null && e.fullPreviewData == null)) {
            L = v.default.createElement(l.MediaMsgPreview, {
              mediaData: t.mediaData
            });
          }
        } else if (n != null) {
          L = v.default.createElement(x, {
            source: n
          });
        }
        break;
      }
    case w:
      L = v.default.createElement(f.default, {
        wid: p.ProfilePicThumbCollection.getThumbnailWidFromVcard((0, u.getVcard)(t)),
        thumb: (0, g.vcardThumbnail)((0, u.getVcard)(t)),
        quoted: true,
        shape: o.DetailImageShape.Square,
        size: N(e.theme)
      });
      break;
    case A:
      L = v.default.createElement(f.default, {
        size: N(e.theme),
        shape: o.DetailImageShape.Square,
        quoted: true
      });
      break;
    case O:
      if ((0, E.isNonZeroNumber)(t.paymentAmount1000) && t.paymentCurrency) {
        L = v.default.createElement(d.default, {
          background: t.paymentBackground,
          isQuoted: true,
          isQuotedInComposeBox: n === "composeBox"
        }, v.default.createElement(c.default, {
          currency: t.paymentCurrency,
          amount1000: t.paymentAmount1000,
          isQuoted: true
        }));
      }
      break;
    case k:
      if (t.thumbnail) {
        L = v.default.createElement("div", {
          className: h.default.image,
          style: {
            backgroundImage: `url("data:image/jpeg;base64,${t.thumbnail}")`
          }
        });
      }
      break;
    case D:
      if (s) {
        L = v.default.createElement("div", {
          className: h.default.image,
          style: {
            backgroundImage: `url("${(0, i.convertToDataURI)(s)}")`
          }
        });
      }
  }
  const j = (0, r.classnamesConvertMeToStylexPlease)({
    [h.default.composeBox]: n === "composeBox",
    [h.default.statusV3]: n === "statusV3",
    [h.default.isPayment]: t.type === O,
    [h.default.imageWrapper]: true,
    [h.default.imageWrapperPtvMsg]: t.type === M
  });
  if (L) {
    return v.default.createElement("div", {
      className: j
    }, v.default.createElement("div", {
      className: (0, r.classnamesConvertMeToStylexPlease)({
        [h.default.msgImage]: true,
        [h.default.ptvMsgImage]: t.type === M
      })
    }, L));
  } else {
    return null;
  }
};
var r = require("../app/396574.js");
var o = require("../app/23641.js");
var l = require("./87430.js");
var i = require("../app/787187.js");
var u = require("../app/787742.js");
var s = require("../app/373070.js");
var c = a(require("./196031.js"));
var d = a(require("./744071.js"));
var f = a(require("../app/145632.js"));
var p = require("../app/446474.js");
var m = require("../app/533494.js");
var h = a(require("./440089.js"));
var g = require("../app/517660.js");
var E = require("../app/113189.js");
var v = a(require("../vendor/667294.js"));
var _ = require("./871210.js");
const {
  CHAT: y,
  IMAGE: C,
  VIDEO: b,
  PTV: M,
  LOCATION: S,
  DOCUMENT: T,
  VCARD: w,
  MULTI_VCARD: A,
  PRODUCT: P,
  PAYMENT: O,
  ORDER: k,
  LIST: D,
  INTERACTIVE: I,
  NATIVE_FLOW: R
} = s.MSG_TYPE;
function N(e) {
  if (["conversation", "starred", "msgInfo", "viewAllReplies"].includes(e)) {
    return 58;
  } else {
    return 79;
  }
}
function x(e) {
  let {
    source: t
  } = e;
  return v.default.createElement("div", {
    style: {
      backgroundImage: `url(data:image/jpeg;base64,${t})`
    },
    className: h.default.image
  });
}