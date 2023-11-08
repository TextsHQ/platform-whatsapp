Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logBizBot3pContactCardJourneyEvent = function (e) {
  if (!(0, i.isBizBot3pEnabled)()) {
    return;
  }
  new r.BotBizJourneyWamEvent({
    appSessionId: (0, o.getSharedSessionId)(),
    botBizType: u.BOT_BIZ_TYPE.BOT_BIZ_3P,
    botBizEntryPoint: l.BOT_BIZ_ENTRY_POINT.SHARED_BOT_BIZ_CARD,
    botBizActionType: d(e)
  }).commit();
};
exports.logBizBot3pDeepLinkClickEvent = function () {
  if (!(0, i.isBizBot3pEnabled)()) {
    return;
  }
  new r.BotBizJourneyWamEvent({
    appSessionId: (0, o.getSharedSessionId)(),
    botBizType: u.BOT_BIZ_TYPE.BOT_BIZ_3P,
    botBizEntryPoint: l.BOT_BIZ_ENTRY_POINT.SHARED_BOT_BIZ_DEEPLINK,
    botBizActionType: s.BOT_BIZ_ACTION_TYPE.BOT_BIZ_DEEPLINK_CLICK
  }).commit();
};
exports.logBizBotNuxJourneyEvent = function (e, t, n) {
  if (e === "3p" && !(0, i.isBizBot3pEnabled)() || e === "1p" && !(0, i.isBizBot1pEnabled)()) {
    return;
  }
  let s;
  switch (n) {
    case a.ChatEntryPoint.Vcard:
      s = l.BOT_BIZ_ENTRY_POINT.SHARED_BOT_BIZ_CARD;
      break;
    case a.ChatEntryPoint.Chatlist:
      s = l.BOT_BIZ_ENTRY_POINT.BOT_BIZ_CHAT;
      break;
    default:
      s = undefined;
  }
  new r.BotBizJourneyWamEvent({
    appSessionId: (0, o.getSharedSessionId)(),
    botBizType: c(e),
    botBizActionType: d(t),
    botBizEntryPoint: s
  }).commit();
};
var r = require("./911730.js");
var i = require("./354458.js");
var a = require("./338042.js");
var o = require("./660407.js");
var s = require("./695094.js");
var l = require("./790397.js");
var u = require("./646703.js");
function c(e) {
  switch (e) {
    case "1p":
      return u.BOT_BIZ_TYPE.BOT_BIZ_1P;
    case "3p":
      return u.BOT_BIZ_TYPE.BOT_BIZ_3P;
  }
}
function d(e) {
  switch (e) {
    case "card_click":
      return s.BOT_BIZ_ACTION_TYPE.BOT_BIZ_CARD_CLICK;
    case "message_click":
      return s.BOT_BIZ_ACTION_TYPE.BOT_BIZ_CARD_MESSAGE_CLICK;
    case "view_ai_click":
      return s.BOT_BIZ_ACTION_TYPE.BOT_BIZ_CARD_VIEW_AI_CLICK;
    case "nux_appear":
      return s.BOT_BIZ_ACTION_TYPE.BOT_BIZ_NUX_APPEAR;
    case "nux_dismiss":
      return s.BOT_BIZ_ACTION_TYPE.BOT_BIZ_NUX_DISMISS;
    case "nux_select":
      return s.BOT_BIZ_ACTION_TYPE.BOT_BIZ_NUX_SELECT;
  }
}