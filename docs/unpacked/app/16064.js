Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PremiumMessage = undefined;
var r = require("./481173.js");
var i = require("./61113.js");
var a = require("./128442.js");
class o extends r.BaseModel {
  constructor() {
    super(...arguments);
    this.id = (0, r.prop)();
    this.name = (0, r.prop)();
    this.type = (0, r.prop)();
    this.message = (0, r.prop)();
    this.isDeleted = (0, r.prop)();
    this.sentMessageIds = (0, r.prop)();
    this.mediaId = (0, r.prop)();
  }
  initialize() {
    super.initialize();
    this.listenTo(this, "change:message change:sentMessageIds change:type", this.hydrateMessages);
  }
  hydrateMessages() {
    i.MsgCollection.getModelsArray().filter(e => e.smbClientCampaignId === this.id).forEach(e => {
      (0, a.hydratePremiumMessage)(e, this);
    });
  }
}
o.Proxy = "premium_message";
const s = (0, r.defineModel)(o);
exports.PremiumMessage = s;