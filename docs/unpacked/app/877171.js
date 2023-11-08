var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComposeBoxActions = undefined;
var i = r(require("./395654.js"));
var a = require("./163139.js");
class o extends i.default {
  focus(e) {
    const t = (0, a.unproxy)(e);
    if (t) {
      this.trigger("focus_" + t.id.toString());
    } else {
      this.trigger("focus");
    }
  }
  send(e) {
    const t = (0, a.unproxy)(e);
    this.trigger("send_" + t.id.toString());
  }
  paste(e, t, n) {
    if (e) {
      const r = (0, a.unproxy)(e);
      this.trigger("paste_" + r.id.toString(), t, n);
    } else {
      this.trigger("paste", t, n);
    }
  }
  sendPaste(e, t) {
    const n = (0, a.unproxy)(e);
    this.trigger("send_paste_" + n.id.toString(), t);
  }
  toggleQuickReplies() {
    this.trigger("toggle_quick_replies");
  }
  addMsgSendingLogAttributes(e, t) {
    this.trigger("add_sending_log_attributes_" + e.id.toString(), t);
  }
  setCtwaContextLinkData(e, t) {
    this.trigger("set_ctwa_context_link_data_" + e.id.toString(), t);
  }
}
const s = new o();
exports.ComposeBoxActions = s;