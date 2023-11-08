Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("./481173.js");
class i extends r.BaseModel {
  constructor() {
    super(...arguments);
    this.id = (0, r.prop)();
    this.callId = (0, r.prop)();
    this.isIncoming = (0, r.prop)(false);
    this.isRinging = (0, r.prop)(false);
    this.isInterrupted = (0, r.prop)(false);
    this.isMuted = (0, r.prop)(false);
    this.isTrafficStopped = (0, r.prop)(false);
    this.isInvitingToGroupCall = (0, r.prop)(false);
    this.isVideoStopped = (0, r.prop)(false);
    this.isVideoPaused = (0, r.prop)(false);
    this.isVideoDecodePaused = (0, r.prop)(false);
    this.isVideoDecodeStarted = (0, r.prop)(false);
    this.isOfferingVideoUpgrade = (0, r.prop)(false);
  }
}
i.Proxy = "callParticipant";
var a = (0, r.defineModel)(i);
exports.default = a;