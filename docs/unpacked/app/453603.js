Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpamFlow = exports.SPAM_REPORT_SUPPORTED_MESSAGE_TYPES = undefined;
var r = require("./373070.js");
const i = Object.freeze({
  Block: "block_dialog",
  OverflowMenuBlock: "overflow_menu_block",
  OverflowMenuReport: "overflow_menu_report",
  MediaViewer: "media_viewer",
  MessageMenu: "message_menu",
  CommunityHome: "community_home",
  AccountInfoReport: "account_info_report",
  GroupInfoReport: "group_info_report",
  GroupSpamBannerReport: "group_spam_banner_report",
  OneToOneChatSpamBannerReport: "1_1_spam_banner_report",
  OneToOneOldSpamBannerBlock: "1_1_old_spam_banner_block",
  BizSpamBannerBlock: "biz_spam_banner_block",
  ChatListBlock: "chat_list_block",
  ChatListNoInsubBlock: "chat_list_noinsub_block",
  NotificationBlock: "notification_block",
  StatusPostReport: "status_post_report",
  NewsletterInfoReport: "newsletter_info_report",
  ChatFmxCardSafetyToolsReport: "chat_fmx_card_safety_tools_report",
  ChatFmxCardSafetyToolsReportSuspicious: "chat_fmx_card_safety_tools_report_suspicious"
});
exports.SpamFlow = i;
const a = new Set([r.MSG_TYPE.CHAT, r.MSG_TYPE.AUDIO, r.MSG_TYPE.IMAGE, r.MSG_TYPE.PTT, r.MSG_TYPE.VIDEO, r.MSG_TYPE.VCARD, r.MSG_TYPE.UNKNOWN, r.MSG_TYPE.CIPHERTEXT, r.MSG_TYPE.LIST, r.MSG_TYPE.LIST_RESPONSE, r.MSG_TYPE.BUTTONS_RESPONSE, r.MSG_TYPE.NATIVE_FLOW, r.MSG_TYPE.DOCUMENT, r.MSG_TYPE.STICKER, r.MSG_TYPE.LOCATION, r.MSG_TYPE.POLL_CREATION, r.MSG_TYPE.STATUS_V3]);
exports.SPAM_REPORT_SUPPORTED_MESSAGE_TYPES = a;