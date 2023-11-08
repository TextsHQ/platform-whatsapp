var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConversationPanelActions = undefined;
var r = a(require("../app/395654.js"));
class o extends r.default {
  focus() {
    this.trigger("conversation_panel_focus");
  }
}
const l = new o();
exports.ConversationPanelActions = l;