var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageSendReporter = undefined;
exports.createMessageSendMetricReporter = function (e) {
  let {
    messageIsInvisible: t
  } = e;
  const n = new u.MessageSendWamEvent({
    messageIsInvisible: t
  });
  return {
    setGroupData(e) {
      if (e.isLid != null) {
        n.isLid = e.isLid;
      }
      if (e.wamTypeOfGroup != null) {
        n.typeOfGroup = e.wamTypeOfGroup;
      }
      if (e.participantCount != null) {
        n.participantCount = e.participantCount;
      }
      if (e.deviceCount != null) {
        n.deviceCount = e.deviceCount;
      }
      if (e.deviceSizeBucket != null) {
        n.deviceSizeBucket = e.deviceSizeBucket;
      }
    },
    post() {
      n.markMessageSendT();
      n.commit();
    }
  };
};
var i = r(require("./670983.js"));
var a = require("./287461.js");
var o = require("./177938.js");
var s = require("./986750.js");
var l = require("./656134.js");
var u = require("./230268.js");
var c = require("./97858.js");
var d = require("./787742.js");
var p = require("./373070.js");
var f = require("./782781.js");
var _ = require("./616615.js");
var g = require("./684290.js");
var m = require("./243703.js");
var h = require("./804974.js");
var y = require("./718451.js");
var E = require("./564066.js");
var S = require("./869513.js");
var v = require("./816793.js");
var T = r(require("./342310.js"));
exports.MessageSendReporter = class {
  constructor(e, t) {
    this._isPosted = false;
    this._editMediaType = g.MEDIA_TYPE.NONE;
    this._wid = (0, i.default)(e.to, "msg.to");
    let n = Boolean(e.caption);
    if ((0, c.documentWithCaptionsSendEnabled)() && e.type === p.MSG_TYPE.DOCUMENT) {
      n = (0, d.getIsCaptionByUser)(e);
    }
    this._metric = new u.MessageSendWamEvent({
      messageType: (0, v.getWamMessageType)(e),
      messageMediaType: (0, v.getWamMediaType)(e),
      mediaCaptionPresent: n,
      fastForwardEnabled: true,
      messageIsFanout: true,
      messageIsForward: Boolean(e.isForwarded),
      messageIsRevoke: Boolean((0, d.getIsRevoke)(e)),
      isViewOnce: Boolean(e.isViewOnce),
      isAReply: (0, d.getIsReply)(e),
      e2eBackfill: Boolean(t == null ? undefined : t.isResend),
      messageDistributionType: m.MESSAGE_DISTRIBUTION_ENUM_TYPE.REGULAR_MESSAGE,
      editType: (0, d.getWamEditType)(e)
    });
    if (e.ephemeralDuration != null) {
      this._metric.ephemeralityDuration = e.ephemeralDuration;
    }
    if (!(0, d.getIsGroupMsg)(e) && !(0, d.getIsNewsletterMsg)(e)) {
      this._metric.isLid = this._wid.isLid();
      const t = (0, l.getEphemeralDurationForUser)(o.ContactCollection.getMeContact());
      if (t != null) {
        this._metric.senderDefaultDisappearingDuration = t;
      }
      if ((0, a.getABPropConfigValue)("dm_initiator_trigger")) {
        const t = (0, d.getWamDisappearingModeTrigger)(e);
        if (t != null) {
          this._metric.ephemeralityTriggerAction = t;
        }
        const n = (0, d.getWamDisappearingModeInitiatedByMe)(e);
        if (n != null) {
          this._metric.ephemeralityInitiator = n;
        }
      }
      const n = (0, l.getEphemeralDurationForUser)(o.ContactCollection.get(this._wid));
      if (n != null) {
        this._metric.receiverDefaultDisappearingDuration = n;
      }
    }
    if ((0, d.getIsRevoke)(e)) {
      this._metric.revokeType = e.subtype === "admin_revoke" ? E.REVOKE_TYPE.ADMIN : E.REVOKE_TYPE.SENDER;
      const t = (0, d.getRevokeDuration)(e);
      if (t != null) {
        this._metric.revokeDuration = t;
      }
    }
    if ((0, d.getIsEditProtocolMsg)(e)) {
      const n = (0, i.default)(t == null ? undefined : t.originalMessage, "options?.originalMessage");
      this._metric.editDuration = (0, d.getT)(e) - (0, d.getT)(n);
      this._editMediaType = n.getWamMediaType();
    }
    const r = (0, d.getWamDisappearingModeInitiator)(e);
    if (r != null) {
      this._metric.disappearingChatInitiator = r;
    }
    const s = (0, v.getWamAgentEngagementType)(e);
    if (s != null) {
      this._metric.agentEngagementType = s;
    }
    if ((t == null ? undefined : t.groupData) != null) {
      this.setGroupData(t.groupData);
    }
  }
  setDeviceCount(e) {
    this._metric.deviceCount = (0, S.capCount)(e);
    this._metric.deviceSizeBucket = (0, T.default)(e);
  }
  setGroupData(e) {
    if (e.isLid != null) {
      this._metric.isLid = e.isLid;
    }
    if (e.wamTypeOfGroup != null) {
      this._metric.typeOfGroup = e.wamTypeOfGroup;
    }
    if (e.participantCount != null) {
      this._metric.participantCount = e.participantCount;
    }
    if (e.deviceCount != null) {
      this._metric.deviceCount = e.deviceCount;
    }
    if (e.deviceSizeBucket != null) {
      this._metric.deviceSizeBucket = e.deviceSizeBucket;
    }
  }
  setMessageDistributionType(e) {
    this._metric.messageDistributionType = e;
  }
  setMessageIsFirstUserMessage(e) {
    this._metric.messageIsFirstUserMessage = e;
  }
  postSuccess() {
    this._metric.messageSendResult = h.MESSAGE_SEND_RESULT_TYPE.OK;
    this._metric.messageSendResultIsTerminal = false;
    this._post();
  }
  postFailure(e) {
    let {
      result: t,
      isTerminal: n
    } = e;
    this._metric.messageSendResult = t;
    this._metric.messageSendResultIsTerminal = n;
    this._metric.weight = 0;
    this._post();
  }
  _commitRevokeMessageSend() {
    new f.RevokeMessageSendWamEvent({
      messageSendResultIsTerminal: this._metric.messageSendResultIsTerminal,
      messageType: this._metric.messageType,
      resendCount: this._metric.resendCount,
      retryCount: this._metric.retryCount,
      revokeDuration: this._metric.revokeDuration,
      revokeType: this._metric.revokeType
    }).commit();
  }
  _commitEditMessageSend() {
    new s.EditMessageSendWamEvent({
      messageSendResultIsTerminal: this._metric.messageSendResultIsTerminal,
      messageType: this._metric.messageType,
      resendCount: this._metric.resendCount,
      retryCount: this._metric.retryCount,
      editType: this._metric.editType,
      editDuration: this._metric.editDuration,
      typeOfGroup: this._metric.typeOfGroup,
      mediaType: this._editMediaType
    }).commit();
  }
  _post() {
    if (this._isPosted) {
      __LOG__(3)`MessageSendReporter: skip posting, metric has already been posted`;
    } else {
      this._isPosted = true;
      this._metric.markMessageSendT();
      this._metric.commit();
      if (this._metric.messageIsRevoke && this._metric.messageType !== y.MESSAGE_TYPE.STATUS) {
        this._commitRevokeMessageSend();
      }
      if (this._metric.editType !== _.EDIT_TYPE.NOT_EDITED) {
        this._commitEditMessageSend();
      }
    }
  }
};