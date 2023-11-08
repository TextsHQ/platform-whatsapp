Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getChatEphemeralityFields = function (e) {
  var t;
  const n = (0, i.unproxy)(e);
  if (n.ephemeralDuration == null && n.ephemeralSettingTimestamp == null && n.disappearingModeInitiator == null) {
    return null;
  }
  return {
    duration: (t = n.ephemeralDuration) !== null && t !== undefined ? t : 0,
    settingTimestamp: n.ephemeralSettingTimestamp,
    initiator: n.disappearingModeInitiator,
    disappearingModeTrigger: n.disappearingModeTrigger,
    initiatedByMe: n.disappearingModeInitiatedByMe
  };
};
exports.getDisappearingModeInitiatedByMe = function (e) {
  const t = (0, i.unproxy)(e);
  if (t.isGroup) {
    return null;
  }
  if (t.disappearingModeInitiatedByMe != null) {
    return t.disappearingModeInitiatedByMe;
  }
  return null;
};
exports.getDisappearingModeInitiator = function (e) {
  const t = (0, i.unproxy)(e);
  if (t.isGroup) {
    return null;
  }
  if (t.disappearingModeInitiator != null) {
    return t.disappearingModeInitiator;
  }
  if (o(t)) {
    return r.DisappearingModeInitiator.ChangedInChat;
  }
  return null;
};
exports.getDisappearingModeTrigger = function (e) {
  const t = (0, i.unproxy)(e);
  if (t.isGroup) {
    return null;
  }
  if (t.disappearingModeTrigger != null) {
    return t.disappearingModeTrigger;
  }
  if (o(t)) {
    return r.DisappearingModeTrigger.ChatSettings;
  }
  return null;
};
exports.getEphemeralSetting = a;
exports.getEphemeralSettingTimestamp = function (e) {
  const t = (0, i.unproxy)(e);
  if (t.isGroup) {
    return null;
  }
  if (t.ephemeralSettingTimestamp === 0) {
    return null;
  }
  return t.ephemeralSettingTimestamp;
};
exports.isEphemeralSettingOn = o;
exports.shouldShowEphemeralSetting = function (e) {
  const t = (0, i.unproxy)(e);
  if (t.isPSA) {
    return false;
  }
  if (t.id.isBot()) {
    return false;
  }
  if (t.isGroup) {
    var n;
    var r;
    const e = (n = t.groupMetadata) === null || n === undefined ? undefined : n.participants.getSuperAdmin();
    if (e == null ? undefined : e.contact.isEnterprise) {
      return false;
    }
    if (!((r = t.groupMetadata) === null || r === undefined ? undefined : r.canSetEphemeralSetting()) && !o(t)) {
      return false;
    }
  }
  if (t.isBroadcast) {
    return false;
  }
  if (t.contact.isEnterprise) {
    return false;
  }
  return true;
};
var r = require("./448609.js");
var i = require("./163139.js");
function a(e) {
  var t;
  const n = (0, i.unproxy)(e);
  const r = n.isGroup ? (t = n.groupMetadata) === null || t === undefined ? undefined : t.ephemeralDuration : n.ephemeralDuration;
  if (r == null || r === 0) {
    return null;
  } else if (r < 0) {
    __LOG__(3)`[ephemeral] invalid duration of ${r} for chat ${n.id.toLogString()}`;
    return null;
  } else {
    return r;
  }
}
function o(e) {
  const t = a((0, i.unproxy)(e));
  return t != null && t !== 0;
}