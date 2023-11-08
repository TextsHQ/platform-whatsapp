Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logCancelEvent = function () {
  let e = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
  const t = new a.QuickReplyWamEvent({
    quickReplyAction: r.QUICK_REPLY_ACTION.ACTION_CHAT_CLICK_CANCEL,
    quickReplyEntryPoint: e ? o.QUICK_REPLY_ENTRY_POINT.QUICK_REPLY_ENTRY_POINT_ATTACHMENT_PANEL : o.QUICK_REPLY_ENTRY_POINT.QUICK_REPLY_ENTRY_POINT_KEYBOARD
  });
  t.commit();
};
exports.logFilterEvent = function (e) {
  let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
  const n = new a.QuickReplyWamEvent({
    quickReplyAction: r.QUICK_REPLY_ACTION.ACTION_CHAT_IMPRESSION,
    quickReplyCount: e,
    quickReplyEntryPoint: t ? o.QUICK_REPLY_ENTRY_POINT.QUICK_REPLY_ENTRY_POINT_ATTACHMENT_PANEL : o.QUICK_REPLY_ENTRY_POINT.QUICK_REPLY_ENTRY_POINT_KEYBOARD
  });
  n.commit();
};
exports.logSelectEvent = function () {
  let e = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
  const t = new a.QuickReplyWamEvent({
    quickReplyAction: r.QUICK_REPLY_ACTION.ACTION_CHAT_CLICK,
    quickReplyKeywordMatched: false,
    quickReplyEntryPoint: e ? o.QUICK_REPLY_ENTRY_POINT.QUICK_REPLY_ENTRY_POINT_ATTACHMENT_PANEL : o.QUICK_REPLY_ENTRY_POINT.QUICK_REPLY_ENTRY_POINT_KEYBOARD
  });
  t.commit();
};
exports.logSmartDefaultSelectEvent = function () {
  let e = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
  const t = new a.QuickReplyWamEvent({
    quickReplyAction: r.QUICK_REPLY_ACTION.ACTION_SMART_DEFAULT_CLICK,
    quickReplyKeywordMatched: false,
    quickReplyEntryPoint: e ? o.QUICK_REPLY_ENTRY_POINT.QUICK_REPLY_ENTRY_POINT_ATTACHMENT_PANEL : o.QUICK_REPLY_ENTRY_POINT.QUICK_REPLY_ENTRY_POINT_KEYBOARD
  });
  t.commit();
};
var a = require("./236766.js");
var r = require("./962854.js");
var o = require("./476674.js");