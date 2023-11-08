var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._postIncomingMessageDropFromDecryptedMessageInfo = A;
exports.maybePostIncomingMessageDropOldCounter = function () {
  return P.apply(this, arguments);
};
exports.postIncomingMessageDropDBOperationFailed = function (e) {
  M({
    messageDropReason: E.MESSAGE_DROP_REASON_TYPE.DB_OPERATION_FAILED,
    stanza: e
  });
};
exports.postIncomingMessageDropDBOperationFailedForMsgRows = function (e) {
  for (const t of e) {
    const e = (0, u.messageFromDbRow)(t);
    const n = new f.IncomingMessageDropWamEvent({
      messageDropReason: E.MESSAGE_DROP_REASON_TYPE.DB_OPERATION_FAILED,
      messageMediaType: (0, v.getWamMediaType)(e)
    });
    const r = (0, g.getTo)(e);
    const i = (0, g.getFrom)(e);
    if (r != null && i != null) {
      if (r.isStatusV3()) {
        n.e2eDestination = y.E2E_DESTINATION.STATUS;
      } else if ((0, g.getBroadcastId)(e) != null) {
        n.e2eDestination = y.E2E_DESTINATION.LIST;
      } else if (i.isGroup()) {
        n.e2eDestination = y.E2E_DESTINATION.GROUP;
      } else if (i.isUser()) {
        n.e2eDestination = y.E2E_DESTINATION.INDIVIDUAL;
      }
    }
    n.commit();
  }
};
exports.postIncomingMessageDropInternalError = function (e) {
  M({
    messageDropReason: E.MESSAGE_DROP_REASON_TYPE.INTERNAL_ERROR,
    stanza: e
  });
};
exports.postIncomingMessageDropInvalidProtobuf = function (e) {
  A(e, E.MESSAGE_DROP_REASON_TYPE.INVALID_PROTOBUF);
};
exports.postIncomingMessageDropInvalidStanza = function (e) {
  M({
    messageDropReason: E.MESSAGE_DROP_REASON_TYPE.INVALID_STANZA,
    stanza: e
  });
};
exports.postIncomingMessageDropOldCounter = O;
exports.postIncomingMessageDropUnknownMessageType = function (e) {
  M({
    messageDropReason: E.MESSAGE_DROP_REASON_TYPE.UNKNOWN_MESSAGE_TYPE,
    stanza: e
  });
};
var i = r(require("../vendor/348926.js"));
var a = require("./347387.js");
var o = require("./402994.js");
var s = require("./303754.js");
var l = require("./973776.js");
var u = require("./907539.js");
var c = require("./817690.js");
var d = r(require("./797137.js"));
var p = require("./883310.js");
var f = require("./651785.js");
var _ = require("./854379.js");
var g = require("./787742.js");
var m = require("./267420.js");
var h = require("./800277.js");
var y = require("./555678.js");
var E = require("./271791.js");
var S = require("./564066.js");
var v = require("./816793.js");
const T = new a.WapParser("incomingMsgParserForMetric", e => {
  const t = {};
  try {
    t.type = e.attrEnum("type", p.STANZA_MSG_TYPES);
  } catch (e) {}
  try {
    t.pollType = t.type === p.STANZA_MSG_TYPES.poll ? e.child("meta").attrEnumOrNullIfUnknown("polltype", p.POLL_TYPES) : null;
  } catch (e) {}
  try {
    var n;
    var r;
    t.from = (0, _.jidWithTypeToWid)(e.attrJidWithType("from"));
    if ((n = t.from) === null || n === undefined ? undefined : n.isUser()) {
      t.author = t.from;
    } else if ((r = t.from) === null || r === undefined ? undefined : r.isGroup()) {
      t.author = e.hasAttr("participant") ? (0, _.deviceJidToDeviceWid)(e.attrDeviceJid("participant")) : null;
    }
  } catch (e) {}
  try {
    t.offline = e.attrString("offline") !== "";
  } catch (e) {}
  try {
    t.edit = e.attrInt("edit");
  } catch (e) {}
  const i = e.maybeChild("enc");
  if (i != null) {
    try {
      t.e2eType = i.attrEnumValues("type", s.CiphertextType.members());
    } catch (e) {}
    try {
      t.encMediaType = s.EncMediaType.cast(i.maybeAttrString("mediatype"));
    } catch (e) {}
    try {
      t.retryCount = i.attrInt("count");
    } catch (e) {}
  }
  return t;
});
function M(e) {
  var t;
  var n;
  var r;
  var i;
  var a;
  var s;
  var u;
  var c;
  var d;
  var p;
  var _;
  var g;
  var m;
  let {
    messageDropReason: y,
    stanza: E
  } = e;
  let M = null;
  try {
    M = T.parse(E).success;
  } catch (e) {}
  const A = new f.IncomingMessageDropWamEvent({
    messageDropReason: y,
    offline: (t = (n = M) === null || n === undefined ? undefined : n.offline) !== null && t !== undefined && t,
    messageMediaType: (0, l.getMetricMediaType)({
      encMediaType: (r = M) === null || r === undefined ? undefined : r.encMediaType,
      msgType: (i = M) === null || i === undefined ? undefined : i.type,
      msgPollType: (a = M) === null || a === undefined ? undefined : a.pollType
    })
  });
  if (((s = M) === null || s === undefined ? undefined : s.from) != null) {
    const e = (0, l.getMetricE2eDestination)(M.from);
    if (e != null) {
      A.e2eDestination = e;
    }
  }
  if (((u = M) === null || u === undefined ? undefined : u.author) != null) {
    const e = (0, v.getWamE2eSenderType)(M.author);
    if (e != null) {
      A.e2eSenderType = e;
    }
  }
  var b;
  var C;
  var P;
  var O;
  if (((c = M) === null || c === undefined ? undefined : c.e2eType) != null) {
    A.e2eCiphertextType = (0, l.getMetricE2eCiphertextType)(M.e2eType);
  }
  if (((d = M) === null || d === undefined ? undefined : d.retryCount) != null) {
    A.retryCount = M.retryCount;
  }
  if (((p = M) === null || p === undefined ? undefined : p.edit) === o.EDIT_ATTR.ADMIN_REVOKE) {
    A.revokeType = S.REVOKE_TYPE.ADMIN;
  } else if (((_ = M) === null || _ === undefined ? undefined : _.edit) === o.EDIT_ATTR.SENDER_REVOKE) {
    A.revokeType = S.REVOKE_TYPE.SENDER;
  }
  if (((g = M) === null || g === undefined ? undefined : g.from) != null && ((m = M) === null || m === undefined ? undefined : m.author) != null) {
    if (((b = M) === null || b === undefined || (C = b.author) === null || C === undefined ? undefined : C.isBot()) === true) {
      if (((P = M) === null || P === undefined || (O = P.from) === null || O === undefined ? undefined : O.isBot()) === true) {
        A.agentEngagementType = h.AGENT_ENGAGEMENT_ENUM_TYPE.DIRECT_CHAT;
      } else {
        A.agentEngagementType = h.AGENT_ENGAGEMENT_ENUM_TYPE.INVOKED;
      }
    }
  }
  A.commit();
}
function A(e, t) {
  let {
    msgInfo: n,
    msgMeta: r,
    enc: i,
    error: a
  } = e;
  const s = new f.IncomingMessageDropWamEvent({
    messageDropReason: t,
    e2eCiphertextType: (0, l.getMetricE2eCiphertextType)(i.e2eType),
    messageMediaType: (0, l.getMetricMediaType)({
      encMediaType: i.encMediaType,
      msgType: r.type,
      msgPollType: r.pollType
    }),
    retryCount: i.retryCount,
    offline: n.offline != null,
    e2eFailureReason: a == null ? undefined : a.e2eFailureReason
  });
  const u = (0, m.getFrom)(n);
  const c = (0, l.getMetricE2eDestination)(u);
  if (c) {
    s.e2eDestination = c;
  }
  if (u) {
    const e = (0, v.getWamE2eSenderType)(u);
    if (e != null) {
      s.e2eSenderType = e;
    }
  }
  if (n.edit === o.EDIT_ATTR.ADMIN_REVOKE) {
    s.revokeType = S.REVOKE_TYPE.ADMIN;
  } else if (n.edit === o.EDIT_ATTR.SENDER_REVOKE) {
    s.revokeType = S.REVOKE_TYPE.SENDER;
  }
  s.commit();
}
let b = null;
let C = [];
function P() {
  return (P = (0, i.default)(function* (e) {
    if (!(e.msgMeta.type === p.STANZA_MSG_TYPES.text || e.msgMeta.type === p.STANZA_MSG_TYPES.poll || e.msgMeta.type === p.STANZA_MSG_TYPES.media) || e.enc.hideFail) {
      return void __LOG__(2)`maybePostIncomingMessageDropOldCounter: skip for not a regular message: ${e.msgInfo.externalId}`;
    }
    __LOG__(2)`maybePostIncomingMessageDropOldCounter: schedule check for: ${e.msgInfo.externalId}`;
    C.push(e);
    if (b) {
      return void __LOG__(2)`maybePostIncomingMessageDropOldCounter: ${C.length} message(s) are waiting for offline resume`;
    }
    b = (0, d.default)().then(() => {});
    yield b;
    b = null;
    const t = C;
    C = [];
    const n = t.map(e => {
      let {
        msgInfo: t
      } = e;
      return (0, m.messageInfoToKey)(t).toString();
    });
    const r = yield (0, c.getMsgsExistByMsgKey)(n);
    for (let e = 0; e < t.length; e++) {
      const n = t[e];
      const i = n.msgInfo.externalId;
      if (r[e]) {
        __LOG__(2)`maybePostIncomingMessageDropOldCounter: skip, message exists in the db: ${i}`;
      } else {
        __LOG__(2)`maybePostIncomingMessageDropOldCounter: post for: ${i}`;
        O(n);
      }
    }
  })).apply(this, arguments);
}
function O(e) {
  A(e, E.MESSAGE_DROP_REASON_TYPE.RECEIVED_WITH_OLD_COUNTER);
}