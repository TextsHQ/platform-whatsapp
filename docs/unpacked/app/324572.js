var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.forwardMediaMsg = function () {
  return g.apply(this, arguments);
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./402066.js");
var s = require("./194788.js");
var l = r(require("./756680.js"));
var u = require("./328793.js");
var c = require("./172259.js");
var d = require("./787742.js");
var p = require("./501372.js");
var f = require("./843534.js");
var _ = r(require("./556869.js"));
function g() {
  return (g = (0, a.default)(function* (e, t) {
    var n;
    let r = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
    let a = arguments.length > 3 && arguments[3] !== undefined && arguments[3];
    __LOG__(2)`Prepping media msg`;
    const g = e.mediaObject;
    if (!g) {
      __LOG__(4, undefined, new Error(), true)`id: ${e.id.toString()} type: ${e.type}`;
      SEND_LOGS("media-fault: forwardMediaMsg msg without mediaObject");
      return Promise.reject((0, _.default)("non initialized media"));
    }
    const m = e.mediaData.toJSON();
    if (m.preview != null) {
      m.preview = g.contentInfo._preview;
    }
    if (m.mediaBlob instanceof l.default) {
      m.mediaBlob.retain();
    }
    const h = {
      mimetype: m.mimetype
    };
    const y = m.isGif ? (0, i.default)((0, i.default)({}, h), {}, {
      isGif: true
    }) : h;
    if (m.type === c.OUTWARD_TYPES.PTT) {
      m.type = c.OUTWARD_TYPES.AUDIO;
    }
    const E = {
      businessOwnerJid: e.businessOwnerJid,
      productId: e.productId,
      currencyCode: e.currencyCode,
      priceAmount1000: e.priceAmount1000,
      salePriceAmount1000: e.salePriceAmount1000,
      retailerId: e.retailerId,
      url: e.url,
      productImageCount: e.productImageCount,
      title: e.title,
      description: e.description
    };
    const S = m.type === c.OUTWARD_TYPES.DOCUMENT && (e.isFromTemplate || e.isDynamicReplyButtonsMsg);
    let v = S || m.type === c.OUTWARD_TYPES.PRODUCT ? e.caption : undefined;
    if ((0, o.isForwardMediaWithCaptionsEnabled)() && a) {
      if (!(m.type !== c.OUTWARD_TYPES.IMAGE && m.type !== c.OUTWARD_TYPES.VIDEO)) {
        v = e.caption;
      }
    }
    const T = yield new u.MediaPrep(m.type, Promise.resolve(m)).sendToChat(t, {
      forwardedFromWeb: true,
      caption: v,
      mentionedJidList: e.mentionedJidList,
      groupMentions: e.groupMentions,
      footer: m.type === c.OUTWARD_TYPES.PRODUCT ? e.footer : undefined,
      addEvenWhilePreparing: true,
      placeholderProps: y,
      isForwarded: (0, d.getShouldDisplayAsForwarded)(e),
      forwardingScore: e.getForwardingScoreWhenForwarded(),
      multicast: r,
      productMsgOptions: E,
      isAvatar: (n = e.isAvatar) !== null && n !== undefined && n,
      forwardedNewsletterMessageInfo: (0, s.getNewsletterContextForForwardedMsg)(e)
    });
    var M;
    var A;
    var b;
    if (m.type === c.OUTWARD_TYPES.STICKER) {
      new p.StickerSendWamEvent({
        stickerSendOrigin: f.STICKER_SEND_ORIGIN_TYPE.FORWARD,
        stickerIsAnimated: Boolean((M = e.mediaData) === null || M === undefined ? undefined : M.isAnimated),
        stickerIsFirstParty: Boolean((A = e.mediaData) === null || A === undefined ? undefined : A.isFirstParty),
        stickerIsFromStickerMaker: Boolean((b = e.mediaData) === null || b === undefined ? undefined : b.isFromStickerMaker)
      }).commit();
    }
    return T;
  })).apply(this, arguments);
}