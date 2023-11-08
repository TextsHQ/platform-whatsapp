Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logChatPSADelete = function (e) {
  var t;
  new i.ChatPsaActionWamEvent({
    messageMediaType: e.getWamMediaType(),
    psaCampaignId: (t = e.campaignId) === null || t === undefined ? undefined : t.toString(),
    psaMessageActionType: c.PSA_MESSAGE_ACTION_TYPE.DELETE,
    psaMsgId: e.id.id.toString()
  }).commit();
};
exports.logChatPSAForward = function (e) {
  var t;
  new i.ChatPsaActionWamEvent({
    messageMediaType: e.getWamMediaType(),
    psaCampaignId: (t = e.campaignId) === null || t === undefined ? undefined : t.toString(),
    psaMessageActionType: c.PSA_MESSAGE_ACTION_TYPE.FORWARD,
    psaMsgId: e.id.id.toString()
  }).commit();
};
exports.logChatPSAMediaPlay = function (e, t, n) {
  new i.ChatPsaActionWamEvent({
    messageMediaType: e,
    psaCampaignId: t == null ? undefined : t.toString(),
    psaMessageActionType: c.PSA_MESSAGE_ACTION_TYPE.MEDIA_PLAY,
    psaMsgId: n.toString()
  }).commit();
};
exports.logChatPSAMute = function (e, t) {
  new r.ChatMuteWamEvent({
    actionConducted: s.ACTION_CONDUCTED.MUTE,
    chatMuteNotificationChoice: l.CHAT_MUTE_NOTIFICATION_CHOICE.NO_NOTIFICATIONS_WHEN_MUTED,
    muteChatType: u.MUTE_CHAT_TYPE.ONE_ON_ONE,
    muteDuration: t,
    muteEntryPoint: e,
    waOfficialAccountName: _.WA_OFFICIAL_ACCOUNT_NAME.WHATSAPP_CHATPSA
  }).commit();
};
exports.logChatPSARead = function (e) {
  var t;
  if (e.campaignId != null) {
    new a.ChatPsaReadWamEvent({
      messageMediaType: e.getWamMediaType(),
      psaMsgId: e.id.id.toString(),
      psaCampaignId: (t = e.campaignId) === null || t === undefined ? undefined : t.toString(),
      readEntryPoint: f.READ_ENTRY_POINT.CHAT
    }).commit();
  }
};
exports.logChatPSARemove = function (e, t, n) {
  if (e) {
    new o.ChatPsaRemoveWamEvent({
      lastReceivedMediaType: e.getWamMediaType(),
      lastReceivedMessageTs: e.t,
      lastReceivedMsgId: e.id.id.toString(),
      psaMessageRemoveAction: g(t),
      psaMessageRemoveEntryPoint: m(n),
      waOfficialAccountName: _.WA_OFFICIAL_ACCOUNT_NAME.WHATSAPP_CHATPSA
    }).commit();
  } else {
    new o.ChatPsaRemoveWamEvent({
      psaMessageRemoveAction: g(t),
      psaMessageRemoveEntryPoint: m(n),
      waOfficialAccountName: _.WA_OFFICIAL_ACCOUNT_NAME.WHATSAPP_CHATPSA
    }).commit();
  }
};
exports.logChatPSAStar = function (e) {
  var t;
  new i.ChatPsaActionWamEvent({
    messageMediaType: e.getWamMediaType(),
    psaCampaignId: (t = e.campaignId) === null || t === undefined ? undefined : t.toString(),
    psaMessageActionType: c.PSA_MESSAGE_ACTION_TYPE.SAVE,
    psaMsgId: e.id.id.toString()
  }).commit();
};
exports.logChatPSAUnmute = function (e) {
  new r.ChatMuteWamEvent({
    actionConducted: s.ACTION_CONDUCTED.UNMUTE,
    muteChatType: u.MUTE_CHAT_TYPE.ONE_ON_ONE,
    muteEntryPoint: e,
    waOfficialAccountName: _.WA_OFFICIAL_ACCOUNT_NAME.WHATSAPP_CHATPSA
  }).commit();
};
var r = require("./103789.js");
var i = require("./138245.js");
var a = require("./724235.js");
var o = require("./622595.js");
var s = require("./7101.js");
var l = require("./309483.js");
var u = require("./866736.js");
var c = require("./502679.js");
var d = require("./560670.js");
var p = require("./8402.js");
var f = require("./2055.js");
var _ = require("./591077.js");
function g(e) {
  switch (e) {
    case 1:
      return d.PSA_MESSAGE_REMOVE_ACTION.BLOCK;
    case 2:
      return d.PSA_MESSAGE_REMOVE_ACTION.UNBLOCK;
    case 3:
      return d.PSA_MESSAGE_REMOVE_ACTION.ARCHIVE;
    case 4:
      return d.PSA_MESSAGE_REMOVE_ACTION.UNARCHIVE;
    case 5:
      return d.PSA_MESSAGE_REMOVE_ACTION.CLEAR;
    case 6:
      return d.PSA_MESSAGE_REMOVE_ACTION.DELETE_ALL;
  }
}
function m(e) {
  switch (e) {
    case 1:
      return p.PSA_MESSAGE_REMOVE_ENTRY_POINT.BLOCK_FROM_CONTACT_INFO;
    case 2:
      return p.PSA_MESSAGE_REMOVE_ENTRY_POINT.BLOCK_FROM_CHAT;
    case 3:
      return p.PSA_MESSAGE_REMOVE_ENTRY_POINT.UNBLOCK_FROM_CONTACT_INFO;
    case 4:
      return p.PSA_MESSAGE_REMOVE_ENTRY_POINT.UNBLOCK_FROM_CHAT;
    case 5:
      return p.PSA_MESSAGE_REMOVE_ENTRY_POINT.UNBLOCK_FROM_PRIVACY_SETTINGS;
    case 6:
      return p.PSA_MESSAGE_REMOVE_ENTRY_POINT.ARCHIVE_FROM_CHAT_LIST;
    case 7:
      return p.PSA_MESSAGE_REMOVE_ENTRY_POINT.ARCHIVE_FROM_DELETE_OPTION;
    case 8:
      return p.PSA_MESSAGE_REMOVE_ENTRY_POINT.UNARCHIVE_FROM_ARCHIVED_CHAT_LIST;
    case 9:
      return p.PSA_MESSAGE_REMOVE_ENTRY_POINT.CLEAR_FROM_CONTACT_INFO;
    case 10:
      return p.PSA_MESSAGE_REMOVE_ENTRY_POINT.CLEAR_FROM_CHAT_LIST;
    case 11:
      return p.PSA_MESSAGE_REMOVE_ENTRY_POINT.DELETE_ALL_FROM_CHAT_LIST;
    case 12:
      return p.PSA_MESSAGE_REMOVE_ENTRY_POINT.DELETE_ALL_FROM_CONTACT_INFO;
    case 13:
      return p.PSA_MESSAGE_REMOVE_ENTRY_POINT.DELETE_ALL_FROM_CONVERSATION;
    case 14:
      return p.PSA_MESSAGE_REMOVE_ENTRY_POINT.CLEAR_FROM_CONVERSATION;
  }
}