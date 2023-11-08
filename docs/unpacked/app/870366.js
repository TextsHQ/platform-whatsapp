var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapMsgStanzaToMsgData = g;
exports.mapNewsletterMsgToMsgData = function (e, t) {
  var n;
  let r = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
  let i = arguments.length > 3 ? arguments[3] : undefined;
  const {
    newsletterEditOrTextOrMediaOrRevokeOrPollCreationMixinGroup: a
  } = e;
  const {
    id: s,
    t: u,
    serverId: c
  } = e;
  const d = e.isSender === "true";
  const p = (n = e.newsletterViewsCountMixin) === null || n === undefined ? undefined : n.viewsCountCount;
  if (a == null) {
    return null;
  }
  switch (a.name) {
    case "NewsletterEdit":
    case "NewsletterText":
    case "NewsletterPollCreation":
    case "NewsletterMedia":
      {
        var _;
        var m;
        var h;
        const n = a.name === "NewsletterEdit" ? a.value.newsletterTextOrMediaMixinGroup.value.plaintextPayloadMixin.elementValue : a.value.plaintextPayloadMixin.elementValue;
        const l = ((_ = e.newsletterMessageLastEditTimestampMixin) === null || _ === undefined ? undefined : _.metaMsgEditT) != null ? (0, o.castToMillisTime)((m = e.newsletterMessageLastEditTimestampMixin) === null || m === undefined ? undefined : m.metaMsgEditT) : undefined;
        const y = a.name === "NewsletterEdit" ? (h = e.newsletterMessageOriginalTimestampMixin) === null || h === undefined ? undefined : h.metaOriginalMsgT : u;
        const E = a.name === "NewsletterPollCreation" ? "pollCreation" : "chat";
        if (s != null && y != null && n != null) {
          return g({
            id: s,
            from: t,
            fromMe: d,
            to: d ? t : (0, f.getMeUser)(),
            hasReaction: r,
            lastUpdateFromServerTs: i,
            serverId: c,
            t: y,
            payload: n,
            type: E,
            viewCount: p,
            isEdited: a.name === "NewsletterEdit",
            latestEditSenderTimestampMs: l
          }, "history");
        } else {
          return null;
        }
      }
    case "NewsletterRevoke":
      if (s != null && u != null) {
        return {
          id: new l.default({
            remote: t,
            fromMe: d,
            id: s
          }),
          from: t,
          t: u,
          serverId: c,
          lastUpdateFromServerTs: i != null ? i : undefined,
          type: "revoked",
          subtype: "admin"
        };
      } else {
        return null;
      }
    default:
      a.name;
      return null;
  }
};
var i = r(require("../vendor/81109.js"));
var a = require("./29797.js");
var o = require("./632157.js");
var s = require("./740293.js");
var l = r(require("./565754.js"));
var u = require("./373070.js");
var c = require("./916330.js");
var d = require("./367499.js");
var p = require("./533494.js");
var f = require("./459857.js");
var _ = require("./394629.js");
function g(e, t) {
  let {
    id: n,
    payload: r,
    from: o,
    serverId: f,
    t: g,
    to: m,
    type: h,
    isNewMsg: y,
    fromMe: E,
    reactionCode: S,
    addOnParentKey: v,
    hasReaction: T,
    lastUpdateFromServerTs: M,
    viewCount: A,
    latestEditSenderTimestampMs: b,
    isEdited: C,
    pollVotesAsLocalIds: P
  } = e;
  const O = new l.default({
    remote: o,
    fromMe: E,
    id: n
  });
  if (h === "reaction" && S != null && v != null && f != null) {
    return {
      id: O,
      reactionParentKey: v,
      type: u.MSG_TYPE.REACTION,
      t: g,
      from: o,
      serverId: f,
      self: "out",
      isNewMsg: false,
      ack: a.ACK.SENT,
      reactionText: S,
      reactionTimestamp: g * 1000
    };
  }
  if (h === "pollVote" && v != null && f != null) {
    return {
      id: O,
      t: g,
      from: o,
      serverId: f,
      self: "out",
      isNewMsg: false,
      ack: a.ACK.SENT,
      type: u.MSG_TYPE.POLL_UPDATE,
      subtype: "poll_vote",
      pollUpdateParentKey: v,
      selectedOptionLocalIds: P != null ? P : [],
      senderTimestampMs: g * 1000
    };
  }
  const I = (0, _.decodeProtobuf)(p.MessageSpec, r);
  const R = h === "revoke";
  const N = {
    from: o,
    t: g,
    to: m,
    latestEditMsgKey: C === true ? O : undefined,
    serverId: f,
    id: R ? new l.default({
      remote: o,
      fromMe: E,
      id: l.default.newId_DEPRECATED()
    }) : O
  };
  const D = (0, s.parseMsgProto)(I, N, t);
  const w = function (e) {
    e.streamingSidecar = null;
    e.mediaKey = null;
    e.mediaKeyTimestamp = null;
    return e;
  }((0, i.default)((0, i.default)({}, D), {}, {
    ack: a.ACK.SENT,
    isNewMsg: y,
    viewCount: A != null ? A : undefined,
    hasReaction: !!T,
    latestEditSenderTimestampMs: b,
    lastUpdateFromServerTs: M != null ? M : undefined
  }));
  if (R && w.subtype !== "poll_vote") {
    w.subtype = "admin_revoke";
    w.protocolMessageKey = O;
  } else if (!(0, c.isMsgTypeSupported)(D.type)) {
    w.type = u.MSG_TYPE.UNKNOWN;
    w.futureproofType = D.type;
    w.futureproofSubtype = D.subtype;
  }
  if (h === "edit") {
    return (0, d.mapMsgToEditProtocolMsg)(w, {
      latestEditSenderTimestampMs: b
    });
  } else {
    return w;
  }
}