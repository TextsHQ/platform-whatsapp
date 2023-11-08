var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decodeBytes = function (e) {
  if (e) {
    return (0, i.encodeB64)(e);
  } else {
    return undefined;
  }
};
exports.decodeUrl = function (e) {
  if (e && !e.includes("/u/")) {
    return e;
  } else {
    return undefined;
  }
};
exports.parseInviteGrpType = function (e) {
  switch (e) {
    case s.Message$ExtendedTextMessage$InviteLinkGroupType.PARENT:
      return a.GroupType.COMMUNITY;
    case s.Message$ExtendedTextMessage$InviteLinkGroupType.SUB:
      return a.GroupType.LINKED_SUBGROUP;
    case s.Message$ExtendedTextMessage$InviteLinkGroupType.DEFAULT_SUB:
      return a.GroupType.LINKED_ANNOUNCEMENT_GROUP;
    default:
      return a.GroupType.DEFAULT;
  }
};
exports.shouldLogE2eProtoValidation = u;
exports.validateRequiredMediaProperties = function (e, t) {
  if (!u(e, t)) {
    return;
  }
  const n = e.type;
  if (!(0, o.isMediaCryptoExpectedForMsg)(e)) {
    return void (t.directPath == null && (__LOG__(2, undefined, undefined, true)`directPath missing from msg type ${n}`, SEND_LOGS(`${n}-unencrypted-message-missing-direct-path`)));
  }
  if (t.directPath == null && t.fileEncSha256 == null) {
    __LOG__(2, undefined, undefined, true)`directPath and fileEncSha256 missing from msg type ${n}`;
    SEND_LOGS(`${n}-message-missing-direct-path-and-file-enc`);
  } else if (t.directPath == null) {
    __LOG__(2, undefined, undefined, true)`directPath missing from msg type ${n}`;
    SEND_LOGS(`${n}-message-missing-direct-path`);
  } else if (t.fileEncSha256 == null) {
    __LOG__(2, undefined, undefined, true)`fileEncSha256 missing from msg type ${n}`;
    SEND_LOGS(`${n}-message-missing-file-enc`);
  }
  if (t.url == null) {
    __LOG__(2, undefined, undefined, true)`url(deprecatedMms3Url) is missing from msg type ${n}`;
    SEND_LOGS(`${n}-message-missing-mms3-url`);
  }
  if (t.mediaKey == null) {
    __LOG__(2, undefined, undefined, true)`mediaKey is missing from msg type ${n}`;
    SEND_LOGS(`${n}-message-missing-media-key`);
  }
};
var i = require("./417405.js");
var a = require("./862159.js");
var o = require("./86595.js");
var s = require("./533494.js");
var l = r(require("./124928.js"));
function u(e, t) {
  var n;
  return !(Math.random() > 0.001) && !!e.id && (((n = e.id.remote) === null || n === undefined ? undefined : n.user) !== "status" || !l.default.isPSA(e.author) || t.staticUrl != null);
}