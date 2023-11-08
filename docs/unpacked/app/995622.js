Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    json: t
  } = e;
  return {
    protocolMessage: {
      type: i.Message$ProtocolMessage$Type.EPHEMERAL_SYNC_RESPONSE,
      ephemeralExpiration: t.ephemeralDuration,
      ephemeralSettingTimestamp: t.ephemeralSettingTimestamp,
      disappearingMode: (0, r.disappearingModeInitiatorToProto)(t.disappearingModeInitiator, t.disappearingModeTrigger, t.disappearingModeInitiatedByMe)
    }
  };
};
var r = require("./974637.js");
var i = require("./533494.js");