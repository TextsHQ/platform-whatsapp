var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CIPHERTEXT_VERSION = undefined;
exports.encodeMaybeDecryptFail = function (e) {
  switch (e) {
    case s.DecryptFailType.Show:
      return a.DROP_ATTR;
    case s.DecryptFailType.Hide:
      return (0, a.CUSTOM_STRING)("hide");
  }
};
exports.encodeMaybeNativeFlowName = exports.encodeMaybeMediaType = undefined;
exports.getMetricE2eCiphertextType = function (e) {
  switch (e) {
    case s.CiphertextType.Skmsg:
      return _.E2E_CIPHERTEXT_TYPE.SENDER_KEY_MESSAGE;
    case s.CiphertextType.Pkmsg:
      return _.E2E_CIPHERTEXT_TYPE.PREKEY_MESSAGE;
    case s.CiphertextType.Msg:
      return _.E2E_CIPHERTEXT_TYPE.MESSAGE;
    case s.CiphertextType.Msmsg:
      return _.E2E_CIPHERTEXT_TYPE.MESSAGE_SECRET_MESSAGE;
  }
};
exports.getMetricE2eDestination = function (e) {
  if (e.isUser()) {
    return g.E2E_DESTINATION.INDIVIDUAL;
  }
  if (e.isGroup()) {
    return g.E2E_DESTINATION.GROUP;
  }
  if (e.isStatusV3()) {
    return g.E2E_DESTINATION.STATUS;
  }
  if (e.isBroadcast()) {
    return g.E2E_DESTINATION.LIST;
  }
  if (e.isNewsletter()) {
    return g.E2E_DESTINATION.CHANNEL;
  }
};
exports.getMetricEditType = function (e) {
  switch (e) {
    case o.EDIT_ATTR.SENDER_REVOKE:
      return m.EDIT_TYPE.SENDER_REVOKE;
    case o.EDIT_ATTR.ADMIN_REVOKE:
      return m.EDIT_TYPE.ADMIN_REVOKE;
    case o.EDIT_ATTR.MESSAGE_EDIT:
      return m.EDIT_TYPE.EDITED;
    default:
      return m.EDIT_TYPE.NOT_EDITED;
  }
};
exports.getMetricEditTypeFromMsg = function (e, t) {
  if ((0, p.isRevokeMsg)(e)) {
    if (t.subtype === "admin_revoke") {
      return m.EDIT_TYPE.ADMIN_REVOKE;
    } else {
      return m.EDIT_TYPE.SENDER_REVOKE;
    }
  }
  if ((0, p.isEditMsg)(e)) {
    return m.EDIT_TYPE.EDITED;
  } else {
    return m.EDIT_TYPE.NOT_EDITED;
  }
};
exports.getMetricMediaType = function (e) {
  let {
    encMediaType: t,
    msgType: n,
    msgPollType: r
  } = e;
  if (n === u.STANZA_MSG_TYPES.reaction) {
    return h.MEDIA_TYPE.REACTION;
  }
  if (r === u.POLL_TYPES.creation) {
    return h.MEDIA_TYPE.POLL_CREATE;
  }
  if (r === u.POLL_TYPES.vote) {
    return h.MEDIA_TYPE.POLL_VOTE;
  }
  if (t) {
    switch (t) {
      case s.EncMediaType.Image:
        return h.MEDIA_TYPE.PHOTO;
      case s.EncMediaType.Video:
        return h.MEDIA_TYPE.VIDEO;
      case s.EncMediaType.Ptv:
        return h.MEDIA_TYPE.PUSH_TO_VIDEO;
      case s.EncMediaType.Audio:
        return h.MEDIA_TYPE.AUDIO;
      case s.EncMediaType.Ptt:
        return h.MEDIA_TYPE.PTT;
      case s.EncMediaType.Location:
        return h.MEDIA_TYPE.LOCATION;
      case s.EncMediaType.VCard:
        return h.MEDIA_TYPE.CONTACT;
      case s.EncMediaType.Document:
        return h.MEDIA_TYPE.DOCUMENT;
      case s.EncMediaType.Url:
        return h.MEDIA_TYPE.URL;
      case s.EncMediaType.Call:
        return h.MEDIA_TYPE.CALL;
      case s.EncMediaType.Gif:
        return h.MEDIA_TYPE.GIF;
      case s.EncMediaType.Future:
        return h.MEDIA_TYPE.FUTURE;
      case s.EncMediaType.ContactArray:
        return h.MEDIA_TYPE.CONTACT_ARRAY;
      case s.EncMediaType.LiveLocation:
        return h.MEDIA_TYPE.LIVE_LOCATION;
      case s.EncMediaType.ProfilePic:
        return h.MEDIA_TYPE.PROFILE_PIC;
      case s.EncMediaType.Sticker:
        return h.MEDIA_TYPE.STICKER;
      case s.EncMediaType.Hsm:
        return h.MEDIA_TYPE.HSM;
      case s.EncMediaType.ProductImage:
        return h.MEDIA_TYPE.PRODUCT_IMAGE;
      case s.EncMediaType.Template:
        return h.MEDIA_TYPE.TEMPLATE;
      case s.EncMediaType.MdAppState:
        return h.MEDIA_TYPE.MD_APP_STATE;
      case s.EncMediaType.MdHistorySync:
        return h.MEDIA_TYPE.MD_HISTORY_SYNC;
      case s.EncMediaType.List:
        return h.MEDIA_TYPE.LIST;
      case s.EncMediaType.ListResponse:
        return h.MEDIA_TYPE.LIST_REPLY;
      case s.EncMediaType.Button:
        return h.MEDIA_TYPE.BUTTON_MESSAGE;
      case s.EncMediaType.ButtonResponse:
        return h.MEDIA_TYPE.BUTTON_RESPONSE_MESSAGE;
      case s.EncMediaType.Order:
        return h.MEDIA_TYPE.ORDER;
      case s.EncMediaType.Product:
        return h.MEDIA_TYPE.PRODUCT_IMAGE;
      case s.EncMediaType.NativeFlowResponse:
        return h.MEDIA_TYPE.INTERACTIVE_RESPONSE_NFM;
    }
  }
  return h.MEDIA_TYPE.NONE;
};
exports.getNonCriticalNotificationPriority = function (e) {
  if (e && (0, d.isOfflinePriorityBucketEnabled)()) {
    return i.JOB_PRIORITY.OFFLINE;
  }
  return i.JOB_PRIORITY.LOW;
};
exports.getPlaceholderAddReason = function (e) {
  if (e instanceof c.UnknownDeviceMessageError) {
    return y.PLACEHOLDER_REASON_TYPE.UNKNOWN_COMPANION_NO_PREKEY;
  }
  if (e instanceof f.SignalDecryptionError) {
    const t = 0.001;
    if ((0, l.isCryptoLibraryEnabled)()) {
      switch (e.message) {
        case "errSignalNoSession":
        case "errLoadSenderKeySession":
          return y.PLACEHOLDER_REASON_TYPE.SIGNAL_NO_SESSION;
        case "errSignalInvalidMsg":
          return y.PLACEHOLDER_REASON_TYPE.SIGNAL_INVALID_MESSAGE;
        case "errSignalInvalidKey":
          return y.PLACEHOLDER_REASON_TYPE.SIGNAL_INVALID_KEY;
        case "errSignalTooManyMessagesInFuture":
        case "errSignalGrpTooManyMessagesInFuture":
          return y.PLACEHOLDER_REASON_TYPE.SIGNAL_FUTURE_MESSAGE;
        case "errInvalidMacWithDecryptedPlaintext":
        case "errInvalidMacInvalidCipherKey":
        case "errInvalidMacInvalidCipherKeyNewChain":
          {
            const n = `MsgPlaceholderBadMac-${e.message}`;
            __LOG__(4, undefined, new Error(), true)`getPlaceholderAddReason SignalBadMac reason`;
            SEND_LOGS(n, t);
            return y.PLACEHOLDER_REASON_TYPE.SIGNAL_BAD_MAC;
          }
      }
    } else if (e.toString().includes("No session found to decrypt message")) {
      return y.PLACEHOLDER_REASON_TYPE.SIGNAL_NO_SESSION;
    }
    if ((0, l.isCryptoLibraryEnabled)()) {
      const n = `MsgPlaceholderOther-${e.message}`;
      __LOG__(4, undefined, new Error(), true)`getPlaceholderAddReason Other reason`;
      SEND_LOGS(n, t);
    }
    return y.PLACEHOLDER_REASON_TYPE.OTHER;
  }
};
exports.mediaTypeFromProtobuf = function e(t) {
  var n;
  if (t.deviceSentMessage) {
    const {
      message: n
    } = t.deviceSentMessage;
    if (n) {
      return e(n);
    } else {
      return null;
    }
  }
  if (t.ephemeralMessage) {
    const {
      message: n
    } = t.ephemeralMessage;
    if (n) {
      return e(n);
    } else {
      return null;
    }
  }
  if (t.groupMentionedMessage) {
    const {
      message: n
    } = t.groupMentionedMessage;
    if (n) {
      return e(n);
    } else {
      return null;
    }
  }
  if (t.viewOnceMessage) {
    const {
      message: n
    } = t.viewOnceMessage;
    if (n) {
      return e(n);
    } else {
      return null;
    }
  }
  if (t.documentWithCaptionMessage) {
    const {
      message: n
    } = t.documentWithCaptionMessage;
    if (n) {
      return e(n);
    } else {
      return null;
    }
  }
  if (t.botInvokeMessage) {
    const {
      message: n
    } = t.botInvokeMessage;
    if (n) {
      return e(n);
    } else {
      return null;
    }
  }
  if (t.imageMessage) {
    return s.EncMediaType.Image;
  }
  if (t.stickerMessage) {
    return s.EncMediaType.Sticker;
  }
  if (t.locationMessage) {
    if (t.locationMessage.isLive === true) {
      return s.EncMediaType.LiveLocation;
    } else {
      return s.EncMediaType.Location;
    }
  }
  if (t.contactMessage) {
    return s.EncMediaType.VCard;
  }
  if (t.contactsArrayMessage) {
    return s.EncMediaType.ContactArray;
  }
  if (t.documentMessage) {
    return s.EncMediaType.Document;
  }
  if (t.audioMessage) {
    if (t.audioMessage.ptt) {
      return s.EncMediaType.Ptt;
    } else {
      return s.EncMediaType.Audio;
    }
  }
  if (t.videoMessage) {
    if (t.videoMessage.gifPlayback) {
      return s.EncMediaType.Gif;
    } else {
      return s.EncMediaType.Video;
    }
  }
  if (t.ptvMessage) {
    return s.EncMediaType.Ptv;
  }
  if (t.buttonsMessage) {
    return s.EncMediaType.Button;
  }
  if (t.buttonsResponseMessage) {
    return s.EncMediaType.ButtonResponse;
  }
  if (t.listMessage) {
    return s.EncMediaType.List;
  }
  if (t.listResponseMessage) {
    return s.EncMediaType.ListResponse;
  }
  if (t.orderMessage) {
    return s.EncMediaType.Order;
  }
  if (t.productMessage) {
    return s.EncMediaType.Product;
  }
  if (t.groupInviteMessage) {
    return s.EncMediaType.Url;
  }
  if (t.interactiveResponseMessage) {
    return s.EncMediaType.NativeFlowResponse;
  }
  if (((n = t.extendedTextMessage) === null || n === undefined ? undefined : n.canonicalUrl) != null && t.extendedTextMessage.canonicalUrl.trim() !== "") {
    return s.EncMediaType.Url;
  }
  return null;
};
exports.nativeFlowNameTypeFromProtobuf = function (e) {
  var t;
  if (e.interactiveResponseMessage) {
    if ((t = e.interactiveResponseMessage.nativeFlowResponseMessage) === null || t === undefined) {
      return undefined;
    } else {
      return t.name;
    }
  } else {
    return null;
  }
};
var i = require("./775593.js");
var a = require("./716358.js");
var o = require("./402994.js");
var s = require("./303754.js");
var l = require("./492917.js");
var u = require("./883310.js");
var c = require("./177205.js");
var d = require("./724469.js");
var p = require("./608182.js");
var f = require("./91923.js");
var _ = require("./535480.js");
var g = require("./555678.js");
var m = require("./616615.js");
var h = require("./684290.js");
var y = require("./872044.js");
var E = r(require("./556869.js"));
function S(e) {
  return t => t == null ? a.DROP_ATTR : e(t);
}
exports.CIPHERTEXT_VERSION = 2;
const v = S(function (e) {
  const t = (() => {
    switch (e) {
      case s.EncMediaType.Image:
        return "image";
      case s.EncMediaType.Video:
        return "video";
      case s.EncMediaType.Ptv:
        return "ptv";
      case s.EncMediaType.Audio:
        return "audio";
      case s.EncMediaType.Ptt:
        return "ptt";
      case s.EncMediaType.VCard:
        return "vcard";
      case s.EncMediaType.Document:
        return "document";
      case s.EncMediaType.Gif:
        return "gif";
      case s.EncMediaType.ContactArray:
        return "contact_array";
      case s.EncMediaType.Location:
        return "location";
      case s.EncMediaType.LiveLocation:
        return "livelocation";
      case s.EncMediaType.Sticker:
        return "sticker";
      case s.EncMediaType.List:
        return "list";
      case s.EncMediaType.ListResponse:
        return "list_response";
      case s.EncMediaType.ButtonResponse:
        return "buttons_response";
      case s.EncMediaType.Order:
        return "order";
      case s.EncMediaType.Product:
        return "product";
      case s.EncMediaType.Url:
        return "url";
      case s.EncMediaType.NativeFlowResponse:
        return "native_flow_response";
      default:
        return null;
    }
  })();
  if (t) {
    return (0, a.CUSTOM_STRING)(t);
  }
  throw (0, E.default)("Unsupported type");
});
exports.encodeMaybeMediaType = v;
const T = S(e => (0, a.CUSTOM_STRING)(e));
exports.encodeMaybeNativeFlowName = T;