Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isMsgTypeSupported = function (e) {
  const t = (0, r.getABPropConfigValue)("channel_supported_message_types").split(",").map(e => Number.parseInt(e.trim(), 10)).filter(Number.isSafeInteger).reduce((e, t) => {
    const n = o.get(t);
    if (n != null) {
      e.add(n);
    }
    return e;
  }, new Set()).has(e);
  switch (e) {
    case i.MSG_TYPE.STICKER:
      return (0, a.isNewsletterStickerReceivingEnabled)();
    case i.MSG_TYPE.PTT:
      return (0, a.isNewsletterPTTReceivingEnabled)();
    case i.MSG_TYPE.POLL_CREATION:
    case i.MSG_TYPE.POLL_UPDATE:
      return (0, a.isNewsletterPollsReceivingEnabled)();
    default:
      return t;
  }
};
var r = require("./287461.js");
var i = require("./373070.js");
var a = require("./73225.js");
const o = new Map([[1, i.MSG_TYPE.CHAT], [2, i.MSG_TYPE.IMAGE], [3, i.MSG_TYPE.VIDEO], [4, i.MSG_TYPE.AUDIO], [5, i.MSG_TYPE.PTT], [6, i.MSG_TYPE.LOCATION], [7, i.MSG_TYPE.VCARD], [8, i.MSG_TYPE.DOCUMENT], [11, i.MSG_TYPE.MULTI_VCARD], [12, i.MSG_TYPE.REACTION], [13, i.MSG_TYPE.POLL_CREATION], [14, i.MSG_TYPE.POLL_UPDATE], [15, i.MSG_TYPE.STICKER]]);