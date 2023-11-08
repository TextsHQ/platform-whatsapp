var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createProductMsgSnapshot = S;
exports.sendProductMessage = function () {
  return v.apply(this, arguments);
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = r(require("./670983.js"));
var s = r(require("./788998.js"));
var l = require("./952543.js");
var u = require("./373070.js");
var c = require("./778466.js");
var d = require("./607592.js");
var p = require("./625786.js");
var f = require("./390737.js");
var _ = require("./169467.js");
var g = r(require("./556869.js"));
var m = require("../vendor/548360.js");
var h = r(require("../vendor/667294.js"));
function y() {
  return E.apply(this, arguments);
}
function E() {
  return (E = (0, a.default)(function* (e, t, n) {
    const r = (0, o.default)(new s.default({
      chatParticipantCount: t
    }), "new AttachMediaCollection({\n  chatParticipantCount\n})");
    (0, c.qplPointProductMessageSend)("image_upload_start");
    yield r.processAttachments([{
      file: e
    }], _.MEDIA_PICKER_ORIGIN_TYPE.CHAT_PHOTO_LIBRARY, n);
    (0, c.qplPointProductMessageSend)("image_upload_end");
    if (!r.canSend()) {
      return;
    }
    const i = r.getPreviewableMedias();
    if (i.length !== 1) {
      return;
    }
    const [a] = i;
    if (!a.caption) {
      a.caption = undefined;
    }
    return a;
  })).apply(this, arguments);
}
function S(e) {
  return (0, i.default)((0, i.default)({
    businessOwnerJid: e.catalogWid.toString({
      legacy: true
    }),
    productId: e.id.toString(),
    url: e.url,
    productImageCount: e.getProductImageCollectionCount(),
    title: e.name,
    description: e.description
  }, e.priceAmount1000 === 0 ? {
    priceAmount1000: null,
    currencyCode: null
  } : {
    currencyCode: e.currency,
    priceAmount1000: e.priceAmount1000
  }), {}, {
    salePriceAmount1000: (0, d.isSalePriceActive)(e) ? e.salePriceAmount1000 : null
  });
}
function v() {
  return (v = (0, a.default)(function* (e, t, n) {
    const r = t.getHeadImageFile();
    if (!r) {
      f.ToastManager.open(h.default.createElement(p.Toast, {
        msg: m.fbt._("Can not send product before media is ready", null, {
          hk: "1dON6O"
        })
      }));
      throw (0, g.default)("Tried to send product message. Media file is not available.");
    }
    const a = e.getParticipantCount();
    const o = yield y(r, a, e);
    if (!o) {
      f.ToastManager.open(h.default.createElement(p.Toast, {
        msg: m.fbt._("Can not send product before media is ready", null, {
          hk: "1dON6O"
        })
      }));
      throw (0, g.default)("Tried to send product message. Media data is not available.");
    }
    const s = {
      quotedMsg: n,
      caption: o.caption,
      addEvenWhilePreparing: o.previewable && o.state === l.ATTACH_MEDIA_STATE.PROCESSING,
      useBasePropsType: true
    };
    o.sendToChat(e, (0, i.default)((0, i.default)({}, s), {}, {
      type: u.MSG_TYPE.PRODUCT,
      productMsgOptions: S(t)
    }));
  })).apply(this, arguments);
}