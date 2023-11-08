var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SPAM_REPORT_MESSAGE_COUNT = undefined;
exports.getSpamMessageProtobuf = function (e) {
  var t;
  var n;
  if (((t = e.buttonsMessage) === null || t === undefined ? undefined : t.buttons) != null) {
    e.buttonsMessage = (0, a.default)((0, a.default)({}, e.buttonsMessage), {}, {
      buttons: e.buttonsMessage.buttons.map(e => {
        if (e.nativeFlowInfo) {
          var t;
          const n = JSON.parse((t = e.nativeFlowInfo.paramsJson) !== null && t !== undefined ? t : "{}");
          delete n.reference_id;
          delete n.total_amount;
          return (0, a.default)((0, a.default)({}, e), {}, {
            nativeFlowInfo: (0, a.default)((0, a.default)({}, e.nativeFlowInfo), {}, {
              paramsJson: JSON.stringify(n)
            })
          });
        }
        return e;
      })
    });
  }
  if (((n = e.messageContextInfo) === null || n === undefined ? undefined : n.messageSecret) != null) {
    e.messageContextInfo = (0, a.default)((0, a.default)({}, e.messageContextInfo), {}, {
      messageSecret: null
    });
  }
  return e;
};
exports.getTcTokenMixinArgs = D;
exports.loadMsgsForSpamReport = v;
exports.reportSpam = function () {
  return N.apply(this, arguments);
};
exports.reportStatus = function () {
  return T.apply(this, arguments);
};
exports.sendNotSpamJob = function (e) {
  if (e.isGroup && (0, g.callSilencingEnabled)()) {
    __LOG__(2)`[callp] acknowledging group ${e.id.toLogString()}`;
    (0, s.sendAcknowledgeGroupRPC)({
      iqTo: (0, E.widToGroupJid)(e.id)
    }).catch(() => {});
  }
  return (0, h.getChatTable)().merge(e.id.toString(), {
    notSpam: true
  }).catch(() => {
    __LOG__(4, true, new Error(), true)`get chat table merge failed`;
    SEND_LOGS("get chat table merge failed when sending spam report");
    throw (0, S.default)("get chat table merge failed");
  });
};
var i = r(require("../vendor/348926.js"));
var a = r(require("../vendor/81109.js"));
var o = require("./418987.js");
var s = require("./958808.js");
var l = require("./275819.js");
var u = require("./26598.js");
var c = require("./830343.js");
var d = require("./287461.js");
var p = require("./126506.js");
var f = require("./787742.js");
var _ = r(require("./951399.js"));
var g = require("./814843.js");
var m = require("./999916.js");
var h = require("./61229.js");
var y = require("./459857.js");
var E = require("./574819.js");
var S = r(require("./556869.js"));
function v(e, t, n) {
  const r = [];
  const i = e.msgs.toArray().reverse();
  for (let a = 0; a < i.length && !(r.length >= t); a++) {
    const t = i[a];
    if ((0, p.isSpamSupportedForMessageType)(t.type) && !t.from.equals((0, y.getMaybeMeUser)())) {
      if (n) {
        if (e.isGroup && !n.equals(t.author)) {
          continue;
        }
        if (e.isUser && !n.equals(t.from)) {
          continue;
        }
      }
      r.push(t);
    }
  }
  return r;
}
function T() {
  return (T = (0, i.default)(function* (e, t) {
    const n = (0, m.getMessageMixinArgs)(t);
    if (n == null) {
      throw (0, S.default)("report status failed due to unsupported msg type");
    }
    const r = (0, a.default)((0, a.default)({}, n), {}, {
      messageParticipantMixinArgs: {
        messageParticipant: (0, E.widToUserJid)((0, f.getSender)(t))
      }
    });
    const i = {
      spamListSpamFlow: e,
      spamListJid: o.STATUS_JID,
      messageFrom: o.STATUS_JID,
      messageRecipientMixinArgs: {
        messageTo: (0, E.widToUserJid)(t.to)
      },
      messageMixinArgs: r
    };
    const s = yield (0, c.sendStatusReportRPC)(i);
    switch (s.name) {
      case "StatusReportResponseError":
        {
          const e = parseInt(s.value.errorIQErrorInternalServerErrorOrBadRequestOrForbiddenOrRateOverlimitMixinGroup.value.code, 10);
          const t = s.value.errorIQErrorInternalServerErrorOrBadRequestOrForbiddenOrRateOverlimitMixinGroup.value.text;
          __LOG__(3)`reportStatus: server response with ${e}, ${t}`;
          return {
            errorCode: e,
            errorText: t
          };
        }
      default:
        s.name;
        return s.value;
    }
  })).apply(this, arguments);
}
function M() {
  return A.apply(this, arguments);
}
function A() {
  return (A = (0, i.default)(function* (e, t, n) {
    let r;
    const i = (0, m.getMessageMixinArgs)(t);
    if (i != null) {
      r = (0, a.default)({
        messageSenderOrRecipientMixinGroupArgs: {
          messageSender: {
            messageFrom: (0, E.widToUserJid)(t.from)
          }
        }
      }, i);
    }
    const o = {
      spamListSpamFlow: n,
      spamListJid: (0, E.widToUserJid)((0, f.getSender)(t)),
      messageArgs: r != null ? [r] : [],
      tCTokenMixinArgs: D(e)
    };
    const s = yield (0, u.sendIndividualReportRPC)(o);
    return (0, m.parseIndividualReportResponse)(s);
  })).apply(this, arguments);
}
function b() {
  return C.apply(this, arguments);
}
function C() {
  return (C = (0, i.default)(function* (e, t) {
    const n = {
      spamListJid: (0, E.widToGroupJid)(e.id),
      spamListSpamFlow: t,
      spamListSubject: e.formattedTitle
    };
    const r = yield (0, l.sendGroupReportRPC)(n);
    return (0, m.parseGroupReportResponse)(r);
  })).apply(this, arguments);
}
function P() {
  return O.apply(this, arguments);
}
function O() {
  return (O = (0, i.default)(function* (e, t, n) {
    let r = [];
    r = t != null ? [t] : v(e, 5, null);
    const i = [];
    let o;
    let s;
    r.forEach(t => {
      const n = (0, m.getMessageMixinArgs)(t);
      if (t.author) {
        s = (0, E.widToUserJid)(t.author);
      } else if (t.from.isUser()) {
        s = (0, E.widToUserJid)(t.from);
      }
      if (n != null) {
        o = (0, a.default)((0, a.default)({
          messageFrom: (0, E.widToGroupJid)(e.id)
        }, n), s != null && {
          messageParticipantMixinArgs: {
            messageParticipant: s
          }
        });
      }
      i.push(o);
    });
    const u = {
      spamListJid: (0, E.widToGroupJid)(e.id),
      spamListSpamFlow: n,
      spamListSubject: e.formattedTitle,
      messageArgs: i
    };
    const c = yield (0, l.sendGroupReportRPC)(u);
    return (0, m.parseGroupReportResponse)(c);
  })).apply(this, arguments);
}
function I() {
  return R.apply(this, arguments);
}
function R() {
  return (R = (0, i.default)(function* (e, t, n) {
    let r = [];
    r = t != null ? [t] : v(e, 5, e.id);
    const i = [];
    let o;
    r.forEach(e => {
      const t = (0, m.getMessageMixinArgs)(e);
      if (t != null) {
        o = (0, a.default)({
          messageSenderOrRecipientMixinGroupArgs: {
            messageSender: {
              messageFrom: (0, E.widToUserJid)(e.from)
            }
          }
        }, t);
      }
      i.push(o);
    });
    const s = {
      spamListSpamFlow: n,
      messageArgs: i,
      tCTokenMixinArgs: D(e)
    };
    const l = yield (0, u.sendIndividualReportRPC)(s);
    return (0, m.parseIndividualReportResponse)(l);
  })).apply(this, arguments);
}
function N() {
  return (N = (0, i.default)(function* (e, t, n) {
    let r;
    r = e.isNewsletter ? yield _.default === null || _.default === undefined ? undefined : (0, _.default)(e, n, t) : n == null || e.isGroup ? e.isParentGroup === true ? yield b(e, t) : e.isGroup ? yield P(e, n, t) : yield I(e, n, t) : yield M(e, n, t);
    return r;
  })).apply(this, arguments);
}
function D(e) {
  let t;
  const {
    tcToken: n,
    tcTokenTimestamp: r
  } = e;
  if ((0, d.getABPropConfigValue)("enable_spam_report_iq_with_privacy_token") && n != null) {
    t = (0, d.getABPropConfigValue)("enable_privacy_token_with_timestamp") && r != null ? {
      tctokenT: r,
      privacyTokenContentsMixinArgs: {
        anyElementValue: new Uint8Array(n)
      }
    } : {
      privacyTokenContentsMixinArgs: {
        anyElementValue: new Uint8Array(n)
      }
    };
  }
  return t;
}
exports.SPAM_REPORT_MESSAGE_COUNT = 5;