var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getInteractiveWamType = _;
exports.getMessageTypeFromMsgInfoType = function (e) {
  switch (e) {
    case "chat":
      return p.MESSAGE_TYPE.INDIVIDUAL;
    case "group":
      return p.MESSAGE_TYPE.GROUP;
    case "peer_broadcast":
    case "other_broadcast":
      return p.MESSAGE_TYPE.BROADCAST;
    case "direct_peer_status":
    case "other_status":
      return p.MESSAGE_TYPE.STATUS;
  }
};
exports.getWamAgentEngagementType = function (e) {
  if (e.id.remote.isBot()) {
    return u.AGENT_ENGAGEMENT_ENUM_TYPE.DIRECT_CHAT;
  }
  const t = (0, o.getIsBotQuery)(e);
  const n = (0, o.getIsMetaBotResponse)(e);
  if (t || n) {
    return u.AGENT_ENGAGEMENT_ENUM_TYPE.INVOKED;
  }
  return null;
};
exports.getWamE2eSenderType = function (e) {
  if (!(e instanceof f.default)) {
    return null;
  }
  if ((0, l.isMeAccount)(e)) {
    if (e.isCompanion()) {
      return c.E2E_SENDER_TYPE.MY_COMPANION;
    } else {
      return c.E2E_SENDER_TYPE.MY_PRIMARY;
    }
  }
  if (e.isCompanion()) {
    return c.E2E_SENDER_TYPE.OTHER_COMPANION;
  } else {
    return c.E2E_SENDER_TYPE.OTHER_PRIMARY;
  }
};
exports.getWamMediaType = function (e) {
  if (e.isDynamicReplyButtonsMsg === true) {
    return d.MEDIA_TYPE.BUTTON_MESSAGE;
  }
  switch (e.type) {
    case "image":
      return d.MEDIA_TYPE.PHOTO;
    case "video":
      if (e.isGif === true) {
        return d.MEDIA_TYPE.GIF;
      } else {
        return d.MEDIA_TYPE.VIDEO;
      }
    case "ptv":
      return d.MEDIA_TYPE.PUSH_TO_VIDEO;
    case "audio":
      return d.MEDIA_TYPE.AUDIO;
    case "ptt":
      return d.MEDIA_TYPE.PTT;
    case "document":
      return d.MEDIA_TYPE.DOCUMENT;
    case "unknown":
      return d.MEDIA_TYPE.FUTURE;
    case "location":
      if (e.isLive === true) {
        return d.MEDIA_TYPE.LIVE_LOCATION;
      } else {
        return d.MEDIA_TYPE.LOCATION;
      }
    case "vcard":
      return d.MEDIA_TYPE.CONTACT;
    case "multi_vcard":
      return d.MEDIA_TYPE.CONTACT_ARRAY;
    case "chat":
      if (e.matchedText != null) {
        if ((0, i.matchCatalogUrl)(e.matchedText)) {
          return d.MEDIA_TYPE.CATALOG_LINK;
        } else if ((0, i.matchProductUrl)(e.matchedText)) {
          return d.MEDIA_TYPE.PRODUCT_LINK;
        } else {
          return d.MEDIA_TYPE.URL;
        }
      } else {
        return d.MEDIA_TYPE.NONE;
      }
    case "sticker":
      return d.MEDIA_TYPE.STICKER;
    case "product":
      return d.MEDIA_TYPE.PRODUCT_IMAGE;
    case "list":
      var t;
      var n;
      switch ((t = (n = e.list) === null || n === undefined ? undefined : n.listType) !== null && t !== undefined ? t : s.Message$ListMessage$ListType.UNKNOWN) {
        case s.Message$ListMessage$ListType.SINGLE_SELECT:
          return d.MEDIA_TYPE.LIST;
        case s.Message$ListMessage$ListType.PRODUCT_LIST:
          return d.MEDIA_TYPE.PRODUCT_LIST;
        default:
          return d.MEDIA_TYPE.NONE;
      }
    case "list_response":
      return d.MEDIA_TYPE.LIST_REPLY;
    case "buttons_response":
      return d.MEDIA_TYPE.BUTTON_RESPONSE_MESSAGE;
    case "order":
      return d.MEDIA_TYPE.ORDER;
    case "interactive":
      return _(e.interactiveType);
    case "reaction":
    case "reaction_enc":
      return d.MEDIA_TYPE.REACTION;
    case "poll_creation":
      return d.MEDIA_TYPE.POLL_CREATE;
    case "poll_update":
      if (e.subtype === "poll_vote") {
        return d.MEDIA_TYPE.POLL_VOTE;
      } else {
        return d.MEDIA_TYPE.NONE;
      }
    case "keep_in_chat":
      if (e.keepType === s.KeepType.KEEP_FOR_ALL) {
        return d.MEDIA_TYPE.KEEP;
      } else {
        return d.MEDIA_TYPE.UNKEEP;
      }
    case "pin_message":
      return d.MEDIA_TYPE.PIN_IN_CHAT;
    case "protocol":
      if (e.subtype === "ephemeral_sync_response") {
        return d.MEDIA_TYPE.EPHEMERAL_SYNC_RESPONSE;
      } else {
        return d.MEDIA_TYPE.NONE;
      }
    case "biz-cover-photo":
    case "broadcast_notification":
    case "call_log":
    case "ciphertext":
    case "debug":
    case "e2e_notification":
    case "gp2":
    case "groups_v4_invite":
    case "hsm":
    case "interactive_response":
    case "native_flow":
    case "newsletter_notification":
    case "notification":
    case "notification_template":
    case "oversized":
    case "payment":
    case "pinned_message":
    case "request_phone_number":
    case "revoked":
    case "status_v3":
    case "template_button_reply":
    case "comment":
    case "history_bundle":
      return d.MEDIA_TYPE.NONE;
    default:
      e.type;
      return d.MEDIA_TYPE.NONE;
  }
};
exports.getWamMessageType = function (e) {
  if ((0, o.getIsStatusV3)(e)) {
    return p.MESSAGE_TYPE.STATUS;
  }
  if ((0, o.getIsGroupMsg)(e)) {
    return p.MESSAGE_TYPE.GROUP;
  }
  if (f.default.isBroadcast(e.id.remote)) {
    return p.MESSAGE_TYPE.BROADCAST;
  }
  if (f.default.isNewsletter(e.id.remote)) {
    return p.MESSAGE_TYPE.CHANNEL;
  }
  return p.MESSAGE_TYPE.INDIVIDUAL;
};
var i = require("./127714.js");
require("./257845.js");
var a = r(require("./182394.js"));
var o = require("./787742.js");
var s = require("./533494.js");
var l = require("./459857.js");
var u = require("./800277.js");
var c = require("./195222.js");
var d = require("./684290.js");
var p = require("./718451.js");
var f = r(require("./124928.js"));
function _(e) {
  if (e == null) {
    return d.MEDIA_TYPE.NONE;
  }
  switch (e) {
    case a.default.SHOPS_STOREFRONT:
      return d.MEDIA_TYPE.SHOP_STOREFRONT;
    case a.default.NATIVE_FLOW:
      return d.MEDIA_TYPE.INTERACTIVE_NFM;
    case a.default.CAROUSEL:
      return d.MEDIA_TYPE.INTERACTIVE_CAROUSEL;
  }
}