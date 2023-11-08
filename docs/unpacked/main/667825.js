var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handlePlaceholderResendOperationRequestResponse = function (e, t) {
  if (!(0, m.isPlaceholderMessageResendEnabled)()) {
    return;
  }
  const n = t.length;
  __LOG__(2)`[rdu] Placeholder resend: Handle placeholder resend response results with length ${n}`;
  if (n === 0) {
    __LOG__(2)`[rdu] Placeholder resend: got empty response in result`;
    return void (0, c.logPlaceholderMessageResendResponse)(f.Message$PeerDataOperationRequestType.PLACEHOLDER_MESSAGE_RESEND, e, g.PEER_DATA_RESPONSE_APPLY_RESULT_TYPE.INVALID_RESPONSE, 0, 0, 0);
  }
  let a = 0;
  let y = 0;
  t.forEach(e => {
    try {
      const t = e.placeholderMessageResendResponse;
      if (t == null) {
        __LOG__(2)`[rdu] Placeholder resend: got null as placeholder message resend response in result`;
        return void y++;
      }
      const n = t.webMessageInfoBytes;
      if (n == null) {
        __LOG__(2)`[rdu] Placeholder resend: got null as web message info in result`;
        return void y++;
      }
      const a = (0, v.decodeProtobuf)(p.WebMessageInfoSpec, n);
      const c = [(0, d.parseWebMessageInfo)(a)];
      const f = function (e) {
        const t = (0, l.protobufToMsgKey)(e.key);
        const n = {
          externalId: t.id,
          ts: e.messageTimestamp != null ? (0, o.castLongIntToUnixTime)(e.messageTimestamp) : (0, o.unixTime)(),
          edit: -1,
          isHsm: false,
          count: null,
          pushname: e.pushName,
          displayName: null,
          senderPn: null,
          senderLid: null,
          recipientLid: null,
          recipientPn: null,
          category: null,
          offline: null
        };
        const a = (0, h.getMeUser)();
        let i;
        let s;
        i = t.remote.isGroup() ? t.remote : t.fromMe ? a : t.remote;
        if (e.participant != null) {
          s = (0, E.createWid)(e.participant);
        } else if (t.participant != null) {
          s = t.participant;
        }
        const c = e.userReceipt.map(e => (0, E.createUserWid)(e.userJid));
        if (i.isUser()) {
          if (c != null && c.length > 0) {
            if (!(0, h.isMeAccount)(i)) {
              __LOG__(2)`[rdu] Placeholder resend: failed to get message info as the message is not from me`;
              throw (0, _.default)("recipient on non peer chat message");
            }
            return (0, r.default)((0, r.default)({
              type: u.MESSAGE_TYPE.CHAT
            }, n), {}, {
              chat: c[0],
              author: i
            });
          }
          return (0, r.default)((0, r.default)({
            type: u.MESSAGE_TYPE.CHAT
          }, n), {}, {
            chat: (0, E.toUserWid)(i),
            author: i
          });
        }
        if (i.isGroup()) {
          if (s == null) {
            __LOG__(2)`[rdu] Placeholder resend: failed to get message info as group message with no participant`;
            throw (0, _.default)("group message with no participant");
          }
          return (0, r.default)((0, r.default)({
            type: u.MESSAGE_TYPE.GROUP
          }, n), {}, {
            chat: i,
            author: s,
            isDirect: false
          });
        }
        if (i.isBroadcast() && !i.isStatusV3()) {
          if (s == null) {
            __LOG__(2)`[rdu] Placeholder resend: failed to get message info as broadcast message with no participant`;
            throw (0, _.default)("broadcast message with no participant");
          }
          if ((0, h.isMeAccount)(s)) {
            return (0, r.default)((0, r.default)({
              type: u.MESSAGE_TYPE.PEER_BROADCAST
            }, n), {}, {
              chat: i,
              author: s,
              isDirect: false,
              bclParticipants: [],
              bclHashValidated: false,
              bclEphSettings: {}
            });
          } else {
            return (0, r.default)((0, r.default)({
              type: u.MESSAGE_TYPE.OTHER_BROADCAST
            }, n), {}, {
              chat: i,
              author: s,
              isDirect: false,
              ephSetting: null
            });
          }
        }
        if (i.isBroadcast() && i.isStatusV3()) {
          if (s == null) {
            __LOG__(2)`[rdu] Placeholder resend: failed to get message info as status message with no participant`;
            throw (0, _.default)("status message with no participant");
          }
          return (0, r.default)((0, r.default)({
            type: u.MESSAGE_TYPE.OTHER_STATUS
          }, n), {}, {
            chat: i,
            author: s,
            isDirect: false
          });
        }
        __LOG__(2)`[rdu] Placeholder resend: failed to recognize message type`;
        throw (0, _.default)("Unrecognized message type");
      }(a);
      const m = (0, s.placeholderCheck)(f) ? u.MessageOverwriteOption.PEER_RETRY : u.MessageOverwriteOption.NO_OVERWRITE;
      (0, i.processMsgs)({
        renderableMsgs: c,
        reparsing: false,
        bizInfo: {
          verifiedNameSerial: null,
          verifiedLevel: null,
          verifiedNameCert: null,
          privacyMode: null,
          nativeFlowName: null,
          campaignId: null
        },
        msgMeta: null,
        paymentInfo: a.paymentInfo,
        info: f,
        messageOverwriteOption: m
      });
    } catch (e) {
      __LOG__(4, undefined, new Error(), true)`[rdu] error: ${e}`;
      SEND_LOGS("placeholderResendResponse: error while handling response from placeholder resend request");
      return void y++;
    }
    a++;
  });
  (0, c.logPlaceholderMessageResendResponse)(f.Message$PeerDataOperationRequestType.PLACEHOLDER_MESSAGE_RESEND, e, y === 0 ? g.PEER_DATA_RESPONSE_APPLY_RESULT_TYPE.SUCCESS : g.PEER_DATA_RESPONSE_APPLY_RESULT_TYPE.OTHER_ERROR, n, a, y);
};
var r = a(require("../vendor/81109.js"));
var o = require("../app/632157.js");
var l = require("../app/974637.js");
var i = require("../app/143130.js");
var u = require("../app/257845.js");
var s = require("../app/267420.js");
var c = require("../app/588444.js");
var d = require("../app/75540.js");
var f = require("../app/533494.js");
var p = require("../app/968923.js");
var m = require("../app/142601.js");
var h = require("../app/459857.js");
var g = require("../app/814173.js");
var E = require("../app/669050.js");
var v = require("../app/394629.js");
var _ = a(require("../app/556869.js"));