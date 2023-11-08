Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ephemeralMessageTypes = undefined;
exports.getMsgEphemeralitySettings = function (e) {
  var t;
  if (e.ephemeralDuration == null && e.ephemeralSettingTimestamp == null && e.disappearingModeInitiator == null) {
    return null;
  }
  const n = (t = e.ephemeralDuration) !== null && t !== undefined ? t : 0;
  let i = e.ephemeralSettingTimestamp;
  let a = e.disappearingModeInitiator;
  const o = e.disappearingModeTrigger;
  const s = e.disappearingModeInitiatedByMe;
  if (e.subtype === "ephemeral_setting") {
    i = e.t;
    a = r.DisappearingModeInitiator.ChangedInChat;
  }
  return {
    duration: n,
    settingTimestamp: i,
    initiator: a,
    disappearingModeTrigger: o,
    initiatedByMe: s
  };
};
exports.messageSupportsEphemerality = function (e) {
  if (a.includes(e)) {
    return true;
  }
  return false;
};
var r = require("./448609.js");
var i = require("./373070.js");
const a = [i.MSG_TYPE.CHAT, i.MSG_TYPE.IMAGE, i.MSG_TYPE.VIDEO, i.MSG_TYPE.AUDIO, i.MSG_TYPE.PTT, i.MSG_TYPE.DOCUMENT, i.MSG_TYPE.PRODUCT, i.MSG_TYPE.STICKER, i.MSG_TYPE.POLL_CREATION];
exports.ephemeralMessageTypes = a;