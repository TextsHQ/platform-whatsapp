Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var a = require("./219298.js");
var r = require("./374278.js");
var o = require("../app/481173.js");
class l extends o.BaseModel {
  constructor() {
    super(...arguments);
    this.isMicrophoneAvailable = (0, o.prop)(false);
    this.isSpeakerAvailable = (0, o.prop)(false);
    this.isVideoAvailable = (0, o.prop)(false);
  }
  initialize() {
    super.initialize();
  }
  refreshDeviceList(e) {
    this._deviceList = e;
    this.isVideoAvailable = (0, r.getAvailableDevices)(e, a.AVDeviceType.Video).length > 0;
    this.isMicrophoneAvailable = (0, r.getAvailableDevices)(e, a.AVDeviceType.AudioInput).length > 0;
    this.isSpeakerAvailable = (0, r.getAvailableDevices)(e, a.AVDeviceType.AudioOutput).length > 0;
  }
}
var i = new ((0, o.defineModel)(l))();
exports.default = i;