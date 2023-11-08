Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWamDisappearingModeInitiatedByMe = function () {
  let e = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
  if (Boolean(e)) {
    return a.EPHEMERALITY_INITIATOR_TYPE.INITIATED_BY_ME;
  }
  return a.EPHEMERALITY_INITIATOR_TYPE.INITIATED_BY_OTHER;
};
exports.getWamDisappearingModeInitiator = function (e) {
  switch (e) {
    case r.DisappearingModeInitiator.InitiatedByMe:
      return i.DISAPPEARING_CHAT_INITIATOR_TYPE.INITIATED_BY_ME;
    case r.DisappearingModeInitiator.InitiatedByOther:
      return i.DISAPPEARING_CHAT_INITIATOR_TYPE.INITIATED_BY_OTHER;
    case r.DisappearingModeInitiator.ChangedInChat:
      return i.DISAPPEARING_CHAT_INITIATOR_TYPE.CHAT;
  }
};
exports.getWamDisappearingModeTrigger = function (e) {
  switch (e) {
    case r.DisappearingModeTrigger.AccountSettings:
      return o.EPHEMERALITY_TRIGGER_ACTION_TYPE.ACCOUNT_SETTINGS;
    case r.DisappearingModeTrigger.ChatSettings:
      return o.EPHEMERALITY_TRIGGER_ACTION_TYPE.CHAT_SETTINGS;
    case r.DisappearingModeTrigger.BulkChange:
      return o.EPHEMERALITY_TRIGGER_ACTION_TYPE.BULK_CHANGE;
    case r.DisappearingModeTrigger.Unknown:
      return o.EPHEMERALITY_TRIGGER_ACTION_TYPE.UNKNOWN;
  }
};
var r = require("./448609.js");
var i = require("./987884.js");
var a = require("./420419.js");
var o = require("./891225.js");