var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logPinInChatMessageSend = function (e, t, n) {
  var a;
  const o = n.isGroup;
  let l;
  let u;
  if (o) {
    const e = (0, r.default)(n.groupMetadata, "chat.groupMetadata");
    l = h(e.groupType);
    u = g(e.participants.iAmAdmin());
  }
  new i.PinInChatMessageSendWamEvent({
    pinInChatType: m((0, r.default)(e.pinMessageType, "msg.pinMessageType")),
    isAGroup: o,
    groupTypeClient: l,
    groupRole: u,
    mediaType: t.getWamMediaType(),
    pinInChatExpirySecs: (a = e.pinExpiryDuration) !== null && a !== undefined ? a : 0
  }).commit();
};
exports.logPinInChatTapOnBanner = function (e, t, n) {
  const a = t.isGroup;
  let o;
  let i;
  let u;
  if (a) {
    const e = (0, r.default)(t.groupMetadata, "chat.groupMetadata");
    o = h(e.groupType);
    i = g(e.participants.iAmAdmin());
    u = e.participants.length;
  }
  new l.PinInChatInteractionWamEvent({
    pinInChatInteractionType: d.PIN_IN_CHAT_INTERACTION_TYPE.TAP_ON_BANNER,
    isAGroup: a,
    groupTypeClient: o,
    groupRole: i,
    groupSize: u,
    mediaType: e == null ? undefined : e.getWamMediaType(),
    pinCount: n
  }).commit();
};
var r = a(require("../app/670983.js"));
var o = require("../app/862159.js");
var l = require("./270853.js");
var i = require("./980989.js");
var u = require("../app/533494.js");
var s = require("./607566.js");
var c = require("../app/560588.js");
var d = require("./273210.js");
var f = require("./771092.js");
var p = a(require("../app/556869.js"));
function m(e) {
  switch (e) {
    case u.Message$PinInChatMessage$Type.PIN_FOR_ALL:
      return f.PIN_IN_CHAT_TYPE.PIN_FOR_ALL;
    case u.Message$PinInChatMessage$Type.UNPIN_FOR_ALL:
      return f.PIN_IN_CHAT_TYPE.UNPIN_FOR_ALL;
    default:
      throw (0, p.default)(`Unsupported pin message type: ${e}`);
  }
}
function h(e) {
  switch (e) {
    case o.GroupType.DEFAULT:
      return c.GROUP_TYPE_CLIENT.REGULAR_GROUP;
    case o.GroupType.LINKED_SUBGROUP:
      return c.GROUP_TYPE_CLIENT.SUB_GROUP;
    case o.GroupType.LINKED_ANNOUNCEMENT_GROUP:
      return c.GROUP_TYPE_CLIENT.DEFAULT_SUB_GROUP;
    case o.GroupType.COMMUNITY:
      return c.GROUP_TYPE_CLIENT.PARENT_GROUP;
    case o.GroupType.LINKED_GENERAL_GROUP:
      return c.GROUP_TYPE_CLIENT.SUB_GROUP;
  }
}
function g(e) {
  if (e) {
    return s.GROUP_ROLE_TYPE.ADMIN;
  } else {
    return s.GROUP_ROLE_TYPE.MEMBER;
  }
}