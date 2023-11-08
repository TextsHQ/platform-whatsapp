Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBlockEntryPointFromSpamFlow = function (e) {
  switch (e) {
    case i.SpamFlow.OverflowMenuReport:
      return r.BlockEntryPoint.OverflowMenuReport;
    case i.SpamFlow.MediaViewer:
      return r.BlockEntryPoint.MediaViewer;
    case i.SpamFlow.MessageMenu:
      return r.BlockEntryPoint.MessageMenu;
    case i.SpamFlow.AccountInfoReport:
      return r.BlockEntryPoint.AccountInfoReport;
    case i.SpamFlow.OneToOneChatSpamBannerReport:
      return r.BlockEntryPoint.OneToOneChatSpamBannerReport;
    case i.SpamFlow.ChatFmxCardSafetyToolsReport:
      return r.BlockEntryPoint.ChatFmxCardSafetyToolsReport;
    case i.SpamFlow.ChatFmxCardSafetyToolsReportSuspicious:
      return r.BlockEntryPoint.ChatFmxCardSafetyToolsReportSuspicious;
    default:
      return null;
  }
};
exports.getBlockEventMetricFromBlockEntryPoint = function (e) {
  if (e == null) {
    return a.BLOCK_ENTRY_POINT.OTHER;
  }
  switch (e) {
    case r.BlockEntryPoint.OneToOneOldSpamBannerBlock:
      return a.BLOCK_ENTRY_POINT.ONE_TO_ONE_OLD_SPAM_BANNER_BLOCK;
    case r.BlockEntryPoint.OneToOneSpamBannerBlock:
      return a.BLOCK_ENTRY_POINT.ONE_TO_ONE_SPAM_BANNER_BLOCK;
    case r.BlockEntryPoint.AccountInfo:
      return a.BLOCK_ENTRY_POINT.ACCOUNT_INFO;
    case r.BlockEntryPoint.AccountInfoReport:
      return a.BLOCK_ENTRY_POINT.ACCOUNT_INFO_REPORT;
    case r.BlockEntryPoint.BizOldSpamBannerBlock:
      return a.BLOCK_ENTRY_POINT.BIZ_OLD_SPAM_BANNER_BLOCK;
    case r.BlockEntryPoint.BizSpamBannerBlock:
      return a.BLOCK_ENTRY_POINT.BIZ_SPAM_BANNER_BLOCK;
    case r.BlockEntryPoint.BlockHeaderChat:
      return a.BLOCK_ENTRY_POINT.BLOCK_HEADER_CHAT;
    case r.BlockEntryPoint.CallLog:
      return a.BLOCK_ENTRY_POINT.CALL_LOG;
    case r.BlockEntryPoint.Chat:
      return a.BLOCK_ENTRY_POINT.CHAT;
    case r.BlockEntryPoint.ChatListBlock:
      return a.BLOCK_ENTRY_POINT.CHAT_LIST_BLOCK;
    case r.BlockEntryPoint.ChatListContextMenuBlock:
      return a.BLOCK_ENTRY_POINT.CHAT_LIST_CONTEXT_MENU_BLOCK;
    case r.BlockEntryPoint.ChatListNoInsubBlock:
      return a.BLOCK_ENTRY_POINT.CHAT_LIST_NOINSUB_BLOCK;
    case r.BlockEntryPoint.NotificationBlock:
      return a.BLOCK_ENTRY_POINT.NOTIFICATION_BLOCK;
    case r.BlockEntryPoint.OverflowMenuBlock:
      return a.BLOCK_ENTRY_POINT.OVERFLOW_MENU_BLOCK;
    case r.BlockEntryPoint.OverflowMenuReport:
      return a.BLOCK_ENTRY_POINT.OVERFLOW_MENU_REPORT;
    case r.BlockEntryPoint.Profile:
      return a.BLOCK_ENTRY_POINT.PROFILE;
    case r.BlockEntryPoint.TriggeredBlock:
      return a.BLOCK_ENTRY_POINT.TRIGGERED_BLOCK;
    case r.BlockEntryPoint.BlockList:
      return a.BLOCK_ENTRY_POINT.BLOCK_LIST;
    case r.BlockEntryPoint.MediaViewer:
      return a.BLOCK_ENTRY_POINT.MEDIA_VIEWER;
    case r.BlockEntryPoint.MessageMenu:
      return a.BLOCK_ENTRY_POINT.MESSAGE_MENU;
    case r.BlockEntryPoint.OneToOneChatSpamBannerReport:
      return a.BLOCK_ENTRY_POINT.ONE_TO_ONE_SPAM_BANNER_REPORT;
    case r.BlockEntryPoint.StatusPostReport:
      return a.BLOCK_ENTRY_POINT.STATUS_POST_REPORT;
    case r.BlockEntryPoint.ChatFmxCardBlock:
      return a.BLOCK_ENTRY_POINT.CHAT_FMX_CARD_BLOCK;
    case r.BlockEntryPoint.ChatFmxCardBlockSuspicious:
      return a.BLOCK_ENTRY_POINT.CHAT_FMX_CARD_BLOCK_SUSPICIOUS;
    case r.BlockEntryPoint.ChatFmxCardSafetyToolsBlock:
      return a.BLOCK_ENTRY_POINT.CHAT_FMX_CARD_SAFETY_TOOLS_BLOCK;
    case r.BlockEntryPoint.ChatFmxCardSafetyToolsBlockSuspicious:
      return a.BLOCK_ENTRY_POINT.CHAT_FMX_CARD_SAFETY_TOOLS_BLOCK_SUSPICIOUS;
    case r.BlockEntryPoint.ChatFmxCardSafetyToolsReport:
      return a.BLOCK_ENTRY_POINT.CHAT_FMX_CARD_SAFETY_TOOLS_REPORT;
    case r.BlockEntryPoint.ChatFmxCardSafetyToolsReportSuspicious:
      return a.BLOCK_ENTRY_POINT.CHAT_FMX_CARD_SAFETY_TOOLS_REPORT_SUSPICIOUS;
    default:
      return a.BLOCK_ENTRY_POINT.OTHER;
  }
};
exports.getBlockPsaRemoveEntryPointFromBlockEntryPoint = function (e) {
  switch (e) {
    case r.BlockEntryPoint.Profile:
      return 1;
    case r.BlockEntryPoint.ChatListBlock:
      return 2;
    case r.BlockEntryPoint.BlockList:
      return 1;
    default:
      return null;
  }
};
exports.getSpamFlowFromBlockEntryPoint = function (e) {
  switch (e) {
    case r.BlockEntryPoint.OneToOneOldSpamBannerBlock:
    case r.BlockEntryPoint.BizOldSpamBannerBlock:
      return i.SpamFlow.OneToOneOldSpamBannerBlock;
    case r.BlockEntryPoint.BizSpamBannerBlock:
      return i.SpamFlow.BizSpamBannerBlock;
    case r.BlockEntryPoint.ChatListBlock:
      return i.SpamFlow.ChatListBlock;
    case r.BlockEntryPoint.ChatListNoInsubBlock:
      return i.SpamFlow.ChatListNoInsubBlock;
    case r.BlockEntryPoint.NotificationBlock:
      return i.SpamFlow.NotificationBlock;
    case r.BlockEntryPoint.OverflowMenuBlock:
      return i.SpamFlow.OverflowMenuBlock;
    default:
      return i.SpamFlow.Block;
  }
};
exports.getUnblockPsaRemoveEntryPointFromBlockEntryPoint = function (e) {
  switch (e) {
    case r.BlockEntryPoint.Profile:
      return 3;
    case r.BlockEntryPoint.ChatListBlock:
      return 4;
    case r.BlockEntryPoint.BlockList:
      return 5;
    default:
      return null;
  }
};
var r = require("./400436.js");
var i = require("./453603.js");
var a = require("./13370.js");