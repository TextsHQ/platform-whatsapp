var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resendNewsletterMsg = function (e) {
  const t = (0, l.getChat)(e);
  const n = (0, d.msgDataFromMsgModel)(e);
  if ((0, l.getAsMms)(e)) {
    return Promise.resolve();
  }
  return O({
    chat: t,
    msgData: n,
    msg: e,
    type: "text"
  });
};
exports.sendNewsletterEditMsg = function () {
  return C.apply(this, arguments);
};
exports.sendNewsletterMediaMsg = function (e, t, n) {
  if (!e.isNewsletter) {
    return Promise.reject(new _.UnexpectedNonNewsletterChatError());
  }
  const [r, i] = t instanceof f.Msg ? [t, (0, d.msgDataFromMsgModel)(t)] : [new f.Msg(t), t];
  r.local = true;
  return O({
    chat: e,
    msgData: i,
    msg: r,
    type: "media",
    uploadMediaMsg: n
  });
};
exports.sendNewsletterPollCreationMsg = function () {
  return P.apply(this, arguments);
};
exports.sendNewsletterTextMsg = function () {
  return A.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./29797.js");
var o = r(require("./670983.js"));
var s = require("./52045.js");
var l = require("./163755.js");
var u = require("./566509.js");
var c = require("./141797.js");
var d = require("./678794.js");
var p = require("./787742.js");
var f = require("./772358.js");
var _ = require("./287256.js");
var g = require("./73225.js");
var m = require("./397995.js");
var h = require("./251309.js");
var y = require("./263318.js");
var E = require("./693741.js");
var S = require("./498703.js");
var v = require("./163139.js");
var T = require("./804974.js");
var M = r(require("./556869.js"));
function A() {
  return (A = (0, i.default)(function* (e, t, n) {
    const r = (0, v.unproxy)(e);
    if (!r.isNewsletter) {
      throw new _.UnexpectedNonNewsletterChatError();
    }
    const i = yield (0, S.createTextMsgData)(r, t, n);
    if (i == null) {
      throw (0, M.default)("Failed to generate MsgData");
    }
    return O({
      chat: r,
      msgData: i,
      msg: new f.Msg(i),
      type: "text"
    });
  })).apply(this, arguments);
}
function b(e) {
  e.wamMessageSendReporter = new c.MessageSendReporter(e);
  e.wamMessageSendPerfReporter = new u.MessageSendPerfReporter({
    chatWid: e.to,
    mediaType: e.getWamMediaType(),
    messageType: e.getWamMessageType()
  });
}
function C() {
  return (C = (0, i.default)(function* (e, t) {
    try {
      const {
        editedMsgData: n
      } = (0, s.generateMessageEdit)((0, d.msgDataFromMsgModel)(e), (0, d.msgDataFromMsgModel)(t));
      e.set(n);
      const r = yield (0, m.sendNewsletterMessageJob)({
        type: "edit",
        editType: (0, p.getIsMedia)(e) ? "media" : "text",
        mediaMetadata: (0, p.getIsMedia)(e) ? e.avParams() : undefined,
        msgData: (0, d.msgDataFromMsgModel)(e),
        newsletterJid: (0, y.toNewsletterJidOrThrow)(e.id.remote.toJid())
      });
      t.updateAck(a.ACK.SENT);
      return {
        t: r.ack.t,
        messageSendResult: r.success === true ? E.SendMsgResult.OK : E.SendMsgResult.ERROR_NETWORK
      };
    } catch (e) {
      __LOG__(4, undefined, new Error(), true, ["newsletter"])`[newsletter] Failed to edit message`;
      SEND_LOGS("newsletter-edit-fail", 1, "newsletter");
      return {
        messageSendResult: E.SendMsgResult.ERROR_UNKNOWN
      };
    }
  })).apply(this, arguments);
}
function P() {
  return (P = (0, i.default)(function* (e) {
    let {
      msgData: t,
      chat: n
    } = e;
    if (!(0, g.isNewsletterPollsCreationEnabled)()) {
      __LOG__(4, undefined, new Error(), true, ["newsletter"])`[newsletter] Poll creation is not enabled`;
      SEND_LOGS("poll-creation-not-enabled", 1, "newsletter");
      throw (0, M.default)("Poll creation is not enabled");
    }
    const r = new f.Msg(t);
    return [r, yield O({
      chat: n,
      msgData: t,
      msg: r,
      type: "pollCreation"
    })];
  })).apply(this, arguments);
}
function O() {
  return I.apply(this, arguments);
}
function I() {
  return (I = (0, i.default)(function* (e) {
    var t;
    var n;
    const {
      chat: r,
      msgData: s,
      type: l,
      uploadMediaMsg: u
    } = e;
    let {
      msg: c
    } = e;
    b(c);
    if (!((t = c.wamMessageSendPerfReporter) === null || t === undefined)) {
      t.startRenderedStage();
    }
    yield r.addQueue.enqueue(Promise.resolve(c)).then(function () {
      var e = (0, i.default)(function* (e) {
        yield (0, h.addNewsletterMsgsRecords)([(0, d.msgDataFromMsgModel)(c)]);
        r.msgs.add(e);
        r.t = c.t;
      });
      return function () {
        return e.apply(this, arguments);
      };
    }());
    if (!((n = c.wamMessageSendPerfReporter) === null || n === undefined)) {
      n.postRenderedStage();
    }
    try {
      var p;
      var f;
      var g;
      var S;
      try {
        if (u != null) {
          c = yield u(c);
        }
      } catch (e) {
        throw new _.NewsletterMediaUploadError();
      }
      if (!((p = c.wamMessageSendPerfReporter) === null || p === undefined)) {
        p.startReadyToSendStage();
      }
      const e = (0, y.toNewsletterJidOrThrow)(r.id.toJid());
      const t = l === "media" ? {
        msgData: s,
        type: l,
        newsletterJid: e,
        mediaMetadata: c.avParams(),
        mediaHandle: (0, o.default)(c.mediaHandle, "Unexpected null mediaHandle")
      } : {
        msgData: s,
        type: l,
        newsletterJid: e
      };
      if (!((f = c.wamMessageSendPerfReporter) === null || f === undefined)) {
        f.postReadyToSendStage();
      }
      if (!((g = c.wamMessageSendPerfReporter) === null || g === undefined)) {
        g.startWrittenWireStage();
      }
      const n = yield r.sendQueue.enqueue((0, m.sendNewsletterMessageJob)(t));
      if (!((S = c.wamMessageSendPerfReporter) === null || S === undefined)) {
        S.postWrittenWireStage();
      }
      switch (n.success) {
        case true:
          {
            var v;
            const {
              serverId: e
            } = n;
            if (e == null) {
              throw new _.MissingNewsletterServerIdError();
            }
            c.serverId = n.serverId;
            c.t = n.ack.t;
            c.updateAck(a.ACK.SENT, true);
            try {
              var M;
              var A;
              if (!((M = c.wamMessageSendPerfReporter) === null || M === undefined)) {
                M.startSavedStage();
              }
              yield (0, h.updateNewsletterMsgRecord)(c);
              if (!((A = c.wamMessageSendPerfReporter) === null || A === undefined)) {
                A.postSavedStage();
              }
            } catch (e) {
              __LOG__(4, undefined, new Error(), true, ["newsletter"])`[newsletter] Failed to persist sent message on db`;
              SEND_LOGS("newsletter-send-message-db-fail", 1, "newsletter");
            }
            if (!((v = c.wamMessageSendReporter) === null || v === undefined)) {
              v.postSuccess();
            }
            return {
              messageSendResult: E.SendMsgResult.OK
            };
          }
        case false:
          var C;
          __LOG__(4, undefined, new Error(), true, ["newsletter"])`[newsletter] Failed to send message, ${n.ack.error} from server`;
          SEND_LOGS("newsletter-send-message-fail-server", 1, "newsletter");
          c.updateAck(a.ACK.FAILED, true);
          if (!((C = c.wamMessageSendReporter) === null || C === undefined)) {
            C.postFailure({
              result: T.MESSAGE_SEND_RESULT_TYPE.ERROR_NETWORK,
              isTerminal: false
            });
          }
          return {
            messageSendResult: E.SendMsgResult.ERROR_NETWORK
          };
      }
    } catch (e) {
      var P;
      if (e instanceof _.MissingNewsletterServerIdError) {
        __LOG__(4, undefined, new Error(), true, ["newsletter"])`[newsletter] Empty serverId returned from server`;
        SEND_LOGS("newsletter-empty-server-id", 1, "newsletter");
      } else {
        __LOG__(3, undefined, undefined, undefined, ["newsletter"])`[newsletter] Failed to send message`;
      }
      c.updateAck(a.ACK.FAILED, true);
      if (!((P = c.wamMessageSendReporter) === null || P === undefined)) {
        P.postFailure({
          result: e instanceof _.NewsletterMediaUploadError ? T.MESSAGE_SEND_RESULT_TYPE.ERROR_UPLOAD : T.MESSAGE_SEND_RESULT_TYPE.ERROR_UNKNOWN,
          isTerminal: false
        });
      }
      if (e instanceof _.NewsletterMediaUploadError) {
        return {
          messageSendResult: E.SendMsgResult.ERROR_UPLOAD
        };
      } else {
        return {
          messageSendResult: E.SendMsgResult.ERROR_UNKNOWN
        };
      }
    } finally {
      c.wamMessageSendReporter = null;
      c.wamMessageSendPerfReporter = null;
    }
  })).apply(this, arguments);
}