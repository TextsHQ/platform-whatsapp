Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logClickOnCustomURL = function (e) {
  new a.BusinessInteractionWamEvent({
    businessInteractionAction: l.BUSINESS_INTERACTION_ACTION_TYPE.ACTION_CLICK,
    businessInteractionTargetScreen: s.BUSINESS_INTERACTION_TARGET_SCREEN_TYPE.INDIVIDUAL_CHAT,
    businessJid: (0, o.jidToPnString)(e.id),
    entryPointApp: i.BUSINESS_INTERACTION_ENTRY_POINT_APP.WHATSAPP,
    entryPointSource: u.BUSINESS_INTERACTION_ENTRY_POINT_SOURCE.CUSTOM_LINK
  }).commit();
};
exports.logMessageSentByCustomURL = function (e) {
  r.ComposeBoxActions.addMsgSendingLogAttributes(e, {
    handleOnce() {
      new a.BusinessInteractionWamEvent({
        businessInteractionAction: l.BUSINESS_INTERACTION_ACTION_TYPE.ACTION_MSG_SENT,
        businessJid: (0, o.jidToPnString)(e.id),
        entryPointApp: i.BUSINESS_INTERACTION_ENTRY_POINT_APP.WHATSAPP,
        entryPointSource: u.BUSINESS_INTERACTION_ENTRY_POINT_SOURCE.CUSTOM_LINK
      }).commit();
    }
  });
};
var a = require("./474283.js");
var r = require("../app/877171.js");
var o = require("./123922.js");
var l = require("./507640.js");
var i = require("./568296.js");
var u = require("./526362.js");
var s = require("./153424.js");