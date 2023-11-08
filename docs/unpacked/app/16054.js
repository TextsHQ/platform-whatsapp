var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendEphemeralSyncResponseReceiveWamEvent = function () {
  return _.apply(this, arguments);
};
exports.sendEphemeralSyncResponseSendErrorWamEvent = function () {
  return f.apply(this, arguments);
};
exports.sendEphemeralSyncResponseSendWamEvent = function () {
  return p.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./287461.js");
var o = require("./698867.js");
var s = require("./303857.js");
var l = require("./333881.js");
var u = require("./368935.js");
var c = require("./340587.js");
function d() {
  return (0, a.getABPropConfigValue)("dm_reliability_logging");
}
function p() {
  return (p = (0, i.default)(function* (e) {
    let {
      to: t,
      changes: n,
      incomingMsgSettings: r,
      localChatSettings: i,
      attempts: a
    } = e;
    if (!d()) {
      return;
    }
    const l = new u.EphemeralSyncResponseSendWamEvent({
      threadId: yield (0, o.getChatThreadID)(t.toJid()),
      esrSendResult: c.ESR_SEND_RESULT_TYPE.SUCCESS,
      isAGroup: false,
      esrDisappearingModeInitiator: (0, s.getWamDisappearingModeInitiator)(n.initiator),
      esrEphemeralityDuration: n.duration,
      esrEphemeralityInitiator: (0, s.getWamDisappearingModeInitiatedByMe)(n.initiatedByMe),
      esrEphemeralitySettingTimestamp: n.settingTimestamp,
      esrEphemeralityTriggerAction: (0, s.getWamDisappearingModeTrigger)(n.disappearingModeTrigger)
    });
    if (i != null) {
      if (i.initiator != null) {
        l.set({
          clientDisappearingModeInitiator: (0, s.getWamDisappearingModeInitiator)(i.initiator)
        });
      }
      if (i.disappearingModeTrigger != null) {
        l.set({
          clientEphemeralityTriggerAction: (0, s.getWamDisappearingModeTrigger)(i.disappearingModeTrigger)
        });
      }
      l.set({
        clientEphemeralityDuration: i.duration,
        clientEphemeralityInitiator: (0, s.getWamDisappearingModeInitiatedByMe)(i.initiatedByMe),
        clientEphemeralitySettingTimestamp: i.settingTimestamp
      });
    }
    if (r != null) {
      if (r.initiator != null) {
        l.set({
          messageDisappearingModeInitiator: (0, s.getWamDisappearingModeInitiator)(r.initiator)
        });
      }
      if (r.disappearingModeTrigger != null) {
        l.set({
          messageEphemeralityTriggerAction: (0, s.getWamDisappearingModeTrigger)(r.disappearingModeTrigger)
        });
      }
      l.set({
        messageEphemeralityDuration: r.duration,
        messageEphemeralityInitiator: (0, s.getWamDisappearingModeInitiatedByMe)(r.initiatedByMe),
        messageEphemeralitySettingTimestamp: r.settingTimestamp
      });
    }
    if (a != null) {
      l.set({
        esrSendAttempt: a
      });
    }
    l.commit();
  })).apply(this, arguments);
}
function f() {
  return (f = (0, i.default)(function* (e) {
    let {
      to: t,
      error: n,
      attempts: r
    } = e;
    if (!d()) {
      return;
    }
    const i = new u.EphemeralSyncResponseSendWamEvent({
      threadId: yield (0, o.getChatThreadID)(t.toJid()),
      esrFailureReason: n,
      esrSendResult: c.ESR_SEND_RESULT_TYPE.ERROR
    });
    if (r != null) {
      i.set({
        esrSendAttempt: r
      });
    }
    i.commit();
  })).apply(this, arguments);
}
function _() {
  return (_ = (0, i.default)(function* (e) {
    let {
      chat: t,
      incomingESRSettings: n,
      localChatSettings: r,
      failureReason: i
    } = e;
    if (!d()) {
      return;
    }
    const a = new l.EphemeralSyncResponseReceiveWamEvent({
      threadId: yield (0, o.getChatThreadID)(t.id.toJid()),
      isAGroup: false
    });
    if (n != null) {
      if (n.initiator != null) {
        a.set({
          esrDisappearingModeInitiator: (0, s.getWamDisappearingModeInitiator)(n.initiator)
        });
      }
      if (n.disappearingModeTrigger != null) {
        a.set({
          esrEphemeralityTriggerAction: (0, s.getWamDisappearingModeTrigger)(n.disappearingModeTrigger)
        });
      }
      a.set({
        esrEphemeralityDuration: n.duration,
        esrEphemeralityInitiator: (0, s.getWamDisappearingModeInitiatedByMe)(n.initiatedByMe),
        esrEphemeralitySettingTimestamp: n.settingTimestamp
      });
    }
    if (r != null) {
      if (r.initiator != null) {
        a.set({
          clientDisappearingModeInitiator: (0, s.getWamDisappearingModeInitiator)(r.initiator)
        });
      }
      if (r.disappearingModeTrigger != null) {
        a.set({
          clientEphemeralityTriggerAction: (0, s.getWamDisappearingModeTrigger)(r.disappearingModeTrigger)
        });
      }
      a.set({
        clientEphemeralityDuration: r.duration,
        clientEphemeralityInitiator: (0, s.getWamDisappearingModeInitiatedByMe)(r.initiatedByMe),
        clientEphemeralitySettingTimestamp: r.settingTimestamp
      });
    }
    if (i != null) {
      a.set({
        esrResolveResult: c.ESR_SEND_RESULT_TYPE.ERROR,
        esrFailureReason: i
      });
    } else {
      a.set({
        esrResolveResult: c.ESR_SEND_RESULT_TYPE.SUCCESS
      });
    }
    a.commit();
  })).apply(this, arguments);
}