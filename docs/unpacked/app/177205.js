Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isMessageDropValidationEnabled = exports.UnknownDeviceMessageError = exports.MessageValidationError = exports.MessageSentAckError = exports.MessageProtobufMismatchErrorCode = exports.MessageProtobufMismatchError = exports.MessageProtobufInvalidMessageTypes = exports.DeviceSentMessageError = exports.BizNodeValidationError = undefined;
var r = require("./477689.js");
var i = require("./287461.js");
var a = require("./711546.js");
var o = require("./630230.js");
var s = require("./751047.js");
class l extends (0, r.customError)("DeviceSentMessageError") {
  constructor(e, t) {
    if (t === o.DSM_ERROR.MISSING_DSM) {
      super("message should be deviceSentMessage");
    } else if (t === o.DSM_ERROR.INVALID_SENDER) {
      super("message should not be deviceSentMessage");
    } else if (t === o.DSM_ERROR.INVALID_DSM) {
      super("invalid deviceSentMessage");
    } else {
      super("unknown deviceSentMessage error");
    }
    new a.MdBadDeviceSentMessageWamEvent({
      peerType: e,
      dsmError: t
    }).commit();
    this.peerType = e;
    this.dsmError = t;
  }
}
exports.DeviceSentMessageError = l;
class u extends (0, r.customError)("UnknownDeviceMessageError") {}
exports.UnknownDeviceMessageError = u;
class c extends Error {
  constructor(e, t, n) {
    var r;
    super(typeof e == "string" ? e : String(e));
    this.name = "MessageValidationError";
    this.code = e;
    this.e2eFailureReason = t;
    this.sendLogs = (r = n == null ? undefined : n.sendLogs) === null || r === undefined || r;
  }
}
exports.MessageValidationError = c;
class d extends Error {
  constructor(e) {
    super(`Received Nack error code ${e != null ? e : ""} from Server on message sent`);
    this.name = "MessageSentAckError";
    this.ackErrorCode = e;
  }
}
exports.MessageSentAckError = d;
class p extends (0, r.customError)("BizNodeValidationError") {}
exports.BizNodeValidationError = p;
const f = require("../vendor/76672.js")({
  INVALID_POLL_UPDATE_STANZA: "poll_update_message_stanza_invalid",
  INVALID_REACTION_STANZA: "reaction_message_stanza_invalid",
  INVALID_PIN_IN_CHAT_STANZA: "pin_in_chat_message_stanza_invalid"
});
exports.MessageProtobufMismatchErrorCode = f;
exports.MessageProtobufMismatchError = class extends c {
  constructor(e) {
    super(e, s.E2E_FAILURE_REASON.MESSAGE_TYPE_MISMATCH);
    this.name = "MessageProtobufMismatchError";
  }
};
exports.MessageProtobufInvalidMessageTypes = class extends c {
  constructor(e) {
    super(`Received ${e.length} message keys: ${e.join(", ")}`, s.E2E_FAILURE_REASON.INVALID_NUMBER_OF_MESSAGE_TYPES);
    this.name = "MessageProtobufInvalidMessageTypes";
  }
};
exports.isMessageDropValidationEnabled = e => e === "outgoing" ? (0, i.getABPropConfigValue)("web_abort_building_e2e_proto_on_error") : e === "relay" && (0, i.getABPropConfigValue)("web_abort_decrypting_e2e_on_error");