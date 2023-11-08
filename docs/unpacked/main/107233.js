Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t) {
  const n = e.id.toString();
  (0, o.useListener)(r.ComposeBoxActions, `focus_${n}`, t.onFocus);
  (0, o.useListener)(r.ComposeBoxActions, "focus", t.onFocus);
  (0, o.useListener)(r.ComposeBoxActions, `send_${n}`, t.onSend);
  (0, o.useListener)(r.ComposeBoxActions, `paste_${n}`, t.onPaste);
  (0, o.useListener)(r.ComposeBoxActions, "paste", t.onPaste);
  (0, o.useListener)(r.ComposeBoxActions, `send_paste_${n}`, t.onRoutedPaste);
  (0, o.useListener)(r.ComposeBoxActions, "toggle_quick_replies", t.onToggleQuickReplies);
  (0, o.useListener)(r.ComposeBoxActions, `add_sending_log_attributes_${n}`, t.onSendingLogAttributes);
  (0, o.useListener)(r.ComposeBoxActions, `set_ctwa_context_link_data_${n}`, t.onCtwaContextLinkData);
  (0, o.useListener)(a.Cmd, "textsize_change", t.onTextSizeChange);
};
var a = require("../app/780549.js");
var r = require("../app/877171.js");
var o = require("../app/808446.js");