var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addAndSendMessageEdit = W;
exports.createEditMsgData = B;
exports.resendLatestEdit = function (e) {
  const t = (0, T.getLatestEditMsgKey)(e);
  if (t == null || !(0, S.canEditText)(e)) {
    return Promise.resolve();
  }
  return (0, c.getMsgByMsgKey)(t).then(t => {
    if (t) {
      return Y((0, D.unproxy)(e), (0, b.msgModelFromMsgData)(t));
    }
  }).catch(() => {});
};
exports.sendMessageEdit = function (e, t, n) {
  if ((0, T.getIsNewsletterMsg)(e) ? !(0, P.isNewsletterMessageEditingEnabled)() : !(0, g.sendTextEditEnabled)()) {
    return Promise.resolve();
  }
  if (!(0, S.canEditText)(e) && !(0, S.canEditCaption)(e)) {
    return Promise.reject((0, k.default)("Cannot edit message"));
  }
  const r = B((0, D.unproxy)(e), t, n);
  return W((0, D.unproxy)(e), r);
};
exports.sendMsgEditRecord = Y;
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./775593.js");
var s = r(require("./670983.js"));
var l = require("./632157.js");
var u = require("./384766.js");
var c = require("./817690.js");
var d = require("./891244.js");
var p = require("./767777.js");
var f = require("./163755.js");
var _ = require("./226430.js");
var g = require("./483460.js");
var m = require("./591988.js");
var h = require("./566509.js");
var y = require("./141797.js");
var E = require("./420213.js");
var S = require("./939716.js");
var v = require("./678794.js");
var T = require("./787742.js");
var M = r(require("./565754.js"));
var A = require("./772358.js");
var b = require("./692544.js");
var C = require("./373070.js");
var P = require("./73225.js");
var O = require("./899137.js");
var I = require("./600240.js");
var R = require("./387183.js");
var N = require("./693741.js");
var D = require("./163139.js");
var w = require("./459857.js");
var L = require("./669050.js");
var k = r(require("./556869.js"));
function G(e, t, n) {
  if ((0, m.isParentWithinEditProcessingWindow)({
    parentTsInSeconds: e.t,
    editTsInSeconds: n,
    msgKey: e.id
  })) {
    t.updateErrorCode(p.SendFailureErrorCode.NoError);
  } else {
    e.updateErrorCode(p.SendFailureErrorCode.EditWindowExpired);
    t.updateErrorCode(p.SendFailureErrorCode.EditWindowExpired);
  }
}
function U() {
  return x.apply(this, arguments);
}
function x() {
  return (x = (0, a.default)(function* (e, t) {
    if (t != null) {
      yield (0, d.updateMessageTable)(e.id, {
        count: t
      });
    }
  })).apply(this, arguments);
}
function B(e, t, n) {
  var r;
  var a;
  var o;
  var u;
  var c;
  var d;
  var _;
  const g = (0, f.getChat)(e);
  const h = g.id.isLid() || g.isGroup && Boolean((r = g.groupMetadata) === null || r === undefined ? undefined : r.isLidAddressingMode) ? (0, s.default)((0, w.getMaybeMeLidUser)(), "getMaybeMeLidUser()") : (0, w.getMeUser)();
  const y = g.isGroup ? (0, L.toUserWid)(h) : undefined;
  const E = new M.default({
    id: M.default.newId_DEPRECATED(),
    remote: e.id.remote,
    fromMe: true,
    participant: y
  });
  const {
    linkPreview: S,
    mentionedJidList: v,
    groupMentions: T
  } = n;
  let A = {
    id: E,
    from: h,
    to: e.id.remote,
    type: C.MSG_TYPE.PROTOCOL,
    subtype: "message_edit",
    protocolMessageKey: e.id,
    local: true,
    t: (0, l.unixTime)(),
    mentionedJidList: v,
    groupMentions: T,
    latestEditMsgKey: E,
    latestEditSenderTimestampMs: (0, l.unixTimeMs)(),
    editMsgType: e.type,
    errorCode: p.SendFailureErrorCode.NoError
  };
  switch ((0, s.default)((0, m.getMsgEditType)(e.type), "getMsgEditType(msg.type)")) {
    case m.MsgEditType.TextEdit:
      A = (0, i.default)((0, i.default)({}, A), {}, {
        body: t.trim(),
        title: (a = S == null ? undefined : S.title) !== null && a !== undefined ? a : undefined,
        canonicalUrl: (o = S == null ? undefined : S.canonicalUrl) !== null && o !== undefined ? o : undefined,
        matchedText: (u = S == null ? undefined : S.matchedText) !== null && u !== undefined ? u : undefined,
        description: S == null ? undefined : S.description,
        thumbnail: (c = S == null ? undefined : S.thumbnail) !== null && c !== undefined ? c : undefined,
        richPreviewType: S == null ? undefined : S.richPreviewType,
        doNotPlayInline: S == null ? undefined : S.doNotPlayInline,
        inviteGrpType: S == null ? undefined : S.inviteGrpType,
        thumbnailDirectPath: S == null ? undefined : S.thumbnailDirectPath,
        thumbnailSha256: S == null ? undefined : S.thumbnailSha256,
        thumbnailEncSha256: S == null ? undefined : S.thumbnailEncSha256,
        thumbnailHeight: S == null ? undefined : S.thumbnailHeight,
        thumbnailWidth: S == null ? undefined : S.thumbnailWidth,
        mediaKey: (d = S == null ? undefined : S.mediaKey) !== null && d !== undefined ? d : undefined,
        mediaKeyTimestamp: (_ = S == null ? undefined : S.mediaKeyTimestamp) !== null && _ !== undefined ? _ : undefined
      });
      break;
    case m.MsgEditType.CaptionEdit:
      A = (0, i.default)((0, i.default)({}, A), {}, {
        caption: t.trim()
      });
  }
  return A;
}
function F() {
  return j.apply(this, arguments);
}
function j() {
  return (j = (0, a.default)(function* (e, t, n, r) {
    if (e.latestEditMsgKey) {
      yield (0, u.removeMessagesFromHistory)([e.latestEditMsgKey.toString()]);
    }
    try {
      r.startSavedStage();
      yield (0, E.storeMessages)([t], n);
      r.postSavedStage();
    } catch (e) {
      __LOG__(4, true, new Error(), true)`[message-edit][sendMessageEdit] failed to store protocol msg data in message table`;
      SEND_LOGS("storeSentMessageEdit failed");
      throw e;
    }
    r.startRenderedStage();
    yield (0, I.processEditProtocolMsgsJob)([t]);
    r.postRenderedStage();
  })).apply(this, arguments);
}
function Y() {
  return K.apply(this, arguments);
}
function K() {
  return (K = (0, a.default)(function* (e, t) {
    const {
      messageSendResult: r,
      t: i,
      count: a
    } = (0, T.getIsNewsletterMsg)(e) ? yield require("./12074.js").sendNewsletterEditMsg(e, t) : yield (0, R.sendMsgRecord)(t);
    if (r === N.SendMsgResult.OK) {
      G(e, t, i);
      yield U(e, a);
      e.updateAck(t.ack);
      e.isSendFailure = t.isSendFailure === true || t.errorCode === p.SendFailureErrorCode.EditWindowExpired;
    }
  })).apply(this, arguments);
}
function W() {
  return V.apply(this, arguments);
}
function V() {
  return (V = (0, a.default)(function* (e, t) {
    const n = new A.Msg(t);
    let r;
    if (e.to.isGroup()) {
      const t = e.to.toString();
      const n = yield (0, _.getParticipantRecord)(t);
      r = yield (0, _.getGroupData)(t, n, false);
    }
    n.wamMessageSendReporter = new y.MessageSendReporter(n, {
      originalMessage: e,
      groupData: r
    });
    n.wamMessageSendPerfReporter = new h.MessageSendPerfReporter({
      chatWid: n.to,
      mediaType: n.getWamMediaType(),
      messageType: n.getWamMessageType()
    });
    const {
      wamMessageSendPerfReporter: i
    } = n;
    yield (0, O.createNonPersistedJob)("sendMessageEdit", function () {
      var r = (0, a.default)(function* (r) {
        let {
          msgData: a,
          chatId: o
        } = r;
        yield F(a, t, o, i);
        yield Y(e, n);
      });
      return function () {
        return r.apply(this, arguments);
      };
    }(), {
      priority: o.JOB_PRIORITY.UI_ACTION
    }).waitUntilCompleted({
      msgData: (0, v.msgDataFromMsgModel)(e),
      chatId: (0, f.getChat)(e).id
    });
  })).apply(this, arguments);
}