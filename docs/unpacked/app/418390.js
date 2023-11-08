var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewsletterMessageDeliveryUpdate = undefined;
var i = require("./481173.js");
var a = r(require("./565754.js"));
class o extends i.BaseModel {
  constructor() {
    super(...arguments);
    this.id = (0, i.prop)();
    this.serverId = (0, i.prop)();
    this.msgModel = (0, i.prop)();
    this.code = (0, i.prop)();
    this.t = (0, i.prop)();
  }
  initialize() {
    super.initialize();
  }
}
o.Proxy = "newsletter_message_update";
o.idClass = a.default;
const s = (0, i.defineModel)(o);
exports.NewsletterMessageDeliveryUpdate = s;